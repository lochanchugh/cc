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
if (batsman !== "Data Not Found") {
  Displayscore = (
    <div className="text-center">
      <h1 className="text-4xl text-white mb-2">{title}</h1>
      <p className="text-lg text-blue-500 mb-4">{update}</p>
    </div>
  )
} else {
Displayscore = (
  <div className="flex flex-col items-center justify-between p-4">
    <h1 className="text-2xl text-blue-700">{title}</h1>
    <hr className="border-blue-500 my-4" />

    <div className="bg-blue-300 rounded-lg p-4 mb-3">
      <p className="text-4xl text-white font-bold text-center">{score}</p>
      <p className="text-lg text-center text-blue-800">{update}</p>
    </div>

    <marquee>
      <p className="text-blue-700">Partnership: {partnership} | Last Wicket: {lastwicket} | {runrate}</p>
    </marquee>

    <div className="grid grid-cols-1 gap-0 mt-3 border border-blue-500">
      <div className="text-left border-2 border-blue-500 p-4">
        <table className="w-full">
          <thead>
            <tr className="text-white bg-blue-500">
              <th className="px-4 py-2">Batsman</th>
              <th className="px-4 py-2">Runs</th>
              <th className="px-4 py-2">Balls</th>
              <th className="px-4 py-2">4s</th>
              <th className="px-4 py-2">6s</th>
              <th className="px-4 py-2">SR</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-blue-900">
              <td className="px-4 py-2">{batsman}</td>
              <td className="px-4 py-2">{batsmanrun}</td>
              <td className="px-4 py-2">{/* Add balls details here */}</td>
              <td className="px-4 py-2">{fours}</td>
              <td className="px-4 py-2">{sixes}</td>
              <td className="px-4 py-2">{sr}</td>
            </tr>
            <tr className="text-blue-900">
              <td className="px-4 py-2">{batsmantwo}</td>
              <td className="px-4 py-2">{batsmantworun}</td>
              <td className="px-4 py-2">{/* Add balls details here */}</td>
              <td className="px-4 py-2">{batsmantwofours}</td>
              <td className="px-4 py-2">{batsmantwosixes}</td>
              <td className="px-4 py-2">{batsmantwosr}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-left border-2 border-blue-500 p-4">
        <table className="w-full">
          <thead>
            <tr className="text-white bg-blue-500">
              <th className="px-4 py-2">Bowler</th>
              <th className="px-4 py-2">Overs</th>
              <th className="px-4 py-2">Runs</th>
              <th className="px-4 py-2">Wickets</th>
              <th className="px-4 py-2">Maiden</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-blue-900">
              <td className="px-4 py-2">{bowler}</td>
              <td className="px-4 py-2">{bowlerover}</td>
              <td className="px-4 py-2">{bowlerruns}</td>
              <td className="px-4 py-2">{bowlerwickets}</td>
              <td className="px-4 py-2">{bowlermaiden}</td>
            </tr>
            <tr className="text-blue-900">
              <td className="px-4 py-2">{bowlertwo}</td>
              <td className="px-4 py-2">{bowletworover}</td>
              <td className="px-4 py-2">{bowlertworuns}</td>
              <td className="px-4 py-2">{bowlertwowickets}</td>
              <td className="px-4 py-2">{bowlertwomaiden}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <p className="bg-blue-100 rounded-lg p-4 text-black border-b border-blue-500">Recent Balls: {recentballs}</p>
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
}, 850);


return (
  <div className="min-h-screen bg-blue-50 dark:bg-blue-100 flex flex-col justify-between p-4">
    
    <div className="bg-blue-100 rounded-lg p-6 text-center">
      {Displayscore}
    </div>
  </div>
)
}
