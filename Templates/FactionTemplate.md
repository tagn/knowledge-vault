<%*
	const creation_date = tp.file.creation_date("YYYY-MM-DD");
	const campaign_dir = await tp.user.getThisCampaignDir(tp);
	const campaign_name = await tp.user.getThisCampaignName(tp);
	let faction_name
	if (tp.file.title.includes("Untitled")) {
		faction_name = await tp.system.prompt("Enter Faction Name")
		await tp.file.rename(faction_name);
	} else {
		faction_name = tp.file.title
	}
-%>
---
aliases: []
type: faction
created: <%* tR += creation_date %>
campaign: <%* tR += campaign_name %>
name: <%* tR += faction_name %>
---
## Summary

## Significant Events

## Major Members

## Relationships