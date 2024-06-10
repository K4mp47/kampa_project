import './App.css'
import ThreeComponent from './3dbg'
import Clock from './Clock'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import FPS from './FPS'

function App() {

  const isMediumScreen = useMediaQuery({ minWidth: 768 }); // Adjust this value as needed

  return (
    <div className='absolute overflow-hidden h-full w-full text-white'>
      <div className='absolute m-4 md:m-10 z-10 md:text-4xl text-2xl'>K4mp47</div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className='mx-auto -z-5 sm:scale-100'>
        <ThreeComponent />
      </div>
      <a href="https://github.com/K4mp47">
        <div className='font-mono absolute m-4 md:m-10 md:mb-[8rem] mb-[4.6rem] z-1 text-[0.6rem] md:text-[1rem] text-gray-400 left-0 bottom-0'>
        Hi, I'm a
        </div>
      </a>
      <div className='absolute m-4 md:m-10 md:mb-28 mb-14 z-1 text-md lg:text-2xl left-0 bottom-0'>
        Web Developer 
      </div>
      <div className='font-mono absolute m-4 md:m-10 md:mb-20 mb-10 z-1 text-[0.5rem] md:text-[1rem] text-gray-400 left-0 bottom-0'>
        Local Time (UTC+1)
      </div>
      <div className='absolute m-4 md:m-10 md:mb-14 mb-[1.45rem] z-1 text-sm md:text-2xl left-0 bottom-0'>
        <Clock />
      </div>
      <div className='absolute m-4 md:m-10 md:mb-14 mb-[1.4rem] z-1 ml-32 md:ml-56 font-mono text-[0.5rem] p-[0.09rem] md:p-[0.16rem] md:text-[1rem] text-gray-400 left-0 bottom-0'>
        <FPS />
      </div>
      <div className='font-mono absolute m-4 md:m-10 z-1 text-[0.5rem] md:text-[1rem] text-gray-400 left-0 bottom-0'>
        Treviso, Veneto &#x21AA; Italy
      </div>
      <div className='absolute flex flex-col m-4 md:m-10 z-1 text-md right-0 bottom-0'>
        <a href="https://www.instagram.com/isthatcampa/?next=%2F">
          <FaInstagram size={isMediumScreen ? 25 : 15} />
        </a>
        <a href="https://www.linkedin.com/in/alberto-campagnolo-916b86265/">
          <FaLinkedin size={isMediumScreen ? 25 : 15} />
        </a>
      </div>
    </div>
  )
}

export default App
