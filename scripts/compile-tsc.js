/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

function getCommand(watch) {
  const tsc = path.join(__dirname, '..', 'node_modules', '.bin', 'tsc');
  const downlevelDts = path.join(__dirname, '..', 'node_modules', '.bin', 'downlevel-dts');

  const args = ['--outDir ./dist', '--listEmittedFiles true'];

  /**
   * Only emit declarations if it does not need to be compiled with tsc
   * Currently, angular and storyshots (that contains an angular component) need to be compiled
   * with tsc. (see comments in compile-babel.js)
   */
  const isAngular = process.cwd().includes(path.join('app', 'angular'));
  const isStoryshots = process.cwd().includes(path.join('addons', 'storyshots'));
  if (!isAngular && !isStoryshots) {
    args.push('--emitDeclarationOnly --declaration true');
  }

  if (isAngular) {
    args.push('--declaration true');
  }

  if (watch) {
    args.push('-w');
  }

  return `${tsc} ${args.join(' ')} && ${downlevelDts} dist ts3.5/dist`;
}

function handleExit(code, stderr, errorCallback) {
  if (code !== 0) {
    if (errorCallback && typeof errorCallback === 'function') {
      errorCallback(stderr);
    }
    shell.exit(code);
  }
}

function tscfy(options = {}) {
  const { watch = false, silent = false, errorCallback } = options;
  const tsConfigFile = 'tsconfig.json';

  if (!fs.existsSync(tsConfigFile)) {
    if (!silent) {
      console.log(`No ${tsConfigFile}`);
    }
    return;
  }

  const content = fs.readFileSync(tsConfigFile);
  const tsConfig = JSON.parse(content);

  if (tsConfig && tsConfig.lerna && tsConfig.lerna.disabled === true) {
    if (!silent) {
      console.log('Lerna disabled');
    }
    return;
  }

  const command = getCommand(watch);
  const { code, stderr } = shell.exec(command, { silent });

  handleExit(code, stderr, errorCallback);
}

module.exports = {
  tscfy,
};