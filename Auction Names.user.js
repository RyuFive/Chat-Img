// ==UserScript==
// @name         Auction Names
// @author RyuFive
// @match      https://www.torn.com/displaycase.php*
// @match      https://www.torn.com/amarket.php*
// @namespace    https://github.com/RyuFive/TornScripts/raw/main/Auction Names.user.js
// @downloadURL    https://github.com/RyuFive/TornScripts/raw/main/Auction Names.js
// @updateURL    https://github.com/RyuFive/TornScripts/raw/main/Auction Names.js
// @version      1.1
// @description  try to take over the world!
// @icon         https://www.google.com/s2/favicons?sz=64&domain=torn.com
// @license MIT
// @grant GM_setValue
// @grant GM_getValue
// ==/UserScript==

var mode = 'dark' // dark or light

function refreshData()
{
    var x = 1; // 1 Seconds

    // Do your thing here
    var icons = document.querySelectorAll(".bonus-attachment-icons")

    if (icons.length === undefined || icons.length === 0) {
        setTimeout(refreshData, x*1000);
        return
    }

    for (let i = 0; i < icons.length; i++) {
        var title = icons[i].parentElement.parentElement.parentElement.getElementsByClassName("title")[0]
        var removeThis = title.getElementsByClassName("t-gray-6")[0]
        if (removeThis) {
            title.removeChild(removeThis)
        }
        // if (icons[i].lastChild.tagName == 'SPAN) continue
        if (title.childElementCount >= 1 + icons[i].parentElement.childElementCount) continue

        var name = icons[i].title.split('>')[1].split('<')[0]
        var value = icons[i].title.split('%')[0].split('>')[3] + "% "
        var temp

        if (name == 'Irradiate' || name == 'Smash') {
            value = ''
        }
        else if (name == 'Disarm') {
            value = icons[i].title.split(' turns')[0].split('for ')[1] + " T "
        }
        else if (name == 'Bloodlust') {
            value = icons[i].title.split(' of')[0].split('by ')[1] + " "

        }
        else if (name == 'Execute') {
            value = icons[i].title.split(' life')[0].split('below ')[1] + " "
        }
        else if (name == 'Penetrate') {
            value = icons[i].title.split(' of')[0].split('Ignores ')[1] + " "
        }
        else if (name == 'Eviscerate') {
            value = icons[i].title.split(' extra')[0].split('them ')[1] + " "
        }

        var bonus = document.createElement('p')
        bonus.innerHTML = value + name

        title.appendChild(bonus)
        // if (mode == 'dark') {
        //     bonus.setAttribute("style", "background-color: #000000b0;")
        // }
        // else {
        //     bonus.setAttribute("style", "background-color: #ffffffb0;")
        // }


        // icons[i].appendChild(bonus)
        // icons[i].setAttribute("style", "float:left;white-space: nowrap;right: 0px;padding-left: 0px;top:-40px")
    }

    setTimeout(refreshData, x*1000);
}

refreshData()
