function setDateToNow(el) {
    const now = new Date()
    el.innerText = now.toLocaleTimeString()
}

window.onload = function () {
    const container = document.getElementById('container')
    const clockdiv = document.getElementById('clock')
    const btn = document.getElementById('btn')
    const noSleep = new NoSleep();

    setDateToNow(clockdiv)
    setInterval(function () {
        setDateToNow(clockdiv)
    }, 1000)

    clockdiv.onclick = function () {
        container.classList.replace("go", "rest")
        setTimeout(function () {
            container.classList.replace("rest", "go")
        }, 2000)
    }

    btn.onclick = function () {
        btn.remove()
        noSleep.enable();
    }
}
