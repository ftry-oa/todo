
export const getTodos = () => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304) {
                    // console.log(xhr.responseText)
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    console.log(`Request was unsuccessful: ${xhr.responseText}`)
                    reject(xhr.responseText)
                }
            }
        }
        xhr.open('get', '/getTodos', true)
        xhr.send(null)
    })
}