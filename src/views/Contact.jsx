import { useMemo, useState } from "react"

export default function Contact() {
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [age, setAge] = useState("")

    let randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    let fullName = useMemo(() => (
        <div style={{ color: randomColor() }}>your full name is : {firstName + " " + lastName} </div>
    ), [firstName, lastName])

    return (
        <div>
            <h2>Contact</h2>

            <input type="text" onChange={ev => setFirstName(ev.target.value)} />
            <input type="text" onChange={ev => setLastName(ev.target.value)} />
            <input type="number" onChange={ev => setAge(ev.target.value)} />
            <hr />

            <div>your first name is : {firstName} </div>
            {fullName}
            <div>your last name is : {lastName} </div>

            <div>your age is : {age} </div>
        </div>
    )
}
