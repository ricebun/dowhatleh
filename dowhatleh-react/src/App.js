import { Grommet, Box } from "grommet";

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
        <Box flex>Home</Box>
        <Box flex>Input</Box>
        <Box flex>Result</Box>
        <Box flex>Selection Details</Box>
      </Box>
    </Grommet>
  );
}

export default App;
