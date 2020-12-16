import { Box, Card, CardBody, Image, Heading, Paragraph } from "grommet"
import { useState } from 'react'
import Search from "./Search"
import GoBack from './GoBack'

const ShowResults = (props) => {
    const [searchResults, setSearchResults] = useState([])
    const [searchComplete, setSearchComplete] = useState(false)

    return (
        <>
            { props.props.submitStatus ? <Search party={props.props.party} searchResults={searchResults} setSearchResults={setSearchResults} setSearchComplete={setSearchComplete} /> : ""}

            <Box>
                {searchComplete ? <div>
                    <h1>three choose one, go have fun!</h1>
                    <Box direction="row" justify="center"
                        gap="medium">
                        <Card>
                            <CardBody height="small">
                                <Image
                                    fit="cover"
                                    src={searchResults[0].thumbnail}
                                />
                            </CardBody>
                            <Box pad={{ horizontal: 'medium' }} responsive={false}>
                                <Heading level="3" margin={{ vertical: 'medium' }}>
                                    {searchResults[0].name}
                                </Heading>
                                <Paragraph margin={{ top: 'none' }}>
                                    {searchResults[0].description}
                                </Paragraph>
                            </Box>
                        </Card>
                        <Card>
                            <CardBody height="small">
                                <Image
                                    fit="cover"
                                    src={searchResults[1].thumbnail}
                                />
                            </CardBody>
                            <Box pad={{ horizontal: 'medium' }} responsive={false}>
                                <Heading level="3" margin={{ vertical: 'medium' }}>
                                    {searchResults[1].name}
                                </Heading>
                                <Paragraph margin={{ top: 'none' }}>
                                    {searchResults[1].description}
                                </Paragraph>
                            </Box>
                        </Card>
                        <Card>
                            <CardBody height="small">
                                <Image
                                    fit="cover"
                                    src={searchResults[2].thumbnail}
                                />
                            </CardBody>
                            <Box pad={{ horizontal: 'medium' }} responsive={false}>
                                <Heading level="3" margin={{ vertical: 'medium' }}>
                                    {searchResults[2].name}
                                </Heading>
                                <Paragraph margin={{ top: 'none' }}>
                                    {searchResults[2].description}
                                </Paragraph>
                            </Box>
                        </Card>
                    </Box>
                    <GoBack setSearchResults={setSearchResults} setGoBack={props.props.setGoBack} setSubmitStatus={props.props.setSubmitStatus} setParty={props.props.setParty} setAvoid={props.props.setAvoid} label="Try again?" />
                </div> : <p>Loading..</p>}
            </Box>
        </>
    )
}

export default ShowResults  