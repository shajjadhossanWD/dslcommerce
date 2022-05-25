"use strict";
(() => {
var exports = {};
exports.id = 1426;
exports.ids = [1426];
exports.modules = {

/***/ 3040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ orders_OrdersTable)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(7105);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Admin/Modals/OrderUpdateModal.js


const OrderUpdateModal = ({ active  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `admin-product-modal ${active}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal-innter-content",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "modal-body",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "close",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "bx bx-x"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Order Update"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            children: "Order Status"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                            className: "form-control",
                                            id: "product-type",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    children: "Select Option"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "delivered",
                                                    children: "Delivered"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "pending",
                                                    children: "Pending"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "cancel",
                                                    children: "Declined"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "modal-btn",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "btn optional-btn float-left",
                                            children: "Cancel"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn default-btn float-right",
                                            children: "Update"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const Modals_OrderUpdateModal = (OrderUpdateModal);

// EXTERNAL MODULE: ./utils/formatDate.js
var formatDate = __webpack_require__(1793);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Admin/orders/OrdersTable.js






const OrdersTable = ({ orders , totalPages  })=>{
    const router = (0,router_.useRouter)();
    const deliverHandler = async (e)=>{
        let id = e.target.id;
        await external_axios_default().put(`${baseUrl/* default */.Z}/api/v1/orders/${id}`);
        router.push('/admin/orders');
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "page-header",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Orders"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "admin-table admin-orders-table height-555",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "table-responsive",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                        className: "table table-hover mb-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Action"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Customer Email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Date"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Delivery Address"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Amount"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Contact"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Status"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                children: orders.map((order)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                    className: "switch",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "checkbox",
                                                            id: order.id,
                                                            checked: order.isDelivered,
                                                            onChange: deliverHandler
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "slider round"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: order.email
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: (0,formatDate/* default */.Z)(order.createdAt)
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: order.address
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                children: [
                                                    "$",
                                                    order.totalPrice
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: order.phone
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: order.isDelivered === true ? 'status-button badge badge_success' : 'status-button badge  badge_danger',
                                                    children: order.isDelivered === true ? 'delivered' : 'pending'
                                                })
                                            })
                                        ]
                                    }, order.id)
                                )
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Modals_OrderUpdateModal, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex-grow-1"
            })
        ]
    }));
};
/* harmony default export */ const orders_OrdersTable = (OrdersTable);


/***/ }),

/***/ 9766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Admin_TopNavbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3758);
/* harmony import */ var _components_Admin_LeftSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8102);
/* harmony import */ var _components_Admin_orders_OrdersTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3040);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7105);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Admin_TopNavbar__WEBPACK_IMPORTED_MODULE_1__, _components_Admin_LeftSidebar__WEBPACK_IMPORTED_MODULE_2__]);
([_components_Admin_TopNavbar__WEBPACK_IMPORTED_MODULE_1__, _components_Admin_LeftSidebar__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Orders = ({ orders , store , totalPages , user  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Admin_TopNavbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                user: user
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Admin_LeftSidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                user: user,
                store: store
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "admin-main-content d-flex flex-column",
                children: orders.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Admin_orders_OrdersTable__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    orders: orders,
                    totalPages: totalPages
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "empty-store",
                    children: "No Orders Available!"
                })
            })
        ]
    }));
};
async function getServerSideProps(ctx) {
    const { livani_token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(ctx);
    const page = ctx.query.page ? ctx.query.page : "1";
    const payload = {
        params: {
            page,
            limit: 10
        },
        headers: {
            Authorization: livani_token
        }
    };
    const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z}/api/v1/orders`;
    const response = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(url, payload);
    const { orders , totalPages  } = response.data;
    return {
        props: {
            orders,
            totalPages
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Orders);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formatDate = (date)=>{
    return new Date(date).toLocaleDateString('en-US');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDate);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 6358:
/***/ ((module) => {

module.exports = require("react-dropzone");

/***/ }),

/***/ 5927:
/***/ ((module) => {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,7788,3758,8102], () => (__webpack_exec__(9766)));
module.exports = __webpack_exports__;

})();