function cardGenerator({ image, species, length, food, harvested, petName }) {
    return `<div class="fish-item flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h1>${petName}</h1>
                            <img class="fish-img" src=${image} alt="picture of a ${species} fish"/>
                               
                    </div>
                    
                    <div class="flip-card-back"> 
                            <p>${food}</p>
                            <p>${species}</p>
                            <p>${harvested}</p>
                            <p>${length}</p>
                    </div>
                </div>
            </div>`
}