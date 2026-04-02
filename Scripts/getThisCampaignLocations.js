const { getCampaignDirectoryPath, getPages } = require("./templaterUtils");

function getThisCampaignLocations(tp) {
    const locationsPath = `${getCampaignDirectoryPath(tp)}/Locations`;
    const locationNames = getPages(locationsPath)
        .filter((page) => page.type === "location" && page.container)
        .map((location) => location.file.name);

    return ["None", ...locationNames];
}

module.exports = getThisCampaignLocations;
