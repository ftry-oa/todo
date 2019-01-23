
(() => {
    const width = 640
    const body = document.documentElement || document.body
    const offsetWidth = body.offsetWidth
    const rem = width / offsetWidth * 100
    document.getElementsByTagName('html')[0].style.fontSize = `${rem}px`
})()