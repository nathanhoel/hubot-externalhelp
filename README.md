# hubot-externalhelp

Loads help from external scripts.
Hubot only loads help from the deprecated [Hubot-Scripts repo](https://github.com/github/hubot-scripts) at present.
This script finds all modules named 'hubot-<name>' and attempts to load the commands from the script file.

## Installation

First run `npm install hubot-externalhelp --save`, then add `hubot-externalhelp` to the `external-scripts.json` file.
