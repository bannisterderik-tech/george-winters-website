/* Lead forms (form.lead-form) → George's Follow Up Boss, through the
   george-fub-lead function. No dependencies. The form's data-lead says which
   kind it is; the function turns that into the right FUB lead type. */
(function () {
  'use strict'

  var PHONE = '541-870-8378'

  function digits(s) { return (s || '').replace(/\D/g, '') }

  document.querySelectorAll('form.lead-form').forEach(function (form) {
    var shownAt = Date.now()
    var btn = form.querySelector('.pf-submit')
    var label = btn.textContent
    var errBox = form.querySelector('.pf-error')
    var done = form.nextElementSibling

    function fail(msg) {
      errBox.textContent = msg
      errBox.hidden = false
      btn.disabled = false
      btn.textContent = label
    }

    function finish() {
      // A guide form is a trade: they gave an address, they get the file now.
      // The done panel keeps a button for browsers that block the new tab.
      if (form.dataset.guideFile) { try { window.open(form.dataset.guideFile, '_blank', 'noopener') } catch (err) {} }
      form.hidden = true
      done.hidden = false
      done.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    form.addEventListener('submit', async function (e) {
      e.preventDefault()
      errBox.hidden = true
      var f = new FormData(form)
      var v = function (k) { return (f.get(k) || '').toString().trim() }

      // Spam: a filled trap, or a submit faster than a person can type.
      // Pretend it worked and send nothing.
      if (v('company') || Date.now() - shownAt < 3000) return finish()

      var email = v('email')
      var phone = v('phone')
      if (!v('first_name')) return fail('Please add your first name.')
      if (form.dataset.lead === 'guide' && !email) return fail('Please add your email so the guide has somewhere to go.')
      if (!email && !phone) return fail('Please leave an email or a phone number so George can reach you.')
      if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return fail('That email address does not look right.')
      if (phone && digits(phone).length < 10) return fail('Please enter the phone number with its area code.')
      if (form.querySelector('[name="property_address"]') && !v('property_address')) return fail('Please add the property address.')

      var sms = !!f.get('sms_consent')
      var payload = { form: form.dataset.lead }
      f.forEach(function (val, key) {
        if (key === 'company' || key === 'sms_consent') return
        val = val.toString().trim()
        if (val) payload[key] = val
      })
      payload.sms_consent = sms
      if (sms) {
        payload.consent_text = form.querySelector('[name="sms_consent"]').parentNode.textContent.replace(/\s+/g, ' ').trim()
        payload.consent_at = new Date().toISOString()
      }
      payload.page_path = location.pathname
      payload.referrer = (document.referrer || '').slice(0, 500) || null

      btn.disabled = true
      btn.textContent = 'Sending…'
      try {
        var res = await fetch(form.dataset.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
        if (res.ok) return finish()
        fail('That did not send. Call or text George at ' + PHONE + ' and he will take it from there.')
      } catch (err) {
        fail('That did not send — you may be offline. Call or text George at ' + PHONE + '.')
      }
    })
  })
})()
