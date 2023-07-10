function getThisCampaignName (tp) {
    let thisDirectory = tp.file.folder(true);
    let thisCampaignDir = thisDirectory.split("/")[0]
    let thisCampaignName = thisCampaignDir.replace("DND - ", "")
    return thisCampaignName;
}

module.exports = getThisCampaignName;