import { Box, Text, Heading } from "grommet"
import Input from "./Input"
import Submit from './Submit'

const Landing = (props) => {

    return (
        <>
            <Box margin={{ "top": "xxxsmall", "left": "large" }}
                pad="small"
                height="100vh"
                width="90vw"
                alignContent="center">
                <Heading>do what leh?</Heading>
                <Box width="3/4">
                    <Text>Welcome to my app! If you need some help finding something to do in your free time, I'm here to help! Only three choices so you don't get overwhelmed. Just pick and get going :)</Text>
                </Box>

                <Heading margin={{ "top": "large", "bottom": "small" }}>tell me first...</Heading>
                <Input party={props.props.party} setParty={props.props.setParty} avoid={props.props.avoid} setAvoid={props.props.setAvoid} />
                <Submit party={props.props.party} avoid={props.props.avoid} submitStatus={props.props.submitStatus} setSubmitStatus={props.props.setSubmitStatus} label="Ready?" />
            </Box>
        </>
    )
}

export default Landing