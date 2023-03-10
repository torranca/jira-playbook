#!/usr/bin/env node

const axios = require('axios');
const inquirer = require('inquirer');
const chalk = require('chalk');

const baseURL = 'https://your-jira-instance.com/rest/api/2/';

const fetchIssues = async (projectKey, labels) => {
  try {
    console.log(chalk.green(`Calling ... ${baseURL}search?jql=project=${projectKey} AND labels in (${labels})`));
    const response = await axios.get(`${baseURL}search?jql=project=${projectKey} AND labels in (${labels})`);
    console.log(chalk.green('Success: '), response.data.issues.length, 'issues fetched');
    return response.data.issues;
  } catch (error) {
    console.error(chalk.red('Error: '), error.message);
    process.exit(1);
  }
};

const main = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectKey',
      message: 'Enter the JIRA project key:',
    },
   {
     type: 'input',
     name: 'labels',
     message: 'Enter the JIRA labels (comma-separated):'
   }
  ]);

  const issues = await fetchIssues(answers.projectKey, answers.labels);
  console.table(issues.map(issue => ({
    key: issue.key,
    summary: issue.fields.summary,
    status: issue.fields.status.name,
  })));
};

main();

