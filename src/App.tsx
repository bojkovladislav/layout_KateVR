import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './components/Wrapper';
import './styles/App.scss';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={
          <div>Hello there! We are at the home route</div>
        }/>

        <Route path="/about" element={
          <div>We are now at the about page!</div>
        }/>
      </Routes>
    </Wrapper>
  )
}

export default App
