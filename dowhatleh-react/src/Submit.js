import { Box, Button } from "grommet"

const Submit = (props) => {

    const handleSubmit = () => {
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
            props.setSubmitStatus(true)
        }
    }

    return (
        <>
            <Box align="end">
                <Button primary plain="true"
                    size="large"
                    label="Ready?"
                    onClick={() => handleSubmit()} ></Button>
            </Box>
        </>
    )
}

export default Submit;