import { useState } from "react";

export default function CourseName() {
    
    // var course = "React course "
    var [course, setCourse] = useState("React course ")

    let handleCourseName = (ev) => {
        // course = "Javascript";
        // setCourse("Javascript");
        setCourse(ev.target.value);
    }
    
    return (
        <div>
            <h2>CourseName</h2>
            <input type="text" onChange={handleCourseName} />
            {/* <button onClick={handleCourseName}>Change</button> */}
            <div>{course}</div>
        </div>
    )
}
