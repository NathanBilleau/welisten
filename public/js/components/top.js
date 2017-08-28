'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Librairies


// Components


var Top = function (_React$Component) {
  _inherits(Top, _React$Component);

  function Top() {
    _classCallCheck(this, Top);

    var _this = _possibleConstructorReturn(this, (Top.__proto__ || Object.getPrototypeOf(Top)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Top, [{
    key: 'submit',
    value: function submit() {
      var searchField = document.getElementById('searchField').value.toLowerCase();
      this.props.appState({ search: searchField });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'topSection' },
        _react2.default.createElement(
          'div',
          { className: 'btnContainer' },
          _react2.default.createElement(
            'button',
            null,
            _react2.default.createElement('img', { src: './img/settings.svg' })
          ),
          _react2.default.createElement(
            'button',
            null,
            _react2.default.createElement('img', { src: './img/refresh.svg' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'search' },
          _react2.default.createElement('input', { type: 'text', placeholder: 'Music title', id: 'searchField', onChange: function onChange() {
              return _this2.submit();
            } }),
          _react2.default.createElement(
            'button',
            { className: 'gradient', onClick: function onClick() {
                return _this2.submit();
              } },
            _react2.default.createElement('img', { src: './img/search.svg' })
          )
        )
      );
    }
  }]);

  return Top;
}(_react2.default.Component);

exports.default = Top;