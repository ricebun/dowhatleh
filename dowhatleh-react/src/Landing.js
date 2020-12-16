import { Box, Text } from "grommet"
import Input from "./Input"
import Submit from './Submit'

const Landing = (props) => {

    return (
        <>
            <Box margin="medium"
                pad="small">
                <h1>do what leh?</h1>
                <Box>
                    <Text>Welcome to my app! Use it to help you find something to do today, and go on your Singapoliday! Blah blah xxxxxx blah</Text>
                </Box>

                <h1>tell me first...</h1>
                <Input party={props.props.party} setParty={props.props.setParty} avoid={props.props.avoid} setAvoid={props.props.setAvoid} />
                <Submit party={props.props.party} avoid={props.props.avoid} submitStatus={props.props.submitStatus} setSubmitStatus={props.props.setSubmitStatus} label="Ready?" />
            </Box>
        </>
    )
}

export default Landing