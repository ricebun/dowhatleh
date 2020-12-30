import { Box, Button } from "grommet"
import { useHistory } from "react-router-dom"

const GoBack = (props) => {

    const history = useHistory()

    const handleBack = () => {
        // props.setGoBack(true)
        props.setSubmitStatus(false)
        props.setSearchResults([])
        props.setParty("")
        props.setAvoid("")
        history.push("/search")
    }

    return (
        <>
            <Box align="center" margin={{ "top": "medium", "bottom": "small" }} height="xxsmall">
                <Button primary
                    fill="vertical"
                    label="Go Back and Try Again"
                    onClick={() => handleBack()} ></Button>
            </Box>
        </>
    )
}

export default GoBack;