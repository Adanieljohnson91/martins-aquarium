const quoteCardGenerator = ({quote, author}) =>{
    return `
    <div >
    <h1 class="quote-box">${quote}</h1>
    <p>-<small>${author}</small></p>
    </div>`
}