<%*
const file = tp.file.find_tfile(tp.file.title);
const metaEditApi = app.plugins.plugins["metaedit"]?.api;
const status = tp.frontmatter.status;

if (!metaEditApi || !file) {
  return;
}

const { update } = metaEditApi;

if (status === "In Progress") {
  await update("status", "Complete", file);
} else if (status === "Backlog") {
  await update("status", "In Progress", file);
}
-%>
