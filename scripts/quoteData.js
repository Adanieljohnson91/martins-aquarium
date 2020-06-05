let quoteArr = []

const getQuote = () => {
    return fetch("http://localhost:8088/quotes")
        .then(response => response.json())
        .then(
            quotes => {
                console.table(quotes)
               quoteArr = quotes
            }
        )
}