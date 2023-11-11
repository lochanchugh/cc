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
      <p className="text-lg text-blue-500 mb-4">{update}</p>
    </div>
  )
} else {
  Displayscore = (
    <div className="flex items-center justify-between">
      <img src="country_flag_url" alt="Country Flag" className="w-16 h-16" />
      <h1 className="text-2xl">{title}</h1>
      <img src="country_flag_url" alt="Country Flag" className="w-16 h-16" />
    </div>
    <hr className="border-gray-300 my-4" />
    
    <div className="flex items-center justify-between gap-4 p-4">
      <div className="text-center">
        <div className="bg-blue-500 rounded-lg p-6">
          <p className="text-4xl font-bold mb-4">{score}</p>
          <p>CRR: {runrate}</p>
          <p className="text-lg">{update}</p>
        </div>
    <div>
    <marquee> <p>Partnership: {partnership}   Last Wicket: {lastwicket}</p> </marquee> </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
           
            <p>{batsman}</p>
            <p>{batsmanrun} ({fours}, {sixes}) - SR: {sr}</p>
            <p>{batsmantwo}</p>
            <p>{batsmantworun} ({batsmantwofours}, {batsmantwosixes}) - SR: {batsmantwosr}</p>
          </div>
          <div>
           
            <p>{bowler} - {bowlerover} - {bowlerruns}/{bowlerwickets}</p>
            <p>{bowlertwo} - {bowletworover} - {bowlertworuns}/{bowlertwowickets}</p>
            
          </div>
        </div>
    
    <div className="bg-blue-100 rounded-lg p-4 text-black">
      <p>Recent Balls: {recentballs}</p>
    </div>
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
  <div className="min-h-screen bg-blue-50 dark:bg-blue-100 flex flex-col justify-between p-4">
    
    <div className="bg-blue-100 rounded-lg p-6 text-center">
      {Displayscore}
    </div>
  </div>
)
}
