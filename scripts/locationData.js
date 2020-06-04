let locationArr = []

const getlocation = () => {
    return fetch("http://localhost:8088/locations")
        .then(response => response.json())
        .then(
            locations => {
                console.table(locations)
               locationArr = locations
            }
        )
}