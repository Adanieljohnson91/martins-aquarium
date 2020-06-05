const appendTips = () =>{
    console.log('runingTips')
        gettip().then(
            () => {
                console.log(tip)
                for(let i = 0; i < tip.length; i++){
                    let tipCard = cardTipGenerator(tip[i]);
                    document.getElementById('tip-id').innerHTML += tipCard;
                }
            
            }
        )
   
}