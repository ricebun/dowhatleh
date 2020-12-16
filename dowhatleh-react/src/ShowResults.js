// import { Card } from "grommet"
import Return from "./Return";

const ShowResults = (props) => {

    return (
        <>
            {props.searchComplete ? <div>
                <h1>three choose one, go have fun!</h1>
                <p>{props.searchResults[0].name}</p>
                <p>{props.searchResults[1].name}</p>
                <p>{props.searchResults[2].name}</p>
                <Return />
            </div> : <p>Loading..</p>}
        </>
    )
}

export default ShowResults  