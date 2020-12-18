import { useState, useEffect } from 'react'
import axios from "axios"

const party = {
    "My Partner and I": ["two%20people%2Ccouples%2Cromantic"],
    "Just Me": ["one%20person"],
    "Friends": ["group%20of%20people"],
    "Family": ["families%2Cfamily-friendly"]
}

const generateRandomArrayIndex = (array) => {
    return Math.floor(Math.random() * array.length)
}

const Search = (props) => {
    console.log("Searching.... (render)")
    const [searchTerm, setSearchTerm] = useState("")
    // const [tmpSearchResults, setTmpSearchResults] = useState([])

    const partyInput = props.party

    useEffect(() => {
        console.log("setting search term - line 68")
        setSearchTerm(party[partyInput])
    }, [partyInput])

    const cleanResponse = (obj) => {
        const nearestMrtStation = obj.nearestMrtStation

        let thumbnail
        if (obj.thumbnails[0] && obj.thumbnails[0].uuid !== "") {
            thumbnail = `https://tih-api.stb.gov.sg/media/v1/download/uuid/${obj.thumbnails[0].uuid}?apikey=sLZH8hTxxGK0LPQuGnCGzH3otMafCSTI`
        } else if (obj.thumbnails[0] && obj.thumbnails[0].uuid === "" && obj.thumbnails.url !== "") {
            thumbnail = obj.thumbnails[0].url
        } else {
            thumbnail = "https://static.thenounproject.com/png/1583624-200.png"
        }

        let website
        if (obj.officialWebsite === "" || obj.officialWebsite === undefined) {
            website = "https://google.com.sg"
        } else if (obj.officialWebsite.slice(0, 5) !== "https") {
            website = `https://${obj.officialWebsite}`
        } else {
            website = obj.officialWebsite
        }

        const name = obj.name
        const address = obj.address
        let location
        if (obj.location) {
            location = [obj.location.latitude, obj.location.longitude]
        }
        const tags = obj.tags
        const description = obj.description
        const type = obj.type

        return {
            nearestMrtStation,
            thumbnail,
            website,
            name,
            address,
            location,
            tags,
            description,
            type,
        }
    }

    const clearBadMatches = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].type.includes("Others") || arr[i].name.includes("Gelam")) {
                arr.splice(i, 1)
            } else {
                const target = arr[i].type
                for (let j = 0; j < props.avoid.length; j++) {
                    if (target === props.avoid[j]) {
                        arr.splice(i, 1)
                    }
                }
            }
        }
        return arr
    }

    if (searchTerm !== "") {
        const url = `https://tih-api.stb.gov.sg/content/v1/search/all?dataset=attractions%2Cwalking_trail&keyword=${searchTerm}&sortBy=rating&sortOrder=DESC&language=en&distinct=Yes&apikey=sLZH8hTxxGK0LPQuGnCGzH3otMafCSTI`
        let all = []
        let tmpSearchResults = []

        axios.get(url)
            .then(function (response) {
                const results = response.data.data.results

                for (let i = 0; i < results.length; i++) {
                    all.push(cleanResponse(results[i]))
                }
                console.log(all)
                all = clearBadMatches(all)
            })
            .then(function () {
                let num1, num2, num3
                do {
                    num1 = generateRandomArrayIndex(all)
                    num2 = generateRandomArrayIndex(all)
                    num3 = generateRandomArrayIndex(all)
                } while (num1 === num2 || num1 === num3 || num2 === num3)
                tmpSearchResults = [all[num1], all[num2], all[num3]]
                console.log(num1, num2, num3)
            })
            .then(function () {
                if (props.searchResults.length !== tmpSearchResults.length) {
                    console.log("Not equal")
                    console.log(tmpSearchResults)
                    console.log("setting search results - line 116")
                    props.setSearchResults(tmpSearchResults)
                    console.log("setting search complete = true - line 121")
                    props.setSearchComplete(true)
                }
            })
            .catch(function (error) {
                console.log(`Ahhhh something went wrong: ${error}`);
            })
    }

    return (
        <>
        </>
    )
}
export default Search