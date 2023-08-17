// (window.webpackJsonp = window.webpackJsonp || []).push([
//   [18],
//   {
//     469: function (t, e, r) {
//       var content = r(471);
//       content.__esModule && (content = content.default),
//         "string" == typeof content && (content = [[t.i, content, ""]]),
//         content.locals && (t.exports = content.locals);
//       (0, r(10).default)("d5ea1056", content, !0, { sourceMap: !1 });
//     },
//     470: function (t, e, r) {
//       "use strict";
//       r(469);
//     },
//     471: function (t, e, r) {
//       var c = r(9)(function (i) {
//         return i[1];
//       });
//       c.push([
//         t.i,
//         ".product-card-image-container[data-v-272bc7fe]{height:0;position:relative;padding-bottom:134%;--tw-bg-opacity:1;background-color:rgba(12, 20, 11, var(--tw-bg-opacity));overflow:hidden}.product-card-image-container img[data-v-272bc7fe]{position:absolute;top:0px;left:0px;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.bid-card:hover .active-product-overlay[data-v-272bc7fe], .bid-card:hover .product-card-image-container[data-v-272bc7fe]{opacity:0}.inactive-card figure img[data-v-272bc7fe]{filter:blur(2px);transform:scale(1.15)}.active-card figure img[data-v-272bc7fe]{filter:blur(0) grayscale(100%) brightness(1.25);transform:scale(1)}.active-product-overlay[data-v-272bc7fe]{background:#0f0;opacity:1;mix-blend-mode:multiply}.active-product-overlay+figure[data-v-272bc7fe]{filter:grayscale(100%) brightness(150%)}",
//         "",
//       ]),
//         (c.locals = {}),
//         (t.exports = c);
//     },
//     472: function (t, e, r) {
//       "use strict";
//       r(76);
//       var c = {
//           props: {
//             product: Object,
//             isActiveProduct: Boolean,
//             setStickyProduct: Function,
//           },
//           computed: {
//             titleArr: function () {
//               return this.product.store.title.split("(");
//             },
//             titleArrBySpaces: function () {
//               return this.product.store.title.split(" ");
//             },
//           },
//           methods: {
//             formatPrice: function (t) {
//               return new Intl.NumberFormat("en-US").format(t);
//             },
//             setActiveProduct: function (t) {
//               this.$store.commit("SET_ACTIVE_PRODUCT", t),
//                 this.$store.commit("SET_EXPANDACTIVEPRODUCTMODAL", !0),
//                 this.$router.push("/auction");
//             },
//           },
//         },
//         o = (r(470), r(1)),
//         component = Object(o.a)(
//           c,
//           function () {
//             var t = this,
//               e = t._self._c;
//             return e(
//               "button",
//               {
//                 staticClass: "helv text-bodySmall uppercase bid-card relative",
//                 class: t.product.isInFuture ? "inactive-card" : "active-card",
//                 on: {
//                   mouseenter: function (e) {
//                     return t.setStickyProduct(t.product);
//                   },
//                   mouseleave: function (e) {
//                     return t.setStickyProduct(null);
//                   },
//                   click: function (e) {
//                     t.product.isInFuture || t.setActiveProduct(t.product);
//                   },
//                 },
//               },
//               [
//                 t.isActiveProduct
//                   ? e("div", {
//                       staticClass:
//                         "absolute top-0 left-0 w-full h-full active-product-overlay z-[3]",
//                     })
//                   : t._e(),
//                 t._v(" "),
//                 e(
//                   "figure",
//                   { staticClass: "product-card-image-container z-[2]" },
//                   [
//                     t.product.store.previewImageUrl
//                       ? e("img", {
//                           attrs: {
//                             src: t.product.store.previewImageUrl,
//                             alt: "".concat(
//                               t.product.store.title,
//                               " Preview Thumbnail"
//                             ),
//                           },
//                         })
//                       : t._e(),
//                   ]
//                 ),
//                 t._v(" "),
//                 e(
//                   "div",
//                   {
//                     staticClass:
//                       "title-container text-left text-bodySmall uppercase mb-4 z-[1] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center",
//                   },
//                   [
//                     e("span", {
//                       staticClass: "block helv-cond",
//                       domProps: {
//                         textContent: t._s("RUN ".concat(t.titleArrBySpaces[0])),
//                       },
//                     }),
//                     t._v(" "),
//                     e("span", {
//                       staticClass: "block serif",
//                       domProps: {
//                         textContent: t._s("0" + t.titleArrBySpaces[1]),
//                       },
//                     }),
//                   ]
//                 ),
//               ]
//             );
//           },
//           [],
//           !1,
//           null,
//           "272bc7fe",
//           null
//         );
//       e.a = component.exports;
//     },
//     512: function (t, e, r) {
//       var content = r(566);
//       content.__esModule && (content = content.default),
//         "string" == typeof content && (content = [[t.i, content, ""]]),
//         content.locals && (t.exports = content.locals);
//       (0, r(10).default)("8226828c", content, !0, { sourceMap: !1 });
//     },
//     565: function (t, e, r) {
//       "use strict";
//       r(512);
//     },
//     566: function (t, e, r) {
//       var c = r(9)(function (i) {
//         return i[1];
//       });
//       c.push([
//         t.i,
//         ".blur-it[data-v-1d165ae8]{overflow:hidden}.blur-it img[data-v-1d165ae8]{filter:blur(24px);transform:scale(1.05)}.sticky-container img[data-v-1d165ae8]{display:block;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}",
//         "",
//       ]),
//         (c.locals = {}),
//         (t.exports = c);
//     },
//     606: function (t, e, r) {
//       "use strict";
//       r.r(e);
//       r(12), r(7), r(6), r(14), r(15);
//       var c = r(3);
//       function o(object, t) {
//         var e = Object.keys(object);
//         if (Object.getOwnPropertySymbols) {
//           var r = Object.getOwnPropertySymbols(object);
//           t &&
//             (r = r.filter(function (t) {
//               return Object.getOwnPropertyDescriptor(object, t).enumerable;
//             })),
//             e.push.apply(e, r);
//         }
//         return e;
//       }
//       function n(t) {
//         for (var i = 1; i < arguments.length; i++) {
//           var source = null != arguments[i] ? arguments[i] : {};
//           i % 2
//             ? o(Object(source), !0).forEach(function (e) {
//                 Object(c.a)(t, e, source[e]);
//               })
//             : Object.getOwnPropertyDescriptors
//             ? Object.defineProperties(
//                 t,
//                 Object.getOwnPropertyDescriptors(source)
//               )
//             : o(Object(source)).forEach(function (e) {
//                 Object.defineProperty(
//                   t,
//                   e,
//                   Object.getOwnPropertyDescriptor(source, e)
//                 );
//               });
//         }
//         return t;
//       }
//       var l = r(5);
//       function d(object, t) {
//         var e = Object.keys(object);
//         if (Object.getOwnPropertySymbols) {
//           var r = Object.getOwnPropertySymbols(object);
//           t &&
//             (r = r.filter(function (t) {
//               return Object.getOwnPropertyDescriptor(object, t).enumerable;
//             })),
//             e.push.apply(e, r);
//         }
//         return e;
//       }
//       function f(t) {
//         for (var i = 1; i < arguments.length; i++) {
//           var source = null != arguments[i] ? arguments[i] : {};
//           i % 2
//             ? d(Object(source), !0).forEach(function (e) {
//                 Object(c.a)(t, e, source[e]);
//               })
//             : Object.getOwnPropertyDescriptors
//             ? Object.defineProperties(
//                 t,
//                 Object.getOwnPropertyDescriptors(source)
//               )
//             : d(Object(source)).forEach(function (e) {
//                 Object.defineProperty(
//                   t,
//                   e,
//                   Object.getOwnPropertyDescriptor(source, e)
//                 );
//               });
//         }
//         return t;
//       }
//       var v = {
//           components: { BidCard: r(472).a },
//           data: function () {
//             return {
//               currentStickyProduct: null,
//               blankCards: [],
//               currentIndex: 0,
//             };
//           },
//           computed: f(
//             {},
//             Object(l.e)(["activeProduct", "products", "programStartTime"])
//           ),
//           watch: {
//             activeProduct: function (t) {
//               this.setProgram();
//             },
//           },
//           methods: f(
//             f(
//               {},
//               Object(l.d)({
//                 setActiveProduct: "SET_ACTIVE_PRODUCT",
//                 setExpandActiveProductModal: "SET_EXPANDACTIVEPRODUCTMODAL",
//               })
//             ),
//             {},
//             {
//               setProgram: function () {
//                 var t = new Date(this.programStartTime),
//                   e = new Date();
//                 console.log(e.toISOString(), t.toISOString());
//                 var r = (e.getTime() - t.getTime()) / 1e3;
//                 r < 0
//                   ? console.log("PROGRAM HAS NOT YET STARTED")
//                   : ((this.currentIndex = Math.floor(r / 120)),
//                     console.log(this.currentIndex));
//               },
//             }
//           ),
//           mounted: function () {
//             this.setProgram();
//           },
//         },
//         m = (r(565), r(1)),
//         component = Object(m.a)(
//           v,
//           function () {
//             var t = this,
//               e = t._self._c;
//             return e(
//               "div",
//               { staticClass: "flex flex-col md:flex-row md:gap-x-24" },
//               [
//                 e(
//                   "h2",
//                   {
//                     staticClass:
//                       "block md:hidden text-center helv uppercase w-full pt-[64px]",
//                   },
//                   [t._v("View All Lots")]
//                 ),
//                 t._v(" "),
//                 e(
//                   "div",
//                   {
//                     staticClass:
//                       "w-full md:w-1/2 grid grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 py-16 md:py-0 md:pb-[48px] lg:pb-[96px] lg:pr-16 xl:grid-cols-5",
//                   },
//                   [
//                     t._l(t.products, function (r, i) {
//                       return [
//                         e("BidCard", {
//                           key: r._id,
//                           attrs: {
//                             product: n(
//                               n({}, r),
//                               {},
//                               { isInFuture: i > t.currentIndex }
//                             ),
//                             isActiveProduct:
//                               t.activeProduct && t.activeProduct._id === r._id,
//                             setStickyProduct: function (e) {
//                               return (t.currentStickyProduct = e);
//                             },
//                             "data-ref": i,
//                           },
//                         }),
//                       ];
//                     }),
//                   ],
//                   2
//                 ),
//                 t._v(" "),
//                 t.currentStickyProduct
//                   ? e(
//                       "nuxt-link",
//                       {
//                         staticClass:
//                           "hidden md:block fixed top-[48px] right-[48px] md:top-[48px md:right-[48px] lg:top-[96px] lg:right-[96px] z-[10000] sticky-container",
//                         class: t.currentStickyProduct.isInFuture && "blur-it",
//                         attrs: { to: "/auction" },
//                         nativeOn: {
//                           click: function (e) {
//                             return t.setActiveProduct(t.currentStickyProduct);
//                           },
//                         },
//                       },
//                       [
//                         e("figure", { staticClass: "h-full" }, [
//                           t.currentStickyProduct.store.previewImageUrl
//                             ? e("img", {
//                                 attrs: {
//                                   src: t.currentStickyProduct.store
//                                     .previewImageUrl,
//                                   alt: "".concat(
//                                     t.currentStickyProduct.store.title,
//                                     " Preview Thumbnail"
//                                   ),
//                                 },
//                               })
//                             : t._e(),
//                         ]),
//                       ]
//                     )
//                   : t._e(),
//               ],
//               1
//             );
//           },
//           [],
//           !1,
//           null,
//           "1d165ae8",
//           null
//         );
//       e.default = component.exports;
//     },
//   },
// ]);
