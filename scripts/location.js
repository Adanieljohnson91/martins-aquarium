function cardLocationGenerator({image, name, details}){
    return `<div class="location">
    <h1>${name}</h1>
    <img class="location-img" src=${image} alt="beautiful picture of ${name}"/>
    <p>${details}</p>
    </div>`
};