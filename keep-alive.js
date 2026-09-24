//Modified by Akiko <https://github.com/Kenny1291> on 2026-09-18

keepYTMusicTabAlive();

function keepYTMusicTabAlive() {
    if ("_lact" in window) {
        window._lact = Date.now();
    }
}

setInterval(keepYTMusicTabAlive, 300_000);