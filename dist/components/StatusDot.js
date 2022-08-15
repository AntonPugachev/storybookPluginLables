"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusName = exports.StatusDot = void 0;

var _theming = require("@storybook/theming");

var _defaults = require("../defaults");

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StatusName = _theming.styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\ntext-decoration: line-through;\n"])));

exports.StatusName = StatusName;

var StatusDot = _theming.styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-self: center;\n  background-color: ", ";\n  border-radius: 100%;\n  height: 6px;\n  margin-left: 0.5em;\n  user-select: none;\n  width: 6px;\n"])), function (_ref) {
  var background = _ref.background,
      type = _ref.type;
  return background !== null && background !== void 0 ? background : _defaults.defaultStatuses[type] ? _defaults.defaultStatuses[type].background : _defaults.defaultBackground;
});

exports.StatusDot = StatusDot;