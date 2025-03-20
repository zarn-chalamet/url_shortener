import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Modal from 'react-modal';
Modal.setAppElement('#root');

function App() {

  return (
  <div className="min-h-screen flex flex-col">
    {/* nav bar */}
    <Navbar/>

    {/* body */}
    <div className="flex-grow">
      <Outlet/>
    </div>

    {/* footer */}
    <Footer/>
  </div>
  )
}

export default App
