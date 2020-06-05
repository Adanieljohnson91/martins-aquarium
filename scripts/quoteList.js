const quoteList = () =>{
    getQuote().then(()=>{
        for(const quote of quoteArr){
                let html = quoteCardGenerator(quote)
                let quoteSection = document.querySelector('#quote-id')
                quoteSection.innerHTML += html;
            }
    }).then(()=>{
        let toggle = document.getElementById('toggle-quotes')
        console.log(toggle, "toggle")
        toggle.addEventListener('click', ()=>{
            document.getElementById('quote-id').classList.toggle('hidden')
        })
        for(let i = 0; i < quoteArr.length;i++){
            console.log('running')
            document.getElementsByClassName('quote-box')[i].setAttribute('id', i+"-quote")
            let current = document.getElementsByClassName('quote-box')[i]
            current
            .addEventListener('click', (e)=>{
                editText(e, i);
            })
        }
    })
}
let textAreaText = ""
const editText = (ev, i) =>{
    let oldElement = document.getElementById(ev.target.id)
    
    let textArea = document.createElement(`textarea`);
    let button = document.createElement('button');
    button.setAttribute('id', ev.target.id);
    button.setAttribute('type', 'button'); 
    textArea.setAttribute('id', `${ev.target.id}-text`);
    textArea.addEventListener('change', eve=>{
        console.log(eve.target.value);
        textAreaText = eve.target.value;
        
    })
    button.addEventListener('click', () =>{
        saveText(ev.target, ev.target.id, i)
    })
    let buttonText = document.createTextNode('Edit')
    button.appendChild(buttonText);
  
    oldElement.replaceWith(textArea, button);

    
}
const saveText = (e,id, i) =>{
   quoteArr[i].quote = textAreaText;
   quoteArr[i].author = "New Author";
   document.querySelector('#quote-id').innerHTML ="";
   quickEdit();

}
const quickEdit = () =>{
    console.log(quoteArr)
    for(const quote of quoteArr){
        let html = quoteCardGenerator(quote)
        let quoteSection = document.querySelector('#quote-id')
        quoteSection.innerHTML += html;
    }
    for(let i = 0; i < quoteArr.length;i++){
        console.log('running')
        document.getElementsByClassName('quote-box')[i].setAttribute('id', i+"-quote")
        let current = document.getElementsByClassName('quote-box')[i]
        current
        .addEventListener('click', (e)=>{
            editText(e, i);
        })
    }
}
