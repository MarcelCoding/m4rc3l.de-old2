"use strict";

(function () {
  const emails = document.getElementsByClassName("email");

  for (let i = 0; i < emails.length; i++) {
    const email = emails.item(i);

    if (email.tagName.toUpperCase() === 'A') {
      email.href = `mailto:${email.dataset.user}@m4rc3l.de`;
      email.querySelector('code').innerText = `${email.dataset.user}@m4rc3l.de`;
    } else {
      email.innerText = `${email.dataset.user}@m4rc3l.de`;
    }
  }
}());
