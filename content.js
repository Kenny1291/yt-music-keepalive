const scriptEl = document.createElement('script');
scriptEl.src = chrome.runtime.getURL("keep-alive.js");
document.body.appendChild(scriptEl);