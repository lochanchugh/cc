import * as cheerio from "cheerio"
import { NextResponse } from "next/server"
import match from '../../match.json';

const dummy_json = {
  title: "API URL is Missing or Data Not Found",
  update: "Data Not Found",
  current: " ",
  batsman: "Data Not Found",
  batsmanrun: " ",
  ballsfaced: " ",
  fours: " ",
  sixes: " ",
  sr: " ",
  batsmantwo: " ",
  batsmantworun: " ",
  batsmantwoballsfaced: " ",
  batsmantwofours: " ",
  batsmantwosixes: " ",
  batsmantwosr: " ",
  bowler: " ",
  bowlerover: " ",
  bowlerruns: " ",
  bowlerwickets: " ",
  bowlermaiden: " ",
  bowlertwo: " ",
  bowletworover: " ",
  bowlertworuns: " ",
  bowlertwowickets: " ",
  bowlertwomaiden: " ",
  partnership: " ",
  recentballs: " ",
  lastwicket: " ",
  runrate: " ",
  commentary: "API URL is Missing or Data Not Found",
}

export async function GET() {
  try {
    const str = "https://m.cricbuzz.com/live-cricket-scores/" + match.live
    //const live_url = str.replace('www', 'm');
    const response = await fetch(str, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      },
      next: { revalidate: 5 },
    })

    const htmlString = await response.text()
    const $ = cheerio.load(htmlString)
    var title = $("h4.ui-header").text()
    var update = $("div.cbz-ui-status").text()
    var currentscore = $("span.ui-bat-team-scores").text()
    var batsman = $("span.bat-bowl-miniscore").eq(0).text()
    var batsmanrun = $('td[class="cbz-grid-table-fix "]').eq(6).text()
    var ballsfaced = $('span[style="font-weight:normal"]').eq(0).text()
    var fours = $('td[class="cbz-grid-table-fix "]').eq(7).text()
    var sixes = $('td[class="cbz-grid-table-fix "]').eq(8).text()
    var sr = $('td[class="cbz-grid-table-fix "]').eq(9).text()
    var batsmantwo = $('td[class="cbz-grid-table-fix "]').eq(10).text()
    var batsmantworun = $('td[class="cbz-grid-table-fix "]').eq(11).text()
    var batsmantwoballsfaced = $('span[style="font-weight:normal"]')
      .eq(1)
      .text()
    var batsmantwofours = $('td[class="cbz-grid-table-fix "]').eq(12).text()
    var batsmantwosixes = $('td[class="cbz-grid-table-fix "]').eq(16).text()
    var batsmantwosr = $('td[class="cbz-grid-table-fix "]').eq(14).text()
    var bowler = $("span.bat-bowl-miniscore").eq(2).text()
    var bowlerover = $('td[class="cbz-grid-table-fix "]').eq(21).text()
    var bowlerruns = $('td[class="cbz-grid-table-fix "]').eq(23).text()
    var bowlerwickets = $('td[class="cbz-grid-table-fix "]').eq(24).text()
    var bowlermaiden = $('td[class="cbz-grid-table-fix "]').eq(22).text()
    var bowlertwo = $("span.bat-bowl-miniscore").eq(3).text()
    var bowletworover = $('td[class="cbz-grid-table-fix "]').eq(26).text()
    var bowlertworuns = $('td[class="cbz-grid-table-fix "]').eq(28).text()
    var bowlertwowickets = $('td[class="cbz-grid-table-fix "]').eq(29).text()
    var bowlertwomaiden = $('td[class="cbz-grid-table-fix "]').eq(27).text()
    var partnership = $("span[style='color:#333']").eq(0).text()
    var recentballs = $("span[style='color:#333']").eq(2).text()
    var lastwicket = $("span[style='color:#333']").eq(1).text()
    var runrate = $("span[class='crr']").eq(0).text()
    var commentary = $("p[class='commtext']").text()

    var livescore = {
      title: title || "Data Not Found",
      update: update || "Data Not Found",
      current: currentscore || " ",
      batsman: batsman || "Data Not Found",
      batsmanrun: batsmanrun || " ",
      ballsfaced: ballsfaced || " ",
      fours: fours || " ",
      sixes: sixes || " ",
      sr: sr || " ",
      batsmantwo: batsmantwo || " ",
      batsmantworun: batsmantworun || " ",
      batsmantwoballsfaced: batsmantwoballsfaced || " ",
      batsmantwofours: batsmantwofours || " ",
      batsmantwosixes: batsmantwosixes || " ",
      batsmantwosr: batsmantwosr || " ",
      bowler: bowler || " ",
      bowlerover: bowlerover || " ",
      bowlerruns: bowlerruns || " ",
      bowlerwickets: bowlerwickets || " ",
      bowlermaiden: bowlermaiden || " ",
      bowlertwo: bowlertwo || " ",
      bowletworover: bowletworover || " ",
      bowlertworuns: bowlertworuns || " ",
      bowlertwowickets: bowlertwowickets || " ",
      bowlertwomaiden: bowlertwomaiden || " ",
      partnership: partnership || " ",
      recentballs: recentballs || " ",
      lastwicket: lastwicket || " ",
      runrate: runrate || " ",
      commentary: commentary || "Data Not Found",
    }

    if (response.status == 200) {
      return NextResponse.json(livescore, {
        status: 200,
        headers: {
          "X-Frame-Options": "DENY",
          "X-XSS-Protection": "1; mode=block",
          "X-Content-Type-Options": "nosniff",
          "Strict-Transport-Security": "max-age=63072000",
        },
      })
    } else {
      return NextResponse.json(dummy_json, {
        status: 404,
        headers: {
          "X-Frame-Options": "DENY",
          "X-XSS-Protection": "1; mode=block",
          "X-Content-Type-Options": "nosniff",
          "Strict-Transport-Security": "max-age=63072000",
        },
      })
    }
  } catch (error) {
    return NextResponse.json(dummy_json, {
      status: 404,
      headers: {
        "X-Frame-Options": "DENY",
        "X-XSS-Protection": "1; mode=block",
        "X-Content-Type-Options": "nosniff",
        "Strict-Transport-Security": "max-age=63072000",
      },
    })
  }
}
