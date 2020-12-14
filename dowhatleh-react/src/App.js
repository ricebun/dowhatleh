import { Grommet, Box } from "grommet";

import Landing from "./Landing"

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Box><Landing /></Box>
        <Box>Result</Box>
        <Box>Selection Details</Box>
      </Box>
    </Grommet>
  );
}

export default App;
