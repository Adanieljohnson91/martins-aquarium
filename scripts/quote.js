const quoteCardGenerator = ({quote, author}) =>{
    return `
    <div class="quote-box">
    <h1>${quote}</h1>
    <p>-<small>${author}</small></p>
    </div>`
}