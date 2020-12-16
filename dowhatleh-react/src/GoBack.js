import { Box, Button } from "grommet"
import { useHistory } from "react-router-dom"

const GoBack = (props) => {

    const history = useHistory()

    const handleBack = () => {
        props.setGoBack(true)
        props.setSubmitStatus(false)
        props.setSearchResults([])
        history.push("/search")
    }

    return (
        <>
            <Box align="end">
                <Button primary plain="true"
                    size="large"
                    label={props.label}
                    onClick={() => handleBack()} ></Button>
            </Box>
        </>
    )
}

export default GoBack;