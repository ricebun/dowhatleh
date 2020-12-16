import { Box, Button } from 'grommet'

const Return = () => {
    const handleReturn = () => {
        // clear party, avoid, searchresults
    }

    return (
        <Box align="end">
            <Button primary plain="true"
                size="large"
                label="Try again?"
                onClick={() => handleReturn()} ></Button>
        </Box>
    )
}

export default Return