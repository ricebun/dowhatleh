import { Box, Card, CardBody, Image, Heading, Paragraph } from "grommet"
import { useEffect } from 'react'
import GoBack from './GoBack'

const ShowResults = (props) => {
    useEffect(() => {
        props.props.setParty("")
        props.props.setAvoid("")
        // props.props.setSubmitStatus(false)
    }, [])

    return (
        <Box>
            {props.props.searchComplete ? <div>
                <h1>three choose one, go have fun!</h1>
                <Box direction="row" justify="center"
                    gap="medium">
                    <Card>
                        <CardBody height="small">
                            <Image
                                fit="cover"
                                src={props.props.searchResults[0].thumbnail}
                                a11yTitle={props.props.searchResults[0].name}
                            />
                        </CardBody>
                        <Box pad={{ horizontal: 'medium' }} responsive={false}>
                            <Heading level="3" margin={{ vertical: 'medium' }}>
                                {props.props.searchResults[0].name}
                            </Heading>
                            <Paragraph margin={{ top: 'none' }}>
                                {props.props.searchResults[0].description}
                            </Paragraph>
                        </Box>
                    </Card>
                    <Card>
                        <CardBody height="small">
                            <Image
                                fit="cover"
                                src={props.props.searchResults[1].thumbnail}
                                a11yTitle="bridge"
                            />
                        </CardBody>
                        <Box pad={{ horizontal: 'medium' }} responsive={false}>
                            <Heading level="3" margin={{ vertical: 'medium' }}>
                                {props.props.searchResults[1].name}
                            </Heading>
                            <Paragraph margin={{ top: 'none' }}>
                                {props.props.searchResults[1].description}
                            </Paragraph>
                        </Box>
                    </Card>
                    <Card>
                        <CardBody height="small">
                            <Image
                                fit="cover"
                                src={props.props.searchResults[2].thumbnail}
                                a11yTitle="bridge"
                            />
                        </CardBody>
                        <Box pad={{ horizontal: 'medium' }} responsive={false}>
                            <Heading level="3" margin={{ vertical: 'medium' }}>
                                {props.props.searchResults[2].name}
                            </Heading>
                            <Paragraph margin={{ top: 'none' }}>
                                {props.props.searchResults[2].description}
                            </Paragraph>
                        </Box>
                    </Card>
                </Box>
                <GoBack setSearchResults={props.props.setSearchResults} setGoBack={props.props.setGoBack} setSubmitStatus={props.props.setSubmitStatus} label="Try again?" />
            </div> : <p>Loading..</p>}
        </Box>
    )
}

export default ShowResults  