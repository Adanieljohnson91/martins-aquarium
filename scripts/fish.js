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