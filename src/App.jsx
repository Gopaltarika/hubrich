import { useEffect, useState } from 'react'
import './App.css'
import MyNav from './components/MyNav'
import Fault from './components/Fault'
import WillGet from './components/WillGet'
import Target from './components/Target'
import Analysis from './components/Analysis'
import Ex from './components/Ex'
import About from './components/About'
import ClientSays from './components/ClientSays'
import Binding from './components/Binding'
import MyFooter from './components/MyFooter'
import BackToTop from './components/BackToTop'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const [loader, setloader] = useState(false)
  useEffect(() => {
    setloader(true)
    setTimeout(() => {
      setloader(false)
    }, 3500);
  }, [])
  useEffect(() => {
    AOS.init({
      once : true,
      duration:1500,
    });
  }, [])

  return (
    <>
      {loader ? (
        <div className='bg-[#8703C5] w-full flex flex-col justify-center items-center h-full fixed top-0 left-0 bottom-0 right-0 z-10 overflow-hidden'>
          <h1 className='text-white text-center text-[60px] font-poppins font-bold animate-bounce'>HubRIch</h1>
          <div className='w-[50px] h-[50px] rounded-full border-r-4 border-white animate-spin ml-4'></div>
        </div>
      ) : (<div className='relative overflow-x-clip'>
        <MyNav />
        <Fault />
        <WillGet />
        <Target />
        <Analysis />
        <Ex />
        <About />
        <ClientSays />
        <Binding />
        <MyFooter />
        <BackToTop />
      </div>)}
    </>
  )
}

export default App
