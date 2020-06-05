const appendTips = () =>{
    console.log('runingTips')
        gettip().then(
            () => {
                console.log(tip)
                for(let i = 0; i < tip.length; i++){
                    let tipCard = cardTipGenerator(tip[i]);
                    document.getElementById('tip-id').innerHTML += tipCard;
                }
                let toggle = document.getElementById('toggle-tips')
        console.log(toggle, "toggle")
        toggle.addEventListener('click', ()=>{
            document.getElementById('tip-id').classList.toggle('hidden')
        })
            
            }
        )
   
}