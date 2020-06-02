
const appendFish = (fishData) =>{
    for(let i = 0; i < fishData.length; i++){
        let currentCard = cardGenerator(fishData[i]);
        document.getElementById('tag-id').innerHTML += currentCard;
    }
}