"use strict";(self.webpackChunkapiubl_2_1=self.webpackChunkapiubl_2_1||[]).push([[6581],{3325:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>_,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(5893),a=r(1151);const i={sidebar_position:7},o="JSON de una Factura en USD",s={id:"jsons-billing/USD-invoice",title:"JSON de una Factura en USD",description:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa una factura en d\xf3lares. Este JSON se puede utilizar para pruebas o para simular una factura real.",source:"@site/docs/jsons-billing/USD-invoice.md",sourceDirName:"jsons-billing",slug:"/jsons-billing/USD-invoice",permalink:"/docs-matias-api.github.io/docs/jsons-billing/USD-invoice",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jsons-billing/USD-invoice.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"JSON de una Factura en Euros",permalink:"/docs-matias-api.github.io/docs/jsons-billing/EURO-invoice"},next:{title:"JSON de una Factura AIU",permalink:"/docs-matias-api.github.io/docs/jsons-billing/AIU-invoice"}},u={},c=[];function d(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"json-de-una-factura-en-usd",children:"JSON de una Factura en USD"}),"\n",(0,t.jsx)(e.p,{children:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa una factura en d\xf3lares. Este JSON se puede utilizar para pruebas o para simular una factura real."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",metastring:'title="invoice_usd.json"',children:'{\r\n  "date": "2022-06-28",\r\n  "time": "23:10:14",\r\n  "document_number": "150",\r\n  "operation_type_id": 1,\r\n  "type_document_id": 7,\r\n  "currency_id": 188,\r\n  "payment": {\r\n    "payment_method_id": 2,\r\n    "means_payment_id": 30,\r\n    "value_paid": "7235.20"\r\n  },\r\n    "payment_exchange_rate": {\r\n    "exchange_rate": "3950.00",\r\n    "rate_date": "2022-06-28"\r\n  },\r\n  "lines": [\r\n    {\r\n      "invoiced_quantity": "1.00",\r\n      "quantity_units_id": "1093",\r\n      "um": "UNI",\r\n      "line_extension_amount": "1840.00",\r\n      "free_of_charge_indicator": false,\r\n      "description": "HONORARIOS ANTICIPO CONSTITUCION COMPA\ufffdIA (80%)",\r\n      "code": "999-001",\r\n      "type_item_identifications_id": "4",\r\n      "reference_price_id": "1",\r\n      "price_amount": "2189.60",\r\n      "base_quantity": 1.0000,\r\n      "tax_totals": [\r\n        {\r\n          "tax_id": "1",\r\n          "tax_amount": 349.6000,\r\n          "taxable_amount": 1840.00,\r\n          "percent": 19\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "invoiced_quantity": "2.00",\r\n      "quantity_units_id": "1093",\r\n      "um": "UNI",\r\n      "line_extension_amount": "1520.00",\r\n      "free_of_charge_indicator": false,\r\n      "description": "HONORARIOS COSMETICOS",\r\n      "code": "999-001",\r\n      "type_item_identifications_id": "4",\r\n      "reference_price_id": "1",\r\n      "price_amount": "1048.80",\r\n      "base_quantity": 2.0000,\r\n      "tax_totals": [\r\n        {\r\n          "tax_id": "1",\r\n          "tax_amount": 288.8000,\r\n          "taxable_amount": 1520.00,\r\n          "percent": 19\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "invoiced_quantity": "2.00",\r\n      "quantity_units_id": "1093",\r\n      "um": "UNI",\r\n      "line_extension_amount": "2720.00",\r\n      "free_of_charge_indicator": false,\r\n      "description": "HONORARIOS GOTAS CBD",\r\n      "code": "999-001",\r\n      "type_item_identifications_id": "4",\r\n      "reference_price_id": "1",\r\n      "price_amount": "1876.80",\r\n      "base_quantity": 2.0000,\r\n      "tax_totals": [\r\n        {\r\n          "tax_id": "1",\r\n          "tax_amount": 516.8000,\r\n          "taxable_amount": 2720.00,\r\n          "percent": 19\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  "customer": {\r\n    "country_id": "239",\r\n    "city_id": "149",\r\n    "identity_document_id": "10",\r\n    "type_organization_id": 1,\r\n    "tax_regime_id": 1,\r\n    "tax_level_id": "5",\r\n    "name": "CONINOS, INC",\r\n    "dni": "444444017",\r\n    "email": "flor.leyva@yorcop.com",\r\n    "address": "3843 S.BRISTOL ST 268 SANTA ANA"\r\n  },\r\n  "legal_monetary_totals": {\r\n    "line_extension_amount": "6080.00",\r\n    "tax_exclusive_amount": "6080.00",\r\n    "tax_inclusive_amount": "7235.20",\r\n    "payable_amount": "7235.20"\r\n  },\r\n  "tax_totals": [\r\n    {\r\n      "tax_id": 1,\r\n      "tax_amount": "1155.20",\r\n      "taxable_amount": "6080.00",\r\n      "percent": 19.0\r\n    }\r\n  ]\r\n}\n'})})]})}function _(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>s,a:()=>o});var t=r(7294);const a={},i=t.createContext(a);function o(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);