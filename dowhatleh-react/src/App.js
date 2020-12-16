import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

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
  const [goBack, setGoBack] = useState(false)

  const landingProps = {
    party,
    setParty,
    avoid,
    setAvoid,
    submitStatus,
    setSubmitStatus,
  }

  const showResultsProps = {
    searchResults,
    setSearchResults,
    searchComplete,
    setParty,
    setAvoid,
    setGoBack,
    setSubmitStatus,
  }

  return (
    <>
      <Box fill>
        <Router>
          <Switch>
            <Route strict path="/search">
              <Landing props={landingProps} />
              {submitStatus ? <Redirect to="/results" /> : null}
            </Route>
            <Route strict path="/results">
              <ShowResults props={showResultsProps} />
              {/* {goBack ? <Redirect to="/search" /> : console.log("goBack is false")} */}
            </Route>
            {/* <Route>
              <Landing props={landingProps} />
              {submitStatus ? <Redirect to="/results" /> : null}
            </Route> */}
          </Switch>
        </Router>
      </Box>

      {submitStatus ? <Search party={party} searchResults={searchResults} setSearchResults={setSearchResults} setSearchComplete={setSearchComplete} setSubmitStatus={setSubmitStatus} /> : ""}
    </>
  );
}

export default App;
