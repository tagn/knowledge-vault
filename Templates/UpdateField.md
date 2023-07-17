<%*
const file = tp.file.find_tfile(tp.file.title);
const {update} = app.plugins.plugins["metaedit"].api;
const status = tp.frontmatter.status;

if (status === "In Progress") {
 await update("status","Complete",file);
}
if (status === "Backlog") {
await update("status", "In Progress", file);
}
-%>