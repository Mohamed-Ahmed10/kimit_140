// import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function About() {

    // const [count, setCount] = useState(0)
    const countState = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    let increase = () => {
        // setCount(count + 1)
        dispatch({
            type: 'INCREMENT'
        })
    }

    let decrease = () => {
        // setCount(count - 1)
        dispatch({
            type: 'DECREMENT'
        })
    }

    return (
        <div className="d-flex justify-content-between w-50 m-auto">
            <Button variant="primary" onClick={increase}>Increase</Button>
            <div>{countState}</div>
            <Button variant="primary" onClick={decrease}>Decrease</Button>
        </div>
    );
}