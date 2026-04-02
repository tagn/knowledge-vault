const {
    getCampaignDirectoryPath,
    getCampaignName,
    getPages,
    padNumber,
} = require("./templaterUtils");

function getThisSessionNum(tp) {
    const campaignName = getCampaignName(tp);
    const sessionsPath = `${getCampaignDirectoryPath(tp)}/Sessions`;
    const sessionCount = getPages(sessionsPath).filter(
        (page) => page.type === "session" && page.campaign === campaignName,
    ).length;

    return padNumber(sessionCount + 1, 3);
}

module.exports = getThisSessionNum;
