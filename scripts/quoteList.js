const quoteList = (quoteData) =>{
    for(const quote of quoteData){
        let html = quoteCardGenerator(quote)
        let quoteSection = document.querySelector('#quote-id')
        quoteSection.innerHTML += html;
    }
}