import './App.css'
import Accordian, { AccordianItem } from './components/Accordian'
import dot from "./assets/bluedot.webp"
import react from "./assets/React.png"
import tailwindCSS from "./assets/tailwindcss.png"

function App() {

  const anyhting = <div className="flex flex-row w-full pr-3 justify-between items-center">
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text font-bold">
      Anything Goes?
    </div>
    <div><img src={dot} width="12px" alt="dot" /></div>
  </div>

  const only = <div className="flex items-center">
    And it's <img src={react} width={40} className="px-2" /> & <img src={tailwindCSS} width={40} className="px-2" /> Only.
  </div>

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <Accordian className="max-w-lg">
          <AccordianItem value="1" trigger="👋 Hello There">
            We're going to make this Accordian component entirely from scratch
          </AccordianItem>
          <AccordianItem value="2" trigger="🌟 It's Animated">
            We'll learn how to make it transition between the open and close states
          </AccordianItem>
          <AccordianItem value="3" trigger={anyhting}>
            It is entirely customizable. You can put any HTML element and style it however you want.
          </AccordianItem>
          <AccordianItem value="4" trigger={only}>
            Nothing but React and Tailwind CSS
          </AccordianItem>
        </Accordian>
      </div>
    </>
  )
}

export default App
