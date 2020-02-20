import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Tree, Button, Modal, List, Icon, Avatar, Tooltip } from 'antd';
import classNames from 'classnames';
import QueueAnim from 'rc-queue-anim';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.index_classTags__16jV3 {\n  margin-bottom: 8px;\n}\n.index_classTags__16jV3 .ant-tag-checkable {\n  border-color: #d9d9d9;\n  background-color: #fafafa;\n}\n.index_classTags__16jV3 .ant-tag-checkable-checked {\n  border-color: transparent;\n  background-color: #1890ff;\n}\n.selectModal .ant-modal-body {\n  display: -webkit-box;\n  display: flex;\n  padding: 0 24px;\n}\n.index_treeContainer__1vPvn {\n  width: 50%;\n  border-right: 1px solid #d9d9d9;\n}\n.index_selectedStudent__1b7m0 {\n  width: 50%;\n  padding: 12px 0 12px 12px;\n}\n.index_selectedStudentHeader__3yiel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.index_selectedStudentHeaderTitle__2UIRP {\n  color: #000;\n  font-size: 18px;\n}\n.index_classList__2JM3C {\n  line-height: 1.5;\n}\n.index_classList__2JM3C .index_class__nmuZL {\n  margin-bottom: 16px;\n  border: 0;\n}\n.index_classList__2JM3C .index_classHeader__1IPPq {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 8px 16px;\n  background-color: #f4f4f4;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.index_classList__2JM3C .index_classHeaderName__1cvC8 {\n  margin-right: 16px;\n}\n.index_classList__2JM3C .index_classHeaderActions__3Ujmf {\n  margin-left: auto;\n}\n.index_classList__2JM3C .index_classHeaderActions__3Ujmf > * {\n  display: inline-block;\n  margin-left: 8px;\n}\n.index_classList__2JM3C .index_classHeaderActions__3Ujmf > *:first-child {\n  margin-left: 0;\n}\n.index_classList__2JM3C .index_classContent__1Kh7S {\n  padding: 16px;\n  background-color: #f9f9f9;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.index_classList__2JM3C .index_class__nmuZL .index_student__1hg8w {\n  text-align: center;\n  padding: 4px 0;\n  width: 76px;\n}\n.index_classList__2JM3C .index_class__nmuZL .index_studentName__7BGUc {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.index_classList__2JM3C .index_emptyClass__2xwaa {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.45);\n}\n.index_checkable__1IBPC {\n  outline: 0;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-transition: all 140ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 140ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  cursor: pointer;\n}\n.index_checkable__1IBPC .index_checkableAvatar__2sHvR {\n  margin-bottom: 4px;\n  text-align: center;\n}\n.index_checkable__1IBPC .index_checkableAvatarWrapper__2KwuX {\n  display: inline-block;\n  position: relative;\n}\n.index_checkable__1IBPC .index_checkableAvatarOverlay__1bv5W {\n  position: absolute;\n  z-index: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  color: #1890ff;\n  font-size: 1.2em;\n  background-color: rgba(255, 255, 255, 0.5);\n  border: 2px solid #1890ff;\n  border-radius: 100%;\n  -webkit-transition: opacity 140ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: opacity 140ms cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.index_checkable__1IBPC .ant-avatar {\n  border: 1px solid transparent;\n  -webkit-transition: 140ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: 140ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-transition-property: border-color, box-shadow;\n  transition-property: border-color, box-shadow;\n}\n.index_checkable__1IBPC.index_checkableChecked__2vxh2 {\n  color: #1890ff;\n}\n.index_checkable__1IBPC.index_checkableChecked__2vxh2 .index_checkableAvatar__2sHvR {\n  position: relative;\n}\n.index_checkable__1IBPC.index_checkableChecked__2vxh2 .index_checkableAvatarOverlay__1bv5W {\n  opacity: 1;\n}\n.index_checkable__1IBPC.index_checkableChecked__2vxh2 .ant-avatar {\n  border-color: #40a9ff;\n}\n.index_checkable__1IBPC:hover,\n.index_checkable__1IBPC:focus {\n  color: #40a9ff;\n}\n.index_checkable__1IBPC:hover .ant-avatar,\n.index_checkable__1IBPC:focus .ant-avatar {\n  border-color: #40a9ff;\n}\n.index_checkable__1IBPC:active {\n  color: #096dd9;\n}\n";
var styles = {"classTags":"index_classTags__16jV3","treeContainer":"index_treeContainer__1vPvn","selectedStudent":"index_selectedStudent__1b7m0","selectedStudentHeader":"index_selectedStudentHeader__3yiel","selectedStudentHeaderTitle":"index_selectedStudentHeaderTitle__2UIRP","classList":"index_classList__2JM3C","class":"index_class__nmuZL","classHeader":"index_classHeader__1IPPq","classHeaderName":"index_classHeaderName__1cvC8","classHeaderActions":"index_classHeaderActions__3Ujmf","classContent":"index_classContent__1Kh7S","student":"index_student__1hg8w","studentName":"index_studentName__7BGUc","emptyClass":"index_emptyClass__2xwaa","checkable":"index_checkable__1IBPC","checkableAvatar":"index_checkableAvatar__2sHvR","checkableAvatarWrapper":"index_checkableAvatarWrapper__2KwuX","checkableAvatarOverlay":"index_checkableAvatarOverlay__1bv5W","checkableChecked":"index_checkableChecked__2vxh2"};
styleInject(css);

var TreeNode = Tree.TreeNode;
/**
 * Get an upper-cased initials for a human name.
 * @param {string} name A human name
 * @param {number} [maxChars] Limit initial character count, default to `2`
 */

function getNameInitials(name) {
  var maxChars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return typeof name === 'string' ? name.split(' ').slice(0, Number.isInteger(maxChars) && maxChars > 0 ? maxChars : 2).map(function (x) {
    return x.charAt(0);
  }).join('').toUpperCase() : null;
}

function SelectStudent(props) {
  var _props$classAndStuden = props.classAndStudentList,
      cList = _props$classAndStuden === void 0 ? [] : _props$classAndStuden,
      afterChange = props.afterChange,
      _props$defaultSelectS = props.defaultSelectStudent,
      defaultSelectStudent = _props$defaultSelectS === void 0 ? [] : _props$defaultSelectS,
      showResult = props.showResult,
      _props$title = props.title,
      title = _props$title === void 0 ? "选择学生" : _props$title,
      _props$buttonSize = props.buttonSize,
      buttonSize = _props$buttonSize === void 0 ? "small" : _props$buttonSize;

  var _useState = useState(defaultSelectStudent),
      _useState2 = _slicedToArray(_useState, 2),
      selectedStudent = _useState2[0],
      setSelectedStudent = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var selectedStudentKeys = useMemo(function () {
    return selectedStudent.map(function (item) {
      return item.id;
    }).filter(function (item) {
      return item;
    });
  }, [selectedStudent]);
  var getClassesByStudent = useCallback(function () {
    var sedClass = cList.filter(function (item) {
      var _item$children = item.children,
          children = _item$children === void 0 ? [] : _item$children;
      var isIncludeClass = children.map(function (child) {
        return child.key;
      }).filter(function (key) {
        return key;
      }).some(function (key) {
        return selectedStudentKeys.includes(key);
      });
      return isIncludeClass;
    }).map(function (item) {
      var _item$children2 = item.children,
          children = _item$children2 === void 0 ? [] : _item$children2;
      var newChildren = children.filter(function (child) {
        return selectedStudentKeys.includes(child.key);
      });
      return _objectSpread2({}, item, {
        children: newChildren
      });
    });
    return sedClass;
  }, [cList, selectedStudentKeys]);
  var selectedClasses = useMemo(function () {
    return getClassesByStudent();
  });
  var sedClassesKeys = useMemo(function () {
    return selectedClasses.map(function (item) {
      return item.key;
    });
  }, [selectedClasses]); // 确认选择

  var confirm = useCallback(function () {
    setVisible(false);
    var sedClass = getClassesByStudent();

    if (afterChange) {
      afterChange(sedClass);
    }
  }); // 取消选择

  var cancel = useCallback(function () {
    setVisible(false);
  });
  var showModal = useCallback(function () {
    setVisible(true);
  });
  var renderTreeNodes = useCallback(function (data) {
    return data.map(function (item) {
      if (!item.key) {
        // 需要后端返回key，不然交互会出错!
        return null;
      }

      if (item.children) {
        return React.createElement(TreeNode, {
          title: item.name,
          key: item.key,
          dataRef: item
        }, renderTreeNodes(item.children));
      }

      return React.createElement(TreeNode, _extends({
        key: item.key,
        title: item.name
      }, item));
    });
  }); // checkbox选择学生，去除class节点

  var selectStudent = useCallback(function (_, e) {
    var _e$checkedNodes = e.checkedNodes,
        checkedNodes = _e$checkedNodes === void 0 ? [] : _e$checkedNodes;
    var students = checkedNodes.filter(function (node) {
      var _node$props = node.props,
          nodeProps = _node$props === void 0 ? {} : _node$props;
      var _nodeProps$dataRef = nodeProps.dataRef,
          dataRef = _nodeProps$dataRef === void 0 ? {} : _nodeProps$dataRef;
      var children = dataRef.children;
      return !children;
    }).map(function (item) {
      return item.props;
    });
    setSelectedStudent(students);
  }); // 删除选择学生

  var cancelSelected = useCallback(function (student) {
    var students = selectedStudent.filter(function (item) {
      var id = item.id;
      return student.id !== id;
    });
    setSelectedStudent(students);
  }, [selectedStudent]);
  var handleClassStudentSelectNone = useCallback(function (id) {
    var clearIds = cList.filter(function (c) {
      return c.id === id;
    }).map(function (c) {
      return c.children;
    }).flat().map(function (s) {
      return s.id;
    });
    var students = selectedStudent.filter(function (item) {
      return !clearIds.includes(item.id);
    });
    setSelectedStudent(students);
  }, [cList, selectedStudent]);
  useEffect(function () {
    var sedClass = getClassesByStudent();

    if (afterChange) {
      afterChange(sedClass);
    }
  }, [cList, selectedStudentKeys]);
  return React.createElement("section", null, React.createElement("section", {
    className: styles.classTags
  }, React.createElement(Button, {
    type: "primary",
    size: buttonSize,
    onClick: showModal
  }, title), React.createElement(Modal, {
    title: "\u9009\u62E9\u5B66\u751F",
    visible: visible,
    onOk: confirm,
    onCancel: cancel,
    className: "selectModal",
    width: 720
  }, React.createElement("div", {
    className: styles.treeContainer
  }, React.createElement(Tree, {
    checkable: true,
    onCheck: selectStudent,
    checkedKeys: selectedStudentKeys
  }, renderTreeNodes(cList))), React.createElement("div", {
    className: styles.selectedStudent
  }, React.createElement("div", {
    className: styles.selectedStudentHeader
  }, React.createElement("span", {
    className: styles.selectedStudentHeaderTitle
  }, "\u5DF2\u6709\u5B66\u751F"), React.createElement("span", null, "\u5DF2\u9009\u62E9", selectedStudent.length, "\u4F4D\u5B66\u751F")), React.createElement("div", {
    className: styles.selectedStudentContent
  }, React.createElement(List, {
    className: "demo-loadmore-list",
    itemLayout: "horizontal",
    dataSource: selectedStudent,
    renderItem: function renderItem(item) {
      return React.createElement(List.Item, {
        actions: [React.createElement(Icon, {
          onClick: function onClick() {
            return cancelSelected(item);
          },
          key: "list-loadmore-edit",
          type: "minus-square",
          theme: "filled"
        })]
      }, React.createElement(List.Item.Meta, {
        avatar: React.createElement(Avatar, {
          src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        }),
        title: React.createElement("a", {
          href: "https://ant.design"
        }, item.name)
      }));
    }
  }))))), React.createElement(QueueAnim, {
    key: "classGroupList",
    style: showResult ? null : {
      display: 'none'
    },
    className: styles.classList
  }, Array.isArray(cList) && cList.filter(function (c) {
    return sedClassesKeys.includes(c.id);
  }).map(function (c) {
    return React.createElement("div", {
      key: c.id,
      className: styles.class
    }, React.createElement("div", {
      className: styles.classHeader
    }, React.createElement("span", {
      className: styles.classHeaderName
    }, React.createElement("span", null, c.name)), Array.isArray(c.children) && c.children.length ? React.createElement("div", {
      key: "headerActions",
      className: styles.classHeaderActions
    }, React.createElement("a", {
      onClick: function onClick() {
        return handleClassStudentSelectNone(c.id);
      }
    }, "\u6E05\u9664\u9009\u62E9")) : null), React.createElement("div", {
      className: styles.classContent
    }, Array.isArray(c.children) && c.children.length ? React.createElement(QueueAnim, {
      key: "row",
      className: styles.studentContainer,
      type: "bottom",
      interval: 60,
      style: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start'
      }
    }, c.children.filter(function (s) {
      return selectedStudentKeys.includes(s.id);
    }).map(function (s) {
      return React.createElement("div", {
        key: s.id,
        className: styles.student
      }, React.createElement(Tooltip, {
        title: s.name
      }, React.createElement("div", {
        className: classNames(styles.checkable)
      }, React.createElement("div", {
        className: styles.checkableAvatar
      }, React.createElement("span", {
        className: styles.checkableAvatarWrapper
      }, React.createElement(Avatar, {
        size: "large"
      }, getNameInitials(s.name)), React.createElement("span", {
        className: styles.checkableAvatarOverlay
      }, React.createElement(Icon, {
        type: "check"
      })))), React.createElement("div", {
        className: styles.studentName
      }, s.name))));
    })) : React.createElement("div", {
      className: styles.emptyClass
    }, React.createElement(Icon, {
      type: "info-circle"
    }), React.createElement("span", {
      style: {
        marginLeft: 4
      }
    }, "\u8BE5\u73ED\u7EA7\u6CA1\u6709\u5B66\u751F"))));
  })));
}

export default SelectStudent;
