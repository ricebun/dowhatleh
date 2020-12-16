import { Box, Card, Image, Heading } from 'grommet'
import React from "react"
import ResultCard from "../ResultCard"

export default test = () => {
    title: 'ResultCard',
        component: ResultCard,
};

// export const test = (props) => {
//     return (
//         <ResultCard>
//             <Card height="medium" width="medium" border={{ color: 'brand', size: 'small' }}>
//                 <Box height="1/2" border={{ color: 'yellow', size: 'small' }}>
//                     <Image
//                         fit="contain"
//                         src={props.result.thumbnail}
//                     />
//                 </Box>
//                 <Box height="1/2" pad="small" responsive={false} border={{ color: 'green', size: 'small' }}>
//                     <Heading level="3" flex-shrink="true" justify="center">
//                         {props.result.name}
//                     </Heading>
//                     {/* <Paragraph margin={{ top: 'none' }}>
//                         {props.result.description}
//                     </Paragraph> */}
//                 </Box>
//             </Card>
//         </ResultCard>
//     )
// }