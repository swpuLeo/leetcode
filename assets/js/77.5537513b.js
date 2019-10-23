(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{886:function(t,s,e){"use strict";e.r(s);var a=e(17),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("难度："),e("router-link",{attrs:{to:"/solution/easy/"}},[t._v("简单")])],1),t._v(" "),e("p",[t._v("分类："),e("router-link",{attrs:{to:"/art/linked-list.html"}},[t._v("链表")])],1),t._v(" "),e("p",[t._v("来源："),e("a",{attrs:{href:"https://leetcode.com/problems/remove-linked-list-elements/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeetCode"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://leetcode-cn.com/problems/remove-linked-list-elements/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("源码："),e("a",{attrs:{href:"https://github.com/swpuLeo/leetcode/blob/master/src/easy/0203-remove-linked-list-elements.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS 版本"),e("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("删除链表中等于给定值 val 的所有节点。")]),t._v(" "),e("p",[t._v("示例 1:")]),t._v(" "),t._m(3),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("题目来源")]),t._v(" "),e("p",[t._v("来源：力扣（LeetCode）")]),t._v(" "),e("p",[t._v("链接："),e("a",{attrs:{href:"https://leetcode-cn.com/problems/remove-linked-list-elements",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/remove-linked-list-elements"),e("OutboundLink")],1)])]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("思路一")]),t._v(" "),t._m(5),t._m(6),t._v(" "),e("p",[t._v("我为你挑选的"),e("router-link",{attrs:{to:"/art/stack.html"}},[t._v("栈")]),t._v("题目：")],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_0203-删除排序链表中的重复元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0203-删除排序链表中的重复元素","aria-hidden":"true"}},[this._v("#")]),this._v(" 0203 删除排序链表中的重复元素")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"题目导航"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目导航","aria-hidden":"true"}},[this._v("#")]),this._v(" 题目导航")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述","aria-hidden":"true"}},[this._v("#")]),this._v(" 题目描述")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("输入: 1->2->6->3->4->5->6, val = 6\n输出: 1->2->3->4->5\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"解题思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 解题思路")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {ListNode} head\n * @param {number} val\n * @return {ListNode}\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("removeElements")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("head"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("head"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" prev "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cur "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" val"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      prev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      prev "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    cur "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"相关推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关推荐","aria-hidden":"true"}},[this._v("#")]),this._v(" 相关推荐")])}],!1,null,null,null);s.default=n.exports}}]);