// import { Card } from "grommet"
const ShowResults = (props) => {

    return (
        <>
            {props.searchComplete ? <div><p>showingresults</p>
                <p>{props.searchResults[0].name}</p>
                <p>{props.searchResults[1].name}</p>
                <p>{props.searchResults[2].name}</p>
            </div> : <p>Loading..</p>}
        </>
    )
}

export default ShowResults  