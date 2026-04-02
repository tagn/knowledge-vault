const { getCampaignDirectoryPath, getPages } = require("./templaterUtils");

function getThisCampaignFactions(tp) {
    const factionsPath = `${getCampaignDirectoryPath(tp)}/Factions`;
    const factionNames = getPages(factionsPath)
        .filter((page) => page.type === "faction")
        .map((faction) => faction.file.name);

    return [...factionNames, "Unaffiliated", "Unknown"];
}

module.exports = getThisCampaignFactions;
