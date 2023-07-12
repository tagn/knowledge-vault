function getThisSessionNum(tp) {
    let thisDirectory = tp.file.folder(true);
    let thisCampaignDir = thisDirectory.split("/")[0]
    let thisCampaignName = thisCampaignDir.replace("DND - ", "")
    let numOfSessions = app.plugins.plugins.dataview.api
        .pages(`"${thisCampaignDir}/Sessions"`)
        .where(page => {
            if (page.type === 'session') {
                if (page.campaign === thisCampaignName) {
                    console.log('sessionNum: ' + page.sessionNum)
                    return true;
                }
            }
        }).length
    nextSession = JSON.stringify(numOfSessions + 1);
    while (nextSession.length < 3) {
        nextSession = "0" + nextSession;
    }
    return nextSession;
}

module.exports = getThisSessionNum;
