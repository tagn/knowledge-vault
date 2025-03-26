function getThisCampaignLocations (tp) {
    let thisDirectory = tp.file.folder(true);
    let thisCampaignDir = thisDirectory.split("/")[1]
    let locations = app.plugins.plugins.dataview.api
        .pages(`"TTRPG/${thisCampaignDir}/Locations"`)
        .where(page => {
            if (page.type === 'location' && page.container) {
                return true;
            }
        })
    let locationsArray = Array.from(locations);
    let locationNames = locationsArray.map(location => location.file.name)
    locationNames.unshift('None')
    return locationNames
}

module.exports = getThisCampaignLocations;
