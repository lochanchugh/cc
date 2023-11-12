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

    <div className="bg-orange-500 rounded-lg p-4 mb-2">
      <p className="text-4xl text-white font-bold text-center">{score}</p>
      <p className="text-lg text-center text-blue-800">{update}</p>
    </div>

    <marquee width="500px">
      <p className="text-black text-sm">Partnership: {partnership} | Last Wicket: {lastwicket} | {runrate}</p>
    </marquee>

    <div className="grid grid-cols-1 gap-0 mt-1 border-0 border-blue-500">
      <div className="text-left border-0 border-blue-500 pb-2">
        <table className="w-full">
          <thead>
            <tr className="text-white bg-blue-500">
              <th className="px-6 py-0.5">Batsman</th>
              <th className="px-4 py-0.5">R</th>
              <th className="px-4 py-0.5">B</th>
              <th className="px-4 py-0.5">4</th>
              <th className="px-4 py-0.5">6</th>
              <th className="px-4 py-0.5">SR</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-black">
              <td className="px-6 py-0.5">{batsman}</td>
              <td className="px-4 py-0.5">{batsmanrun}</td>
              <td className="px-4 py-0.5">{/* Add balls details here */}</td>
              <td className="px-4 py-0.5">{fours}</td>
              <td className="px-4 py-0.5">{sixes}</td>
              <td className="px-4 py-0.5">{sr}</td>
            </tr>
            <tr className="text-black">
              <td className="px-6 py-0.5">{batsmantwo}</td>
              <td className="px-4 py-0.5">{batsmantworun}</td>
              <td className="px-4 py-0.5">{/* Add balls details here */}</td>
              <td className="px-4 py-0.5">{batsmantwofours}</td>
              <td className="px-4 py-0.5">{batsmantwosixes}</td>
              <td className="px-4 py-0.5">{batsmantwosr}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-left border-0 border-blue-500 p-3">
        <table className="w-full">
          <thead>
            <tr className="text-white bg-blue-500">
              <th className="pl-6 pr-8 py-0.5">Bowler</th>
              <th className="px-4 py-0.5">O</th>
              <th className="px-4 py-0.5">R</th>
              <th className="px-4 py-0.5">W</th>
              <th className="px-4 py-0.5">M</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-black">
              <td className="px-6 py-0.5">{bowler}</td>
              <td className="px-4 py-0.5">{bowlerover}</td>
              <td className="px-4 py-0.5">{bowlerruns}</td>
              <td className="px-4 py-0.5">{bowlerwickets}</td>
              <td className="px-4 py-0.5">{bowlermaiden}</td>
            </tr>
            <tr className="text-black">
              <td className="px-6 py-0.5">{bowlertwo}</td>
              <td className="px-4 py-0.5">{bowletworover}</td>
              <td className="px-4 py-0.5">{bowlertworuns}</td>
              <td className="px-4 py-0.5">{bowlertwowickets}</td>
              <td className="px-4 py-0.5">{bowlertwomaiden}</td>
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
