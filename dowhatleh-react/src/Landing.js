import { Box, Text } from "grommet"
import Input from "./Input"
import Submit from './Submit'

const Landing = (props) => {

    return (
        <>
            <Box margin="medium"
                pad="medium">
                <h1>do what leh?</h1>
                <Box width="2/4">
                    <Text>Welcome to my app! If you need some help finding something to do in your free time, I'm here to help! Only three choices so you don't get overwhelmed. Just pick and go :)</Text>
                </Box>

                <h1>tell me first...</h1>
                <Input party={props.props.party} setParty={props.props.setParty} avoid={props.props.avoid} setAvoid={props.props.setAvoid} />
                <Submit party={props.props.party} avoid={props.props.avoid} submitStatus={props.props.submitStatus} setSubmitStatus={props.props.setSubmitStatus} label="Ready?" />
            </Box>
        </>
    )
}

export default Landing