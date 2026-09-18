//Modified by Akiko <https://github.com/Kenny1291> on 2026-09-17

// Object.defineProperties(document, {
//     hidden: { value: false },
//     visibilityState: { value: 'visible' }
// });

// window.addEventListener("visibilitychange", e => e.stopImmediatePropagation(), true);

keepYTMusicTabAlive();

function keepYTMusicTabAlive() {
    if ("_lact" in window) {
        window._lact = Date.now();
    }
}

setInterval(keepYTMusicTabAlive, 300_000);