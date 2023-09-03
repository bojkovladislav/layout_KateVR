import './styles/App.scss'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Link to="/about">Go to about page</Link>
    <br />
    <Link to="/">Go to home page</Link>

    <Routes>
      <Route path="/" element={
        <div>Hello there! We are at the home route</div>
      }/>

      <Route path="/about" element={
        <div>We are now at the about page!</div>
      }/>
    </Routes>

    </>
  )
}

export default App
