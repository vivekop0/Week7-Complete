
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { Messaging, jobs, mynetwork, notification } from './atom'

function App() {
return <div>
  <RecoilRoot>
<MainApp></MainApp>
  </RecoilRoot>
</div>
  
}

function MainApp(){
  const myNetworkCount =useRecoilValue(mynetwork)
  
  const jobsCount = useRecoilValue(jobs)
  const [messageCount,setMessageCount] = useRecoilState(Messaging)
  const notificationCount = useRecoilValue(notification)
  
  return (
    <>
    <button>Home</button>
    <button>My network {myNetworkCount}</button>
    <button>Jobs {jobsCount}</button>
    <button>Messaging {messageCount>=100?"99+":messageCount}</button>
    <button>Notification {notificationCount>=100?"99":notification}</button>
    <button onClick={()=>{
 setMessageCount(messageCount+1)
    }
     
    }>Me</button>
    
    </>
  )
}

export default App
