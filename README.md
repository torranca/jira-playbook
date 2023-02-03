# JIRA Issues CLI

This is a command line interface (CLI) that allows you to fetch JIRA issues using the JIRA REST API. The results are displayed in a table in the terminal.

## Prerequisites

* Node.js and npm installed on your system

## Installation

1. Clone or download the repository to your local system
2. Open the terminal and navigate to the directory where you saved the code
3. Run the following command to install the dependencies:

	npm install

## Usage

1. Open the terminal and navigate to the directory where you saved the code
2. Run the following command:

	./playbook.js

3. You will be prompted to enter the JIRA project key. Once you enter the key, the script will call the JIRA REST API to fetch the issues for the given project and display the results in a table.

## Built With

* Axios - A library used to make HTTP requests
* Inquirer.js - A library used to prompt the user for input
* Chalk - A library used to add color to console output

## Contributing

If you would like to contribute to this project, please open an issue or submit a pull request.

## License

This project is licensed under the Apache 2.0 License - see the LICENSE file for details.

