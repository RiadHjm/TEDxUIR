import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Container from './routes/Container'
import Home from './components/Home'
import About from './components/About'
import Volounteer from './components/Volounteer'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Container />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/volounteer' element={<Volounteer />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
