
const renderItems = (data) => {
    console.log(data)
}
fetch('./db/partners.json')
    .then((response)=> response.json())
    .then((data)=> {
        console.log(data);
    })