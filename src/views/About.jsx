// import { useContext } from "react";
// import { ProductsContext } from "../App";

import { useRef, useEffect } from "react";

export default function About() {


    var inputRef = useRef();


    var parent = useRef();


    useEffect(() => {
        inputRef.current.focus()
        console.log(parent.current.children)
    }, [])

    return (
        <div>
            <h2>I am about</h2>
            <div ref={parent} id="hello">
                <div className="test">test</div>
                <div className="test">test</div>
                <div className="test">test</div>
                <div className="test">test</div>
                <div className="test">test</div>
                <div className="test">test</div>
            </div>

            <input type="text" ref={inputRef} />
        </div>
    );
}