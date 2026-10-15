import { Suspense, useState } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/players/Players"
import type { iplayer } from "./Types/player"



const playersFetch = async():Promise<iplayer[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
} 

function App() {

  const [playersPromise] = useState(() => playersFetch());

  const [coin, setCoin] = useState<number>(5000)

  return (
    <>
      <Nav coin = {coin}></Nav>
      <Banner></Banner>
      <Suspense fallback = {<h2>loading.........</h2>}>
        <Players playersPromise = {playersPromise} coin = {coin} setCoin ={setCoin}></Players>
      </Suspense>
    </>
  )
}

export default App
