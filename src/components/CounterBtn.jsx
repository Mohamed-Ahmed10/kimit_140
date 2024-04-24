import React from "react"
// eslint-disable-next-line react/prop-types
function CounterBtn({ clickEvent, children }) {

    let randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

    return (
        <button style={{ background: randomColor() }} onClick={clickEvent}>{children}</button>

    )
}


export default React.memo(CounterBtn)