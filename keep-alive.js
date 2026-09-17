//Modified by Akiko <https://github.com/Kenny1291> on 2026-09-17

Object.defineProperties(document, {
    hidden: { value: false },
    visibilityState: { value: 'visible' }
});

keepYTMusicTabAlive();

function keepYTMusicTabAlive() {
    if ("_lact" in window) {
        window._lact = Date.now();
    }
}

setInterval(keepYTMusicTabAlive, 30_000);