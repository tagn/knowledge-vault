function getThisSessionNum(tp) {
    const folder = String(tp?.file?.folder(true) ?? "").replace(/\\/g, "/");
    const segments = folder.split("/").filter(Boolean);

    if (segments[0] !== "TTRPG" || !segments[1]) {
        throw new Error('Expected note to live under "TTRPG/<campaign>/..."');
    }

    const dataviewApi = globalThis.app?.plugins?.plugins?.dataview?.api;

    if (!dataviewApi) {
        return "001";
    }

    const campaignDirectory = segments[1];
    const campaignName = campaignDirectory.replace(/^DND - /, "");
    const sessionsPath = `TTRPG/${campaignDirectory}/Sessions`;
    const sessionCount = Array.from(dataviewApi.pages(`"${sessionsPath}"`)).filter(
        (page) => page.type === "session" && page.campaign === campaignName,
    ).length;

    return String(sessionCount + 1).padStart(3, "0");
}

module.exports = getThisSessionNum;
