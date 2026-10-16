// Copy-to-clipboard for the email address in the contact section.
(function () {
  "use strict";

  var btn = document.getElementById("copy-btn");
  var email = document.getElementById("email");
  if (!btn || !email) return;

  var label = btn.textContent;

  function done() {
    btn.textContent = "Copied";
    setTimeout(function () { btn.textContent = label; }, 1800);
  }

  // If the clipboard is blocked, select the text so the visitor can copy it by hand.
  function fallback() {
    try {
      var range = document.createRange();
      range.selectNodeContents(email);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      btn.textContent = "Press Ctrl+C";
    } catch (e) { /* nothing more to do */ }
  }

  btn.addEventListener("click", function () {
    try {
      navigator.clipboard.writeText(email.textContent).then(done, fallback);
    } catch (e) {
      fallback();
    }
  });
})();
