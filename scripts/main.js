const fish = [
    {image:"https://img.etimg.com/thumb/msid-72258617,width-643,imgsize-797254,resizemode-4/nemo-clownfish_istock.jpg", species: "Clown", length: 23, food: "Dry Food", harvested: "Bahamas", petName:"Blue"}
    , {image:"https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg", species: "Parrot", length: 33, food: "Frozen Food", harvested: "Galapagos Island" ,petName:"Green"}
    , {image:"https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555293705/shape/mentalfloss/blobfish_0.jpg", species: "HeroFIsh", length: 12, food: "Freeze Dried", harvested: "Atlantic Ocean", petName:"Yellow" }
    , {image:"http://www.sutherlandsafaris.com/content/img/showcase/tiger-fishing/tiger-fishing-3.jpg", species: "Tiger Fish", length: 6, food: "Live Food", harvested: "Black Sea", petName:"Red" }
    , {image:"https://images.unsplash.com/photo-1528697350967-73ea8fd73685?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", species: "Stripe", length: 87, food: "Greens", harvested: "Off the Coast", petName:"Purple" },{image:"https://img.etimg.com/thumb/msid-72258617,width-643,imgsize-797254,resizemode-4/nemo-clownfish_istock.jpg", species: "Clown", length: 23, food: "Dry Food", harvested: "Bahamas", petName:"Blue"}
    , {image:"https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg", species: "Parrot", length: 33, food: "Frozen Food", harvested: "Galapagos Island" ,petName:"Green"}
    , {image:"https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555293705/shape/mentalfloss/blobfish_0.jpg", species: "HeroFIsh", length: 12, food: "Freeze Dried", harvested: "Atlantic Ocean", petName:"Yellow" }
    ,{image:"https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555293705/shape/mentalfloss/blobfish_0.jpg", species: "HeroFIsh", length: 12, food: "Freeze Dried", harvested: "Atlantic Ocean", petName:"Yellow" }
    ,{image:"https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg", species: "Parrot", length: 33, food: "Frozen Food", harvested: "Galapagos Island" ,petName:"Green"}
];
function start(){
    console.log("running")
    onClickList();
}
const onClickList = (e) =>{
   
    console.log('clicked')
    for(let i = 0; i < fish.length; i++){
        let currentCard = cardGenerator(fish[i]);
        document.getElementById('tag-id').innerHTML += currentCard;
        console.log(fish[i].food)
    }

}
function cardGenerator({image, species, length, food, harvested, petName}){
    return `<div class="fish-item">
    <h1>${petName}</h1>
    <img class="fish-img" src=${image} alt="picture of a ${species} fish"/>
    <p>${food}</p>
    <p>${species}</p>
    <p>${harvested}</p>
    <p>${length}</p>
    </div>`
}
