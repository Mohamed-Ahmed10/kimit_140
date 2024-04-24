import { useCallback, useState } from "react"
import CounterBtn from "../components/CounterBtn"


export default function CallBackExplain() {

    const [counter, setCounter] = useState(0)

    let handleCounter = () => {
        setCounter(prevCount => prevCount + 1)
    }

    let incrementCounter = useCallback(handleCounter, [])

    return (
        <div>
            <h2>{counter}</h2>
            <CounterBtn clickEvent={incrementCounter}>Click me</CounterBtn>
        </div>
    )
}
