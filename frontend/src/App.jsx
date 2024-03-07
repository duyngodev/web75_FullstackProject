import './App.css'
import Landing from './pages/Landing'
import { Route, Routes } from 'react-router-dom'
import App2 from './App2'

function App() {
  
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Thêm Path to Service ở đây vì không có Header, Footer */}
        <Route path="*" element={<App2 />} />
      </Routes>
    </>
  )
}

export default App
