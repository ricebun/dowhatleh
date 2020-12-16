import { useState, useEffect } from 'react'
import axios from "axios"

const party = {
    "My Partner and I": ["two%20people%2Ccouples%2Cromantic"],
    "Just Me": ["one%20person"],
    "Friends": ["group%20of%20people"],
    "Family": ["families%2Cfamily-friendly"]
}

const cleanResponse = (obj) => {
    const nearestMrtStation = obj.nearestMrtStation
    // const thumbnails = obj.thumbnails
    // const firstThumbnail = thumbnails[0]
    // const thumbnailUuid = firstThumbnail["uuid"]
    const website = obj.officialWebsite
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
        // thumbnailUuid,
        website,
        name,
        address,
        location,
        tags,
        description,
        type,
    }
}

// const clearBadMatches = (obj) => {
//     // remove type = others

//     // if partyinput === one person, remove entries with "family-friendly"
//     // loop through obj, find index of FF entries
//     // loop through index arr, remove FF entries (splice?)

//     // if partyinput === couples etc, keep only "couples, romantic"
// }

const generateRandomArrayIndex = (array) => {
    return Math.floor(Math.random() * array.length)
}

const Search = (props) => {
    console.log("Searching.... (render)")
    const [searchTerm, setSearchTerm] = useState("")

    const partyInput = props.party

    useEffect(() => {
        console.log("setting search term - line 68")
        setSearchTerm(party[partyInput])
    }, [])

    if (searchTerm !== "") {
        const attractionsUrl = `https://tih-api.stb.gov.sg/content/v1/search/all?dataset=attractions&keyword=${searchTerm}&sortBy=rating&sortOrder=DESC&language=en&distinct=Yes&apikey=sLZH8hTxxGK0LPQuGnCGzH3otMafCSTI`

        const walksUrl = `https://tih-api.stb.gov.sg/content/v1/search/all?dataset=walking_trail&keyword=${searchTerm}&sortBy=rating&sortOrder=DESC&language=en&distinct=Yes&apikey=sLZH8hTxxGK0LPQuGnCGzH3otMafCSTI`

        const attractions = []
        const walks = []

        axios.get(attractionsUrl)
            .then(function (response) {
                const results = response.data.data.results
                for (let i = 0; i < results.length; i++) {
                    attractions.push(cleanResponse(results[i]))
                }
                console.log("inside attractions response")
                // const test1 = generateRandomArrayIndex(attractions)
                // const test2 = generateRandomArrayIndex(attractions)

                return axios.get(walksUrl)
            })
            .then(function (response) {
                const results = response.data.data.results

                for (let i = 0; i < results.length; i++) {
                    walks.push(cleanResponse(results[i]))
                }
                console.log("inside attractions response")
            })
            .then(function (response) {
                const tmpSearchResults = [attractions[4], attractions[8], walks[4]]
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