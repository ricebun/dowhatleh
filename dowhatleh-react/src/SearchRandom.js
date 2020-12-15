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

const generateRandomArrayIndex = (array) => {
    return Math.floor(Math.random() * array.length)
}
// const pushAttractions = (attractions, resultsArr) => {
//     const indexes = generateTwoRandomArrayIndexes(attractions)
//     resultsArr.push(attractions[indexes[0]])
//     resultsArr.push(attractions[indexes[1]])
// }

// const pushWalks = (walks, resultsArr) => {
//     const index = generateRandomArrayIndex(walks)
//     resultsArr.push(walks[index])
// }

const Search = (props) => {
    console.log("Searching....")
    const [searchTerm, setSearchTerm] = useState("")
    const [tmpSearchResults, setTmpSearchResults] = useState([])
    const [attractions, setAttractions] = useState([])
    const [walks, setWalks] = useState([])

    const partyInput = props.party

    console.log(`Party = ${partyInput}`)
    console.log(`Search = ${party[partyInput]}`)

    useEffect(() => {
        setSearchTerm(party[partyInput])
    }, [])

    if (searchTerm !== "") {
        const attractionsUrl = `https://tih-api.stb.gov.sg/content/v1/search/all?dataset=attractions&keyword=${searchTerm}&sortBy=rating&sortOrder=DESC&language=en&distinct=Yes&apikey=sLZH8hTxxGK0LPQuGnCGzH3otMafCSTI`

        const walksUrl = `https://tih-api.stb.gov.sg/content/v1/search/all?dataset=walking_trail&keyword=${searchTerm}&sortBy=rating&sortOrder=DESC&language=en&distinct=Yes&apikey=sLZH8hTxxGK0LPQuGnCGzH3otMafCSTI`

        const tmpAttractions = []
        const tmpWalks = []

        axios.get(attractionsUrl)
            .then(function (response) {
                const results = response.data.data.results
                for (let i = 0; i < results.length; i++) {
                    tmpAttractions.push(cleanResponse(results[i]))
                }

                // if (tmpSearchResults.length !== 2) {
                //     pushAttractions(attractions, tmpSearchResults)
                // }
                return axios.get(walksUrl)
            })
            .then(function (response) {
                const results = response.data.data.results

                for (let i = 0; i < results.length; i++) {
                    tmpWalks.push(cleanResponse(results[i]))
                }

                // if (tmpSearchResults.length !== 3) {
                //     pushWalks(walks, tmpSearchResults)
                // }

                if (tmpSearchResults.length === 3 && !deepequal(props.searchResults, tmpSearchResults)) {
                    console.log("Not deep equal")
                    console.log(tmpSearchResults)
                    // props.setSearchResults(tmpSearchResults)
                    props.setSearchComplete(true)
                }
            })
            .then(function () {
                setAttractions(tmpAttractions)
                setWalks(tmpWalks)
            })
            .then(function () {
                let attractionindex1, attractionindex2
                const walkindex = generateRandomArrayIndex(walks)

                do {
                    attractionindex1 = generateRandomArrayIndex(attractions)
                    attractionindex2 = generateRandomArrayIndex(attractions)
                } while (attractionindex1 === attractionindex2)

                if (tmpSearchResults.length === 0) {
                    setTmpSearchResults([attractions[attractionindex1], attractions[attractionindex2], walks[walkindex]])
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