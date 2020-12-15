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

const Search = (props) => {
    console.log("Searching....")
    const [searchTerm, setSearchTerm] = useState("")

    const partyInput = props.party

    const tmpSearchResults = []

    console.log(`Party = ${partyInput}`)
    console.log(`Search = ${party[partyInput]}`)

    useEffect(() => {
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
                tmpSearchResults.push(attractions[4])
                tmpSearchResults.push(attractions[8])

                return axios.get(walksUrl)
            })
            .then(function (response) {
                const results = response.data.data.results

                for (let i = 0; i < results.length; i++) {
                    walks.push(cleanResponse(results[i]))
                }
                tmpSearchResults.push(walks[8])
                // if (tmpSearchResults.length !== 3) {
                //     pushWalks(walks, tmpSearchResults)
                // }

                if (tmpSearchResults.length === 3 && !deepequal(props.searchResults, tmpSearchResults)) {
                    console.log("Not deep equal")
                    // console.log(tmpSearchResults)
                    props.setSearchResults(tmpSearchResults)
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