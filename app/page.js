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
      <p className="text-gray-800 dark:text-gray-100 text-sm">
       <h1> {"🏏 " + title}</h1>
        <br /> <br />
        {"📊 " + update}
      </p>
    )
  } else {
    Displayscore = (
      <p className="text-gray-800 dark:text-gray-100 text-sm">
       <h1> {"🏏 " + title} </h1>
        <br />
        <br /> {"📊 " + update}
        <br />
        <br /> {"🔴 " + score}
        <br />
        <br /> {"🏏 " + batsman} {batsmanrun} {"fours" + fours + "sixes" + sixes + "strike rate" + sr}
<br />
<br />{batsmantwo} {batsmantworun} {"fours" + batsmantwofours + "sixes" + batsmantwosixes + "strike rate" + batsmantwosr}
        <br />
        <br />{" "}
        {"🥎 " +
          bowler +
          "\t" +
          bowlerover +
          " over " +
          bowlerruns +
          " Runs and " +
          bowlerwickets +
          " wicket"}
        <br />
        <br /> {"📉 " + runrate}


{"Recentballs" + recentballs + "Last Wicket" + lastwicket + "Partnership" + partnership }
<p className="text-[2px]">

 {commentary}</p>
      </p>
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
        //Refresh ▶
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
    <div className="min-h-screen bg-current dark:bg-current">
      <div className="container mx-auto px-4">
        <div className="flex h-screen flex-col justify-center items-center">
          <div className="dark:bg-pink-200 dark:border-pink-200 bg-pink-200 rounded-2xl border shadow-xl p-10 max-w-lg mt-6">
            <div className="w-full flex flex-col justify-between dark:bg-gray-800 bg-blue-300 dark:border-gray-700 rounded-lg border border-blue-400 mb-6 py-5 px-4">
              {Displayscore}
            </div>
            <div className="flex items-center justify-center">
              &nbsp;
              {Displaybutton}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
