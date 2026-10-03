/* Listing page behaviour: photo lightbox, payment math, click-to-load map.
   Vanilla, no dependencies, and every piece is optional — a page without a
   gallery or a price simply skips that block. */
(function () {
  'use strict'

  // ── Lightbox ──────────────────────────────────────────────────────────────
  var photos = window.__photos || []
  var box = document.getElementById('lightbox')
  if (box && photos.length) {
    var img = document.getElementById('lbImg')
    var cap = document.getElementById('lbCap')
    var i = 0
    var lastFocus = null

    function show(n) {
      i = (n + photos.length) % photos.length
      img.src = photos[i].src
      img.alt = 'Photo ' + (i + 1) + ' of ' + photos.length
      cap.textContent = photos[i].cap || ''
      cap.hidden = !photos[i].cap
    }
    function open(n) {
      lastFocus = document.activeElement
      show(n)
      box.hidden = false
      document.body.style.overflow = 'hidden'
      box.querySelector('.lb-close').focus()
    }
    function close() {
      box.hidden = true
      document.body.style.overflow = ''
      if (lastFocus) lastFocus.focus()
    }

    document.querySelectorAll('.gal-item').forEach(function (el) {
      el.addEventListener('click', function () { open(parseInt(el.dataset.i, 10)) })
    })
    var heroImg = document.querySelector('.lh-photo img')
    if (heroImg) {
      heroImg.style.cursor = 'zoom-in'
      heroImg.addEventListener('click', function () { open(0) })
    }
    box.querySelector('.lb-close').addEventListener('click', close)
    box.querySelector('.lb-prev').addEventListener('click', function () { show(i - 1) })
    box.querySelector('.lb-next').addEventListener('click', function () { show(i + 1) })
    box.addEventListener('click', function (e) { if (e.target === box) close() })
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') show(i - 1)
      if (e.key === 'ArrowRight') show(i + 1)
    })
  }

  // ── Payment estimate: principal and interest only ─────────────────────────
  var calc = document.querySelector('.calc')
  if (calc) {
    var price = document.getElementById('cPrice')
    var down = document.getElementById('cDown')
    var rate = document.getElementById('cRate')
    var term = document.getElementById('cTerm')
    var out = document.getElementById('cOut')
    var sub = document.getElementById('cSub')
    var dollars = function (n) {
      return '$' + Math.round(n).toLocaleString('en-US')
    }

    function run() {
      var p = parseFloat(price.value) || 0
      var d = parseFloat(down.value) || 0
      var r = parseFloat(rate.value) || 0
      var y = parseFloat(term.value) || 30
      document.getElementById('cDownPct').textContent = d + '%'
      document.getElementById('cRateV').textContent = r + '%'
      var loan = p * (1 - d / 100)
      var n = y * 12
      var m = r / 100 / 12
      var pay = m === 0 ? loan / n : (loan * m) / (1 - Math.pow(1 + m, -n))
      out.textContent = loan > 0 ? dollars(pay) : '—'
      sub.textContent = dollars(p * d / 100) + ' down · ' + dollars(loan) + ' financed over ' + y + ' years'
    }
    ;[price, down, rate, term].forEach(function (el) {
      el.addEventListener('input', run)
      el.addEventListener('change', run)
    })
    run()
  }

  // ── Click-to-load map: nothing hits Google until the visitor asks ─────────
  var mapCard = document.querySelector('.map-card')
  if (mapCard) {
    var btn = mapCard.querySelector('.map-load')
    btn.addEventListener('click', function () {
      var frame = document.createElement('iframe')
      frame.src = 'https://www.google.com/maps?q=' + mapCard.dataset.q + '&output=embed'
      frame.loading = 'lazy'
      frame.referrerPolicy = 'no-referrer-when-downgrade'
      frame.title = 'Map of the property location'
      frame.allowFullscreen = true
      mapCard.innerHTML = ''
      mapCard.appendChild(frame)
    })
  }
})()
