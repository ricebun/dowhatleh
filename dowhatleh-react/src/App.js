import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Grommet, Box } from "grommet";

import Landing from "./Landing"
import ShowResults from './ShowResults'

const theme = {
  global: {
    background: "#FDD55B",
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    colors: {
      yellow: "#FDD55B",
      pink: "#FFEDED"
    },
    full: true,
  }
};

const App = () => {
  const [party, setParty] = useState("")
  const [avoid, setAvoid] = useState("")
  const [submitStatus, setSubmitStatus] = useState(false)
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
    party,
    setParty,
    avoid,
    setAvoid,
    setGoBack,
    submitStatus,
    setSubmitStatus,
  }

  return (
    <Grommet theme={theme}>
      <Box fill full background="yellow" alignContent="center" className="bigbox">
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
            <Route>
              <Landing props={landingProps} />
              {submitStatus ? <Redirect to="/results" /> : null}
            </Route>
          </Switch>
        </Router>
      </Box>
    </Grommet>
  );
}

export default App;
