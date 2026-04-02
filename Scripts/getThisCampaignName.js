function getThisCampaignName(tp) {
    const folder = String(tp?.file?.folder(true) ?? "").replace(/\\/g, "/");
    const segments = folder.split("/").filter(Boolean);

    if (segments[0] !== "TTRPG" || !segments[1]) {
        throw new Error('Expected note to live under "TTRPG/<campaign>/..."');
    }

    return segments[1].replace(/^DND - /, "");
}

module.exports = getThisCampaignName;
