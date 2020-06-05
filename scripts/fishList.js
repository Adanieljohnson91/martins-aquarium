

const holyFish = (arr) =>{
    let result = [];
    for(const obj of arr){
        if(obj.length % 3 === 0){
            result.push(obj)
        }
    }
    return result;
}
const soldierFish = (arr) =>{
    let result = []
    for(const obj of arr){
        if(obj.length % 5 === 0){
            result.push(obj);
        }
    }
    return result;
}
const unworthyFish = (arr) =>{
    let result = [];
    for(const obj of arr){
        if(obj.length % 3 !== 0 && obj.lenght % 5 !== 0){
            result.push(obj)
        }
    }
    return result;
}
const sortFish = () =>{
   
    getFish().then(
        ()=>{
    let fishLen3 = holyFish(fish);
    console.log(fishLen3, "fish3")
    let fishLen5= soldierFish(fish);
    console.log(fishLen5, "fish5")
    let fishLenOther = unworthyFish(fish);
    console.log(fishLenOther, "fishO")
    let ordered;
    
    ordered = [...fishLen3, ...fishLen5, ...fishLenOther];
    let selector = document.getElementById('select_fish');
    switch (selector.value) {
        case "holy":
            appendFish(fishLen3)
            break;
        case "godley":
            appendFish(fishLen5)
            break;
        case "holygod":
            appendFish(fishLenOther);
            break;
        case "all":
            appendFish(ordered);
        default:
            break;
    }   
        }
    )
    
}
const appendFish = (fish) =>{
    document.getElementById('tag-id').innerHTML = "";
for(let i = 0; i < fish.length; i++){
        let currentCard = cardGenerator(fish[i]);
        document.getElementById('tag-id').innerHTML += currentCard;
    }
}
