//import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './common/Header/Header'
import { Home } from './pages/Home/Home'
import { Body } from './pages/body/Body'

const App =() => {
//   const [count, setCount] = useState(1990)

//   const clickHandler = () => {
//     setCount(count+10)
//   }

//   useEffect(()=>{
//     console.log(count)
// },[count])

  return (
    <>
      {/* <div className="card">
        <button onClick={clickHandler}>
          cuando naciste {count}
        </button>
      </div> */}
      {/* <Home>

      </Home> */}
      <Header/>
      <Body/>
    </>
  )
}

export default App
