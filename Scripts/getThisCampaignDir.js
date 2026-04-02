const { getCampaignDirectoryPath } = require("./templaterUtils");

function getThisCampaignDir(tp) {
    return getCampaignDirectoryPath(tp);
}

module.exports = getThisCampaignDir;
