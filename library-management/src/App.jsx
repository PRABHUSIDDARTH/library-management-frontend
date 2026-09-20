import './App.css'
import Navbar  from './Components/Navbar'
import Home from'./Pages/Home'
import Genre  from './Pages/Genre'
import Book  from './Pages/Books'
import Member  from './Pages/Member'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <div>
      <Navbar />    
       <br />  
        <Routes>
          <Route index element={<Home />} />
          <Route path='/genre' element={<Genre />} />
          <Route path='/books' element={<Book />} />
          <Route path='/member' element={<Member />} />          
        </Routes>
     
    </div>
  )
}

export default App
