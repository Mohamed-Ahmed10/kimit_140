import DisplayUser from "./components/DisplayUser"
import HomePage from "./views/HomePage"

function App() {

  var courseName = "React"

  return (
    <>
      <h1>Hello first session in React </h1>

      <div className="test">{courseName}</div>

      <DisplayUser />
      <hr />
      <HomePage />
    </>
  )
}

export default App
