(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{771:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("难度："),a("router-link",{attrs:{to:"/solution/easy/"}},[t._v("简单")])],1),t._v(" "),a("p",[t._v("分类："),a("router-link",{attrs:{to:"/art/array.html"}},[t._v("数组")])],1),t._v(" "),a("p",[t._v("来源："),a("a",{attrs:{href:"https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeetCode"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("源码："),a("a",{attrs:{href:"https://github.com/swpuLeo/cattle/blob/master/src/easy/1013-partition-array-into-three-parts-with-equal-sum.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS 版本"),a("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("声明 题目来源")]),t._v(" "),a("p",[t._v("来源：力扣（LeetCode）")]),t._v(" "),a("p",[t._v("链接："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/"),a("OutboundLink")],1)])]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("思路一：")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("我为你挑选的"),a("router-link",{attrs:{to:"/art/array.html"}},[t._v("数组")]),t._v("题目：")],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_1013-将数组分成和相等的三个部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1013-将数组分成和相等的三个部分","aria-hidden":"true"}},[this._v("#")]),this._v(" 1013 将数组分成和相等的三个部分")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"题目导航"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目导航","aria-hidden":"true"}},[this._v("#")]),this._v(" 题目导航")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述","aria-hidden":"true"}},[this._v("#")]),this._v(" 题目描述")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("给定一个整数数组 "),s("code",[this._v("A")]),this._v("，只有我们可以将其划分为三个和相等的非空部分时才返回 "),s("code",[this._v("true")]),this._v("，否则返回 "),s("code",[this._v("false")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("形式上，如果我们可以找出索引 "),s("code",[this._v("i+1 < j")]),this._v(" 且满足 "),s("code",[this._v("(A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])")]),this._v(" 就可以将数组三等分。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 1：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("输出：[0,2,1,-6,6,-7,9,1,2,0,1]\n输出：true\n解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 2：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("输入：[0,2,1,-6,6,7,9,-1,2,0,1]\n输出：false\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 3：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("输入：[3,3,6,5,-2,2,5,1,-9,4]\n输出：true\n解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("提示：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("code",[this._v("3 <= A.length <= 50000")])]),this._v(" "),s("li",[s("code",[this._v("-10000 <= A[i] <= 10000")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"解题思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 解题思路")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} A\n * @return {boolean}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("canThreePartsEqualSum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" prev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" avg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" avg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" avg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" avg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" avg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"相关推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关推荐","aria-hidden":"true"}},[this._v("#")]),this._v(" 相关推荐")])}],!1,null,null,null);s.default=n.exports}}]);