import {danger, warn, fail} from 'danger'

/**
 * Check if it's a large pull request
 */
const bigPRThreshold = 600; //lines

if(danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
    warn("Big pull request, please try to keep small PRs so it's easier to review :)")
}

/**
 * Check if PR title follows expected format
 * with the following change types
 * 
 * example format:
 * "feat: <PR title>"
 */
const changeType = [
    'build',
    'chore',
    'ci',
    'docs',
    'feat',
    'fix',
    'perf',
    'refactor',
    'revert',
    'style',
    'test',
].join("|");

const prTitlePrefix = `^(${changeType}): .+`;
const regexp = new RegExp(prTitlePrefix, "g");

if(!regexp.test(danger.github.pr.title)) {
    fail("Please change the PR title format")
}
