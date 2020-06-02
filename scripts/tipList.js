const appendTips = (tipData) =>{
    for(let i = 0; i < tipData.length; i++){
        let tipCard = cardTipGenerator(tipData[i]);
        document.getElementById('tip-id').innerHTML += tipCard;
    }

}