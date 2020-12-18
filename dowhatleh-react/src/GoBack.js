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
            <Box align="center" margin="medium" height="xxsmall">
                <Button primary
                    fill="vertical"
                    label={props.label}
                    onClick={() => handleBack()} ></Button>
            </Box>
        </>
    )
}

export default GoBack;