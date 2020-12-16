import { useState } from 'react'
import { Grommet, Box } from "grommet";

import Landing from "./Landing"
import Search from "./Search"
import ShowResults from './ShowResults'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const App = () => {
  const [party, setParty] = useState("")
  const [avoid, setAvoid] = useState("")
  const [submitStatus, setSubmitStatus] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searchComplete, setSearchComplete] = useState(false)

  return (
    <>
      <Grommet theme={theme} full>
        <Box fill>
          <Box>{submitStatus ? <ShowResults searchResults={searchResults} searchComplete={searchComplete} submitStatus={submitStatus} setSubmitStatus={setSubmitStatus} setParty={setParty} setAvoid={setAvoid} /> : <Landing party={party} setParty={setParty} avoid={avoid} setAvoid={setAvoid} submitStatus={submitStatus} setSubmitStatus={setSubmitStatus} />}</Box>
        </Box>
      </Grommet>
      {submitStatus ? <Search party={party} searchResults={searchResults} setSearchResults={setSearchResults} setSearchComplete={setSearchComplete} submitStatus={submitStatus} /> : ""}
    </>
  );
}

export default App;
