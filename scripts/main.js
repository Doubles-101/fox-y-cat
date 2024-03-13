fetch("https://randomfox.ca/floof/")
    .then(response => response.json())
    .then(
        (convertedData) => {
            const foxImgId = document.querySelector("#fox")
            foxImgId.src = convertedData.image
        }
    )

    

const getTheCat = async () => {
    const response = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
    const convertedData = await response.json()

    const catImgId = document.querySelector("#cat")
    catImgId.src = convertedData[0]
}

getTheCat()