'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _substyle = require('substyle');

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _keys = require('lodash/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Suggestion = function (_Component) {
  _inherits(Suggestion, _Component);

  function Suggestion() {
    _classCallCheck(this, Suggestion);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Suggestion.prototype.render = function render() {
    var rest = (0, _omit2.default)(this.props, 'style', (0, _keys2.default)(Suggestion.propTypes));

    return _react2.default.createElement(
      'li',
      _extends({}, rest, this.props.style),
      this.renderContent()
    );
  };

  Suggestion.prototype.renderContent = function renderContent() {
    var _props = this.props,
        query = _props.query,
        descriptor = _props.descriptor,
        suggestion = _props.suggestion,
        index = _props.index;


    var display = this.getDisplay();
    var highlightedDisplay = this.renderHighlightedDisplay(display, query);

    if (descriptor.props.renderSuggestion) {
      return descriptor.props.renderSuggestion(suggestion, query, highlightedDisplay, index);
    }

    return highlightedDisplay;
  };

  Suggestion.prototype.getDisplay = function getDisplay() {
    var suggestion = this.props.suggestion;


    if (suggestion instanceof String) {
      return suggestion;
    }

    var id = suggestion.id,
        display = suggestion.display;


    if (!id || !display) {
      return id;
    }

    return display;
  };

  Suggestion.prototype.renderHighlightedDisplay = function renderHighlightedDisplay(display) {
    var _props2 = this.props,
        query = _props2.query,
        style = _props2.style;


    var i = display.toLowerCase().indexOf(query.toLowerCase());

    if (i === -1) {
      return _react2.default.createElement(
        'span',
        style('display'),
        display
      );
    }

    return _react2.default.createElement(
      'span',
      style('display'),
      display.substring(0, i),
      _react2.default.createElement(
        'b',
        style('highlight'),
        display.substring(i, i + query.length)
      ),
      display.substring(i + query.length)
    );
  };

  return Suggestion;
}(_react.Component);

Suggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  query: _propTypes2.default.string.isRequired,
  index: _propTypes2.default.number.isRequired,

  suggestion: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    display: _propTypes2.default.string
  })]).isRequired,
  descriptor: _propTypes2.default.object.isRequired,

  focused: _propTypes2.default.bool
} : {};


var styled = (0, _substyle.defaultStyle)({
  cursor: 'pointer'
}, function (props) {
  return { '&focused': props.focused };
});

exports.default = styled(Suggestion);
module.exports = exports['default'];