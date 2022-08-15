"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

var _addons = require("@storybook/addons");

var _lodash = require("lodash");

var _react = _interopRequireDefault(require("react"));

var _StatusDot = require("./components/StatusDot");

var _StatusTag = _interopRequireDefault(require("./components/StatusTag"));

var _constants = require("./constants");

var _defaults = require("./defaults");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_addons.addons.register(_constants.ADDON_ID, function () {
  _addons.addons.add(_constants.ADDON_ID, {
    title: 'Status',
    type: _addons.types.TOOL,
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return viewMode === 'story' || viewMode === 'docs';
    },
    render: function render() {
      return /*#__PURE__*/_react["default"].createElement(_StatusTag["default"], null);
    }
  });

  _addons.addons.setConfig({
    showRoots: false,
    sidebar: {
      renderLabel: function renderLabel(item) {
        var name = item.name,
            isLeaf = item.isLeaf,
            parameters = item.parameters; // eslint-disable-next-line no-bitwise

        if (~name.indexOf('[deprecated]')) {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_StatusDot.StatusName, null, ' ', name.replace('[deprecated]', '')), /*#__PURE__*/_react["default"].createElement(_StatusDot.StatusDot, {
            type: "deprecated"
          }));
        }

        if (!isLeaf || !parameters || !parameters.status) {
          return name;
        }

        var status = parameters.status;
        var statusConfigMap = Object.assign({}, _defaults.defaultStatuses, status.statuses || {});
        var statusName = '';

        if (Array.isArray(status.type)) {
          var _status$type;

          var firstStatus = (_status$type = status.type) === null || _status$type === void 0 ? void 0 : _status$type[0];
          statusName = typeof firstStatus === 'string' ? firstStatus : firstStatus.name;
        } else {
          statusName = status.type;
        }

        var statusConfig = statusConfigMap[statusName];

        if (!statusConfig) {
          return name;
        }

        var background = statusConfig.background,
            description = statusConfig.description;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, name, /*#__PURE__*/_react["default"].createElement(_StatusDot.StatusDot, {
          type: statusName,
          background: background,
          title: "".concat((0, _lodash.startCase)(statusName), ": ").concat(description)
        }));
      }
    }
  });
});