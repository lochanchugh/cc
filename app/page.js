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
      <h1 className="text-4xl text-white mb-2">{title}</h1>
      <p className="text-lg text-gray-300">{update}</p>
    </div>
  );
} else {
  Displayscore = (
    <div className="text-center grid grid-cols-2 gap-4">
      <div className="text-lg text-white bg-green-100 dark:bg-green-800 rounded-lg border border-green-500 p-4">
        <p>{batsman} - {batsmanrun} ({fours}, {sixes}) - SR: {sr}</p>
        <p>{batsmantwo} - {batsmantworun} ({batsmantwofours}, {batsmantwosixes}) - SR: {batsmantwosr}</p>
        <p>{bowler} - {bowlerover} - {bowlerruns}/{bowlerwickets}</p>
        <p>{bowlertwo} - {bowletworover} - {bowlertworuns}/{bowlertwowickets}</p>
        <p className="mt-4">Run Rate: {runrate}</p>
        <p>Recent Balls: {recentballs} | Last Wicket: {lastwicket} | Partnership: {partnership}</p>
      </div>
      <div className="text-lg text-white bg-white dark:bg-gray-700 rounded-lg border border-blue-500 p-4">
        <p>{score}</p>
        <p>{update}</p>
        
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
  <div className="min-h-screen bg-blue-200 dark:bg-blue-800 flex justify-center items-center">
    <div className="bg-white dark:bg-gray-700 rounded-lg border border-green-500 p-6">
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-green-100 dark:bg-green-800 rounded-lg border border-green-500 p-4">
          {Displayscore}
        </div>
       
      </div>
    </div>
  </div>
)
}
