
function pad(n) {
    return ('0' + n).slice(-2)
}

function setDateToNow(h, m, s) {
    const now = new Date()
    h.innerText = pad( now.getHours() )
    m.innerText = pad( now.getMinutes() )
    s.innerText = pad ( now.getSeconds() )
}

const noSleep = new NoSleep();

window.onload = function () {
    const container = document.getElementById('container')
    const h = document.getElementById('hour')
    const m = document.getElementById('min')
    const s = document.getElementById('sec')
    const btn = document.getElementById('btn')

    setDateToNow(h, m, s)
    setInterval(function () {
        setDateToNow(h, m, s)
    }, 1000)

    btn.onclick = function () {
        btn.remove()
        noSleep.enable();
    }
}
