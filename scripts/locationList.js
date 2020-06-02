const appendLocation = (locationData) =>{
    for(let i = 0; i < locationData.length; i++){
        let currentLocationCard = cardLocationGenerator(locationData[i]);
        document.getElementById('location-id').innerHTML += currentLocationCard;
    }

}