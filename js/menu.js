const resatourant = 'food-band'

const renderItems = (data) => {
    console.log(data)
}
fetch(`./db/${resatourant}.json`)
    .then((response)=> response.json())
    .then((data)=> {
        renderItems(data);
    })
    .catch((error) => {
        console.log(error)
    })