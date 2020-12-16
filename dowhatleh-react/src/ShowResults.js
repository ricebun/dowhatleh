import { Box, Card, CardBody, Image } from "grommet"
import { useEffect } from 'react'
import Button from './Button'

const ShowResults = (props) => {
    useEffect(() => {
        props.setParty("")
        props.setAvoid("")
    }, [])

    // const uuid0 = props.searchResults[0].thumbnails.uuid
    // const uuid1 = props.searchResults[1].thumbnails.uuid
    // const uuid2 = props.searchResults[2].thumbnails.uuid

    const imgUrl0 = `https://tih-api.stb.gov.sg/media/v1/download/uuid/1010368e0c4b365499cab8bca05f75f7db3?apikey=sLZH8hTxxGK0LPQuGnCGzH3otMafCSTI`

    const imgUrl1 = `https://tih-api.stb.gov.sg/media/v1/download/uuid/101c7e069796ec546ada96140c71fbc5f14?apikey=sLZH8hTxxGK0LPQuGnCGzH3otMafCSTI`

    const imgUrl2 = `https://tih-api.stb.gov.sg/media/v1/download/uuid/101def5121ccd094cecb7b3d04617c24dfe?apikey=sLZH8hTxxGK0LPQuGnCGzH3otMafCSTI`

    return (
        <>
            {props.searchComplete ? <div>
                <h1>three choose one, go have fun!</h1>
                <Box direction="row" justify="center"
                    gap="medium">
                    <Card>
                        <CardBody height="small">
                            <Image
                                fit="cover"
                                src={imgUrl0}
                                a11yTitle="bridge"
                            />
                        </CardBody>
                        <p>{props.searchResults[0].name}</p>
                    </Card>
                    <Card>
                        <CardBody height="small">
                            <Image
                                fit="cover"
                                src={imgUrl1}
                                a11yTitle="bridge"
                            />
                        </CardBody>
                        <p>{props.searchResults[1].name}</p>
                    </Card>
                    <Card>
                        <CardBody height="small">
                            <Image
                                fit="cover"
                                src={imgUrl2}
                                a11yTitle="bridge"
                            />
                        </CardBody>
                        <p>{props.searchResults[2].name}</p>
                    </Card>
                </Box>
                <Button submitStatus={props.submitStatus} setSubmitStatus={props.setSubmitStatus} label="Try again?" />
            </div> : <p>Loading..</p>}
        </>
    )
}

export default ShowResults  