const appendLocation = () =>{
    getlocation().then(()=>{
        for(let i = 0; i < locationArr.length; i++){
                let currentLocationCard = cardLocationGenerator(locationArr[i]);
                document.getElementById('location-id').innerHTML += currentLocationCard;
            }

    })
    

}