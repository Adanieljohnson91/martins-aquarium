let tip = []

const gettip = () => {
    return fetch("http://localhost:8088/tips")
        .then(response => response.json())
        .then(
            tips => {
                console.table(tips)
               tip = tips
            }
        )
}