<%*
/*
  1. Define folder paths:
      - localFolderPath is where your cities are stored.

      - npcFolderPath is the folder containing NPC markdown files.

*/

const localFolderPath = "Factions/Local";

const npcFolderPath = "NPCs";

  

// 2. Get a list of city folders (subfolders of Factions/Local)

const allFolders = tp.app.vault.getAllLoadedFiles()

    .filter(f => f instanceof tp.obsidian.TFolder && f.path.startsWith(localFolderPath));

const cities = allFolders.map(f => f.name);

if (cities.length === 0) {

    throw new Error("No city folders found under " + localFolderPath);

}

  

// 3. Ask the user to select a city via a suggester dropdown

const city = await tp.system.suggester(cities, cities, false, "Select City for the faction:");

  

// 4. Get a list of NPC files from the NPCs folder

const npcFiles = tp.app.vault.getMarkdownFiles()

    .filter(f => f.path.startsWith(npcFolderPath));

const npcNames = npcFiles.map(f => f.basename);

if (npcNames.length === 0) {

    throw new Error("No NPC files found under " + npcFolderPath);

}

  

// 5. Ask the user to select a leader via a suggester dropdown

const leader = await tp.system.suggester(npcNames, npcNames, false, "Select Leader for the faction:");

  

// 6. Set frontmatter properties: city, leader, tags (and any other fields you want)

await tp.frontmatter.set("city", city);

await tp.frontmatter.set("leader", leader);

await tp.frontmatter.set("tags", ["faction"]);

  

// 7. Optionally, move the new note into the chosen city’s folder:

const destinationFolder = localFolderPath + "/" + city;

await tp.file.move(destinationFolder + "/" + tp.file.title);
%>