import { Box, Button } from "grommet"

const ClickPlace = (props) => {

    const handleSubmit = () => {
        if (!props.submitStatus) {
            if (!props.party && props.avoid.length === 6) {
                console.log("Error: No party selected, selected all avoid")
            } else if (props.party && props.avoid.length === 6) {
                console.log("Error: Selected all avoid")
            } else if (!props.party && !props.avoid) {
                console.log("Error: Nothing selected")
            } else if (props.party && !props.avoid) {
                console.log("Error: Select things you want to avoid")
            } else if (!props.party && props.avoid.length < 6) {
                console.log("Error: Party not selected")
            } else {
                console.log("Successfully submitted")
            }
        }
        props.setSubmitStatus(!props.submitStatus)

        if (!props.submitStatus) {
            console.log("props", props)
            // props.setSearchResults([])
        }
    }

    return (
        <>
            <Box align="end">
                <Button primary plain="true"
                    size="large"
                    label={props.label}
                    onClick={() => handleSubmit()} ></Button>
            </Box>
        </>
    )
}

export default ClickPlace;