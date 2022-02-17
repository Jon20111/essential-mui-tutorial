"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Drawer = _interopRequireDefault(require("@mui/material/Drawer"));

var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));

var _List = _interopRequireDefault(require("@mui/material/List"));

var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));

var _Input = _interopRequireDefault(require("./Input"));

var _Output = _interopRequireDefault(require("./Output"));

var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const drawerWidth = 100;

const EssentialMUITutorial = props => {
  return /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_AppBar.default, {
    sx: {
      zIndex: theme => theme.zIndex.drawer + 1
    }
  }, /*#__PURE__*/React.createElement(_Toolbar.default, null, /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "h4",
    sx: {
      flexGrow: 1
    }
  }, "MUI Tutorial"), /*#__PURE__*/React.createElement(_Avatar.default, {
    sx: {
      bgcolor: 'magenta'
    }
  }, "JM"))), /*#__PURE__*/React.createElement(_Drawer.default, {
    variant: "persistent",
    open: true,
    ModalProps: {
      keepMounted: true,
      hideBackdrop: true
    },
    PaperProps: {
      elevation: 12,
      sx: {
        bgcolor: 'primary.light',
        width: drawerWidth,
        textAlign: 'center',
        borderRight: 0
      }
    }
  }, /*#__PURE__*/React.createElement(_Toolbar.default, null), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement(_List.default, null, /*#__PURE__*/React.createElement(_List.default, {
    button: true
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/input"
  }, /*#__PURE__*/React.createElement(_ListItemText.default, {
    primary: "Input"
  }))), /*#__PURE__*/React.createElement(_List.default, {
    button: true
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: {
      pathname: "/output"
    }
  }, /*#__PURE__*/React.createElement(_ListItemText.default, {
    primary: "Output"
  })))))), /*#__PURE__*/React.createElement("main", {
    style: {
      marginLeft: drawerWidth + 12,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(_Toolbar.default, null), /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_Input.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "input",
    element: /*#__PURE__*/React.createElement(_Input.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "output",
    element: /*#__PURE__*/React.createElement(_Output.default, null)
  })))));
};

var _default = EssentialMUITutorial;
exports.default = _default;