<%*
	const creation_date = tp.file.creation_date("YYYY-MM-DD");
	if (tp.file.title.includes("Untitled")) {
		npc_name = await tp.system.prompt("Enter NPC Name")
		await tp.file.rename(npc_name);
	} else {
		npc_name = tp.file.title;
	}
	const campaign_dir = await tp.user.getThisCampaignDir(tp);
	const campaign_name = await tp.user.getThisCampaignName(tp);
	const factions = await tp.user.getThisCampaignFactions(tp);
	const faction = await tp.system.suggester(factions, factions, false, "Which faction is this NPC associated with?");
-%>
---
aliases: []
type: npc
created: <%* tR += creation_date %>
campaign: <%* tR += campaign_name %>
name: <%* tR += npc_name %>
faction: <%* tR += faction %>
group:
locations: []
race:
gender:
class:
tags:
 - npc
---
## Summary

## Significant Events

## Faction Associations
