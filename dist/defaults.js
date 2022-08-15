"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStatuses = exports.defaultStatus = exports.defaultColor = exports.defaultBackground = void 0;
var defaultBackground = '#2f2f2f';
exports.defaultBackground = defaultBackground;
var defaultColor = '#ffffff';
exports.defaultColor = defaultColor;
var defaultStatus = {
  color: defaultColor,
  background: defaultBackground
};
exports.defaultStatus = defaultStatus;
var defaultStatuses = {
  beta: {
    color: '#ffffff',
    background: '#ec942c',
    description: 'The interface for this component may change'
  },
  deprecated: {
    color: '#ffffff',
    background: '#f02c2c',
    description: 'This component will be removed in the next major version'
  },
  stable: {
    color: '#ffffff',
    background: '#339902',
    description: 'This component is stable'
  },
  releaseCandidate: {
    color: '#ffffff',
    background: '#a335ee',
    description: 'This component is a release candidate'
  }
};
exports.defaultStatuses = defaultStatuses;