function getThisCampaignFactions(tp) {
    const folder = String(tp?.file?.folder(true) ?? "").replace(/\\/g, "/");
    const segments = folder.split("/").filter(Boolean);

    if (segments[0] !== "TTRPG" || !segments[1]) {
        throw new Error('Expected note to live under "TTRPG/<campaign>/..."');
    }

    const dataviewApi = globalThis.app?.plugins?.plugins?.dataview?.api;

    if (!dataviewApi) {
        return ["Unaffiliated", "Unknown"];
    }

    const factionsPath = `TTRPG/${segments[1]}/Factions`;
    const factionNames = Array.from(dataviewApi.pages(`"${factionsPath}"`))
        .filter((page) => page.type === "faction")
        .map((faction) => faction.file.name);

    return [...factionNames, "Unaffiliated", "Unknown"];
}

module.exports = getThisCampaignFactions;
