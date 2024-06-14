import { useState } from 'react'
import './App.css'
import Chatframe from './Chatframe'
import { RxCrossCircled } from "react-icons/rx";
import { VscRobot } from "react-icons/vsc";


function App({ TelechatbotId, host, iFrameSrc, configure }) {

  // console.log(TelechatbotId, host,  iFrameSrc, configure)
  const [isOpen, setOpen] = useState(false)



  return (
    <>
      {isOpen ?
        <div style={{ width: configure.width?configure.width:"360px", height: configure.Height?configure.Height:"480px", position: 'fixed', right: '10px', bottom: "10px", overflow: "hidden", borderRadius: '10px', }}>
          <div onClick={() => { setOpen(false) }} style={{ position: 'absolute', right: "5px", top: "0px", fontSize: "30px", cursor: 'pointer',color:configure.Closebtncolor }}>
            <RxCrossCircled />
          </div>
          <Chatframe TelechatbotId={TelechatbotId} host={host}  iFrameSrc={iFrameSrc} configure={configure} />
        </div> : <div onClick={() => { setOpen(true) }} id='pingeffect' style={{ position: "fixed", right:configure.chatIconRight, bottom: configure.chatIconBottom, cursor: 'pointer', width: '50px', height: '50px', textAlign: 'center', borderRadius: '50%', alignItems: 'center', padding: 'auto', placeItems: 'center', backgroundColor: configure.chatIconbgColor}}>
          <VscRobot style={{ color: configure.chatIconcolor, width: '80%', height: '99%' }} />
        </div>
      }
    </>
  )
}

export default App
