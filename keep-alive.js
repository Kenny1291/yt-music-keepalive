function keepYTMusicTabAlive() {
    if ("_lact" in window) {
        window._lact = Date.now();
    }
}

setInterval(keepYTMusicTabAlive, 3_300_000);