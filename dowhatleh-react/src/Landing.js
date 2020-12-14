import { Box, Text, Button } from "grommet"

import Input from "./Input"

const Landing = () => {
    return (
        <>
            <Box margin="medium"
                pad="small">
                <h1>do what leh?</h1>
                <Box>
                    <Text>Welcome to my app! Use it to help you find something to do today, and go on your Singapoliday! Blah blah xxxxxx blah</Text>
                </Box>

                <h1>but tell me first...</h1>
                <Input />
                <Box align="end">
                    <Button primary plain="true"
                        size="large"
                        label="Ready?"></Button>
                </Box>
            </Box>

        </>
    )
}

export default Landing