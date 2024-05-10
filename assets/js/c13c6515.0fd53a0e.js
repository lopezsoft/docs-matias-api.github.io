"use strict";(self.webpackChunkMATIAS_API=self.webpackChunkMATIAS_API||[]).push([[8856],{7209:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var t=r(5893),i=r(1151);const a={sidebar_position:6},o="JSON de una Factura en Euros",s={id:"jsons-billing/EURO-invoice",title:"JSON de una Factura en Euros",description:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa una factura en euros. Este JSON se puede utilizar para pruebas o para simular una factura real.",source:"@site/docs/jsons-billing/EURO-invoice.md",sourceDirName:"jsons-billing",slug:"/jsons-billing/EURO-invoice",permalink:"/docs-matias-api.github.io/docs/jsons-billing/EURO-invoice",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jsons-billing/EURO-invoice.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"JSON de una Factura con Cargos",permalink:"/docs-matias-api.github.io/docs/jsons-billing/invoice-with-charges"},next:{title:"JSON de una Factura en USD",permalink:"/docs-matias-api.github.io/docs/jsons-billing/USD-invoice"}},c={},u=[];function _(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"json-de-una-factura-en-euros",children:"JSON de una Factura en Euros"}),"\n",(0,t.jsx)(e.p,{children:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa una factura en euros. Este JSON se puede utilizar para pruebas o para simular una factura real."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",metastring:'title="invoice-euro.json"',children:'{\r\n  "date": "2022-02-24",\r\n  "time": "12:57:53",\r\n  "document_number": "990000369",\r\n  "operation_type_id": 1,\r\n  "type_document_id": 7,\r\n  "currency_id": 272,\r\n  "payments": [{\r\n    "payment_method_id": 2,\r\n    "means_payment_id": 30,\r\n    "value_paid": "1372.62"\r\n  }],\r\n  "lines": [\r\n    {\r\n      "invoiced_quantity": "1.00",\r\n      "quantity_units_id": "1093",\r\n      "um": "UNI",\r\n      "line_extension_amount": "137.00",\r\n      "free_of_charge_indicator": "false",\r\n      "description": "HONORARIOS Notificaci\xf3n sanitaria ASEO  Purificador de aire acondicionado",\r\n      "code": "999-001",\r\n      "type_item_identifications_id": "4",\r\n      "reference_price_id": "1",\r\n      "price_amount": "163.03",\r\n      "base_quantity": 1.0000,\r\n      "tax_totals": [\r\n        {\r\n          "tax_id": "1",\r\n          "tax_amount": 26.03,\r\n          "taxable_amount": 137.00,\r\n          "percent": 19\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "invoiced_quantity": "1.00",\r\n      "quantity_units_id": "1093",\r\n      "um": "UNI",\r\n      "line_extension_amount": "137.00",\r\n      "free_of_charge_indicator": "false",\r\n      "description": "HONORARIOS Notificaci\xf3n sanitaria ASEO  Aceite multiusos todo en 1",\r\n      "code": "999-001",\r\n      "type_item_identifications_id": "4",\r\n      "reference_price_id": "1",\r\n      "price_amount": "163.03",\r\n      "base_quantity": 1.0000,\r\n      "tax_totals": [\r\n        {\r\n          "tax_id": "1",\r\n          "tax_amount": 26.03,\r\n          "taxable_amount": 137.00,\r\n          "percent": 19\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "invoiced_quantity": "1.00",\r\n      "quantity_units_id": "1093",\r\n      "um": "",\r\n      "line_extension_amount": "112.00",\r\n      "free_of_charge_indicator": "false",\r\n      "description": "ORGANIZACION FICHA TECNICA Purificador de aire acondicionado",\r\n      "code": "999-003",\r\n      "type_item_identifications_id": "4",\r\n      "reference_price_id": "1",\r\n      "price_amount": "133.28",\r\n      "base_quantity": 1.0000,\r\n      "tax_totals": [\r\n        {\r\n          "tax_id": "1",\r\n          "tax_amount": 21.28,\r\n          "taxable_amount": 112.00,\r\n          "percent": 19\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "invoiced_quantity": "1.00",\r\n      "quantity_units_id": "1093",\r\n      "um": "",\r\n      "line_extension_amount": "112.00",\r\n      "free_of_charge_indicator": "false",\r\n      "description": "ORGANIZACION FICHA TECNICA Aceite multiusos todo en 1",\r\n      "code": "999-003",\r\n      "type_item_identifications_id": "4",\r\n      "reference_price_id": "1",\r\n      "price_amount": "133.28",\r\n      "base_quantity": 1.0000,\r\n      "tax_totals": [\r\n        {\r\n          "tax_id": "1",\r\n          "tax_amount": 21.28,\r\n          "taxable_amount": 112.00,\r\n          "percent": 19\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "invoiced_quantity": "2.00",\r\n      "quantity_units_id": "1093",\r\n      "um": "",\r\n      "line_extension_amount": "780.00",\r\n      "free_of_charge_indicator": "false",\r\n      "description": "PAGOS OFICIALES",\r\n      "code": "999-002",\r\n      "type_item_identifications_id": "4",\r\n      "reference_price_id": "1",\r\n      "price_amount": "390.00",\r\n      "base_quantity": 2.0000,\r\n      "tax_totals": [\r\n        {\r\n          "tax_id": "1",\r\n          "tax_amount": 0.0,\r\n          "taxable_amount": 0.0,\r\n          "percent": 0\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  "customer": {\r\n    "country_id": "214",\r\n    "city_id": "149",\r\n    "identity_document_id": "10",\r\n    "type_organization_id": 1,\r\n    "tax_regime_id": 1,\r\n    "tax_level_id": "5",\r\n    "company_name": "QUIMI ROMAR S.L.",\r\n    "dni": "444444016",\r\n    "email": "ryc.consultor@gmail.com",\r\n    "address": "CRTA MONCADA - NAQUERA CV 315 KM 11.2"\r\n  },\r\n  "legal_monetary_totals": {\r\n    "line_extension_amount": "1278.00",\r\n    "tax_exclusive_amount": "498.00",\r\n    "tax_inclusive_amount": "1372.62",\r\n    "payable_amount": "1372.62"\r\n  },\r\n  "tax_totals": [\r\n    {\r\n      "tax_id": 1,\r\n      "tax_amount": "94.62",\r\n      "taxable_amount": "498.00",\r\n      "percent": 19.0\r\n    }\r\n  ],\r\n  "payment_exchange_rate": {\r\n    "exchange_rate": "4200.00",\r\n    "rate_date": "2022-02-24",\r\n    "base_rate": "4200.00",\r\n    "currency_id": 213\r\n  }\r\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(_,{...n})}):_(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>s,a:()=>o});var t=r(7294);const i={},a=t.createContext(i);function o(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);