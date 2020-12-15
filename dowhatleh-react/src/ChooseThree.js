import { useState, useEffect } from 'react'


const generateRandomArrayIndex = (array) => {
    return Math.floor(Math.random() * array.length)
}

const generateTwoRandomArrayIndexes = (array) => {
    let num1, num2
    num1 = Math.floor(Math.random() * array.length)
    num2 = Math.floor(Math.random() * array.length)

    while (num1 === num2) {
        num2 = Math.floor(Math.random() * array.length)
    }
    return [num1, num2]
}

const ChooseThree = (props) => {
    const [randomWalksIndex, setRandomWalksIndex] = useState()
    const [randomAttractionsIndexes, setRandomAttractionsIndexes] = useState([])

    useEffect(() => {
        setRandomWalksIndex(generateRandomArrayIndex(props.walks.length))
        setRandomAttractionsIndexes(generateTwoRandomArrayIndexes(props.attractions.length))
        props.setTmpSearchResults([props.walks[randomWalksIndex], props.attractions[randomAttractionsIndexes[0]], props.attractions[randomAttractionsIndexes[1]]])
    }, [])

    return (<></>)
}

export default ChooseThree