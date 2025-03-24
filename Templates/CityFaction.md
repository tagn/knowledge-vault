<%*
     // Get all Folders
     const allFolders = tp.app.vault.getAllFolders();
     const allFiles = tp.app.vault.getMarkdownFiles();
     
     // Get the faction type
     const factionTypeFolders = allFolders.filter(folder => folder.path == "Factions/" + folder.name);
     const factionTypeNames = factionTypeFolders.map(folder => folder.name);
     const selectedFactionType = await tp.system.suggester(factionTypeNames, factionTypeNames, false, "Select the type of faction");

     // Get the faction sub-type and/or city
     const factionSubtypes = allFolders.filter(folder => folder.path == "Factions/" + selectedFactionType + "/" + folder.name );
     const factionSubtypeNames = factionSubtypes.map(folder => folder.name);
     const selectedFactionSubtype = await tp.system.suggester(factionSubtypeNames, factionSubtypeNames, false, "Select the subtype of this faction");

     // Get the leader NPC
     const allNPCs = allFiles.filter(file => file.path.startsWith("NPCs/"));
     const allNPCNames = allNPCs.map(file => file.basename);
     const selectedLeaderNPC = await tp.system.suggester(allNPCNames, allNPCNames, false, "Select the leader NPC of this faction");

     // Move and Rename the file
     const factionName = await tp.system.prompt("Enter the new faction name");
     await tp.file.move(`Factions/${selectedFactionType}/${selectedFactionSubtype}/${factionName}`);
-%>
---
title: <%* tR += factionName %>
faction_type: <%* tR += selectedFactionType %>
city: <% "\"[[" + selectedFactionSubtype + "]]\"" %>
leader: <% "\"[[" + selectedLeaderNPC + "]]\"" %>
---