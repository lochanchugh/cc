"use client"

import { useState, useEffect } from "react"

export default function Index2() {
  const [title, setTitle] = useState("Match Name...")
  const [score, setScore] = useState("Live Score Data...")
  const [batsman, setBatsman] = useState("Batsman Data...")
  const [batsmanrun, setBatsmanrun] = useState("")
  const [fours, setBatsmanfours] = useState("")
  const [sixes, setBatsmansixes] = useState("")
  const [sr, setBatsmansr] = useState("")
  
  const [batsmantwo, setBatsmantwo] = useState("Batsman Data...")
  const [batsmantworun, setBatsmantworun] = useState("")
  const [batsmantwofours, setBatsmantwofours] = useState("")
  const [batsmantwosixes, setBatsmantwosixes] = useState("")
  const [batsmantwosr, setBatsmantwosr] = useState("")
  
  const [bowler, setBowler] = useState("")
  const [bowlerruns, setBowlerruns] = useState("")
  const [bowlerover, setBowlerover] = useState("")
  const [bowlerwickets, setBowlerwickets] = useState("")
  const [bowlermaiden, setBowlermaiden] = useState("")
  
  const [bowlertwo, setBowlertwo] = useState("")
  const [bowlertworuns, setBowlertworuns] = useState("")
  const [bowletworover, setBowletworover] = useState("")
  const [bowlertwowickets, setBowlertwowickets] = useState("")
  const [bowlertwomaiden, setBowlertwomaiden] = useState("")
  

  const [recentballs, setRecentballs] = useState("")
  const [lastwicket, setLastwicket] = useState("")
  const [partnership, setPartnership] = useState("")
  const [commentary, setCommentary] = useState("")
  const [runrate, setRunrate] = useState("Fetching Run rate")
  const [update, setUpdate] = useState("match Update")
  const fetchWord = async () => {
    const response = await fetch("/live")
    const data = await response.json()
    setTitle(data.title)
    setScore(data.current)
    setBatsman(data.batsman)
    setBatsmanrun(data.batsmanrun)
    setBatsmanfours(data.fours)
    setBatsmansixes(data.sixes)
    setBatsmansr(data.sr)
    
    setBatsmantwo(data.batsmantwo)
    setBatsmantworun(data.batsmantworun)
    setBatsmantwofours(data.batsmantwofours)
    setBatsmantwosixes(data.batsmantwosixes)
    setBatsmantwosr(data.batsmantwosr)
    
    setBowler(data.bowler)
    setBowlerover(data.bowlerover)
    setBowlerruns(data.bowlerruns)
    setBowlerwickets(data.bowlerwickets)
    setBowlermaiden(data.bowlermaiden)
    
    setBowlertwo(data.bowlertwo)
    setBowletworover(data.bowletworover)
    setBowlertworuns(data.bowlertworuns)
    setBowlertwowickets(data.bowlertwowickets)
    setBowlertwomaiden(data.bowlertwomaiden)

    setRecentballs(data.recentballs)
    setLastwicket(data.lastwicket)
    setPartnership(data.partnership)
    setCommentary(data.commentary)
    setRunrate(data.runrate)
    setUpdate(data.update)
  }
  let Displayscore
if (batsman === "Data Not Found") {
  Displayscore = (
    <div className="text-center">
      <h1 className="text-4xl text-gray-800 mb-4">{title}</h1>
      <p className="text-lg text-gray-600">{update}</p>
    </div>
  )
} else {
  Displayscore = (
    <div className="text-center">
      <h1 className="text-4xl text-gray-800 mb-4">{title}</h1>
      <p className="text-lg text-gray-600">{update}</p>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <p className="text-2xl text-black">{score}</p>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-lg text-gray-700">{batsman} - {batsmanrun} ({fours}, {sixes}) - SR: {sr}</p>
          <p className="text-lg text-gray-700">{batsmantwo} - {batsmantworun} ({batsmantwofours}, {batsmantwosixes}) - SR: {batsmantwosr}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-lg text-gray-700">{bowler} - {bowlerover} - {bowlerruns}/{bowlerwickets}</p>
          <p className="text-lg text-gray-700">{bowlertwo} - {bowletworover} - {bowlertworuns}/{bowlertwowickets}</p>
        </div>
        <p className="text-lg text-gray-600 mt-4">Run Rate: {runrate}</p>
        <p className="text-lg text-gray-600">Recent Balls: {recentballs} | Last Wicket: {lastwicket} | Partnership: {partnership}</p>
        <p className="text-lg text-gray-600 mt-4"></p>
      </div>
    </div>
  )
}

let Displaybutton
  if (batsman === "Data Not Found") {
    Displaybutton = ""
  } else {
    Displaybutton = (
      <button
        className="bg-green-400 text-black font-medium py-2 px-4 rounded-full mt-4 border shadow-md"
        type="button"
        onClick={() => fetchWord()}
      >
        
      </button>
    )
  }
  useEffect(() => {
    fetchWord()
  }, [])

setInterval(function(){
  fetchWord();
}, 150);


 return (
  <div className="min-h-screen bg-current dark:bg-current flex justify-center items-center">
    <div className="dark:bg-gray-800 bg-blue-300 rounded-lg border border-blue-400 p-6">
      {Displayscore}
    </div>
    <div className="flex items-center justify-center mt-4">
      {Displaybutton}
    </div>
  </div>
)

}
