function getThisCampaignFactions (tp) {
    let thisDirectory = tp.file.folder(true);
    let thisCampaignDir = thisDirectory.split("/")[1]
    let factions = app.plugins.plugins.dataview.api
        .pages(`"${thisCampaignDir}/Factions"`)
        .where(page => {
            if (page.type === 'faction') {
                return true;
            }
        })
    let factionsArray = Array.from(factions);
    let factionNames = factionsArray.map(faction => faction.file.name)
    factionNames.push('Unaffiliated')
    factionNames.push('Unknown')
    return factionNames
}

module.exports = getThisCampaignFactions;
