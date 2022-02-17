"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("@mui/material/TextField"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _Stack = _interopRequireDefault(require("@mui/material/Stack"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));

var _RadioGroup = _interopRequireDefault(require("@mui/material/RadioGroup"));

var _Radio = _interopRequireDefault(require("@mui/material/Radio"));

var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));

var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));

var _FormLabel = _interopRequireDefault(require("@mui/material/FormLabel"));

var _styles = require("@mui/material/styles");

var _FormTheme = require("../Theme/FormTheme");

var _Store = require("../Store/Store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const formStyle = {
  border: "2px solid ".concat(_FormTheme.FormTheme.palette.primary.main),
  borderRadius: '4px',
  padding: 12,
  maxWidth: 400
};

const Input = props => {
  const [devName, setDevName] = (0, _react.useState)('');
  const [devTech, setDevTech] = (0, _react.useState)('');
  const [devWork, setDevWork] = (0, _react.useState)('owner');

  const handleTextFieldChange = event => {
    setDevName(event.target.value);
  };

  const handleAutoCompleteChange = (event, value) => {
    setDevTech(value);
  };

  const handleRadioChange = event => {
    setDevWork(event.target.value);
  };

  const handleButtonClick = (0, _react.useCallback)(() => {
    _Store.developers.push({
      name: devName,
      tech: devTech,
      work: devWork
    });
  }, [devName, devTech, devWork]);
  return /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: _FormTheme.FormTheme
  }, /*#__PURE__*/_react.default.createElement("form", {
    style: formStyle
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6"
  }, "Developer Info:"), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    id: "name",
    label: "Name",
    variant: "outlined",
    onChange: handleTextFieldChange
  }), /*#__PURE__*/_react.default.createElement(_Autocomplete.default, {
    options: ["React", "Angular", "Vue", "jQuery", "Something Else"],
    getOptionLabel: option => option,
    renderInput: params => {
      return /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({}, params, {
        variant: "outlined",
        label: "JS Tech"
      }));
    },
    onChange: handleAutoCompleteChange
  }), /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    sx: {
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    component: "fieldset",
    variant: "filled"
  }, /*#__PURE__*/_react.default.createElement(_FormLabel.default, {
    component: "legend",
    htmlFor: "work-type-radio"
  }, "Work Situation"), /*#__PURE__*/_react.default.createElement(_RadioGroup.default, {
    "aria-label": "work",
    id: "work-type-radio",
    defaultValue: "Self-Employed",
    name: "radio-buttons-group",
    onChange: handleRadioChange
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    value: "Self-Employed",
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, null),
    label: "Self-Employed"
  }), /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    value: "Employee",
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, null),
    label: "Employee"
  }), /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    value: "Freelancer",
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, null),
    label: "Freelancer"
  }))), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    onClick: handleButtonClick
  }, "Save"))));
};

var _default = Input;
exports.default = _default;