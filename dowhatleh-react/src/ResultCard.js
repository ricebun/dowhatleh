import { Box, Card, Image, Heading, Button, Footer } from 'grommet'


const ResultCard = (props) => {
    const redirect = () => {
        window.open(props.result.website, "_blank")
    }

    return (
        <>
            <Card height="medium" width="medium" background="pink" pad="small">
                <Box height="1/2" round="small" gridArea="image">
                    <Image
                        fit="contain"
                        src={props.result.thumbnail}
                    />
                </Box>
                <Box height="1/4" gridArea="header">
                    <Heading fill level="5" flex-shrink="true" textAlign="center" pad={{ left: "small", right: "small", top: "none", bottom: "none" }}>
                        {props.result.name}
                    </Heading>

                </Box>
                <Box direction="row" pad={{ horizontal: 'medium', vertical: 'small' }} justify="end" alignSelf="end" gridArea="button">
                    <Footer fixed={true}><Button alignSelf="end" label="Visit Website" onClick={() => redirect()}></Button></Footer>
                </Box>
            </Card>
        </>
    )
}

export default ResultCard;