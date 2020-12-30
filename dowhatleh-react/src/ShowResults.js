import { Box, Heading } from "grommet"
import { useState } from 'react'
import Search from "./Search"
import GoBack from './GoBack'
import ResultCard from './ResultCard'
import Regenerate from './Regenerate'

const ShowResults = (props) => {
    const [searchResults, setSearchResults] = useState([])
    const [searchComplete, setSearchComplete] = useState(false)
    const [nextToken, setNextToken] = useState('')
    const [regen, setRegen] = useState(false)

    return (
        <>
            { props.props.submitStatus ? <Search party={props.props.party} avoid={props.props.avoid} searchResults={searchResults} setSearchResults={setSearchResults} setSearchComplete={setSearchComplete} nextToken={nextToken} setNextToken={setNextToken} /> : null}
            { regen ? <Search party={props.props.party} avoid={props.props.avoid} searchResults={searchResults} setSearchResults={setSearchResults} setSearchComplete={setSearchComplete} regen={regen} setRegen={setRegen} nextToken={nextToken} setNextToken={setNextToken} /> : null}

            <Box pad="small"
                gap="small"
                margin={{ "top": "xsmall", "left": "medium", "right": "medium" }}
                justify="center">
                {searchComplete ? <div>
                    <Heading margin={{ "bottom": "medium" }}>three choose one, go have fun!</Heading>
                    <Box direction="row" justify="center"
                        gap="medium" border={{ size: "small", color: "yellow" }}>
                        <ResultCard result={searchResults[0]} />
                        <ResultCard result={searchResults[1]} />
                        <ResultCard result={searchResults[2]} />
                    </Box>
                    <GoBack setSearchResults={setSearchResults} setGoBack={props.props.setGoBack} setSubmitStatus={props.props.setSubmitStatus} setParty={props.props.setParty} setAvoid={props.props.setAvoid} />
                    <Regenerate regen={regen} setRegen={setRegen} />
                </div> : <p>Loading..</p>}
            </Box>
        </>
    )
}

export default ShowResults  