// /*! For license information please see LICENSES */
// (window.webpackJsonp = window.webpackJsonp || []).push([
//   [23],
//   [
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       "use strict";
//       t.exports = function (t) {
//         var e = [];
//         return (
//           (e.toString = function () {
//             return this.map(function (e) {
//               var content = t(e);
//               return e[2]
//                 ? "@media ".concat(e[2], " {").concat(content, "}")
//                 : content;
//             }).join("");
//           }),
//           (e.i = function (t, n, r) {
//             "string" == typeof t && (t = [[null, t, ""]]);
//             var d = {};
//             if (r)
//               for (var i = 0; i < this.length; i++) {
//                 var o = this[i][0];
//                 null != o && (d[o] = !0);
//               }
//             for (var c = 0; c < t.length; c++) {
//               var l = [].concat(t[c]);
//               (r && d[l[0]]) ||
//                 (n &&
//                   (l[2]
//                     ? (l[2] = "".concat(n, " and ").concat(l[2]))
//                     : (l[2] = n)),
//                 e.push(l));
//             }
//           }),
//           e
//         );
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       function r(t, e) {
//         for (var n = [], r = {}, i = 0; i < e.length; i++) {
//           var d = e[i],
//             o = d[0],
//             c = { id: t + ":" + i, css: d[1], media: d[2], sourceMap: d[3] };
//           r[o] ? r[o].parts.push(c) : n.push((r[o] = { id: o, parts: [c] }));
//         }
//         return n;
//       }
//       n.r(e),
//         n.d(e, "default", function () {
//           return C;
//         });
//       var d = "undefined" != typeof document;
//       if ("undefined" != typeof DEBUG && DEBUG && !d)
//         throw new Error(
//           "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
//         );
//       var o = {},
//         head = d && (document.head || document.getElementsByTagName("head")[0]),
//         c = null,
//         l = 0,
//         f = !1,
//         h = function () {},
//         m = null,
//         y = "data-vue-ssr-id",
//         v =
//           "undefined" != typeof navigator &&
//           /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
//       function C(t, e, n, d) {
//         (f = n), (m = d || {});
//         var c = r(t, e);
//         return (
//           P(c),
//           function (e) {
//             for (var n = [], i = 0; i < c.length; i++) {
//               var d = c[i];
//               (l = o[d.id]).refs--, n.push(l);
//             }
//             e ? P((c = r(t, e))) : (c = []);
//             for (i = 0; i < n.length; i++) {
//               var l;
//               if (0 === (l = n[i]).refs) {
//                 for (var f = 0; f < l.parts.length; f++) l.parts[f]();
//                 delete o[l.id];
//               }
//             }
//           }
//         );
//       }
//       function P(t) {
//         for (var i = 0; i < t.length; i++) {
//           var e = t[i],
//             n = o[e.id];
//           if (n) {
//             n.refs++;
//             for (var r = 0; r < n.parts.length; r++) n.parts[r](e.parts[r]);
//             for (; r < e.parts.length; r++) n.parts.push(A(e.parts[r]));
//             n.parts.length > e.parts.length &&
//               (n.parts.length = e.parts.length);
//           } else {
//             var d = [];
//             for (r = 0; r < e.parts.length; r++) d.push(A(e.parts[r]));
//             o[e.id] = { id: e.id, refs: 1, parts: d };
//           }
//         }
//       }
//       function _() {
//         var t = document.createElement("style");
//         return (t.type = "text/css"), head.appendChild(t), t;
//       }
//       function A(t) {
//         var e,
//           n,
//           r = document.querySelector("style[" + y + '~="' + t.id + '"]');
//         if (r) {
//           if (f) return h;
//           r.parentNode.removeChild(r);
//         }
//         if (v) {
//           var d = l++;
//           (r = c || (c = _())),
//             (e = O.bind(null, r, d, !1)),
//             (n = O.bind(null, r, d, !0));
//         } else
//           (r = _()),
//             (e = k.bind(null, r)),
//             (n = function () {
//               r.parentNode.removeChild(r);
//             });
//         return (
//           e(t),
//           function (r) {
//             if (r) {
//               if (
//                 r.css === t.css &&
//                 r.media === t.media &&
//                 r.sourceMap === t.sourceMap
//               )
//                 return;
//               e((t = r));
//             } else n();
//           }
//         );
//       }
//       var w,
//         F =
//           ((w = []),
//           function (t, e) {
//             return (w[t] = e), w.filter(Boolean).join("\n");
//           });
//       function O(t, e, n, r) {
//         var d = n ? "" : r.css;
//         if (t.styleSheet) t.styleSheet.cssText = F(e, d);
//         else {
//           var o = document.createTextNode(d),
//             c = t.childNodes;
//           c[e] && t.removeChild(c[e]),
//             c.length ? t.insertBefore(o, c[e]) : t.appendChild(o);
//         }
//       }
//       function k(t, e) {
//         var n = e.css,
//           r = e.media,
//           d = e.sourceMap;
//         if (
//           (r && t.setAttribute("media", r),
//           m.ssrId && t.setAttribute(y, e.id),
//           d &&
//             ((n += "\n/*# sourceURL=" + d.sources[0] + " */"),
//             (n +=
//               "\n/*# sourceMappingURL=data:application/json;base64," +
//               btoa(unescape(encodeURIComponent(JSON.stringify(d)))) +
//               " */")),
//           t.styleSheet)
//         )
//           t.styleSheet.cssText = n;
//         else {
//           for (; t.firstChild; ) t.removeChild(t.firstChild);
//           t.appendChild(document.createTextNode(n));
//         }
//       }
//     },
//     ,
//     ,
//     function (t, e, n) {
//       "use strict";
//       var r = Object.getOwnPropertySymbols,
//         d = Object.prototype.hasOwnProperty,
//         o = Object.prototype.propertyIsEnumerable;
//       t.exports = (function () {
//         try {
//           if (!Object.assign) return !1;
//           var t = new String("abc");
//           if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
//             return !1;
//           for (var e = {}, i = 0; i < 10; i++)
//             e["_" + String.fromCharCode(i)] = i;
//           if (
//             "0123456789" !==
//             Object.getOwnPropertyNames(e)
//               .map(function (t) {
//                 return e[t];
//               })
//               .join("")
//           )
//             return !1;
//           var n = {};
//           return (
//             "abcdefghijklmnopqrst".split("").forEach(function (t) {
//               n[t] = t;
//             }),
//             "abcdefghijklmnopqrst" ===
//               Object.keys(Object.assign({}, n)).join("")
//           );
//         } catch (t) {
//           return !1;
//         }
//       })()
//         ? Object.assign
//         : function (t, source) {
//             for (
//               var e,
//                 n,
//                 c = (function (t) {
//                   if (null == t)
//                     throw new TypeError(
//                       "Object.assign cannot be called with null or undefined"
//                     );
//                   return Object(t);
//                 })(t),
//                 s = 1;
//               s < arguments.length;
//               s++
//             ) {
//               for (var l in (e = Object(arguments[s])))
//                 d.call(e, l) && (c[l] = e[l]);
//               if (r) {
//                 n = r(e);
//                 for (var i = 0; i < n.length; i++)
//                   o.call(e, n[i]) && (c[n[i]] = e[n[i]]);
//               }
//             }
//             return c;
//           };
//     },
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       "use strict";
//       n.d(e, "a", function () {
//         return r;
//       });
//       encodeURIComponent;
//       const r =
//         String.raw ||
//         ((t, ...e) => {
//           const n = t.length - 1;
//           return t.slice(0, n).reduce((t, n, r) => t + n + e[r], "") + t[n];
//         });
//     },
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       var r = n(287);
//       t.exports = function (object, path, t) {
//         var e = null == object ? void 0 : r(object, path);
//         return void 0 === e ? t : e;
//       };
//     },
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       "use strict";
//       var r,
//         d =
//           (this && this.__extends) ||
//           ((r = function (t, b) {
//             return (
//               (r =
//                 Object.setPrototypeOf ||
//                 ({ __proto__: [] } instanceof Array &&
//                   function (t, b) {
//                     t.__proto__ = b;
//                   }) ||
//                 function (t, b) {
//                   for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p]);
//                 }),
//               r(t, b)
//             );
//           }),
//           function (t, b) {
//             function e() {
//               this.constructor = t;
//             }
//             r(t, b),
//               (t.prototype =
//                 null === b
//                   ? Object.create(b)
//                   : ((e.prototype = b.prototype), new e()));
//           });
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var o = n(196),
//         c = n(197),
//         l = n(402),
//         f = n(199),
//         h = n(128),
//         m = n(198),
//         y = (function (t) {
//           function e(n, r, d) {
//             var o = t.call(this) || this;
//             switch (
//               ((o.syncErrorValue = null),
//               (o.syncErrorThrown = !1),
//               (o.syncErrorThrowable = !1),
//               (o.isStopped = !1),
//               arguments.length)
//             ) {
//               case 0:
//                 o.destination = c.empty;
//                 break;
//               case 1:
//                 if (!n) {
//                   o.destination = c.empty;
//                   break;
//                 }
//                 if ("object" == typeof n) {
//                   n instanceof e
//                     ? ((o.syncErrorThrowable = n.syncErrorThrowable),
//                       (o.destination = n),
//                       n.add(o))
//                     : ((o.syncErrorThrowable = !0),
//                       (o.destination = new v(o, n)));
//                   break;
//                 }
//               default:
//                 (o.syncErrorThrowable = !0),
//                   (o.destination = new v(o, n, r, d));
//             }
//             return o;
//           }
//           return (
//             d(e, t),
//             (e.prototype[f.rxSubscriber] = function () {
//               return this;
//             }),
//             (e.create = function (t, n, r) {
//               var d = new e(t, n, r);
//               return (d.syncErrorThrowable = !1), d;
//             }),
//             (e.prototype.next = function (t) {
//               this.isStopped || this._next(t);
//             }),
//             (e.prototype.error = function (t) {
//               this.isStopped || ((this.isStopped = !0), this._error(t));
//             }),
//             (e.prototype.complete = function () {
//               this.isStopped || ((this.isStopped = !0), this._complete());
//             }),
//             (e.prototype.unsubscribe = function () {
//               this.closed ||
//                 ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
//             }),
//             (e.prototype._next = function (t) {
//               this.destination.next(t);
//             }),
//             (e.prototype._error = function (t) {
//               this.destination.error(t), this.unsubscribe();
//             }),
//             (e.prototype._complete = function () {
//               this.destination.complete(), this.unsubscribe();
//             }),
//             (e.prototype._unsubscribeAndRecycle = function () {
//               var t = this._parentOrParents;
//               return (
//                 (this._parentOrParents = null),
//                 this.unsubscribe(),
//                 (this.closed = !1),
//                 (this.isStopped = !1),
//                 (this._parentOrParents = t),
//                 this
//               );
//             }),
//             e
//           );
//         })(l.Subscription);
//       e.Subscriber = y;
//       var v = (function (t) {
//         function e(e, n, r, d) {
//           var l,
//             f = t.call(this) || this;
//           f._parentSubscriber = e;
//           var h = f;
//           return (
//             o.isFunction(n)
//               ? (l = n)
//               : n &&
//                 ((l = n.next),
//                 (r = n.error),
//                 (d = n.complete),
//                 n !== c.empty &&
//                   ((h = Object.create(n)),
//                   o.isFunction(h.unsubscribe) && f.add(h.unsubscribe.bind(h)),
//                   (h.unsubscribe = f.unsubscribe.bind(f)))),
//             (f._context = h),
//             (f._next = l),
//             (f._error = r),
//             (f._complete = d),
//             f
//           );
//         }
//         return (
//           d(e, t),
//           (e.prototype.next = function (t) {
//             if (!this.isStopped && this._next) {
//               var e = this._parentSubscriber;
//               h.config.useDeprecatedSynchronousErrorHandling &&
//               e.syncErrorThrowable
//                 ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
//                 : this.__tryOrUnsub(this._next, t);
//             }
//           }),
//           (e.prototype.error = function (t) {
//             if (!this.isStopped) {
//               var e = this._parentSubscriber,
//                 n = h.config.useDeprecatedSynchronousErrorHandling;
//               if (this._error)
//                 n && e.syncErrorThrowable
//                   ? (this.__tryOrSetError(e, this._error, t),
//                     this.unsubscribe())
//                   : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
//               else if (e.syncErrorThrowable)
//                 n
//                   ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0))
//                   : m.hostReportError(t),
//                   this.unsubscribe();
//               else {
//                 if ((this.unsubscribe(), n)) throw t;
//                 m.hostReportError(t);
//               }
//             }
//           }),
//           (e.prototype.complete = function () {
//             var t = this;
//             if (!this.isStopped) {
//               var e = this._parentSubscriber;
//               if (this._complete) {
//                 var n = function () {
//                   return t._complete.call(t._context);
//                 };
//                 h.config.useDeprecatedSynchronousErrorHandling &&
//                 e.syncErrorThrowable
//                   ? (this.__tryOrSetError(e, n), this.unsubscribe())
//                   : (this.__tryOrUnsub(n), this.unsubscribe());
//               } else this.unsubscribe();
//             }
//           }),
//           (e.prototype.__tryOrUnsub = function (t, e) {
//             try {
//               t.call(this._context, e);
//             } catch (t) {
//               if (
//                 (this.unsubscribe(),
//                 h.config.useDeprecatedSynchronousErrorHandling)
//               )
//                 throw t;
//               m.hostReportError(t);
//             }
//           }),
//           (e.prototype.__tryOrSetError = function (t, e, n) {
//             if (!h.config.useDeprecatedSynchronousErrorHandling)
//               throw new Error("bad call");
//             try {
//               e.call(this._context, n);
//             } catch (e) {
//               return h.config.useDeprecatedSynchronousErrorHandling
//                 ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0), !0)
//                 : (m.hostReportError(e), !0);
//             }
//             return !1;
//           }),
//           (e.prototype._unsubscribe = function () {
//             var t = this._parentSubscriber;
//             (this._context = null),
//               (this._parentSubscriber = null),
//               t.unsubscribe();
//           }),
//           e
//         );
//       })(y);
//       e.SafeSubscriber = v;
//     },
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       "use strict";
//       function r(t) {
//         return (
//           (r =
//             "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
//               ? function (t) {
//                   return typeof t;
//                 }
//               : function (t) {
//                   return t &&
//                     "function" == typeof Symbol &&
//                     t.constructor === Symbol &&
//                     t !== Symbol.prototype
//                     ? "symbol"
//                     : typeof t;
//                 }),
//           r(t)
//         );
//       }
//       var d = ["image", "file"],
//         o = ["before", "after", "replace"];
//       (e.dataset = function (t) {
//         if (!/^[-\w]{1,128}$/.test(t))
//           throw new Error(
//             "Datasets can only contain lowercase characters, numbers, underscores and dashes"
//           );
//       }),
//         (e.projectId = function (t) {
//           if (!/^[-a-z0-9]+$/i.test(t))
//             throw new Error(
//               "`projectId` can only contain only a-z, 0-9 and dashes"
//             );
//         }),
//         (e.validateAssetType = function (t) {
//           if (-1 === d.indexOf(t))
//             throw new Error(
//               "Invalid asset type: "
//                 .concat(t, ". Must be one of ")
//                 .concat(d.join(", "))
//             );
//         }),
//         (e.validateObject = function (t, e) {
//           if (null === e || "object" !== r(e) || Array.isArray(e))
//             throw new Error("".concat(t, "() takes an object of properties"));
//         }),
//         (e.requireDocumentId = function (t, n) {
//           if (!n._id)
//             throw new Error(
//               "".concat(
//                 t,
//                 '() requires that the document contains an ID ("_id" property)'
//               )
//             );
//           e.validateDocumentId(t, n._id);
//         }),
//         (e.validateDocumentId = function (t, e) {
//           if ("string" != typeof e || !/^[a-z0-9_.-]+$/i.test(e))
//             throw new Error(
//               "".concat(t, '(): "').concat(e, '" is not a valid document ID')
//             );
//         }),
//         (e.validateInsert = function (t, e, n) {
//           var r = "insert(at, selector, items)";
//           if (-1 === o.indexOf(t)) {
//             var d = o
//               .map(function (t) {
//                 return '"'.concat(t, '"');
//               })
//               .join(", ");
//             throw new Error(
//               ""
//                 .concat(r, ' takes an "at"-argument which is one of: ')
//                 .concat(d)
//             );
//           }
//           if ("string" != typeof e)
//             throw new Error(
//               "".concat(
//                 r,
//                 ' takes a "selector"-argument which must be a string'
//               )
//             );
//           if (!Array.isArray(n))
//             throw new Error(
//               "".concat(r, ' takes an "items"-argument which must be an array')
//             );
//         }),
//         (e.hasDataset = function (t) {
//           if (!t.gradientMode && !t.dataset)
//             throw new Error("`dataset` must be provided to perform queries");
//           return t.dataset || "";
//         });
//     },
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       "use strict";
//       var r = {
//         name: "NoSsr",
//         functional: !0,
//         props: {
//           placeholder: String,
//           placeholderTag: { type: String, default: "div" },
//         },
//         render: function (t, e) {
//           var n = e.parent,
//             r = e.slots,
//             d = e.props,
//             o = r(),
//             c = o.default;
//           void 0 === c && (c = []);
//           var l = o.placeholder;
//           return n._isMounted
//             ? c
//             : (n.$once("hook:mounted", function () {
//                 n.$forceUpdate();
//               }),
//               d.placeholderTag && (d.placeholder || l)
//                 ? t(
//                     d.placeholderTag,
//                     { class: ["no-ssr-placeholder"] },
//                     d.placeholder || l
//                   )
//                 : c.length > 0
//                 ? c.map(function () {
//                     return t(!1);
//                   })
//                 : t(!1));
//         },
//       };
//       t.exports = r;
//     },
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       var r = n(166)(Object, "create");
//       t.exports = r;
//     },
//     function (t, e, n) {
//       var r = n(310);
//       t.exports = function (t, e) {
//         for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
//         return -1;
//       };
//     },
//     function (t, e, n) {
//       var r = n(316);
//       t.exports = function (map, t) {
//         var data = map.__data__;
//         return r(t) ? data["string" == typeof t ? "string" : "hash"] : data.map;
//       };
//     },
//     function (t, e, n) {
//       e.filter = n(401).filter;
//     },
//     function (t, e, n) {
//       e.map = n(406).map;
//     },
//     function (t, e, n) {
//       "use strict";
//       n.r(e),
//         (e.default = function (t, e) {
//           return (
//             (e = e || {}),
//             new Promise(function (n, r) {
//               var s = new XMLHttpRequest(),
//                 d = [],
//                 u = [],
//                 i = {},
//                 a = function () {
//                   return {
//                     ok: 2 == ((s.status / 100) | 0),
//                     statusText: s.statusText,
//                     status: s.status,
//                     url: s.responseURL,
//                     text: function () {
//                       return Promise.resolve(s.responseText);
//                     },
//                     json: function () {
//                       return Promise.resolve(s.responseText).then(JSON.parse);
//                     },
//                     blob: function () {
//                       return Promise.resolve(new Blob([s.response]));
//                     },
//                     clone: a,
//                     headers: {
//                       keys: function () {
//                         return d;
//                       },
//                       entries: function () {
//                         return u;
//                       },
//                       get: function (t) {
//                         return i[t.toLowerCase()];
//                       },
//                       has: function (t) {
//                         return t.toLowerCase() in i;
//                       },
//                     },
//                   };
//                 };
//               for (var o in (s.open(e.method || "get", t, !0),
//               (s.onload = function () {
//                 s
//                   .getAllResponseHeaders()
//                   .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (t, e, n) {
//                     d.push((e = e.toLowerCase())),
//                       u.push([e, n]),
//                       (i[e] = i[e] ? i[e] + "," + n : n);
//                   }),
//                   n(a());
//               }),
//               (s.onerror = r),
//               (s.withCredentials = "include" == e.credentials),
//               e.headers))
//                 s.setRequestHeader(o, e.headers[o]);
//               s.send(e.body || null);
//             })
//           );
//         });
//     },
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       "use strict";
//       function r(t) {
//         return null !== t && "object" == typeof t;
//       }
//       function d(t, e, n = ".", o) {
//         if (!r(e)) return d(t, {}, n, o);
//         const c = Object.assign({}, e);
//         for (const e in t) {
//           if ("__proto__" === e || "constructor" === e) continue;
//           const l = t[e];
//           null != l &&
//             ((o && o(c, e, l, n)) ||
//               (Array.isArray(l) && Array.isArray(c[e])
//                 ? (c[e] = c[e].concat(l))
//                 : r(l) && r(c[e])
//                 ? (c[e] = d(l, c[e], (n ? `${n}.` : "") + e.toString(), o))
//                 : (c[e] = l)));
//         }
//         return c;
//       }
//       function o(t) {
//         return (...e) => e.reduce((p, e) => d(p, e, "", t), {});
//       }
//       n.d(e, "a", function () {
//         return c;
//       });
//       const c = o();
//       (c.fn = o((t, e, n, r) => {
//         if (void 0 !== t[e] && "function" == typeof n)
//           return (t[e] = n(t[e])), !0;
//       })),
//         (c.arrayFn = o((t, e, n, r) => {
//           if (Array.isArray(t[e]) && "function" == typeof n)
//             return (t[e] = n(t[e])), !0;
//         })),
//         (c.extend = o);
//     },
//     ,
//     ,
//     function (t, e, n) {
//       var r = n(276);
//       t.exports = function (t) {
//         return null == t ? "" : r(t);
//       };
//     },
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       var r = n(123).Symbol;
//       t.exports = r;
//     },
//     function (t, e, n) {
//       var r = n(277),
//         d = "object" == typeof self && self && self.Object === Object && self,
//         o = r || d || Function("return this")();
//       t.exports = o;
//     },
//     function (t, e) {
//       var n = Array.isArray;
//       t.exports = n;
//     },
//     function (t, e, n) {
//       var r = n(165),
//         d = n(281);
//       t.exports = function (t) {
//         return "symbol" == typeof t || (d(t) && "[object Symbol]" == r(t));
//       };
//     },
//     ,
//     ,
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var r = !1;
//       e.config = {
//         Promise: void 0,
//         set useDeprecatedSynchronousErrorHandling(t) {
//           if (t) {
//             var e = new Error();
//             console.warn(
//               "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
//                 e.stack
//             );
//           } else
//             r &&
//               console.log(
//                 "RxJS: Back to a better error behavior. Thank you. <3"
//               );
//           r = t;
//         },
//         get useDeprecatedSynchronousErrorHandling() {
//           return r;
//         },
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       function r(t, e, n) {
//         return (
//           e in t
//             ? Object.defineProperty(t, e, {
//                 value: n,
//                 enumerable: !0,
//                 configurable: !0,
//                 writable: !0,
//               })
//             : (t[e] = n),
//           t
//         );
//       }
//       var d = n(407),
//         o = n(13),
//         c = n(200),
//         l = n(58),
//         f = l.validateObject,
//         h = l.validateInsert;
//       function m(t) {
//         var e =
//             arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
//           n =
//             arguments.length > 2 && void 0 !== arguments[2]
//               ? arguments[2]
//               : null;
//         (this.selection = t), (this.operations = o({}, e)), (this.client = n);
//       }
//       o(m.prototype, {
//         clone: function () {
//           return new m(this.selection, o({}, this.operations), this.client);
//         },
//         merge: function (t) {
//           f("merge", t);
//           var e = new Error().stack
//             .toString()
//             .split("\n")
//             .filter(function (t) {
//               return t.trim();
//             })
//             .slice(2);
//           return (
//             console.warn(
//               'The "merge" patch has been deprecated and will be removed in the future\n'.concat(
//                 e.join("\n")
//               )
//             ),
//             this._assign("merge", d(this.operations.merge || {}, t))
//           );
//         },
//         set: function (t) {
//           return this._assign("set", t);
//         },
//         diffMatchPatch: function (t) {
//           return f("diffMatchPatch", t), this._assign("diffMatchPatch", t);
//         },
//         unset: function (t) {
//           if (!Array.isArray(t))
//             throw new Error(
//               "unset(attrs) takes an array of attributes to unset, non-array given"
//             );
//           return (this.operations = o({}, this.operations, { unset: t })), this;
//         },
//         setIfMissing: function (t) {
//           return this._assign("setIfMissing", t);
//         },
//         replace: function (t) {
//           return f("replace", t), this._set("set", { $: t });
//         },
//         inc: function (t) {
//           return this._assign("inc", t);
//         },
//         dec: function (t) {
//           return this._assign("dec", t);
//         },
//         insert: function (t, e, n) {
//           var d;
//           return (
//             h(t, e, n),
//             this._assign("insert", (r((d = {}), t, e), r(d, "items", n), d))
//           );
//         },
//         append: function (t, e) {
//           return this.insert("after", "".concat(t, "[-1]"), e);
//         },
//         prepend: function (t, e) {
//           return this.insert("before", "".concat(t, "[0]"), e);
//         },
//         splice: function (t, e, n, r) {
//           var d = e < 0 ? e - 1 : e,
//             o = void 0 === n || -1 === n ? -1 : Math.max(0, e + n),
//             c = d < 0 && o >= 0 ? "" : o,
//             l = "".concat(t, "[").concat(d, ":").concat(c, "]");
//           return this.insert("replace", l, r || []);
//         },
//         ifRevisionId: function (t) {
//           return (this.operations.ifRevisionID = t), this;
//         },
//         serialize: function () {
//           return o(c(this.selection), this.operations);
//         },
//         toJSON: function () {
//           return this.serialize();
//         },
//         commit: function () {
//           var t =
//             arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
//           if (!this.client)
//             throw new Error(
//               "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
//             );
//           var e = "string" == typeof this.selection,
//             n = o({ returnFirst: e, returnDocuments: !0 }, t);
//           return this.client.mutate({ patch: this.serialize() }, n);
//         },
//         reset: function () {
//           return (this.operations = {}), this;
//         },
//         _set: function (t, e) {
//           return this._assign(t, e, !1);
//         },
//         _assign: function (t, e) {
//           var n =
//             !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
//           return (
//             f(t, e),
//             (this.operations = o(
//               {},
//               this.operations,
//               r({}, t, o({}, (n && this.operations[t]) || {}, e))
//             )),
//             this
//           );
//         },
//       }),
//         (t.exports = m);
//     },
//     ,
//     function (t, e, n) {
//       "use strict";
//       var r = {
//         name: "ClientOnly",
//         functional: !0,
//         props: {
//           placeholder: String,
//           placeholderTag: { type: String, default: "div" },
//         },
//         render: function (t, e) {
//           var n = e.parent,
//             r = e.slots,
//             d = e.props,
//             o = r(),
//             c = o.default;
//           void 0 === c && (c = []);
//           var l = o.placeholder;
//           return n._isMounted
//             ? c
//             : (n.$once("hook:mounted", function () {
//                 n.$forceUpdate();
//               }),
//               d.placeholderTag && (d.placeholder || l)
//                 ? t(
//                     d.placeholderTag,
//                     { class: ["client-only-placeholder"] },
//                     d.placeholder || l
//                   )
//                 : c.length > 0
//                 ? c.map(function () {
//                     return t(!1);
//                   })
//                 : t(!1));
//         },
//       };
//       t.exports = r;
//     },
//     ,
//     function (t, e, n) {
//       "use strict";
//       var r =
//           "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
//             ? function (t) {
//                 return typeof t;
//               }
//             : function (t) {
//                 return t &&
//                   "function" == typeof Symbol &&
//                   t.constructor === Symbol &&
//                   t !== Symbol.prototype
//                   ? "symbol"
//                   : typeof t;
//               },
//         d = function (t, e) {
//           if (!(t instanceof e))
//             throw new TypeError("Cannot call a class as a function");
//         },
//         o = (function () {
//           function t(t, e) {
//             for (var i = 0; i < e.length; i++) {
//               var n = e[i];
//               (n.enumerable = n.enumerable || !1),
//                 (n.configurable = !0),
//                 "value" in n && (n.writable = !0),
//                 Object.defineProperty(t, n.key, n);
//             }
//           }
//           return function (e, n, r) {
//             return n && t(e.prototype, n), r && t(e, r), e;
//           };
//         })(),
//         c = function (t, e) {
//           if ("function" != typeof e && null !== e)
//             throw new TypeError(
//               "Super expression must either be null or a function, not " +
//                 typeof e
//             );
//           (t.prototype = Object.create(e && e.prototype, {
//             constructor: {
//               value: t,
//               enumerable: !1,
//               writable: !0,
//               configurable: !0,
//             },
//           })),
//             e &&
//               (Object.setPrototypeOf
//                 ? Object.setPrototypeOf(t, e)
//                 : (t.__proto__ = e));
//         },
//         l = function (t, e) {
//           if (!t)
//             throw new ReferenceError(
//               "this hasn't been initialised - super() hasn't been called"
//             );
//           return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
//         };
//       function f() {
//         for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
//           e[n] = arguments[n];
//         return e.join(" ");
//       }
//       function h(t) {
//         return (
//           Boolean(t) &&
//           "[object Object]" === Object.prototype.toString.call(t.valueOf())
//         );
//       }
//       function m(t, e) {
//         return t(e)
//           ? e
//           : h(e)
//           ? Object.freeze(
//               Object.keys(e).reduce(function (n, r) {
//                 return (n[r] = m(t, e[r])), n;
//               }, {})
//             )
//           : Array.isArray(e)
//           ? Object.freeze(
//               e.map(function (e) {
//                 return m(t, e);
//               })
//             )
//           : e;
//       }
//       function y(t, e) {
//         var n =
//             arguments.length > 2 && void 0 !== arguments[2]
//               ? arguments[2]
//               : null,
//           r = t.types[e];
//         if (r) return r;
//         if (n && "INTERFACE" === n.kind) return n;
//         throw new Error("No type of " + e + " found in schema");
//       }
//       var v = function (t, e) {
//           if (!(t instanceof e))
//             throw new TypeError("Cannot call a class as a function");
//         },
//         C = (function () {
//           function t(t, e) {
//             for (var i = 0; i < e.length; i++) {
//               var n = e[i];
//               (n.enumerable = n.enumerable || !1),
//                 (n.configurable = !0),
//                 "value" in n && (n.writable = !0),
//                 Object.defineProperty(t, n.key, n);
//             }
//           }
//           return function (e, n, r) {
//             return n && t(e.prototype, n), r && t(e, r), e;
//           };
//         })(),
//         P =
//           Object.assign ||
//           function (t) {
//             for (var i = 1; i < arguments.length; i++) {
//               var source = arguments[i];
//               for (var e in source)
//                 Object.prototype.hasOwnProperty.call(source, e) &&
//                   (t[e] = source[e]);
//             }
//             return t;
//           },
//         _ = function (t, e) {
//           if ("function" != typeof e && null !== e)
//             throw new TypeError(
//               "Super expression must either be null or a function, not " +
//                 (void 0 === e ? "undefined" : r(e))
//             );
//           (t.prototype = Object.create(e && e.prototype, {
//             constructor: {
//               value: t,
//               enumerable: !1,
//               writable: !0,
//               configurable: !0,
//             },
//           })),
//             e &&
//               (Object.setPrototypeOf
//                 ? Object.setPrototypeOf(t, e)
//                 : (t.__proto__ = e));
//         },
//         A = function (t, e) {
//           if (!t)
//             throw new ReferenceError(
//               "this hasn't been initialised - super() hasn't been called"
//             );
//           return !e ||
//             ("object" !== (void 0 === e ? "undefined" : r(e)) &&
//               "function" != typeof e)
//             ? t
//             : e;
//         },
//         w = function (t, i) {
//           if (Array.isArray(t)) return t;
//           if (Symbol.iterator in Object(t))
//             return (function (t, i) {
//               var e = [],
//                 n = !0,
//                 r = !1,
//                 d = void 0;
//               try {
//                 for (
//                   var o, c = t[Symbol.iterator]();
//                   !(n = (o = c.next()).done) &&
//                   (e.push(o.value), !i || e.length !== i);
//                   n = !0
//                 );
//               } catch (t) {
//                 (r = !0), (d = t);
//               } finally {
//                 try {
//                   !n && c.return && c.return();
//                 } finally {
//                   if (r) throw d;
//                 }
//               }
//               return e;
//             })(t, i);
//           throw new TypeError(
//             "Invalid attempt to destructure non-iterable instance"
//           );
//         },
//         F = function (t) {
//           if (Array.isArray(t)) {
//             for (var i = 0, e = Array(t.length); i < t.length; i++) e[i] = t[i];
//             return e;
//           }
//           return Array.from(t);
//         },
//         O = (function () {
//           function t(e, n, r) {
//             v(this, t),
//               (this.name = e),
//               (this.type = n),
//               (this.defaultValue = r),
//               Object.freeze(this);
//           }
//           return (
//             C(t, [
//               {
//                 key: "toInputValueString",
//                 value: function () {
//                   return "$" + this.name;
//                 },
//               },
//               {
//                 key: "toString",
//                 value: function () {
//                   var t = this.defaultValue ? " = " + x(this.defaultValue) : "";
//                   return "$" + this.name + ":" + this.type + t;
//                 },
//               },
//             ]),
//             t
//           );
//         })();
//       function k(t) {
//         return O.prototype.isPrototypeOf(t);
//       }
//       function S(t, e, n) {
//         return new O(t, e, n);
//       }
//       var E = (function () {
//           function t(e) {
//             v(this, t), (this.key = e);
//           }
//           return (
//             C(t, [
//               {
//                 key: "toString",
//                 value: function () {
//                   return this.key;
//                 },
//               },
//               {
//                 key: "valueOf",
//                 value: function () {
//                   return this.key.valueOf();
//                 },
//               },
//             ]),
//             t
//           );
//         })(),
//         I = (function () {
//           function t(e) {
//             v(this, t), (this.value = e);
//           }
//           return (
//             C(t, [
//               {
//                 key: "toString",
//                 value: function () {
//                   return this.value.toString();
//                 },
//               },
//               {
//                 key: "valueOf",
//                 value: function () {
//                   return this.value.valueOf();
//                 },
//               },
//               {
//                 key: "unwrapped",
//                 get: function () {
//                   return this.value;
//                 },
//               },
//             ]),
//             t
//           );
//         })();
//       function x(t) {
//         return O.prototype.isPrototypeOf(t)
//           ? t.toInputValueString()
//           : E.prototype.isPrototypeOf(t)
//           ? String(t)
//           : I.prototype.isPrototypeOf(t)
//           ? JSON.stringify(t.valueOf())
//           : Array.isArray(t)
//           ? "[" + f.apply(void 0, F(t.map(x))) + "]"
//           : h(t)
//           ? T(t, "{", "}")
//           : JSON.stringify(t);
//       }
//       function T(t) {
//         var e =
//             arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
//           n =
//             arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
//           r = Object.keys(t).map(function (e) {
//             return e + ": " + x(t[e]);
//           });
//         return "" + e + f.apply(void 0, F(r)) + n;
//       }
//       var V = function () {},
//         U = V,
//         D = V;
//       function j(t) {
//         var e = V,
//           n = {},
//           r = null;
//         if (2 === t.length)
//           if ("function" == typeof t[1]) {
//             var d = w(t, 2);
//             (n = d[0]), (e = d[1]);
//           } else {
//             var o = w(t, 2);
//             (n = o[0]), (r = o[1]);
//           }
//         else
//           1 === t.length &&
//             (W.prototype.isPrototypeOf(t[0])
//               ? (r = t[0])
//               : "function" == typeof t[0]
//               ? (e = t[0])
//               : (n = t[0]));
//         return { options: n, selectionSet: r, callback: e };
//       }
//       var N = Object.freeze({}),
//         R = Object.freeze({}),
//         M = (function () {
//           function t(e, n, r) {
//             v(this, t),
//               (this.name = e),
//               (this.alias = n.alias || null),
//               (this.responseKey = this.alias || this.name),
//               (this.args = n.args ? m(k, n.args) : N),
//               (this.directives = n.directives ? m(k, n.directives) : R),
//               (this.selectionSet = r),
//               Object.freeze(this);
//           }
//           return (
//             C(t, [
//               {
//                 key: "toString",
//                 value: function () {
//                   var t;
//                   return (
//                     "" +
//                     (this.alias ? this.alias + ": " : "") +
//                     this.name +
//                     ((t = this.args),
//                     Object.keys(t).length ? " (" + T(t) + ")" : "") +
//                     (function (t) {
//                       if (!Object.keys(t).length) return "";
//                       var e = Object.keys(t).map(function (e) {
//                         var n = t[e];
//                         return (
//                           "@" +
//                           e +
//                           (n && Object.keys(n).length ? "(" + T(n) + ")" : "")
//                         );
//                       });
//                       return " " + f.apply(void 0, F(e));
//                     })(this.directives) +
//                     this.selectionSet
//                   );
//                 },
//               },
//             ]),
//             t
//           );
//         })(),
//         B = function t() {
//           v(this, t);
//         },
//         L = (function (t) {
//           function e(t, n) {
//             v(this, e);
//             var r = A(
//               this,
//               (e.__proto__ || Object.getPrototypeOf(e)).call(this)
//             );
//             return (r.typeName = t), (r.selectionSet = n), Object.freeze(r), r;
//           }
//           return (
//             _(e, t),
//             C(e, [
//               {
//                 key: "toString",
//                 value: function () {
//                   return "... on " + this.typeName + this.selectionSet;
//                 },
//               },
//             ]),
//             e
//           );
//         })(B),
//         G = (function (t) {
//           function e(t) {
//             v(this, e);
//             var n = A(
//               this,
//               (e.__proto__ || Object.getPrototypeOf(e)).call(this)
//             );
//             return (
//               (n.name = t.name),
//               (n.selectionSet = t.selectionSet),
//               Object.freeze(n),
//               n
//             );
//           }
//           return (
//             _(e, t),
//             C(e, [
//               {
//                 key: "toString",
//                 value: function () {
//                   return "..." + this.name;
//                 },
//               },
//               {
//                 key: "toDefinition",
//                 value: function () {
//                   return new z(
//                     this.name,
//                     this.selectionSet.typeSchema.name,
//                     this.selectionSet
//                   );
//                 },
//               },
//             ]),
//             e
//           );
//         })(B),
//         z = (function () {
//           function t(e, n, r) {
//             v(this, t),
//               (this.name = e),
//               (this.typeName = n),
//               (this.selectionSet = r),
//               (this.spread = new G(this)),
//               Object.freeze(this);
//           }
//           return (
//             C(t, [
//               {
//                 key: "toString",
//                 value: function () {
//                   return (
//                     "fragment " +
//                     this.name +
//                     " on " +
//                     this.typeName +
//                     " " +
//                     this.selectionSet
//                   );
//                 },
//               },
//             ]),
//             t
//           );
//         })();
//       function H(t) {
//         return t.some(function (t) {
//           return M.prototype.isPrototypeOf(t)
//             ? "id" === t.name
//             : !(
//                 !B.prototype.isPrototypeOf(t) ||
//                 !t.selectionSet.typeSchema.implementsNode
//               ) && H(t.selectionSet.selections);
//         });
//       }
//       function J(t) {
//         return t.some(function (t) {
//           return M.prototype.isPrototypeOf(t)
//             ? "__typename" === t.name
//             : !(
//                 !B.prototype.isPrototypeOf(t) ||
//                 !t.selectionSet.typeSchema.implementsNode
//               ) && J(t.selectionSet.selections);
//         });
//       }
//       var W = (function () {
//           function t(e, n, r) {
//             v(this, t),
//               (this.typeSchema = "string" == typeof n ? y(e, n) : n),
//               U(this.typeSchema.name),
//               (this.typeBundle = e),
//               (this.selections = []),
//               r && r(new Q(this.typeBundle, this.typeSchema, this.selections)),
//               (this.typeSchema.implementsNode ||
//                 "Node" === this.typeSchema.name) &&
//                 (H(this.selections) ||
//                   this.selections.unshift(new M("id", {}, new t(e, "ID")))),
//               "INTERFACE" === this.typeSchema.kind &&
//                 (J(this.selections) ||
//                   this.selections.unshift(
//                     new M("__typename", {}, new t(e, "String"))
//                   )),
//               (this.selectionsByResponseKey = (function (t) {
//                 function e(t, e, n) {
//                   Array.isArray(t[e]) ? t[e].push(n) : (t[e] = [n]);
//                 }
//                 var n = t.reduce(function (t, n) {
//                   return (
//                     n.responseKey
//                       ? e(t, n.responseKey, n)
//                       : Object.keys(
//                           n.selectionSet.selectionsByResponseKey
//                         ).forEach(function (r) {
//                           e(t, r, n);
//                         }),
//                     t
//                   );
//                 }, {});
//                 return (
//                   Object.keys(n).forEach(function (t) {
//                     Object.freeze(n[t]);
//                   }),
//                   Object.freeze(n)
//                 );
//               })(this.selections)),
//               Object.freeze(this.selections),
//               Object.freeze(this);
//           }
//           return (
//             C(t, [
//               {
//                 key: "toString",
//                 value: function () {
//                   return "SCALAR" === this.typeSchema.kind ||
//                     "ENUM" === this.typeSchema.kind
//                     ? ""
//                     : " { " + f(this.selections) + " }";
//                 },
//               },
//             ]),
//             t
//           );
//         })(),
//         Q = (function () {
//           function t(e, n, r) {
//             v(this, t),
//               (this.typeBundle = e),
//               (this.typeSchema = n),
//               (this.selections = r);
//           }
//           return (
//             C(t, [
//               {
//                 key: "hasSelectionWithResponseKey",
//                 value: function (t) {
//                   return this.selections.some(function (e) {
//                     return e.responseKey === t;
//                   });
//                 },
//               },
//               {
//                 key: "add",
//                 value: function (t) {
//                   var e = void 0;
//                   if ("[object String]" === Object.prototype.toString.call(t)) {
//                     D(this.typeSchema.name, t);
//                     for (
//                       var n = arguments.length,
//                         r = Array(n > 1 ? n - 1 : 0),
//                         d = 1;
//                       d < n;
//                       d++
//                     )
//                       r[d - 1] = arguments[d];
//                     e = this.field.apply(this, [t].concat(r));
//                   } else
//                     M.prototype.isPrototypeOf(t) &&
//                       D(this.typeSchema.name, t.name),
//                       (e = t);
//                   if (
//                     e.responseKey &&
//                     this.hasSelectionWithResponseKey(e.responseKey)
//                   )
//                     throw new Error(
//                       "The field name or alias '" +
//                         e.responseKey +
//                         "' has already been added."
//                     );
//                   this.selections.push(e);
//                 },
//               },
//               {
//                 key: "field",
//                 value: function (t) {
//                   for (
//                     var e = arguments.length,
//                       n = Array(e > 1 ? e - 1 : 0),
//                       r = 1;
//                     r < e;
//                     r++
//                   )
//                     n[r - 1] = arguments[r];
//                   var d = j(n),
//                     o = d.options,
//                     c = d.callback,
//                     l = d.selectionSet;
//                   if (!l) {
//                     if (!this.typeSchema.fieldBaseTypes[t])
//                       throw new Error(
//                         'No field of name "' +
//                           t +
//                           '" found on type "' +
//                           this.typeSchema.name +
//                           '" in schema'
//                       );
//                     var f = y(
//                       this.typeBundle,
//                       this.typeSchema.fieldBaseTypes[t]
//                     );
//                     l = new W(this.typeBundle, f, c);
//                   }
//                   return new M(t, o, l);
//                 },
//               },
//               {
//                 key: "inlineFragmentOn",
//                 value: function (t) {
//                   var e =
//                       arguments.length > 1 && void 0 !== arguments[1]
//                         ? arguments[1]
//                         : V,
//                     n = void 0;
//                   return (
//                     (n = W.prototype.isPrototypeOf(e)
//                       ? e
//                       : new W(this.typeBundle, y(this.typeBundle, t), e)),
//                     new L(t, n)
//                   );
//                 },
//               },
//               {
//                 key: "addField",
//                 value: function (t) {
//                   for (
//                     var e = arguments.length,
//                       n = Array(e > 1 ? e - 1 : 0),
//                       r = 1;
//                     r < e;
//                     r++
//                   )
//                     n[r - 1] = arguments[r];
//                   this.add.apply(this, [t].concat(n));
//                 },
//               },
//               {
//                 key: "addConnection",
//                 value: function (t) {
//                   for (
//                     var e = arguments.length,
//                       n = Array(e > 1 ? e - 1 : 0),
//                       r = 1;
//                     r < e;
//                     r++
//                   )
//                     n[r - 1] = arguments[r];
//                   var d = j(n),
//                     o = d.options,
//                     c = d.callback,
//                     l = d.selectionSet;
//                   this.add(t, o, function (t) {
//                     t.add("pageInfo", {}, function (t) {
//                       t.add("hasNextPage"), t.add("hasPreviousPage");
//                     }),
//                       t.add("edges", {}, function (t) {
//                         t.add("cursor"), t.addField("node", {}, l || c);
//                       });
//                   });
//                 },
//               },
//               {
//                 key: "addInlineFragmentOn",
//                 value: function (t) {
//                   var e =
//                     arguments.length > 1 && void 0 !== arguments[1]
//                       ? arguments[1]
//                       : V;
//                   this.add(this.inlineFragmentOn(t, e));
//                 },
//               },
//               {
//                 key: "addFragment",
//                 value: function (t) {
//                   this.add(t);
//                 },
//               },
//             ]),
//             t
//           );
//         })();
//       var $ = (function () {
//           function t(e) {
//             v(this, t),
//               (this.variableDefinitions = e ? [].concat(F(e)) : []),
//               Object.freeze(this.variableDefinitions),
//               Object.freeze(this);
//           }
//           return (
//             C(t, [
//               {
//                 key: "toString",
//                 value: function () {
//                   return 0 === this.variableDefinitions.length
//                     ? ""
//                     : " (" + f(this.variableDefinitions) + ") ";
//                 },
//               },
//             ]),
//             t
//           );
//         })(),
//         Y = (function () {
//           function t(e, n) {
//             v(this, t);
//             for (
//               var r = arguments.length, d = Array(r > 2 ? r - 2 : 0), o = 2;
//               o < r;
//               o++
//             )
//               d[o - 2] = arguments[o];
//             var c = (function (t) {
//                 var e = void 0,
//                   n = void 0,
//                   r = void 0;
//                 if (3 === t.length) {
//                   var d = w(t, 3);
//                   (e = d[0]), (n = d[1]), (r = d[2]);
//                 } else
//                   2 === t.length
//                     ? ("[object String]" ===
//                       Object.prototype.toString.call(t[0])
//                         ? ((e = t[0]), (n = null))
//                         : Array.isArray(t[0]) && ((n = t[0]), (e = null)),
//                       (r = t[1]))
//                     : ((r = t[0]), (e = null));
//                 return { name: e, variables: n, selectionSetCallback: r };
//               })(d),
//               l = c.name,
//               f = c.variables,
//               h = c.selectionSetCallback;
//             (this.typeBundle = e),
//               (this.name = l),
//               (this.variableDefinitions = new $(f)),
//               (this.operationType = n),
//               "query" === n
//                 ? ((this.selectionSet = new W(e, e.queryType, h)),
//                   (this.typeSchema = y(e, e.queryType)))
//                 : ((this.selectionSet = new W(e, e.mutationType, h)),
//                   (this.typeSchema = y(e, e.mutationType))),
//               Object.freeze(this);
//           }
//           return (
//             C(t, [
//               {
//                 key: "toString",
//                 value: function () {
//                   var t = this.name ? " " + this.name : "";
//                   return (
//                     "" +
//                     this.operationType +
//                     t +
//                     this.variableDefinitions +
//                     this.selectionSet
//                   );
//                 },
//               },
//               {
//                 key: "isAnonymous",
//                 get: function () {
//                   return !this.name;
//                 },
//               },
//             ]),
//             t
//           );
//         })(),
//         K = (function (t) {
//           function e(t) {
//             var n;
//             v(this, e);
//             for (
//               var r = arguments.length, d = Array(r > 1 ? r - 1 : 0), o = 1;
//               o < r;
//               o++
//             )
//               d[o - 1] = arguments[o];
//             return A(
//               this,
//               (n = e.__proto__ || Object.getPrototypeOf(e)).call.apply(
//                 n,
//                 [this, t, "query"].concat(d)
//               )
//             );
//           }
//           return _(e, t), e;
//         })(Y),
//         X = (function (t) {
//           function e(t) {
//             var n;
//             v(this, e);
//             for (
//               var r = arguments.length, d = Array(r > 1 ? r - 1 : 0), o = 1;
//               o < r;
//               o++
//             )
//               d[o - 1] = arguments[o];
//             return A(
//               this,
//               (n = e.__proto__ || Object.getPrototypeOf(e)).call.apply(
//                 n,
//                 [this, t, "mutation"].concat(d)
//               )
//             );
//           }
//           return _(e, t), e;
//         })(Y);
//       function Z(t) {
//         return t.isAnonymous;
//       }
//       function tt(t, e) {
//         for (
//           var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), d = 2;
//           d < n;
//           d++
//         )
//           r[d - 2] = arguments[d];
//         return Y.prototype.isPrototypeOf(r[0])
//           ? r[0]
//           : "query" === e
//           ? new (Function.prototype.bind.apply(K, [null].concat([t], r)))()
//           : new (Function.prototype.bind.apply(X, [null].concat([t], r)))();
//       }
//       function et(t) {
//         return (
//           1 !== t.length &&
//           ((function (t) {
//             return t.some(Z);
//           })(t) ||
//             (function (t) {
//               var e = t.map(function (t) {
//                 return t.name;
//               });
//               return e.reduce(function (t, n, r) {
//                 return t || e.indexOf(n) !== r;
//               }, !1);
//             })(t))
//         );
//       }
//       var nt = (function () {
//           function t(e) {
//             v(this, t), (this.typeBundle = e), (this.definitions = []);
//           }
//           return (
//             C(t, [
//               {
//                 key: "toString",
//                 value: function () {
//                   return f(this.definitions);
//                 },
//               },
//               {
//                 key: "addOperation",
//                 value: function (t) {
//                   for (
//                     var e = arguments.length,
//                       n = Array(e > 1 ? e - 1 : 0),
//                       r = 1;
//                     r < e;
//                     r++
//                   )
//                     n[r - 1] = arguments[r];
//                   var d = tt.apply(void 0, [this.typeBundle, t].concat(n));
//                   if (et(this.operations.concat(d)))
//                     throw new Error(
//                       "All operations must be uniquely named on a multi-operation document"
//                     );
//                   this.definitions.push(d);
//                 },
//               },
//               {
//                 key: "addQuery",
//                 value: function () {
//                   for (
//                     var t = arguments.length, e = Array(t), n = 0;
//                     n < t;
//                     n++
//                   )
//                     e[n] = arguments[n];
//                   this.addOperation.apply(this, ["query"].concat(e));
//                 },
//               },
//               {
//                 key: "addMutation",
//                 value: function () {
//                   for (
//                     var t = arguments.length, e = Array(t), n = 0;
//                     n < t;
//                     n++
//                   )
//                     e[n] = arguments[n];
//                   this.addOperation.apply(this, ["mutation"].concat(e));
//                 },
//               },
//               {
//                 key: "defineFragment",
//                 value: function (t, e, n) {
//                   if (
//                     (function (t, e) {
//                       return t.some(function (t) {
//                         return t.name === e;
//                       });
//                     })(this.fragmentDefinitions, t)
//                   )
//                     throw new Error(
//                       "All fragments must be uniquely named on a multi-fragment document"
//                     );
//                   var r = new W(this.typeBundle, e, n),
//                     d = new z(t, e, r);
//                   return this.definitions.push(d), d.spread;
//                 },
//               },
//               {
//                 key: "operations",
//                 get: function () {
//                   return this.definitions.filter(function (t) {
//                     return Y.prototype.isPrototypeOf(t);
//                   });
//                 },
//               },
//               {
//                 key: "fragmentDefinitions",
//                 get: function () {
//                   return this.definitions.filter(function (t) {
//                     return z.prototype.isPrototypeOf(t);
//                   });
//                 },
//               },
//             ]),
//             t
//           );
//         })(),
//         at = function t(e) {
//           var n = this;
//           v(this, t),
//             Object.defineProperty(this, "attrs", { value: e, enumerable: !1 }),
//             Object.keys(this.attrs)
//               .filter(function (t) {
//                 return !(t in n);
//               })
//               .forEach(function (t) {
//                 var r = void 0;
//                 (r =
//                   null === e[t]
//                     ? {
//                         enumerable: !0,
//                         get: function () {
//                           return null;
//                         },
//                       }
//                     : {
//                         enumerable: !0,
//                         get: function () {
//                           return this.attrs[t].valueOf();
//                         },
//                       }),
//                   Object.defineProperty(n, t, r);
//               });
//         },
//         it = (function () {
//           function t() {
//             v(this, t), (this.classStore = {});
//           }
//           return (
//             C(t, [
//               {
//                 key: "registerClassForType",
//                 value: function (t, e) {
//                   this.classStore[e] = t;
//                 },
//               },
//               {
//                 key: "unregisterClassForType",
//                 value: function (t) {
//                   delete this.classStore[t];
//                 },
//               },
//               {
//                 key: "classForType",
//                 value: function (t) {
//                   return this.classStore[t] || at;
//                 },
//               },
//             ]),
//             t
//           );
//         })();
//       function ot(t) {
//         return (
//           "[object Null]" !== Object.prototype.toString.call(t) &&
//           "[object Undefined]" !== Object.prototype.toString.call(t)
//         );
//       }
//       function ct(t) {
//         return t.selection.selectionSet.typeSchema.implementsNode;
//       }
//       function ut(t) {
//         return null == t ? null : ct(t) ? t : ut(t.parent);
//       }
//       function st(t) {
//         return t.parent ? st(t.parent).concat(t) : [t];
//       }
//       function lt(t) {
//         return t.selection.selectionSet.typeSchema.implementsNode
//           ? [t]
//           : lt(t.parent).concat(t);
//       }
//       function ft(t, e) {
//         var n = e[e.length - 1],
//           r = n.selection.args.first,
//           d = Object.keys(n.selection.args)
//             .filter(function (t) {
//               return k(n.selection.args[t]);
//             })
//             .map(function (t) {
//               return n.selection.args[t];
//             }),
//           o = d.find(function (t) {
//             return "first" === t.name;
//           });
//         return (
//           o || (k(r) ? (o = r) : ((o = S("first", "Int", r)), d.push(o))),
//           [new nt(t.selection.selectionSet.typeBundle), d, o]
//         );
//       }
//       function pt(t, e, path, cursor) {
//         var n = e.shift();
//         if ((path.push(n.selection.responseKey), e.length))
//           t.add(
//             n.selection.name,
//             { alias: n.selection.alias, args: n.selection.args },
//             function (t) {
//               pt(t, e, path, cursor);
//             }
//           );
//         else {
//           var r = n.selection.selectionSet.selections
//               .find(function (t) {
//                 return "edges" === t.name;
//               })
//               .selectionSet.selections.find(function (t) {
//                 return "node" === t.name;
//               }),
//             d = void 0;
//           d = k(n.selection.args.first)
//             ? n.selection.args.first
//             : S("first", "Int", n.selection.args.first);
//           var o = {
//             alias: n.selection.alias,
//             args: Object.assign({}, n.selection.args, {
//               after: cursor,
//               first: d,
//             }),
//           };
//           t.addConnection(n.selection.name, o, r.selectionSet);
//         }
//       }
//       function ht(t) {
//         return t.reduce(function (t, e) {
//           return (
//             G.prototype.isPrototypeOf(e) && t.push(e.toDefinition()),
//             t.push.apply(t, F(ht(e.selectionSet.selections))),
//             t
//           );
//         }, []);
//       }
//       function mt(t, cursor) {
//         var e = ut(t);
//         return e
//           ? function () {
//               var n,
//                 path = [],
//                 r = e.selection.selectionSet.typeSchema,
//                 d = e.responseData.id,
//                 o = lt(t),
//                 c = ft(t, o),
//                 l = w(c, 2),
//                 f = l[0],
//                 h = l[1];
//               f.addQuery(h, function (t) {
//                 path.push("node"),
//                   t.add("node", { args: { id: d } }, function (t) {
//                     t.addInlineFragmentOn(r.name, function (t) {
//                       pt(t, o.slice(1), path, cursor);
//                     });
//                   });
//               });
//               var m = ht(f.operations[0].selectionSet.selections);
//               return (n = f.definitions).unshift.apply(n, F(m)), [f, path];
//             }
//           : function () {
//               var e,
//                 path = [],
//                 n = st(t),
//                 r = ft(t, n),
//                 d = w(r, 2),
//                 o = d[0],
//                 c = d[1];
//               o.addQuery(c, function (t) {
//                 pt(t, n.slice(1), path, cursor);
//               });
//               var l = ht(o.operations[0].selectionSet.selections);
//               return (e = o.definitions).unshift.apply(e, F(l)), [o, path];
//             };
//       }
//       function gt(t, e) {
//         return e !== t.edges[t.edges.length - 1]
//           ? new I(!0)
//           : t.pageInfo.hasNextPage;
//       }
//       function yt(t, e) {
//         return e !== t.edges[0] ? new I(!0) : t.pageInfo.hasPreviousPage;
//       }
//       function vt(t) {
//         return function (e, n) {
//           if (
//             (function (t) {
//               return t.selection.selectionSet.typeSchema.name.endsWith(
//                 "Connection"
//               );
//             })(e)
//           ) {
//             if (
//               !(
//                 n.pageInfo &&
//                 n.pageInfo.hasOwnProperty("hasNextPage") &&
//                 n.pageInfo.hasOwnProperty("hasPreviousPage")
//               )
//             )
//               throw new Error(
//                 'Connections must include the selections "pageInfo { hasNextPage, hasPreviousPage }".'
//               );
//             return n.edges.map(function (r) {
//               return Object.assign(r.node, {
//                 nextPageQueryAndPath: mt(e, r.cursor),
//                 hasNextPage: gt(n, r),
//                 hasPreviousPage: yt(n, r),
//                 variableValues: t,
//               });
//             });
//           }
//           return n;
//         };
//       }
//       var bt = (function () {
//         function t(e, n) {
//           var r =
//             arguments.length > 2 && void 0 !== arguments[2]
//               ? arguments[2]
//               : null;
//           v(this, t),
//             (this.selection = e),
//             (this.responseData = n),
//             (this.parent = r),
//             Object.freeze(this);
//         }
//         return (
//           C(t, [
//             {
//               key: "contextForObjectProperty",
//               value: function (e) {
//                 var n = this.selection.selectionSet.selectionsByResponseKey[e],
//                   r = n && n[0],
//                   d = void 0;
//                 if (
//                   ((d = B.prototype.isPrototypeOf(r)
//                     ? new t(r, this.responseData, this.parent)
//                     : new t(r, this.responseData[e], this)),
//                   !r)
//                 )
//                   throw new Error(
//                     'Unexpected response key "' +
//                       e +
//                       '", not found in selection set: ' +
//                       this.selection.selectionSet
//                   );
//                 return M.prototype.isPrototypeOf(r)
//                   ? d
//                   : d.contextForObjectProperty(e);
//               },
//             },
//             {
//               key: "contextForArrayItem",
//               value: function (e) {
//                 return new t(this.selection, e, this.parent);
//               },
//             },
//           ]),
//           t
//         );
//       })();
//       function Ct(t, e) {
//         var n = t.responseData;
//         return (
//           Array.isArray(n)
//             ? (n = (function (t, e) {
//                 return t.responseData.map(function (n) {
//                   return Ct(t.contextForArrayItem(n), e);
//                 });
//               })(t, e))
//             : h(n) &&
//               (n = (function (t, e) {
//                 return Object.keys(t.responseData).reduce(function (n, r) {
//                   return (n[r] = Ct(t.contextForObjectProperty(r), e)), n;
//                 }, {});
//               })(t, e)),
//           (function (t, e, n) {
//             return t.reduce(function (t, n) {
//               return n(e, t);
//             }, n);
//           })(e, t, n)
//         );
//       }
//       function Pt(t, e) {
//         return (
//           ot(e) &&
//             ct(t) &&
//             (e.refetchQuery = function () {
//               return new K(t.selection.selectionSet.typeBundle, function (e) {
//                 e.add(
//                   "node",
//                   { args: { id: t.responseData.id } },
//                   function (e) {
//                     e.addInlineFragmentOn(
//                       t.selection.selectionSet.typeSchema.name,
//                       t.selection.selectionSet
//                     );
//                   }
//                 );
//               });
//             }),
//           e
//         );
//       }
//       function _t(t) {
//         return function (e, n) {
//           return h(n)
//             ? new (t.classForType(e.selection.selectionSet.typeSchema.name))(n)
//             : n;
//         };
//       }
//       function At(t, e) {
//         if (ot(e)) {
//           if ("SCALAR" === t.selection.selectionSet.typeSchema.kind)
//             return new I(e);
//           if ("ENUM" === t.selection.selectionSet.typeSchema.kind)
//             return new E(e);
//         }
//         return e;
//       }
//       function wt(t, e) {
//         var n = t.selection.selectionSet,
//           r = n.typeBundle,
//           d = n.typeSchema;
//         return (
//           ot(e) &&
//             (e.__typename ? (e.type = y(r, e.__typename, d)) : (e.type = d)),
//           e
//         );
//       }
//       function Ft(t, e) {
//         var n,
//           r,
//           d,
//           o =
//             arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
//           c =
//             o.transformers ||
//             ((r = (n = o).classRegistry),
//             (d = void 0 === r ? new it() : r),
//             [At, Pt, vt(n.variableValues), wt, _t(d)]);
//         return Ct(new bt(t, e), c);
//       }
//       var Ot = (function () {
//           function t(e, n) {
//             var r = n.url,
//               d = n.fetcherOptions,
//               o = n.fetcher,
//               c = n.registry,
//               l = void 0 === c ? new it() : c;
//             if (
//               (v(this, t),
//               (this.typeBundle = e),
//               (this.classRegistry = l),
//               r && o)
//             )
//               throw new Error(
//                 "Arguments not supported: supply either `url` and optional `fetcherOptions` OR use a `fetcher` function for further customization."
//               );
//             if (r)
//               this.fetcher = (function (t) {
//                 var e =
//                   arguments.length > 1 && void 0 !== arguments[1]
//                     ? arguments[1]
//                     : {};
//                 return function (n, r) {
//                   return fetch(
//                     t,
//                     P(
//                       { body: JSON.stringify(n), method: "POST", mode: "cors" },
//                       e,
//                       {
//                         headers: P(
//                           {
//                             "Content-Type": "application/json",
//                             Accept: "application/json",
//                           },
//                           e.headers,
//                           r
//                         ),
//                       }
//                     )
//                   ).then(function (t) {
//                     return t.headers
//                       .get("content-type")
//                       .indexOf("application/json") > -1
//                       ? t.json()
//                       : t.text().then(function (text) {
//                           return { text: text };
//                         });
//                   });
//                 };
//               })(r, d);
//             else {
//               if (!o)
//                 throw new Error(
//                   "Invalid arguments: one of `url` or `fetcher` is needed."
//                 );
//               if (d)
//                 throw new Error(
//                   "Arguments not supported: when specifying your own `fetcher`, set options through it and not with `fetcherOptions`"
//                 );
//               this.fetcher = o;
//             }
//           }
//           return (
//             C(t, [
//               {
//                 key: "document",
//                 value: function () {
//                   return new nt(this.typeBundle);
//                 },
//               },
//               {
//                 key: "query",
//                 value: function () {
//                   for (
//                     var t = arguments.length, e = Array(t), n = 0;
//                     n < t;
//                     n++
//                   )
//                     e[n] = arguments[n];
//                   return new (Function.prototype.bind.apply(
//                     K,
//                     [null].concat([this.typeBundle], e)
//                   ))();
//                 },
//               },
//               {
//                 key: "mutation",
//                 value: function () {
//                   for (
//                     var t = arguments.length, e = Array(t), n = 0;
//                     n < t;
//                     n++
//                   )
//                     e[n] = arguments[n];
//                   return new (Function.prototype.bind.apply(
//                     X,
//                     [null].concat([this.typeBundle], e)
//                   ))();
//                 },
//               },
//               {
//                 key: "send",
//                 value: function (t) {
//                   var e =
//                       arguments.length > 1 && void 0 !== arguments[1]
//                         ? arguments[1]
//                         : null,
//                     n = this,
//                     r =
//                       arguments.length > 2 && void 0 !== arguments[2]
//                         ? arguments[2]
//                         : null,
//                     d =
//                       arguments.length > 3 && void 0 !== arguments[3]
//                         ? arguments[3]
//                         : null,
//                     o = void 0,
//                     c = {
//                       query: (o = Function.prototype.isPrototypeOf(t)
//                         ? t(this)
//                         : t).toString(),
//                     };
//                   e && (c.variables = e), Object.assign(c, r);
//                   var l = void 0;
//                   if (Y.prototype.isPrototypeOf(o)) l = o;
//                   else {
//                     var f = o;
//                     if (1 === f.operations.length) l = f.operations[0];
//                     else {
//                       if (!r.operationName)
//                         throw new Error(
//                           "\n          A document must contain exactly one operation, or an operationName\n          must be specified. Example:\n\n            client.send(document, null, {operationName: 'myFancyQuery'});\n        "
//                         );
//                       l = f.operations.find(function (t) {
//                         return t.name === r.operationName;
//                       });
//                     }
//                   }
//                   return this.fetcher(c, d).then(function (t) {
//                     return (
//                       t.data &&
//                         (t.model = Ft(l, t.data, {
//                           classRegistry: n.classRegistry,
//                           variableValues: e,
//                         })),
//                       t
//                     );
//                   });
//                 },
//               },
//               {
//                 key: "fetchNextPage",
//                 value: function (t, e) {
//                   var n = void 0,
//                     r = (n = Array.isArray(t)
//                       ? t[t.length - 1]
//                       : t).nextPageQueryAndPath(),
//                     d = w(r, 2),
//                     o = d[0],
//                     path = d[1],
//                     c = void 0;
//                   return (
//                     (n.variableValues || e) &&
//                       (c = Object.assign({}, n.variableValues, e)),
//                     this.send(o, c).then(function (t) {
//                       return (
//                         (t.model = path.reduce(function (object, t) {
//                           return object[t];
//                         }, t.model)),
//                         t
//                       );
//                     })
//                   );
//                 },
//               },
//               {
//                 key: "fetchAllPages",
//                 value: function (t, e) {
//                   var n = this,
//                     r = e.pageSize;
//                   return (function (t) {
//                     return t && t.length && t[t.length - 1].hasNextPage;
//                   })(t)
//                     ? this.fetchNextPage(t, { first: r }).then(function (e) {
//                         var d = e.model,
//                           o = t.concat(d);
//                         return n.fetchAllPages(o, { pageSize: r });
//                       })
//                     : Promise.resolve(t);
//                 },
//               },
//               {
//                 key: "refetch",
//                 value: function (t) {
//                   if (!t)
//                     throw new Error(
//                       "'client#refetch' must be called with a non-null instance of a Node."
//                     );
//                   if (!t.type.implementsNode)
//                     throw new Error(
//                       "'client#refetch' must be called with a type that implements Node. Received " +
//                         t.type.name +
//                         "."
//                     );
//                   return this.send(t.refetchQuery()).then(function (t) {
//                     return t.model.node;
//                   });
//                 },
//               },
//               {
//                 key: "variable",
//                 value: function (t, e, n) {
//                   return S(t, e, n);
//                 },
//               },
//               {
//                 key: "enum",
//                 value: function (t) {
//                   return (function (t) {
//                     return new E(t);
//                   })(t);
//                 },
//               },
//             ]),
//             t
//           );
//         })(),
//         kt = (function () {
//           function t(e) {
//             var n = this;
//             d(this, t),
//               Object.keys(this.deprecatedProperties).forEach(function (t) {
//                 e.hasOwnProperty(t) &&
//                   (console.warn(
//                     "[ShopifyBuy] Config property " +
//                       t +
//                       " is deprecated as of v1.0, please use " +
//                       n.deprecatedProperties[t] +
//                       " instead."
//                   ),
//                   (e[n.deprecatedProperties[t]] = e[t]));
//               }),
//               this.requiredProperties.forEach(function (t) {
//                 if (!e.hasOwnProperty(t))
//                   throw new Error(
//                     "new Config() requires the option '" + t + "'"
//                   );
//                 n[t] = e[t];
//               }),
//               e.hasOwnProperty("apiVersion")
//                 ? (this.apiVersion = e.apiVersion)
//                 : (this.apiVersion = "2023-01"),
//               e.hasOwnProperty("source") && (this.source = e.source),
//               e.hasOwnProperty("language") && (this.language = e.language);
//           }
//           return (
//             o(t, [
//               {
//                 key: "requiredProperties",
//                 get: function () {
//                   return ["storefrontAccessToken", "domain"];
//                 },
//               },
//               {
//                 key: "deprecatedProperties",
//                 get: function () {
//                   return {
//                     accessToken: "storefrontAccessToken",
//                     apiKey: "storefrontAccessToken",
//                   };
//                 },
//               },
//             ]),
//             t
//           );
//         })(),
//         St = function t(e) {
//           d(this, t), (this.graphQLClient = e);
//         },
//         Et = [{ message: "an unknown error has occurred." }];
//       function It(path) {
//         var t = path.split(".");
//         return function (e) {
//           var n = e.model,
//             r = e.errors;
//           return new Promise(function (e, d) {
//             try {
//               e(
//                 t.reduce(function (t, e) {
//                   return t[e];
//                 }, n)
//               );
//             } catch (t) {
//               d(r || Et);
//             }
//           });
//         };
//       }
//       function xt(t, e) {
//         var n = [].concat(t);
//         return Promise.all(
//           n.reduce(function (t, n) {
//             return (
//               null === n ||
//                 (t.push(
//                   e
//                     .fetchAllPages(n.images, { pageSize: 250 })
//                     .then(function (t) {
//                       n.attrs.images = t;
//                     })
//                 ),
//                 t.push(
//                   e
//                     .fetchAllPages(n.variants, { pageSize: 250 })
//                     .then(function (t) {
//                       n.attrs.variants = t;
//                     })
//                 )),
//               t
//             );
//           }, [])
//         );
//       }
//       function Tt(t) {
//         return function (e) {
//           return xt(e, t).then(function () {
//             return e;
//           });
//         };
//       }
//       function Vt(t) {
//         return function (e) {
//           var n = [].concat(e);
//           return Promise.all(
//             n.reduce(function (e, n) {
//               return e.concat(xt(n.products, t));
//             }, [])
//           ).then(function () {
//             return e;
//           });
//         };
//       }
//       var Ut = {
//         variantForOptions: function (t, e) {
//           return t.variants.find(function (t) {
//             return t.selectedOptions.every(function (t) {
//               return e[t.name] === t.value.valueOf();
//             });
//           });
//         },
//       };
//       function Dt(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.id = t.variable("id", "ID!")),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.ProductFragment = e.defineFragment(
//             "ProductFragment",
//             "Product",
//             function (t) {
//               t.add("id"),
//                 t.add("availableForSale"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("descriptionHtml"),
//                 t.add("description"),
//                 t.add("handle"),
//                 t.add("productType"),
//                 t.add("title"),
//                 t.add("vendor"),
//                 t.add("publishedAt"),
//                 t.add("onlineStoreUrl"),
//                 t.add("options", function (t) {
//                   t.add("name"), t.add("values");
//                 }),
//                 t.add("images", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("url", { alias: "src" }),
//                             t.add("altText"),
//                             t.add("width"),
//                             t.add("height");
//                         });
//                     });
//                 }),
//                 t.add("variants", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.addFragment(n.VariantFragment);
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addQuery([r.__defaultOperation__.id], function (t) {
//             t.add(
//               "node",
//               { args: { id: r.__defaultOperation__.id } },
//               function (t) {
//                 t.addFragment(n.ProductFragment);
//               }
//             );
//           }),
//           e
//         );
//       }
//       function jt(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.ids = t.variable("ids", "[ID!]!")),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.ProductFragment = e.defineFragment(
//             "ProductFragment",
//             "Product",
//             function (t) {
//               t.add("id"),
//                 t.add("availableForSale"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("descriptionHtml"),
//                 t.add("description"),
//                 t.add("handle"),
//                 t.add("productType"),
//                 t.add("title"),
//                 t.add("vendor"),
//                 t.add("publishedAt"),
//                 t.add("onlineStoreUrl"),
//                 t.add("options", function (t) {
//                   t.add("name"), t.add("values");
//                 }),
//                 t.add("images", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("url", { alias: "src" }),
//                             t.add("altText"),
//                             t.add("width"),
//                             t.add("height");
//                         });
//                     });
//                 }),
//                 t.add("variants", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.addFragment(n.VariantFragment);
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addQuery([r.__defaultOperation__.ids], function (t) {
//             t.add(
//               "nodes",
//               { args: { ids: r.__defaultOperation__.ids } },
//               function (t) {
//                 t.addFragment(n.ProductFragment);
//               }
//             );
//           }),
//           e
//         );
//       }
//       function Nt(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.first = t.variable("first", "Int!")),
//           (r.__defaultOperation__.query = t.variable("query", "String")),
//           (r.__defaultOperation__.sortKey = t.variable(
//             "sortKey",
//             "ProductSortKeys"
//           )),
//           (r.__defaultOperation__.reverse = t.variable("reverse", "Boolean")),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.ProductFragment = e.defineFragment(
//             "ProductFragment",
//             "Product",
//             function (t) {
//               t.add("id"),
//                 t.add("availableForSale"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("descriptionHtml"),
//                 t.add("description"),
//                 t.add("handle"),
//                 t.add("productType"),
//                 t.add("title"),
//                 t.add("vendor"),
//                 t.add("publishedAt"),
//                 t.add("onlineStoreUrl"),
//                 t.add("options", function (t) {
//                   t.add("name"), t.add("values");
//                 }),
//                 t.add("images", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("url", { alias: "src" }),
//                             t.add("altText"),
//                             t.add("width"),
//                             t.add("height");
//                         });
//                     });
//                 }),
//                 t.add("variants", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.addFragment(n.VariantFragment);
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addQuery(
//             [
//               r.__defaultOperation__.first,
//               r.__defaultOperation__.query,
//               r.__defaultOperation__.sortKey,
//               r.__defaultOperation__.reverse,
//             ],
//             function (t) {
//               t.add(
//                 "products",
//                 {
//                   args: {
//                     first: r.__defaultOperation__.first,
//                     query: r.__defaultOperation__.query,
//                     sortKey: r.__defaultOperation__.sortKey,
//                     reverse: r.__defaultOperation__.reverse,
//                   },
//                 },
//                 function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.addFragment(n.ProductFragment);
//                         });
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       function Rt(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.handle = t.variable("handle", "String!")),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.ProductFragment = e.defineFragment(
//             "ProductFragment",
//             "Product",
//             function (t) {
//               t.add("id"),
//                 t.add("availableForSale"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("descriptionHtml"),
//                 t.add("description"),
//                 t.add("handle"),
//                 t.add("productType"),
//                 t.add("title"),
//                 t.add("vendor"),
//                 t.add("publishedAt"),
//                 t.add("onlineStoreUrl"),
//                 t.add("options", function (t) {
//                   t.add("name"), t.add("values");
//                 }),
//                 t.add("images", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("url", { alias: "src" }),
//                             t.add("altText"),
//                             t.add("width"),
//                             t.add("height");
//                         });
//                     });
//                 }),
//                 t.add("variants", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.addFragment(n.VariantFragment);
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addQuery([r.__defaultOperation__.handle], function (t) {
//             t.add(
//               "productByHandle",
//               { args: { handle: r.__defaultOperation__.handle } },
//               function (t) {
//                 t.addFragment(n.ProductFragment);
//               }
//             );
//           }),
//           e
//         );
//       }
//       function Mt(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.productId = t.variable("productId", "ID!")),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.ProductFragment = e.defineFragment(
//             "ProductFragment",
//             "Product",
//             function (t) {
//               t.add("id"),
//                 t.add("availableForSale"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("descriptionHtml"),
//                 t.add("description"),
//                 t.add("handle"),
//                 t.add("productType"),
//                 t.add("title"),
//                 t.add("vendor"),
//                 t.add("publishedAt"),
//                 t.add("onlineStoreUrl"),
//                 t.add("options", function (t) {
//                   t.add("name"), t.add("values");
//                 }),
//                 t.add("images", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("url", { alias: "src" }),
//                             t.add("altText"),
//                             t.add("width"),
//                             t.add("height");
//                         });
//                     });
//                 }),
//                 t.add("variants", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.addFragment(n.VariantFragment);
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addQuery([r.__defaultOperation__.productId], function (t) {
//             t.add(
//               "productRecommendations",
//               { args: { productId: r.__defaultOperation__.productId } },
//               function (t) {
//                 t.addFragment(n.ProductFragment);
//               }
//             );
//           }),
//           e
//         );
//       }
//       var Bt = (function (t) {
//         function e() {
//           return (
//             d(this, e),
//             l(
//               this,
//               (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
//             )
//           );
//         }
//         return (
//           c(e, t),
//           o(e, [
//             {
//               key: "fetchAll",
//               value: function () {
//                 var t =
//                   arguments.length > 0 && void 0 !== arguments[0]
//                     ? arguments[0]
//                     : 20;
//                 return this.graphQLClient
//                   .send(Nt, { first: t })
//                   .then(It("products"))
//                   .then(Tt(this.graphQLClient));
//               },
//             },
//             {
//               key: "fetch",
//               value: function (t) {
//                 return this.graphQLClient
//                   .send(Dt, { id: t })
//                   .then(It("node"))
//                   .then(Tt(this.graphQLClient));
//               },
//             },
//             {
//               key: "fetchMultiple",
//               value: function (t) {
//                 return this.graphQLClient
//                   .send(jt, { ids: t })
//                   .then(It("nodes"))
//                   .then(Tt(this.graphQLClient));
//               },
//             },
//             {
//               key: "fetchByHandle",
//               value: function (t) {
//                 return this.graphQLClient
//                   .send(Rt, { handle: t })
//                   .then(It("productByHandle"))
//                   .then(Tt(this.graphQLClient));
//               },
//             },
//             {
//               key: "fetchQuery",
//               value: function () {
//                 var t =
//                     arguments.length > 0 && void 0 !== arguments[0]
//                       ? arguments[0]
//                       : {},
//                   e = t.first,
//                   n = void 0 === e ? 20 : e,
//                   r = t.sortKey,
//                   d = void 0 === r ? "ID" : r,
//                   o = t.query,
//                   c = t.reverse;
//                 return this.graphQLClient
//                   .send(Nt, { first: n, sortKey: d, query: o, reverse: c })
//                   .then(It("products"))
//                   .then(Tt(this.graphQLClient));
//               },
//             },
//             {
//               key: "fetchRecommendations",
//               value: function (t) {
//                 return this.graphQLClient
//                   .send(Mt, { productId: t })
//                   .then(It("productRecommendations"))
//                   .then(Tt(this.graphQLClient));
//               },
//             },
//             {
//               key: "helpers",
//               get: function () {
//                 return Ut;
//               },
//             },
//           ]),
//           e
//         );
//       })(St);
//       function Lt(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.id = t.variable("id", "ID!")),
//           (n.CollectionFragment = e.defineFragment(
//             "CollectionFragment",
//             "Collection",
//             function (t) {
//               t.add("id"),
//                 t.add("handle"),
//                 t.add("description"),
//                 t.add("descriptionHtml"),
//                 t.add("updatedAt"),
//                 t.add("title"),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText");
//                 });
//             }
//           )),
//           e.addQuery([r.__defaultOperation__.id], function (t) {
//             t.add(
//               "node",
//               { args: { id: r.__defaultOperation__.id } },
//               function (t) {
//                 t.addFragment(n.CollectionFragment);
//               }
//             );
//           }),
//           e
//         );
//       }
//       function qt(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.id = t.variable("id", "ID!")),
//           (r.__defaultOperation__.productsFirst = t.variable(
//             "productsFirst",
//             "Int!"
//           )),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.CollectionFragment = e.defineFragment(
//             "CollectionFragment",
//             "Collection",
//             function (t) {
//               t.add("id"),
//                 t.add("handle"),
//                 t.add("description"),
//                 t.add("descriptionHtml"),
//                 t.add("updatedAt"),
//                 t.add("title"),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText");
//                 });
//             }
//           )),
//           (n.ProductFragment = e.defineFragment(
//             "ProductFragment",
//             "Product",
//             function (t) {
//               t.add("id"),
//                 t.add("availableForSale"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("descriptionHtml"),
//                 t.add("description"),
//                 t.add("handle"),
//                 t.add("productType"),
//                 t.add("title"),
//                 t.add("vendor"),
//                 t.add("publishedAt"),
//                 t.add("onlineStoreUrl"),
//                 t.add("options", function (t) {
//                   t.add("name"), t.add("values");
//                 }),
//                 t.add("images", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("url", { alias: "src" }),
//                             t.add("altText"),
//                             t.add("width"),
//                             t.add("height");
//                         });
//                     });
//                 }),
//                 t.add("variants", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.addFragment(n.VariantFragment);
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addQuery(
//             [r.__defaultOperation__.id, r.__defaultOperation__.productsFirst],
//             function (t) {
//               t.add(
//                 "node",
//                 { args: { id: r.__defaultOperation__.id } },
//                 function (t) {
//                   t.addFragment(n.CollectionFragment),
//                     t.addInlineFragmentOn("Collection", function (t) {
//                       t.add(
//                         "products",
//                         {
//                           args: { first: r.__defaultOperation__.productsFirst },
//                         },
//                         function (t) {
//                           t.add("pageInfo", function (t) {
//                             t.add("hasNextPage"), t.add("hasPreviousPage");
//                           }),
//                             t.add("edges", function (t) {
//                               t.add("cursor"),
//                                 t.add("node", function (t) {
//                                   t.addFragment(n.ProductFragment);
//                                 });
//                             });
//                         }
//                       );
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       function Gt(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.first = t.variable("first", "Int!")),
//           (r.__defaultOperation__.query = t.variable("query", "String")),
//           (r.__defaultOperation__.sortKey = t.variable(
//             "sortKey",
//             "CollectionSortKeys"
//           )),
//           (r.__defaultOperation__.reverse = t.variable("reverse", "Boolean")),
//           (n.CollectionFragment = e.defineFragment(
//             "CollectionFragment",
//             "Collection",
//             function (t) {
//               t.add("id"),
//                 t.add("handle"),
//                 t.add("description"),
//                 t.add("descriptionHtml"),
//                 t.add("updatedAt"),
//                 t.add("title"),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText");
//                 });
//             }
//           )),
//           e.addQuery(
//             [
//               r.__defaultOperation__.first,
//               r.__defaultOperation__.query,
//               r.__defaultOperation__.sortKey,
//               r.__defaultOperation__.reverse,
//             ],
//             function (t) {
//               t.add(
//                 "collections",
//                 {
//                   args: {
//                     first: r.__defaultOperation__.first,
//                     query: r.__defaultOperation__.query,
//                     sortKey: r.__defaultOperation__.sortKey,
//                     reverse: r.__defaultOperation__.reverse,
//                   },
//                 },
//                 function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.addFragment(n.CollectionFragment);
//                         });
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       function zt(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.first = t.variable("first", "Int!")),
//           (r.__defaultOperation__.query = t.variable("query", "String")),
//           (r.__defaultOperation__.sortKey = t.variable(
//             "sortKey",
//             "CollectionSortKeys"
//           )),
//           (r.__defaultOperation__.reverse = t.variable("reverse", "Boolean")),
//           (r.__defaultOperation__.productsFirst = t.variable(
//             "productsFirst",
//             "Int!"
//           )),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.CollectionFragment = e.defineFragment(
//             "CollectionFragment",
//             "Collection",
//             function (t) {
//               t.add("id"),
//                 t.add("handle"),
//                 t.add("description"),
//                 t.add("descriptionHtml"),
//                 t.add("updatedAt"),
//                 t.add("title"),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText");
//                 });
//             }
//           )),
//           (n.ProductFragment = e.defineFragment(
//             "ProductFragment",
//             "Product",
//             function (t) {
//               t.add("id"),
//                 t.add("availableForSale"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("descriptionHtml"),
//                 t.add("description"),
//                 t.add("handle"),
//                 t.add("productType"),
//                 t.add("title"),
//                 t.add("vendor"),
//                 t.add("publishedAt"),
//                 t.add("onlineStoreUrl"),
//                 t.add("options", function (t) {
//                   t.add("name"), t.add("values");
//                 }),
//                 t.add("images", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("url", { alias: "src" }),
//                             t.add("altText"),
//                             t.add("width"),
//                             t.add("height");
//                         });
//                     });
//                 }),
//                 t.add("variants", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.addFragment(n.VariantFragment);
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addQuery(
//             [
//               r.__defaultOperation__.first,
//               r.__defaultOperation__.query,
//               r.__defaultOperation__.sortKey,
//               r.__defaultOperation__.reverse,
//               r.__defaultOperation__.productsFirst,
//             ],
//             function (t) {
//               t.add(
//                 "collections",
//                 {
//                   args: {
//                     first: r.__defaultOperation__.first,
//                     query: r.__defaultOperation__.query,
//                     sortKey: r.__defaultOperation__.sortKey,
//                     reverse: r.__defaultOperation__.reverse,
//                   },
//                 },
//                 function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.addFragment(n.CollectionFragment),
//                             t.add(
//                               "products",
//                               {
//                                 args: {
//                                   first: r.__defaultOperation__.productsFirst,
//                                 },
//                               },
//                               function (t) {
//                                 t.add("pageInfo", function (t) {
//                                   t.add("hasNextPage"),
//                                     t.add("hasPreviousPage");
//                                 }),
//                                   t.add("edges", function (t) {
//                                     t.add("cursor"),
//                                       t.add("node", function (t) {
//                                         t.addFragment(n.ProductFragment);
//                                       });
//                                   });
//                               }
//                             );
//                         });
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       function Ht(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.handle = t.variable("handle", "String!")),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.ProductFragment = e.defineFragment(
//             "ProductFragment",
//             "Product",
//             function (t) {
//               t.add("id"),
//                 t.add("availableForSale"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("descriptionHtml"),
//                 t.add("description"),
//                 t.add("handle"),
//                 t.add("productType"),
//                 t.add("title"),
//                 t.add("vendor"),
//                 t.add("publishedAt"),
//                 t.add("onlineStoreUrl"),
//                 t.add("options", function (t) {
//                   t.add("name"), t.add("values");
//                 }),
//                 t.add("images", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("url", { alias: "src" }),
//                             t.add("altText"),
//                             t.add("width"),
//                             t.add("height");
//                         });
//                     });
//                 }),
//                 t.add("variants", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.addFragment(n.VariantFragment);
//                         });
//                     });
//                 });
//             }
//           )),
//           (n.CollectionFragment = e.defineFragment(
//             "CollectionFragment",
//             "Collection",
//             function (t) {
//               t.add("id"),
//                 t.add("handle"),
//                 t.add("description"),
//                 t.add("descriptionHtml"),
//                 t.add("updatedAt"),
//                 t.add("title"),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText");
//                 });
//             }
//           )),
//           (n.CollectionsProductsFragment = e.defineFragment(
//             "CollectionsProductsFragment",
//             "Collection",
//             function (t) {
//               t.add("products", { args: { first: 20 } }, function (t) {
//                 t.add("pageInfo", function (t) {
//                   t.add("hasNextPage"), t.add("hasPreviousPage");
//                 }),
//                   t.add("edges", function (t) {
//                     t.add("cursor"),
//                       t.add("node", function (t) {
//                         t.addFragment(n.ProductFragment);
//                       });
//                   });
//               });
//             }
//           )),
//           e.addQuery([r.__defaultOperation__.handle], function (t) {
//             t.add(
//               "collectionByHandle",
//               { args: { handle: r.__defaultOperation__.handle } },
//               function (t) {
//                 t.addFragment(n.CollectionFragment),
//                   t.addFragment(n.CollectionsProductsFragment);
//               }
//             );
//           }),
//           e
//         );
//       }
//       var Jt = (function (t) {
//         function e() {
//           return (
//             d(this, e),
//             l(
//               this,
//               (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
//             )
//           );
//         }
//         return (
//           c(e, t),
//           o(e, [
//             {
//               key: "fetchAll",
//               value: function () {
//                 var t =
//                   arguments.length > 0 && void 0 !== arguments[0]
//                     ? arguments[0]
//                     : 20;
//                 return this.graphQLClient
//                   .send(Gt, { first: t })
//                   .then(It("collections"));
//               },
//             },
//             {
//               key: "fetchAllWithProducts",
//               value: function () {
//                 var t =
//                     arguments.length > 0 && void 0 !== arguments[0]
//                       ? arguments[0]
//                       : {},
//                   e = t.first,
//                   n = void 0 === e ? 20 : e,
//                   r = t.productsFirst,
//                   d = void 0 === r ? 20 : r;
//                 return this.graphQLClient
//                   .send(zt, { first: n, productsFirst: d })
//                   .then(It("collections"))
//                   .then(Vt(this.graphQLClient));
//               },
//             },
//             {
//               key: "fetch",
//               value: function (t) {
//                 return this.graphQLClient.send(Lt, { id: t }).then(It("node"));
//               },
//             },
//             {
//               key: "fetchWithProducts",
//               value: function (t) {
//                 var e = (
//                     arguments.length > 1 && void 0 !== arguments[1]
//                       ? arguments[1]
//                       : {}
//                   ).productsFirst,
//                   n = void 0 === e ? 20 : e;
//                 return this.graphQLClient
//                   .send(qt, { id: t, productsFirst: n })
//                   .then(It("node"))
//                   .then(Vt(this.graphQLClient));
//               },
//             },
//             {
//               key: "fetchByHandle",
//               value: function (t) {
//                 return this.graphQLClient
//                   .send(Ht, { handle: t })
//                   .then(It("collectionByHandle"));
//               },
//             },
//             {
//               key: "fetchQuery",
//               value: function () {
//                 var t =
//                     arguments.length > 0 && void 0 !== arguments[0]
//                       ? arguments[0]
//                       : {},
//                   e = t.first,
//                   n = void 0 === e ? 20 : e,
//                   r = t.sortKey,
//                   d = void 0 === r ? "ID" : r,
//                   o = t.query,
//                   c = t.reverse;
//                 return this.graphQLClient
//                   .send(Gt, { first: n, sortKey: d, query: o, reverse: c })
//                   .then(It("collections"));
//               },
//             },
//           ]),
//           e
//         );
//       })(St);
//       function Wt(t) {
//         var e = t.document();
//         return (
//           e.addQuery(function (t) {
//             t.add("shop", function (t) {
//               t.add("paymentSettings", function (t) {
//                 t.add("enabledPresentmentCurrencies");
//               }),
//                 t.add("description"),
//                 t.add("moneyFormat"),
//                 t.add("name"),
//                 t.add("primaryDomain", function (t) {
//                   t.add("host"), t.add("sslEnabled"), t.add("url");
//                 });
//             });
//           }),
//           e
//         );
//       }
//       function Qt(t) {
//         var e = t.document(),
//           n = {};
//         return (
//           (n.PolicyFragment = e.defineFragment(
//             "PolicyFragment",
//             "ShopPolicy",
//             function (t) {
//               t.add("id"), t.add("title"), t.add("url"), t.add("body");
//             }
//           )),
//           e.addQuery(function (t) {
//             t.add("shop", function (t) {
//               t.add("privacyPolicy", function (t) {
//                 t.addFragment(n.PolicyFragment);
//               }),
//                 t.add("termsOfService", function (t) {
//                   t.addFragment(n.PolicyFragment);
//                 }),
//                 t.add("refundPolicy", function (t) {
//                   t.addFragment(n.PolicyFragment);
//                 });
//             });
//           }),
//           e
//         );
//       }
//       var $t = (function (t) {
//         function e() {
//           return (
//             d(this, e),
//             l(
//               this,
//               (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
//             )
//           );
//         }
//         return (
//           c(e, t),
//           o(e, [
//             {
//               key: "fetchInfo",
//               value: function () {
//                 return this.graphQLClient.send(Wt).then(It("shop"));
//               },
//             },
//             {
//               key: "fetchPolicies",
//               value: function () {
//                 return this.graphQLClient.send(Qt).then(It("shop"));
//               },
//             },
//           ]),
//           e
//         );
//       })(St);
//       function Yt(t, e) {
//         return function (n) {
//           var r = n.data,
//             data = void 0 === r ? {} : r,
//             d = n.errors,
//             o = n.model,
//             c = void 0 === o ? {} : o,
//             l = data[t],
//             f = c[t];
//           return l && l.checkout
//             ? e
//                 .fetchAllPages(f.checkout.lineItems, { pageSize: 250 })
//                 .then(function (t) {
//                   return (
//                     (f.checkout.attrs.lineItems = t),
//                     (f.checkout.errors = d),
//                     (f.checkout.userErrors = f.userErrors),
//                     f.checkout
//                   );
//                 })
//             : d && d.length
//             ? Promise.reject(new Error(JSON.stringify(d)))
//             : l && l.checkoutUserErrors && l.checkoutUserErrors.length
//             ? Promise.reject(new Error(JSON.stringify(l.checkoutUserErrors)))
//             : l && l.userErrors && l.userErrors.length
//             ? Promise.reject(new Error(JSON.stringify(l.userErrors)))
//             : Promise.reject(
//                 new Error(
//                   "The " + t + " mutation failed due to an unknown error."
//                 )
//               );
//         };
//       }
//       function Kt(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.id = t.variable("id", "ID!")),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.DiscountApplicationFragment = e.defineFragment(
//             "DiscountApplicationFragment",
//             "DiscountApplication",
//             function (t) {
//               t.add("targetSelection"),
//                 t.add("allocationMethod"),
//                 t.add("targetType"),
//                 t.add("value", function (t) {
//                   t.addInlineFragmentOn("MoneyV2", function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }),
//                     t.addInlineFragmentOn(
//                       "PricingPercentageValue",
//                       function (t) {
//                         t.add("percentage");
//                       }
//                     );
//                 }),
//                 t.addInlineFragmentOn(
//                   "ManualDiscountApplication",
//                   function (t) {
//                     t.add("title"), t.add("description");
//                   }
//                 ),
//                 t.addInlineFragmentOn("DiscountCodeApplication", function (t) {
//                   t.add("code"), t.add("applicable");
//                 }),
//                 t.addInlineFragmentOn(
//                   "ScriptDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 ),
//                 t.addInlineFragmentOn(
//                   "AutomaticDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 );
//             }
//           )),
//           (n.AppliedGiftCardFragment = e.defineFragment(
//             "AppliedGiftCardFragment",
//             "AppliedGiftCard",
//             function (t) {
//               t.add("amountUsed", function (t) {
//                 t.add("amount"), t.add("currencyCode");
//               }),
//                 t.add("amountUsed", { alias: "amountUsedV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", { alias: "balanceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("presentmentAmountUsed", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("id"),
//                 t.add("lastCharacters");
//             }
//           )),
//           (n.VariantWithProductFragment = e.defineFragment(
//             "VariantWithProductFragment",
//             "ProductVariant",
//             function (t) {
//               t.addFragment(n.VariantFragment),
//                 t.add("product", function (t) {
//                   t.add("id"), t.add("handle");
//                 });
//             }
//           )),
//           (n.MailingAddressFragment = e.defineFragment(
//             "MailingAddressFragment",
//             "MailingAddress",
//             function (t) {
//               t.add("id"),
//                 t.add("address1"),
//                 t.add("address2"),
//                 t.add("city"),
//                 t.add("company"),
//                 t.add("country"),
//                 t.add("firstName"),
//                 t.add("formatted"),
//                 t.add("lastName"),
//                 t.add("latitude"),
//                 t.add("longitude"),
//                 t.add("phone"),
//                 t.add("province"),
//                 t.add("zip"),
//                 t.add("name"),
//                 t.add("countryCodeV2", { alias: "countryCode" }),
//                 t.add("provinceCode");
//             }
//           )),
//           (n.CheckoutFragment = e.defineFragment(
//             "CheckoutFragment",
//             "Checkout",
//             function (t) {
//               t.add("id"),
//                 t.add("ready"),
//                 t.add("requiresShipping"),
//                 t.add("note"),
//                 t.add("paymentDue", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("paymentDue", { alias: "paymentDueV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("webUrl"),
//                 t.add("orderStatusUrl"),
//                 t.add("taxExempt"),
//                 t.add("taxesIncluded"),
//                 t.add("currencyCode"),
//                 t.add("totalTax", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("lineItemsSubtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("subtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "subtotalPrice",
//                   { alias: "subtotalPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("totalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalPrice", { alias: "totalPriceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("completedAt"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("email"),
//                 t.add(
//                   "discountApplications",
//                   { args: { first: 10 } },
//                   function (t) {
//                     t.add("pageInfo", function (t) {
//                       t.add("hasNextPage"), t.add("hasPreviousPage");
//                     }),
//                       t.add("edges", function (t) {
//                         t.add("node", function (t) {
//                           t.addFragment(n.DiscountApplicationFragment);
//                         });
//                       });
//                   }
//                 ),
//                 t.add("appliedGiftCards", function (t) {
//                   t.addFragment(n.AppliedGiftCardFragment);
//                 }),
//                 t.add("shippingAddress", function (t) {
//                   t.addFragment(n.MailingAddressFragment);
//                 }),
//                 t.add("shippingLine", function (t) {
//                   t.add("handle"),
//                     t.add("price", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("price", { alias: "priceV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("title");
//                 }),
//                 t.add("customAttributes", function (t) {
//                   t.add("key"), t.add("value");
//                 }),
//                 t.add("order", function (t) {
//                   t.add("id"),
//                     t.add("processedAt"),
//                     t.add("orderNumber"),
//                     t.add("subtotalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "subtotalPrice",
//                       { alias: "subtotalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalShippingPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalShippingPrice",
//                       { alias: "totalShippingPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalTax", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalPrice",
//                       { alias: "totalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("currencyCode"),
//                     t.add("totalRefunded", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalRefunded",
//                       { alias: "totalRefundedV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("customerUrl"),
//                     t.add("shippingAddress", function (t) {
//                       t.addFragment(n.MailingAddressFragment);
//                     }),
//                     t.add("lineItems", { args: { first: 250 } }, function (t) {
//                       t.add("pageInfo", function (t) {
//                         t.add("hasNextPage"), t.add("hasPreviousPage");
//                       }),
//                         t.add("edges", function (t) {
//                           t.add("cursor"),
//                             t.add("node", function (t) {
//                               t.add("title"),
//                                 t.add("variant", function (t) {
//                                   t.addFragment(n.VariantWithProductFragment);
//                                 }),
//                                 t.add("quantity"),
//                                 t.add("customAttributes", function (t) {
//                                   t.add("key"), t.add("value");
//                                 });
//                             });
//                         });
//                     });
//                 }),
//                 t.add("lineItems", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("title"),
//                             t.add("variant", function (t) {
//                               t.addFragment(n.VariantWithProductFragment);
//                             }),
//                             t.add("quantity"),
//                             t.add("customAttributes", function (t) {
//                               t.add("key"), t.add("value");
//                             }),
//                             t.add("discountAllocations", function (t) {
//                               t.add("allocatedAmount", function (t) {
//                                 t.add("amount"), t.add("currencyCode");
//                               }),
//                                 t.add("discountApplication", function (t) {
//                                   t.addFragment(n.DiscountApplicationFragment);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addQuery([r.__defaultOperation__.id], function (t) {
//             t.add(
//               "node",
//               { args: { id: r.__defaultOperation__.id } },
//               function (t) {
//                 t.addFragment(n.CheckoutFragment);
//               }
//             );
//           }),
//           e
//         );
//       }
//       function Xt(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.input = t.variable(
//             "input",
//             "CheckoutCreateInput!"
//           )),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.DiscountApplicationFragment = e.defineFragment(
//             "DiscountApplicationFragment",
//             "DiscountApplication",
//             function (t) {
//               t.add("targetSelection"),
//                 t.add("allocationMethod"),
//                 t.add("targetType"),
//                 t.add("value", function (t) {
//                   t.addInlineFragmentOn("MoneyV2", function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }),
//                     t.addInlineFragmentOn(
//                       "PricingPercentageValue",
//                       function (t) {
//                         t.add("percentage");
//                       }
//                     );
//                 }),
//                 t.addInlineFragmentOn(
//                   "ManualDiscountApplication",
//                   function (t) {
//                     t.add("title"), t.add("description");
//                   }
//                 ),
//                 t.addInlineFragmentOn("DiscountCodeApplication", function (t) {
//                   t.add("code"), t.add("applicable");
//                 }),
//                 t.addInlineFragmentOn(
//                   "ScriptDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 ),
//                 t.addInlineFragmentOn(
//                   "AutomaticDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 );
//             }
//           )),
//           (n.AppliedGiftCardFragment = e.defineFragment(
//             "AppliedGiftCardFragment",
//             "AppliedGiftCard",
//             function (t) {
//               t.add("amountUsed", function (t) {
//                 t.add("amount"), t.add("currencyCode");
//               }),
//                 t.add("amountUsed", { alias: "amountUsedV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", { alias: "balanceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("presentmentAmountUsed", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("id"),
//                 t.add("lastCharacters");
//             }
//           )),
//           (n.VariantWithProductFragment = e.defineFragment(
//             "VariantWithProductFragment",
//             "ProductVariant",
//             function (t) {
//               t.addFragment(n.VariantFragment),
//                 t.add("product", function (t) {
//                   t.add("id"), t.add("handle");
//                 });
//             }
//           )),
//           (n.UserErrorFragment = e.defineFragment(
//             "UserErrorFragment",
//             "UserError",
//             function (t) {
//               t.add("field"), t.add("message");
//             }
//           )),
//           (n.CheckoutUserErrorFragment = e.defineFragment(
//             "CheckoutUserErrorFragment",
//             "CheckoutUserError",
//             function (t) {
//               t.add("field"), t.add("message"), t.add("code");
//             }
//           )),
//           (n.MailingAddressFragment = e.defineFragment(
//             "MailingAddressFragment",
//             "MailingAddress",
//             function (t) {
//               t.add("id"),
//                 t.add("address1"),
//                 t.add("address2"),
//                 t.add("city"),
//                 t.add("company"),
//                 t.add("country"),
//                 t.add("firstName"),
//                 t.add("formatted"),
//                 t.add("lastName"),
//                 t.add("latitude"),
//                 t.add("longitude"),
//                 t.add("phone"),
//                 t.add("province"),
//                 t.add("zip"),
//                 t.add("name"),
//                 t.add("countryCodeV2", { alias: "countryCode" }),
//                 t.add("provinceCode");
//             }
//           )),
//           (n.CheckoutFragment = e.defineFragment(
//             "CheckoutFragment",
//             "Checkout",
//             function (t) {
//               t.add("id"),
//                 t.add("ready"),
//                 t.add("requiresShipping"),
//                 t.add("note"),
//                 t.add("paymentDue", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("paymentDue", { alias: "paymentDueV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("webUrl"),
//                 t.add("orderStatusUrl"),
//                 t.add("taxExempt"),
//                 t.add("taxesIncluded"),
//                 t.add("currencyCode"),
//                 t.add("totalTax", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("lineItemsSubtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("subtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "subtotalPrice",
//                   { alias: "subtotalPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("totalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalPrice", { alias: "totalPriceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("completedAt"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("email"),
//                 t.add(
//                   "discountApplications",
//                   { args: { first: 10 } },
//                   function (t) {
//                     t.add("pageInfo", function (t) {
//                       t.add("hasNextPage"), t.add("hasPreviousPage");
//                     }),
//                       t.add("edges", function (t) {
//                         t.add("node", function (t) {
//                           t.addFragment(n.DiscountApplicationFragment);
//                         });
//                       });
//                   }
//                 ),
//                 t.add("appliedGiftCards", function (t) {
//                   t.addFragment(n.AppliedGiftCardFragment);
//                 }),
//                 t.add("shippingAddress", function (t) {
//                   t.addFragment(n.MailingAddressFragment);
//                 }),
//                 t.add("shippingLine", function (t) {
//                   t.add("handle"),
//                     t.add("price", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("price", { alias: "priceV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("title");
//                 }),
//                 t.add("customAttributes", function (t) {
//                   t.add("key"), t.add("value");
//                 }),
//                 t.add("order", function (t) {
//                   t.add("id"),
//                     t.add("processedAt"),
//                     t.add("orderNumber"),
//                     t.add("subtotalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "subtotalPrice",
//                       { alias: "subtotalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalShippingPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalShippingPrice",
//                       { alias: "totalShippingPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalTax", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalPrice",
//                       { alias: "totalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("currencyCode"),
//                     t.add("totalRefunded", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalRefunded",
//                       { alias: "totalRefundedV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("customerUrl"),
//                     t.add("shippingAddress", function (t) {
//                       t.addFragment(n.MailingAddressFragment);
//                     }),
//                     t.add("lineItems", { args: { first: 250 } }, function (t) {
//                       t.add("pageInfo", function (t) {
//                         t.add("hasNextPage"), t.add("hasPreviousPage");
//                       }),
//                         t.add("edges", function (t) {
//                           t.add("cursor"),
//                             t.add("node", function (t) {
//                               t.add("title"),
//                                 t.add("variant", function (t) {
//                                   t.addFragment(n.VariantWithProductFragment);
//                                 }),
//                                 t.add("quantity"),
//                                 t.add("customAttributes", function (t) {
//                                   t.add("key"), t.add("value");
//                                 });
//                             });
//                         });
//                     });
//                 }),
//                 t.add("lineItems", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("title"),
//                             t.add("variant", function (t) {
//                               t.addFragment(n.VariantWithProductFragment);
//                             }),
//                             t.add("quantity"),
//                             t.add("customAttributes", function (t) {
//                               t.add("key"), t.add("value");
//                             }),
//                             t.add("discountAllocations", function (t) {
//                               t.add("allocatedAmount", function (t) {
//                                 t.add("amount"), t.add("currencyCode");
//                               }),
//                                 t.add("discountApplication", function (t) {
//                                   t.addFragment(n.DiscountApplicationFragment);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addMutation([r.__defaultOperation__.input], function (t) {
//             t.add(
//               "checkoutCreate",
//               { args: { input: r.__defaultOperation__.input } },
//               function (t) {
//                 t.add("userErrors", function (t) {
//                   t.addFragment(n.UserErrorFragment);
//                 }),
//                   t.add("checkoutUserErrors", function (t) {
//                     t.addFragment(n.CheckoutUserErrorFragment);
//                   }),
//                   t.add("checkout", function (t) {
//                     t.addFragment(n.CheckoutFragment);
//                   });
//               }
//             );
//           }),
//           e
//         );
//       }
//       function Zt(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.checkoutId = t.variable("checkoutId", "ID!")),
//           (r.__defaultOperation__.lineItems = t.variable(
//             "lineItems",
//             "[CheckoutLineItemInput!]!"
//           )),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.DiscountApplicationFragment = e.defineFragment(
//             "DiscountApplicationFragment",
//             "DiscountApplication",
//             function (t) {
//               t.add("targetSelection"),
//                 t.add("allocationMethod"),
//                 t.add("targetType"),
//                 t.add("value", function (t) {
//                   t.addInlineFragmentOn("MoneyV2", function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }),
//                     t.addInlineFragmentOn(
//                       "PricingPercentageValue",
//                       function (t) {
//                         t.add("percentage");
//                       }
//                     );
//                 }),
//                 t.addInlineFragmentOn(
//                   "ManualDiscountApplication",
//                   function (t) {
//                     t.add("title"), t.add("description");
//                   }
//                 ),
//                 t.addInlineFragmentOn("DiscountCodeApplication", function (t) {
//                   t.add("code"), t.add("applicable");
//                 }),
//                 t.addInlineFragmentOn(
//                   "ScriptDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 ),
//                 t.addInlineFragmentOn(
//                   "AutomaticDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 );
//             }
//           )),
//           (n.AppliedGiftCardFragment = e.defineFragment(
//             "AppliedGiftCardFragment",
//             "AppliedGiftCard",
//             function (t) {
//               t.add("amountUsed", function (t) {
//                 t.add("amount"), t.add("currencyCode");
//               }),
//                 t.add("amountUsed", { alias: "amountUsedV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", { alias: "balanceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("presentmentAmountUsed", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("id"),
//                 t.add("lastCharacters");
//             }
//           )),
//           (n.VariantWithProductFragment = e.defineFragment(
//             "VariantWithProductFragment",
//             "ProductVariant",
//             function (t) {
//               t.addFragment(n.VariantFragment),
//                 t.add("product", function (t) {
//                   t.add("id"), t.add("handle");
//                 });
//             }
//           )),
//           (n.UserErrorFragment = e.defineFragment(
//             "UserErrorFragment",
//             "UserError",
//             function (t) {
//               t.add("field"), t.add("message");
//             }
//           )),
//           (n.CheckoutUserErrorFragment = e.defineFragment(
//             "CheckoutUserErrorFragment",
//             "CheckoutUserError",
//             function (t) {
//               t.add("field"), t.add("message"), t.add("code");
//             }
//           )),
//           (n.MailingAddressFragment = e.defineFragment(
//             "MailingAddressFragment",
//             "MailingAddress",
//             function (t) {
//               t.add("id"),
//                 t.add("address1"),
//                 t.add("address2"),
//                 t.add("city"),
//                 t.add("company"),
//                 t.add("country"),
//                 t.add("firstName"),
//                 t.add("formatted"),
//                 t.add("lastName"),
//                 t.add("latitude"),
//                 t.add("longitude"),
//                 t.add("phone"),
//                 t.add("province"),
//                 t.add("zip"),
//                 t.add("name"),
//                 t.add("countryCodeV2", { alias: "countryCode" }),
//                 t.add("provinceCode");
//             }
//           )),
//           (n.CheckoutFragment = e.defineFragment(
//             "CheckoutFragment",
//             "Checkout",
//             function (t) {
//               t.add("id"),
//                 t.add("ready"),
//                 t.add("requiresShipping"),
//                 t.add("note"),
//                 t.add("paymentDue", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("paymentDue", { alias: "paymentDueV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("webUrl"),
//                 t.add("orderStatusUrl"),
//                 t.add("taxExempt"),
//                 t.add("taxesIncluded"),
//                 t.add("currencyCode"),
//                 t.add("totalTax", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("lineItemsSubtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("subtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "subtotalPrice",
//                   { alias: "subtotalPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("totalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalPrice", { alias: "totalPriceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("completedAt"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("email"),
//                 t.add(
//                   "discountApplications",
//                   { args: { first: 10 } },
//                   function (t) {
//                     t.add("pageInfo", function (t) {
//                       t.add("hasNextPage"), t.add("hasPreviousPage");
//                     }),
//                       t.add("edges", function (t) {
//                         t.add("node", function (t) {
//                           t.addFragment(n.DiscountApplicationFragment);
//                         });
//                       });
//                   }
//                 ),
//                 t.add("appliedGiftCards", function (t) {
//                   t.addFragment(n.AppliedGiftCardFragment);
//                 }),
//                 t.add("shippingAddress", function (t) {
//                   t.addFragment(n.MailingAddressFragment);
//                 }),
//                 t.add("shippingLine", function (t) {
//                   t.add("handle"),
//                     t.add("price", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("price", { alias: "priceV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("title");
//                 }),
//                 t.add("customAttributes", function (t) {
//                   t.add("key"), t.add("value");
//                 }),
//                 t.add("order", function (t) {
//                   t.add("id"),
//                     t.add("processedAt"),
//                     t.add("orderNumber"),
//                     t.add("subtotalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "subtotalPrice",
//                       { alias: "subtotalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalShippingPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalShippingPrice",
//                       { alias: "totalShippingPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalTax", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalPrice",
//                       { alias: "totalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("currencyCode"),
//                     t.add("totalRefunded", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalRefunded",
//                       { alias: "totalRefundedV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("customerUrl"),
//                     t.add("shippingAddress", function (t) {
//                       t.addFragment(n.MailingAddressFragment);
//                     }),
//                     t.add("lineItems", { args: { first: 250 } }, function (t) {
//                       t.add("pageInfo", function (t) {
//                         t.add("hasNextPage"), t.add("hasPreviousPage");
//                       }),
//                         t.add("edges", function (t) {
//                           t.add("cursor"),
//                             t.add("node", function (t) {
//                               t.add("title"),
//                                 t.add("variant", function (t) {
//                                   t.addFragment(n.VariantWithProductFragment);
//                                 }),
//                                 t.add("quantity"),
//                                 t.add("customAttributes", function (t) {
//                                   t.add("key"), t.add("value");
//                                 });
//                             });
//                         });
//                     });
//                 }),
//                 t.add("lineItems", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("title"),
//                             t.add("variant", function (t) {
//                               t.addFragment(n.VariantWithProductFragment);
//                             }),
//                             t.add("quantity"),
//                             t.add("customAttributes", function (t) {
//                               t.add("key"), t.add("value");
//                             }),
//                             t.add("discountAllocations", function (t) {
//                               t.add("allocatedAmount", function (t) {
//                                 t.add("amount"), t.add("currencyCode");
//                               }),
//                                 t.add("discountApplication", function (t) {
//                                   t.addFragment(n.DiscountApplicationFragment);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addMutation(
//             [
//               r.__defaultOperation__.checkoutId,
//               r.__defaultOperation__.lineItems,
//             ],
//             function (t) {
//               t.add(
//                 "checkoutLineItemsAdd",
//                 {
//                   args: {
//                     checkoutId: r.__defaultOperation__.checkoutId,
//                     lineItems: r.__defaultOperation__.lineItems,
//                   },
//                 },
//                 function (t) {
//                   t.add("userErrors", function (t) {
//                     t.addFragment(n.UserErrorFragment);
//                   }),
//                     t.add("checkoutUserErrors", function (t) {
//                       t.addFragment(n.CheckoutUserErrorFragment);
//                     }),
//                     t.add("checkout", function (t) {
//                       t.addFragment(n.CheckoutFragment);
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       function te(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.checkoutId = t.variable("checkoutId", "ID!")),
//           (r.__defaultOperation__.lineItemIds = t.variable(
//             "lineItemIds",
//             "[ID!]!"
//           )),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.DiscountApplicationFragment = e.defineFragment(
//             "DiscountApplicationFragment",
//             "DiscountApplication",
//             function (t) {
//               t.add("targetSelection"),
//                 t.add("allocationMethod"),
//                 t.add("targetType"),
//                 t.add("value", function (t) {
//                   t.addInlineFragmentOn("MoneyV2", function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }),
//                     t.addInlineFragmentOn(
//                       "PricingPercentageValue",
//                       function (t) {
//                         t.add("percentage");
//                       }
//                     );
//                 }),
//                 t.addInlineFragmentOn(
//                   "ManualDiscountApplication",
//                   function (t) {
//                     t.add("title"), t.add("description");
//                   }
//                 ),
//                 t.addInlineFragmentOn("DiscountCodeApplication", function (t) {
//                   t.add("code"), t.add("applicable");
//                 }),
//                 t.addInlineFragmentOn(
//                   "ScriptDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 ),
//                 t.addInlineFragmentOn(
//                   "AutomaticDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 );
//             }
//           )),
//           (n.AppliedGiftCardFragment = e.defineFragment(
//             "AppliedGiftCardFragment",
//             "AppliedGiftCard",
//             function (t) {
//               t.add("amountUsed", function (t) {
//                 t.add("amount"), t.add("currencyCode");
//               }),
//                 t.add("amountUsed", { alias: "amountUsedV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", { alias: "balanceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("presentmentAmountUsed", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("id"),
//                 t.add("lastCharacters");
//             }
//           )),
//           (n.VariantWithProductFragment = e.defineFragment(
//             "VariantWithProductFragment",
//             "ProductVariant",
//             function (t) {
//               t.addFragment(n.VariantFragment),
//                 t.add("product", function (t) {
//                   t.add("id"), t.add("handle");
//                 });
//             }
//           )),
//           (n.UserErrorFragment = e.defineFragment(
//             "UserErrorFragment",
//             "UserError",
//             function (t) {
//               t.add("field"), t.add("message");
//             }
//           )),
//           (n.CheckoutUserErrorFragment = e.defineFragment(
//             "CheckoutUserErrorFragment",
//             "CheckoutUserError",
//             function (t) {
//               t.add("field"), t.add("message"), t.add("code");
//             }
//           )),
//           (n.MailingAddressFragment = e.defineFragment(
//             "MailingAddressFragment",
//             "MailingAddress",
//             function (t) {
//               t.add("id"),
//                 t.add("address1"),
//                 t.add("address2"),
//                 t.add("city"),
//                 t.add("company"),
//                 t.add("country"),
//                 t.add("firstName"),
//                 t.add("formatted"),
//                 t.add("lastName"),
//                 t.add("latitude"),
//                 t.add("longitude"),
//                 t.add("phone"),
//                 t.add("province"),
//                 t.add("zip"),
//                 t.add("name"),
//                 t.add("countryCodeV2", { alias: "countryCode" }),
//                 t.add("provinceCode");
//             }
//           )),
//           (n.CheckoutFragment = e.defineFragment(
//             "CheckoutFragment",
//             "Checkout",
//             function (t) {
//               t.add("id"),
//                 t.add("ready"),
//                 t.add("requiresShipping"),
//                 t.add("note"),
//                 t.add("paymentDue", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("paymentDue", { alias: "paymentDueV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("webUrl"),
//                 t.add("orderStatusUrl"),
//                 t.add("taxExempt"),
//                 t.add("taxesIncluded"),
//                 t.add("currencyCode"),
//                 t.add("totalTax", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("lineItemsSubtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("subtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "subtotalPrice",
//                   { alias: "subtotalPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("totalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalPrice", { alias: "totalPriceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("completedAt"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("email"),
//                 t.add(
//                   "discountApplications",
//                   { args: { first: 10 } },
//                   function (t) {
//                     t.add("pageInfo", function (t) {
//                       t.add("hasNextPage"), t.add("hasPreviousPage");
//                     }),
//                       t.add("edges", function (t) {
//                         t.add("node", function (t) {
//                           t.addFragment(n.DiscountApplicationFragment);
//                         });
//                       });
//                   }
//                 ),
//                 t.add("appliedGiftCards", function (t) {
//                   t.addFragment(n.AppliedGiftCardFragment);
//                 }),
//                 t.add("shippingAddress", function (t) {
//                   t.addFragment(n.MailingAddressFragment);
//                 }),
//                 t.add("shippingLine", function (t) {
//                   t.add("handle"),
//                     t.add("price", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("price", { alias: "priceV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("title");
//                 }),
//                 t.add("customAttributes", function (t) {
//                   t.add("key"), t.add("value");
//                 }),
//                 t.add("order", function (t) {
//                   t.add("id"),
//                     t.add("processedAt"),
//                     t.add("orderNumber"),
//                     t.add("subtotalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "subtotalPrice",
//                       { alias: "subtotalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalShippingPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalShippingPrice",
//                       { alias: "totalShippingPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalTax", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalPrice",
//                       { alias: "totalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("currencyCode"),
//                     t.add("totalRefunded", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalRefunded",
//                       { alias: "totalRefundedV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("customerUrl"),
//                     t.add("shippingAddress", function (t) {
//                       t.addFragment(n.MailingAddressFragment);
//                     }),
//                     t.add("lineItems", { args: { first: 250 } }, function (t) {
//                       t.add("pageInfo", function (t) {
//                         t.add("hasNextPage"), t.add("hasPreviousPage");
//                       }),
//                         t.add("edges", function (t) {
//                           t.add("cursor"),
//                             t.add("node", function (t) {
//                               t.add("title"),
//                                 t.add("variant", function (t) {
//                                   t.addFragment(n.VariantWithProductFragment);
//                                 }),
//                                 t.add("quantity"),
//                                 t.add("customAttributes", function (t) {
//                                   t.add("key"), t.add("value");
//                                 });
//                             });
//                         });
//                     });
//                 }),
//                 t.add("lineItems", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("title"),
//                             t.add("variant", function (t) {
//                               t.addFragment(n.VariantWithProductFragment);
//                             }),
//                             t.add("quantity"),
//                             t.add("customAttributes", function (t) {
//                               t.add("key"), t.add("value");
//                             }),
//                             t.add("discountAllocations", function (t) {
//                               t.add("allocatedAmount", function (t) {
//                                 t.add("amount"), t.add("currencyCode");
//                               }),
//                                 t.add("discountApplication", function (t) {
//                                   t.addFragment(n.DiscountApplicationFragment);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addMutation(
//             [
//               r.__defaultOperation__.checkoutId,
//               r.__defaultOperation__.lineItemIds,
//             ],
//             function (t) {
//               t.add(
//                 "checkoutLineItemsRemove",
//                 {
//                   args: {
//                     checkoutId: r.__defaultOperation__.checkoutId,
//                     lineItemIds: r.__defaultOperation__.lineItemIds,
//                   },
//                 },
//                 function (t) {
//                   t.add("userErrors", function (t) {
//                     t.addFragment(n.UserErrorFragment);
//                   }),
//                     t.add("checkoutUserErrors", function (t) {
//                       t.addFragment(n.CheckoutUserErrorFragment);
//                     }),
//                     t.add("checkout", function (t) {
//                       t.addFragment(n.CheckoutFragment);
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       function ee(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.checkoutId = t.variable("checkoutId", "ID!")),
//           (r.__defaultOperation__.lineItems = t.variable(
//             "lineItems",
//             "[CheckoutLineItemInput!]!"
//           )),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.DiscountApplicationFragment = e.defineFragment(
//             "DiscountApplicationFragment",
//             "DiscountApplication",
//             function (t) {
//               t.add("targetSelection"),
//                 t.add("allocationMethod"),
//                 t.add("targetType"),
//                 t.add("value", function (t) {
//                   t.addInlineFragmentOn("MoneyV2", function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }),
//                     t.addInlineFragmentOn(
//                       "PricingPercentageValue",
//                       function (t) {
//                         t.add("percentage");
//                       }
//                     );
//                 }),
//                 t.addInlineFragmentOn(
//                   "ManualDiscountApplication",
//                   function (t) {
//                     t.add("title"), t.add("description");
//                   }
//                 ),
//                 t.addInlineFragmentOn("DiscountCodeApplication", function (t) {
//                   t.add("code"), t.add("applicable");
//                 }),
//                 t.addInlineFragmentOn(
//                   "ScriptDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 ),
//                 t.addInlineFragmentOn(
//                   "AutomaticDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 );
//             }
//           )),
//           (n.AppliedGiftCardFragment = e.defineFragment(
//             "AppliedGiftCardFragment",
//             "AppliedGiftCard",
//             function (t) {
//               t.add("amountUsed", function (t) {
//                 t.add("amount"), t.add("currencyCode");
//               }),
//                 t.add("amountUsed", { alias: "amountUsedV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", { alias: "balanceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("presentmentAmountUsed", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("id"),
//                 t.add("lastCharacters");
//             }
//           )),
//           (n.VariantWithProductFragment = e.defineFragment(
//             "VariantWithProductFragment",
//             "ProductVariant",
//             function (t) {
//               t.addFragment(n.VariantFragment),
//                 t.add("product", function (t) {
//                   t.add("id"), t.add("handle");
//                 });
//             }
//           )),
//           (n.CheckoutUserErrorFragment = e.defineFragment(
//             "CheckoutUserErrorFragment",
//             "CheckoutUserError",
//             function (t) {
//               t.add("field"), t.add("message"), t.add("code");
//             }
//           )),
//           (n.MailingAddressFragment = e.defineFragment(
//             "MailingAddressFragment",
//             "MailingAddress",
//             function (t) {
//               t.add("id"),
//                 t.add("address1"),
//                 t.add("address2"),
//                 t.add("city"),
//                 t.add("company"),
//                 t.add("country"),
//                 t.add("firstName"),
//                 t.add("formatted"),
//                 t.add("lastName"),
//                 t.add("latitude"),
//                 t.add("longitude"),
//                 t.add("phone"),
//                 t.add("province"),
//                 t.add("zip"),
//                 t.add("name"),
//                 t.add("countryCodeV2", { alias: "countryCode" }),
//                 t.add("provinceCode");
//             }
//           )),
//           (n.CheckoutFragment = e.defineFragment(
//             "CheckoutFragment",
//             "Checkout",
//             function (t) {
//               t.add("id"),
//                 t.add("ready"),
//                 t.add("requiresShipping"),
//                 t.add("note"),
//                 t.add("paymentDue", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("paymentDue", { alias: "paymentDueV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("webUrl"),
//                 t.add("orderStatusUrl"),
//                 t.add("taxExempt"),
//                 t.add("taxesIncluded"),
//                 t.add("currencyCode"),
//                 t.add("totalTax", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("lineItemsSubtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("subtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "subtotalPrice",
//                   { alias: "subtotalPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("totalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalPrice", { alias: "totalPriceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("completedAt"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("email"),
//                 t.add(
//                   "discountApplications",
//                   { args: { first: 10 } },
//                   function (t) {
//                     t.add("pageInfo", function (t) {
//                       t.add("hasNextPage"), t.add("hasPreviousPage");
//                     }),
//                       t.add("edges", function (t) {
//                         t.add("node", function (t) {
//                           t.addFragment(n.DiscountApplicationFragment);
//                         });
//                       });
//                   }
//                 ),
//                 t.add("appliedGiftCards", function (t) {
//                   t.addFragment(n.AppliedGiftCardFragment);
//                 }),
//                 t.add("shippingAddress", function (t) {
//                   t.addFragment(n.MailingAddressFragment);
//                 }),
//                 t.add("shippingLine", function (t) {
//                   t.add("handle"),
//                     t.add("price", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("price", { alias: "priceV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("title");
//                 }),
//                 t.add("customAttributes", function (t) {
//                   t.add("key"), t.add("value");
//                 }),
//                 t.add("order", function (t) {
//                   t.add("id"),
//                     t.add("processedAt"),
//                     t.add("orderNumber"),
//                     t.add("subtotalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "subtotalPrice",
//                       { alias: "subtotalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalShippingPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalShippingPrice",
//                       { alias: "totalShippingPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalTax", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalPrice",
//                       { alias: "totalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("currencyCode"),
//                     t.add("totalRefunded", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalRefunded",
//                       { alias: "totalRefundedV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("customerUrl"),
//                     t.add("shippingAddress", function (t) {
//                       t.addFragment(n.MailingAddressFragment);
//                     }),
//                     t.add("lineItems", { args: { first: 250 } }, function (t) {
//                       t.add("pageInfo", function (t) {
//                         t.add("hasNextPage"), t.add("hasPreviousPage");
//                       }),
//                         t.add("edges", function (t) {
//                           t.add("cursor"),
//                             t.add("node", function (t) {
//                               t.add("title"),
//                                 t.add("variant", function (t) {
//                                   t.addFragment(n.VariantWithProductFragment);
//                                 }),
//                                 t.add("quantity"),
//                                 t.add("customAttributes", function (t) {
//                                   t.add("key"), t.add("value");
//                                 });
//                             });
//                         });
//                     });
//                 }),
//                 t.add("lineItems", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("title"),
//                             t.add("variant", function (t) {
//                               t.addFragment(n.VariantWithProductFragment);
//                             }),
//                             t.add("quantity"),
//                             t.add("customAttributes", function (t) {
//                               t.add("key"), t.add("value");
//                             }),
//                             t.add("discountAllocations", function (t) {
//                               t.add("allocatedAmount", function (t) {
//                                 t.add("amount"), t.add("currencyCode");
//                               }),
//                                 t.add("discountApplication", function (t) {
//                                   t.addFragment(n.DiscountApplicationFragment);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addMutation(
//             [
//               r.__defaultOperation__.checkoutId,
//               r.__defaultOperation__.lineItems,
//             ],
//             function (t) {
//               t.add(
//                 "checkoutLineItemsReplace",
//                 {
//                   args: {
//                     checkoutId: r.__defaultOperation__.checkoutId,
//                     lineItems: r.__defaultOperation__.lineItems,
//                   },
//                 },
//                 function (t) {
//                   t.add("userErrors", function (t) {
//                     t.addFragment(n.CheckoutUserErrorFragment);
//                   }),
//                     t.add("checkout", function (t) {
//                       t.addFragment(n.CheckoutFragment);
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       function ne(t) {
//         var e = t.document(),
//           n = {},
//           r = { __defaultOperation__: {} };
//         return (
//           (r.__defaultOperation__.checkoutId = t.variable("checkoutId", "ID!")),
//           (r.__defaultOperation__.lineItems = t.variable(
//             "lineItems",
//             "[CheckoutLineItemUpdateInput!]!"
//           )),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.DiscountApplicationFragment = e.defineFragment(
//             "DiscountApplicationFragment",
//             "DiscountApplication",
//             function (t) {
//               t.add("targetSelection"),
//                 t.add("allocationMethod"),
//                 t.add("targetType"),
//                 t.add("value", function (t) {
//                   t.addInlineFragmentOn("MoneyV2", function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }),
//                     t.addInlineFragmentOn(
//                       "PricingPercentageValue",
//                       function (t) {
//                         t.add("percentage");
//                       }
//                     );
//                 }),
//                 t.addInlineFragmentOn(
//                   "ManualDiscountApplication",
//                   function (t) {
//                     t.add("title"), t.add("description");
//                   }
//                 ),
//                 t.addInlineFragmentOn("DiscountCodeApplication", function (t) {
//                   t.add("code"), t.add("applicable");
//                 }),
//                 t.addInlineFragmentOn(
//                   "ScriptDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 ),
//                 t.addInlineFragmentOn(
//                   "AutomaticDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 );
//             }
//           )),
//           (n.AppliedGiftCardFragment = e.defineFragment(
//             "AppliedGiftCardFragment",
//             "AppliedGiftCard",
//             function (t) {
//               t.add("amountUsed", function (t) {
//                 t.add("amount"), t.add("currencyCode");
//               }),
//                 t.add("amountUsed", { alias: "amountUsedV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", { alias: "balanceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("presentmentAmountUsed", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("id"),
//                 t.add("lastCharacters");
//             }
//           )),
//           (n.VariantWithProductFragment = e.defineFragment(
//             "VariantWithProductFragment",
//             "ProductVariant",
//             function (t) {
//               t.addFragment(n.VariantFragment),
//                 t.add("product", function (t) {
//                   t.add("id"), t.add("handle");
//                 });
//             }
//           )),
//           (n.UserErrorFragment = e.defineFragment(
//             "UserErrorFragment",
//             "UserError",
//             function (t) {
//               t.add("field"), t.add("message");
//             }
//           )),
//           (n.CheckoutUserErrorFragment = e.defineFragment(
//             "CheckoutUserErrorFragment",
//             "CheckoutUserError",
//             function (t) {
//               t.add("field"), t.add("message"), t.add("code");
//             }
//           )),
//           (n.MailingAddressFragment = e.defineFragment(
//             "MailingAddressFragment",
//             "MailingAddress",
//             function (t) {
//               t.add("id"),
//                 t.add("address1"),
//                 t.add("address2"),
//                 t.add("city"),
//                 t.add("company"),
//                 t.add("country"),
//                 t.add("firstName"),
//                 t.add("formatted"),
//                 t.add("lastName"),
//                 t.add("latitude"),
//                 t.add("longitude"),
//                 t.add("phone"),
//                 t.add("province"),
//                 t.add("zip"),
//                 t.add("name"),
//                 t.add("countryCodeV2", { alias: "countryCode" }),
//                 t.add("provinceCode");
//             }
//           )),
//           (n.CheckoutFragment = e.defineFragment(
//             "CheckoutFragment",
//             "Checkout",
//             function (t) {
//               t.add("id"),
//                 t.add("ready"),
//                 t.add("requiresShipping"),
//                 t.add("note"),
//                 t.add("paymentDue", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("paymentDue", { alias: "paymentDueV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("webUrl"),
//                 t.add("orderStatusUrl"),
//                 t.add("taxExempt"),
//                 t.add("taxesIncluded"),
//                 t.add("currencyCode"),
//                 t.add("totalTax", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("lineItemsSubtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("subtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "subtotalPrice",
//                   { alias: "subtotalPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("totalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalPrice", { alias: "totalPriceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("completedAt"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("email"),
//                 t.add(
//                   "discountApplications",
//                   { args: { first: 10 } },
//                   function (t) {
//                     t.add("pageInfo", function (t) {
//                       t.add("hasNextPage"), t.add("hasPreviousPage");
//                     }),
//                       t.add("edges", function (t) {
//                         t.add("node", function (t) {
//                           t.addFragment(n.DiscountApplicationFragment);
//                         });
//                       });
//                   }
//                 ),
//                 t.add("appliedGiftCards", function (t) {
//                   t.addFragment(n.AppliedGiftCardFragment);
//                 }),
//                 t.add("shippingAddress", function (t) {
//                   t.addFragment(n.MailingAddressFragment);
//                 }),
//                 t.add("shippingLine", function (t) {
//                   t.add("handle"),
//                     t.add("price", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("price", { alias: "priceV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("title");
//                 }),
//                 t.add("customAttributes", function (t) {
//                   t.add("key"), t.add("value");
//                 }),
//                 t.add("order", function (t) {
//                   t.add("id"),
//                     t.add("processedAt"),
//                     t.add("orderNumber"),
//                     t.add("subtotalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "subtotalPrice",
//                       { alias: "subtotalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalShippingPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalShippingPrice",
//                       { alias: "totalShippingPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalTax", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalPrice",
//                       { alias: "totalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("currencyCode"),
//                     t.add("totalRefunded", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalRefunded",
//                       { alias: "totalRefundedV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("customerUrl"),
//                     t.add("shippingAddress", function (t) {
//                       t.addFragment(n.MailingAddressFragment);
//                     }),
//                     t.add("lineItems", { args: { first: 250 } }, function (t) {
//                       t.add("pageInfo", function (t) {
//                         t.add("hasNextPage"), t.add("hasPreviousPage");
//                       }),
//                         t.add("edges", function (t) {
//                           t.add("cursor"),
//                             t.add("node", function (t) {
//                               t.add("title"),
//                                 t.add("variant", function (t) {
//                                   t.addFragment(n.VariantWithProductFragment);
//                                 }),
//                                 t.add("quantity"),
//                                 t.add("customAttributes", function (t) {
//                                   t.add("key"), t.add("value");
//                                 });
//                             });
//                         });
//                     });
//                 }),
//                 t.add("lineItems", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("title"),
//                             t.add("variant", function (t) {
//                               t.addFragment(n.VariantWithProductFragment);
//                             }),
//                             t.add("quantity"),
//                             t.add("customAttributes", function (t) {
//                               t.add("key"), t.add("value");
//                             }),
//                             t.add("discountAllocations", function (t) {
//                               t.add("allocatedAmount", function (t) {
//                                 t.add("amount"), t.add("currencyCode");
//                               }),
//                                 t.add("discountApplication", function (t) {
//                                   t.addFragment(n.DiscountApplicationFragment);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addMutation(
//             [
//               r.__defaultOperation__.checkoutId,
//               r.__defaultOperation__.lineItems,
//             ],
//             function (t) {
//               t.add(
//                 "checkoutLineItemsUpdate",
//                 {
//                   args: {
//                     checkoutId: r.__defaultOperation__.checkoutId,
//                     lineItems: r.__defaultOperation__.lineItems,
//                   },
//                 },
//                 function (t) {
//                   t.add("userErrors", function (t) {
//                     t.addFragment(n.UserErrorFragment);
//                   }),
//                     t.add("checkoutUserErrors", function (t) {
//                       t.addFragment(n.CheckoutUserErrorFragment);
//                     }),
//                     t.add("checkout", function (t) {
//                       t.addFragment(n.CheckoutFragment);
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       function ae(t) {
//         var e = t.document(),
//           n = {},
//           r = { checkoutAttributesUpdateV2: {} };
//         return (
//           (r.checkoutAttributesUpdateV2.checkoutId = t.variable(
//             "checkoutId",
//             "ID!"
//           )),
//           (r.checkoutAttributesUpdateV2.input = t.variable(
//             "input",
//             "CheckoutAttributesUpdateV2Input!"
//           )),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.DiscountApplicationFragment = e.defineFragment(
//             "DiscountApplicationFragment",
//             "DiscountApplication",
//             function (t) {
//               t.add("targetSelection"),
//                 t.add("allocationMethod"),
//                 t.add("targetType"),
//                 t.add("value", function (t) {
//                   t.addInlineFragmentOn("MoneyV2", function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }),
//                     t.addInlineFragmentOn(
//                       "PricingPercentageValue",
//                       function (t) {
//                         t.add("percentage");
//                       }
//                     );
//                 }),
//                 t.addInlineFragmentOn(
//                   "ManualDiscountApplication",
//                   function (t) {
//                     t.add("title"), t.add("description");
//                   }
//                 ),
//                 t.addInlineFragmentOn("DiscountCodeApplication", function (t) {
//                   t.add("code"), t.add("applicable");
//                 }),
//                 t.addInlineFragmentOn(
//                   "ScriptDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 ),
//                 t.addInlineFragmentOn(
//                   "AutomaticDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 );
//             }
//           )),
//           (n.AppliedGiftCardFragment = e.defineFragment(
//             "AppliedGiftCardFragment",
//             "AppliedGiftCard",
//             function (t) {
//               t.add("amountUsed", function (t) {
//                 t.add("amount"), t.add("currencyCode");
//               }),
//                 t.add("amountUsed", { alias: "amountUsedV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", { alias: "balanceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("presentmentAmountUsed", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("id"),
//                 t.add("lastCharacters");
//             }
//           )),
//           (n.VariantWithProductFragment = e.defineFragment(
//             "VariantWithProductFragment",
//             "ProductVariant",
//             function (t) {
//               t.addFragment(n.VariantFragment),
//                 t.add("product", function (t) {
//                   t.add("id"), t.add("handle");
//                 });
//             }
//           )),
//           (n.UserErrorFragment = e.defineFragment(
//             "UserErrorFragment",
//             "UserError",
//             function (t) {
//               t.add("field"), t.add("message");
//             }
//           )),
//           (n.CheckoutUserErrorFragment = e.defineFragment(
//             "CheckoutUserErrorFragment",
//             "CheckoutUserError",
//             function (t) {
//               t.add("field"), t.add("message"), t.add("code");
//             }
//           )),
//           (n.MailingAddressFragment = e.defineFragment(
//             "MailingAddressFragment",
//             "MailingAddress",
//             function (t) {
//               t.add("id"),
//                 t.add("address1"),
//                 t.add("address2"),
//                 t.add("city"),
//                 t.add("company"),
//                 t.add("country"),
//                 t.add("firstName"),
//                 t.add("formatted"),
//                 t.add("lastName"),
//                 t.add("latitude"),
//                 t.add("longitude"),
//                 t.add("phone"),
//                 t.add("province"),
//                 t.add("zip"),
//                 t.add("name"),
//                 t.add("countryCodeV2", { alias: "countryCode" }),
//                 t.add("provinceCode");
//             }
//           )),
//           (n.CheckoutFragment = e.defineFragment(
//             "CheckoutFragment",
//             "Checkout",
//             function (t) {
//               t.add("id"),
//                 t.add("ready"),
//                 t.add("requiresShipping"),
//                 t.add("note"),
//                 t.add("paymentDue", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("paymentDue", { alias: "paymentDueV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("webUrl"),
//                 t.add("orderStatusUrl"),
//                 t.add("taxExempt"),
//                 t.add("taxesIncluded"),
//                 t.add("currencyCode"),
//                 t.add("totalTax", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("lineItemsSubtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("subtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "subtotalPrice",
//                   { alias: "subtotalPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("totalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalPrice", { alias: "totalPriceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("completedAt"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("email"),
//                 t.add(
//                   "discountApplications",
//                   { args: { first: 10 } },
//                   function (t) {
//                     t.add("pageInfo", function (t) {
//                       t.add("hasNextPage"), t.add("hasPreviousPage");
//                     }),
//                       t.add("edges", function (t) {
//                         t.add("node", function (t) {
//                           t.addFragment(n.DiscountApplicationFragment);
//                         });
//                       });
//                   }
//                 ),
//                 t.add("appliedGiftCards", function (t) {
//                   t.addFragment(n.AppliedGiftCardFragment);
//                 }),
//                 t.add("shippingAddress", function (t) {
//                   t.addFragment(n.MailingAddressFragment);
//                 }),
//                 t.add("shippingLine", function (t) {
//                   t.add("handle"),
//                     t.add("price", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("price", { alias: "priceV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("title");
//                 }),
//                 t.add("customAttributes", function (t) {
//                   t.add("key"), t.add("value");
//                 }),
//                 t.add("order", function (t) {
//                   t.add("id"),
//                     t.add("processedAt"),
//                     t.add("orderNumber"),
//                     t.add("subtotalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "subtotalPrice",
//                       { alias: "subtotalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalShippingPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalShippingPrice",
//                       { alias: "totalShippingPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalTax", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalPrice",
//                       { alias: "totalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("currencyCode"),
//                     t.add("totalRefunded", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalRefunded",
//                       { alias: "totalRefundedV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("customerUrl"),
//                     t.add("shippingAddress", function (t) {
//                       t.addFragment(n.MailingAddressFragment);
//                     }),
//                     t.add("lineItems", { args: { first: 250 } }, function (t) {
//                       t.add("pageInfo", function (t) {
//                         t.add("hasNextPage"), t.add("hasPreviousPage");
//                       }),
//                         t.add("edges", function (t) {
//                           t.add("cursor"),
//                             t.add("node", function (t) {
//                               t.add("title"),
//                                 t.add("variant", function (t) {
//                                   t.addFragment(n.VariantWithProductFragment);
//                                 }),
//                                 t.add("quantity"),
//                                 t.add("customAttributes", function (t) {
//                                   t.add("key"), t.add("value");
//                                 });
//                             });
//                         });
//                     });
//                 }),
//                 t.add("lineItems", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("title"),
//                             t.add("variant", function (t) {
//                               t.addFragment(n.VariantWithProductFragment);
//                             }),
//                             t.add("quantity"),
//                             t.add("customAttributes", function (t) {
//                               t.add("key"), t.add("value");
//                             }),
//                             t.add("discountAllocations", function (t) {
//                               t.add("allocatedAmount", function (t) {
//                                 t.add("amount"), t.add("currencyCode");
//                               }),
//                                 t.add("discountApplication", function (t) {
//                                   t.addFragment(n.DiscountApplicationFragment);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addMutation(
//             "checkoutAttributesUpdateV2",
//             [
//               r.checkoutAttributesUpdateV2.checkoutId,
//               r.checkoutAttributesUpdateV2.input,
//             ],
//             function (t) {
//               t.add(
//                 "checkoutAttributesUpdateV2",
//                 {
//                   args: {
//                     checkoutId: r.checkoutAttributesUpdateV2.checkoutId,
//                     input: r.checkoutAttributesUpdateV2.input,
//                   },
//                 },
//                 function (t) {
//                   t.add("userErrors", function (t) {
//                     t.addFragment(n.UserErrorFragment);
//                   }),
//                     t.add("checkoutUserErrors", function (t) {
//                       t.addFragment(n.CheckoutUserErrorFragment);
//                     }),
//                     t.add("checkout", function (t) {
//                       t.addFragment(n.CheckoutFragment);
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       function re(t) {
//         var e = t.document(),
//           n = {},
//           r = { checkoutDiscountCodeApplyV2: {} };
//         return (
//           (r.checkoutDiscountCodeApplyV2.discountCode = t.variable(
//             "discountCode",
//             "String!"
//           )),
//           (r.checkoutDiscountCodeApplyV2.checkoutId = t.variable(
//             "checkoutId",
//             "ID!"
//           )),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.DiscountApplicationFragment = e.defineFragment(
//             "DiscountApplicationFragment",
//             "DiscountApplication",
//             function (t) {
//               t.add("targetSelection"),
//                 t.add("allocationMethod"),
//                 t.add("targetType"),
//                 t.add("value", function (t) {
//                   t.addInlineFragmentOn("MoneyV2", function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }),
//                     t.addInlineFragmentOn(
//                       "PricingPercentageValue",
//                       function (t) {
//                         t.add("percentage");
//                       }
//                     );
//                 }),
//                 t.addInlineFragmentOn(
//                   "ManualDiscountApplication",
//                   function (t) {
//                     t.add("title"), t.add("description");
//                   }
//                 ),
//                 t.addInlineFragmentOn("DiscountCodeApplication", function (t) {
//                   t.add("code"), t.add("applicable");
//                 }),
//                 t.addInlineFragmentOn(
//                   "ScriptDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 ),
//                 t.addInlineFragmentOn(
//                   "AutomaticDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 );
//             }
//           )),
//           (n.AppliedGiftCardFragment = e.defineFragment(
//             "AppliedGiftCardFragment",
//             "AppliedGiftCard",
//             function (t) {
//               t.add("amountUsed", function (t) {
//                 t.add("amount"), t.add("currencyCode");
//               }),
//                 t.add("amountUsed", { alias: "amountUsedV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", { alias: "balanceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("presentmentAmountUsed", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("id"),
//                 t.add("lastCharacters");
//             }
//           )),
//           (n.VariantWithProductFragment = e.defineFragment(
//             "VariantWithProductFragment",
//             "ProductVariant",
//             function (t) {
//               t.addFragment(n.VariantFragment),
//                 t.add("product", function (t) {
//                   t.add("id"), t.add("handle");
//                 });
//             }
//           )),
//           (n.UserErrorFragment = e.defineFragment(
//             "UserErrorFragment",
//             "UserError",
//             function (t) {
//               t.add("field"), t.add("message");
//             }
//           )),
//           (n.CheckoutUserErrorFragment = e.defineFragment(
//             "CheckoutUserErrorFragment",
//             "CheckoutUserError",
//             function (t) {
//               t.add("field"), t.add("message"), t.add("code");
//             }
//           )),
//           (n.MailingAddressFragment = e.defineFragment(
//             "MailingAddressFragment",
//             "MailingAddress",
//             function (t) {
//               t.add("id"),
//                 t.add("address1"),
//                 t.add("address2"),
//                 t.add("city"),
//                 t.add("company"),
//                 t.add("country"),
//                 t.add("firstName"),
//                 t.add("formatted"),
//                 t.add("lastName"),
//                 t.add("latitude"),
//                 t.add("longitude"),
//                 t.add("phone"),
//                 t.add("province"),
//                 t.add("zip"),
//                 t.add("name"),
//                 t.add("countryCodeV2", { alias: "countryCode" }),
//                 t.add("provinceCode");
//             }
//           )),
//           (n.CheckoutFragment = e.defineFragment(
//             "CheckoutFragment",
//             "Checkout",
//             function (t) {
//               t.add("id"),
//                 t.add("ready"),
//                 t.add("requiresShipping"),
//                 t.add("note"),
//                 t.add("paymentDue", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("paymentDue", { alias: "paymentDueV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("webUrl"),
//                 t.add("orderStatusUrl"),
//                 t.add("taxExempt"),
//                 t.add("taxesIncluded"),
//                 t.add("currencyCode"),
//                 t.add("totalTax", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("lineItemsSubtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("subtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "subtotalPrice",
//                   { alias: "subtotalPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("totalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalPrice", { alias: "totalPriceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("completedAt"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("email"),
//                 t.add(
//                   "discountApplications",
//                   { args: { first: 10 } },
//                   function (t) {
//                     t.add("pageInfo", function (t) {
//                       t.add("hasNextPage"), t.add("hasPreviousPage");
//                     }),
//                       t.add("edges", function (t) {
//                         t.add("node", function (t) {
//                           t.addFragment(n.DiscountApplicationFragment);
//                         });
//                       });
//                   }
//                 ),
//                 t.add("appliedGiftCards", function (t) {
//                   t.addFragment(n.AppliedGiftCardFragment);
//                 }),
//                 t.add("shippingAddress", function (t) {
//                   t.addFragment(n.MailingAddressFragment);
//                 }),
//                 t.add("shippingLine", function (t) {
//                   t.add("handle"),
//                     t.add("price", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("price", { alias: "priceV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("title");
//                 }),
//                 t.add("customAttributes", function (t) {
//                   t.add("key"), t.add("value");
//                 }),
//                 t.add("order", function (t) {
//                   t.add("id"),
//                     t.add("processedAt"),
//                     t.add("orderNumber"),
//                     t.add("subtotalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "subtotalPrice",
//                       { alias: "subtotalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalShippingPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalShippingPrice",
//                       { alias: "totalShippingPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalTax", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalPrice",
//                       { alias: "totalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("currencyCode"),
//                     t.add("totalRefunded", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalRefunded",
//                       { alias: "totalRefundedV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("customerUrl"),
//                     t.add("shippingAddress", function (t) {
//                       t.addFragment(n.MailingAddressFragment);
//                     }),
//                     t.add("lineItems", { args: { first: 250 } }, function (t) {
//                       t.add("pageInfo", function (t) {
//                         t.add("hasNextPage"), t.add("hasPreviousPage");
//                       }),
//                         t.add("edges", function (t) {
//                           t.add("cursor"),
//                             t.add("node", function (t) {
//                               t.add("title"),
//                                 t.add("variant", function (t) {
//                                   t.addFragment(n.VariantWithProductFragment);
//                                 }),
//                                 t.add("quantity"),
//                                 t.add("customAttributes", function (t) {
//                                   t.add("key"), t.add("value");
//                                 });
//                             });
//                         });
//                     });
//                 }),
//                 t.add("lineItems", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("title"),
//                             t.add("variant", function (t) {
//                               t.addFragment(n.VariantWithProductFragment);
//                             }),
//                             t.add("quantity"),
//                             t.add("customAttributes", function (t) {
//                               t.add("key"), t.add("value");
//                             }),
//                             t.add("discountAllocations", function (t) {
//                               t.add("allocatedAmount", function (t) {
//                                 t.add("amount"), t.add("currencyCode");
//                               }),
//                                 t.add("discountApplication", function (t) {
//                                   t.addFragment(n.DiscountApplicationFragment);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addMutation(
//             "checkoutDiscountCodeApplyV2",
//             [
//               r.checkoutDiscountCodeApplyV2.discountCode,
//               r.checkoutDiscountCodeApplyV2.checkoutId,
//             ],
//             function (t) {
//               t.add(
//                 "checkoutDiscountCodeApplyV2",
//                 {
//                   args: {
//                     discountCode: r.checkoutDiscountCodeApplyV2.discountCode,
//                     checkoutId: r.checkoutDiscountCodeApplyV2.checkoutId,
//                   },
//                 },
//                 function (t) {
//                   t.add("userErrors", function (t) {
//                     t.addFragment(n.UserErrorFragment);
//                   }),
//                     t.add("checkoutUserErrors", function (t) {
//                       t.addFragment(n.CheckoutUserErrorFragment);
//                     }),
//                     t.add("checkout", function (t) {
//                       t.addFragment(n.CheckoutFragment);
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       function de(t) {
//         var e = t.document(),
//           n = {},
//           r = { checkoutDiscountCodeRemove: {} };
//         return (
//           (r.checkoutDiscountCodeRemove.checkoutId = t.variable(
//             "checkoutId",
//             "ID!"
//           )),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.DiscountApplicationFragment = e.defineFragment(
//             "DiscountApplicationFragment",
//             "DiscountApplication",
//             function (t) {
//               t.add("targetSelection"),
//                 t.add("allocationMethod"),
//                 t.add("targetType"),
//                 t.add("value", function (t) {
//                   t.addInlineFragmentOn("MoneyV2", function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }),
//                     t.addInlineFragmentOn(
//                       "PricingPercentageValue",
//                       function (t) {
//                         t.add("percentage");
//                       }
//                     );
//                 }),
//                 t.addInlineFragmentOn(
//                   "ManualDiscountApplication",
//                   function (t) {
//                     t.add("title"), t.add("description");
//                   }
//                 ),
//                 t.addInlineFragmentOn("DiscountCodeApplication", function (t) {
//                   t.add("code"), t.add("applicable");
//                 }),
//                 t.addInlineFragmentOn(
//                   "ScriptDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 ),
//                 t.addInlineFragmentOn(
//                   "AutomaticDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 );
//             }
//           )),
//           (n.AppliedGiftCardFragment = e.defineFragment(
//             "AppliedGiftCardFragment",
//             "AppliedGiftCard",
//             function (t) {
//               t.add("amountUsed", function (t) {
//                 t.add("amount"), t.add("currencyCode");
//               }),
//                 t.add("amountUsed", { alias: "amountUsedV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", { alias: "balanceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("presentmentAmountUsed", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("id"),
//                 t.add("lastCharacters");
//             }
//           )),
//           (n.VariantWithProductFragment = e.defineFragment(
//             "VariantWithProductFragment",
//             "ProductVariant",
//             function (t) {
//               t.addFragment(n.VariantFragment),
//                 t.add("product", function (t) {
//                   t.add("id"), t.add("handle");
//                 });
//             }
//           )),
//           (n.UserErrorFragment = e.defineFragment(
//             "UserErrorFragment",
//             "UserError",
//             function (t) {
//               t.add("field"), t.add("message");
//             }
//           )),
//           (n.CheckoutUserErrorFragment = e.defineFragment(
//             "CheckoutUserErrorFragment",
//             "CheckoutUserError",
//             function (t) {
//               t.add("field"), t.add("message"), t.add("code");
//             }
//           )),
//           (n.MailingAddressFragment = e.defineFragment(
//             "MailingAddressFragment",
//             "MailingAddress",
//             function (t) {
//               t.add("id"),
//                 t.add("address1"),
//                 t.add("address2"),
//                 t.add("city"),
//                 t.add("company"),
//                 t.add("country"),
//                 t.add("firstName"),
//                 t.add("formatted"),
//                 t.add("lastName"),
//                 t.add("latitude"),
//                 t.add("longitude"),
//                 t.add("phone"),
//                 t.add("province"),
//                 t.add("zip"),
//                 t.add("name"),
//                 t.add("countryCodeV2", { alias: "countryCode" }),
//                 t.add("provinceCode");
//             }
//           )),
//           (n.CheckoutFragment = e.defineFragment(
//             "CheckoutFragment",
//             "Checkout",
//             function (t) {
//               t.add("id"),
//                 t.add("ready"),
//                 t.add("requiresShipping"),
//                 t.add("note"),
//                 t.add("paymentDue", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("paymentDue", { alias: "paymentDueV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("webUrl"),
//                 t.add("orderStatusUrl"),
//                 t.add("taxExempt"),
//                 t.add("taxesIncluded"),
//                 t.add("currencyCode"),
//                 t.add("totalTax", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("lineItemsSubtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("subtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "subtotalPrice",
//                   { alias: "subtotalPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("totalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalPrice", { alias: "totalPriceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("completedAt"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("email"),
//                 t.add(
//                   "discountApplications",
//                   { args: { first: 10 } },
//                   function (t) {
//                     t.add("pageInfo", function (t) {
//                       t.add("hasNextPage"), t.add("hasPreviousPage");
//                     }),
//                       t.add("edges", function (t) {
//                         t.add("node", function (t) {
//                           t.addFragment(n.DiscountApplicationFragment);
//                         });
//                       });
//                   }
//                 ),
//                 t.add("appliedGiftCards", function (t) {
//                   t.addFragment(n.AppliedGiftCardFragment);
//                 }),
//                 t.add("shippingAddress", function (t) {
//                   t.addFragment(n.MailingAddressFragment);
//                 }),
//                 t.add("shippingLine", function (t) {
//                   t.add("handle"),
//                     t.add("price", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("price", { alias: "priceV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("title");
//                 }),
//                 t.add("customAttributes", function (t) {
//                   t.add("key"), t.add("value");
//                 }),
//                 t.add("order", function (t) {
//                   t.add("id"),
//                     t.add("processedAt"),
//                     t.add("orderNumber"),
//                     t.add("subtotalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "subtotalPrice",
//                       { alias: "subtotalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalShippingPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalShippingPrice",
//                       { alias: "totalShippingPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalTax", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalPrice",
//                       { alias: "totalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("currencyCode"),
//                     t.add("totalRefunded", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalRefunded",
//                       { alias: "totalRefundedV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("customerUrl"),
//                     t.add("shippingAddress", function (t) {
//                       t.addFragment(n.MailingAddressFragment);
//                     }),
//                     t.add("lineItems", { args: { first: 250 } }, function (t) {
//                       t.add("pageInfo", function (t) {
//                         t.add("hasNextPage"), t.add("hasPreviousPage");
//                       }),
//                         t.add("edges", function (t) {
//                           t.add("cursor"),
//                             t.add("node", function (t) {
//                               t.add("title"),
//                                 t.add("variant", function (t) {
//                                   t.addFragment(n.VariantWithProductFragment);
//                                 }),
//                                 t.add("quantity"),
//                                 t.add("customAttributes", function (t) {
//                                   t.add("key"), t.add("value");
//                                 });
//                             });
//                         });
//                     });
//                 }),
//                 t.add("lineItems", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("title"),
//                             t.add("variant", function (t) {
//                               t.addFragment(n.VariantWithProductFragment);
//                             }),
//                             t.add("quantity"),
//                             t.add("customAttributes", function (t) {
//                               t.add("key"), t.add("value");
//                             }),
//                             t.add("discountAllocations", function (t) {
//                               t.add("allocatedAmount", function (t) {
//                                 t.add("amount"), t.add("currencyCode");
//                               }),
//                                 t.add("discountApplication", function (t) {
//                                   t.addFragment(n.DiscountApplicationFragment);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addMutation(
//             "checkoutDiscountCodeRemove",
//             [r.checkoutDiscountCodeRemove.checkoutId],
//             function (t) {
//               t.add(
//                 "checkoutDiscountCodeRemove",
//                 {
//                   args: { checkoutId: r.checkoutDiscountCodeRemove.checkoutId },
//                 },
//                 function (t) {
//                   t.add("userErrors", function (t) {
//                     t.addFragment(n.UserErrorFragment);
//                   }),
//                     t.add("checkoutUserErrors", function (t) {
//                       t.addFragment(n.CheckoutUserErrorFragment);
//                     }),
//                     t.add("checkout", function (t) {
//                       t.addFragment(n.CheckoutFragment);
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       function ie(t) {
//         var e = t.document(),
//           n = {},
//           r = { checkoutGiftCardsAppend: {} };
//         return (
//           (r.checkoutGiftCardsAppend.giftCardCodes = t.variable(
//             "giftCardCodes",
//             "[String!]!"
//           )),
//           (r.checkoutGiftCardsAppend.checkoutId = t.variable(
//             "checkoutId",
//             "ID!"
//           )),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.DiscountApplicationFragment = e.defineFragment(
//             "DiscountApplicationFragment",
//             "DiscountApplication",
//             function (t) {
//               t.add("targetSelection"),
//                 t.add("allocationMethod"),
//                 t.add("targetType"),
//                 t.add("value", function (t) {
//                   t.addInlineFragmentOn("MoneyV2", function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }),
//                     t.addInlineFragmentOn(
//                       "PricingPercentageValue",
//                       function (t) {
//                         t.add("percentage");
//                       }
//                     );
//                 }),
//                 t.addInlineFragmentOn(
//                   "ManualDiscountApplication",
//                   function (t) {
//                     t.add("title"), t.add("description");
//                   }
//                 ),
//                 t.addInlineFragmentOn("DiscountCodeApplication", function (t) {
//                   t.add("code"), t.add("applicable");
//                 }),
//                 t.addInlineFragmentOn(
//                   "ScriptDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 ),
//                 t.addInlineFragmentOn(
//                   "AutomaticDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 );
//             }
//           )),
//           (n.AppliedGiftCardFragment = e.defineFragment(
//             "AppliedGiftCardFragment",
//             "AppliedGiftCard",
//             function (t) {
//               t.add("amountUsed", function (t) {
//                 t.add("amount"), t.add("currencyCode");
//               }),
//                 t.add("amountUsed", { alias: "amountUsedV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", { alias: "balanceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("presentmentAmountUsed", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("id"),
//                 t.add("lastCharacters");
//             }
//           )),
//           (n.VariantWithProductFragment = e.defineFragment(
//             "VariantWithProductFragment",
//             "ProductVariant",
//             function (t) {
//               t.addFragment(n.VariantFragment),
//                 t.add("product", function (t) {
//                   t.add("id"), t.add("handle");
//                 });
//             }
//           )),
//           (n.UserErrorFragment = e.defineFragment(
//             "UserErrorFragment",
//             "UserError",
//             function (t) {
//               t.add("field"), t.add("message");
//             }
//           )),
//           (n.CheckoutUserErrorFragment = e.defineFragment(
//             "CheckoutUserErrorFragment",
//             "CheckoutUserError",
//             function (t) {
//               t.add("field"), t.add("message"), t.add("code");
//             }
//           )),
//           (n.MailingAddressFragment = e.defineFragment(
//             "MailingAddressFragment",
//             "MailingAddress",
//             function (t) {
//               t.add("id"),
//                 t.add("address1"),
//                 t.add("address2"),
//                 t.add("city"),
//                 t.add("company"),
//                 t.add("country"),
//                 t.add("firstName"),
//                 t.add("formatted"),
//                 t.add("lastName"),
//                 t.add("latitude"),
//                 t.add("longitude"),
//                 t.add("phone"),
//                 t.add("province"),
//                 t.add("zip"),
//                 t.add("name"),
//                 t.add("countryCodeV2", { alias: "countryCode" }),
//                 t.add("provinceCode");
//             }
//           )),
//           (n.CheckoutFragment = e.defineFragment(
//             "CheckoutFragment",
//             "Checkout",
//             function (t) {
//               t.add("id"),
//                 t.add("ready"),
//                 t.add("requiresShipping"),
//                 t.add("note"),
//                 t.add("paymentDue", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("paymentDue", { alias: "paymentDueV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("webUrl"),
//                 t.add("orderStatusUrl"),
//                 t.add("taxExempt"),
//                 t.add("taxesIncluded"),
//                 t.add("currencyCode"),
//                 t.add("totalTax", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("lineItemsSubtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("subtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "subtotalPrice",
//                   { alias: "subtotalPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("totalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalPrice", { alias: "totalPriceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("completedAt"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("email"),
//                 t.add(
//                   "discountApplications",
//                   { args: { first: 10 } },
//                   function (t) {
//                     t.add("pageInfo", function (t) {
//                       t.add("hasNextPage"), t.add("hasPreviousPage");
//                     }),
//                       t.add("edges", function (t) {
//                         t.add("node", function (t) {
//                           t.addFragment(n.DiscountApplicationFragment);
//                         });
//                       });
//                   }
//                 ),
//                 t.add("appliedGiftCards", function (t) {
//                   t.addFragment(n.AppliedGiftCardFragment);
//                 }),
//                 t.add("shippingAddress", function (t) {
//                   t.addFragment(n.MailingAddressFragment);
//                 }),
//                 t.add("shippingLine", function (t) {
//                   t.add("handle"),
//                     t.add("price", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("price", { alias: "priceV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("title");
//                 }),
//                 t.add("customAttributes", function (t) {
//                   t.add("key"), t.add("value");
//                 }),
//                 t.add("order", function (t) {
//                   t.add("id"),
//                     t.add("processedAt"),
//                     t.add("orderNumber"),
//                     t.add("subtotalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "subtotalPrice",
//                       { alias: "subtotalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalShippingPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalShippingPrice",
//                       { alias: "totalShippingPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalTax", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalPrice",
//                       { alias: "totalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("currencyCode"),
//                     t.add("totalRefunded", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalRefunded",
//                       { alias: "totalRefundedV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("customerUrl"),
//                     t.add("shippingAddress", function (t) {
//                       t.addFragment(n.MailingAddressFragment);
//                     }),
//                     t.add("lineItems", { args: { first: 250 } }, function (t) {
//                       t.add("pageInfo", function (t) {
//                         t.add("hasNextPage"), t.add("hasPreviousPage");
//                       }),
//                         t.add("edges", function (t) {
//                           t.add("cursor"),
//                             t.add("node", function (t) {
//                               t.add("title"),
//                                 t.add("variant", function (t) {
//                                   t.addFragment(n.VariantWithProductFragment);
//                                 }),
//                                 t.add("quantity"),
//                                 t.add("customAttributes", function (t) {
//                                   t.add("key"), t.add("value");
//                                 });
//                             });
//                         });
//                     });
//                 }),
//                 t.add("lineItems", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("title"),
//                             t.add("variant", function (t) {
//                               t.addFragment(n.VariantWithProductFragment);
//                             }),
//                             t.add("quantity"),
//                             t.add("customAttributes", function (t) {
//                               t.add("key"), t.add("value");
//                             }),
//                             t.add("discountAllocations", function (t) {
//                               t.add("allocatedAmount", function (t) {
//                                 t.add("amount"), t.add("currencyCode");
//                               }),
//                                 t.add("discountApplication", function (t) {
//                                   t.addFragment(n.DiscountApplicationFragment);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addMutation(
//             "checkoutGiftCardsAppend",
//             [
//               r.checkoutGiftCardsAppend.giftCardCodes,
//               r.checkoutGiftCardsAppend.checkoutId,
//             ],
//             function (t) {
//               t.add(
//                 "checkoutGiftCardsAppend",
//                 {
//                   args: {
//                     giftCardCodes: r.checkoutGiftCardsAppend.giftCardCodes,
//                     checkoutId: r.checkoutGiftCardsAppend.checkoutId,
//                   },
//                 },
//                 function (t) {
//                   t.add("userErrors", function (t) {
//                     t.addFragment(n.UserErrorFragment);
//                   }),
//                     t.add("checkoutUserErrors", function (t) {
//                       t.addFragment(n.CheckoutUserErrorFragment);
//                     }),
//                     t.add("checkout", function (t) {
//                       t.addFragment(n.CheckoutFragment);
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       function oe(t) {
//         var e = t.document(),
//           n = {},
//           r = { checkoutGiftCardRemoveV2: {} };
//         return (
//           (r.checkoutGiftCardRemoveV2.appliedGiftCardId = t.variable(
//             "appliedGiftCardId",
//             "ID!"
//           )),
//           (r.checkoutGiftCardRemoveV2.checkoutId = t.variable(
//             "checkoutId",
//             "ID!"
//           )),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.DiscountApplicationFragment = e.defineFragment(
//             "DiscountApplicationFragment",
//             "DiscountApplication",
//             function (t) {
//               t.add("targetSelection"),
//                 t.add("allocationMethod"),
//                 t.add("targetType"),
//                 t.add("value", function (t) {
//                   t.addInlineFragmentOn("MoneyV2", function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }),
//                     t.addInlineFragmentOn(
//                       "PricingPercentageValue",
//                       function (t) {
//                         t.add("percentage");
//                       }
//                     );
//                 }),
//                 t.addInlineFragmentOn(
//                   "ManualDiscountApplication",
//                   function (t) {
//                     t.add("title"), t.add("description");
//                   }
//                 ),
//                 t.addInlineFragmentOn("DiscountCodeApplication", function (t) {
//                   t.add("code"), t.add("applicable");
//                 }),
//                 t.addInlineFragmentOn(
//                   "ScriptDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 ),
//                 t.addInlineFragmentOn(
//                   "AutomaticDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 );
//             }
//           )),
//           (n.AppliedGiftCardFragment = e.defineFragment(
//             "AppliedGiftCardFragment",
//             "AppliedGiftCard",
//             function (t) {
//               t.add("amountUsed", function (t) {
//                 t.add("amount"), t.add("currencyCode");
//               }),
//                 t.add("amountUsed", { alias: "amountUsedV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", { alias: "balanceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("presentmentAmountUsed", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("id"),
//                 t.add("lastCharacters");
//             }
//           )),
//           (n.VariantWithProductFragment = e.defineFragment(
//             "VariantWithProductFragment",
//             "ProductVariant",
//             function (t) {
//               t.addFragment(n.VariantFragment),
//                 t.add("product", function (t) {
//                   t.add("id"), t.add("handle");
//                 });
//             }
//           )),
//           (n.UserErrorFragment = e.defineFragment(
//             "UserErrorFragment",
//             "UserError",
//             function (t) {
//               t.add("field"), t.add("message");
//             }
//           )),
//           (n.CheckoutUserErrorFragment = e.defineFragment(
//             "CheckoutUserErrorFragment",
//             "CheckoutUserError",
//             function (t) {
//               t.add("field"), t.add("message"), t.add("code");
//             }
//           )),
//           (n.MailingAddressFragment = e.defineFragment(
//             "MailingAddressFragment",
//             "MailingAddress",
//             function (t) {
//               t.add("id"),
//                 t.add("address1"),
//                 t.add("address2"),
//                 t.add("city"),
//                 t.add("company"),
//                 t.add("country"),
//                 t.add("firstName"),
//                 t.add("formatted"),
//                 t.add("lastName"),
//                 t.add("latitude"),
//                 t.add("longitude"),
//                 t.add("phone"),
//                 t.add("province"),
//                 t.add("zip"),
//                 t.add("name"),
//                 t.add("countryCodeV2", { alias: "countryCode" }),
//                 t.add("provinceCode");
//             }
//           )),
//           (n.CheckoutFragment = e.defineFragment(
//             "CheckoutFragment",
//             "Checkout",
//             function (t) {
//               t.add("id"),
//                 t.add("ready"),
//                 t.add("requiresShipping"),
//                 t.add("note"),
//                 t.add("paymentDue", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("paymentDue", { alias: "paymentDueV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("webUrl"),
//                 t.add("orderStatusUrl"),
//                 t.add("taxExempt"),
//                 t.add("taxesIncluded"),
//                 t.add("currencyCode"),
//                 t.add("totalTax", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("lineItemsSubtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("subtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "subtotalPrice",
//                   { alias: "subtotalPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("totalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalPrice", { alias: "totalPriceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("completedAt"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("email"),
//                 t.add(
//                   "discountApplications",
//                   { args: { first: 10 } },
//                   function (t) {
//                     t.add("pageInfo", function (t) {
//                       t.add("hasNextPage"), t.add("hasPreviousPage");
//                     }),
//                       t.add("edges", function (t) {
//                         t.add("node", function (t) {
//                           t.addFragment(n.DiscountApplicationFragment);
//                         });
//                       });
//                   }
//                 ),
//                 t.add("appliedGiftCards", function (t) {
//                   t.addFragment(n.AppliedGiftCardFragment);
//                 }),
//                 t.add("shippingAddress", function (t) {
//                   t.addFragment(n.MailingAddressFragment);
//                 }),
//                 t.add("shippingLine", function (t) {
//                   t.add("handle"),
//                     t.add("price", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("price", { alias: "priceV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("title");
//                 }),
//                 t.add("customAttributes", function (t) {
//                   t.add("key"), t.add("value");
//                 }),
//                 t.add("order", function (t) {
//                   t.add("id"),
//                     t.add("processedAt"),
//                     t.add("orderNumber"),
//                     t.add("subtotalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "subtotalPrice",
//                       { alias: "subtotalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalShippingPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalShippingPrice",
//                       { alias: "totalShippingPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalTax", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalPrice",
//                       { alias: "totalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("currencyCode"),
//                     t.add("totalRefunded", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalRefunded",
//                       { alias: "totalRefundedV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("customerUrl"),
//                     t.add("shippingAddress", function (t) {
//                       t.addFragment(n.MailingAddressFragment);
//                     }),
//                     t.add("lineItems", { args: { first: 250 } }, function (t) {
//                       t.add("pageInfo", function (t) {
//                         t.add("hasNextPage"), t.add("hasPreviousPage");
//                       }),
//                         t.add("edges", function (t) {
//                           t.add("cursor"),
//                             t.add("node", function (t) {
//                               t.add("title"),
//                                 t.add("variant", function (t) {
//                                   t.addFragment(n.VariantWithProductFragment);
//                                 }),
//                                 t.add("quantity"),
//                                 t.add("customAttributes", function (t) {
//                                   t.add("key"), t.add("value");
//                                 });
//                             });
//                         });
//                     });
//                 }),
//                 t.add("lineItems", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("title"),
//                             t.add("variant", function (t) {
//                               t.addFragment(n.VariantWithProductFragment);
//                             }),
//                             t.add("quantity"),
//                             t.add("customAttributes", function (t) {
//                               t.add("key"), t.add("value");
//                             }),
//                             t.add("discountAllocations", function (t) {
//                               t.add("allocatedAmount", function (t) {
//                                 t.add("amount"), t.add("currencyCode");
//                               }),
//                                 t.add("discountApplication", function (t) {
//                                   t.addFragment(n.DiscountApplicationFragment);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addMutation(
//             "checkoutGiftCardRemoveV2",
//             [
//               r.checkoutGiftCardRemoveV2.appliedGiftCardId,
//               r.checkoutGiftCardRemoveV2.checkoutId,
//             ],
//             function (t) {
//               t.add(
//                 "checkoutGiftCardRemoveV2",
//                 {
//                   args: {
//                     appliedGiftCardId:
//                       r.checkoutGiftCardRemoveV2.appliedGiftCardId,
//                     checkoutId: r.checkoutGiftCardRemoveV2.checkoutId,
//                   },
//                 },
//                 function (t) {
//                   t.add("userErrors", function (t) {
//                     t.addFragment(n.UserErrorFragment);
//                   }),
//                     t.add("checkoutUserErrors", function (t) {
//                       t.addFragment(n.CheckoutUserErrorFragment);
//                     }),
//                     t.add("checkout", function (t) {
//                       t.addFragment(n.CheckoutFragment);
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       function ce(t) {
//         var e = t.document(),
//           n = {},
//           r = { checkoutEmailUpdateV2: {} };
//         return (
//           (r.checkoutEmailUpdateV2.checkoutId = t.variable(
//             "checkoutId",
//             "ID!"
//           )),
//           (r.checkoutEmailUpdateV2.email = t.variable("email", "String!")),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.DiscountApplicationFragment = e.defineFragment(
//             "DiscountApplicationFragment",
//             "DiscountApplication",
//             function (t) {
//               t.add("targetSelection"),
//                 t.add("allocationMethod"),
//                 t.add("targetType"),
//                 t.add("value", function (t) {
//                   t.addInlineFragmentOn("MoneyV2", function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }),
//                     t.addInlineFragmentOn(
//                       "PricingPercentageValue",
//                       function (t) {
//                         t.add("percentage");
//                       }
//                     );
//                 }),
//                 t.addInlineFragmentOn(
//                   "ManualDiscountApplication",
//                   function (t) {
//                     t.add("title"), t.add("description");
//                   }
//                 ),
//                 t.addInlineFragmentOn("DiscountCodeApplication", function (t) {
//                   t.add("code"), t.add("applicable");
//                 }),
//                 t.addInlineFragmentOn(
//                   "ScriptDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 ),
//                 t.addInlineFragmentOn(
//                   "AutomaticDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 );
//             }
//           )),
//           (n.AppliedGiftCardFragment = e.defineFragment(
//             "AppliedGiftCardFragment",
//             "AppliedGiftCard",
//             function (t) {
//               t.add("amountUsed", function (t) {
//                 t.add("amount"), t.add("currencyCode");
//               }),
//                 t.add("amountUsed", { alias: "amountUsedV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", { alias: "balanceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("presentmentAmountUsed", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("id"),
//                 t.add("lastCharacters");
//             }
//           )),
//           (n.VariantWithProductFragment = e.defineFragment(
//             "VariantWithProductFragment",
//             "ProductVariant",
//             function (t) {
//               t.addFragment(n.VariantFragment),
//                 t.add("product", function (t) {
//                   t.add("id"), t.add("handle");
//                 });
//             }
//           )),
//           (n.UserErrorFragment = e.defineFragment(
//             "UserErrorFragment",
//             "UserError",
//             function (t) {
//               t.add("field"), t.add("message");
//             }
//           )),
//           (n.CheckoutUserErrorFragment = e.defineFragment(
//             "CheckoutUserErrorFragment",
//             "CheckoutUserError",
//             function (t) {
//               t.add("field"), t.add("message"), t.add("code");
//             }
//           )),
//           (n.MailingAddressFragment = e.defineFragment(
//             "MailingAddressFragment",
//             "MailingAddress",
//             function (t) {
//               t.add("id"),
//                 t.add("address1"),
//                 t.add("address2"),
//                 t.add("city"),
//                 t.add("company"),
//                 t.add("country"),
//                 t.add("firstName"),
//                 t.add("formatted"),
//                 t.add("lastName"),
//                 t.add("latitude"),
//                 t.add("longitude"),
//                 t.add("phone"),
//                 t.add("province"),
//                 t.add("zip"),
//                 t.add("name"),
//                 t.add("countryCodeV2", { alias: "countryCode" }),
//                 t.add("provinceCode");
//             }
//           )),
//           (n.CheckoutFragment = e.defineFragment(
//             "CheckoutFragment",
//             "Checkout",
//             function (t) {
//               t.add("id"),
//                 t.add("ready"),
//                 t.add("requiresShipping"),
//                 t.add("note"),
//                 t.add("paymentDue", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("paymentDue", { alias: "paymentDueV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("webUrl"),
//                 t.add("orderStatusUrl"),
//                 t.add("taxExempt"),
//                 t.add("taxesIncluded"),
//                 t.add("currencyCode"),
//                 t.add("totalTax", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("lineItemsSubtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("subtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "subtotalPrice",
//                   { alias: "subtotalPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("totalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalPrice", { alias: "totalPriceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("completedAt"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("email"),
//                 t.add(
//                   "discountApplications",
//                   { args: { first: 10 } },
//                   function (t) {
//                     t.add("pageInfo", function (t) {
//                       t.add("hasNextPage"), t.add("hasPreviousPage");
//                     }),
//                       t.add("edges", function (t) {
//                         t.add("node", function (t) {
//                           t.addFragment(n.DiscountApplicationFragment);
//                         });
//                       });
//                   }
//                 ),
//                 t.add("appliedGiftCards", function (t) {
//                   t.addFragment(n.AppliedGiftCardFragment);
//                 }),
//                 t.add("shippingAddress", function (t) {
//                   t.addFragment(n.MailingAddressFragment);
//                 }),
//                 t.add("shippingLine", function (t) {
//                   t.add("handle"),
//                     t.add("price", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("price", { alias: "priceV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("title");
//                 }),
//                 t.add("customAttributes", function (t) {
//                   t.add("key"), t.add("value");
//                 }),
//                 t.add("order", function (t) {
//                   t.add("id"),
//                     t.add("processedAt"),
//                     t.add("orderNumber"),
//                     t.add("subtotalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "subtotalPrice",
//                       { alias: "subtotalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalShippingPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalShippingPrice",
//                       { alias: "totalShippingPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalTax", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalPrice",
//                       { alias: "totalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("currencyCode"),
//                     t.add("totalRefunded", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalRefunded",
//                       { alias: "totalRefundedV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("customerUrl"),
//                     t.add("shippingAddress", function (t) {
//                       t.addFragment(n.MailingAddressFragment);
//                     }),
//                     t.add("lineItems", { args: { first: 250 } }, function (t) {
//                       t.add("pageInfo", function (t) {
//                         t.add("hasNextPage"), t.add("hasPreviousPage");
//                       }),
//                         t.add("edges", function (t) {
//                           t.add("cursor"),
//                             t.add("node", function (t) {
//                               t.add("title"),
//                                 t.add("variant", function (t) {
//                                   t.addFragment(n.VariantWithProductFragment);
//                                 }),
//                                 t.add("quantity"),
//                                 t.add("customAttributes", function (t) {
//                                   t.add("key"), t.add("value");
//                                 });
//                             });
//                         });
//                     });
//                 }),
//                 t.add("lineItems", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("title"),
//                             t.add("variant", function (t) {
//                               t.addFragment(n.VariantWithProductFragment);
//                             }),
//                             t.add("quantity"),
//                             t.add("customAttributes", function (t) {
//                               t.add("key"), t.add("value");
//                             }),
//                             t.add("discountAllocations", function (t) {
//                               t.add("allocatedAmount", function (t) {
//                                 t.add("amount"), t.add("currencyCode");
//                               }),
//                                 t.add("discountApplication", function (t) {
//                                   t.addFragment(n.DiscountApplicationFragment);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addMutation(
//             "checkoutEmailUpdateV2",
//             [r.checkoutEmailUpdateV2.checkoutId, r.checkoutEmailUpdateV2.email],
//             function (t) {
//               t.add(
//                 "checkoutEmailUpdateV2",
//                 {
//                   args: {
//                     checkoutId: r.checkoutEmailUpdateV2.checkoutId,
//                     email: r.checkoutEmailUpdateV2.email,
//                   },
//                 },
//                 function (t) {
//                   t.add("userErrors", function (t) {
//                     t.addFragment(n.UserErrorFragment);
//                   }),
//                     t.add("checkoutUserErrors", function (t) {
//                       t.addFragment(n.CheckoutUserErrorFragment);
//                     }),
//                     t.add("checkout", function (t) {
//                       t.addFragment(n.CheckoutFragment);
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       function ue(t) {
//         var e = t.document(),
//           n = {},
//           r = { checkoutShippingAddressUpdateV2: {} };
//         return (
//           (r.checkoutShippingAddressUpdateV2.shippingAddress = t.variable(
//             "shippingAddress",
//             "MailingAddressInput!"
//           )),
//           (r.checkoutShippingAddressUpdateV2.checkoutId = t.variable(
//             "checkoutId",
//             "ID!"
//           )),
//           (n.VariantFragment = e.defineFragment(
//             "VariantFragment",
//             "ProductVariant",
//             function (t) {
//               t.add("id"),
//                 t.add("title"),
//                 t.add("price", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("price", { alias: "priceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("weight"),
//                 t.add("availableForSale", { alias: "available" }),
//                 t.add("sku"),
//                 t.add("compareAtPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "compareAtPrice",
//                   { alias: "compareAtPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("image", function (image) {
//                   image.add("id"),
//                     image.add("url", { alias: "src" }),
//                     image.add("altText"),
//                     image.add("width"),
//                     image.add("height");
//                 }),
//                 t.add("selectedOptions", function (t) {
//                   t.add("name"), t.add("value");
//                 }),
//                 t.add("unitPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("unitPriceMeasurement", function (t) {
//                   t.add("measuredType"),
//                     t.add("quantityUnit"),
//                     t.add("quantityValue"),
//                     t.add("referenceUnit"),
//                     t.add("referenceValue");
//                 });
//             }
//           )),
//           (n.DiscountApplicationFragment = e.defineFragment(
//             "DiscountApplicationFragment",
//             "DiscountApplication",
//             function (t) {
//               t.add("targetSelection"),
//                 t.add("allocationMethod"),
//                 t.add("targetType"),
//                 t.add("value", function (t) {
//                   t.addInlineFragmentOn("MoneyV2", function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }),
//                     t.addInlineFragmentOn(
//                       "PricingPercentageValue",
//                       function (t) {
//                         t.add("percentage");
//                       }
//                     );
//                 }),
//                 t.addInlineFragmentOn(
//                   "ManualDiscountApplication",
//                   function (t) {
//                     t.add("title"), t.add("description");
//                   }
//                 ),
//                 t.addInlineFragmentOn("DiscountCodeApplication", function (t) {
//                   t.add("code"), t.add("applicable");
//                 }),
//                 t.addInlineFragmentOn(
//                   "ScriptDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 ),
//                 t.addInlineFragmentOn(
//                   "AutomaticDiscountApplication",
//                   function (t) {
//                     t.add("title");
//                   }
//                 );
//             }
//           )),
//           (n.AppliedGiftCardFragment = e.defineFragment(
//             "AppliedGiftCardFragment",
//             "AppliedGiftCard",
//             function (t) {
//               t.add("amountUsed", function (t) {
//                 t.add("amount"), t.add("currencyCode");
//               }),
//                 t.add("amountUsed", { alias: "amountUsedV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("balance", { alias: "balanceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("presentmentAmountUsed", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("id"),
//                 t.add("lastCharacters");
//             }
//           )),
//           (n.VariantWithProductFragment = e.defineFragment(
//             "VariantWithProductFragment",
//             "ProductVariant",
//             function (t) {
//               t.addFragment(n.VariantFragment),
//                 t.add("product", function (t) {
//                   t.add("id"), t.add("handle");
//                 });
//             }
//           )),
//           (n.UserErrorFragment = e.defineFragment(
//             "UserErrorFragment",
//             "UserError",
//             function (t) {
//               t.add("field"), t.add("message");
//             }
//           )),
//           (n.CheckoutUserErrorFragment = e.defineFragment(
//             "CheckoutUserErrorFragment",
//             "CheckoutUserError",
//             function (t) {
//               t.add("field"), t.add("message"), t.add("code");
//             }
//           )),
//           (n.MailingAddressFragment = e.defineFragment(
//             "MailingAddressFragment",
//             "MailingAddress",
//             function (t) {
//               t.add("id"),
//                 t.add("address1"),
//                 t.add("address2"),
//                 t.add("city"),
//                 t.add("company"),
//                 t.add("country"),
//                 t.add("firstName"),
//                 t.add("formatted"),
//                 t.add("lastName"),
//                 t.add("latitude"),
//                 t.add("longitude"),
//                 t.add("phone"),
//                 t.add("province"),
//                 t.add("zip"),
//                 t.add("name"),
//                 t.add("countryCodeV2", { alias: "countryCode" }),
//                 t.add("provinceCode");
//             }
//           )),
//           (n.CheckoutFragment = e.defineFragment(
//             "CheckoutFragment",
//             "Checkout",
//             function (t) {
//               t.add("id"),
//                 t.add("ready"),
//                 t.add("requiresShipping"),
//                 t.add("note"),
//                 t.add("paymentDue", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("paymentDue", { alias: "paymentDueV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("webUrl"),
//                 t.add("orderStatusUrl"),
//                 t.add("taxExempt"),
//                 t.add("taxesIncluded"),
//                 t.add("currencyCode"),
//                 t.add("totalTax", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("lineItemsSubtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("subtotalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add(
//                   "subtotalPrice",
//                   { alias: "subtotalPriceV2" },
//                   function (t) {
//                     t.add("amount"), t.add("currencyCode");
//                   }
//                 ),
//                 t.add("totalPrice", function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("totalPrice", { alias: "totalPriceV2" }, function (t) {
//                   t.add("amount"), t.add("currencyCode");
//                 }),
//                 t.add("completedAt"),
//                 t.add("createdAt"),
//                 t.add("updatedAt"),
//                 t.add("email"),
//                 t.add(
//                   "discountApplications",
//                   { args: { first: 10 } },
//                   function (t) {
//                     t.add("pageInfo", function (t) {
//                       t.add("hasNextPage"), t.add("hasPreviousPage");
//                     }),
//                       t.add("edges", function (t) {
//                         t.add("node", function (t) {
//                           t.addFragment(n.DiscountApplicationFragment);
//                         });
//                       });
//                   }
//                 ),
//                 t.add("appliedGiftCards", function (t) {
//                   t.addFragment(n.AppliedGiftCardFragment);
//                 }),
//                 t.add("shippingAddress", function (t) {
//                   t.addFragment(n.MailingAddressFragment);
//                 }),
//                 t.add("shippingLine", function (t) {
//                   t.add("handle"),
//                     t.add("price", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("price", { alias: "priceV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("title");
//                 }),
//                 t.add("customAttributes", function (t) {
//                   t.add("key"), t.add("value");
//                 }),
//                 t.add("order", function (t) {
//                   t.add("id"),
//                     t.add("processedAt"),
//                     t.add("orderNumber"),
//                     t.add("subtotalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "subtotalPrice",
//                       { alias: "subtotalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalShippingPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalShippingPrice",
//                       { alias: "totalShippingPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("totalTax", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalTax", { alias: "totalTaxV2" }, function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add("totalPrice", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalPrice",
//                       { alias: "totalPriceV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("currencyCode"),
//                     t.add("totalRefunded", function (t) {
//                       t.add("amount"), t.add("currencyCode");
//                     }),
//                     t.add(
//                       "totalRefunded",
//                       { alias: "totalRefundedV2" },
//                       function (t) {
//                         t.add("amount"), t.add("currencyCode");
//                       }
//                     ),
//                     t.add("customerUrl"),
//                     t.add("shippingAddress", function (t) {
//                       t.addFragment(n.MailingAddressFragment);
//                     }),
//                     t.add("lineItems", { args: { first: 250 } }, function (t) {
//                       t.add("pageInfo", function (t) {
//                         t.add("hasNextPage"), t.add("hasPreviousPage");
//                       }),
//                         t.add("edges", function (t) {
//                           t.add("cursor"),
//                             t.add("node", function (t) {
//                               t.add("title"),
//                                 t.add("variant", function (t) {
//                                   t.addFragment(n.VariantWithProductFragment);
//                                 }),
//                                 t.add("quantity"),
//                                 t.add("customAttributes", function (t) {
//                                   t.add("key"), t.add("value");
//                                 });
//                             });
//                         });
//                     });
//                 }),
//                 t.add("lineItems", { args: { first: 250 } }, function (t) {
//                   t.add("pageInfo", function (t) {
//                     t.add("hasNextPage"), t.add("hasPreviousPage");
//                   }),
//                     t.add("edges", function (t) {
//                       t.add("cursor"),
//                         t.add("node", function (t) {
//                           t.add("id"),
//                             t.add("title"),
//                             t.add("variant", function (t) {
//                               t.addFragment(n.VariantWithProductFragment);
//                             }),
//                             t.add("quantity"),
//                             t.add("customAttributes", function (t) {
//                               t.add("key"), t.add("value");
//                             }),
//                             t.add("discountAllocations", function (t) {
//                               t.add("allocatedAmount", function (t) {
//                                 t.add("amount"), t.add("currencyCode");
//                               }),
//                                 t.add("discountApplication", function (t) {
//                                   t.addFragment(n.DiscountApplicationFragment);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             }
//           )),
//           e.addMutation(
//             "checkoutShippingAddressUpdateV2",
//             [
//               r.checkoutShippingAddressUpdateV2.shippingAddress,
//               r.checkoutShippingAddressUpdateV2.checkoutId,
//             ],
//             function (t) {
//               t.add(
//                 "checkoutShippingAddressUpdateV2",
//                 {
//                   args: {
//                     shippingAddress:
//                       r.checkoutShippingAddressUpdateV2.shippingAddress,
//                     checkoutId: r.checkoutShippingAddressUpdateV2.checkoutId,
//                   },
//                 },
//                 function (t) {
//                   t.add("userErrors", function (t) {
//                     t.addFragment(n.UserErrorFragment);
//                   }),
//                     t.add("checkoutUserErrors", function (t) {
//                       t.addFragment(n.CheckoutUserErrorFragment);
//                     }),
//                     t.add("checkout", function (t) {
//                       t.addFragment(n.CheckoutFragment);
//                     });
//                 }
//               );
//             }
//           ),
//           e
//         );
//       }
//       var se = (function (t) {
//           function e() {
//             return (
//               d(this, e),
//               l(
//                 this,
//                 (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
//               )
//             );
//           }
//           return (
//             c(e, t),
//             o(e, [
//               {
//                 key: "fetch",
//                 value: function (t) {
//                   var e = this;
//                   return this.graphQLClient
//                     .send(Kt, { id: t })
//                     .then(It("node"))
//                     .then(function (t) {
//                       return t
//                         ? e.graphQLClient
//                             .fetchAllPages(t.lineItems, { pageSize: 250 })
//                             .then(function (e) {
//                               return (t.attrs.lineItems = e), t;
//                             })
//                         : null;
//                     });
//                 },
//               },
//               {
//                 key: "create",
//                 value: function () {
//                   var input =
//                     arguments.length > 0 && void 0 !== arguments[0]
//                       ? arguments[0]
//                       : {};
//                   return this.graphQLClient
//                     .send(Xt, { input: input })
//                     .then(Yt("checkoutCreate", this.graphQLClient));
//                 },
//               },
//               {
//                 key: "updateAttributes",
//                 value: function (t) {
//                   var input =
//                     arguments.length > 1 && void 0 !== arguments[1]
//                       ? arguments[1]
//                       : {};
//                   return this.graphQLClient
//                     .send(ae, { checkoutId: t, input: input })
//                     .then(Yt("checkoutAttributesUpdateV2", this.graphQLClient));
//                 },
//               },
//               {
//                 key: "updateEmail",
//                 value: function (t, e) {
//                   return this.graphQLClient
//                     .send(ce, { checkoutId: t, email: e })
//                     .then(Yt("checkoutEmailUpdateV2", this.graphQLClient));
//                 },
//               },
//               {
//                 key: "addLineItems",
//                 value: function (t, e) {
//                   return this.graphQLClient
//                     .send(Zt, { checkoutId: t, lineItems: e })
//                     .then(Yt("checkoutLineItemsAdd", this.graphQLClient));
//                 },
//               },
//               {
//                 key: "addDiscount",
//                 value: function (t, e) {
//                   return this.graphQLClient
//                     .send(re, { checkoutId: t, discountCode: e })
//                     .then(
//                       Yt("checkoutDiscountCodeApplyV2", this.graphQLClient)
//                     );
//                 },
//               },
//               {
//                 key: "removeDiscount",
//                 value: function (t) {
//                   return this.graphQLClient
//                     .send(de, { checkoutId: t })
//                     .then(Yt("checkoutDiscountCodeRemove", this.graphQLClient));
//                 },
//               },
//               {
//                 key: "addGiftCards",
//                 value: function (t, e) {
//                   return this.graphQLClient
//                     .send(ie, { checkoutId: t, giftCardCodes: e })
//                     .then(Yt("checkoutGiftCardsAppend", this.graphQLClient));
//                 },
//               },
//               {
//                 key: "removeGiftCard",
//                 value: function (t, e) {
//                   return this.graphQLClient
//                     .send(oe, { checkoutId: t, appliedGiftCardId: e })
//                     .then(Yt("checkoutGiftCardRemoveV2", this.graphQLClient));
//                 },
//               },
//               {
//                 key: "removeLineItems",
//                 value: function (t, e) {
//                   return this.graphQLClient
//                     .send(te, { checkoutId: t, lineItemIds: e })
//                     .then(Yt("checkoutLineItemsRemove", this.graphQLClient));
//                 },
//               },
//               {
//                 key: "replaceLineItems",
//                 value: function (t, e) {
//                   return this.graphQLClient
//                     .send(ee, { checkoutId: t, lineItems: e })
//                     .then(Yt("checkoutLineItemsReplace", this.graphQLClient));
//                 },
//               },
//               {
//                 key: "updateLineItems",
//                 value: function (t, e) {
//                   return this.graphQLClient
//                     .send(ne, { checkoutId: t, lineItems: e })
//                     .then(Yt("checkoutLineItemsUpdate", this.graphQLClient));
//                 },
//               },
//               {
//                 key: "updateShippingAddress",
//                 value: function (t, e) {
//                   return this.graphQLClient
//                     .send(ue, { checkoutId: t, shippingAddress: e })
//                     .then(
//                       Yt("checkoutShippingAddressUpdateV2", this.graphQLClient)
//                     );
//                 },
//               },
//             ]),
//             e
//           );
//         })(St),
//         le = {
//           imageForSize: function (image, t) {
//             var e = t.maxWidth,
//               n = t.maxHeight,
//               r = image.src.split("?"),
//               d = r[0],
//               o = r[1] ? "?" + r[1] : "",
//               c = d.split("."),
//               l = c.length - 2;
//             return (c[l] = c[l] + "_" + e + "x" + n), "" + c.join(".") + o;
//           },
//         },
//         fe = (function (t) {
//           function e() {
//             return (
//               d(this, e),
//               l(
//                 this,
//                 (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
//               )
//             );
//           }
//           return (
//             c(e, t),
//             o(e, [
//               {
//                 key: "helpers",
//                 get: function () {
//                   return le;
//                 },
//               },
//             ]),
//             e
//           );
//         })(St),
//         pe = { types: {} };
//       (pe.types.AppliedGiftCard = {
//         name: "AppliedGiftCard",
//         kind: "OBJECT",
//         fieldBaseTypes: {
//           amountUsed: "MoneyV2",
//           balance: "MoneyV2",
//           id: "ID",
//           lastCharacters: "String",
//           presentmentAmountUsed: "MoneyV2",
//         },
//         implementsNode: !0,
//       }),
//         (pe.types.Attribute = {
//           name: "Attribute",
//           kind: "OBJECT",
//           fieldBaseTypes: { key: "String", value: "String" },
//           implementsNode: !1,
//         }),
//         (pe.types.AutomaticDiscountApplication = {
//           name: "AutomaticDiscountApplication",
//           kind: "OBJECT",
//           fieldBaseTypes: { title: "String" },
//           implementsNode: !1,
//         }),
//         (pe.types.Boolean = { name: "Boolean", kind: "SCALAR" }),
//         (pe.types.Checkout = {
//           name: "Checkout",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             appliedGiftCards: "AppliedGiftCard",
//             completedAt: "DateTime",
//             createdAt: "DateTime",
//             currencyCode: "CurrencyCode",
//             customAttributes: "Attribute",
//             discountApplications: "DiscountApplicationConnection",
//             email: "String",
//             id: "ID",
//             lineItems: "CheckoutLineItemConnection",
//             lineItemsSubtotalPrice: "MoneyV2",
//             note: "String",
//             order: "Order",
//             orderStatusUrl: "URL",
//             paymentDue: "MoneyV2",
//             ready: "Boolean",
//             requiresShipping: "Boolean",
//             shippingAddress: "MailingAddress",
//             shippingLine: "ShippingRate",
//             subtotalPrice: "MoneyV2",
//             taxExempt: "Boolean",
//             taxesIncluded: "Boolean",
//             totalPrice: "MoneyV2",
//             totalTax: "MoneyV2",
//             updatedAt: "DateTime",
//             webUrl: "URL",
//           },
//           implementsNode: !0,
//         }),
//         (pe.types.CheckoutAttributesUpdateV2Payload = {
//           name: "CheckoutAttributesUpdateV2Payload",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             checkout: "Checkout",
//             checkoutUserErrors: "CheckoutUserError",
//             userErrors: "UserError",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.CheckoutCreatePayload = {
//           name: "CheckoutCreatePayload",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             checkout: "Checkout",
//             checkoutUserErrors: "CheckoutUserError",
//             userErrors: "UserError",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.CheckoutDiscountCodeApplyV2Payload = {
//           name: "CheckoutDiscountCodeApplyV2Payload",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             checkout: "Checkout",
//             checkoutUserErrors: "CheckoutUserError",
//             userErrors: "UserError",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.CheckoutDiscountCodeRemovePayload = {
//           name: "CheckoutDiscountCodeRemovePayload",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             checkout: "Checkout",
//             checkoutUserErrors: "CheckoutUserError",
//             userErrors: "UserError",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.CheckoutEmailUpdateV2Payload = {
//           name: "CheckoutEmailUpdateV2Payload",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             checkout: "Checkout",
//             checkoutUserErrors: "CheckoutUserError",
//             userErrors: "UserError",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.CheckoutErrorCode = {
//           name: "CheckoutErrorCode",
//           kind: "ENUM",
//         }),
//         (pe.types.CheckoutGiftCardRemoveV2Payload = {
//           name: "CheckoutGiftCardRemoveV2Payload",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             checkout: "Checkout",
//             checkoutUserErrors: "CheckoutUserError",
//             userErrors: "UserError",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.CheckoutGiftCardsAppendPayload = {
//           name: "CheckoutGiftCardsAppendPayload",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             checkout: "Checkout",
//             checkoutUserErrors: "CheckoutUserError",
//             userErrors: "UserError",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.CheckoutLineItem = {
//           name: "CheckoutLineItem",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             customAttributes: "Attribute",
//             discountAllocations: "DiscountAllocation",
//             id: "ID",
//             quantity: "Int",
//             title: "String",
//             variant: "ProductVariant",
//           },
//           implementsNode: !0,
//         }),
//         (pe.types.CheckoutLineItemConnection = {
//           name: "CheckoutLineItemConnection",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             edges: "CheckoutLineItemEdge",
//             pageInfo: "PageInfo",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.CheckoutLineItemEdge = {
//           name: "CheckoutLineItemEdge",
//           kind: "OBJECT",
//           fieldBaseTypes: { cursor: "String", node: "CheckoutLineItem" },
//           implementsNode: !1,
//         }),
//         (pe.types.CheckoutLineItemsAddPayload = {
//           name: "CheckoutLineItemsAddPayload",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             checkout: "Checkout",
//             checkoutUserErrors: "CheckoutUserError",
//             userErrors: "UserError",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.CheckoutLineItemsRemovePayload = {
//           name: "CheckoutLineItemsRemovePayload",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             checkout: "Checkout",
//             checkoutUserErrors: "CheckoutUserError",
//             userErrors: "UserError",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.CheckoutLineItemsReplacePayload = {
//           name: "CheckoutLineItemsReplacePayload",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             checkout: "Checkout",
//             userErrors: "CheckoutUserError",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.CheckoutLineItemsUpdatePayload = {
//           name: "CheckoutLineItemsUpdatePayload",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             checkout: "Checkout",
//             checkoutUserErrors: "CheckoutUserError",
//             userErrors: "UserError",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.CheckoutShippingAddressUpdateV2Payload = {
//           name: "CheckoutShippingAddressUpdateV2Payload",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             checkout: "Checkout",
//             checkoutUserErrors: "CheckoutUserError",
//             userErrors: "UserError",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.CheckoutUserError = {
//           name: "CheckoutUserError",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             code: "CheckoutErrorCode",
//             field: "String",
//             message: "String",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.Collection = {
//           name: "Collection",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             description: "String",
//             descriptionHtml: "HTML",
//             handle: "String",
//             id: "ID",
//             image: "Image",
//             products: "ProductConnection",
//             title: "String",
//             updatedAt: "DateTime",
//           },
//           implementsNode: !0,
//         }),
//         (pe.types.CollectionConnection = {
//           name: "CollectionConnection",
//           kind: "OBJECT",
//           fieldBaseTypes: { edges: "CollectionEdge", pageInfo: "PageInfo" },
//           implementsNode: !1,
//         }),
//         (pe.types.CollectionEdge = {
//           name: "CollectionEdge",
//           kind: "OBJECT",
//           fieldBaseTypes: { cursor: "String", node: "Collection" },
//           implementsNode: !1,
//         }),
//         (pe.types.CountryCode = { name: "CountryCode", kind: "ENUM" }),
//         (pe.types.CurrencyCode = { name: "CurrencyCode", kind: "ENUM" }),
//         (pe.types.DateTime = { name: "DateTime", kind: "SCALAR" }),
//         (pe.types.Decimal = { name: "Decimal", kind: "SCALAR" }),
//         (pe.types.DiscountAllocation = {
//           name: "DiscountAllocation",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             allocatedAmount: "MoneyV2",
//             discountApplication: "DiscountApplication",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.DiscountApplication = {
//           name: "DiscountApplication",
//           kind: "INTERFACE",
//           fieldBaseTypes: {
//             allocationMethod: "DiscountApplicationAllocationMethod",
//             targetSelection: "DiscountApplicationTargetSelection",
//             targetType: "DiscountApplicationTargetType",
//             value: "PricingValue",
//           },
//           possibleTypes: [
//             "AutomaticDiscountApplication",
//             "DiscountCodeApplication",
//             "ManualDiscountApplication",
//             "ScriptDiscountApplication",
//           ],
//         }),
//         (pe.types.DiscountApplicationAllocationMethod = {
//           name: "DiscountApplicationAllocationMethod",
//           kind: "ENUM",
//         }),
//         (pe.types.DiscountApplicationConnection = {
//           name: "DiscountApplicationConnection",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             edges: "DiscountApplicationEdge",
//             pageInfo: "PageInfo",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.DiscountApplicationEdge = {
//           name: "DiscountApplicationEdge",
//           kind: "OBJECT",
//           fieldBaseTypes: { node: "DiscountApplication" },
//           implementsNode: !1,
//         }),
//         (pe.types.DiscountApplicationTargetSelection = {
//           name: "DiscountApplicationTargetSelection",
//           kind: "ENUM",
//         }),
//         (pe.types.DiscountApplicationTargetType = {
//           name: "DiscountApplicationTargetType",
//           kind: "ENUM",
//         }),
//         (pe.types.DiscountCodeApplication = {
//           name: "DiscountCodeApplication",
//           kind: "OBJECT",
//           fieldBaseTypes: { applicable: "Boolean", code: "String" },
//           implementsNode: !1,
//         }),
//         (pe.types.Domain = {
//           name: "Domain",
//           kind: "OBJECT",
//           fieldBaseTypes: { host: "String", sslEnabled: "Boolean", url: "URL" },
//           implementsNode: !1,
//         }),
//         (pe.types.Float = { name: "Float", kind: "SCALAR" }),
//         (pe.types.HTML = { name: "HTML", kind: "SCALAR" }),
//         (pe.types.ID = { name: "ID", kind: "SCALAR" }),
//         (pe.types.Image = {
//           name: "Image",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             altText: "String",
//             height: "Int",
//             id: "ID",
//             url: "URL",
//             width: "Int",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.ImageConnection = {
//           name: "ImageConnection",
//           kind: "OBJECT",
//           fieldBaseTypes: { edges: "ImageEdge", pageInfo: "PageInfo" },
//           implementsNode: !1,
//         }),
//         (pe.types.ImageEdge = {
//           name: "ImageEdge",
//           kind: "OBJECT",
//           fieldBaseTypes: { cursor: "String", node: "Image" },
//           implementsNode: !1,
//         }),
//         (pe.types.Int = { name: "Int", kind: "SCALAR" }),
//         (pe.types.MailingAddress = {
//           name: "MailingAddress",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             address1: "String",
//             address2: "String",
//             city: "String",
//             company: "String",
//             country: "String",
//             countryCodeV2: "CountryCode",
//             firstName: "String",
//             formatted: "String",
//             id: "ID",
//             lastName: "String",
//             latitude: "Float",
//             longitude: "Float",
//             name: "String",
//             phone: "String",
//             province: "String",
//             provinceCode: "String",
//             zip: "String",
//           },
//           implementsNode: !0,
//         }),
//         (pe.types.ManualDiscountApplication = {
//           name: "ManualDiscountApplication",
//           kind: "OBJECT",
//           fieldBaseTypes: { description: "String", title: "String" },
//           implementsNode: !1,
//         }),
//         (pe.types.MoneyV2 = {
//           name: "MoneyV2",
//           kind: "OBJECT",
//           fieldBaseTypes: { amount: "Decimal", currencyCode: "CurrencyCode" },
//           implementsNode: !1,
//         }),
//         (pe.types.Mutation = {
//           name: "Mutation",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             checkoutAttributesUpdateV2: "CheckoutAttributesUpdateV2Payload",
//             checkoutCreate: "CheckoutCreatePayload",
//             checkoutDiscountCodeApplyV2: "CheckoutDiscountCodeApplyV2Payload",
//             checkoutDiscountCodeRemove: "CheckoutDiscountCodeRemovePayload",
//             checkoutEmailUpdateV2: "CheckoutEmailUpdateV2Payload",
//             checkoutGiftCardRemoveV2: "CheckoutGiftCardRemoveV2Payload",
//             checkoutGiftCardsAppend: "CheckoutGiftCardsAppendPayload",
//             checkoutLineItemsAdd: "CheckoutLineItemsAddPayload",
//             checkoutLineItemsRemove: "CheckoutLineItemsRemovePayload",
//             checkoutLineItemsReplace: "CheckoutLineItemsReplacePayload",
//             checkoutLineItemsUpdate: "CheckoutLineItemsUpdatePayload",
//             checkoutShippingAddressUpdateV2:
//               "CheckoutShippingAddressUpdateV2Payload",
//           },
//           implementsNode: !1,
//           relayInputObjectBaseTypes: {
//             cartCreate: "CartInput",
//             checkoutAttributesUpdateV2: "CheckoutAttributesUpdateV2Input",
//             checkoutCreate: "CheckoutCreateInput",
//             customerAccessTokenCreate: "CustomerAccessTokenCreateInput",
//             customerActivate: "CustomerActivateInput",
//             customerCreate: "CustomerCreateInput",
//             customerReset: "CustomerResetInput",
//           },
//         }),
//         (pe.types.Node = {
//           name: "Node",
//           kind: "INTERFACE",
//           fieldBaseTypes: {},
//           possibleTypes: [
//             "AppliedGiftCard",
//             "Article",
//             "Blog",
//             "Cart",
//             "CartLine",
//             "Checkout",
//             "CheckoutLineItem",
//             "Collection",
//             "Comment",
//             "ExternalVideo",
//             "GenericFile",
//             "Location",
//             "MailingAddress",
//             "MediaImage",
//             "Menu",
//             "MenuItem",
//             "Metafield",
//             "Metaobject",
//             "Model3d",
//             "Order",
//             "Page",
//             "Payment",
//             "Product",
//             "ProductOption",
//             "ProductVariant",
//             "Shop",
//             "ShopPolicy",
//             "UrlRedirect",
//             "Video",
//           ],
//         }),
//         (pe.types.Order = {
//           name: "Order",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             currencyCode: "CurrencyCode",
//             customerUrl: "URL",
//             id: "ID",
//             lineItems: "OrderLineItemConnection",
//             orderNumber: "Int",
//             processedAt: "DateTime",
//             shippingAddress: "MailingAddress",
//             subtotalPrice: "MoneyV2",
//             totalPrice: "MoneyV2",
//             totalRefunded: "MoneyV2",
//             totalShippingPrice: "MoneyV2",
//             totalTax: "MoneyV2",
//           },
//           implementsNode: !0,
//         }),
//         (pe.types.OrderLineItem = {
//           name: "OrderLineItem",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             customAttributes: "Attribute",
//             quantity: "Int",
//             title: "String",
//             variant: "ProductVariant",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.OrderLineItemConnection = {
//           name: "OrderLineItemConnection",
//           kind: "OBJECT",
//           fieldBaseTypes: { edges: "OrderLineItemEdge", pageInfo: "PageInfo" },
//           implementsNode: !1,
//         }),
//         (pe.types.OrderLineItemEdge = {
//           name: "OrderLineItemEdge",
//           kind: "OBJECT",
//           fieldBaseTypes: { cursor: "String", node: "OrderLineItem" },
//           implementsNode: !1,
//         }),
//         (pe.types.PageInfo = {
//           name: "PageInfo",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             hasNextPage: "Boolean",
//             hasPreviousPage: "Boolean",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.PaymentSettings = {
//           name: "PaymentSettings",
//           kind: "OBJECT",
//           fieldBaseTypes: { enabledPresentmentCurrencies: "CurrencyCode" },
//           implementsNode: !1,
//         }),
//         (pe.types.PricingPercentageValue = {
//           name: "PricingPercentageValue",
//           kind: "OBJECT",
//           fieldBaseTypes: { percentage: "Float" },
//           implementsNode: !1,
//         }),
//         (pe.types.PricingValue = { name: "PricingValue", kind: "UNION" }),
//         (pe.types.Product = {
//           name: "Product",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             availableForSale: "Boolean",
//             createdAt: "DateTime",
//             description: "String",
//             descriptionHtml: "HTML",
//             handle: "String",
//             id: "ID",
//             images: "ImageConnection",
//             onlineStoreUrl: "URL",
//             options: "ProductOption",
//             productType: "String",
//             publishedAt: "DateTime",
//             title: "String",
//             updatedAt: "DateTime",
//             variants: "ProductVariantConnection",
//             vendor: "String",
//           },
//           implementsNode: !0,
//         }),
//         (pe.types.ProductConnection = {
//           name: "ProductConnection",
//           kind: "OBJECT",
//           fieldBaseTypes: { edges: "ProductEdge", pageInfo: "PageInfo" },
//           implementsNode: !1,
//         }),
//         (pe.types.ProductEdge = {
//           name: "ProductEdge",
//           kind: "OBJECT",
//           fieldBaseTypes: { cursor: "String", node: "Product" },
//           implementsNode: !1,
//         }),
//         (pe.types.ProductOption = {
//           name: "ProductOption",
//           kind: "OBJECT",
//           fieldBaseTypes: { name: "String", values: "String" },
//           implementsNode: !0,
//         }),
//         (pe.types.ProductVariant = {
//           name: "ProductVariant",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             availableForSale: "Boolean",
//             compareAtPrice: "MoneyV2",
//             id: "ID",
//             image: "Image",
//             price: "MoneyV2",
//             product: "Product",
//             selectedOptions: "SelectedOption",
//             sku: "String",
//             title: "String",
//             unitPrice: "MoneyV2",
//             unitPriceMeasurement: "UnitPriceMeasurement",
//             weight: "Float",
//           },
//           implementsNode: !0,
//         }),
//         (pe.types.ProductVariantConnection = {
//           name: "ProductVariantConnection",
//           kind: "OBJECT",
//           fieldBaseTypes: { edges: "ProductVariantEdge", pageInfo: "PageInfo" },
//           implementsNode: !1,
//         }),
//         (pe.types.ProductVariantEdge = {
//           name: "ProductVariantEdge",
//           kind: "OBJECT",
//           fieldBaseTypes: { cursor: "String", node: "ProductVariant" },
//           implementsNode: !1,
//         }),
//         (pe.types.QueryRoot = {
//           name: "QueryRoot",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             collectionByHandle: "Collection",
//             collections: "CollectionConnection",
//             node: "Node",
//             nodes: "Node",
//             productByHandle: "Product",
//             productRecommendations: "Product",
//             products: "ProductConnection",
//             shop: "Shop",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.ScriptDiscountApplication = {
//           name: "ScriptDiscountApplication",
//           kind: "OBJECT",
//           fieldBaseTypes: { title: "String" },
//           implementsNode: !1,
//         }),
//         (pe.types.SelectedOption = {
//           name: "SelectedOption",
//           kind: "OBJECT",
//           fieldBaseTypes: { name: "String", value: "String" },
//           implementsNode: !1,
//         }),
//         (pe.types.ShippingRate = {
//           name: "ShippingRate",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             handle: "String",
//             price: "MoneyV2",
//             title: "String",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.Shop = {
//           name: "Shop",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             description: "String",
//             moneyFormat: "String",
//             name: "String",
//             paymentSettings: "PaymentSettings",
//             primaryDomain: "Domain",
//             privacyPolicy: "ShopPolicy",
//             refundPolicy: "ShopPolicy",
//             termsOfService: "ShopPolicy",
//           },
//           implementsNode: !0,
//         }),
//         (pe.types.ShopPolicy = {
//           name: "ShopPolicy",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             body: "String",
//             id: "ID",
//             title: "String",
//             url: "URL",
//           },
//           implementsNode: !0,
//         }),
//         (pe.types.String = { name: "String", kind: "SCALAR" }),
//         (pe.types.URL = { name: "URL", kind: "SCALAR" }),
//         (pe.types.UnitPriceMeasurement = {
//           name: "UnitPriceMeasurement",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             measuredType: "UnitPriceMeasurementMeasuredType",
//             quantityUnit: "UnitPriceMeasurementMeasuredUnit",
//             quantityValue: "Float",
//             referenceUnit: "UnitPriceMeasurementMeasuredUnit",
//             referenceValue: "Int",
//           },
//           implementsNode: !1,
//         }),
//         (pe.types.UnitPriceMeasurementMeasuredType = {
//           name: "UnitPriceMeasurementMeasuredType",
//           kind: "ENUM",
//         }),
//         (pe.types.UnitPriceMeasurementMeasuredUnit = {
//           name: "UnitPriceMeasurementMeasuredUnit",
//           kind: "ENUM",
//         }),
//         (pe.types.UserError = {
//           name: "UserError",
//           kind: "OBJECT",
//           fieldBaseTypes: { field: "String", message: "String" },
//           implementsNode: !1,
//         }),
//         (pe.queryType = "QueryRoot"),
//         (pe.mutationType = "Mutation"),
//         (pe.subscriptionType = null);
//       var he = (function t(e) {
//           return (
//             Object.getOwnPropertyNames(e).forEach(function (n) {
//               var d = e[n];
//               d && "object" === (void 0 === d ? "undefined" : r(d)) && t(d);
//             }),
//             Object.freeze(e),
//             e
//           );
//         })(pe),
//         me = (function () {
//           function t(e) {
//             var n =
//                 arguments.length > 1 && void 0 !== arguments[1]
//                   ? arguments[1]
//                   : Ot,
//               r = arguments[2];
//             d(this, t);
//             var o = "https://" + e.domain + "/api/" + e.apiVersion + "/graphql",
//               c = {
//                 "X-SDK-Variant": "javascript",
//                 "X-SDK-Version": "2.18.0",
//                 "X-Shopify-Storefront-Access-Token": e.storefrontAccessToken,
//               };
//             e.source && (c["X-SDK-Variant-Source"] = e.source);
//             var l = e.language ? e.language : "*";
//             (c["Accept-Language"] = l),
//               r
//                 ? ((c["Content-Type"] = "application/json"),
//                   (c.Accept = "application/json"),
//                   (this.graphQLClient = new n(he, {
//                     fetcher: function (t) {
//                       return r(o, {
//                         body: JSON.stringify(t),
//                         method: "POST",
//                         mode: "cors",
//                         headers: c,
//                       }).then(function (t) {
//                         return t.json();
//                       });
//                     },
//                   })))
//                 : (this.graphQLClient = new n(he, {
//                     url: o,
//                     fetcherOptions: { headers: c },
//                   })),
//               (this.product = new Bt(this.graphQLClient)),
//               (this.collection = new Jt(this.graphQLClient)),
//               (this.shop = new $t(this.graphQLClient)),
//               (this.checkout = new se(this.graphQLClient)),
//               (this.image = new fe(this.graphQLClient));
//           }
//           return (
//             o(t, null, [
//               {
//                 key: "buildClient",
//                 value: function (e, n) {
//                   var r = new kt(e),
//                     d = new t(r, Ot, n);
//                   return (d.config = r), d;
//                 },
//               },
//             ]),
//             o(t, [
//               {
//                 key: "fetchNextPage",
//                 value: function (t) {
//                   return this.graphQLClient.fetchNextPage(t);
//                 },
//               },
//             ]),
//             t
//           );
//         })();
//       t.exports = me;
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(13),
//         filter = n(92).filter,
//         map = n(93).map,
//         d = n(129),
//         o = n(201),
//         c = n(409),
//         l = n(427),
//         f = n(428),
//         h = n(429),
//         m = n(431),
//         y = n(432),
//         v = n(433),
//         C = n(460),
//         P = n(461),
//         _ = P.defaultConfig,
//         A = P.initConfig;
//       function w() {
//         var t =
//           arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _;
//         if (!(this instanceof w)) return new w(t);
//         if (
//           (this.config(t),
//           (this.assets = new h(this)),
//           (this.datasets = new l(this)),
//           (this.projects = new f(this)),
//           (this.users = new m(this)),
//           (this.auth = new y(this)),
//           this.clientConfig.isPromiseAPI)
//         ) {
//           var e = r({}, this.clientConfig, { isPromiseAPI: !1 });
//           this.observable = new w(e);
//         }
//       }
//       r(w.prototype, c),
//         r(w.prototype, {
//           clone: function () {
//             return new w(this.config());
//           },
//           config: function (t) {
//             if (void 0 === t) return r({}, this.clientConfig);
//             if (this.observable) {
//               var e = r({}, t, { isPromiseAPI: !1 });
//               this.observable.config(e);
//             }
//             return (this.clientConfig = A(t, this.clientConfig || {})), this;
//           },
//           getUrl: function (t) {
//             var base =
//               arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
//                 ? this.clientConfig.cdnUrl
//                 : this.clientConfig.url;
//             return "".concat(base, "/").concat(t.replace(/^\//, ""));
//           },
//           isPromiseAPI: function () {
//             return this.clientConfig.isPromiseAPI;
//           },
//           _requestObservable: function (t) {
//             var e = t.url || t.uri,
//               n =
//                 this.clientConfig.useCdn &&
//                 ["GET", "HEAD"].indexOf(t.method || "GET") >= 0 &&
//                 0 === e.indexOf("/data/"),
//               d = C(this.clientConfig, r({}, t, { url: this.getUrl(e, n) }));
//             return v(d, this.clientConfig.requester);
//           },
//           request: function (t) {
//             var e = this._requestObservable(t).pipe(
//               filter(function (t) {
//                 return "response" === t.type;
//               }),
//               map(function (t) {
//                 return t.body;
//               })
//             );
//             return this.isPromiseAPI()
//               ? (function (t) {
//                   return t.toPromise();
//                 })(e)
//               : e;
//           },
//         }),
//         (w.Patch = d),
//         (w.Transaction = o),
//         (w.ClientError = v.ClientError),
//         (w.ServerError = v.ServerError),
//         (w.requester = v.defaultRequester),
//         (t.exports = w);
//     },
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       var r = n(122),
//         d = n(279),
//         o = n(280),
//         c = r ? r.toStringTag : void 0;
//       t.exports = function (t) {
//         return null == t
//           ? void 0 === t
//             ? "[object Undefined]"
//             : "[object Null]"
//           : c && c in Object(t)
//           ? d(t)
//           : o(t);
//       };
//     },
//     function (t, e, n) {
//       var r = n(297),
//         d = n(302);
//       t.exports = function (object, t) {
//         var e = d(object, t);
//         return r(e) ? e : void 0;
//       };
//     },
//     function (t, e) {
//       t.exports = function (t) {
//         var e = typeof t;
//         return null != t && ("object" == e || "function" == e);
//       };
//     },
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 }),
//         (e.isFunction = function (t) {
//           return "function" == typeof t;
//         });
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var r = n(128),
//         d = n(198);
//       e.empty = {
//         closed: !0,
//         next: function (t) {},
//         error: function (t) {
//           if (r.config.useDeprecatedSynchronousErrorHandling) throw t;
//           d.hostReportError(t);
//         },
//         complete: function () {},
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 }),
//         (e.hostReportError = function (t) {
//           setTimeout(function () {
//             throw t;
//           }, 0);
//         });
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 }),
//         (e.rxSubscriber =
//           "function" == typeof Symbol
//             ? Symbol("rxSubscriber")
//             : "@@rxSubscriber_" + Math.random()),
//         (e.$$rxSubscriber = e.rxSubscriber);
//     },
//     function (t, e, n) {
//       "use strict";
//       t.exports = function (t) {
//         if ("string" == typeof t || Array.isArray(t)) return { id: t };
//         if (t && t.query) return { query: t.query };
//         var e = [
//           "* Document ID (<docId>)",
//           "* Array of document IDs",
//           "* Object containing `query`",
//         ].join("\n");
//         throw new Error("Unknown selection - must be one of:\n\n".concat(e));
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       function r(t, e, n) {
//         return (
//           e in t
//             ? Object.defineProperty(t, e, {
//                 value: n,
//                 enumerable: !0,
//                 configurable: !0,
//                 writable: !0,
//               })
//             : (t[e] = n),
//           t
//         );
//       }
//       var d = n(13),
//         o = n(58),
//         c = n(129),
//         l = { returnDocuments: !1 };
//       function f() {
//         var t =
//             arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
//           e = arguments.length > 1 ? arguments[1] : void 0,
//           n = arguments.length > 2 ? arguments[2] : void 0;
//         (this.trxId = n), (this.operations = t), (this.client = e);
//       }
//       d(f.prototype, {
//         clone: function () {
//           return new f(this.operations.slice(0), this.client, this.trxId);
//         },
//         create: function (t) {
//           return o.validateObject("create", t), this._add({ create: t });
//         },
//         createIfNotExists: function (t) {
//           var e = "createIfNotExists";
//           return (
//             o.validateObject(e, t),
//             o.requireDocumentId(e, t),
//             this._add(r({}, e, t))
//           );
//         },
//         createOrReplace: function (t) {
//           var e = "createOrReplace";
//           return (
//             o.validateObject(e, t),
//             o.requireDocumentId(e, t),
//             this._add(r({}, e, t))
//           );
//         },
//         delete: function (t) {
//           return (
//             o.validateDocumentId("delete", t), this._add({ delete: { id: t } })
//           );
//         },
//         patch: function (t, e) {
//           var n = "function" == typeof e;
//           if (t instanceof c) return this._add({ patch: t.serialize() });
//           if (n) {
//             var r = e(new c(t, {}, this.client));
//             if (!(r instanceof c))
//               throw new Error(
//                 "function passed to `patch()` must return the patch"
//               );
//             return this._add({ patch: r.serialize() });
//           }
//           return this._add({ patch: d({ id: t }, e) });
//         },
//         transactionId: function (t) {
//           return t ? ((this.trxId = t), this) : this.trxId;
//         },
//         serialize: function () {
//           return this.operations.slice();
//         },
//         toJSON: function () {
//           return this.serialize();
//         },
//         commit: function (t) {
//           if (!this.client)
//             throw new Error(
//               "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
//             );
//           return this.client.mutate(
//             this.serialize(),
//             d({ transactionId: this.trxId }, l, t || {})
//           );
//         },
//         reset: function () {
//           return (this.operations = []), this;
//         },
//         _add: function (t) {
//           return this.operations.push(t), this;
//         },
//       }),
//         (t.exports = f);
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = encodeURIComponent;
//       t.exports = function (t) {
//         var e = t.query,
//           n = t.params,
//           d = void 0 === n ? {} : n,
//           o = t.options,
//           c = void 0 === o ? {} : o,
//           base = "?query=".concat(r(e)),
//           l = Object.keys(d).reduce(function (t, param) {
//             return ""
//               .concat(t, "&")
//               .concat(r("$".concat(param)), "=")
//               .concat(r(JSON.stringify(d[param])));
//           }, base);
//         return Object.keys(c).reduce(function (t, option) {
//           return c[option]
//             ? "".concat(t, "&").concat(r(option), "=").concat(r(c[option]))
//             : t;
//         }, l);
//       };
//     },
//     function (t, e, n) {
//       t.exports = n(411);
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var r = n(412),
//         d = n(413),
//         o = n(414),
//         c = n(205),
//         l = n(128),
//         f = (function () {
//           function t(t) {
//             (this._isScalar = !1), t && (this._subscribe = t);
//           }
//           return (
//             (t.prototype.lift = function (e) {
//               var n = new t();
//               return (n.source = this), (n.operator = e), n;
//             }),
//             (t.prototype.subscribe = function (t, e, n) {
//               var r = this.operator,
//                 o = d.toSubscriber(t, e, n);
//               if (
//                 (r
//                   ? o.add(r.call(o, this.source))
//                   : o.add(
//                       this.source ||
//                         (l.config.useDeprecatedSynchronousErrorHandling &&
//                           !o.syncErrorThrowable)
//                         ? this._subscribe(o)
//                         : this._trySubscribe(o)
//                     ),
//                 l.config.useDeprecatedSynchronousErrorHandling &&
//                   o.syncErrorThrowable &&
//                   ((o.syncErrorThrowable = !1), o.syncErrorThrown))
//               )
//                 throw o.syncErrorValue;
//               return o;
//             }),
//             (t.prototype._trySubscribe = function (t) {
//               try {
//                 return this._subscribe(t);
//               } catch (e) {
//                 l.config.useDeprecatedSynchronousErrorHandling &&
//                   ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
//                   r.canReportError(t) ? t.error(e) : console.warn(e);
//               }
//             }),
//             (t.prototype.forEach = function (t, e) {
//               var n = this;
//               return new (e = h(e))(function (e, r) {
//                 var d;
//                 d = n.subscribe(
//                   function (e) {
//                     try {
//                       t(e);
//                     } catch (t) {
//                       r(t), d && d.unsubscribe();
//                     }
//                   },
//                   r,
//                   e
//                 );
//               });
//             }),
//             (t.prototype._subscribe = function (t) {
//               var source = this.source;
//               return source && source.subscribe(t);
//             }),
//             (t.prototype[o.observable] = function () {
//               return this;
//             }),
//             (t.prototype.pipe = function () {
//               for (var t = [], e = 0; e < arguments.length; e++)
//                 t[e] = arguments[e];
//               return 0 === t.length ? this : c.pipeFromArray(t)(this);
//             }),
//             (t.prototype.toPromise = function (t) {
//               var e = this;
//               return new (t = h(t))(function (t, n) {
//                 var r;
//                 e.subscribe(
//                   function (t) {
//                     return (r = t);
//                   },
//                   function (t) {
//                     return n(t);
//                   },
//                   function () {
//                     return t(r);
//                   }
//                 );
//               });
//             }),
//             (t.create = function (e) {
//               return new t(e);
//             }),
//             t
//           );
//         })();
//       function h(t) {
//         if ((t || (t = l.config.Promise || Promise), !t))
//           throw new Error("no Promise impl found");
//         return t;
//       }
//       e.Observable = f;
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var r = n(415);
//       function d(t) {
//         return 0 === t.length
//           ? r.identity
//           : 1 === t.length
//           ? t[0]
//           : function (input) {
//               return t.reduce(function (t, e) {
//                 return e(t);
//               }, input);
//             };
//       }
//       (e.pipe = function () {
//         for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
//         return d(t);
//       }),
//         (e.pipeFromArray = d);
//     },
//     function (t, e) {
//       t.exports = function (t) {
//         return "https://docs.sanity.io/help/" + t;
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       t.exports = function (t) {
//         var e,
//           n = !1;
//         return function () {
//           return n || ((e = t.apply(void 0, arguments)), (n = !0)), e;
//         };
//       };
//     },
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       "use strict";
//       var r = function (t) {
//         return (
//           (function (t) {
//             return !!t && "object" == typeof t;
//           })(t) &&
//           !(function (t) {
//             var e = Object.prototype.toString.call(t);
//             return (
//               "[object RegExp]" === e ||
//               "[object Date]" === e ||
//               (function (t) {
//                 return t.$$typeof === d;
//               })(t)
//             );
//           })(t)
//         );
//       };
//       var d =
//         "function" == typeof Symbol && Symbol.for
//           ? Symbol.for("react.element")
//           : 60103;
//       function o(t, e) {
//         return !1 !== e.clone && e.isMergeableObject(t)
//           ? m(((n = t), Array.isArray(n) ? [] : {}), t, e)
//           : t;
//         var n;
//       }
//       function c(t, source, e) {
//         return t.concat(source).map(function (element) {
//           return o(element, e);
//         });
//       }
//       function l(t) {
//         return Object.keys(t).concat(
//           (function (t) {
//             return Object.getOwnPropertySymbols
//               ? Object.getOwnPropertySymbols(t).filter(function (symbol) {
//                   return Object.propertyIsEnumerable.call(t, symbol);
//                 })
//               : [];
//           })(t)
//         );
//       }
//       function f(object, t) {
//         try {
//           return t in object;
//         } catch (t) {
//           return !1;
//         }
//       }
//       function h(t, source, e) {
//         var n = {};
//         return (
//           e.isMergeableObject(t) &&
//             l(t).forEach(function (r) {
//               n[r] = o(t[r], e);
//             }),
//           l(source).forEach(function (r) {
//             (function (t, e) {
//               return (
//                 f(t, e) &&
//                 !(
//                   Object.hasOwnProperty.call(t, e) &&
//                   Object.propertyIsEnumerable.call(t, e)
//                 )
//               );
//             })(t, r) ||
//               (f(t, r) && e.isMergeableObject(source[r])
//                 ? (n[r] = (function (t, e) {
//                     if (!e.customMerge) return m;
//                     var n = e.customMerge(t);
//                     return "function" == typeof n ? n : m;
//                   })(r, e)(t[r], source[r], e))
//                 : (n[r] = o(source[r], e)));
//           }),
//           n
//         );
//       }
//       function m(t, source, e) {
//         ((e = e || {}).arrayMerge = e.arrayMerge || c),
//           (e.isMergeableObject = e.isMergeableObject || r),
//           (e.cloneUnlessOtherwiseSpecified = o);
//         var n = Array.isArray(source);
//         return n === Array.isArray(t)
//           ? n
//             ? e.arrayMerge(t, source, e)
//             : h(t, source, e)
//           : o(source, e);
//       }
//       m.all = function (t, e) {
//         if (!Array.isArray(t))
//           throw new Error("first argument should be an array");
//         return t.reduce(function (t, n) {
//           return m(t, n, e);
//         }, {});
//       };
//       var y = m;
//       t.exports = y;
//     },
//     function (t, e, n) {
//       var r = n(226)(function (t, e, n) {
//         return t + (n ? "-" : "") + e.toLowerCase();
//       });
//       t.exports = r;
//     },
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e) {
//       t.exports = (function (t) {
//         function e(r) {
//           if (n[r]) return n[r].exports;
//           var d = (n[r] = { i: r, l: !1, exports: {} });
//           return t[r].call(d.exports, d, d.exports, e), (d.l = !0), d.exports;
//         }
//         var n = {};
//         return (
//           (e.m = t),
//           (e.c = n),
//           (e.d = function (t, n, r) {
//             e.o(t, n) ||
//               Object.defineProperty(t, n, {
//                 configurable: !1,
//                 enumerable: !0,
//                 get: r,
//               });
//           }),
//           (e.n = function (t) {
//             var n =
//               t && t.__esModule
//                 ? function () {
//                     return t.default;
//                   }
//                 : function () {
//                     return t;
//                   };
//             return e.d(n, "a", n), n;
//           }),
//           (e.o = function (t, e) {
//             return Object.prototype.hasOwnProperty.call(t, e);
//           }),
//           (e.p = ""),
//           e((e.s = 0))
//         );
//       })([
//         function (t, e, n) {
//           "use strict";
//           var r =
//               "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
//                 ? function (t) {
//                     return typeof t;
//                   }
//                 : function (t) {
//                     return t &&
//                       "function" == typeof Symbol &&
//                       t.constructor === Symbol &&
//                       t !== Symbol.prototype
//                       ? "symbol"
//                       : typeof t;
//                   },
//             d = n(1);
//           t.exports = function (e, n) {
//             var i =
//                 !(arguments.length > 2 && void 0 !== arguments[2]) ||
//                 arguments[2],
//               a =
//                 "object" ===
//                   ("undefined" == typeof document
//                     ? "undefined"
//                     : r(document)) && "string" == typeof document.cookie,
//               s =
//                 "object" === (void 0 === e ? "undefined" : r(e)) &&
//                 "object" === (void 0 === n ? "undefined" : r(n)) &&
//                 void 0 !== t,
//               u = (!a && !s) || (a && s),
//               o = function (t) {
//                 if (s) {
//                   var r = e.headers.cookie || "";
//                   return (
//                     t &&
//                       (r = (r = n.getHeaders())["set-cookie"]
//                         ? r["set-cookie"]
//                             .map(function (t) {
//                               return t.split(";")[0];
//                             })
//                             .join(";")
//                         : ""),
//                     r
//                   );
//                 }
//                 if (a) return document.cookie || "";
//               },
//               c = function () {
//                 var t = n.getHeader("Set-Cookie");
//                 return (t = "string" == typeof t ? [t] : t) || [];
//               },
//               p = function (t) {
//                 return n.setHeader("Set-Cookie", t);
//               },
//               l = function (t, e) {
//                 if (!e) return t;
//                 try {
//                   return JSON.parse(t);
//                 } catch (e) {
//                   return t;
//                 }
//               },
//               f = {
//                 parseJSON: i,
//                 set: function () {
//                   var t =
//                       arguments.length > 0 && void 0 !== arguments[0]
//                         ? arguments[0]
//                         : "",
//                     e =
//                       arguments.length > 1 && void 0 !== arguments[1]
//                         ? arguments[1]
//                         : "",
//                     n =
//                       arguments.length > 2 && void 0 !== arguments[2]
//                         ? arguments[2]
//                         : { path: "/" };
//                   if (!u)
//                     if (
//                       ((e =
//                         "object" === (void 0 === e ? "undefined" : r(e))
//                           ? JSON.stringify(e)
//                           : e),
//                       s)
//                     ) {
//                       var i = c();
//                       i.push(d.serialize(t, e, n)), p(i);
//                     } else document.cookie = d.serialize(t, e, n);
//                 },
//                 setAll: function () {
//                   var t =
//                     arguments.length > 0 && void 0 !== arguments[0]
//                       ? arguments[0]
//                       : [];
//                   u ||
//                     (Array.isArray(t) &&
//                       t.forEach(function (t) {
//                         var e = t.name,
//                           n = void 0 === e ? "" : e,
//                           r = t.value,
//                           d = void 0 === r ? "" : r,
//                           i = t.opts,
//                           a = void 0 === i ? { path: "/" } : i;
//                         f.set(n, d, a);
//                       }));
//                 },
//                 get: function () {
//                   var t =
//                       arguments.length > 0 && void 0 !== arguments[0]
//                         ? arguments[0]
//                         : "",
//                     e =
//                       arguments.length > 1 && void 0 !== arguments[1]
//                         ? arguments[1]
//                         : { fromRes: !1, parseJSON: f.parseJSON };
//                   if (u) return "";
//                   var n = d.parse(o(e.fromRes))[t];
//                   return l(n, e.parseJSON);
//                 },
//                 getAll: function () {
//                   var t =
//                     arguments.length > 0 && void 0 !== arguments[0]
//                       ? arguments[0]
//                       : { fromRes: !1, parseJSON: f.parseJSON };
//                   if (u) return {};
//                   var e = d.parse(o(t.fromRes));
//                   for (var n in e) e[n] = l(e[n], t.parseJSON);
//                   return e;
//                 },
//                 remove: function () {
//                   var t =
//                       arguments.length > 0 && void 0 !== arguments[0]
//                         ? arguments[0]
//                         : "",
//                     e =
//                       arguments.length > 1 && void 0 !== arguments[1]
//                         ? arguments[1]
//                         : { path: "/" };
//                   u || ((e.expires = new Date(0)), f.set(t, "", e));
//                 },
//                 removeAll: function () {
//                   var t =
//                     arguments.length > 0 && void 0 !== arguments[0]
//                       ? arguments[0]
//                       : { path: "/" };
//                   if (!u) {
//                     var e = d.parse(o());
//                     for (var n in e) f.remove(n, t);
//                   }
//                 },
//                 nodeCookie: d,
//               };
//             return f;
//           };
//         },
//         function (t, e, n) {
//           "use strict";
//           function i(t, e) {
//             try {
//               return e(t);
//             } catch (e) {
//               return t;
//             }
//           }
//           (e.parse = function (t, e) {
//             if ("string" != typeof t)
//               throw new TypeError("argument str must be a string");
//             for (
//               var n = {}, r = e || {}, d = t.split(u), s = r.decode || a, o = 0;
//               o < d.length;
//               o++
//             ) {
//               var c = d[o],
//                 p = c.indexOf("=");
//               if (!(p < 0)) {
//                 var l = c.substr(0, p).trim(),
//                   f = c.substr(++p, c.length).trim();
//                 '"' == f[0] && (f = f.slice(1, -1)),
//                   null == n[l] && (n[l] = i(f, s));
//               }
//             }
//             return n;
//           }),
//             (e.serialize = function (t, e, n) {
//               var d = n || {},
//                 o = d.encode || s;
//               if ("function" != typeof o)
//                 throw new TypeError("option encode is invalid");
//               if (!r.test(t)) throw new TypeError("argument name is invalid");
//               var i = o(e);
//               if (i && !r.test(i))
//                 throw new TypeError("argument val is invalid");
//               var a = t + "=" + i;
//               if (null != d.maxAge) {
//                 var u = d.maxAge - 0;
//                 if (isNaN(u)) throw new Error("maxAge should be a Number");
//                 a += "; Max-Age=" + Math.floor(u);
//               }
//               if (d.domain) {
//                 if (!r.test(d.domain))
//                   throw new TypeError("option domain is invalid");
//                 a += "; Domain=" + d.domain;
//               }
//               if (d.path) {
//                 if (!r.test(d.path))
//                   throw new TypeError("option path is invalid");
//                 a += "; Path=" + d.path;
//               }
//               if (d.expires) {
//                 if ("function" != typeof d.expires.toUTCString)
//                   throw new TypeError("option expires is invalid");
//                 a += "; Expires=" + d.expires.toUTCString();
//               }
//               if (
//                 (d.httpOnly && (a += "; HttpOnly"),
//                 d.secure && (a += "; Secure"),
//                 d.sameSite)
//               )
//                 switch (
//                   "string" == typeof d.sameSite
//                     ? d.sameSite.toLowerCase()
//                     : d.sameSite
//                 ) {
//                   case !0:
//                     a += "; SameSite=Strict";
//                     break;
//                   case "lax":
//                     a += "; SameSite=Lax";
//                     break;
//                   case "strict":
//                     a += "; SameSite=Strict";
//                     break;
//                   case "none":
//                     a += "; SameSite=None";
//                     break;
//                   default:
//                     throw new TypeError("option sameSite is invalid");
//                 }
//               return a;
//             });
//           var a = decodeURIComponent,
//             s = encodeURIComponent,
//             u = /; */,
//             r = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
//         },
//       ]);
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       const r = {
//         name: "SanityImage",
//         functional: !0,
//         props: {
//           assetId: { type: String, required: !0 },
//           projectId: { type: String, default: null },
//           dataset: { type: String, default: null },
//           auto: { type: String },
//           bg: { type: String },
//           blur: {
//             type: [Number, String],
//             validator: (t) => Number(t) >= 0 && Number(t) <= 100,
//           },
//           crop: {
//             type: String,
//             validator: (t) =>
//               [
//                 "top",
//                 "bottom",
//                 "left",
//                 "right",
//                 "center",
//                 "focalpoint",
//                 "entropy",
//               ].includes(t),
//           },
//           dl: { type: String },
//           dpr: {
//             type: [Number, String],
//             validator: (t) => [1, 2, 3].includes(Number(t)),
//           },
//           fit: {
//             type: String,
//             validator: (t) =>
//               [
//                 "clip",
//                 "crop",
//                 "fill",
//                 "fillmax",
//                 "max",
//                 "scale",
//                 "min",
//               ].includes(t),
//           },
//           flip: {
//             type: String,
//             validator: (t) => ["h", "v", "hv"].includes(t),
//           },
//           fm: {
//             type: String,
//             validator: (t) => ["jpg", "pjpg", "png", "webp"].includes(t),
//           },
//           fpX: {
//             type: [Number, String],
//             validator: (t) => Number(t) <= 1 && Number(t) >= 0,
//           },
//           fpY: {
//             type: [Number, String],
//             validator: (t) => Number(t) <= 1 && Number(t) >= 0,
//           },
//           h: { type: [Number, String] },
//           invert: { type: Boolean },
//           maxH: { type: [Number, String] },
//           maxW: { type: [Number, String] },
//           minH: { type: [Number, String] },
//           minW: { type: [Number, String] },
//           or: {
//             type: [Number, String],
//             validator: (t) => [0, 90, 180, 270].includes(Number(t)),
//           },
//           q: {
//             type: [Number, String],
//             validator: (t) => Number(t) >= 0 && Number(t) <= 100,
//           },
//           rect: { type: String },
//           sat: { type: [Number, String] },
//           sharpen: {
//             type: [Number, String],
//             validator: (t) => Number(t) >= 0 && Number(t) <= 100,
//           },
//           w: { type: [Number, String] },
//         },
//         render(t, { props: e, data: data, parent: n, scopedSlots: r }) {
//           const d = [
//               "auto",
//               "bg",
//               "blur",
//               "crop",
//               "dl",
//               "dpr",
//               "fit",
//               "flip",
//               "fm",
//               "fpX",
//               "fpY",
//               "h",
//               "invert",
//               "maxH",
//               "maxW",
//               "minH",
//               "minW",
//               "or",
//               "q",
//               "rect",
//               "sat",
//               "sharpen",
//               "w",
//             ]
//               .map((t) => {
//                 const n = t.replace(/[A-Z]/, (t) => "-" + t.toLowerCase());
//                 return e[t] ? `${n}=${e[t]}` : void 0;
//               })
//               .filter(Boolean)
//               .join("&"),
//             o = e.assetId.split("-").slice(1),
//             c = o.pop(),
//             l = `https://cdn.sanity.io/images/${
//               e.projectId || (n && n.$sanity.config.projectId)
//             }/${
//               e.dataset ||
//               (n.$sanity && n.$sanity.config.dataset) ||
//               "production"
//             }/${o.join("-")}.${c}${d ? "?" + d : ""}`,
//             f = () => t("img", { ...data, attrs: { ...data.attrs, src: l } });
//           return (r.default && r.default({ src: l })) || f();
//         },
//       };
//       (e.SanityImage = r), (e.default = r);
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       function r(t) {
//         return t && "object" == typeof t && "default" in t ? t : { default: t };
//       }
//       const d = r(n(462)),
//         o = {
//           types: { span: "span", image: "img" },
//           marks: { strong: "strong", em: "em", link: "a" },
//           styles: {
//             h1: "h1",
//             h2: "h2",
//             h3: "h3",
//             h4: "h4",
//             h5: "h5",
//             h6: "h6",
//             normal: "p",
//             blockquote: "blockquote",
//           },
//           listItem: "li",
//           container: "div",
//         };
//       let c = 1;
//       function l(t) {
//         if (!t) return {};
//         const e = Object.entries(t).reduce(
//           (t, [e, n]) => {
//             switch (!0) {
//               case ["_key", "key"].includes(e):
//                 return (t.key = n || null), t;
//               case ["class", "href", "src"].includes(e):
//                 return (t.attrs[e] = n), t;
//               case ["_type"].includes(e):
//                 return t;
//               default:
//                 return (t.props[e] = n), t;
//             }
//           },
//           { props: {}, attrs: {} }
//         );
//         return (e.props = { level: c, ...e.props }), e;
//       }
//       function f(t, e) {
//         if (!t) return;
//         const { _type: n, listItem: r } = t;
//         return r
//           ? e.listItem || "li"
//           : n && n in e.types
//           ? e.types[n]
//           : n && n in e.marks
//           ? e.marks[n]
//           : void 0;
//       }
//       function h(t, content, [mark, ...e] = [], n = o, r = []) {
//         if (!mark) return content;
//         const d =
//           mark in n.marks
//             ? { _type: mark, _key: "" }
//             : r.find((t) => t._key === mark);
//         return t(f(d, n) || "span", l(d), [h(t, content, e, n, r)]);
//       }
//       function m(t, e) {
//         const { length: n } = t;
//         if (!e.level) return t.push(e), t;
//         const { _type: r, children: d, level: o } = t[n - 1] || {};
//         return (
//           "list" === r && d
//             ? o === e.level
//               ? d.push(e)
//               : m(d, e)
//             : t.push({ _type: "list", children: [e], level: e.level }),
//           t
//         );
//       }
//       function y(t, e, n, r = !1) {
//         return (r ? e : e.reduce(m, [])).map((e) => {
//           const r = (function (t, { style: style, listItem: e }, n, r) {
//             const d = style ? style.match(/^h(\d)$/) : [];
//             return (
//               !e && d && d.length > 1 && (c = Number(d[1])),
//               !e && style && n.styles[style] ? t(n.styles[style], {}, r) : r
//             );
//           })(
//             t,
//             e,
//             n,
//             (function (t, e, content, n) {
//               const r = f(e, n);
//               return r ? [t(r, l(e), content)] : content;
//             })(
//               t,
//               e,
//               "block" === e._type
//                 ? (e.children || []).map((r) =>
//                     h(t, r.text, r.marks, n, e.markDefs)
//                   )
//                 : [],
//               n
//             )
//           );
//           return r;
//         });
//       }
//       const v = {
//         name: "SanityContent",
//         functional: !0,
//         props: {
//           blocks: { type: Array, default: () => [] },
//           serializers: { type: Object, default: () => ({}) },
//           renderContainerOnSingleChild: { type: Boolean, default: !1 },
//         },
//         render(t, { props: e, data: data }) {
//           const n = d.default(e.serializers, o);
//           return (
//             (n.types.list = n.types.list || {
//               name: "ListComponent",
//               functional: !0,
//               props: { children: { type: Array, default: () => [] } },
//               render: (h2, { props: t }) =>
//                 h2(
//                   t.children.length && "number" === t.children[0].listItem
//                     ? "ol"
//                     : "ul",
//                   {},
//                   y(h2, t.children, n, !0)
//                 ),
//             }),
//             t(n.container, data, y(t, e.blocks || [], n))
//           );
//         },
//       };
//       (e.SanityContent = v), (e.default = v);
//     },
//     function (t, e, n) {
//       var r;
//       !(function () {
//         function d(a, b, t) {
//           return a.call.apply(a.bind, arguments);
//         }
//         function o(a, b, t) {
//           if (!a) throw Error();
//           if (2 < arguments.length) {
//             var e = Array.prototype.slice.call(arguments, 2);
//             return function () {
//               var t = Array.prototype.slice.call(arguments);
//               return Array.prototype.unshift.apply(t, e), a.apply(b, t);
//             };
//           }
//           return function () {
//             return a.apply(b, arguments);
//           };
//         }
//         function p(a, b, t) {
//           return (p =
//             Function.prototype.bind &&
//             -1 != Function.prototype.bind.toString().indexOf("native code")
//               ? d
//               : o).apply(null, arguments);
//         }
//         var q =
//           Date.now ||
//           function () {
//             return +new Date();
//           };
//         function c(a, b) {
//           (this.a = a), (this.o = b || a), (this.c = this.o.document);
//         }
//         var l = !!window.FontFace;
//         function f(a, b, t, e) {
//           if (((b = a.c.createElement(b)), t))
//             for (var n in t)
//               t.hasOwnProperty(n) &&
//                 ("style" == n
//                   ? (b.style.cssText = t[n])
//                   : b.setAttribute(n, t[n]));
//           return e && b.appendChild(a.c.createTextNode(e)), b;
//         }
//         function u(a, b, t) {
//           (a = a.c.getElementsByTagName(b)[0]) ||
//             (a = document.documentElement),
//             a.insertBefore(t, a.lastChild);
//         }
//         function h(a) {
//           a.parentNode && a.parentNode.removeChild(a);
//         }
//         function m(a, b, t) {
//           (b = b || []), (t = t || []);
//           for (var e = a.className.split(/\s+/), n = 0; n < b.length; n += 1) {
//             for (var r = !1, g = 0; g < e.length; g += 1)
//               if (b[n] === e[g]) {
//                 r = !0;
//                 break;
//               }
//             r || e.push(b[n]);
//           }
//           for (b = [], n = 0; n < e.length; n += 1) {
//             for (r = !1, g = 0; g < t.length; g += 1)
//               if (e[n] === t[g]) {
//                 r = !0;
//                 break;
//               }
//             r || b.push(e[n]);
//           }
//           a.className = b
//             .join(" ")
//             .replace(/\s+/g, " ")
//             .replace(/^\s+|\s+$/, "");
//         }
//         function y(a, b) {
//           for (
//             var t = a.className.split(/\s+/), e = 0, n = t.length;
//             e < n;
//             e++
//           )
//             if (t[e] == b) return !0;
//           return !1;
//         }
//         function v(a, b, t) {
//           function e() {
//             d && n && r && (d(g), (d = null));
//           }
//           b = f(a, "link", { rel: "stylesheet", href: b, media: "all" });
//           var n = !1,
//             r = !0,
//             g = null,
//             d = t || null;
//           l
//             ? ((b.onload = function () {
//                 (n = !0), e();
//               }),
//               (b.onerror = function () {
//                 (n = !0), (g = Error("Stylesheet failed to load")), e();
//               }))
//             : setTimeout(function () {
//                 (n = !0), e();
//               }, 0),
//             u(a, "head", b);
//         }
//         function C(a, b, t, e) {
//           var n = a.c.getElementsByTagName("head")[0];
//           if (n) {
//             var r = f(a, "script", { src: b }),
//               g = !1;
//             return (
//               (r.onload = r.onreadystatechange =
//                 function () {
//                   g ||
//                     (this.readyState &&
//                       "loaded" != this.readyState &&
//                       "complete" != this.readyState) ||
//                     ((g = !0),
//                     t && t(null),
//                     (r.onload = r.onreadystatechange = null),
//                     "HEAD" == r.parentNode.tagName && n.removeChild(r));
//                 }),
//               n.appendChild(r),
//               setTimeout(function () {
//                 g || ((g = !0), t && t(Error("Script load timeout")));
//               }, e || 5e3),
//               r
//             );
//           }
//           return null;
//         }
//         function P() {
//           (this.a = 0), (this.c = null);
//         }
//         function _(a) {
//           return (
//             a.a++,
//             function () {
//               a.a--, w(a);
//             }
//           );
//         }
//         function A(a, b) {
//           (a.c = b), w(a);
//         }
//         function w(a) {
//           0 == a.a && a.c && (a.c(), (a.c = null));
//         }
//         function F(a) {
//           this.a = a || "-";
//         }
//         function O(a, b) {
//           (this.c = a), (this.f = 4), (this.a = "n");
//           var t = (b || "n4").match(/^([nio])([1-9])$/i);
//           t && ((this.a = t[1]), (this.f = parseInt(t[2], 10)));
//         }
//         function k(a) {
//           var b = [];
//           a = a.split(/,\s*/);
//           for (var t = 0; t < a.length; t++) {
//             var e = a[t].replace(/['"]/g, "");
//             -1 != e.indexOf(" ") || /^\d/.test(e)
//               ? b.push("'" + e + "'")
//               : b.push(e);
//           }
//           return b.join(",");
//         }
//         function S(a) {
//           return a.a + a.f;
//         }
//         function E(a) {
//           var b = "normal";
//           return (
//             "o" === a.a ? (b = "oblique") : "i" === a.a && (b = "italic"), b
//           );
//         }
//         function I(a) {
//           var b = 4,
//             t = "n",
//             e = null;
//           return (
//             a &&
//               ((e = a.match(/(normal|oblique|italic)/i)) &&
//                 e[1] &&
//                 (t = e[1].substr(0, 1).toLowerCase()),
//               (e = a.match(/([1-9]00|normal|bold)/i)) &&
//                 e[1] &&
//                 (/bold/i.test(e[1])
//                   ? (b = 7)
//                   : /[1-9]00/.test(e[1]) &&
//                     (b = parseInt(e[1].substr(0, 1), 10)))),
//             t + b
//           );
//         }
//         function x(a, b) {
//           (this.c = a),
//             (this.f = a.o.document.documentElement),
//             (this.h = b),
//             (this.a = new F("-")),
//             (this.j = !1 !== b.events),
//             (this.g = !1 !== b.classes);
//         }
//         function T(a) {
//           if (a.g) {
//             var b = y(a.f, a.a.c("wf", "active")),
//               t = [],
//               e = [a.a.c("wf", "loading")];
//             b || t.push(a.a.c("wf", "inactive")), m(a.f, t, e);
//           }
//           V(a, "inactive");
//         }
//         function V(a, b, t) {
//           a.j && a.h[b] && (t ? a.h[b](t.c, S(t)) : a.h[b]());
//         }
//         function U() {
//           this.c = {};
//         }
//         function D(a, b) {
//           (this.c = a),
//             (this.f = b),
//             (this.a = f(this.c, "span", { "aria-hidden": "true" }, this.f));
//         }
//         function j(a) {
//           u(a.c, "body", a.a);
//         }
//         function N(a) {
//           return (
//             "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" +
//             k(a.c) +
//             ";font-style:" +
//             E(a) +
//             ";font-weight:" +
//             a.f +
//             "00;"
//           );
//         }
//         function R(a, b, t, e, n, r) {
//           (this.g = a),
//             (this.j = b),
//             (this.a = e),
//             (this.c = t),
//             (this.f = n || 3e3),
//             (this.h = r || void 0);
//         }
//         function M(a, b, t, e, n, r, g) {
//           (this.v = a),
//             (this.B = b),
//             (this.c = t),
//             (this.a = e),
//             (this.s = g || "BESbswy"),
//             (this.f = {}),
//             (this.w = n || 3e3),
//             (this.u = r || null),
//             (this.m = this.j = this.h = this.g = null),
//             (this.g = new D(this.c, this.s)),
//             (this.h = new D(this.c, this.s)),
//             (this.j = new D(this.c, this.s)),
//             (this.m = new D(this.c, this.s)),
//             (a = N((a = new O(this.a.c + ",serif", S(this.a))))),
//             (this.g.a.style.cssText = a),
//             (a = N((a = new O(this.a.c + ",sans-serif", S(this.a))))),
//             (this.h.a.style.cssText = a),
//             (a = N((a = new O("serif", S(this.a))))),
//             (this.j.a.style.cssText = a),
//             (a = N((a = new O("sans-serif", S(this.a))))),
//             (this.m.a.style.cssText = a),
//             j(this.g),
//             j(this.h),
//             j(this.j),
//             j(this.m);
//         }
//         (F.prototype.c = function (a) {
//           for (var b = [], t = 0; t < arguments.length; t++)
//             b.push(arguments[t].replace(/[\W_]+/g, "").toLowerCase());
//           return b.join(this.a);
//         }),
//           (R.prototype.start = function () {
//             var a = this.c.o.document,
//               b = this,
//               t = q(),
//               e = new Promise(function (e, n) {
//                 !(function r() {
//                   q() - t >= b.f
//                     ? n()
//                     : a.fonts
//                         .load(
//                           (function (a) {
//                             return E(a) + " " + a.f + "00 300px " + k(a.c);
//                           })(b.a),
//                           b.h
//                         )
//                         .then(
//                           function (a) {
//                             1 <= a.length ? e() : setTimeout(r, 25);
//                           },
//                           function () {
//                             n();
//                           }
//                         );
//                 })();
//               }),
//               n = null,
//               r = new Promise(function (a, t) {
//                 n = setTimeout(t, b.f);
//               });
//             Promise.race([r, e]).then(
//               function () {
//                 n && (clearTimeout(n), (n = null)), b.g(b.a);
//               },
//               function () {
//                 b.j(b.a);
//               }
//             );
//           });
//         var B = { D: "serif", C: "sans-serif" },
//           L = null;
//         function G() {
//           if (null === L) {
//             var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
//               window.navigator.userAgent
//             );
//             L =
//               !!a &&
//               (536 > parseInt(a[1], 10) ||
//                 (536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10)));
//           }
//           return L;
//         }
//         function z(a, b, t) {
//           for (var e in B)
//             if (B.hasOwnProperty(e) && b === a.f[B[e]] && t === a.f[B[e]])
//               return !0;
//           return !1;
//         }
//         function H(a) {
//           var t,
//             b = a.g.a.offsetWidth,
//             e = a.h.a.offsetWidth;
//           (t = b === a.f.serif && e === a.f["sans-serif"]) ||
//             (t = G() && z(a, b, e)),
//             t
//               ? q() - a.A >= a.w
//                 ? G() &&
//                   z(a, b, e) &&
//                   (null === a.u || a.u.hasOwnProperty(a.a.c))
//                   ? J(a, a.v)
//                   : J(a, a.B)
//                 : (function (a) {
//                     setTimeout(
//                       p(function () {
//                         H(this);
//                       }, a),
//                       50
//                     );
//                   })(a)
//               : J(a, a.v);
//         }
//         function J(a, b) {
//           setTimeout(
//             p(function () {
//               h(this.g.a), h(this.h.a), h(this.j.a), h(this.m.a), b(this.a);
//             }, a),
//             0
//           );
//         }
//         function W(a, b, t) {
//           (this.c = a),
//             (this.a = b),
//             (this.f = 0),
//             (this.m = this.j = !1),
//             (this.s = t);
//         }
//         M.prototype.start = function () {
//           (this.f.serif = this.j.a.offsetWidth),
//             (this.f["sans-serif"] = this.m.a.offsetWidth),
//             (this.A = q()),
//             H(this);
//         };
//         var Q = null;
//         function $(a) {
//           0 == --a.f &&
//             a.j &&
//             (a.m
//               ? ((a = a.a).g &&
//                   m(
//                     a.f,
//                     [a.a.c("wf", "active")],
//                     [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]
//                   ),
//                 V(a, "active"))
//               : T(a.a));
//         }
//         function Y(a) {
//           (this.j = a),
//             (this.a = new U()),
//             (this.h = 0),
//             (this.f = this.g = !0);
//         }
//         function K(a, b, t, e, n) {
//           var r = 0 == --a.h;
//           (a.f || a.g) &&
//             setTimeout(function () {
//               var a = n || null,
//                 d = e || {};
//               if (0 === t.length && r) T(b.a);
//               else {
//                 (b.f += t.length), r && (b.j = r);
//                 var o,
//                   c = [];
//                 for (o = 0; o < t.length; o++) {
//                   var l = t[o],
//                     f = d[l.c],
//                     h = b.a,
//                     y = l;
//                   if (
//                     (h.g &&
//                       m(h.f, [h.a.c("wf", y.c, S(y).toString(), "loading")]),
//                     V(h, "fontloading", y),
//                     (h = null),
//                     null === Q)
//                   )
//                     if (window.FontFace) {
//                       y = /Gecko.*Firefox\/(\d+)/.exec(
//                         window.navigator.userAgent
//                       );
//                       var v =
//                         /OS X.*Version\/10\..*Safari/.exec(
//                           window.navigator.userAgent
//                         ) && /Apple/.exec(window.navigator.vendor);
//                       Q = y ? 42 < parseInt(y[1], 10) : !v;
//                     } else Q = !1;
//                   (h = Q
//                     ? new R(p(b.g, b), p(b.h, b), b.c, l, b.s, f)
//                     : new M(p(b.g, b), p(b.h, b), b.c, l, b.s, a, f)),
//                     c.push(h);
//                 }
//                 for (o = 0; o < c.length; o++) c[o].start();
//               }
//             }, 0);
//         }
//         function X(a, b) {
//           (this.c = a), (this.a = b);
//         }
//         function Z(a, b) {
//           (this.c = a), (this.a = b);
//         }
//         function tt(a, b) {
//           (this.c = a || et), (this.a = []), (this.f = []), (this.g = b || "");
//         }
//         (W.prototype.g = function (a) {
//           var b = this.a;
//           b.g &&
//             m(
//               b.f,
//               [b.a.c("wf", a.c, S(a).toString(), "active")],
//               [
//                 b.a.c("wf", a.c, S(a).toString(), "loading"),
//                 b.a.c("wf", a.c, S(a).toString(), "inactive"),
//               ]
//             ),
//             V(b, "fontactive", a),
//             (this.m = !0),
//             $(this);
//         }),
//           (W.prototype.h = function (a) {
//             var b = this.a;
//             if (b.g) {
//               var t = y(b.f, b.a.c("wf", a.c, S(a).toString(), "active")),
//                 e = [],
//                 n = [b.a.c("wf", a.c, S(a).toString(), "loading")];
//               t || e.push(b.a.c("wf", a.c, S(a).toString(), "inactive")),
//                 m(b.f, e, n);
//             }
//             V(b, "fontinactive", a), $(this);
//           }),
//           (Y.prototype.load = function (a) {
//             (this.c = new c(this.j, a.context || this.j)),
//               (this.g = !1 !== a.events),
//               (this.f = !1 !== a.classes),
//               (function (a, b, t) {
//                 var e = [],
//                   n = t.timeout;
//                 !(function (a) {
//                   a.g && m(a.f, [a.a.c("wf", "loading")]), V(a, "loading");
//                 })(b);
//                 e = (function (a, b, t) {
//                   var e,
//                     n = [];
//                   for (e in b)
//                     if (b.hasOwnProperty(e)) {
//                       var r = a.c[e];
//                       r && n.push(r(b[e], t));
//                     }
//                   return n;
//                 })(a.a, t, a.c);
//                 var r = new W(a.c, b, n);
//                 for (a.h = e.length, b = 0, t = e.length; b < t; b++)
//                   e[b].load(function (b, t, e) {
//                     K(a, r, b, t, e);
//                   });
//               })(this, new x(this.c, a), a);
//           }),
//           (X.prototype.load = function (a) {
//             function b() {
//               if (r["__mti_fntLst" + e]) {
//                 var t,
//                   n = r["__mti_fntLst" + e](),
//                   d = [];
//                 if (n)
//                   for (var o = 0; o < n.length; o++) {
//                     var c = n[o].fontfamily;
//                     null != n[o].fontStyle && null != n[o].fontWeight
//                       ? ((t = n[o].fontStyle + n[o].fontWeight),
//                         d.push(new O(c, t)))
//                       : d.push(new O(c));
//                   }
//                 a(d);
//               } else
//                 setTimeout(function () {
//                   b();
//                 }, 50);
//             }
//             var t = this,
//               e = t.a.projectId,
//               n = t.a.version;
//             if (e) {
//               var r = t.c.o;
//               C(
//                 this.c,
//                 (t.a.api || "https://fast.fonts.net/jsapi") +
//                   "/" +
//                   e +
//                   ".js" +
//                   (n ? "?v=" + n : ""),
//                 function (n) {
//                   n
//                     ? a([])
//                     : ((r["__MonotypeConfiguration__" + e] = function () {
//                         return t.a;
//                       }),
//                       b());
//                 }
//               ).id = "__MonotypeAPIScript__" + e;
//             } else a([]);
//           }),
//           (Z.prototype.load = function (a) {
//             var b,
//               t,
//               e = this.a.urls || [],
//               n = this.a.families || [],
//               r = this.a.testStrings || {},
//               g = new P();
//             for (b = 0, t = e.length; b < t; b++) v(this.c, e[b], _(g));
//             var d = [];
//             for (b = 0, t = n.length; b < t; b++)
//               if ((e = n[b].split(":"))[1])
//                 for (var o = e[1].split(","), c = 0; c < o.length; c += 1)
//                   d.push(new O(e[0], o[c]));
//               else d.push(new O(e[0]));
//             A(g, function () {
//               a(d, r);
//             });
//           });
//         var et = "https://fonts.googleapis.com/css";
//         function nt(a) {
//           (this.f = a), (this.a = []), (this.c = {});
//         }
//         var at = {
//             latin: "BESbswy",
//             "latin-ext": "çöüğş",
//             cyrillic: "йяЖ",
//             greek: "αβΣ",
//             khmer: "កខគ",
//             Hanuman: "កខគ",
//           },
//           it = {
//             thin: "1",
//             extralight: "2",
//             "extra-light": "2",
//             ultralight: "2",
//             "ultra-light": "2",
//             light: "3",
//             regular: "4",
//             book: "4",
//             medium: "5",
//             "semi-bold": "6",
//             semibold: "6",
//             "demi-bold": "6",
//             demibold: "6",
//             bold: "7",
//             "extra-bold": "8",
//             extrabold: "8",
//             "ultra-bold": "8",
//             ultrabold: "8",
//             black: "9",
//             heavy: "9",
//             l: "3",
//             r: "4",
//             b: "7",
//           },
//           ot = { i: "i", italic: "i", n: "n", normal: "n" },
//           ct =
//             /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
//         function ut(a, b) {
//           (this.c = a), (this.a = b);
//         }
//         var st = { Arimo: !0, Cousine: !0, Tinos: !0 };
//         function lt(a, b) {
//           (this.c = a), (this.a = b);
//         }
//         function ft(a, b) {
//           (this.c = a), (this.f = b), (this.a = []);
//         }
//         (ut.prototype.load = function (a) {
//           var b = new P(),
//             t = this.c,
//             e = new tt(this.a.api, this.a.text),
//             n = this.a.families;
//           !(function (a, b) {
//             for (var t = b.length, e = 0; e < t; e++) {
//               var n = b[e].split(":");
//               3 == n.length && a.f.push(n.pop());
//               var r = "";
//               2 == n.length && "" != n[1] && (r = ":"), a.a.push(n.join(r));
//             }
//           })(e, n);
//           var r = new nt(n);
//           !(function (a) {
//             for (var b = a.f.length, t = 0; t < b; t++) {
//               var e = a.f[t].split(":"),
//                 n = e[0].replace(/\+/g, " "),
//                 r = ["n4"];
//               if (2 <= e.length) {
//                 var g;
//                 if (((g = []), (d = e[1])))
//                   for (
//                     var d, o = (d = d.split(",")).length, c = 0;
//                     c < o;
//                     c++
//                   ) {
//                     var l;
//                     if ((l = d[c]).match(/^[\w-]+$/))
//                       if (null == (f = ct.exec(l.toLowerCase()))) l = "";
//                       else {
//                         if (
//                           ((l = null == (l = f[2]) || "" == l ? "n" : ot[l]),
//                           null == (f = f[1]) || "" == f)
//                         )
//                           f = "4";
//                         else var f = it[f] || (isNaN(f) ? "4" : f.substr(0, 1));
//                         l = [l, f].join("");
//                       }
//                     else l = "";
//                     l && g.push(l);
//                   }
//                 0 < g.length && (r = g),
//                   3 == e.length &&
//                     ((g = []),
//                     0 < (e = (e = e[2]) ? e.split(",") : g).length &&
//                       (e = at[e[0]]) &&
//                       (a.c[n] = e));
//               }
//               for (
//                 a.c[n] || ((e = at[n]) && (a.c[n] = e)), e = 0;
//                 e < r.length;
//                 e += 1
//               )
//                 a.a.push(new O(n, r[e]));
//             }
//           })(r),
//             v(
//               t,
//               (function (a) {
//                 if (0 == a.a.length) throw Error("No fonts to load!");
//                 if (-1 != a.c.indexOf("kit=")) return a.c;
//                 for (var b = a.a.length, t = [], e = 0; e < b; e++)
//                   t.push(a.a[e].replace(/ /g, "+"));
//                 return (
//                   (b = a.c + "?family=" + t.join("%7C")),
//                   0 < a.f.length && (b += "&subset=" + a.f.join(",")),
//                   0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g)),
//                   b
//                 );
//               })(e),
//               _(b)
//             ),
//             A(b, function () {
//               a(r.a, r.c, st);
//             });
//         }),
//           (lt.prototype.load = function (a) {
//             var b = this.a.id,
//               t = this.c.o;
//             b
//               ? C(
//                   this.c,
//                   (this.a.api || "https://use.typekit.net") + "/" + b + ".js",
//                   function (b) {
//                     if (b) a([]);
//                     else if (
//                       t.Typekit &&
//                       t.Typekit.config &&
//                       t.Typekit.config.fn
//                     ) {
//                       b = t.Typekit.config.fn;
//                       for (var e = [], n = 0; n < b.length; n += 2)
//                         for (
//                           var g = b[n], r = b[n + 1], d = 0;
//                           d < r.length;
//                           d++
//                         )
//                           e.push(new O(g, r[d]));
//                       try {
//                         t.Typekit.load({ events: !1, classes: !1, async: !0 });
//                       } catch (t) {}
//                       a(e);
//                     }
//                   },
//                   2e3
//                 )
//               : a([]);
//           }),
//           (ft.prototype.load = function (a) {
//             var b = this.f.id,
//               t = this.c.o,
//               e = this;
//             b
//               ? (t.__webfontfontdeckmodule__ ||
//                   (t.__webfontfontdeckmodule__ = {}),
//                 (t.__webfontfontdeckmodule__[b] = function (b, t) {
//                   for (var g = 0, n = t.fonts.length; g < n; ++g) {
//                     var r = t.fonts[g];
//                     e.a.push(
//                       new O(
//                         r.name,
//                         I("font-weight:" + r.weight + ";font-style:" + r.style)
//                       )
//                     );
//                   }
//                   a(e.a);
//                 }),
//                 C(
//                   this.c,
//                   (this.f.api || "https://f.fontdeck.com/s/css/js/") +
//                     (function (a) {
//                       return a.o.location.hostname || a.a.location.hostname;
//                     })(this.c) +
//                     "/" +
//                     b +
//                     ".js",
//                   function (b) {
//                     b && a([]);
//                   }
//                 ))
//               : a([]);
//           });
//         var pt = new Y(window);
//         (pt.a.c.custom = function (a, b) {
//           return new Z(b, a);
//         }),
//           (pt.a.c.fontdeck = function (a, b) {
//             return new ft(b, a);
//           }),
//           (pt.a.c.monotype = function (a, b) {
//             return new X(b, a);
//           }),
//           (pt.a.c.typekit = function (a, b) {
//             return new lt(b, a);
//           }),
//           (pt.a.c.google = function (a, b) {
//             return new ut(b, a);
//           });
//         var ht = { load: p(pt.load, pt) };
//         void 0 ===
//           (r = function () {
//             return ht;
//           }.call(e, n, e, t)) || (t.exports = r);
//       })();
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(2);
//       function d(t) {
//         return (
//           (d =
//             "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
//               ? function (t) {
//                   return typeof t;
//                 }
//               : function (t) {
//                   return t &&
//                     "function" == typeof Symbol &&
//                     t.constructor === Symbol &&
//                     t !== Symbol.prototype
//                     ? "symbol"
//                     : typeof t;
//                 }),
//           d(t)
//         );
//       }
//       function o(t, e, n) {
//         return (
//           e in t
//             ? Object.defineProperty(t, e, {
//                 value: n,
//                 enumerable: !0,
//                 configurable: !0,
//                 writable: !0,
//               })
//             : (t[e] = n),
//           t
//         );
//       }
//       function c(object, t) {
//         var e = Object.keys(object);
//         if (Object.getOwnPropertySymbols) {
//           var n = Object.getOwnPropertySymbols(object);
//           t &&
//             (n = n.filter(function (t) {
//               return Object.getOwnPropertyDescriptor(object, t).enumerable;
//             })),
//             e.push.apply(e, n);
//         }
//         return e;
//       }
//       function l(t) {
//         for (var i = 1; i < arguments.length; i++) {
//           var source = null != arguments[i] ? arguments[i] : {};
//           i % 2
//             ? c(Object(source), !0).forEach(function (e) {
//                 o(t, e, source[e]);
//               })
//             : Object.getOwnPropertyDescriptors
//             ? Object.defineProperties(
//                 t,
//                 Object.getOwnPropertyDescriptors(source)
//               )
//             : c(Object(source)).forEach(function (e) {
//                 Object.defineProperty(
//                   t,
//                   e,
//                   Object.getOwnPropertyDescriptor(source, e)
//                 );
//               });
//         }
//         return t;
//       }
//       var f = function (t) {
//           return "function" == typeof t;
//         },
//         h = function (t) {
//           return t && "object" === d(t) && !Array.isArray(t);
//         },
//         m = function t(e) {
//           for (
//             var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), d = 1;
//             d < n;
//             d++
//           )
//             r[d - 1] = arguments[d];
//           if (!r.length) return e;
//           var source = r.shift();
//           if (h(e) && h(source)) {
//             for (var c in source)
//               h(source[c])
//                 ? (e[c] || Object.assign(e, o({}, c, {})), t(e[c], source[c]))
//                 : Object.assign(e, o({}, c, source[c]));
//             return t.apply(void 0, [e].concat(r));
//           }
//         },
//         y = function () {
//           return "undefined" != typeof window && "undefined" != typeof document;
//         },
//         v = function (text) {
//           y();
//         };
//       function C() {
//         var base =
//             arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
//           t = (
//             arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
//           ).split("/"),
//           e = base.split("/");
//         return (
//           "" === t[0] && "/" === base[base.length - 1] && t.shift(),
//           e.join("/") + t.join("/")
//         );
//       }
//       var P,
//         _ = {},
//         A = function () {
//           _ = m(
//             {
//               bootstrap: !0,
//               onReady: null,
//               onError: null,
//               onBeforeTrack: null,
//               onAfterTrack: null,
//               pageTrackerTemplate: null,
//               customResourceURL: "https://www.googletagmanager.com/gtag/js",
//               customPreconnectOrigin: "https://www.googletagmanager.com",
//               deferScriptLoad: !1,
//               pageTrackerExcludedRoutes: [],
//               pageTrackerEnabled: !0,
//               enabled: !0,
//               disableScriptLoad: !1,
//               pageTrackerScreenviewEnabled: !1,
//               appName: null,
//               pageTrackerUseFullPath: !1,
//               pageTrackerPrependBase: !0,
//               pageTrackerSkipSamePath: !0,
//               globalDataLayerName: "dataLayer",
//               globalObjectName: "gtag",
//               defaultGroupName: "default",
//               includes: null,
//               config: { id: null, params: { send_page_view: !1 } },
//             },
//             arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
//           );
//         },
//         w = function () {
//           return _;
//         },
//         F = function () {
//           var t,
//             e = w().globalObjectName;
//           y() && void 0 !== window[e] && (t = window)[e].apply(t, arguments);
//         },
//         O = function () {
//           for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
//             e[n] = arguments[n];
//           var r = w(),
//             d = r.config,
//             o = r.includes;
//           F.apply(void 0, ["config", d.id].concat(e)),
//             Array.isArray(o) &&
//               o.forEach(function (t) {
//                 F.apply(void 0, ["config", t.id].concat(e));
//               });
//         },
//         k = function (t, e) {
//           y() && (window["ga-disable-".concat(t)] = e);
//         },
//         S = function () {
//           var t =
//               !(arguments.length > 0 && void 0 !== arguments[0]) ||
//               arguments[0],
//             e = w(),
//             n = e.config,
//             r = e.includes;
//           k(n.id, t),
//             Array.isArray(r) &&
//               r.forEach(function (e) {
//                 return k(e.id, t);
//               });
//         },
//         E = function () {
//           S(!0);
//         },
//         I = function (t) {
//           P = t;
//         },
//         x = function () {
//           return P;
//         },
//         T = function (t) {
//           var e =
//               arguments.length > 1 && void 0 !== arguments[1]
//                 ? arguments[1]
//                 : {},
//             n = w(),
//             r = n.includes,
//             d = n.defaultGroupName;
//           null == e.send_to &&
//             Array.isArray(r) &&
//             r.length &&
//             (e.send_to = r
//               .map(function (t) {
//                 return t.id;
//               })
//               .concat(d)),
//             F("event", t, e);
//         },
//         V = function (param) {
//           if (y()) {
//             var template;
//             if ("string" == typeof param) template = { page_path: param };
//             else if (param.path || param.fullPath) {
//               var t = w(),
//                 e = t.pageTrackerUseFullPath,
//                 n = t.pageTrackerPrependBase,
//                 r = x(),
//                 base = r && r.options.base,
//                 path = e ? param.fullPath : param.path;
//               template = l(
//                 l({}, param.name && { page_title: param.name }),
//                 {},
//                 { page_path: n ? C(path, base) : path }
//               );
//             } else template = param;
//             null == template.page_location &&
//               (template.page_location = window.location.href),
//               null == template.send_page_view && (template.send_page_view = !0),
//               T("page_view", template);
//           }
//         },
//         U = function (param) {
//           var template,
//             t = w().appName;
//           param &&
//             (((template =
//               "string" == typeof param
//                 ? { screen_name: param }
//                 : param).app_name = template.app_name || t),
//             T("screen_view", template));
//         },
//         D = Object.freeze({
//           __proto__: null,
//           query: F,
//           config: O,
//           optOut: E,
//           optIn: function () {
//             S(!1);
//           },
//           pageview: V,
//           screenview: U,
//           exception: function () {
//             for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
//               e[n] = arguments[n];
//             T.apply(void 0, ["exception"].concat(e));
//           },
//           linker: function (t) {
//             O("linker", t);
//           },
//           time: function (t) {
//             T("timing_complete", t);
//           },
//           set: function () {
//             for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
//               e[n] = arguments[n];
//             F.apply(void 0, ["set"].concat(e));
//           },
//           refund: function () {
//             for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
//               e[n] = arguments[n];
//             T.apply(void 0, ["refund"].concat(e));
//           },
//           purchase: function (t) {
//             T("purchase", t);
//           },
//           customMap: function (map) {
//             O({ custom_map: map });
//           },
//           event: T,
//         }),
//         j = function (t) {
//           return l({ send_page_view: !1 }, t);
//         },
//         N = function () {
//           var t = w(),
//             e = t.config,
//             n = t.includes;
//           F("config", e.id, j(e.params)),
//             Array.isArray(n) &&
//               n.forEach(function (t) {
//                 F("config", t.id, j(t.params));
//               });
//         },
//         track = function () {
//           var t =
//               arguments.length > 0 && void 0 !== arguments[0]
//                 ? arguments[0]
//                 : {},
//             e =
//               arguments.length > 1 && void 0 !== arguments[1]
//                 ? arguments[1]
//                 : {},
//             n = w(),
//             r = n.appName,
//             d = n.pageTrackerTemplate,
//             o = n.pageTrackerScreenviewEnabled;
//           if (!n.pageTrackerSkipSamePath || t.path !== e.path) {
//             var template = t;
//             f(d)
//               ? (template = d(t, e))
//               : o &&
//                 (template = (function () {
//                   var t =
//                     arguments.length > 0 && void 0 !== arguments[0]
//                       ? arguments[0]
//                       : {};
//                   return (
//                     v(
//                       'Missing "appName" property inside the plugin options.',
//                       null == t.app_name
//                     ),
//                     v(
//                       'Missing "name" property in the route.',
//                       null == t.screen_name
//                     ),
//                     t
//                   );
//                 })({ app_name: r, screen_name: t.name })),
//               o ? U(template) : V(template);
//           }
//         },
//         R = function (t) {
//           var e = w().pageTrackerExcludedRoutes;
//           return e.includes(t.path) || e.includes(t.name);
//         },
//         M = function () {
//           var t = w(),
//             e = t.onReady,
//             n = t.onError,
//             d = t.globalObjectName,
//             o = t.globalDataLayerName,
//             c = t.config,
//             l = t.customResourceURL,
//             h = t.customPreconnectOrigin,
//             m = t.deferScriptLoad,
//             v = t.pageTrackerEnabled,
//             C = t.disableScriptLoad,
//             P = Boolean(v && x());
//           if (
//             ((function () {
//               if (y()) {
//                 var t = w(),
//                   e = t.enabled,
//                   n = t.globalObjectName,
//                   r = t.globalDataLayerName;
//                 null == window[n] &&
//                   ((window[r] = window[r] || []),
//                   (window[n] = function () {
//                     window[r].push(arguments);
//                   })),
//                   window[n]("js", new Date()),
//                   e || E(),
//                   window[n];
//               }
//             })(),
//             P
//               ? (function () {
//                   var t = w(),
//                     e = t.onBeforeTrack,
//                     n = t.onAfterTrack,
//                     d = x();
//                   d.onReady(function () {
//                     r.a.nextTick().then(function () {
//                       var t = d.currentRoute;
//                       N(), R(t) || track(t);
//                     }),
//                       d.afterEach(function (t, d) {
//                         r.a.nextTick().then(function () {
//                           R(t) ||
//                             (f(e) && e(t, d), track(t, d), f(n) && n(t, d));
//                         });
//                       });
//                   });
//                 })()
//               : N(),
//             !C)
//           )
//             return (function (t) {
//               var e =
//                 arguments.length > 1 && void 0 !== arguments[1]
//                   ? arguments[1]
//                   : {};
//               return new Promise(function (n, r) {
//                 if ("undefined" != typeof document) {
//                   var head =
//                       document.head || document.getElementsByTagName("head")[0],
//                     script = document.createElement("script");
//                   if (
//                     ((script.async = !0),
//                     (script.src = t),
//                     (script.defer = e.defer),
//                     e.preconnectOrigin)
//                   ) {
//                     var link = document.createElement("link");
//                     (link.href = e.preconnectOrigin),
//                       (link.rel = "preconnect"),
//                       head.appendChild(link);
//                   }
//                   head.appendChild(script),
//                     (script.onload = n),
//                     (script.onerror = r);
//                 }
//               });
//             })("".concat(l, "?id=").concat(c.id, "&l=").concat(o), {
//               preconnectOrigin: h,
//               defer: m,
//             })
//               .then(function () {
//                 e && e(window[d]);
//               })
//               .catch(function (t) {
//                 return n && n(t), t;
//               });
//         };
//       e.a = function (t) {
//         var e =
//             arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
//           n = arguments.length > 2 ? arguments[2] : void 0;
//         !(function (t) {
//           t.$gtag = t.prototype.$gtag = D;
//         })(t),
//           A(e),
//           I(n),
//           w().bootstrap && M();
//       };
//     },
//     function (t, e, n) {
//       t.exports = (function () {
//         function t() {
//           return (
//             (t =
//               Object.assign ||
//               function (t) {
//                 for (var i = 1; i < arguments.length; i++) {
//                   var source = arguments[i];
//                   for (var e in source)
//                     Object.prototype.hasOwnProperty.call(source, e) &&
//                       (t[e] = source[e]);
//                 }
//                 return t;
//               }),
//             t.apply(this, arguments)
//           );
//         }
//         function e(t, e) {
//           if (t) {
//             if ("string" == typeof t) return n(t, e);
//             var r = Object.prototype.toString.call(t).slice(8, -1);
//             return (
//               "Object" === r && t.constructor && (r = t.constructor.name),
//               "Map" === r || "Set" === r
//                 ? Array.from(t)
//                 : "Arguments" === r ||
//                   /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
//                 ? n(t, e)
//                 : void 0
//             );
//           }
//         }
//         function n(t, e) {
//           (null == e || e > t.length) && (e = t.length);
//           for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
//           return n;
//         }
//         function r(t) {
//           var i = 0;
//           if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
//             if (Array.isArray(t) || (t = e(t)))
//               return function () {
//                 return i >= t.length
//                   ? { done: !0 }
//                   : { done: !1, value: t[i++] };
//               };
//             throw new TypeError(
//               "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
//             );
//           }
//           return (i = t[Symbol.iterator]()).next.bind(i);
//         }
//         var d = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
//         function o(t) {
//           var e = t.split("-"),
//             n = e[1],
//             r = e[2],
//             o = e[3];
//           if (!n || !r || !o)
//             throw new Error(
//               "Malformed asset _ref '" +
//                 t +
//                 "'. Expected an id like \"" +
//                 d +
//                 '".'
//             );
//           var c = r.split("x"),
//             l = +c[0],
//             f = +c[1];
//           if (!isFinite(l) || !isFinite(f))
//             throw new Error(
//               "Malformed asset _ref '" +
//                 t +
//                 "'. Expected an id like \"" +
//                 d +
//                 '".'
//             );
//           return { id: n, width: l, height: f, format: o };
//         }
//         var c = function (t) {
//             return !!t && "string" == typeof t._ref;
//           },
//           l = function (t) {
//             return !!t && "string" == typeof t._id;
//           },
//           f = function (t) {
//             var source = t;
//             return (
//               !(!source || !source.asset) && "string" == typeof source.asset.url
//             );
//           };
//         function h(source) {
//           if (!source) return null;
//           var image;
//           if ("string" == typeof source && m(source))
//             image = { asset: { _ref: y(source) } };
//           else if ("string" == typeof source)
//             image = { asset: { _ref: source } };
//           else if (c(source)) image = { asset: source };
//           else if (l(source)) image = { asset: { _ref: source._id || "" } };
//           else if (f(source)) image = { asset: { _ref: y(source.asset.url) } };
//           else {
//             if ("object" != typeof source.asset) return null;
//             image = source;
//           }
//           var img = source;
//           return (
//             img.crop && (image.crop = img.crop),
//             img.hotspot && (image.hotspot = img.hotspot),
//             v(image)
//           );
//         }
//         function m(t) {
//           return /^https?:\/\//.test("" + t);
//         }
//         function y(t) {
//           return ("image-" + t.split("/").slice(-1)[0]).replace(
//             /\.([a-z]+)$/,
//             "-$1"
//           );
//         }
//         function v(image) {
//           if (image.crop && image.hotspot) return image;
//           var e = t({}, image);
//           return (
//             e.crop || (e.crop = { left: 0, top: 0, bottom: 0, right: 0 }),
//             e.hotspot || (e.hotspot = { x: 0.5, y: 0.5, height: 1, width: 1 }),
//             e
//           );
//         }
//         var C = [
//           ["width", "w"],
//           ["height", "h"],
//           ["format", "fm"],
//           ["download", "dl"],
//           ["blur", "blur"],
//           ["sharpen", "sharp"],
//           ["invert", "invert"],
//           ["orientation", "or"],
//           ["minHeight", "min-h"],
//           ["maxHeight", "max-h"],
//           ["minWidth", "min-w"],
//           ["maxWidth", "max-w"],
//           ["quality", "q"],
//           ["fit", "fit"],
//           ["crop", "crop"],
//           ["saturation", "sat"],
//           ["auto", "auto"],
//           ["dpr", "dpr"],
//           ["pad", "pad"],
//         ];
//         function P(e) {
//           var n = t({}, e || {}),
//             source = n.source;
//           delete n.source;
//           var image = h(source);
//           if (!image) return null;
//           var r = o(image.asset._ref || image.asset._id || ""),
//             d = Math.round(image.crop.left * r.width),
//             c = Math.round(image.crop.top * r.height),
//             l = {
//               left: d,
//               top: c,
//               width: Math.round(r.width - image.crop.right * r.width - d),
//               height: Math.round(r.height - image.crop.bottom * r.height - c),
//             },
//             f = (image.hotspot.height * r.height) / 2,
//             m = (image.hotspot.width * r.width) / 2,
//             y = image.hotspot.x * r.width,
//             v = image.hotspot.y * r.height,
//             C = { left: y - m, top: v - f, right: y + m, bottom: v + f };
//           return (
//             n.rect ||
//               n.focalPoint ||
//               n.ignoreImageParams ||
//               n.crop ||
//               (n = t(t({}, n), A({ crop: l, hotspot: C }, n))),
//             _(t(t({}, n), {}, { asset: r }))
//           );
//         }
//         function _(t) {
//           var e = t.baseUrl || "https://cdn.sanity.io",
//             n =
//               t.asset.id +
//               "-" +
//               t.asset.width +
//               "x" +
//               t.asset.height +
//               "." +
//               t.asset.format,
//             r = e + "/images/" + t.projectId + "/" + t.dataset + "/" + n,
//             d = [];
//           if (t.rect) {
//             var o = t.rect,
//               c = o.left,
//               l = o.top,
//               f = o.width,
//               h = o.height;
//             (0 !== c ||
//               0 !== l ||
//               h !== t.asset.height ||
//               f !== t.asset.width) &&
//               d.push("rect=" + c + "," + l + "," + f + "," + h);
//           }
//           t.bg && d.push("bg=" + t.bg),
//             t.focalPoint &&
//               (d.push("fp-x=" + t.focalPoint.x),
//               d.push("fp-y=" + t.focalPoint.y));
//           var m = [t.flipHorizontal && "h", t.flipVertical && "v"]
//             .filter(Boolean)
//             .join("");
//           return (
//             m && d.push("flip=" + m),
//             C.forEach(function (e) {
//               var n = e[0],
//                 param = e[1];
//               void 0 !== t[n]
//                 ? d.push(param + "=" + encodeURIComponent(t[n]))
//                 : void 0 !== t[param] &&
//                   d.push(param + "=" + encodeURIComponent(t[param]));
//             }),
//             0 === d.length ? r : r + "?" + d.join("&")
//           );
//         }
//         function A(source, t) {
//           var e,
//             n = t.width,
//             r = t.height;
//           if (!n || !r) return { width: n, height: r, rect: source.crop };
//           var d = source.crop,
//             o = source.hotspot,
//             c = n / r;
//           if (d.width / d.height > c) {
//             var l = d.height,
//               f = l * c,
//               h = d.top,
//               m = (o.right - o.left) / 2 + o.left - f / 2;
//             m < d.left
//               ? (m = d.left)
//               : m + f > d.left + d.width && (m = d.left + d.width - f),
//               (e = {
//                 left: Math.round(m),
//                 top: Math.round(h),
//                 width: Math.round(f),
//                 height: Math.round(l),
//               });
//           } else {
//             var y = d.width,
//               v = y / c,
//               C = d.left,
//               P = (o.bottom - o.top) / 2 + o.top - v / 2;
//             P < d.top
//               ? (P = d.top)
//               : P + v > d.top + d.height && (P = d.top + d.height - v),
//               (e = {
//                 left: Math.max(0, Math.floor(C)),
//                 top: Math.max(0, Math.floor(P)),
//                 width: Math.round(y),
//                 height: Math.round(v),
//               });
//           }
//           return { width: n, height: r, rect: e };
//         }
//         var w = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
//           F = [
//             "top",
//             "bottom",
//             "left",
//             "right",
//             "center",
//             "focalpoint",
//             "entropy",
//           ],
//           O = ["format"];
//         function k(t) {
//           return !!t && "object" == typeof t.clientConfig;
//         }
//         function S(t) {
//           for (var e, n = r(C); !(e = n()).done; ) {
//             var d = e.value,
//               o = d[0],
//               param = d[1];
//             if (t === o || t === param) return o;
//           }
//           return t;
//         }
//         function E(t) {
//           var e = t;
//           if (k(e)) {
//             var n = e.clientConfig,
//               r = n.apiHost,
//               d = n.projectId,
//               o = n.dataset;
//             return new I(null, {
//               baseUrl: (r || "https://api.sanity.io").replace(
//                 /^https:\/\/api\./,
//                 "https://cdn."
//               ),
//               projectId: d,
//               dataset: o,
//             });
//           }
//           return new I(null, t);
//         }
//         var I = (function () {
//           function e(e, n) {
//             this.options = t(e ? t({}, e.options || {}) : {}, n || {});
//           }
//           var n = e.prototype;
//           return (
//             (n.withOptions = function (n) {
//               var r = n.baseUrl || this.options.baseUrl,
//                 d = { baseUrl: r };
//               for (var o in n) n.hasOwnProperty(o) && (d[S(o)] = n[o]);
//               return new e(this, t({ baseUrl: r }, d));
//             }),
//             (n.image = function (source) {
//               return this.withOptions({ source: source });
//             }),
//             (n.dataset = function (t) {
//               return this.withOptions({ dataset: t });
//             }),
//             (n.projectId = function (t) {
//               return this.withOptions({ projectId: t });
//             }),
//             (n.bg = function (t) {
//               return this.withOptions({ bg: t });
//             }),
//             (n.dpr = function (t) {
//               return this.withOptions({ dpr: t });
//             }),
//             (n.width = function (t) {
//               return this.withOptions({ width: t });
//             }),
//             (n.height = function (t) {
//               return this.withOptions({ height: t });
//             }),
//             (n.focalPoint = function (t, e) {
//               return this.withOptions({ focalPoint: { x: t, y: e } });
//             }),
//             (n.maxWidth = function (t) {
//               return this.withOptions({ maxWidth: t });
//             }),
//             (n.minWidth = function (t) {
//               return this.withOptions({ minWidth: t });
//             }),
//             (n.maxHeight = function (t) {
//               return this.withOptions({ maxHeight: t });
//             }),
//             (n.minHeight = function (t) {
//               return this.withOptions({ minHeight: t });
//             }),
//             (n.size = function (t, e) {
//               return this.withOptions({ width: t, height: e });
//             }),
//             (n.blur = function (t) {
//               return this.withOptions({ blur: t });
//             }),
//             (n.sharpen = function (t) {
//               return this.withOptions({ sharpen: t });
//             }),
//             (n.rect = function (t, e, n, r) {
//               return this.withOptions({
//                 rect: { left: t, top: e, width: n, height: r },
//               });
//             }),
//             (n.format = function (t) {
//               return this.withOptions({ format: t });
//             }),
//             (n.invert = function (t) {
//               return this.withOptions({ invert: t });
//             }),
//             (n.orientation = function (t) {
//               return this.withOptions({ orientation: t });
//             }),
//             (n.quality = function (t) {
//               return this.withOptions({ quality: t });
//             }),
//             (n.forceDownload = function (t) {
//               return this.withOptions({ download: t });
//             }),
//             (n.flipHorizontal = function () {
//               return this.withOptions({ flipHorizontal: !0 });
//             }),
//             (n.flipVertical = function () {
//               return this.withOptions({ flipVertical: !0 });
//             }),
//             (n.ignoreImageParams = function () {
//               return this.withOptions({ ignoreImageParams: !0 });
//             }),
//             (n.fit = function (t) {
//               if (-1 === w.indexOf(t))
//                 throw new Error('Invalid fit mode "' + t + '"');
//               return this.withOptions({ fit: t });
//             }),
//             (n.crop = function (t) {
//               if (-1 === F.indexOf(t))
//                 throw new Error('Invalid crop mode "' + t + '"');
//               return this.withOptions({ crop: t });
//             }),
//             (n.saturation = function (t) {
//               return this.withOptions({ saturation: t });
//             }),
//             (n.auto = function (t) {
//               if (-1 === O.indexOf(t))
//                 throw new Error('Invalid auto mode "' + t + '"');
//               return this.withOptions({ auto: t });
//             }),
//             (n.pad = function (t) {
//               return this.withOptions({ pad: t });
//             }),
//             (n.url = function () {
//               return P(this.options);
//             }),
//             (n.toString = function () {
//               return this.url();
//             }),
//             e
//           );
//         })();
//         return E;
//       })();
//     },
//     function (t, e, n) {
//       "use strict";
//       var r =
//         (this && this.__importDefault) ||
//         function (t) {
//           return t && t.__esModule ? t : { default: t };
//         };
//       Object.defineProperty(e, "__esModule", { value: !0 }),
//         (e.Jsonld = void 0);
//       var d = r(n(463)),
//         o = r(n(465));
//       (e.Jsonld = o.default),
//         (e.default = {
//           install: function (t) {
//             t.mixin((0, d.default)());
//           },
//         });
//     },
//     ,
//     function (t, e, n) {
//       var r = n(272),
//         d = n(273),
//         o = n(282),
//         c = RegExp("['’]", "g");
//       t.exports = function (t) {
//         return function (e) {
//           return r(o(d(e).replace(c, "")), t, "");
//         };
//       };
//     },
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e) {
//       t.exports = function (t, e, n, r) {
//         var d = -1,
//           o = null == t ? 0 : t.length;
//         for (r && o && (n = t[++d]); ++d < o; ) n = e(n, t[d], d, t);
//         return n;
//       };
//     },
//     function (t, e, n) {
//       var r = n(274),
//         d = n(105),
//         o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
//         c = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
//       t.exports = function (t) {
//         return (t = d(t)) && t.replace(o, r).replace(c, "");
//       };
//     },
//     function (t, e, n) {
//       var r = n(275)({
//         À: "A",
//         Á: "A",
//         Â: "A",
//         Ã: "A",
//         Ä: "A",
//         Å: "A",
//         à: "a",
//         á: "a",
//         â: "a",
//         ã: "a",
//         ä: "a",
//         å: "a",
//         Ç: "C",
//         ç: "c",
//         Ð: "D",
//         ð: "d",
//         È: "E",
//         É: "E",
//         Ê: "E",
//         Ë: "E",
//         è: "e",
//         é: "e",
//         ê: "e",
//         ë: "e",
//         Ì: "I",
//         Í: "I",
//         Î: "I",
//         Ï: "I",
//         ì: "i",
//         í: "i",
//         î: "i",
//         ï: "i",
//         Ñ: "N",
//         ñ: "n",
//         Ò: "O",
//         Ó: "O",
//         Ô: "O",
//         Õ: "O",
//         Ö: "O",
//         Ø: "O",
//         ò: "o",
//         ó: "o",
//         ô: "o",
//         õ: "o",
//         ö: "o",
//         ø: "o",
//         Ù: "U",
//         Ú: "U",
//         Û: "U",
//         Ü: "U",
//         ù: "u",
//         ú: "u",
//         û: "u",
//         ü: "u",
//         Ý: "Y",
//         ý: "y",
//         ÿ: "y",
//         Æ: "Ae",
//         æ: "ae",
//         Þ: "Th",
//         þ: "th",
//         ß: "ss",
//         Ā: "A",
//         Ă: "A",
//         Ą: "A",
//         ā: "a",
//         ă: "a",
//         ą: "a",
//         Ć: "C",
//         Ĉ: "C",
//         Ċ: "C",
//         Č: "C",
//         ć: "c",
//         ĉ: "c",
//         ċ: "c",
//         č: "c",
//         Ď: "D",
//         Đ: "D",
//         ď: "d",
//         đ: "d",
//         Ē: "E",
//         Ĕ: "E",
//         Ė: "E",
//         Ę: "E",
//         Ě: "E",
//         ē: "e",
//         ĕ: "e",
//         ė: "e",
//         ę: "e",
//         ě: "e",
//         Ĝ: "G",
//         Ğ: "G",
//         Ġ: "G",
//         Ģ: "G",
//         ĝ: "g",
//         ğ: "g",
//         ġ: "g",
//         ģ: "g",
//         Ĥ: "H",
//         Ħ: "H",
//         ĥ: "h",
//         ħ: "h",
//         Ĩ: "I",
//         Ī: "I",
//         Ĭ: "I",
//         Į: "I",
//         İ: "I",
//         ĩ: "i",
//         ī: "i",
//         ĭ: "i",
//         į: "i",
//         ı: "i",
//         Ĵ: "J",
//         ĵ: "j",
//         Ķ: "K",
//         ķ: "k",
//         ĸ: "k",
//         Ĺ: "L",
//         Ļ: "L",
//         Ľ: "L",
//         Ŀ: "L",
//         Ł: "L",
//         ĺ: "l",
//         ļ: "l",
//         ľ: "l",
//         ŀ: "l",
//         ł: "l",
//         Ń: "N",
//         Ņ: "N",
//         Ň: "N",
//         Ŋ: "N",
//         ń: "n",
//         ņ: "n",
//         ň: "n",
//         ŋ: "n",
//         Ō: "O",
//         Ŏ: "O",
//         Ő: "O",
//         ō: "o",
//         ŏ: "o",
//         ő: "o",
//         Ŕ: "R",
//         Ŗ: "R",
//         Ř: "R",
//         ŕ: "r",
//         ŗ: "r",
//         ř: "r",
//         Ś: "S",
//         Ŝ: "S",
//         Ş: "S",
//         Š: "S",
//         ś: "s",
//         ŝ: "s",
//         ş: "s",
//         š: "s",
//         Ţ: "T",
//         Ť: "T",
//         Ŧ: "T",
//         ţ: "t",
//         ť: "t",
//         ŧ: "t",
//         Ũ: "U",
//         Ū: "U",
//         Ŭ: "U",
//         Ů: "U",
//         Ű: "U",
//         Ų: "U",
//         ũ: "u",
//         ū: "u",
//         ŭ: "u",
//         ů: "u",
//         ű: "u",
//         ų: "u",
//         Ŵ: "W",
//         ŵ: "w",
//         Ŷ: "Y",
//         ŷ: "y",
//         Ÿ: "Y",
//         Ź: "Z",
//         Ż: "Z",
//         Ž: "Z",
//         ź: "z",
//         ż: "z",
//         ž: "z",
//         Ĳ: "IJ",
//         ĳ: "ij",
//         Œ: "Oe",
//         œ: "oe",
//         ŉ: "'n",
//         ſ: "s",
//       });
//       t.exports = r;
//     },
//     function (t, e) {
//       t.exports = function (object) {
//         return function (t) {
//           return null == object ? void 0 : object[t];
//         };
//       };
//     },
//     function (t, e, n) {
//       var r = n(122),
//         d = n(278),
//         o = n(124),
//         c = n(125),
//         l = r ? r.prototype : void 0,
//         f = l ? l.toString : void 0;
//       t.exports = function t(e) {
//         if ("string" == typeof e) return e;
//         if (o(e)) return d(e, t) + "";
//         if (c(e)) return f ? f.call(e) : "";
//         var n = e + "";
//         return "0" == n && 1 / e == -Infinity ? "-0" : n;
//       };
//     },
//     function (t, e, n) {
//       (function (e) {
//         var n = "object" == typeof e && e && e.Object === Object && e;
//         t.exports = n;
//       }).call(this, n(34));
//     },
//     function (t, e) {
//       t.exports = function (t, e) {
//         for (var n = -1, r = null == t ? 0 : t.length, d = Array(r); ++n < r; )
//           d[n] = e(t[n], n, t);
//         return d;
//       };
//     },
//     function (t, e, n) {
//       var r = n(122),
//         d = Object.prototype,
//         o = d.hasOwnProperty,
//         c = d.toString,
//         l = r ? r.toStringTag : void 0;
//       t.exports = function (t) {
//         var e = o.call(t, l),
//           n = t[l];
//         try {
//           t[l] = void 0;
//           var r = !0;
//         } catch (t) {}
//         var d = c.call(t);
//         return r && (e ? (t[l] = n) : delete t[l]), d;
//       };
//     },
//     function (t, e) {
//       var n = Object.prototype.toString;
//       t.exports = function (t) {
//         return n.call(t);
//       };
//     },
//     function (t, e) {
//       t.exports = function (t) {
//         return null != t && "object" == typeof t;
//       };
//     },
//     function (t, e, n) {
//       var r = n(283),
//         d = n(284),
//         o = n(105),
//         c = n(285);
//       t.exports = function (t, pattern, e) {
//         return (
//           (t = o(t)),
//           void 0 === (pattern = e ? void 0 : pattern)
//             ? d(t)
//               ? c(t)
//               : r(t)
//             : t.match(pattern) || []
//         );
//       };
//     },
//     function (t, e) {
//       var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
//       t.exports = function (t) {
//         return t.match(n) || [];
//       };
//     },
//     function (t, e) {
//       var n =
//         /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
//       t.exports = function (t) {
//         return n.test(t);
//       };
//     },
//     function (t, e) {
//       var n = "\\ud800-\\udfff",
//         r = "\\u2700-\\u27bf",
//         d = "a-z\\xdf-\\xf6\\xf8-\\xff",
//         o = "A-Z\\xc0-\\xd6\\xd8-\\xde",
//         c =
//           "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
//         l = "[" + c + "]",
//         f = "\\d+",
//         h = "[" + r + "]",
//         m = "[" + d + "]",
//         y = "[^" + n + c + f + r + d + o + "]",
//         v = "(?:\\ud83c[\\udde6-\\uddff]){2}",
//         C = "[\\ud800-\\udbff][\\udc00-\\udfff]",
//         P = "[" + o + "]",
//         _ = "(?:" + m + "|" + y + ")",
//         A = "(?:" + P + "|" + y + ")",
//         w = "(?:['’](?:d|ll|m|re|s|t|ve))?",
//         F = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
//         O =
//           "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
//         k = "[\\ufe0e\\ufe0f]?",
//         S =
//           k +
//           O +
//           ("(?:\\u200d(?:" +
//             ["[^" + n + "]", v, C].join("|") +
//             ")" +
//             k +
//             O +
//             ")*"),
//         E = "(?:" + [h, v, C].join("|") + ")" + S,
//         I = RegExp(
//           [
//             P + "?" + m + "+" + w + "(?=" + [l, P, "$"].join("|") + ")",
//             A + "+" + F + "(?=" + [l, P + _, "$"].join("|") + ")",
//             P + "?" + _ + "+" + w,
//             P + "+" + F,
//             "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
//             "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
//             f,
//             E,
//           ].join("|"),
//           "g"
//         );
//       t.exports = function (t) {
//         return t.match(I) || [];
//       };
//     },
//     ,
//     function (t, e, n) {
//       var r = n(288),
//         d = n(320);
//       t.exports = function (object, path) {
//         for (
//           var t = 0, e = (path = r(path, object)).length;
//           null != object && t < e;

//         )
//           object = object[d(path[t++])];
//         return t && t == e ? object : void 0;
//       };
//     },
//     function (t, e, n) {
//       var r = n(124),
//         d = n(289),
//         o = n(290),
//         c = n(105);
//       t.exports = function (t, object) {
//         return r(t) ? t : d(t, object) ? [t] : o(c(t));
//       };
//     },
//     function (t, e, n) {
//       var r = n(124),
//         d = n(125),
//         o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
//         c = /^\w*$/;
//       t.exports = function (t, object) {
//         if (r(t)) return !1;
//         var e = typeof t;
//         return (
//           !(
//             "number" != e &&
//             "symbol" != e &&
//             "boolean" != e &&
//             null != t &&
//             !d(t)
//           ) ||
//           c.test(t) ||
//           !o.test(t) ||
//           (null != object && t in Object(object))
//         );
//       };
//     },
//     function (t, e, n) {
//       var r = n(291),
//         d =
//           /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
//         o = /\\(\\)?/g,
//         c = r(function (t) {
//           var e = [];
//           return (
//             46 === t.charCodeAt(0) && e.push(""),
//             t.replace(d, function (t, n, r, d) {
//               e.push(r ? d.replace(o, "$1") : n || t);
//             }),
//             e
//           );
//         });
//       t.exports = c;
//     },
//     function (t, e, n) {
//       var r = n(292);
//       t.exports = function (t) {
//         var e = r(t, function (t) {
//             return 500 === n.size && n.clear(), t;
//           }),
//           n = e.cache;
//         return e;
//       };
//     },
//     function (t, e, n) {
//       var r = n(293);
//       function d(t, e) {
//         if ("function" != typeof t || (null != e && "function" != typeof e))
//           throw new TypeError("Expected a function");
//         var n = function () {
//           var r = arguments,
//             d = e ? e.apply(this, r) : r[0],
//             o = n.cache;
//           if (o.has(d)) return o.get(d);
//           var c = t.apply(this, r);
//           return (n.cache = o.set(d, c) || o), c;
//         };
//         return (n.cache = new (d.Cache || r)()), n;
//       }
//       (d.Cache = r), (t.exports = d);
//     },
//     function (t, e, n) {
//       var r = n(294),
//         d = n(315),
//         o = n(317),
//         c = n(318),
//         l = n(319);
//       function f(t) {
//         var e = -1,
//           n = null == t ? 0 : t.length;
//         for (this.clear(); ++e < n; ) {
//           var r = t[e];
//           this.set(r[0], r[1]);
//         }
//       }
//       (f.prototype.clear = r),
//         (f.prototype.delete = d),
//         (f.prototype.get = o),
//         (f.prototype.has = c),
//         (f.prototype.set = l),
//         (t.exports = f);
//     },
//     function (t, e, n) {
//       var r = n(295),
//         d = n(307),
//         o = n(314);
//       t.exports = function () {
//         (this.size = 0),
//           (this.__data__ = {
//             hash: new r(),
//             map: new (o || d)(),
//             string: new r(),
//           });
//       };
//     },
//     function (t, e, n) {
//       var r = n(296),
//         d = n(303),
//         o = n(304),
//         c = n(305),
//         l = n(306);
//       function f(t) {
//         var e = -1,
//           n = null == t ? 0 : t.length;
//         for (this.clear(); ++e < n; ) {
//           var r = t[e];
//           this.set(r[0], r[1]);
//         }
//       }
//       (f.prototype.clear = r),
//         (f.prototype.delete = d),
//         (f.prototype.get = o),
//         (f.prototype.has = c),
//         (f.prototype.set = l),
//         (t.exports = f);
//     },
//     function (t, e, n) {
//       var r = n(89);
//       t.exports = function () {
//         (this.__data__ = r ? r(null) : {}), (this.size = 0);
//       };
//     },
//     function (t, e, n) {
//       var r = n(298),
//         d = n(299),
//         o = n(167),
//         c = n(301),
//         l = /^\[object .+?Constructor\]$/,
//         f = Function.prototype,
//         h = Object.prototype,
//         m = f.toString,
//         y = h.hasOwnProperty,
//         v = RegExp(
//           "^" +
//             m
//               .call(y)
//               .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
//               .replace(
//                 /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
//                 "$1.*?"
//               ) +
//             "$"
//         );
//       t.exports = function (t) {
//         return !(!o(t) || d(t)) && (r(t) ? v : l).test(c(t));
//       };
//     },
//     function (t, e, n) {
//       var r = n(165),
//         d = n(167);
//       t.exports = function (t) {
//         if (!d(t)) return !1;
//         var e = r(t);
//         return (
//           "[object Function]" == e ||
//           "[object GeneratorFunction]" == e ||
//           "[object AsyncFunction]" == e ||
//           "[object Proxy]" == e
//         );
//       };
//     },
//     function (t, e, n) {
//       var r,
//         d = n(300),
//         o = (r = /[^.]+$/.exec((d && d.keys && d.keys.IE_PROTO) || ""))
//           ? "Symbol(src)_1." + r
//           : "";
//       t.exports = function (t) {
//         return !!o && o in t;
//       };
//     },
//     function (t, e, n) {
//       var r = n(123)["__core-js_shared__"];
//       t.exports = r;
//     },
//     function (t, e) {
//       var n = Function.prototype.toString;
//       t.exports = function (t) {
//         if (null != t) {
//           try {
//             return n.call(t);
//           } catch (t) {}
//           try {
//             return t + "";
//           } catch (t) {}
//         }
//         return "";
//       };
//     },
//     function (t, e) {
//       t.exports = function (object, t) {
//         return null == object ? void 0 : object[t];
//       };
//     },
//     function (t, e) {
//       t.exports = function (t) {
//         var e = this.has(t) && delete this.__data__[t];
//         return (this.size -= e ? 1 : 0), e;
//       };
//     },
//     function (t, e, n) {
//       var r = n(89),
//         d = Object.prototype.hasOwnProperty;
//       t.exports = function (t) {
//         var data = this.__data__;
//         if (r) {
//           var e = data[t];
//           return "__lodash_hash_undefined__" === e ? void 0 : e;
//         }
//         return d.call(data, t) ? data[t] : void 0;
//       };
//     },
//     function (t, e, n) {
//       var r = n(89),
//         d = Object.prototype.hasOwnProperty;
//       t.exports = function (t) {
//         var data = this.__data__;
//         return r ? void 0 !== data[t] : d.call(data, t);
//       };
//     },
//     function (t, e, n) {
//       var r = n(89);
//       t.exports = function (t, e) {
//         var data = this.__data__;
//         return (
//           (this.size += this.has(t) ? 0 : 1),
//           (data[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e),
//           this
//         );
//       };
//     },
//     function (t, e, n) {
//       var r = n(308),
//         d = n(309),
//         o = n(311),
//         c = n(312),
//         l = n(313);
//       function f(t) {
//         var e = -1,
//           n = null == t ? 0 : t.length;
//         for (this.clear(); ++e < n; ) {
//           var r = t[e];
//           this.set(r[0], r[1]);
//         }
//       }
//       (f.prototype.clear = r),
//         (f.prototype.delete = d),
//         (f.prototype.get = o),
//         (f.prototype.has = c),
//         (f.prototype.set = l),
//         (t.exports = f);
//     },
//     function (t, e) {
//       t.exports = function () {
//         (this.__data__ = []), (this.size = 0);
//       };
//     },
//     function (t, e, n) {
//       var r = n(90),
//         d = Array.prototype.splice;
//       t.exports = function (t) {
//         var data = this.__data__,
//           e = r(data, t);
//         return (
//           !(e < 0) &&
//           (e == data.length - 1 ? data.pop() : d.call(data, e, 1),
//           --this.size,
//           !0)
//         );
//       };
//     },
//     function (t, e) {
//       t.exports = function (t, e) {
//         return t === e || (t != t && e != e);
//       };
//     },
//     function (t, e, n) {
//       var r = n(90);
//       t.exports = function (t) {
//         var data = this.__data__,
//           e = r(data, t);
//         return e < 0 ? void 0 : data[e][1];
//       };
//     },
//     function (t, e, n) {
//       var r = n(90);
//       t.exports = function (t) {
//         return r(this.__data__, t) > -1;
//       };
//     },
//     function (t, e, n) {
//       var r = n(90);
//       t.exports = function (t, e) {
//         var data = this.__data__,
//           n = r(data, t);
//         return (
//           n < 0 ? (++this.size, data.push([t, e])) : (data[n][1] = e), this
//         );
//       };
//     },
//     function (t, e, n) {
//       var r = n(166)(n(123), "Map");
//       t.exports = r;
//     },
//     function (t, e, n) {
//       var r = n(91);
//       t.exports = function (t) {
//         var e = r(this, t).delete(t);
//         return (this.size -= e ? 1 : 0), e;
//       };
//     },
//     function (t, e) {
//       t.exports = function (t) {
//         var e = typeof t;
//         return "string" == e || "number" == e || "symbol" == e || "boolean" == e
//           ? "__proto__" !== t
//           : null === t;
//       };
//     },
//     function (t, e, n) {
//       var r = n(91);
//       t.exports = function (t) {
//         return r(this, t).get(t);
//       };
//     },
//     function (t, e, n) {
//       var r = n(91);
//       t.exports = function (t) {
//         return r(this, t).has(t);
//       };
//     },
//     function (t, e, n) {
//       var r = n(91);
//       t.exports = function (t, e) {
//         var data = r(this, t),
//           n = data.size;
//         return data.set(t, e), (this.size += data.size == n ? 0 : 1), this;
//       };
//     },
//     function (t, e, n) {
//       var r = n(125);
//       t.exports = function (t) {
//         if ("string" == typeof t || r(t)) return t;
//         var e = t + "";
//         return "0" == e && 1 / t == -Infinity ? "-0" : e;
//       };
//     },
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       "use strict";
//       (function (t) {
//         var r = n(360),
//           d = n(361),
//           o = n(362);
//         function c() {
//           return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
//         }
//         function l(t, e) {
//           if (c() < e) throw new RangeError("Invalid typed array length");
//           return (
//             f.TYPED_ARRAY_SUPPORT
//               ? ((t = new Uint8Array(e)).__proto__ = f.prototype)
//               : (null === t && (t = new f(e)), (t.length = e)),
//             t
//           );
//         }
//         function f(t, e, n) {
//           if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f))
//             return new f(t, e, n);
//           if ("number" == typeof t) {
//             if ("string" == typeof e)
//               throw new Error(
//                 "If encoding is specified then the first argument must be a string"
//               );
//             return y(this, t);
//           }
//           return h(this, t, e, n);
//         }
//         function h(t, e, n, r) {
//           if ("number" == typeof e)
//             throw new TypeError('"value" argument must not be a number');
//           return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
//             ? (function (t, e, n, r) {
//                 if ((e.byteLength, n < 0 || e.byteLength < n))
//                   throw new RangeError("'offset' is out of bounds");
//                 if (e.byteLength < n + (r || 0))
//                   throw new RangeError("'length' is out of bounds");
//                 e =
//                   void 0 === n && void 0 === r
//                     ? new Uint8Array(e)
//                     : void 0 === r
//                     ? new Uint8Array(e, n)
//                     : new Uint8Array(e, n, r);
//                 f.TYPED_ARRAY_SUPPORT
//                   ? ((t = e).__proto__ = f.prototype)
//                   : (t = v(t, e));
//                 return t;
//               })(t, e, n, r)
//             : "string" == typeof e
//             ? (function (t, e, n) {
//                 ("string" == typeof n && "" !== n) || (n = "utf8");
//                 if (!f.isEncoding(n))
//                   throw new TypeError(
//                     '"encoding" must be a valid string encoding'
//                   );
//                 var r = 0 | P(e, n);
//                 t = l(t, r);
//                 var d = t.write(e, n);
//                 d !== r && (t = t.slice(0, d));
//                 return t;
//               })(t, e, n)
//             : (function (t, e) {
//                 if (f.isBuffer(e)) {
//                   var n = 0 | C(e.length);
//                   return 0 === (t = l(t, n)).length || e.copy(t, 0, 0, n), t;
//                 }
//                 if (e) {
//                   if (
//                     ("undefined" != typeof ArrayBuffer &&
//                       e.buffer instanceof ArrayBuffer) ||
//                     "length" in e
//                   )
//                     return "number" != typeof e.length || (r = e.length) != r
//                       ? l(t, 0)
//                       : v(t, e);
//                   if ("Buffer" === e.type && o(e.data)) return v(t, e.data);
//                 }
//                 var r;
//                 throw new TypeError(
//                   "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
//                 );
//               })(t, e);
//         }
//         function m(t) {
//           if ("number" != typeof t)
//             throw new TypeError('"size" argument must be a number');
//           if (t < 0)
//             throw new RangeError('"size" argument must not be negative');
//         }
//         function y(t, e) {
//           if ((m(e), (t = l(t, e < 0 ? 0 : 0 | C(e))), !f.TYPED_ARRAY_SUPPORT))
//             for (var i = 0; i < e; ++i) t[i] = 0;
//           return t;
//         }
//         function v(t, e) {
//           var n = e.length < 0 ? 0 : 0 | C(e.length);
//           t = l(t, n);
//           for (var i = 0; i < n; i += 1) t[i] = 255 & e[i];
//           return t;
//         }
//         function C(t) {
//           if (t >= c())
//             throw new RangeError(
//               "Attempt to allocate Buffer larger than maximum size: 0x" +
//                 c().toString(16) +
//                 " bytes"
//             );
//           return 0 | t;
//         }
//         function P(t, e) {
//           if (f.isBuffer(t)) return t.length;
//           if (
//             "undefined" != typeof ArrayBuffer &&
//             "function" == typeof ArrayBuffer.isView &&
//             (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
//           )
//             return t.byteLength;
//           "string" != typeof t && (t = "" + t);
//           var n = t.length;
//           if (0 === n) return 0;
//           for (var r = !1; ; )
//             switch (e) {
//               case "ascii":
//               case "latin1":
//               case "binary":
//                 return n;
//               case "utf8":
//               case "utf-8":
//               case void 0:
//                 return $(t).length;
//               case "ucs2":
//               case "ucs-2":
//               case "utf16le":
//               case "utf-16le":
//                 return 2 * n;
//               case "hex":
//                 return n >>> 1;
//               case "base64":
//                 return Y(t).length;
//               default:
//                 if (r) return $(t).length;
//                 (e = ("" + e).toLowerCase()), (r = !0);
//             }
//         }
//         function _(t, e, n) {
//           var r = !1;
//           if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
//           if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
//             return "";
//           if ((n >>>= 0) <= (e >>>= 0)) return "";
//           for (t || (t = "utf8"); ; )
//             switch (t) {
//               case "hex":
//                 return N(this, e, n);
//               case "utf8":
//               case "utf-8":
//                 return V(this, e, n);
//               case "ascii":
//                 return D(this, e, n);
//               case "latin1":
//               case "binary":
//                 return j(this, e, n);
//               case "base64":
//                 return T(this, e, n);
//               case "ucs2":
//               case "ucs-2":
//               case "utf16le":
//               case "utf-16le":
//                 return R(this, e, n);
//               default:
//                 if (r) throw new TypeError("Unknown encoding: " + t);
//                 (t = (t + "").toLowerCase()), (r = !0);
//             }
//         }
//         function A(b, t, e) {
//           var i = b[t];
//           (b[t] = b[e]), (b[e] = i);
//         }
//         function w(t, e, n, r, d) {
//           if (0 === t.length) return -1;
//           if (
//             ("string" == typeof n
//               ? ((r = n), (n = 0))
//               : n > 2147483647
//               ? (n = 2147483647)
//               : n < -2147483648 && (n = -2147483648),
//             (n = +n),
//             isNaN(n) && (n = d ? 0 : t.length - 1),
//             n < 0 && (n = t.length + n),
//             n >= t.length)
//           ) {
//             if (d) return -1;
//             n = t.length - 1;
//           } else if (n < 0) {
//             if (!d) return -1;
//             n = 0;
//           }
//           if (("string" == typeof e && (e = f.from(e, r)), f.isBuffer(e)))
//             return 0 === e.length ? -1 : F(t, e, n, r, d);
//           if ("number" == typeof e)
//             return (
//               (e &= 255),
//               f.TYPED_ARRAY_SUPPORT &&
//               "function" == typeof Uint8Array.prototype.indexOf
//                 ? d
//                   ? Uint8Array.prototype.indexOf.call(t, e, n)
//                   : Uint8Array.prototype.lastIndexOf.call(t, e, n)
//                 : F(t, [e], n, r, d)
//             );
//           throw new TypeError("val must be string, number or Buffer");
//         }
//         function F(t, e, n, r, d) {
//           var i,
//             o = 1,
//             c = t.length,
//             l = e.length;
//           if (
//             void 0 !== r &&
//             ("ucs2" === (r = String(r).toLowerCase()) ||
//               "ucs-2" === r ||
//               "utf16le" === r ||
//               "utf-16le" === r)
//           ) {
//             if (t.length < 2 || e.length < 2) return -1;
//             (o = 2), (c /= 2), (l /= 2), (n /= 2);
//           }
//           function f(t, i) {
//             return 1 === o ? t[i] : t.readUInt16BE(i * o);
//           }
//           if (d) {
//             var h = -1;
//             for (i = n; i < c; i++)
//               if (f(t, i) === f(e, -1 === h ? 0 : i - h)) {
//                 if ((-1 === h && (h = i), i - h + 1 === l)) return h * o;
//               } else -1 !== h && (i -= i - h), (h = -1);
//           } else
//             for (n + l > c && (n = c - l), i = n; i >= 0; i--) {
//               for (var m = !0, y = 0; y < l; y++)
//                 if (f(t, i + y) !== f(e, y)) {
//                   m = !1;
//                   break;
//                 }
//               if (m) return i;
//             }
//           return -1;
//         }
//         function O(t, e, n, r) {
//           n = Number(n) || 0;
//           var d = t.length - n;
//           r ? (r = Number(r)) > d && (r = d) : (r = d);
//           var o = e.length;
//           if (o % 2 != 0) throw new TypeError("Invalid hex string");
//           r > o / 2 && (r = o / 2);
//           for (var i = 0; i < r; ++i) {
//             var c = parseInt(e.substr(2 * i, 2), 16);
//             if (isNaN(c)) return i;
//             t[n + i] = c;
//           }
//           return i;
//         }
//         function k(t, e, n, r) {
//           return K($(e, t.length - n), t, n, r);
//         }
//         function S(t, e, n, r) {
//           return K(
//             (function (t) {
//               for (var e = [], i = 0; i < t.length; ++i)
//                 e.push(255 & t.charCodeAt(i));
//               return e;
//             })(e),
//             t,
//             n,
//             r
//           );
//         }
//         function E(t, e, n, r) {
//           return S(t, e, n, r);
//         }
//         function I(t, e, n, r) {
//           return K(Y(e), t, n, r);
//         }
//         function x(t, e, n, r) {
//           return K(
//             (function (t, e) {
//               for (
//                 var n, r, d, o = [], i = 0;
//                 i < t.length && !((e -= 2) < 0);
//                 ++i
//               )
//                 (r = (n = t.charCodeAt(i)) >> 8),
//                   (d = n % 256),
//                   o.push(d),
//                   o.push(r);
//               return o;
//             })(e, t.length - n),
//             t,
//             n,
//             r
//           );
//         }
//         function T(t, e, n) {
//           return 0 === e && n === t.length
//             ? r.fromByteArray(t)
//             : r.fromByteArray(t.slice(e, n));
//         }
//         function V(t, e, n) {
//           n = Math.min(t.length, n);
//           for (var r = [], i = e; i < n; ) {
//             var d,
//               o,
//               c,
//               l,
//               f = t[i],
//               h = null,
//               m = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
//             if (i + m <= n)
//               switch (m) {
//                 case 1:
//                   f < 128 && (h = f);
//                   break;
//                 case 2:
//                   128 == (192 & (d = t[i + 1])) &&
//                     (l = ((31 & f) << 6) | (63 & d)) > 127 &&
//                     (h = l);
//                   break;
//                 case 3:
//                   (d = t[i + 1]),
//                     (o = t[i + 2]),
//                     128 == (192 & d) &&
//                       128 == (192 & o) &&
//                       (l = ((15 & f) << 12) | ((63 & d) << 6) | (63 & o)) >
//                         2047 &&
//                       (l < 55296 || l > 57343) &&
//                       (h = l);
//                   break;
//                 case 4:
//                   (d = t[i + 1]),
//                     (o = t[i + 2]),
//                     (c = t[i + 3]),
//                     128 == (192 & d) &&
//                       128 == (192 & o) &&
//                       128 == (192 & c) &&
//                       (l =
//                         ((15 & f) << 18) |
//                         ((63 & d) << 12) |
//                         ((63 & o) << 6) |
//                         (63 & c)) > 65535 &&
//                       l < 1114112 &&
//                       (h = l);
//               }
//             null === h
//               ? ((h = 65533), (m = 1))
//               : h > 65535 &&
//                 ((h -= 65536),
//                 r.push(((h >>> 10) & 1023) | 55296),
//                 (h = 56320 | (1023 & h))),
//               r.push(h),
//               (i += m);
//           }
//           return (function (t) {
//             var e = t.length;
//             if (e <= U) return String.fromCharCode.apply(String, t);
//             var n = "",
//               i = 0;
//             for (; i < e; )
//               n += String.fromCharCode.apply(String, t.slice(i, (i += U)));
//             return n;
//           })(r);
//         }
//         (e.Buffer = f),
//           (e.SlowBuffer = function (t) {
//             +t != t && (t = 0);
//             return f.alloc(+t);
//           }),
//           (e.INSPECT_MAX_BYTES = 50),
//           (f.TYPED_ARRAY_SUPPORT =
//             void 0 !== t.TYPED_ARRAY_SUPPORT
//               ? t.TYPED_ARRAY_SUPPORT
//               : (function () {
//                   try {
//                     var t = new Uint8Array(1);
//                     return (
//                       (t.__proto__ = {
//                         __proto__: Uint8Array.prototype,
//                         foo: function () {
//                           return 42;
//                         },
//                       }),
//                       42 === t.foo() &&
//                         "function" == typeof t.subarray &&
//                         0 === t.subarray(1, 1).byteLength
//                     );
//                   } catch (t) {
//                     return !1;
//                   }
//                 })()),
//           (e.kMaxLength = c()),
//           (f.poolSize = 8192),
//           (f._augment = function (t) {
//             return (t.__proto__ = f.prototype), t;
//           }),
//           (f.from = function (t, e, n) {
//             return h(null, t, e, n);
//           }),
//           f.TYPED_ARRAY_SUPPORT &&
//             ((f.prototype.__proto__ = Uint8Array.prototype),
//             (f.__proto__ = Uint8Array),
//             "undefined" != typeof Symbol &&
//               Symbol.species &&
//               f[Symbol.species] === f &&
//               Object.defineProperty(f, Symbol.species, {
//                 value: null,
//                 configurable: !0,
//               })),
//           (f.alloc = function (t, e, n) {
//             return (function (t, e, n, r) {
//               return (
//                 m(e),
//                 e <= 0
//                   ? l(t, e)
//                   : void 0 !== n
//                   ? "string" == typeof r
//                     ? l(t, e).fill(n, r)
//                     : l(t, e).fill(n)
//                   : l(t, e)
//               );
//             })(null, t, e, n);
//           }),
//           (f.allocUnsafe = function (t) {
//             return y(null, t);
//           }),
//           (f.allocUnsafeSlow = function (t) {
//             return y(null, t);
//           }),
//           (f.isBuffer = function (b) {
//             return !(null == b || !b._isBuffer);
//           }),
//           (f.compare = function (a, b) {
//             if (!f.isBuffer(a) || !f.isBuffer(b))
//               throw new TypeError("Arguments must be Buffers");
//             if (a === b) return 0;
//             for (
//               var t = a.length, e = b.length, i = 0, n = Math.min(t, e);
//               i < n;
//               ++i
//             )
//               if (a[i] !== b[i]) {
//                 (t = a[i]), (e = b[i]);
//                 break;
//               }
//             return t < e ? -1 : e < t ? 1 : 0;
//           }),
//           (f.isEncoding = function (t) {
//             switch (String(t).toLowerCase()) {
//               case "hex":
//               case "utf8":
//               case "utf-8":
//               case "ascii":
//               case "latin1":
//               case "binary":
//               case "base64":
//               case "ucs2":
//               case "ucs-2":
//               case "utf16le":
//               case "utf-16le":
//                 return !0;
//               default:
//                 return !1;
//             }
//           }),
//           (f.concat = function (t, e) {
//             if (!o(t))
//               throw new TypeError(
//                 '"list" argument must be an Array of Buffers'
//               );
//             if (0 === t.length) return f.alloc(0);
//             var i;
//             if (void 0 === e)
//               for (e = 0, i = 0; i < t.length; ++i) e += t[i].length;
//             var n = f.allocUnsafe(e),
//               r = 0;
//             for (i = 0; i < t.length; ++i) {
//               var d = t[i];
//               if (!f.isBuffer(d))
//                 throw new TypeError(
//                   '"list" argument must be an Array of Buffers'
//                 );
//               d.copy(n, r), (r += d.length);
//             }
//             return n;
//           }),
//           (f.byteLength = P),
//           (f.prototype._isBuffer = !0),
//           (f.prototype.swap16 = function () {
//             var t = this.length;
//             if (t % 2 != 0)
//               throw new RangeError("Buffer size must be a multiple of 16-bits");
//             for (var i = 0; i < t; i += 2) A(this, i, i + 1);
//             return this;
//           }),
//           (f.prototype.swap32 = function () {
//             var t = this.length;
//             if (t % 4 != 0)
//               throw new RangeError("Buffer size must be a multiple of 32-bits");
//             for (var i = 0; i < t; i += 4)
//               A(this, i, i + 3), A(this, i + 1, i + 2);
//             return this;
//           }),
//           (f.prototype.swap64 = function () {
//             var t = this.length;
//             if (t % 8 != 0)
//               throw new RangeError("Buffer size must be a multiple of 64-bits");
//             for (var i = 0; i < t; i += 8)
//               A(this, i, i + 7),
//                 A(this, i + 1, i + 6),
//                 A(this, i + 2, i + 5),
//                 A(this, i + 3, i + 4);
//             return this;
//           }),
//           (f.prototype.toString = function () {
//             var t = 0 | this.length;
//             return 0 === t
//               ? ""
//               : 0 === arguments.length
//               ? V(this, 0, t)
//               : _.apply(this, arguments);
//           }),
//           (f.prototype.equals = function (b) {
//             if (!f.isBuffer(b))
//               throw new TypeError("Argument must be a Buffer");
//             return this === b || 0 === f.compare(this, b);
//           }),
//           (f.prototype.inspect = function () {
//             var t = "",
//               n = e.INSPECT_MAX_BYTES;
//             return (
//               this.length > 0 &&
//                 ((t = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
//                 this.length > n && (t += " ... ")),
//               "<Buffer " + t + ">"
//             );
//           }),
//           (f.prototype.compare = function (t, e, n, r, d) {
//             if (!f.isBuffer(t))
//               throw new TypeError("Argument must be a Buffer");
//             if (
//               (void 0 === e && (e = 0),
//               void 0 === n && (n = t ? t.length : 0),
//               void 0 === r && (r = 0),
//               void 0 === d && (d = this.length),
//               e < 0 || n > t.length || r < 0 || d > this.length)
//             )
//               throw new RangeError("out of range index");
//             if (r >= d && e >= n) return 0;
//             if (r >= d) return -1;
//             if (e >= n) return 1;
//             if (this === t) return 0;
//             for (
//               var o = (d >>>= 0) - (r >>>= 0),
//                 c = (n >>>= 0) - (e >>>= 0),
//                 l = Math.min(o, c),
//                 h = this.slice(r, d),
//                 m = t.slice(e, n),
//                 i = 0;
//               i < l;
//               ++i
//             )
//               if (h[i] !== m[i]) {
//                 (o = h[i]), (c = m[i]);
//                 break;
//               }
//             return o < c ? -1 : c < o ? 1 : 0;
//           }),
//           (f.prototype.includes = function (t, e, n) {
//             return -1 !== this.indexOf(t, e, n);
//           }),
//           (f.prototype.indexOf = function (t, e, n) {
//             return w(this, t, e, n, !0);
//           }),
//           (f.prototype.lastIndexOf = function (t, e, n) {
//             return w(this, t, e, n, !1);
//           }),
//           (f.prototype.write = function (t, e, n, r) {
//             if (void 0 === e) (r = "utf8"), (n = this.length), (e = 0);
//             else if (void 0 === n && "string" == typeof e)
//               (r = e), (n = this.length), (e = 0);
//             else {
//               if (!isFinite(e))
//                 throw new Error(
//                   "Buffer.write(string, encoding, offset[, length]) is no longer supported"
//                 );
//               (e |= 0),
//                 isFinite(n)
//                   ? ((n |= 0), void 0 === r && (r = "utf8"))
//                   : ((r = n), (n = void 0));
//             }
//             var d = this.length - e;
//             if (
//               ((void 0 === n || n > d) && (n = d),
//               (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
//             )
//               throw new RangeError("Attempt to write outside buffer bounds");
//             r || (r = "utf8");
//             for (var o = !1; ; )
//               switch (r) {
//                 case "hex":
//                   return O(this, t, e, n);
//                 case "utf8":
//                 case "utf-8":
//                   return k(this, t, e, n);
//                 case "ascii":
//                   return S(this, t, e, n);
//                 case "latin1":
//                 case "binary":
//                   return E(this, t, e, n);
//                 case "base64":
//                   return I(this, t, e, n);
//                 case "ucs2":
//                 case "ucs-2":
//                 case "utf16le":
//                 case "utf-16le":
//                   return x(this, t, e, n);
//                 default:
//                   if (o) throw new TypeError("Unknown encoding: " + r);
//                   (r = ("" + r).toLowerCase()), (o = !0);
//               }
//           }),
//           (f.prototype.toJSON = function () {
//             return {
//               type: "Buffer",
//               data: Array.prototype.slice.call(this._arr || this, 0),
//             };
//           });
//         var U = 4096;
//         function D(t, e, n) {
//           var r = "";
//           n = Math.min(t.length, n);
//           for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
//           return r;
//         }
//         function j(t, e, n) {
//           var r = "";
//           n = Math.min(t.length, n);
//           for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
//           return r;
//         }
//         function N(t, e, n) {
//           var r = t.length;
//           (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
//           for (var d = "", i = e; i < n; ++i) d += Q(t[i]);
//           return d;
//         }
//         function R(t, e, n) {
//           for (var r = t.slice(e, n), d = "", i = 0; i < r.length; i += 2)
//             d += String.fromCharCode(r[i] + 256 * r[i + 1]);
//           return d;
//         }
//         function M(t, e, n) {
//           if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
//           if (t + e > n)
//             throw new RangeError("Trying to access beyond buffer length");
//         }
//         function B(t, e, n, r, d, o) {
//           if (!f.isBuffer(t))
//             throw new TypeError('"buffer" argument must be a Buffer instance');
//           if (e > d || e < o)
//             throw new RangeError('"value" argument is out of bounds');
//           if (n + r > t.length) throw new RangeError("Index out of range");
//         }
//         function L(t, e, n, r) {
//           e < 0 && (e = 65535 + e + 1);
//           for (var i = 0, d = Math.min(t.length - n, 2); i < d; ++i)
//             t[n + i] =
//               (e & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
//         }
//         function G(t, e, n, r) {
//           e < 0 && (e = 4294967295 + e + 1);
//           for (var i = 0, d = Math.min(t.length - n, 4); i < d; ++i)
//             t[n + i] = (e >>> (8 * (r ? i : 3 - i))) & 255;
//         }
//         function z(t, e, n, r, d, o) {
//           if (n + r > t.length) throw new RangeError("Index out of range");
//           if (n < 0) throw new RangeError("Index out of range");
//         }
//         function H(t, e, n, r, o) {
//           return o || z(t, 0, n, 4), d.write(t, e, n, r, 23, 4), n + 4;
//         }
//         function J(t, e, n, r, o) {
//           return o || z(t, 0, n, 8), d.write(t, e, n, r, 52, 8), n + 8;
//         }
//         (f.prototype.slice = function (t, e) {
//           var n,
//             r = this.length;
//           if (
//             ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
//             (e = void 0 === e ? r : ~~e) < 0
//               ? (e += r) < 0 && (e = 0)
//               : e > r && (e = r),
//             e < t && (e = t),
//             f.TYPED_ARRAY_SUPPORT)
//           )
//             (n = this.subarray(t, e)).__proto__ = f.prototype;
//           else {
//             var d = e - t;
//             n = new f(d, void 0);
//             for (var i = 0; i < d; ++i) n[i] = this[i + t];
//           }
//           return n;
//         }),
//           (f.prototype.readUIntLE = function (t, e, n) {
//             (t |= 0), (e |= 0), n || M(t, e, this.length);
//             for (var r = this[t], d = 1, i = 0; ++i < e && (d *= 256); )
//               r += this[t + i] * d;
//             return r;
//           }),
//           (f.prototype.readUIntBE = function (t, e, n) {
//             (t |= 0), (e |= 0), n || M(t, e, this.length);
//             for (var r = this[t + --e], d = 1; e > 0 && (d *= 256); )
//               r += this[t + --e] * d;
//             return r;
//           }),
//           (f.prototype.readUInt8 = function (t, e) {
//             return e || M(t, 1, this.length), this[t];
//           }),
//           (f.prototype.readUInt16LE = function (t, e) {
//             return e || M(t, 2, this.length), this[t] | (this[t + 1] << 8);
//           }),
//           (f.prototype.readUInt16BE = function (t, e) {
//             return e || M(t, 2, this.length), (this[t] << 8) | this[t + 1];
//           }),
//           (f.prototype.readUInt32LE = function (t, e) {
//             return (
//               e || M(t, 4, this.length),
//               (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
//                 16777216 * this[t + 3]
//             );
//           }),
//           (f.prototype.readUInt32BE = function (t, e) {
//             return (
//               e || M(t, 4, this.length),
//               16777216 * this[t] +
//                 ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
//             );
//           }),
//           (f.prototype.readIntLE = function (t, e, n) {
//             (t |= 0), (e |= 0), n || M(t, e, this.length);
//             for (var r = this[t], d = 1, i = 0; ++i < e && (d *= 256); )
//               r += this[t + i] * d;
//             return r >= (d *= 128) && (r -= Math.pow(2, 8 * e)), r;
//           }),
//           (f.prototype.readIntBE = function (t, e, n) {
//             (t |= 0), (e |= 0), n || M(t, e, this.length);
//             for (var i = e, r = 1, d = this[t + --i]; i > 0 && (r *= 256); )
//               d += this[t + --i] * r;
//             return d >= (r *= 128) && (d -= Math.pow(2, 8 * e)), d;
//           }),
//           (f.prototype.readInt8 = function (t, e) {
//             return (
//               e || M(t, 1, this.length),
//               128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
//             );
//           }),
//           (f.prototype.readInt16LE = function (t, e) {
//             e || M(t, 2, this.length);
//             var n = this[t] | (this[t + 1] << 8);
//             return 32768 & n ? 4294901760 | n : n;
//           }),
//           (f.prototype.readInt16BE = function (t, e) {
//             e || M(t, 2, this.length);
//             var n = this[t + 1] | (this[t] << 8);
//             return 32768 & n ? 4294901760 | n : n;
//           }),
//           (f.prototype.readInt32LE = function (t, e) {
//             return (
//               e || M(t, 4, this.length),
//               this[t] |
//                 (this[t + 1] << 8) |
//                 (this[t + 2] << 16) |
//                 (this[t + 3] << 24)
//             );
//           }),
//           (f.prototype.readInt32BE = function (t, e) {
//             return (
//               e || M(t, 4, this.length),
//               (this[t] << 24) |
//                 (this[t + 1] << 16) |
//                 (this[t + 2] << 8) |
//                 this[t + 3]
//             );
//           }),
//           (f.prototype.readFloatLE = function (t, e) {
//             return e || M(t, 4, this.length), d.read(this, t, !0, 23, 4);
//           }),
//           (f.prototype.readFloatBE = function (t, e) {
//             return e || M(t, 4, this.length), d.read(this, t, !1, 23, 4);
//           }),
//           (f.prototype.readDoubleLE = function (t, e) {
//             return e || M(t, 8, this.length), d.read(this, t, !0, 52, 8);
//           }),
//           (f.prototype.readDoubleBE = function (t, e) {
//             return e || M(t, 8, this.length), d.read(this, t, !1, 52, 8);
//           }),
//           (f.prototype.writeUIntLE = function (t, e, n, r) {
//             ((t = +t), (e |= 0), (n |= 0), r) ||
//               B(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
//             var d = 1,
//               i = 0;
//             for (this[e] = 255 & t; ++i < n && (d *= 256); )
//               this[e + i] = (t / d) & 255;
//             return e + n;
//           }),
//           (f.prototype.writeUIntBE = function (t, e, n, r) {
//             ((t = +t), (e |= 0), (n |= 0), r) ||
//               B(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
//             var i = n - 1,
//               d = 1;
//             for (this[e + i] = 255 & t; --i >= 0 && (d *= 256); )
//               this[e + i] = (t / d) & 255;
//             return e + n;
//           }),
//           (f.prototype.writeUInt8 = function (t, e, n) {
//             return (
//               (t = +t),
//               (e |= 0),
//               n || B(this, t, e, 1, 255, 0),
//               f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
//               (this[e] = 255 & t),
//               e + 1
//             );
//           }),
//           (f.prototype.writeUInt16LE = function (t, e, n) {
//             return (
//               (t = +t),
//               (e |= 0),
//               n || B(this, t, e, 2, 65535, 0),
//               f.TYPED_ARRAY_SUPPORT
//                 ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
//                 : L(this, t, e, !0),
//               e + 2
//             );
//           }),
//           (f.prototype.writeUInt16BE = function (t, e, n) {
//             return (
//               (t = +t),
//               (e |= 0),
//               n || B(this, t, e, 2, 65535, 0),
//               f.TYPED_ARRAY_SUPPORT
//                 ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
//                 : L(this, t, e, !1),
//               e + 2
//             );
//           }),
//           (f.prototype.writeUInt32LE = function (t, e, n) {
//             return (
//               (t = +t),
//               (e |= 0),
//               n || B(this, t, e, 4, 4294967295, 0),
//               f.TYPED_ARRAY_SUPPORT
//                 ? ((this[e + 3] = t >>> 24),
//                   (this[e + 2] = t >>> 16),
//                   (this[e + 1] = t >>> 8),
//                   (this[e] = 255 & t))
//                 : G(this, t, e, !0),
//               e + 4
//             );
//           }),
//           (f.prototype.writeUInt32BE = function (t, e, n) {
//             return (
//               (t = +t),
//               (e |= 0),
//               n || B(this, t, e, 4, 4294967295, 0),
//               f.TYPED_ARRAY_SUPPORT
//                 ? ((this[e] = t >>> 24),
//                   (this[e + 1] = t >>> 16),
//                   (this[e + 2] = t >>> 8),
//                   (this[e + 3] = 255 & t))
//                 : G(this, t, e, !1),
//               e + 4
//             );
//           }),
//           (f.prototype.writeIntLE = function (t, e, n, r) {
//             if (((t = +t), (e |= 0), !r)) {
//               var d = Math.pow(2, 8 * n - 1);
//               B(this, t, e, n, d - 1, -d);
//             }
//             var i = 0,
//               o = 1,
//               sub = 0;
//             for (this[e] = 255 & t; ++i < n && (o *= 256); )
//               t < 0 && 0 === sub && 0 !== this[e + i - 1] && (sub = 1),
//                 (this[e + i] = (((t / o) >> 0) - sub) & 255);
//             return e + n;
//           }),
//           (f.prototype.writeIntBE = function (t, e, n, r) {
//             if (((t = +t), (e |= 0), !r)) {
//               var d = Math.pow(2, 8 * n - 1);
//               B(this, t, e, n, d - 1, -d);
//             }
//             var i = n - 1,
//               o = 1,
//               sub = 0;
//             for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
//               t < 0 && 0 === sub && 0 !== this[e + i + 1] && (sub = 1),
//                 (this[e + i] = (((t / o) >> 0) - sub) & 255);
//             return e + n;
//           }),
//           (f.prototype.writeInt8 = function (t, e, n) {
//             return (
//               (t = +t),
//               (e |= 0),
//               n || B(this, t, e, 1, 127, -128),
//               f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
//               t < 0 && (t = 255 + t + 1),
//               (this[e] = 255 & t),
//               e + 1
//             );
//           }),
//           (f.prototype.writeInt16LE = function (t, e, n) {
//             return (
//               (t = +t),
//               (e |= 0),
//               n || B(this, t, e, 2, 32767, -32768),
//               f.TYPED_ARRAY_SUPPORT
//                 ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
//                 : L(this, t, e, !0),
//               e + 2
//             );
//           }),
//           (f.prototype.writeInt16BE = function (t, e, n) {
//             return (
//               (t = +t),
//               (e |= 0),
//               n || B(this, t, e, 2, 32767, -32768),
//               f.TYPED_ARRAY_SUPPORT
//                 ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
//                 : L(this, t, e, !1),
//               e + 2
//             );
//           }),
//           (f.prototype.writeInt32LE = function (t, e, n) {
//             return (
//               (t = +t),
//               (e |= 0),
//               n || B(this, t, e, 4, 2147483647, -2147483648),
//               f.TYPED_ARRAY_SUPPORT
//                 ? ((this[e] = 255 & t),
//                   (this[e + 1] = t >>> 8),
//                   (this[e + 2] = t >>> 16),
//                   (this[e + 3] = t >>> 24))
//                 : G(this, t, e, !0),
//               e + 4
//             );
//           }),
//           (f.prototype.writeInt32BE = function (t, e, n) {
//             return (
//               (t = +t),
//               (e |= 0),
//               n || B(this, t, e, 4, 2147483647, -2147483648),
//               t < 0 && (t = 4294967295 + t + 1),
//               f.TYPED_ARRAY_SUPPORT
//                 ? ((this[e] = t >>> 24),
//                   (this[e + 1] = t >>> 16),
//                   (this[e + 2] = t >>> 8),
//                   (this[e + 3] = 255 & t))
//                 : G(this, t, e, !1),
//               e + 4
//             );
//           }),
//           (f.prototype.writeFloatLE = function (t, e, n) {
//             return H(this, t, e, !0, n);
//           }),
//           (f.prototype.writeFloatBE = function (t, e, n) {
//             return H(this, t, e, !1, n);
//           }),
//           (f.prototype.writeDoubleLE = function (t, e, n) {
//             return J(this, t, e, !0, n);
//           }),
//           (f.prototype.writeDoubleBE = function (t, e, n) {
//             return J(this, t, e, !1, n);
//           }),
//           (f.prototype.copy = function (t, e, n, r) {
//             if (
//               (n || (n = 0),
//               r || 0 === r || (r = this.length),
//               e >= t.length && (e = t.length),
//               e || (e = 0),
//               r > 0 && r < n && (r = n),
//               r === n)
//             )
//               return 0;
//             if (0 === t.length || 0 === this.length) return 0;
//             if (e < 0) throw new RangeError("targetStart out of bounds");
//             if (n < 0 || n >= this.length)
//               throw new RangeError("sourceStart out of bounds");
//             if (r < 0) throw new RangeError("sourceEnd out of bounds");
//             r > this.length && (r = this.length),
//               t.length - e < r - n && (r = t.length - e + n);
//             var i,
//               d = r - n;
//             if (this === t && n < e && e < r)
//               for (i = d - 1; i >= 0; --i) t[i + e] = this[i + n];
//             else if (d < 1e3 || !f.TYPED_ARRAY_SUPPORT)
//               for (i = 0; i < d; ++i) t[i + e] = this[i + n];
//             else Uint8Array.prototype.set.call(t, this.subarray(n, n + d), e);
//             return d;
//           }),
//           (f.prototype.fill = function (t, e, n, r) {
//             if ("string" == typeof t) {
//               if (
//                 ("string" == typeof e
//                   ? ((r = e), (e = 0), (n = this.length))
//                   : "string" == typeof n && ((r = n), (n = this.length)),
//                 1 === t.length)
//               ) {
//                 var code = t.charCodeAt(0);
//                 code < 256 && (t = code);
//               }
//               if (void 0 !== r && "string" != typeof r)
//                 throw new TypeError("encoding must be a string");
//               if ("string" == typeof r && !f.isEncoding(r))
//                 throw new TypeError("Unknown encoding: " + r);
//             } else "number" == typeof t && (t &= 255);
//             if (e < 0 || this.length < e || this.length < n)
//               throw new RangeError("Out of range index");
//             if (n <= e) return this;
//             var i;
//             if (
//               ((e >>>= 0),
//               (n = void 0 === n ? this.length : n >>> 0),
//               t || (t = 0),
//               "number" == typeof t)
//             )
//               for (i = e; i < n; ++i) this[i] = t;
//             else {
//               var d = f.isBuffer(t) ? t : $(new f(t, r).toString()),
//                 o = d.length;
//               for (i = 0; i < n - e; ++i) this[i + e] = d[i % o];
//             }
//             return this;
//           });
//         var W = /[^+\/0-9A-Za-z-_]/g;
//         function Q(t) {
//           return t < 16 ? "0" + t.toString(16) : t.toString(16);
//         }
//         function $(t, e) {
//           var n;
//           e = e || 1 / 0;
//           for (var r = t.length, d = null, o = [], i = 0; i < r; ++i) {
//             if ((n = t.charCodeAt(i)) > 55295 && n < 57344) {
//               if (!d) {
//                 if (n > 56319) {
//                   (e -= 3) > -1 && o.push(239, 191, 189);
//                   continue;
//                 }
//                 if (i + 1 === r) {
//                   (e -= 3) > -1 && o.push(239, 191, 189);
//                   continue;
//                 }
//                 d = n;
//                 continue;
//               }
//               if (n < 56320) {
//                 (e -= 3) > -1 && o.push(239, 191, 189), (d = n);
//                 continue;
//               }
//               n = 65536 + (((d - 55296) << 10) | (n - 56320));
//             } else d && (e -= 3) > -1 && o.push(239, 191, 189);
//             if (((d = null), n < 128)) {
//               if ((e -= 1) < 0) break;
//               o.push(n);
//             } else if (n < 2048) {
//               if ((e -= 2) < 0) break;
//               o.push((n >> 6) | 192, (63 & n) | 128);
//             } else if (n < 65536) {
//               if ((e -= 3) < 0) break;
//               o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
//             } else {
//               if (!(n < 1114112)) throw new Error("Invalid code point");
//               if ((e -= 4) < 0) break;
//               o.push(
//                 (n >> 18) | 240,
//                 ((n >> 12) & 63) | 128,
//                 ((n >> 6) & 63) | 128,
//                 (63 & n) | 128
//               );
//             }
//           }
//           return o;
//         }
//         function Y(t) {
//           return r.toByteArray(
//             (function (t) {
//               if (
//                 (t = (function (t) {
//                   return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
//                 })(t).replace(W, "")).length < 2
//               )
//                 return "";
//               for (; t.length % 4 != 0; ) t += "=";
//               return t;
//             })(t)
//           );
//         }
//         function K(t, e, n, r) {
//           for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i)
//             e[i + n] = t[i];
//           return i;
//         }
//       }).call(this, n(34));
//     },
//     function (t, e, n) {
//       "use strict";
//       (e.byteLength = function (t) {
//         var e = l(t),
//           n = e[0],
//           r = e[1];
//         return (3 * (n + r)) / 4 - r;
//       }),
//         (e.toByteArray = function (t) {
//           var e,
//             i,
//             n = l(t),
//             r = n[0],
//             c = n[1],
//             f = new o(
//               (function (t, e, n) {
//                 return (3 * (e + n)) / 4 - n;
//               })(0, r, c)
//             ),
//             h = 0,
//             m = c > 0 ? r - 4 : r;
//           for (i = 0; i < m; i += 4)
//             (e =
//               (d[t.charCodeAt(i)] << 18) |
//               (d[t.charCodeAt(i + 1)] << 12) |
//               (d[t.charCodeAt(i + 2)] << 6) |
//               d[t.charCodeAt(i + 3)]),
//               (f[h++] = (e >> 16) & 255),
//               (f[h++] = (e >> 8) & 255),
//               (f[h++] = 255 & e);
//           2 === c &&
//             ((e = (d[t.charCodeAt(i)] << 2) | (d[t.charCodeAt(i + 1)] >> 4)),
//             (f[h++] = 255 & e));
//           1 === c &&
//             ((e =
//               (d[t.charCodeAt(i)] << 10) |
//               (d[t.charCodeAt(i + 1)] << 4) |
//               (d[t.charCodeAt(i + 2)] >> 2)),
//             (f[h++] = (e >> 8) & 255),
//             (f[h++] = 255 & e));
//           return f;
//         }),
//         (e.fromByteArray = function (t) {
//           for (
//             var e, n = t.length, d = n % 3, o = [], c = 16383, i = 0, l = n - d;
//             i < l;
//             i += c
//           )
//             o.push(f(t, i, i + c > l ? l : i + c));
//           1 === d
//             ? ((e = t[n - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
//             : 2 === d &&
//               ((e = (t[n - 2] << 8) + t[n - 1]),
//               o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="));
//           return o.join("");
//         });
//       for (
//         var r = [],
//           d = [],
//           o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
//           code =
//             "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
//           i = 0,
//           c = code.length;
//         i < c;
//         ++i
//       )
//         (r[i] = code[i]), (d[code.charCodeAt(i)] = i);
//       function l(t) {
//         var e = t.length;
//         if (e % 4 > 0)
//           throw new Error("Invalid string. Length must be a multiple of 4");
//         var n = t.indexOf("=");
//         return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
//       }
//       function f(t, e, n) {
//         for (var d, o, output = [], i = e; i < n; i += 3)
//           (d =
//             ((t[i] << 16) & 16711680) +
//             ((t[i + 1] << 8) & 65280) +
//             (255 & t[i + 2])),
//             output.push(
//               r[((o = d) >> 18) & 63] +
//                 r[(o >> 12) & 63] +
//                 r[(o >> 6) & 63] +
//                 r[63 & o]
//             );
//         return output.join("");
//       }
//       (d["-".charCodeAt(0)] = 62), (d["_".charCodeAt(0)] = 63);
//     },
//     function (t, e) {
//       (e.read = function (t, e, n, r, d) {
//         var o,
//           c,
//           l = 8 * d - r - 1,
//           f = (1 << l) - 1,
//           h = f >> 1,
//           m = -7,
//           i = n ? d - 1 : 0,
//           y = n ? -1 : 1,
//           s = t[e + i];
//         for (
//           i += y, o = s & ((1 << -m) - 1), s >>= -m, m += l;
//           m > 0;
//           o = 256 * o + t[e + i], i += y, m -= 8
//         );
//         for (
//           c = o & ((1 << -m) - 1), o >>= -m, m += r;
//           m > 0;
//           c = 256 * c + t[e + i], i += y, m -= 8
//         );
//         if (0 === o) o = 1 - h;
//         else {
//           if (o === f) return c ? NaN : (1 / 0) * (s ? -1 : 1);
//           (c += Math.pow(2, r)), (o -= h);
//         }
//         return (s ? -1 : 1) * c * Math.pow(2, o - r);
//       }),
//         (e.write = function (t, e, n, r, d, o) {
//           var c,
//             l,
//             f,
//             h = 8 * o - d - 1,
//             m = (1 << h) - 1,
//             y = m >> 1,
//             rt = 23 === d ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
//             i = r ? 0 : o - 1,
//             v = r ? 1 : -1,
//             s = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
//           for (
//             e = Math.abs(e),
//               isNaN(e) || e === 1 / 0
//                 ? ((l = isNaN(e) ? 1 : 0), (c = m))
//                 : ((c = Math.floor(Math.log(e) / Math.LN2)),
//                   e * (f = Math.pow(2, -c)) < 1 && (c--, (f *= 2)),
//                   (e += c + y >= 1 ? rt / f : rt * Math.pow(2, 1 - y)) * f >=
//                     2 && (c++, (f /= 2)),
//                   c + y >= m
//                     ? ((l = 0), (c = m))
//                     : c + y >= 1
//                     ? ((l = (e * f - 1) * Math.pow(2, d)), (c += y))
//                     : ((l = e * Math.pow(2, y - 1) * Math.pow(2, d)), (c = 0)));
//             d >= 8;
//             t[n + i] = 255 & l, i += v, l /= 256, d -= 8
//           );
//           for (
//             c = (c << d) | l, h += d;
//             h > 0;
//             t[n + i] = 255 & c, i += v, c /= 256, h -= 8
//           );
//           t[n + i - v] |= 128 * s;
//         });
//     },
//     function (t, e) {
//       var n = {}.toString;
//       t.exports =
//         Array.isArray ||
//         function (t) {
//           return "[object Array]" == n.call(t);
//         };
//     },
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       "use strict";
//       t.exports = function (t, e) {
//         return (
//           e || (e = {}),
//           "string" != typeof (t = t && t.__esModule ? t.default : t)
//             ? t
//             : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
//               e.hash && (t += e.hash),
//               /["'() \t\n]/.test(t) || e.needQuotes
//                 ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
//                 : t)
//         );
//       };
//     },
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     ,
//     function (t, e, n) {
//       t.exports = self.fetch || (self.fetch = n(94).default || n(94));
//     },
//     function (t, e, n) {
//       "use strict";
//       var r,
//         d =
//           (this && this.__extends) ||
//           ((r = function (t, b) {
//             return (
//               (r =
//                 Object.setPrototypeOf ||
//                 ({ __proto__: [] } instanceof Array &&
//                   function (t, b) {
//                     t.__proto__ = b;
//                   }) ||
//                 function (t, b) {
//                   for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p]);
//                 }),
//               r(t, b)
//             );
//           }),
//           function (t, b) {
//             function e() {
//               this.constructor = t;
//             }
//             r(t, b),
//               (t.prototype =
//                 null === b
//                   ? Object.create(b)
//                   : ((e.prototype = b.prototype), new e()));
//           });
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var o = n(51);
//       e.filter = function (t, e) {
//         return function (source) {
//           return source.lift(new c(t, e));
//         };
//       };
//       var c = (function () {
//           function t(t, e) {
//             (this.predicate = t), (this.thisArg = e);
//           }
//           return (
//             (t.prototype.call = function (t, source) {
//               return source.subscribe(new l(t, this.predicate, this.thisArg));
//             }),
//             t
//           );
//         })(),
//         l = (function (t) {
//           function e(e, n, r) {
//             var d = t.call(this, e) || this;
//             return (d.predicate = n), (d.thisArg = r), (d.count = 0), d;
//           }
//           return (
//             d(e, t),
//             (e.prototype._next = function (t) {
//               var e;
//               try {
//                 e = this.predicate.call(this.thisArg, t, this.count++);
//               } catch (t) {
//                 return void this.destination.error(t);
//               }
//               e && this.destination.next(t);
//             }),
//             e
//           );
//         })(o.Subscriber);
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var r = n(403),
//         d = n(404),
//         o = n(196),
//         c = n(405),
//         l = (function () {
//           function t(t) {
//             (this.closed = !1),
//               (this._parentOrParents = null),
//               (this._subscriptions = null),
//               t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
//           }
//           var e;
//           return (
//             (t.prototype.unsubscribe = function () {
//               var e;
//               if (!this.closed) {
//                 var n = this,
//                   l = n._parentOrParents,
//                   h = n._ctorUnsubscribe,
//                   m = n._unsubscribe,
//                   y = n._subscriptions;
//                 if (
//                   ((this.closed = !0),
//                   (this._parentOrParents = null),
//                   (this._subscriptions = null),
//                   l instanceof t)
//                 )
//                   l.remove(this);
//                 else if (null !== l)
//                   for (var v = 0; v < l.length; ++v) {
//                     l[v].remove(this);
//                   }
//                 if (o.isFunction(m)) {
//                   h && (this._unsubscribe = void 0);
//                   try {
//                     m.call(this);
//                   } catch (t) {
//                     e = t instanceof c.UnsubscriptionError ? f(t.errors) : [t];
//                   }
//                 }
//                 if (r.isArray(y)) {
//                   v = -1;
//                   for (var C = y.length; ++v < C; ) {
//                     var sub = y[v];
//                     if (d.isObject(sub))
//                       try {
//                         sub.unsubscribe();
//                       } catch (t) {
//                         (e = e || []),
//                           t instanceof c.UnsubscriptionError
//                             ? (e = e.concat(f(t.errors)))
//                             : e.push(t);
//                       }
//                   }
//                 }
//                 if (e) throw new c.UnsubscriptionError(e);
//               }
//             }),
//             (t.prototype.add = function (e) {
//               var n = e;
//               if (!e) return t.EMPTY;
//               switch (typeof e) {
//                 case "function":
//                   n = new t(e);
//                 case "object":
//                   if (
//                     n === this ||
//                     n.closed ||
//                     "function" != typeof n.unsubscribe
//                   )
//                     return n;
//                   if (this.closed) return n.unsubscribe(), n;
//                   if (!(n instanceof t)) {
//                     var r = n;
//                     (n = new t())._subscriptions = [r];
//                   }
//                   break;
//                 default:
//                   throw new Error(
//                     "unrecognized teardown " + e + " added to Subscription."
//                   );
//               }
//               var d = n._parentOrParents;
//               if (null === d) n._parentOrParents = this;
//               else if (d instanceof t) {
//                 if (d === this) return n;
//                 n._parentOrParents = [d, this];
//               } else {
//                 if (-1 !== d.indexOf(this)) return n;
//                 d.push(this);
//               }
//               var o = this._subscriptions;
//               return null === o ? (this._subscriptions = [n]) : o.push(n), n;
//             }),
//             (t.prototype.remove = function (t) {
//               var e = this._subscriptions;
//               if (e) {
//                 var n = e.indexOf(t);
//                 -1 !== n && e.splice(n, 1);
//               }
//             }),
//             (t.EMPTY = (((e = new t()).closed = !0), e)),
//             t
//           );
//         })();
//       function f(t) {
//         return t.reduce(function (t, e) {
//           return t.concat(e instanceof c.UnsubscriptionError ? e.errors : e);
//         }, []);
//       }
//       e.Subscription = l;
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 }),
//         (e.isArray =
//           Array.isArray ||
//           function (t) {
//             return t && "number" == typeof t.length;
//           });
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 }),
//         (e.isObject = function (t) {
//           return null !== t && "object" == typeof t;
//         });
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var r = (function () {
//         function t(t) {
//           return (
//             Error.call(this),
//             (this.message = t
//               ? t.length +
//                 " errors occurred during unsubscription:\n" +
//                 t
//                   .map(function (t, i) {
//                     return i + 1 + ") " + t.toString();
//                   })
//                   .join("\n  ")
//               : ""),
//             (this.name = "UnsubscriptionError"),
//             (this.errors = t),
//             this
//           );
//         }
//         return (t.prototype = Object.create(Error.prototype)), t;
//       })();
//       e.UnsubscriptionError = r;
//     },
//     function (t, e, n) {
//       "use strict";
//       var r,
//         d =
//           (this && this.__extends) ||
//           ((r = function (t, b) {
//             return (
//               (r =
//                 Object.setPrototypeOf ||
//                 ({ __proto__: [] } instanceof Array &&
//                   function (t, b) {
//                     t.__proto__ = b;
//                   }) ||
//                 function (t, b) {
//                   for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p]);
//                 }),
//               r(t, b)
//             );
//           }),
//           function (t, b) {
//             function e() {
//               this.constructor = t;
//             }
//             r(t, b),
//               (t.prototype =
//                 null === b
//                   ? Object.create(b)
//                   : ((e.prototype = b.prototype), new e()));
//           });
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var o = n(51);
//       e.map = function (t, e) {
//         return function (source) {
//           if ("function" != typeof t)
//             throw new TypeError(
//               "argument is not a function. Are you looking for `mapTo()`?"
//             );
//           return source.lift(new c(t, e));
//         };
//       };
//       var c = (function () {
//         function t(t, e) {
//           (this.project = t), (this.thisArg = e);
//         }
//         return (
//           (t.prototype.call = function (t, source) {
//             return source.subscribe(new l(t, this.project, this.thisArg));
//           }),
//           t
//         );
//       })();
//       e.MapOperator = c;
//       var l = (function (t) {
//         function e(e, n, r) {
//           var d = t.call(this, e) || this;
//           return (d.project = n), (d.count = 0), (d.thisArg = r || d), d;
//         }
//         return (
//           d(e, t),
//           (e.prototype._next = function (t) {
//             var e;
//             try {
//               e = this.project.call(this.thisArg, t, this.count++);
//             } catch (t) {
//               return void this.destination.error(t);
//             }
//             this.destination.next(e);
//           }),
//           e
//         );
//       })(o.Subscriber);
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(408),
//         d = Object.prototype.hasOwnProperty,
//         o = Object.prototype.propertyIsEnumerable;
//       function c(t, e, n) {
//         var o = e[n];
//         if (null != o) {
//           if (d.call(t, n) && (void 0 === t[n] || null === t[n]))
//             throw new TypeError(
//               "Cannot convert undefined or null to object (" + n + ")"
//             );
//           d.call(t, n) && r(o) ? (t[n] = l(Object(t[n]), e[n])) : (t[n] = o);
//         }
//       }
//       function l(t, e) {
//         if (t === e) return t;
//         for (var n in (e = Object(e))) d.call(e, n) && c(t, e, n);
//         if (Object.getOwnPropertySymbols)
//           for (
//             var r = Object.getOwnPropertySymbols(e), i = 0;
//             i < r.length;
//             i++
//           )
//             o.call(e, r[i]) && c(t, e, r[i]);
//         return t;
//       }
//       t.exports = function (t) {
//         t = (function (t) {
//           if (null == t)
//             throw new TypeError("Sources cannot be null or undefined");
//           return Object(t);
//         })(t);
//         for (var s = 1; s < arguments.length; s++) l(t, arguments[s]);
//         return t;
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       t.exports = function (t) {
//         var e = typeof t;
//         return null !== t && ("object" === e || "function" === e);
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       function r(t, e, n) {
//         return (
//           e in t
//             ? Object.defineProperty(t, e, {
//                 value: n,
//                 enumerable: !0,
//                 configurable: !0,
//                 writable: !0,
//               })
//             : (t[e] = n),
//           t
//         );
//       }
//       var d = n(13),
//         filter = n(92).filter,
//         map = n(93).map,
//         o = n(58),
//         c = n(200),
//         l = n(202),
//         f = n(201),
//         h = n(129),
//         m = n(410),
//         y = function () {
//           var param,
//             t,
//             e =
//               arguments.length > 0 && void 0 !== arguments[0]
//                 ? arguments[0]
//                 : {};
//           return {
//             returnIds: !0,
//             returnDocuments:
//               ((param = e.returnDocuments),
//               (t = !0),
//               !1 === param ? void 0 : void 0 === param ? t : param),
//             visibility: e.visibility || "sync",
//           };
//         },
//         v = function (t) {
//           return "response" === t.type;
//         },
//         C = function (t) {
//           return t.body;
//         },
//         P = function (t) {
//           return t.toPromise();
//         };
//       t.exports = {
//         listen: m,
//         getDataUrl: function (t, path) {
//           var e = this.clientConfig,
//             n = e.gradientMode ? e.namespace : o.hasDataset(e),
//             r = "/".concat(t, "/").concat(n),
//             d = path ? "".concat(r, "/").concat(path) : r;
//           return (
//             this.clientConfig.gradientMode ? d : "/data".concat(d)
//           ).replace(/\/($|\?)/, "$1");
//         },
//         fetch: function (t, e) {
//           var n =
//               arguments.length > 2 && void 0 !== arguments[2]
//                 ? arguments[2]
//                 : {},
//             r =
//               !1 === n.filterResponse
//                 ? function (t) {
//                     return t;
//                   }
//                 : function (t) {
//                     return t.result;
//                   },
//             d = this._dataRequest("query", { query: t, params: e }, n).pipe(
//               map(r)
//             );
//           return this.isPromiseAPI() ? P(d) : d;
//         },
//         getDocument: function (t) {
//           var e = { uri: this.getDataUrl("doc", t), json: !0 },
//             n = this._requestObservable(e).pipe(
//               filter(v),
//               map(function (t) {
//                 return t.body.documents && t.body.documents[0];
//               })
//             );
//           return this.isPromiseAPI() ? P(n) : n;
//         },
//         getDocuments: function (t) {
//           var e = { uri: this.getDataUrl("doc", t.join(",")), json: !0 },
//             n = this._requestObservable(e).pipe(
//               filter(v),
//               map(function (e) {
//                 var n,
//                   r,
//                   d =
//                     ((n = e.body.documents || []),
//                     (r = function (t) {
//                       return t._id;
//                     }),
//                     n.reduce(function (t, e) {
//                       return (t[r(e)] = e), t;
//                     }, Object.create(null)));
//                 return t.map(function (t) {
//                   return d[t] || null;
//                 });
//               })
//             );
//           return this.isPromiseAPI() ? P(n) : n;
//         },
//         create: function (t, e) {
//           return this._create(t, "create", e);
//         },
//         createIfNotExists: function (t, e) {
//           return (
//             o.requireDocumentId("createIfNotExists", t),
//             this._create(t, "createIfNotExists", e)
//           );
//         },
//         createOrReplace: function (t, e) {
//           return (
//             o.requireDocumentId("createOrReplace", t),
//             this._create(t, "createOrReplace", e)
//           );
//         },
//         patch: function (t, e) {
//           return new h(t, e, this);
//         },
//         delete: function (t, e) {
//           return this.dataRequest(
//             "mutate",
//             { mutations: [{ delete: c(t) }] },
//             e
//           );
//         },
//         mutate: function (t, e) {
//           var n = t instanceof h || t instanceof f ? t.serialize() : t,
//             r = Array.isArray(n) ? n : [n],
//             d = e && e.transactionId;
//           return this.dataRequest(
//             "mutate",
//             { mutations: r, transactionId: d },
//             e
//           );
//         },
//         transaction: function (t) {
//           return new f(t, this);
//         },
//         dataRequest: function (t, body) {
//           var e =
//               arguments.length > 2 && void 0 !== arguments[2]
//                 ? arguments[2]
//                 : {},
//             n = this._dataRequest(t, body, e);
//           return this.isPromiseAPI() ? P(n) : n;
//         },
//         _dataRequest: function (t, body) {
//           var e =
//               arguments.length > 2 && void 0 !== arguments[2]
//                 ? arguments[2]
//                 : {},
//             n = "mutate" === t,
//             d = !n && l(body),
//             o = !n && d.length < 11264,
//             c = o ? d : "",
//             f = e.returnFirst,
//             h = e.timeout,
//             m = e.token,
//             P = {
//               method: o ? "GET" : "POST",
//               uri: this.getDataUrl(t, c),
//               json: !0,
//               body: o ? void 0 : body,
//               query: n && y(e),
//               timeout: h,
//               token: m,
//             };
//           return this._requestObservable(P).pipe(
//             filter(v),
//             map(C),
//             map(function (t) {
//               if (!n) return t;
//               var d = t.results || [];
//               if (e.returnDocuments)
//                 return f
//                   ? d[0] && d[0].document
//                   : d.map(function (t) {
//                       return t.document;
//                     });
//               var o = f ? "documentId" : "documentIds",
//                 c = f
//                   ? d[0] && d[0].id
//                   : d.map(function (t) {
//                       return t.id;
//                     });
//               return r({ transactionId: t.transactionId, results: d }, o, c);
//             })
//           );
//         },
//         _create: function (t, e) {
//           var n =
//               arguments.length > 2 && void 0 !== arguments[2]
//                 ? arguments[2]
//                 : {},
//             o = r({}, e, t),
//             c = d({ returnFirst: !0, returnDocuments: !0 }, n);
//           return this.dataRequest("mutate", { mutations: [o] }, c);
//         },
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(13),
//         d = n(203),
//         o = n(423),
//         c = n(425),
//         l = n(426),
//         f = n(202),
//         h = n(206),
//         m = n(207),
//         y = [
//           "Using token with listeners is not supported in browsers. ",
//           "For more info, see ".concat(
//             h("js-client-listener-tokens-browser"),
//             "."
//           ),
//         ],
//         v = m(function () {
//           return console.warn(y.join(" "));
//         }),
//         C = Boolean("undefined" != typeof window && window.EventSource),
//         P = C ? window.EventSource : o,
//         _ = [
//           "includePreviousRevision",
//           "includeResult",
//           "visibility",
//           "effectFormat",
//         ],
//         A = { includeResult: !0 };
//       function w(t) {
//         try {
//           var data = (t.data && JSON.parse(t.data)) || {};
//           return r({ type: t.type }, data);
//         } catch (t) {
//           return t;
//         }
//       }
//       t.exports = function (t, e) {
//         var n = l(
//             arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
//             A
//           ),
//           r = c(n, _),
//           o = f({ query: t, params: e, options: r }),
//           h = this.clientConfig,
//           m = h.url,
//           y = h.token,
//           F = h.withCredentials,
//           O = "".concat(m).concat(this.getDataUrl("listen", o)),
//           k = n.events ? n.events : ["mutation"],
//           S = -1 !== k.indexOf("reconnect");
//         y && C && v();
//         var E = {};
//         return (
//           (y || F) && (E.withCredentials = !0),
//           y && (E.headers = { Authorization: "Bearer ".concat(y) }),
//           new d(function (t) {
//             var e,
//               n = h(),
//               r = !1;
//             function d() {
//               r ||
//                 (S && t.next({ type: "reconnect" }),
//                 r ||
//                   (n.readyState === P.CLOSED &&
//                     (f(), clearTimeout(e), (e = setTimeout(m, 100)))));
//             }
//             function o(e) {
//               t.error(
//                 (function (t) {
//                   if (t instanceof Error) return t;
//                   var e = w(t);
//                   return e instanceof Error
//                     ? e
//                     : new Error(
//                         (function (t) {
//                           if (!t.error)
//                             return t.message || "Unknown listener error";
//                           if (t.error.description) return t.error.description;
//                           return "string" == typeof t.error
//                             ? t.error
//                             : JSON.stringify(t.error, null, 2);
//                         })(e)
//                       );
//                 })(e)
//               );
//             }
//             function c(e) {
//               var n = w(e);
//               return n instanceof Error ? t.error(n) : t.next(n);
//             }
//             function l(e) {
//               (r = !0), f(), t.complete();
//             }
//             function f() {
//               n.removeEventListener("error", d, !1),
//                 n.removeEventListener("channelError", o, !1),
//                 n.removeEventListener("disconnect", l, !1),
//                 k.forEach(function (t) {
//                   return n.removeEventListener(t, c, !1);
//                 }),
//                 n.close();
//             }
//             function h() {
//               var t = new P(O, E);
//               return (
//                 t.addEventListener("error", d, !1),
//                 t.addEventListener("channelError", o, !1),
//                 t.addEventListener("disconnect", l, !1),
//                 k.forEach(function (e) {
//                   return t.addEventListener(e, c, !1);
//                 }),
//                 t
//               );
//             }
//             function m() {
//               n = h();
//             }
//             return function () {
//               (r = !0), f();
//             };
//           })
//         );
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(204).Observable,
//         d = n(13),
//         map = n(93).map,
//         filter = n(92).filter,
//         o = n(416).reduce;
//       function c() {
//         r.apply(this, arguments);
//       }
//       function l(t, e) {
//         var n = !1;
//         return function () {
//           return (
//             n ||
//               ((n = !0),
//               console.warn(
//                 new Error(
//                   "Calling observable."
//                     .concat(
//                       t,
//                       "(...) is deprecated. Please use observable.pipe("
//                     )
//                     .concat(t, "(...)) instead")
//                 )
//               )),
//             this.pipe(e.apply(this, arguments))
//           );
//         };
//       }
//       (c.prototype = Object.create(d(Object.create(null), r.prototype))),
//         Object.defineProperty(c.prototype, "constructor", {
//           value: c,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0,
//         }),
//         (c.prototype.lift = function (t) {
//           var e = new c();
//           return (e.source = this), (e.operator = t), e;
//         }),
//         (c.prototype.map = l("map", map)),
//         (c.prototype.filter = l("filter", filter)),
//         (c.prototype.reduce = l("filter", o)),
//         (t.exports = c);
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var r = n(51);
//       e.canReportError = function (t) {
//         for (; t; ) {
//           var e = t,
//             n = e.closed,
//             d = e.destination,
//             o = e.isStopped;
//           if (n || o) return !1;
//           t = d && d instanceof r.Subscriber ? d : null;
//         }
//         return !0;
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var r = n(51),
//         d = n(199),
//         o = n(197);
//       e.toSubscriber = function (t, e, n) {
//         if (t) {
//           if (t instanceof r.Subscriber) return t;
//           if (t[d.rxSubscriber]) return t[d.rxSubscriber]();
//         }
//         return t || e || n
//           ? new r.Subscriber(t, e, n)
//           : new r.Subscriber(o.empty);
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 }),
//         (e.observable =
//           ("function" == typeof Symbol && Symbol.observable) || "@@observable");
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 }),
//         (e.identity = function (t) {
//           return t;
//         });
//     },
//     function (t, e, n) {
//       e.reduce = n(417).reduce;
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var r = n(418),
//         d = n(419),
//         o = n(422),
//         c = n(205);
//       e.reduce = function (t, e) {
//         return arguments.length >= 2
//           ? function (source) {
//               return c.pipe(
//                 r.scan(t, e),
//                 d.takeLast(1),
//                 o.defaultIfEmpty(e)
//               )(source);
//             }
//           : function (source) {
//               return c.pipe(
//                 r.scan(function (e, n, r) {
//                   return t(e, n, r + 1);
//                 }),
//                 d.takeLast(1)
//               )(source);
//             };
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       var r,
//         d =
//           (this && this.__extends) ||
//           ((r = function (t, b) {
//             return (
//               (r =
//                 Object.setPrototypeOf ||
//                 ({ __proto__: [] } instanceof Array &&
//                   function (t, b) {
//                     t.__proto__ = b;
//                   }) ||
//                 function (t, b) {
//                   for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p]);
//                 }),
//               r(t, b)
//             );
//           }),
//           function (t, b) {
//             function e() {
//               this.constructor = t;
//             }
//             r(t, b),
//               (t.prototype =
//                 null === b
//                   ? Object.create(b)
//                   : ((e.prototype = b.prototype), new e()));
//           });
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var o = n(51);
//       e.scan = function (t, e) {
//         var n = !1;
//         return (
//           arguments.length >= 2 && (n = !0),
//           function (source) {
//             return source.lift(new c(t, e, n));
//           }
//         );
//       };
//       var c = (function () {
//           function t(t, e, n) {
//             void 0 === n && (n = !1),
//               (this.accumulator = t),
//               (this.seed = e),
//               (this.hasSeed = n);
//           }
//           return (
//             (t.prototype.call = function (t, source) {
//               return source.subscribe(
//                 new l(t, this.accumulator, this.seed, this.hasSeed)
//               );
//             }),
//             t
//           );
//         })(),
//         l = (function (t) {
//           function e(e, n, r, d) {
//             var o = t.call(this, e) || this;
//             return (
//               (o.accumulator = n),
//               (o._seed = r),
//               (o.hasSeed = d),
//               (o.index = 0),
//               o
//             );
//           }
//           return (
//             d(e, t),
//             Object.defineProperty(e.prototype, "seed", {
//               get: function () {
//                 return this._seed;
//               },
//               set: function (t) {
//                 (this.hasSeed = !0), (this._seed = t);
//               },
//               enumerable: !0,
//               configurable: !0,
//             }),
//             (e.prototype._next = function (t) {
//               if (this.hasSeed) return this._tryNext(t);
//               (this.seed = t), this.destination.next(t);
//             }),
//             (e.prototype._tryNext = function (t) {
//               var e,
//                 n = this.index++;
//               try {
//                 e = this.accumulator(this.seed, t, n);
//               } catch (t) {
//                 this.destination.error(t);
//               }
//               (this.seed = e), this.destination.next(e);
//             }),
//             e
//           );
//         })(o.Subscriber);
//     },
//     function (t, e, n) {
//       "use strict";
//       var r,
//         d =
//           (this && this.__extends) ||
//           ((r = function (t, b) {
//             return (
//               (r =
//                 Object.setPrototypeOf ||
//                 ({ __proto__: [] } instanceof Array &&
//                   function (t, b) {
//                     t.__proto__ = b;
//                   }) ||
//                 function (t, b) {
//                   for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p]);
//                 }),
//               r(t, b)
//             );
//           }),
//           function (t, b) {
//             function e() {
//               this.constructor = t;
//             }
//             r(t, b),
//               (t.prototype =
//                 null === b
//                   ? Object.create(b)
//                   : ((e.prototype = b.prototype), new e()));
//           });
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var o = n(51),
//         c = n(420),
//         l = n(421);
//       e.takeLast = function (t) {
//         return function (source) {
//           return 0 === t ? l.empty() : source.lift(new f(t));
//         };
//       };
//       var f = (function () {
//           function t(t) {
//             if (((this.total = t), this.total < 0))
//               throw new c.ArgumentOutOfRangeError();
//           }
//           return (
//             (t.prototype.call = function (t, source) {
//               return source.subscribe(new h(t, this.total));
//             }),
//             t
//           );
//         })(),
//         h = (function (t) {
//           function e(e, n) {
//             var r = t.call(this, e) || this;
//             return (r.total = n), (r.ring = new Array()), (r.count = 0), r;
//           }
//           return (
//             d(e, t),
//             (e.prototype._next = function (t) {
//               var e = this.ring,
//                 n = this.total,
//                 r = this.count++;
//               e.length < n ? e.push(t) : (e[r % n] = t);
//             }),
//             (e.prototype._complete = function () {
//               var t = this.destination,
//                 e = this.count;
//               if (e > 0)
//                 for (
//                   var n = this.count >= this.total ? this.total : this.count,
//                     r = this.ring,
//                     i = 0;
//                   i < n;
//                   i++
//                 ) {
//                   var d = e++ % n;
//                   t.next(r[d]);
//                 }
//               t.complete();
//             }),
//             e
//           );
//         })(o.Subscriber);
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var r = (function () {
//         function t() {
//           return (
//             Error.call(this),
//             (this.message = "argument out of range"),
//             (this.name = "ArgumentOutOfRangeError"),
//             this
//           );
//         }
//         return (t.prototype = Object.create(Error.prototype)), t;
//       })();
//       e.ArgumentOutOfRangeError = r;
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var r = n(204);
//       (e.EMPTY = new r.Observable(function (t) {
//         return t.complete();
//       })),
//         (e.empty = function (t) {
//           return t
//             ? (function (t) {
//                 return new r.Observable(function (e) {
//                   return t.schedule(function () {
//                     return e.complete();
//                   });
//                 });
//               })(t)
//             : e.EMPTY;
//         });
//     },
//     function (t, e, n) {
//       "use strict";
//       var r,
//         d =
//           (this && this.__extends) ||
//           ((r = function (t, b) {
//             return (
//               (r =
//                 Object.setPrototypeOf ||
//                 ({ __proto__: [] } instanceof Array &&
//                   function (t, b) {
//                     t.__proto__ = b;
//                   }) ||
//                 function (t, b) {
//                   for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p]);
//                 }),
//               r(t, b)
//             );
//           }),
//           function (t, b) {
//             function e() {
//               this.constructor = t;
//             }
//             r(t, b),
//               (t.prototype =
//                 null === b
//                   ? Object.create(b)
//                   : ((e.prototype = b.prototype), new e()));
//           });
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var o = n(51);
//       e.defaultIfEmpty = function (t) {
//         return (
//           void 0 === t && (t = null),
//           function (source) {
//             return source.lift(new c(t));
//           }
//         );
//       };
//       var c = (function () {
//           function t(t) {
//             this.defaultValue = t;
//           }
//           return (
//             (t.prototype.call = function (t, source) {
//               return source.subscribe(new l(t, this.defaultValue));
//             }),
//             t
//           );
//         })(),
//         l = (function (t) {
//           function e(e, n) {
//             var r = t.call(this, e) || this;
//             return (r.defaultValue = n), (r.isEmpty = !0), r;
//           }
//           return (
//             d(e, t),
//             (e.prototype._next = function (t) {
//               (this.isEmpty = !1), this.destination.next(t);
//             }),
//             (e.prototype._complete = function () {
//               this.isEmpty && this.destination.next(this.defaultValue),
//                 this.destination.complete();
//             }),
//             e
//           );
//         })(o.Subscriber);
//     },
//     function (t, e, n) {
//       var r = n(424);
//       t.exports = window.EventSource || r.EventSource;
//     },
//     function (t, e, n) {
//       var r, d, o;
//       "undefined" == typeof self || self,
//         (d = []),
//         void 0 ===
//           (o =
//             "function" ==
//             typeof (r = function () {
//               var t = function (t, e) {
//                 if (!t || "string" != typeof t)
//                   throw new SyntaxError("Not enough arguments");
//                 (this.URL = t), this.setOptions(e);
//                 var n = this;
//                 setTimeout(function () {
//                   n.poll();
//                 }, 0);
//               };
//               if (
//                 ((t.prototype = {
//                   CONNECTING: 0,
//                   OPEN: 1,
//                   CLOSED: 2,
//                   defaultOptions: {
//                     loggingEnabled: !1,
//                     loggingPrefix: "eventsource",
//                     interval: 500,
//                     bufferSizeLimit: 262144,
//                     silentTimeout: 3e5,
//                     getArgs: { evs_buffer_size_limit: 262144 },
//                     xhrHeaders: {
//                       Accept: "text/event-stream",
//                       "Cache-Control": "no-cache",
//                       "X-Requested-With": "XMLHttpRequest",
//                     },
//                   },
//                   setOptions: function (t) {
//                     var option,
//                       e = this.defaultOptions;
//                     for (option in e)
//                       e.hasOwnProperty(option) && (this[option] = e[option]);
//                     for (option in t)
//                       option in e &&
//                         t.hasOwnProperty(option) &&
//                         (this[option] = t[option]);
//                     this.getArgs &&
//                       this.bufferSizeLimit &&
//                       (this.getArgs.evs_buffer_size_limit =
//                         this.bufferSizeLimit),
//                       ("undefined" != typeof console &&
//                         void 0 !== console.log) ||
//                         (this.loggingEnabled = !1);
//                   },
//                   log: function (t) {
//                     this.loggingEnabled &&
//                       console.log("[" + this.loggingPrefix + "]:" + t);
//                   },
//                   poll: function () {
//                     try {
//                       if (this.readyState == this.CLOSED) return;
//                       this.cleanup(),
//                         (this.readyState = this.CONNECTING),
//                         (this.cursor = 0),
//                         (this.cache = ""),
//                         (this._xhr = new this.XHR(this)),
//                         this.resetNoActivityTimer();
//                     } catch (t) {
//                       this.log("There were errors inside the pool try-catch"),
//                         this.dispatchEvent("error", {
//                           type: "error",
//                           data: t.message,
//                         });
//                     }
//                   },
//                   pollAgain: function (t) {
//                     var e = this;
//                     (e.readyState = e.CONNECTING),
//                       e.dispatchEvent("error", {
//                         type: "error",
//                         data: "Reconnecting ",
//                       }),
//                       (this._pollTimer = setTimeout(function () {
//                         e.poll();
//                       }, t || 0));
//                   },
//                   cleanup: function () {
//                     this.log("evs cleaning up"),
//                       this._pollTimer &&
//                         (clearInterval(this._pollTimer),
//                         (this._pollTimer = null)),
//                       this._noActivityTimer &&
//                         (clearInterval(this._noActivityTimer),
//                         (this._noActivityTimer = null)),
//                       this._xhr && (this._xhr.abort(), (this._xhr = null));
//                   },
//                   resetNoActivityTimer: function () {
//                     if (this.silentTimeout) {
//                       this._noActivityTimer &&
//                         clearInterval(this._noActivityTimer);
//                       var t = this;
//                       this._noActivityTimer = setTimeout(function () {
//                         t.log("Timeout! silentTImeout:" + t.silentTimeout),
//                           t.pollAgain();
//                       }, this.silentTimeout);
//                     }
//                   },
//                   close: function () {
//                     (this.readyState = this.CLOSED),
//                       this.log(
//                         "Closing connection. readyState: " + this.readyState
//                       ),
//                       this.cleanup();
//                   },
//                   _onxhrdata: function () {
//                     var t = this._xhr;
//                     if (t.isReady() && !t.hasError()) {
//                       this.resetNoActivityTimer(),
//                         this.readyState == this.CONNECTING &&
//                           ((this.readyState = this.OPEN),
//                           this.dispatchEvent("open", { type: "open" }));
//                       var e = t.getBuffer();
//                       e.length > this.bufferSizeLimit &&
//                         (this.log("buffer.length > this.bufferSizeLimit"),
//                         this.pollAgain()),
//                         0 == this.cursor &&
//                           e.length > 0 &&
//                           "\ufeff" == e.substring(0, 1) &&
//                           (this.cursor = 1);
//                       var n = this.lastMessageIndex(e);
//                       if (n[0] >= this.cursor) {
//                         var r = n[1],
//                           d = e.substring(this.cursor, r);
//                         this.parseStream(d), (this.cursor = r);
//                       }
//                       t.isDone() &&
//                         (this.log("request.isDone(). reopening the connection"),
//                         this.pollAgain(this.interval));
//                     } else
//                       this.readyState !== this.CLOSED &&
//                         (this.log("this.readyState !== this.CLOSED"),
//                         this.pollAgain(this.interval));
//                   },
//                   parseStream: function (t) {
//                     var i,
//                       e,
//                       r,
//                       d,
//                       line,
//                       o,
//                       c = (t = this.cache + this.normalizeToLF(t)).split(
//                         "\n\n"
//                       );
//                     for (i = 0; i < c.length - 1; i++) {
//                       (r = "message"), (d = []);
//                       var l = c[i].split("\n");
//                       for (e = 0; e < l.length; e++)
//                         0 == (line = this.trimWhiteSpace(l[e])).indexOf("event")
//                           ? (r = line.replace(/event:?\s*/, ""))
//                           : 0 == line.indexOf("retry")
//                           ? ((o = parseInt(line.replace(/retry:?\s*/, ""), 10)),
//                             isNaN(o) || (this.interval = o))
//                           : 0 == line.indexOf("data")
//                           ? d.push(line.replace(/data:?\s*/, ""))
//                           : 0 == line.indexOf("id:")
//                           ? (this.lastEventId = line.replace(/id:?\s*/, ""))
//                           : 0 == line.indexOf("id") &&
//                             (this.lastEventId = null);
//                       if (d.length && this.readyState != this.CLOSED) {
//                         var f = new n(
//                           r,
//                           d.join("\n"),
//                           "undefined" != typeof window &&
//                           void 0 !== window.location
//                             ? window.location.origin
//                             : null,
//                           this.lastEventId
//                         );
//                         this.dispatchEvent(r, f);
//                       }
//                     }
//                     this.cache = c[c.length - 1];
//                   },
//                   dispatchEvent: function (t, e) {
//                     var n = this["_" + t + "Handlers"];
//                     if (n)
//                       for (var i = 0; i < n.length; i++) n[i].call(this, e);
//                     this["on" + t] && this["on" + t].call(this, e);
//                   },
//                   addEventListener: function (t, e) {
//                     this["_" + t + "Handlers"] ||
//                       (this["_" + t + "Handlers"] = []),
//                       this["_" + t + "Handlers"].push(e);
//                   },
//                   removeEventListener: function (t, e) {
//                     var n = this["_" + t + "Handlers"];
//                     if (n)
//                       for (var i = n.length - 1; i >= 0; --i)
//                         if (n[i] === e) {
//                           n.splice(i, 1);
//                           break;
//                         }
//                   },
//                   _pollTimer: null,
//                   _noactivityTimer: null,
//                   _xhr: null,
//                   lastEventId: null,
//                   cache: "",
//                   cursor: 0,
//                   onerror: null,
//                   onmessage: null,
//                   onopen: null,
//                   readyState: 0,
//                   urlWithParams: function (t, e) {
//                     var n = [];
//                     if (e) {
//                       var r,
//                         d,
//                         o = encodeURIComponent;
//                       for (r in e)
//                         e.hasOwnProperty(r) &&
//                           ((d = o(r) + "=" + o(e[r])), n.push(d));
//                     }
//                     return n.length > 0
//                       ? -1 == t.indexOf("?")
//                         ? t + "?" + n.join("&")
//                         : t + "&" + n.join("&")
//                       : t;
//                   },
//                   lastMessageIndex: function (text) {
//                     var t = text.lastIndexOf("\n\n"),
//                       e = text.lastIndexOf("\r\r"),
//                       n = text.lastIndexOf("\r\n\r\n");
//                     return n > Math.max(t, e)
//                       ? [n, n + 4]
//                       : [Math.max(t, e), Math.max(t, e) + 2];
//                   },
//                   trimWhiteSpace: function (t) {
//                     var e = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
//                     return t.replace(e, "");
//                   },
//                   normalizeToLF: function (t) {
//                     return t.replace(/\r\n|\r/g, "\n");
//                   },
//                 }),
//                 r())
//               ) {
//                 t.isPolyfill = "IE_8-9";
//                 var e = t.prototype.defaultOptions;
//                 (e.xhrHeaders = null),
//                   (e.getArgs.evs_preamble = 2056),
//                   (t.prototype.XHR = function (t) {
//                     var e = new XDomainRequest();
//                     (this._request = e),
//                       (e.onprogress = function () {
//                         (e._ready = !0), t._onxhrdata();
//                       }),
//                       (e.onload = function () {
//                         (this._loaded = !0), t._onxhrdata();
//                       }),
//                       (e.onerror = function () {
//                         (this._failed = !0),
//                           (t.readyState = t.CLOSED),
//                           t.dispatchEvent("error", {
//                             type: "error",
//                             data: "XDomainRequest error",
//                           });
//                       }),
//                       (e.ontimeout = function () {
//                         (this._failed = !0),
//                           (t.readyState = t.CLOSED),
//                           t.dispatchEvent("error", {
//                             type: "error",
//                             data: "XDomainRequest timed out",
//                           });
//                       });
//                     var n = {};
//                     if (t.getArgs) {
//                       var r = t.getArgs;
//                       for (var d in r) r.hasOwnProperty(d) && (n[d] = r[d]);
//                       t.lastEventId && (n.evs_last_event_id = t.lastEventId);
//                     }
//                     e.open("GET", t.urlWithParams(t.URL, n)), e.send();
//                   }),
//                   (t.prototype.XHR.prototype = {
//                     useXDomainRequest: !0,
//                     _request: null,
//                     _ready: !1,
//                     _loaded: !1,
//                     _failed: !1,
//                     isReady: function () {
//                       return this._request._ready;
//                     },
//                     isDone: function () {
//                       return this._request._loaded;
//                     },
//                     hasError: function () {
//                       return this._request._failed;
//                     },
//                     getBuffer: function () {
//                       var t = "";
//                       try {
//                         t = this._request.responseText || "";
//                       } catch (t) {}
//                       return t;
//                     },
//                     abort: function () {
//                       this._request && this._request.abort();
//                     },
//                   });
//               } else
//                 (t.isPolyfill = "XHR"),
//                   (t.prototype.XHR = function (t) {
//                     var e = new XMLHttpRequest();
//                     (this._request = e),
//                       (t._xhr = this),
//                       (e.onreadystatechange = function () {
//                         e.readyState > 1 &&
//                           t.readyState != t.CLOSED &&
//                           (200 == e.status ||
//                           (e.status >= 300 && e.status < 400)
//                             ? t._onxhrdata()
//                             : ((e._failed = !0),
//                               (t.readyState = t.CLOSED),
//                               t.dispatchEvent("error", {
//                                 type: "error",
//                                 data: "The server responded with " + e.status,
//                               }),
//                               t.close()));
//                       }),
//                       (e.onprogress = function () {}),
//                       e.open("GET", t.urlWithParams(t.URL, t.getArgs), !0);
//                     var n = t.xhrHeaders;
//                     for (var header in n)
//                       n.hasOwnProperty(header) &&
//                         e.setRequestHeader(header, n[header]);
//                     t.lastEventId &&
//                       e.setRequestHeader("Last-Event-Id", t.lastEventId),
//                       e.send();
//                   }),
//                   (t.prototype.XHR.prototype = {
//                     useXDomainRequest: !1,
//                     _request: null,
//                     _failed: !1,
//                     isReady: function () {
//                       return this._request.readyState >= 2;
//                     },
//                     isDone: function () {
//                       return 4 == this._request.readyState;
//                     },
//                     hasError: function () {
//                       return this._failed || this._request.status >= 400;
//                     },
//                     getBuffer: function () {
//                       var t = "";
//                       try {
//                         t = this._request.responseText || "";
//                       } catch (t) {}
//                       return t;
//                     },
//                     abort: function () {
//                       this._request && this._request.abort();
//                     },
//                   });
//               function n(t, data, e, n) {
//                 (this.bubbles = !1),
//                   (this.cancelBubble = !1),
//                   (this.cancelable = !1),
//                   (this.data = data || null),
//                   (this.origin = e || ""),
//                   (this.lastEventId = n || ""),
//                   (this.type = t || "message");
//               }
//               function r() {
//                 return Boolean(
//                   "undefined" != typeof window &&
//                     window.XDomainRequest &&
//                     window.XMLHttpRequest &&
//                     void 0 === new XMLHttpRequest().responseType
//                 );
//               }
//               return t;
//             })
//               ? r.apply(e, d)
//               : r) || (t.exports = o);
//     },
//     function (t, e, n) {
//       "use strict";
//       t.exports = function (t, e) {
//         return e.reduce(function (e, n) {
//           return void 0 === t[n] || (e[n] = t[n]), e;
//         }, {});
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       t.exports = function (t, e) {
//         return Object.keys(e)
//           .concat(Object.keys(t))
//           .reduce(function (n, r) {
//             return (n[r] = void 0 === t[r] ? e[r] : t[r]), n;
//           }, {});
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(13),
//         d = n(58);
//       function o(t) {
//         this.request = t.request.bind(t);
//       }
//       r(o.prototype, {
//         create: function (t, e) {
//           return this._modify("PUT", t, e);
//         },
//         edit: function (t, e) {
//           return this._modify("PATCH", t, e);
//         },
//         delete: function (t) {
//           return this._modify("DELETE", t);
//         },
//         list: function () {
//           return this.request({ uri: "/datasets" });
//         },
//         _modify: function (t, e, body) {
//           return (
//             d.dataset(e),
//             this.request({ method: t, uri: "/datasets/".concat(e), body: body })
//           );
//         },
//       }),
//         (t.exports = o);
//     },
//     function (t, e, n) {
//       "use strict";
//       function r(t) {
//         this.client = t;
//       }
//       n(13)(r.prototype, {
//         list: function () {
//           return this.client.request({ uri: "/projects" });
//         },
//         getById: function (t) {
//           return this.client.request({ uri: "/projects/".concat(t) });
//         },
//       }),
//         (t.exports = r);
//     },
//     function (t, e, n) {
//       "use strict";
//       function r(t, i) {
//         return (
//           (function (t) {
//             if (Array.isArray(t)) return t;
//           })(t) ||
//           (function (t, i) {
//             if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
//               return;
//             var e = [],
//               n = !0,
//               r = !1,
//               d = void 0;
//             try {
//               for (
//                 var o, c = t[Symbol.iterator]();
//                 !(n = (o = c.next()).done) &&
//                 (e.push(o.value), !i || e.length !== i);
//                 n = !0
//               );
//             } catch (t) {
//               (r = !0), (d = t);
//             } finally {
//               try {
//                 n || null == c.return || c.return();
//               } finally {
//                 if (r) throw d;
//               }
//             }
//             return e;
//           })(t, i) ||
//           (function (t, e) {
//             if (!t) return;
//             if ("string" == typeof t) return d(t, e);
//             var n = Object.prototype.toString.call(t).slice(8, -1);
//             "Object" === n && t.constructor && (n = t.constructor.name);
//             if ("Map" === n || "Set" === n) return Array.from(t);
//             if (
//               "Arguments" === n ||
//               /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
//             )
//               return d(t, e);
//           })(t, i) ||
//           (function () {
//             throw new TypeError(
//               "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
//             );
//           })()
//         );
//       }
//       function d(t, e) {
//         (null == e || e > t.length) && (e = t.length);
//         for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
//         return n;
//       }
//       var o = n(13),
//         map = n(93).map,
//         filter = n(92).filter,
//         c = n(430),
//         l = n(58);
//       function f(t) {
//         this.client = t;
//       }
//       o(f.prototype, {
//         upload: function (t, body) {
//           var e =
//             arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
//           l.validateAssetType(t);
//           var meta = e.extract || void 0;
//           meta && !meta.length && (meta = ["none"]);
//           var n = l.hasDataset(this.client.clientConfig),
//             r = "image" === t ? "images" : "files",
//             d = (function (t, e) {
//               return "undefined" != typeof window && e instanceof window.File
//                 ? o(
//                     {
//                       filename: !1 === t.preserveFilename ? void 0 : e.name,
//                       contentType: e.type,
//                     },
//                     t
//                   )
//                 : t;
//             })(e, body),
//             label = d.label,
//             title = d.title,
//             c = d.description,
//             f = d.creditLine,
//             h = d.filename,
//             source = d.source,
//             m = {
//               label: label,
//               title: title,
//               description: c,
//               filename: h,
//               meta: meta,
//               creditLine: f,
//             };
//           source &&
//             ((m.sourceId = source.id),
//             (m.sourceName = source.name),
//             (m.sourceUrl = source.url));
//           var y = this.client._requestObservable({
//             method: "POST",
//             timeout: d.timeout || 0,
//             uri: "/assets/".concat(r, "/").concat(n),
//             headers: d.contentType ? { "Content-Type": d.contentType } : {},
//             query: m,
//             body: body,
//           });
//           return this.client.isPromiseAPI()
//             ? y
//                 .pipe(
//                   filter(function (t) {
//                     return "response" === t.type;
//                   }),
//                   map(function (t) {
//                     return (function (body) {
//                       var t = body.document;
//                       return (
//                         Object.defineProperty(t, "document", {
//                           enumerable: !1,
//                           get: function () {
//                             return (
//                               console.warn(
//                                 "The promise returned from client.asset.upload(...) now resolves with the asset document"
//                               ),
//                               t
//                             );
//                           },
//                         }),
//                         t
//                       );
//                     })(t.body);
//                   })
//                 )
//                 .toPromise()
//             : y;
//         },
//         delete: function (t, e) {
//           console.warn(
//             "client.assets.delete() is deprecated, please use client.delete(<document-id>)"
//           );
//           var n = e || "";
//           return (
//             /^(image|file)-/.test(n)
//               ? t._id && (n = t._id)
//               : (n = "".concat(t, "-").concat(n)),
//             l.hasDataset(this.client.clientConfig),
//             this.client.delete(n)
//           );
//         },
//         getImageUrl: function (t, e) {
//           var n = t._ref || t;
//           if ("string" != typeof n)
//             throw new Error(
//               "getImageUrl() needs either an object with a _ref, or a string with an asset document ID"
//             );
//           if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(n))
//             throw new Error(
//               'Unsupported asset ID "'.concat(
//                 n,
//                 '". URL generation only works for auto-generated IDs.'
//               )
//             );
//           var d = r(n.split("-"), 4),
//             o = d[1],
//             f = d[2],
//             h = d[3];
//           l.hasDataset(this.client.clientConfig);
//           var m = this.client.clientConfig,
//             y = m.projectId,
//             v = m.dataset,
//             C = e ? c(e) : "";
//           return "https://cdn.sanity.io/images/"
//             .concat(y, "/")
//             .concat(v, "/")
//             .concat(o, "-")
//             .concat(f, ".")
//             .concat(h)
//             .concat(C);
//         },
//       }),
//         (t.exports = f);
//     },
//     function (t, e, n) {
//       "use strict";
//       t.exports = function (t) {
//         var e = [];
//         for (var n in t)
//           t.hasOwnProperty(n) &&
//             e.push(
//               ""
//                 .concat(encodeURIComponent(n), "=")
//                 .concat(encodeURIComponent(t[n]))
//             );
//         return e.length > 0 ? "?".concat(e.join("&")) : "";
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       function r(t) {
//         this.client = t;
//       }
//       n(13)(r.prototype, {
//         getById: function (t) {
//           return this.client.request({ uri: "/users/".concat(t) });
//         },
//       }),
//         (t.exports = r);
//     },
//     function (t, e, n) {
//       "use strict";
//       function r(t) {
//         this.client = t;
//       }
//       n(13)(r.prototype, {
//         getLoginProviders: function () {
//           return this.client.request({ uri: "/auth/providers" });
//         },
//         logout: function () {
//           return this.client.request({ uri: "/auth/logout", method: "POST" });
//         },
//       }),
//         (t.exports = r);
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(434),
//         d = n(13),
//         o = n(449),
//         c = n(451),
//         l = n(454),
//         progress = n(455),
//         f = n(203),
//         h = n(457),
//         m = h.ClientError,
//         y = h.ServerError,
//         v = {
//           onResponse: function (t) {
//             if (t.statusCode >= 500) throw new y(t);
//             if (t.statusCode >= 400) throw new m(t);
//             return t;
//           },
//         },
//         C = r(
//           n(459).concat([c(), l(), progress(), v, o({ implementation: f })])
//         );
//       function P(t) {
//         return (
//           arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C
//         )(d({ maxRedirects: 0 }, t));
//       }
//       (P.defaultRequester = C),
//         (P.ClientError = m),
//         (P.ServerError = y),
//         (t.exports = P);
//     },
//     function (t, e, n) {
//       t.exports = n(435);
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(436),
//         d = n(437),
//         o = n(438),
//         c = n(442),
//         l = n(443),
//         f = ["request", "response", "progress", "error", "abort"],
//         h = [
//           "processOptions",
//           "validateOptions",
//           "interceptRequest",
//           "finalizeOptions",
//           "onRequest",
//           "onResponse",
//           "onError",
//           "onReturn",
//           "onHeaders",
//         ];
//       t.exports = function t() {
//         var e =
//             arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
//           n =
//             arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
//           m = [],
//           y = h.reduce(
//             function (t, e) {
//               return (t[e] = t[e] || []), t;
//             },
//             { processOptions: [o], validateOptions: [c] }
//           );
//         function v(t) {
//           var e = f.reduce(function (t, e) {
//               return (t[e] = r()), t;
//             }, {}),
//             o = d(y),
//             c = o("processOptions", t);
//           o("validateOptions", c);
//           var l = { options: c, channels: e, applyMiddleware: o },
//             h = null,
//             m = e.request.subscribe(function (t) {
//               h = n(t, function (n, r) {
//                 return (function (t, n, r) {
//                   var d = t,
//                     c = n;
//                   if (!d)
//                     try {
//                       c = o("onResponse", n, r);
//                     } catch (t) {
//                       (c = null), (d = t);
//                     }
//                   (d = d && o("onError", d, r)),
//                     d ? e.error.publish(d) : c && e.response.publish(c);
//                 })(n, r, t);
//               });
//             });
//           e.abort.subscribe(function () {
//             m(), h && h.abort();
//           });
//           var v = o("onReturn", e, l);
//           return v === e && e.request.publish(l), v;
//         }
//         return (
//           (v.use = function (t) {
//             if (!t)
//               throw new Error(
//                 "Tried to add middleware that resolved to falsey value"
//               );
//             if ("function" == typeof t)
//               throw new Error(
//                 "Tried to add middleware that was a function. It probably expects you to pass options to it."
//               );
//             if (t.onReturn && y.onReturn.length > 0)
//               throw new Error(
//                 "Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event"
//               );
//             return (
//               h.forEach(function (e) {
//                 t[e] && y[e].push(t[e]);
//               }),
//               m.push(t),
//               v
//             );
//           }),
//           (v.clone = function () {
//             return t(m);
//           }),
//           e.forEach(v.use),
//           v
//         );
//       };
//     },
//     function (t, e) {
//       t.exports = function () {
//         var t = [];
//         return {
//           subscribe: function (e) {
//             return (
//               t.push(e),
//               function () {
//                 var n = t.indexOf(e);
//                 n > -1 && t.splice(n, 1);
//               }
//             );
//           },
//           publish: function () {
//             for (var i = 0; i < t.length; i++) t[i].apply(null, arguments);
//           },
//         };
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       t.exports = function (t) {
//         return function (e, n) {
//           for (
//             var r = arguments.length, d = Array(r > 2 ? r - 2 : 0), o = 2;
//             o < r;
//             o++
//           )
//             d[o - 2] = arguments[o];
//           for (var c = "onError" === e, l = n, i = 0; i < t[e].length; i++) {
//             if (((l = t[e][i].apply(void 0, [l].concat(d))), c && !l)) break;
//           }
//           return l;
//         };
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(13),
//         d = n(439),
//         o =
//           "undefined" != typeof navigator &&
//           "ReactNative" === navigator.product,
//         c = Object.prototype.hasOwnProperty,
//         l = { timeout: o ? 6e4 : 12e4 };
//       function f(t) {
//         var e = [];
//         for (var n in t) c.call(t, n) && r(n, t[n]);
//         return e.length ? e.join("&") : "";
//         function r(t, n) {
//           Array.isArray(n)
//             ? n.forEach(function (e) {
//                 return r(t, e);
//               })
//             : e.push([t, n].map(encodeURIComponent).join("="));
//         }
//       }
//       function h(time) {
//         if (!1 === time || 0 === time) return !1;
//         if (time.connect || time.socket) return time;
//         var t = Number(time);
//         return isNaN(t) ? h(l.timeout) : { connect: t, socket: t };
//       }
//       t.exports = function (t) {
//         var e = "string" == typeof t ? r({ url: t }, l) : r({}, l, t),
//           n = d(e.url, {}, !0);
//         return (
//           (e.timeout = h(e.timeout)),
//           e.query &&
//             (n.query = r(
//               {},
//               n.query,
//               (function (t) {
//                 var e = {};
//                 for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
//                 return e;
//               })(e.query)
//             )),
//           (e.method =
//             e.body && !e.method ? "POST" : (e.method || "GET").toUpperCase()),
//           (e.url = n.toString(f)),
//           e
//         );
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       (function (e) {
//         var r = n(440),
//           d = n(441),
//           o =
//             /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
//           c = /[\n\r\t]/g,
//           l = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
//           f = /:\d+$/,
//           h = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
//           m = /^[a-zA-Z]:/;
//         function y(t) {
//           return (t || "").toString().replace(o, "");
//         }
//         var v = [
//             ["#", "hash"],
//             ["?", "query"],
//             function (address, t) {
//               return _(t.protocol) ? address.replace(/\\/g, "/") : address;
//             },
//             ["/", "pathname"],
//             ["@", "auth", 1],
//             [NaN, "host", void 0, 1, 1],
//             [/:(\d*)$/, "port", void 0, 1],
//             [NaN, "hostname", void 0, 1, 1],
//           ],
//           C = { hash: 1, query: 1 };
//         function P(t) {
//           var n,
//             r =
//               ("undefined" != typeof window
//                 ? window
//                 : void 0 !== e
//                 ? e
//                 : "undefined" != typeof self
//                 ? self
//                 : {}
//               ).location || {},
//             d = {},
//             o = typeof (t = t || r);
//           if ("blob:" === t.protocol) d = new w(unescape(t.pathname), {});
//           else if ("string" === o)
//             for (n in ((d = new w(t, {})), C)) delete d[n];
//           else if ("object" === o) {
//             for (n in t) n in C || (d[n] = t[n]);
//             void 0 === d.slashes && (d.slashes = l.test(t.href));
//           }
//           return d;
//         }
//         function _(t) {
//           return (
//             "file:" === t ||
//             "ftp:" === t ||
//             "http:" === t ||
//             "https:" === t ||
//             "ws:" === t ||
//             "wss:" === t
//           );
//         }
//         function A(address, t) {
//           (address = (address = y(address)).replace(c, "")), (t = t || {});
//           var e,
//             n = h.exec(address),
//             r = n[1] ? n[1].toLowerCase() : "",
//             d = !!n[2],
//             o = !!n[3],
//             l = 0;
//           return (
//             d
//               ? o
//                 ? ((e = n[2] + n[3] + n[4]), (l = n[2].length + n[3].length))
//                 : ((e = n[2] + n[4]), (l = n[2].length))
//               : o
//               ? ((e = n[3] + n[4]), (l = n[3].length))
//               : (e = n[4]),
//             "file:" === r
//               ? l >= 2 && (e = e.slice(2))
//               : _(r)
//               ? (e = n[4])
//               : r
//               ? d && (e = e.slice(2))
//               : l >= 2 && _(t.protocol) && (e = n[4]),
//             { protocol: r, slashes: d || _(r), slashesCount: l, rest: e }
//           );
//         }
//         function w(address, t, e) {
//           if (
//             ((address = (address = y(address)).replace(c, "")),
//             !(this instanceof w))
//           )
//             return new w(address, t, e);
//           var n,
//             o,
//             l,
//             f,
//             h,
//             C,
//             F = v.slice(),
//             O = typeof t,
//             k = this,
//             i = 0;
//           for (
//             "object" !== O && "string" !== O && ((e = t), (t = null)),
//               e && "function" != typeof e && (e = d.parse),
//               n = !(o = A(address || "", (t = P(t)))).protocol && !o.slashes,
//               k.slashes = o.slashes || (n && t.slashes),
//               k.protocol = o.protocol || t.protocol || "",
//               address = o.rest,
//               (("file:" === o.protocol &&
//                 (2 !== o.slashesCount || m.test(address))) ||
//                 (!o.slashes &&
//                   (o.protocol || o.slashesCount < 2 || !_(k.protocol)))) &&
//                 (F[3] = [/(.*)/, "pathname"]);
//             i < F.length;
//             i++
//           )
//             "function" != typeof (f = F[i])
//               ? ((l = f[0]),
//                 (C = f[1]),
//                 l != l
//                   ? (k[C] = address)
//                   : "string" == typeof l
//                   ? ~(h =
//                       "@" === l
//                         ? address.lastIndexOf(l)
//                         : address.indexOf(l)) &&
//                     ("number" == typeof f[2]
//                       ? ((k[C] = address.slice(0, h)),
//                         (address = address.slice(h + f[2])))
//                       : ((k[C] = address.slice(h)),
//                         (address = address.slice(0, h))))
//                   : (h = l.exec(address)) &&
//                     ((k[C] = h[1]), (address = address.slice(0, h.index))),
//                 (k[C] = k[C] || (n && f[3] && t[C]) || ""),
//                 f[4] && (k[C] = k[C].toLowerCase()))
//               : (address = f(address, k));
//           e && (k.query = e(k.query)),
//             n &&
//               t.slashes &&
//               "/" !== k.pathname.charAt(0) &&
//               ("" !== k.pathname || "" !== t.pathname) &&
//               (k.pathname = (function (t, base) {
//                 if ("" === t) return base;
//                 for (
//                   var path = (base || "/")
//                       .split("/")
//                       .slice(0, -1)
//                       .concat(t.split("/")),
//                     i = path.length,
//                     e = path[i - 1],
//                     n = !1,
//                     r = 0;
//                   i--;

//                 )
//                   "." === path[i]
//                     ? path.splice(i, 1)
//                     : ".." === path[i]
//                     ? (path.splice(i, 1), r++)
//                     : r && (0 === i && (n = !0), path.splice(i, 1), r--);
//                 return (
//                   n && path.unshift(""),
//                   ("." !== e && ".." !== e) || path.push(""),
//                   path.join("/")
//                 );
//               })(k.pathname, t.pathname)),
//             "/" !== k.pathname.charAt(0) &&
//               _(k.protocol) &&
//               (k.pathname = "/" + k.pathname),
//             r(k.port, k.protocol) || ((k.host = k.hostname), (k.port = "")),
//             (k.username = k.password = ""),
//             k.auth &&
//               (~(h = k.auth.indexOf(":"))
//                 ? ((k.username = k.auth.slice(0, h)),
//                   (k.username = encodeURIComponent(
//                     decodeURIComponent(k.username)
//                   )),
//                   (k.password = k.auth.slice(h + 1)),
//                   (k.password = encodeURIComponent(
//                     decodeURIComponent(k.password)
//                   )))
//                 : (k.username = encodeURIComponent(decodeURIComponent(k.auth))),
//               (k.auth = k.password
//                 ? k.username + ":" + k.password
//                 : k.username)),
//             (k.origin =
//               "file:" !== k.protocol && _(k.protocol) && k.host
//                 ? k.protocol + "//" + k.host
//                 : "null"),
//             (k.href = k.toString());
//         }
//         (w.prototype = {
//           set: function (t, e, n) {
//             var o = this;
//             switch (t) {
//               case "query":
//                 "string" == typeof e && e.length && (e = (n || d.parse)(e)),
//                   (o[t] = e);
//                 break;
//               case "port":
//                 (o[t] = e),
//                   r(e, o.protocol)
//                     ? e && (o.host = o.hostname + ":" + e)
//                     : ((o.host = o.hostname), (o[t] = ""));
//                 break;
//               case "hostname":
//                 (o[t] = e), o.port && (e += ":" + o.port), (o.host = e);
//                 break;
//               case "host":
//                 (o[t] = e),
//                   f.test(e)
//                     ? ((e = e.split(":")),
//                       (o.port = e.pop()),
//                       (o.hostname = e.join(":")))
//                     : ((o.hostname = e), (o.port = ""));
//                 break;
//               case "protocol":
//                 (o.protocol = e.toLowerCase()), (o.slashes = !n);
//                 break;
//               case "pathname":
//               case "hash":
//                 if (e) {
//                   var c = "pathname" === t ? "/" : "#";
//                   o[t] = e.charAt(0) !== c ? c + e : e;
//                 } else o[t] = e;
//                 break;
//               case "username":
//               case "password":
//                 o[t] = encodeURIComponent(e);
//                 break;
//               case "auth":
//                 var l = e.indexOf(":");
//                 ~l
//                   ? ((o.username = e.slice(0, l)),
//                     (o.username = encodeURIComponent(
//                       decodeURIComponent(o.username)
//                     )),
//                     (o.password = e.slice(l + 1)),
//                     (o.password = encodeURIComponent(
//                       decodeURIComponent(o.password)
//                     )))
//                   : (o.username = encodeURIComponent(decodeURIComponent(e)));
//             }
//             for (var i = 0; i < v.length; i++) {
//               var ins = v[i];
//               ins[4] && (o[ins[1]] = o[ins[1]].toLowerCase());
//             }
//             return (
//               (o.auth = o.password
//                 ? o.username + ":" + o.password
//                 : o.username),
//               (o.origin =
//                 "file:" !== o.protocol && _(o.protocol) && o.host
//                   ? o.protocol + "//" + o.host
//                   : "null"),
//               (o.href = o.toString()),
//               o
//             );
//           },
//           toString: function (t) {
//             (t && "function" == typeof t) || (t = d.stringify);
//             var e,
//               n = this,
//               r = n.host,
//               o = n.protocol;
//             o && ":" !== o.charAt(o.length - 1) && (o += ":");
//             var c =
//               o + ((n.protocol && n.slashes) || _(n.protocol) ? "//" : "");
//             return (
//               n.username
//                 ? ((c += n.username),
//                   n.password && (c += ":" + n.password),
//                   (c += "@"))
//                 : n.password
//                 ? ((c += ":" + n.password), (c += "@"))
//                 : "file:" !== n.protocol &&
//                   _(n.protocol) &&
//                   !r &&
//                   "/" !== n.pathname &&
//                   (c += "@"),
//               (":" === r[r.length - 1] || (f.test(n.hostname) && !n.port)) &&
//                 (r += ":"),
//               (c += r + n.pathname),
//               (e = "object" == typeof n.query ? t(n.query) : n.query) &&
//                 (c += "?" !== e.charAt(0) ? "?" + e : e),
//               n.hash && (c += n.hash),
//               c
//             );
//           },
//         }),
//           (w.extractProtocol = A),
//           (w.location = P),
//           (w.trimLeft = y),
//           (w.qs = d),
//           (t.exports = w);
//       }).call(this, n(34));
//     },
//     function (t, e, n) {
//       "use strict";
//       t.exports = function (t, e) {
//         if (((e = e.split(":")[0]), !(t = +t))) return !1;
//         switch (e) {
//           case "http":
//           case "ws":
//             return 80 !== t;
//           case "https":
//           case "wss":
//             return 443 !== t;
//           case "ftp":
//             return 21 !== t;
//           case "gopher":
//             return 70 !== t;
//           case "file":
//             return !1;
//         }
//         return 0 !== t;
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = Object.prototype.hasOwnProperty;
//       function d(input) {
//         try {
//           return decodeURIComponent(input.replace(/\+/g, " "));
//         } catch (t) {
//           return null;
//         }
//       }
//       function o(input) {
//         try {
//           return encodeURIComponent(input);
//         } catch (t) {
//           return null;
//         }
//       }
//       (e.stringify = function (t, e) {
//         e = e || "";
//         var n,
//           d,
//           c = [];
//         for (d in ("string" != typeof e && (e = "?"), t))
//           if (r.call(t, d)) {
//             if (
//               ((n = t[d]) || (null != n && !isNaN(n)) || (n = ""),
//               (d = o(d)),
//               (n = o(n)),
//               null === d || null === n)
//             )
//               continue;
//             c.push(d + "=" + n);
//           }
//         return c.length ? e + c.join("&") : "";
//       }),
//         (e.parse = function (t) {
//           for (var e, n = /([^=?#&]+)=?([^&]*)/g, r = {}; (e = n.exec(t)); ) {
//             var o = d(e[1]),
//               c = d(e[2]);
//             null === o || null === c || o in r || (r[o] = c);
//           }
//           return r;
//         });
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = /^https?:\/\//i;
//       t.exports = function (t) {
//         if (!r.test(t.url))
//           throw new Error('"' + t.url + '" is not a valid URL');
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       t.exports = n(444);
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(445),
//         d = n(447),
//         o = n(448),
//         c = "undefined" == typeof window ? void 0 : window,
//         l = c ? "xhr" : "fetch",
//         f =
//           "function" == typeof XMLHttpRequest ? XMLHttpRequest : function () {},
//         h = "withCredentials" in new f(),
//         m = "undefined" == typeof XDomainRequest ? void 0 : XDomainRequest,
//         y = h ? f : m;
//       c || ((f = o), (y = o)),
//         (t.exports = function (t, e) {
//           var n = t.options,
//             o = t.applyMiddleware("finalizeOptions", n),
//             h = {},
//             m = c && c.location && !r(c.location.href, o.url),
//             v = t.applyMiddleware("interceptRequest", void 0, {
//               adapter: l,
//               context: t,
//             });
//           if (v) {
//             var C = setTimeout(e, 0, null, v);
//             return {
//               abort: function () {
//                 return clearTimeout(C);
//               },
//             };
//           }
//           var P = m ? new y() : new f(),
//             _ = c && c.XDomainRequest && P instanceof c.XDomainRequest,
//             A = o.headers,
//             w = o.timeout,
//             F = !1,
//             O = !1,
//             k = !1;
//           if (
//             ((P.onerror = x),
//             (P.ontimeout = x),
//             (P.onabort = function () {
//               F = !0;
//             }),
//             (P.onprogress = function () {}),
//             (P[_ ? "onload" : "onreadystatechange"] = function () {
//               !(function () {
//                 if (!w) return;
//                 I(),
//                   (h.socket = setTimeout(function () {
//                     return E("ESOCKETTIMEDOUT");
//                   }, w.socket));
//               })(),
//                 F ||
//                   (4 !== P.readyState && !_) ||
//                   (0 !== P.status &&
//                     (function () {
//                       if (F || O || k) return;
//                       if (0 === P.status)
//                         return void x(new Error("Unknown XHR error"));
//                       I(),
//                         (O = !0),
//                         e(
//                           null,
//                           (function () {
//                             var t = P.status,
//                               e = P.statusText;
//                             if (_ && void 0 === t) t = 200;
//                             else {
//                               if (t > 12e3 && t < 12156) return x();
//                               (t = 1223 === P.status ? 204 : P.status),
//                                 (e = 1223 === P.status ? "No Content" : e);
//                             }
//                             return {
//                               body: P.response || P.responseText,
//                               url: o.url,
//                               method: o.method,
//                               headers: _ ? {} : d(P.getAllResponseHeaders()),
//                               statusCode: t,
//                               statusMessage: e,
//                             };
//                           })()
//                         );
//                     })());
//             }),
//             P.open(o.method, o.url, !0),
//             (P.withCredentials = !!o.withCredentials),
//             A && P.setRequestHeader)
//           )
//             for (var S in A) A.hasOwnProperty(S) && P.setRequestHeader(S, A[S]);
//           else if (A && _)
//             throw new Error(
//               "Headers cannot be set on an XDomainRequest object"
//             );
//           return (
//             o.rawBody && (P.responseType = "arraybuffer"),
//             t.applyMiddleware("onRequest", {
//               options: o,
//               adapter: l,
//               request: P,
//               context: t,
//             }),
//             P.send(o.body || null),
//             w &&
//               (h.connect = setTimeout(function () {
//                 return E("ETIMEDOUT");
//               }, w.connect)),
//             {
//               abort: function () {
//                 (F = !0), P && P.abort();
//               },
//             }
//           );
//           function E(code) {
//             (k = !0), P.abort();
//             var e = new Error(
//               "ESOCKETTIMEDOUT" === code
//                 ? "Socket timed out on request to " + o.url
//                 : "Connection timed out on request to " + o.url
//             );
//             (e.code = code), t.channels.error.publish(e);
//           }
//           function I() {
//             (F || (P.readyState >= 2 && h.connect)) && clearTimeout(h.connect),
//               h.socket && clearTimeout(h.socket);
//           }
//           function x(t) {
//             if (!O) {
//               I(), (O = !0), (P = null);
//               var n =
//                 t ||
//                 new Error("Network error while attempting to reach " + o.url);
//               (n.isNetworkError = !0), (n.request = o), e(n);
//             }
//           }
//         });
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(446);
//       t.exports = function (t, e, n) {
//         if (t === e) return !0;
//         var d = r.parse(t, !1, !0),
//           o = r.parse(e, !1, !0),
//           c = 0 | d.port || ("https" === d.protocol ? 443 : 80),
//           l = 0 | o.port || ("https" === o.protocol ? 443 : 80),
//           f = {
//             proto: d.protocol === o.protocol,
//             hostname: d.hostname === o.hostname,
//             port: c === l,
//           };
//         return f.proto && f.hostname && (f.port || n);
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       var r =
//         /^(?:(?:(?:([^:\/#\?]+:)?(?:(?:\/\/)((?:((?:[^:@\/#\?]+)(?:\:(?:[^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/;
//       t.exports = {
//         regex: r,
//         parse: function (t) {
//           var e = r.exec(t);
//           return e
//             ? {
//                 protocol: (e[1] || "").toLowerCase() || void 0,
//                 hostname: (e[5] || "").toLowerCase() || void 0,
//                 port: e[6] || void 0,
//               }
//             : {};
//         },
//       };
//     },
//     function (t, e) {
//       var n = function (t) {
//         return t.replace(/^\s+|\s+$/g, "");
//       };
//       t.exports = function (t) {
//         if (!t) return {};
//         for (var e, r = {}, d = n(t).split("\n"), i = 0; i < d.length; i++) {
//           var o = d[i],
//             c = o.indexOf(":"),
//             l = n(o.slice(0, c)).toLowerCase(),
//             f = n(o.slice(c + 1));
//           void 0 === r[l]
//             ? (r[l] = f)
//             : ((e = r[l]),
//               "[object Array]" === Object.prototype.toString.call(e)
//                 ? r[l].push(f)
//                 : (r[l] = [r[l], f]));
//         }
//         return r;
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       function r() {
//         this.readyState = 0;
//       }
//       (r.prototype.open = function (t, e) {
//         (this._method = t),
//           (this._url = e),
//           (this._resHeaders = ""),
//           (this.readyState = 1),
//           this.onreadystatechange();
//       }),
//         (r.prototype.abort = function () {
//           this._controller && this._controller.abort();
//         }),
//         (r.prototype.getAllResponseHeaders = function () {
//           return this._resHeaders;
//         }),
//         (r.prototype.setRequestHeader = function (t, e) {
//           (this._headers = this._headers || {}), (this._headers[t] = e);
//         }),
//         (r.prototype.send = function (body) {
//           var t = this,
//             e = (this._controller =
//               "function" == typeof AbortController && new AbortController()),
//             n = "arraybuffer" !== this.responseType,
//             r = {
//               method: this._method,
//               headers: this._headers,
//               signal: e && e.signal,
//               body: body,
//             };
//           "undefined" != typeof window &&
//             (r.credentials = this.withCredentials ? "include" : "omit"),
//             fetch(this._url, r)
//               .then(function (e) {
//                 return (
//                   e.headers.forEach(function (e, n) {
//                     t._resHeaders += n + ": " + e + "\r\n";
//                   }),
//                   (t.status = e.status),
//                   (t.statusText = e.statusText),
//                   (t.readyState = 3),
//                   n ? e.text() : e.arrayBuffer()
//                 );
//               })
//               .then(function (e) {
//                 n ? (t.responseText = e) : (t.response = e),
//                   (t.readyState = 4),
//                   t.onreadystatechange();
//               })
//               .catch(function (e) {
//                 "AbortError" !== e.name ? t.onerror(e) : t.onabort();
//               });
//         }),
//         (t.exports = r);
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(450),
//         d = n(13);
//       t.exports = function () {
//         var t =
//           (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
//             .implementation || r.Observable;
//         if (!t)
//           throw new Error(
//             "`Observable` is not available in global scope, and no implementation was passed"
//           );
//         return {
//           onReturn: function (e, n) {
//             return new t(function (t) {
//               return (
//                 e.error.subscribe(function (e) {
//                   return t.error(e);
//                 }),
//                 e.progress.subscribe(function (e) {
//                   return t.next(d({ type: "progress" }, e));
//                 }),
//                 e.response.subscribe(function (e) {
//                   t.next(d({ type: "response" }, e)), t.complete();
//                 }),
//                 e.request.publish(n),
//                 function () {
//                   return e.abort.publish();
//                 }
//               );
//             });
//           },
//         };
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       (function (e) {
//         "undefined" != typeof window
//           ? (t.exports = window)
//           : void 0 !== e
//           ? (t.exports = e)
//           : "undefined" != typeof self
//           ? (t.exports = self)
//           : (t.exports = {});
//       }).call(this, n(34));
//     },
//     function (t, e, n) {
//       "use strict";
//       var r =
//           "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
//             ? function (t) {
//                 return typeof t;
//               }
//             : function (t) {
//                 return t &&
//                   "function" == typeof Symbol &&
//                   t.constructor === Symbol &&
//                   t !== Symbol.prototype
//                   ? "symbol"
//                   : typeof t;
//               },
//         d = n(13),
//         o = n(452),
//         c = ["boolean", "string", "number"];
//       t.exports = function () {
//         return {
//           processOptions: function (t) {
//             var e,
//               body = t.body;
//             return body &&
//               !("function" == typeof body.pipe) &&
//               !(
//                 (e = body).constructor &&
//                 "function" == typeof e.constructor.isBuffer &&
//                 e.constructor.isBuffer(e)
//               ) &&
//               (-1 !== c.indexOf(void 0 === body ? "undefined" : r(body)) ||
//                 Array.isArray(body) ||
//                 o(body))
//               ? d({}, t, {
//                   body: JSON.stringify(t.body),
//                   headers: d({}, t.headers, {
//                     "Content-Type": "application/json",
//                   }),
//                 })
//               : t;
//           },
//         };
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(453);
//       function d(t) {
//         return (
//           !0 === r(t) && "[object Object]" === Object.prototype.toString.call(t)
//         );
//       }
//       t.exports = function (t) {
//         var e, n;
//         return (
//           !1 !== d(t) &&
//           "function" == typeof (e = t.constructor) &&
//           !1 !== d((n = e.prototype)) &&
//           !1 !== n.hasOwnProperty("isPrototypeOf")
//         );
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       t.exports = function (t) {
//         return null != t && "object" == typeof t && !1 === Array.isArray(t);
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(13);
//       function d(body) {
//         try {
//           return JSON.parse(body);
//         } catch (t) {
//           throw (
//             ((t.message =
//               "Failed to parsed response body as JSON: " + t.message),
//             t)
//           );
//         }
//       }
//       t.exports = function (t) {
//         return {
//           onResponse: function (e) {
//             var n = e.headers["content-type"] || "",
//               o = (t && t.force) || -1 !== n.indexOf("application/json");
//             return e.body && n && o ? r({}, e, { body: d(e.body) }) : e;
//           },
//           processOptions: function (t) {
//             return r({}, t, {
//               headers: r({ Accept: "application/json" }, t.headers),
//             });
//           },
//         };
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       t.exports = n(456);
//     },
//     function (t, e, n) {
//       "use strict";
//       t.exports = function () {
//         return {
//           onRequest: function (t) {
//             if ("xhr" === t.adapter) {
//               var e = t.request,
//                 n = t.context;
//               "upload" in e &&
//                 "onprogress" in e.upload &&
//                 (e.upload.onprogress = r("upload")),
//                 "onprogress" in e && (e.onprogress = r("download"));
//             }
//             function r(t) {
//               return function (e) {
//                 var r = e.lengthComputable ? (e.loaded / e.total) * 100 : -1;
//                 n.channels.progress.publish({
//                   stage: t,
//                   percent: r,
//                   total: e.total,
//                   loaded: e.loaded,
//                   lengthComputable: e.lengthComputable,
//                 });
//               };
//             }
//           },
//         };
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(458),
//         d = n(13);
//       function o(t) {
//         var e = l(t);
//         o.super.call(this, e.message), d(this, e);
//       }
//       function c(t) {
//         var e = l(t);
//         c.super.call(this, e.message), d(this, e);
//       }
//       function l(t) {
//         var body = t.body,
//           e = {
//             response: t,
//             statusCode: t.statusCode,
//             responseBody: f(body, t),
//           };
//         return body.error && body.message
//           ? ((e.message = "".concat(body.error, " - ").concat(body.message)), e)
//           : body.error && body.error.description
//           ? ((e.message = body.error.description), (e.details = body.error), e)
//           : ((e.message =
//               body.error ||
//               body.message ||
//               (function (t) {
//                 var e = t.statusMessage ? " ".concat(t.statusMessage) : "";
//                 return ""
//                   .concat(t.method, "-request to ")
//                   .concat(t.url, " resulted in HTTP ")
//                   .concat(t.statusCode)
//                   .concat(e);
//               })(t)),
//             e);
//       }
//       function f(body, t) {
//         return -1 !==
//           (t.headers["content-type"] || "")
//             .toLowerCase()
//             .indexOf("application/json")
//           ? JSON.stringify(body, null, 2)
//           : body;
//       }
//       r(o), r(c), (e.ClientError = o), (e.ServerError = c);
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = "undefined" != typeof Reflect ? Reflect.construct : void 0,
//         d = Object.defineProperty,
//         o = Error.captureStackTrace;
//       function c(t) {
//         void 0 !== t &&
//           d(this, "message", { configurable: !0, value: t, writable: !0 });
//         var e = this.constructor.name;
//         void 0 !== e &&
//           e !== this.name &&
//           d(this, "name", { configurable: !0, value: e, writable: !0 }),
//           o(this, this.constructor);
//       }
//       void 0 === o &&
//         (o = function (t) {
//           var e = new Error();
//           d(t, "stack", {
//             configurable: !0,
//             get: function () {
//               var t = e.stack;
//               return (
//                 d(this, "stack", { configurable: !0, value: t, writable: !0 }),
//                 t
//               );
//             },
//             set: function (e) {
//               d(t, "stack", { configurable: !0, value: e, writable: !0 });
//             },
//           });
//         }),
//         (c.prototype = Object.create(Error.prototype, {
//           constructor: { configurable: !0, value: c, writable: !0 },
//         }));
//       var l = (function () {
//         function t(t, e) {
//           return d(t, "name", { configurable: !0, value: e });
//         }
//         try {
//           var e = function () {};
//           if ((t(e, "foo"), "foo" === e.name)) return t;
//         } catch (t) {}
//       })();
//       (e = t.exports =
//         function (t, e) {
//           if (null == e || e === Error) e = c;
//           else if ("function" != typeof e)
//             throw new TypeError("super_ should be a function");
//           var n;
//           if ("string" == typeof t)
//             (n = t),
//               (t =
//                 void 0 !== r
//                   ? function () {
//                       return r(e, arguments, this.constructor);
//                     }
//                   : function () {
//                       e.apply(this, arguments);
//                     }),
//               void 0 !== l && (l(t, n), (n = void 0));
//           else if ("function" != typeof t)
//             throw new TypeError(
//               "constructor should be either a string or a function"
//             );
//           t.super_ = t.super = e;
//           var d = { constructor: { configurable: !0, value: t, writable: !0 } };
//           return (
//             void 0 !== n &&
//               (d.name = { configurable: !0, value: n, writable: !0 }),
//             (t.prototype = Object.create(e.prototype, d)),
//             t
//           );
//         }),
//         (e.BaseError = c);
//     },
//     function (t, e, n) {
//       "use strict";
//       t.exports = [];
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(13);
//       t.exports = function (t) {
//         var e =
//             arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
//           n = {},
//           d = e.token || t.token;
//         d && (n.Authorization = "Bearer ".concat(d)),
//           e.useGlobalApi ||
//             t.useProjectHostname ||
//             !t.projectId ||
//             (n["X-Sanity-Project-ID"] = t.projectId);
//         var o = Boolean(
//             void 0 === e.withCredentials
//               ? t.token || t.withCredentials
//               : e.withCredentials
//           ),
//           c = void 0 === e.timeout ? t.timeout : e.timeout;
//         return r({}, e, {
//           headers: r({}, n, e.headers || {}),
//           timeout: void 0 === c ? 3e5 : c,
//           json: !0,
//           withCredentials: o,
//         });
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       var r = n(206),
//         d = n(13),
//         o = n(58),
//         c = n(207),
//         l = {
//           apiHost: "https://api.sanity.io",
//           useProjectHostname: !0,
//           gradientMode: !1,
//           isPromiseAPI: !0,
//         },
//         f = ["localhost", "127.0.0.1", "0.0.0.0"],
//         h = function (t) {
//           return c(function () {
//             return console.warn(t.join(" "));
//           });
//         },
//         m = h([
//           "You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and",
//           "cheaper. Think about it! For more info, see ".concat(
//             r("js-client-cdn-configuration"),
//             "."
//           ),
//           "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating",
//           "the client.",
//         ]),
//         y = h([
//           "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
//           "See ".concat(
//             r("js-client-browser-token"),
//             " for more information and how to hide this warning."
//           ),
//         ]),
//         v = h([
//           "You have set `useCdn` to `true` while also specifying a token. This is usually not what you",
//           "want. The CDN cannot be used with an authorization token, since private data cannot be cached.",
//           "See ".concat(r("js-client-usecdn-token"), " for more information."),
//         ]);
//       (e.defaultConfig = l),
//         (e.initConfig = function (t, e) {
//           var n = d({}, l, e, t),
//             c = n.gradientMode,
//             h = !c && n.useProjectHostname;
//           if ("undefined" == typeof Promise) {
//             var C = r("js-client-promise-polyfill");
//             throw new Error(
//               "No native Promise-implementation found, polyfill needed - see ".concat(
//                 C
//               )
//             );
//           }
//           if (c && !n.namespace)
//             throw new Error(
//               "Configuration must contain `namespace` when running in gradient mode"
//             );
//           if (h && !n.projectId)
//             throw new Error("Configuration must contain `projectId`");
//           var P =
//               "undefined" != typeof window &&
//               window.location &&
//               window.location.hostname,
//             _ =
//               P &&
//               (function (t) {
//                 return -1 !== f.indexOf(t);
//               })(window.location.hostname);
//           if (
//             (P && _ && n.token && !0 !== n.ignoreBrowserTokenWarning
//               ? y()
//               : (!P || _) && n.useCdn && n.token
//               ? v()
//               : void 0 === n.useCdn && m(),
//             h && o.projectId(n.projectId),
//             !c && n.dataset && o.dataset(n.dataset, n.gradientMode),
//             (n.isDefaultApi = n.apiHost === l.apiHost),
//             (n.useCdn = Boolean(n.useCdn) && !n.token && !n.withCredentials),
//             n.gradientMode)
//           )
//             (n.url = n.apiHost), (n.cdnUrl = n.apiHost);
//           else {
//             var A = n.apiHost.split("://", 2),
//               w = A[0],
//               F = A[1],
//               O = n.isDefaultApi ? "apicdn.sanity.io" : F;
//             n.useProjectHostname
//               ? ((n.url = ""
//                   .concat(w, "://")
//                   .concat(n.projectId, ".")
//                   .concat(F, "/v1")),
//                 (n.cdnUrl = ""
//                   .concat(w, "://")
//                   .concat(n.projectId, ".")
//                   .concat(O, "/v1")))
//               : ((n.url = "".concat(n.apiHost, "/v1")), (n.cdnUrl = n.url));
//           }
//           return n;
//         });
//     },
//     function (t, e, n) {
//       "use strict";
//       function r(t) {
//         return null !== t && "object" == typeof t;
//       }
//       function d(t, e, n = ".", o) {
//         if (!r(e)) return d(t, {}, n, o);
//         const c = Object.assign({}, e);
//         for (const e in t) {
//           if ("__proto__" === e || "constructor" === e) continue;
//           const l = t[e];
//           null != l &&
//             ((o && o(c, e, l, n)) ||
//               (Array.isArray(l) && Array.isArray(c[e])
//                 ? (c[e] = c[e].concat(l))
//                 : r(l) && r(c[e])
//                 ? (c[e] = d(l, c[e], (n ? `${n}.` : "") + e.toString(), o))
//                 : (c[e] = l)));
//         }
//         return c;
//       }
//       function o(t) {
//         return (...e) => e.reduce((p, e) => d(p, e, "", t), {});
//       }
//       n.r(e);
//       const c = o();
//       (c.fn = o((t, e, n, r) => {
//         if (void 0 !== t[e] && "function" == typeof n)
//           return (t[e] = n(t[e])), !0;
//       })),
//         (c.arrayFn = o((t, e, n, r) => {
//           if (Array.isArray(t[e]) && "function" == typeof n)
//             return (t[e] = n(t[e])), !0;
//         })),
//         (c.extend = o),
//         (e.default = c);
//     },
//     function (t, e, n) {
//       "use strict";
//       var r =
//           (this && this.__createBinding) ||
//           (Object.create
//             ? function (t, e, n, r) {
//                 void 0 === r && (r = n),
//                   Object.defineProperty(t, r, {
//                     enumerable: !0,
//                     get: function () {
//                       return e[n];
//                     },
//                   });
//               }
//             : function (t, e, n, r) {
//                 void 0 === r && (r = n), (t[r] = e[n]);
//               }),
//         d =
//           (this && this.__setModuleDefault) ||
//           (Object.create
//             ? function (t, e) {
//                 Object.defineProperty(t, "default", {
//                   enumerable: !0,
//                   value: e,
//                 });
//               }
//             : function (t, e) {
//                 t.default = e;
//               }),
//         o =
//           (this && this.__importStar) ||
//           function (t) {
//             if (t && t.__esModule) return t;
//             var e = {};
//             if (null != t)
//               for (var n in t)
//                 "default" !== n &&
//                   Object.prototype.hasOwnProperty.call(t, n) &&
//                   r(e, t, n);
//             return d(e, t), e;
//           };
//       Object.defineProperty(e, "__esModule", { value: !0 });
//       var c = o(n(464));
//       e.default = function () {
//         return {
//           beforeCreate: function () {
//             var t,
//               e,
//               n = this;
//             if (this.$options && "function" == typeof this.$options.jsonld) {
//               var r =
//                 null !== (t = this.$options.head) && void 0 !== t
//                   ? t
//                   : null === (e = this.$options.computed) || void 0 === e
//                   ? void 0
//                   : e.$metaInfo;
//               this.$options.head = function () {
//                 return c.default.call(n, r);
//               };
//             }
//           },
//         };
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       var r =
//           (this && this.__assign) ||
//           function () {
//             return (
//               (r =
//                 Object.assign ||
//                 function (t) {
//                   for (var s, i = 1, e = arguments.length; i < e; i++)
//                     for (var p in (s = arguments[i]))
//                       Object.prototype.hasOwnProperty.call(s, p) &&
//                         (t[p] = s[p]);
//                   return t;
//                 }),
//               r.apply(this, arguments)
//             );
//           },
//         d =
//           (this && this.__spreadArray) ||
//           function (t, e, n) {
//             if (n || 2 === arguments.length)
//               for (var r, i = 0, d = e.length; i < d; i++)
//                 (!r && i in e) ||
//                   (r || (r = Array.prototype.slice.call(e, 0, i)),
//                   (r[i] = e[i]));
//             return t.concat(r || Array.prototype.slice.call(e));
//           };
//       Object.defineProperty(e, "__esModule", { value: !0 }),
//         (e.getJsonLdHeadObject = void 0);
//       e.getJsonLdHeadObject = function (t, e) {
//         var n = e.call(t);
//         return null === n
//           ? null
//           : {
//               script: [
//                 {
//                   hid:
//                     "nuxt-jsonld-" +
//                     (function (s) {
//                       for (var t = 0, i = 0; i < s.length; i += 1)
//                         (t = (t << 5) - t + s.charCodeAt(i)), (t &= t);
//                       return t;
//                     })(JSON.stringify(n, null, "")).toString(16),
//                   type: "application/ld+json",
//                   json: n,
//                 },
//               ],
//             };
//       };
//       var o = function (t) {
//         return null == t || 0 === Object.keys(t).length;
//       };
//       e.default = function (t) {
//         var head = (function (t, e) {
//             return "function" == typeof e ? e.call(t) : e || null;
//           })(this, t),
//           n = (0, e.getJsonLdHeadObject)(this, this.$options.jsonld);
//         return o(head) && null === n
//           ? {}
//           : o(head)
//           ? n
//           : null === n
//           ? head
//           : r(r({}, head), {
//               script: d(d([], head.script || [], !0), n.script, !0),
//             });
//       };
//     },
//     function (t, e, n) {
//       "use strict";
//       Object.defineProperty(e, "__esModule", { value: !0 }),
//         (e.default = function (t) {
//           var e = t.options || {};
//           e.methods &&
//             e.methods.jsonld &&
//             "function" == typeof e.methods.jsonld &&
//             ((e.jsonld = e.methods.jsonld), delete e.methods.jsonld);
//         });
//     },
//   ],
// ]);
