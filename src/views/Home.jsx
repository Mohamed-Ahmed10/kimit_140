export default function Home() {

    let handleClick = (name) => {
        console.log("Hello " + name)
    }

    let handleSubmit = (ev) => {
        ev.preventDefault();
        console.log("Submitted")
    }

    return (
        <div>
            <h2>Home</h2>
            <button onClick={() => handleClick("Mohamed")}>OK</button>

            <hr />
            <form onSubmit={(ev) => handleSubmit(ev)} >
                <input type="text" />
                <input type="submit" value="OK" />
            </form>
        </div>
    )
}
