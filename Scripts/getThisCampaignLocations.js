function getThisCampaignLocations(tp) {
    const folder = String(tp?.file?.folder(true) ?? "").replace(/\\/g, "/");
    const segments = folder.split("/").filter(Boolean);

    if (segments[0] !== "TTRPG" || !segments[1]) {
        throw new Error('Expected note to live under "TTRPG/<campaign>/..."');
    }

    const dataviewApi = globalThis.app?.plugins?.plugins?.dataview?.api;

    if (!dataviewApi) {
        return ["None"];
    }

    const locationsPath = `TTRPG/${segments[1]}/Locations`;
    const locationNames = Array.from(dataviewApi.pages(`"${locationsPath}"`))
        .filter((page) => page.type === "location" && page.container)
        .map((location) => location.file.name);

    return ["None", ...locationNames];
}

module.exports = getThisCampaignLocations;
