function getThisSessionNum(tp) {
    let thisDirectory = tp.file.folder(true);
    console.log("thisDirectory => " + thisDirectory)
    let thisCampaignDir = thisDirectory.split("/")[0]
    console.log("thisCampaignDir => " + thisCampaignDir)
    let thisCampaignName = thisCampaignDir.replace("DND - ", "")
    console.log("thisCampaignName => " + thisCampaignName)
    let dv = app.plugins.plugins.dataview.api
    let pages = dv.pages('"drakkenheim/Sessions"').where(page)
    console.log(pages)
    // let numOfSessions = app.plugins.plugins.dataview.api
    //     .pages(`"${thisCampaignDir}/Sessions"`)
    //     .where(page => {
    //         console.log("page.type => " + page.type)
    //         if (page.type === 'session') {
    //             console.log("page.campaign => " + page.campaign)
    //             if (page.campaign === thisCampaignName) {
    //                 console.log('sessionNum: ' + page.sessionNum)
    //                 return true;
    //             }
    //         }
    //     }).length
    console.log("numOfSessions => " + numOfSessions)
    nextSession = JSON.stringify(numOfSessions + 1);
    while (nextSession.length < 3) {
        nextSession = "0" + nextSession;
    }
    console.log("nextSession => " + nextSession)
    return nextSession;
}

module.exports = getThisSessionNum;