function getThisCampaignName (tp) {
    let thisDirectory = tp.file.folder(true);
    let thisCampaignDir = thisDirectory.split("/")[1]
    let thisCampaignName = thisCampaignDir.replace("DND - ", "")
    return thisCampaignName;
}

module.exports = getThisCampaignName;
