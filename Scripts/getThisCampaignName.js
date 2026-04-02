const { getCampaignName } = require("./templaterUtils");

function getThisCampaignName(tp) {
    return getCampaignName(tp);
}

module.exports = getThisCampaignName;
