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