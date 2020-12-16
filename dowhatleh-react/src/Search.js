import { useState, useEffect } from 'react'
import axios from "axios"
import deepequal from "deep-equal"

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
    console.log("Searching....")
    const [searchTerm, setSearchTerm] = useState("")
    const [tmpSearchResults, setTmpSearchResults] = useState()

    const partyInput = props.party

    // const tmpSearchResults = [] // used to setSearchResults after fully populated

    // console.log(`Party = ${partyInput}`)
    // console.log(`Search = ${party[partyInput]}`)

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
                // const test1 = generateRandomArrayIndex(attractions)
                // const test2 = generateRandomArrayIndex(attractions)
                // console.log(attractions[test1])
                // tmpSearchResults.push(attractions[4])
                // tmpSearchResults.push(attractions[8])

                return axios.get(walksUrl)
            })
            .then(function (response) {
                const results = response.data.data.results

                for (let i = 0; i < results.length; i++) {
                    walks.push(cleanResponse(results[i]))
                }
                // tmpSearchResults.push(walks[4])
                // if (tmpSearchResults.length !== 3) {
                //     pushWalks(walks, tmpSearchResults)
                // }
            })
            .then(function (response) {
                const tmpSearchResults = [attractions[4], attractions[8], walks[4]]
                if (!deepequal(tmpSearchResults, props.searchResults)) {
                    console.log("setting search results - line 108")
                    props.setSearchResults(tmpSearchResults)
                }
            })
            // .then(function (response) {
            //     if (tmpSearchResults.length === 3 && !deepequal(props.searchResults, tmpSearchResults)) {
            //         console.log("Not deep equal")
            //         console.log(tmpSearchResults)
            //         props.setSearchResults(tmpSearchResults)
            //         props.setSearchComplete(true)
            //     }
            // })
            .catch(function (error) {
                console.log(`Ahhhh something went wrong: ${error}`);
            })
    }

    // useEffect(() => {
    //     if (tmpSearchResults.length === 3 && !deepequal(props.searchResults, tmpSearchResults)) {
    //         console.log("Not deep equal")
    //         console.log(tmpSearchResults)
    //         props.setSearchResults(tmpSearchResults)
    //         props.setSearchComplete(true)
    //     }
    // }, [props])

    return (
        <>
        </>
    )
}
export default Search