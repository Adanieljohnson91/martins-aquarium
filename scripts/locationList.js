const appendLocation = () =>{
    getlocation().then(()=>{
        for(let i = 0; i < locationArr.length; i++){
                let currentLocationCard = cardLocationGenerator(locationArr[i]);
                document.getElementById('location-id').innerHTML += currentLocationCard;
            }
            let toggle = document.getElementById('toggle-locations')
        console.log(toggle, "toggle")
        toggle.addEventListener('click', ()=>{
            document.getElementById('location-id').classList.toggle('hidden')
        })

    })
    

}