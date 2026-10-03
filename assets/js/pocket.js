/* Off-market registration form → Supabase (insert-only table, publishable key).
   No dependencies. Validates in the browser, but the database constraints are
   the real gate: email shape, phone digit count and field lengths are enforced
   server-side too. */
(function () {
  'use strict'

  var cfg = window.__pocket
  var form = document.getElementById('pocketForm')
  var done = document.getElementById('pfDone')
  var errBox = document.getElementById('pfError')
  if (!cfg || !form) return

  var btn = form.querySelector('.pf-submit')

  function fail(msg) {
    errBox.textContent = msg
    errBox.hidden = false
    btn.disabled = false
    btn.textContent = 'Get on the list'
  }

  function digits(s) { return (s || '').replace(/\D/g, '') }

  form.addEventListener('submit', async function (e) {
    e.preventDefault()
    errBox.hidden = true
    var f = new FormData(form)

    // Spam trap — silently pretend it worked.
    if ((f.get('company') || '').trim()) {
      form.hidden = true
      done.hidden = false
      return
    }

    var first = (f.get('first_name') || '').trim()
    var email = (f.get('email') || '').trim()
    var phone = (f.get('phone') || '').trim()

    if (!first) return fail('Please add your first name.')
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return fail('That email address does not look right.')
    if (digits(phone).length < 10) return fail('Please enter a phone number with area code — it is how George reaches you.')
    if (!f.get('agreement_ack')) return fail('Please acknowledge the buyer representation agreement step.')

    var sms = !!f.get('sms_consent')
    var consentText = cfg.ack + (sms ? ' | ' + cfg.sms : '')

    var row = {
      first_name: first,
      last_name: (f.get('last_name') || '').trim() || null,
      email: email,
      phone: phone,
      areas: (f.get('areas') || '').trim() || null,
      price_max: f.get('price_max') ? Number(f.get('price_max')) : null,
      timeline: f.get('timeline') || null,
      financing: f.get('financing') || null,
      notes: (f.get('notes') || '').trim() || null,
      sms_consent: sms,
      consent_text: consentText,
      consent_at: new Date().toISOString(),
      source: 'website:pocket',
      page_path: location.pathname,
      referrer: (document.referrer || '').slice(0, 500) || null,
      user_agent: navigator.userAgent.slice(0, 500)
    }

    btn.disabled = true
    btn.textContent = 'Sending…'

    try {
      var res = await fetch(cfg.url + '/rest/v1/' + cfg.table, {
        method: 'POST',
        headers: {
          'apikey': cfg.key,
          'Authorization': 'Bearer ' + cfg.key,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(row)
      })

      if (res.status === 201 || res.status === 204) {
        form.hidden = true
        done.hidden = false
        done.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      var body = await res.text()
      // Already registered with this email — that is a success, not an error.
      if (res.status === 409 || /duplicate key/i.test(body)) {
        form.hidden = true
        done.hidden = false
        done.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      fail('That did not send. Call or text George at 541-870-8378 and he will add you himself.')
    } catch (err) {
      fail('That did not send — you may be offline. Call or text George at 541-870-8378 and he will add you himself.')
    }
  })
})()
