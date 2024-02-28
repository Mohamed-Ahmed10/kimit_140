import Course from "../components/Course";

export default function Courses() {
    var person = {
        name: 'John Doe',
        age: 50
    }

    var { name, age: userAge } = person

    console.log(name)
    console.log(userAge)

    return (
        <div>
            <Course courseName="HTML" >
                <b className="heading">This is course description for course one</b>
            </Course>
            <Course courseName="CSS" price="30" >
                <b className="heading">This is course description for course two</b>
            </Course>
            <Course courseName="JS" price="40" >
                <b className="heading">This is course description for course three</b>
            </Course>
            <Course courseName="React" price="50" >
                <b className="heading">This is course description for course four</b>
            </Course>
        </div>
    )
}
