function getThisCampaignDir (tp) {
    let thisDirectory = tp.file.folder(true);
    let thisCampaignDir = thisDirectory.split("/")[1]
    return thisCampaignDir;
}

module.exports = getThisCampaignDir;
