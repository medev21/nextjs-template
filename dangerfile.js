// Add a CHANGELOG entry for app changes
const hasChangelog = danger.git.modified_files.includes("changelog.md");
const isTrivial = (danger.github.pr.body + danger.github.pr.title).includes(
  "#trivial"
);
if (!hasChangelog && !isTrivial) {
  warn("Please add a changelog entry for your changes here.");
}

/**
 * TODO: ADD PR TITLE CHECK
 * CHECK FOR NUMBER OF FILES TO REVIEW - WARN
 * CHECK PR TITLE FORMAT - DONT PASS ON FAILURE
 */

