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
    const thumbnails = obj.thumbnails[0]
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
        thumbnails,
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

// const generateRandomArrayIndex = (array) => {
//     return Math.floor(Math.random() * array.length)
// }

const Search = (props) => {
    console.log("Searching.... (render)")
    const [searchTerm, setSearchTerm] = useState("")

    const partyInput = props.party

    useEffect(() => {
        console.log("setting search term - line 68")
        setSearchTerm(party[partyInput])
    }, [])

    if (searchTerm !== "") {
        const url = `https://tih-api.stb.gov.sg/content/v1/search/all?dataset=attractions%2Cwalking_trail&keyword=${searchTerm}&sortBy=rating&sortOrder=DESC&language=en&distinct=Yes&apikey=sLZH8hTxxGK0LPQuGnCGzH3otMafCSTI`
        const all = []

        axios.get(url)
            .then(function (response) {
                const results = response.data.data.results

                for (let i = 0; i < results.length; i++) {
                    all.push(cleanResponse(results[i]))
                }
                console.log("inside all response")
            })
            .then(function (response) {
                const tmpSearchResults = [all[1], all[3], all[5]]
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