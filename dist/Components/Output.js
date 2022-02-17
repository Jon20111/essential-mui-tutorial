"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TableContainer = _interopRequireDefault(require("@mui/material/TableContainer"));

var _Table = _interopRequireDefault(require("@mui/material/Table"));

var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));

var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));

var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));

var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));

var _Paper = _interopRequireDefault(require("@mui/material/Paper"));

var _system = require("@mui/system");

var _Store = require("../Store/Store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledTableHeaderCell = (0, _system.styled)(_TableCell.default, {
  name: "StyledTableHeaderCell"
})(props => ({
  color: '#00008b',
  padding: 4,
  fontSize: 16
}));
const StyledTableBodyCell = (0, _system.styled)(_TableCell.default, {
  name: "StyledTableBodyCell"
})(props => ({
  color: '#567d46',
  padding: 2,
  fontSize: 12
}));

const Output = props => {
  return /*#__PURE__*/_react.default.createElement(_TableContainer.default, {
    component: _Paper.default,
    sx: {
      width: 'max-content',
      minWidth: 300,
      "&.MuiPaper-root": {
        backgroundColor: 'rgba(236, 236, 236, 0.5)'
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_Table.default, {
    "aria-label": "dev table"
  }, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, {
    sx: {
      height: 35
    }
  }, /*#__PURE__*/_react.default.createElement(StyledTableHeaderCell, {
    width: 200
  }, "Name"), /*#__PURE__*/_react.default.createElement(StyledTableHeaderCell, {
    width: 150,
    align: "left"
  }, "Tech"), /*#__PURE__*/_react.default.createElement(StyledTableHeaderCell, {
    width: 150,
    align: "left"
  }, "Work Situation"))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, _Store.developers.map(row => /*#__PURE__*/_react.default.createElement(_TableRow.default, {
    sx: {
      height: 30
    },
    key: row.name
  }, /*#__PURE__*/_react.default.createElement(StyledTableBodyCell, {
    component: "th",
    scope: "row"
  }, row.name), /*#__PURE__*/_react.default.createElement(StyledTableBodyCell, {
    align: "left"
  }, row.tech), /*#__PURE__*/_react.default.createElement(StyledTableBodyCell, {
    align: "left"
  }, row.work))))));
};

var _default = Output;
exports.default = _default;