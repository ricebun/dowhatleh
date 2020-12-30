// onClick => set regen = true and activate search with new API URL

import { Box, Button } from "grommet"

const Regenerate = (props) => {
    const handleRegen = () => {
        console.log("regen clicked, setting to true")
        props.setRegen(true)
    }
    return (
        <>
            <Box align="center" margin={{ "top": "medium", "bottom": "small" }} height="xxsmall">
                <Button primary
                    fill="vertical"
                    label="Regenerate"
                    onClick={() => handleRegen()} ></Button>
            </Box>
        </>
    )
}

export default Regenerate;