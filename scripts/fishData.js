let fish = []

const getFish = () => {
    return fetch("http://localhost:8088/fish")
        .then(response => response.json())
        .then(
            allFishFromAPI => {
                console.table(allFishFromAPI)
                fish = allFishFromAPI
            }
        )
    
}