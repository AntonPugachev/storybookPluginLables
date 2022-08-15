"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _api = require("@storybook/api");

var _theming = require("@storybook/theming");

var _lodash = require("lodash");

var _defaults = require("../defaults");

var _constants = require("../constants");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var tagStyles = (0, _theming.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-self: center;\n  border-radius: 0.25em;\n  padding: 0 0.5em;\n  text-decoration: none;\n  user-select: none;\n  font-size: 11px;\n  text-transform: uppercase;\n  line-height: 20px;\n  font-weight: 700;\n  padding: 0 0.5em;\n"])));

var LinkTag = _theming.styled.a(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), tagStyles);

var TextTag = _theming.styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), tagStyles);

var StatusTag = function StatusTag() {
  var _statusConfigs;

  var parameters = (0, _api.useParameter)(_constants.ADDON_PARAM_KEY, null);

  if (parameters === null) {
    return null;
  }

  var type = parameters.type,
      url = parameters.url,
      statuses = parameters.statuses;

  if (!type) {
    return null;
  }

  var statusConfigMap = Object.assign({}, _defaults.defaultStatuses, statuses || {});
  var statusConfigs;

  if (Array.isArray(type)) {
    statusConfigs = type.map(function (t) {
      if (typeof t === 'string') {
        return {
          label: t,
          status: statusConfigMap[t],
          url: url
        };
      }

      return {
        label: t.name,
        status: statusConfigMap[t.name],
        url: t.url
      };
    });
  } else {
    statusConfigs = [{
      label: type,
      status: statusConfigMap[type],
      url: url
    }];
  }

  statusConfigs = statusConfigs.filter(function (x) {
    return x.status != null;
  });

  if (!((_statusConfigs = statusConfigs) !== null && _statusConfigs !== void 0 && _statusConfigs.length)) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, statusConfigs.map(function (statusConfig) {
    var _statusConfig$status = statusConfig.status,
        background = _statusConfig$status.background,
        color = _statusConfig$status.color,
        description = _statusConfig$status.description;
    var statusUrl = statusConfig.url;
    var label = (0, _lodash.startCase)(statusConfig.label);
    var style = {
      color: color !== null && color !== void 0 ? color : _defaults.defaultStatuses[label] ? _defaults.defaultStatuses[label].color : _defaults.defaultColor,
      backgroundColor: background !== null && background !== void 0 ? background : _defaults.defaultStatuses[label] ? _defaults.defaultStatuses[label].background : _defaults.defaultBackground
    };
    return statusUrl ? /*#__PURE__*/_react["default"].createElement(LinkTag, {
      key: statusConfig.label,
      style: style,
      title: description,
      href: statusUrl
    }, label) : /*#__PURE__*/_react["default"].createElement(TextTag, {
      key: statusConfig.label,
      style: style,
      title: description
    }, label);
  }));
};

var _default = StatusTag;
exports["default"] = _default;