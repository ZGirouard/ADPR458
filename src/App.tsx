import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Assignments from './assignments/Assignments'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assignments" element={<Assignments />} />
    </Routes>
  )
}

export default App
