function getNormalizedFolder(tp) {
    return String(tp?.file?.folder(true) ?? "").replace(/\\/g, "/");
}

function getFolderSegments(tp) {
    return getNormalizedFolder(tp).split("/").filter(Boolean);
}

function getCampaignDirectoryName(tp) {
    const segments = getFolderSegments(tp);

    if (segments[0] !== "TTRPG" || !segments[1]) {
        throw new Error('Expected note to live under "TTRPG/<campaign>/..."');
    }

    return segments[1];
}

function getCampaignDirectoryPath(tp) {
    return `TTRPG/${getCampaignDirectoryName(tp)}`;
}

function getCampaignName(tp) {
    return getCampaignDirectoryName(tp).replace(/^DND - /, "");
}

function getDataviewApi() {
    return globalThis.app?.plugins?.plugins?.dataview?.api ?? null;
}

function getPages(path) {
    const dataviewApi = getDataviewApi();

    if (!dataviewApi) {
        return [];
    }

    return Array.from(dataviewApi.pages(`"${path}"`));
}

function padNumber(value, width) {
    return String(value).padStart(width, "0");
}

module.exports = {
    getCampaignDirectoryName,
    getCampaignDirectoryPath,
    getCampaignName,
    getPages,
    padNumber,
};
