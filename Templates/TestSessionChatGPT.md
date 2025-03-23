<%*
/* Define the folder path for your session notes. Adjust as needed. */
const folderPath = "Sessions"; 

// Get all markdown files in the vault whose path starts with the folderPath.
const allFiles = app.vault.getMarkdownFiles().filter(file => file.path.startsWith(folderPath));

// Use a regular expression to match filenames like "Session 1", "Session 2", etc.
const regex = /^Session\s+(\d+)/i;
let maxSession = 0;

for (const file of allFiles) {
    const match = file.basename.match(regex);
    if (match) {
        const num = parseInt(match[1], 10);
        if (!isNaN(num) && num > maxSession) {
            maxSession = num;
        }
    }
}

// Determine the next session number
const nextSessionNumber = maxSession + 1;
const newTitle = "Session " + nextSessionNumber;

// If the current file is still untitled, rename it.
if (tp.file.title === "Untitled" || tp.file.title.trim() === "") {
    await tp.file.rename(newTitle);
}
%>