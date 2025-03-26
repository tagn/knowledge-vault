<%*
	const creation_date = tp.file.creation_date("YYYY-MM-DD");
	const campaign_dir = await tp.user.getThisCampaignDir(tp);
	const campaign_name = await tp.user.getThisCampaignName(tp);
	let location_name
	if (tp.file.title.includes("Untitled")) {
		location_name = await tp.system.prompt("Enter Location Name")
		await tp.file.rename(location_name);
	} else {
		location_name = tp.file.title
	}
	const locations = await tp.user.getThisCampaignLocations(tp);
	const location_within = await tp.system.suggester(locations, locations, false, "If this is a sub-area, select the location is exists within")
-%>
---
aliases: []
type: location
created: <%* tR += creation_date %>
campaign: <%* tR += campaign_name %>
name: <%* tR += location_name %>
container: false
within: <%* tR += location_within %>
---

## Description


## Sub Areas/Locations

<!-- QueryToSerialize: LIST FROM "<%* tR += campaign_dir %>/Locations" WHERE within = "<%* tR += location_name %>" -->
