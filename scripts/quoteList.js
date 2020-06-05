const quoteList = () =>{
    getQuote().then(()=>{
        for(const quote of quoteArr){
                let html = quoteCardGenerator(quote)
                let quoteSection = document.querySelector('#quote-id')
                quoteSection.innerHTML += html;
            }
    })
    
}