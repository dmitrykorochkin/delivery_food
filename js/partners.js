
const renderItems = (data) => {
    console.log(data)
}


fetch('https://test-d1573-default-rtdb.firebaseio.com/db/partners.json')
    .then((response)=> response.json())
    .then((data)=> {
        console.log(data);
    })
    .catch((error) => {
        console.log(error)
    })