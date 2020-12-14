import { useState } from "react";

import { Box, Text, Select } from "grommet";

const Input = () => {
    const [party, setParty] = useState("")
    const [avoid, setAvoid] = useState("")

    const handleSelection = (e, setter) => {
        console.log(e)
        setter(e.value)
    }

    return (
        <>
            <Box direction="row"
                justify="center"
                gap="medium">
                <Box background="pink"
                    pad="small">
                    <Text>Who's Coming?</Text>
                    <Box>
                        <Select
                            options={["My partner and I", "Friends", "Family", "Just Me"]}
                            value={party}
                            onChange={(e) => handleSelection(e, setParty)}
                            placeholder="Who's coming?"
                        />
                    </Box>
                </Box>
                <Box background="pink"
                    pad="small">
                    <Text>Things you don't want to do</Text>
                    <Select
                        options={["History & Culture", "Adventure", "Leisure & Recreation", "Nature & Wildlife", "Sightseeing", "Others"]}
                        value={avoid}
                        onChange={(e) => handleSelection(e, setAvoid)}
                        placeholder="Things you don't want to do"
                        multiple
                    />
                </Box>
            </Box>
        </>
    )
}

export default Input