export default function Courses() {
    var courses = [
        {
            name: "HTML",
            id: 1
        },
        {
            name: "CSS",
            id: 2
        },
        {
            name: "JS",
            id: 3
        },
        {
            name: "React",
            id: 4
        },]


    return (
        <>
            <h1>Courses</h1>
            <ul>
                {courses.map(course =>
                    <li key={course.id}>{course.name}</li>
                )}
            </ul>
        </>
    )
}