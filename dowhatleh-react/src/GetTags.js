const axios = require("axios")
const fs = require("fs")

let url = "https://tih-api.stb.gov.sg/content/v1/tag?apikey=sLZH8hTxxGK0LPQuGnCGzH3otMafCSTI"

let token = ""

let tags = []

const writeFile = (data) => {
    console.log("Writing data to file tags.js")
    fs.writeFile("tags.js", JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return console.error(err);
        }
    })
    console.log("Document written successfully")
}

const get = () => {
    axios.get(url)
        .then(function (response) {
            token = response.data.nextToken
            const tagsObj = response.data.data
            for (let i = 0; i < tagsObj.length; i++) {
                tags.push(tagsObj[i].name)
            }
            // console.log(tags)
            if (token !== "") {
                console.log(token)
                url = `https://tih-api.stb.gov.sg/content/v1/tag?apikey=sLZH8hTxxGK0LPQuGnCGzH3otMafCSTI&nextToken=${token}`
                return get()
            } else {
                console.log("no token")
                writeFile(tags)
            }
        })
        .catch(function (error) {
            console.log(`Ahhhh something went wrong: ${error}`);
        })
}

get()
