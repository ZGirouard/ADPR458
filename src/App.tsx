import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Assignments from './assignments/Assignments'
import Work from './assignments/Work'
import Contact from './assignments/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
