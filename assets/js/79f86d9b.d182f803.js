"use strict";(self.webpackChunkMATIAS_API=self.webpackChunkMATIAS_API||[]).push([[8073],{406:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>_,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=e(5893),i=e(1151);const o={sidebar_position:14},a="JSON Documento soporte",s={id:"jsons-billing/support-document",title:"JSON Documento soporte",description:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa un documento soporte. Este JSON se puede utilizar para pruebas o para simular un documento soporte real.",source:"@site/docs/jsons-billing/support-document.md",sourceDirName:"jsons-billing",slug:"/jsons-billing/support-document",permalink:"/docs-matias-api.github.io/docs/jsons-billing/support-document",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jsons-billing/support-document.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"JSON de una Nota D\xe9bito P.O.S.",permalink:"/docs-matias-api.github.io/docs/jsons-billing/pos-debit-note"},next:{title:"JSON Nota de ajuste documento soporte",permalink:"/docs-matias-api.github.io/docs/jsons-billing/adjustment-note"}},_={},d=[{value:"Residente",id:"residente",level:2},{value:"No residente",id:"no-residente",level:2}];function c(t){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"json-documento-soporte",children:"JSON Documento soporte"})}),"\n",(0,r.jsx)(n.p,{children:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa un documento soporte. Este JSON se puede utilizar para pruebas o para simular un documento soporte real."}),"\n",(0,r.jsx)(n.h2,{id:"residente",children:"Residente"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="support-document.json"',children:'{\r\n    "resolution_number": "18764055792808",\r\n\t"date": "2023-09-18",\r\n\t"time": "22:46:53",\r\n    "notes": "Nota del documento",\r\n    "document_number": "20",\r\n\t"operation_type_id": 9,\r\n\t"type_document_id": 11,\r\n    "graphic_representation": 1,\r\n    "currency_id": 272,\r\n    "send_email": 1,\r\n\t"payments": [{\r\n\t\t"payment_method_id": 1,\r\n        "means_payment_id": 10,\r\n        "value_paid": "230525.00"\r\n\t}],\r\n\t"customer": {\r\n        "country_id": "45",\r\n        "city_id": "149",\r\n        "identity_document_id": "3",\r\n        "type_organization_id": 2,\r\n        "tax_regime_id": 2,\r\n        "tax_level_id": 5,\r\n        "company_name": "Santiago Arango",\r\n        "dni": "1152440359",\r\n        "mobile": "3108435423",\r\n        "email": "lws_1234@hotmail.com",\r\n        "address": "Direccion residencial",\r\n        "postal_code": "661002"\r\n    },\r\n\t"lines": [\r\n        {\r\n\t\t\t"invoiced_quantity": "3",\r\n\t\t\t"quantity_units_id": "1093",\r\n\t\t\t"line_extension_amount": "81600", \r\n\t\t\t"free_of_charge_indicator": false,\r\n\t\t\t"description": "Hunters Mini Tumaco 82%",\r\n\t\t\t"code": "HMT82",\r\n\t\t\t"type_item_identifications_id": "4",\r\n\t\t\t"reference_price_id": "1",\r\n\t\t\t"price_amount": "27200",\r\n\t\t\t"base_quantity": "3",\r\n            "invoice_period": {\r\n                "start_date": "2022-08-30",\r\n                "description_code": 1\r\n            }\r\n\t\t},\r\n\t\t{\r\n\t\t\t"invoiced_quantity": "2",\r\n\t\t\t"quantity_units_id": "1093",\r\n\t\t\t"line_extension_amount": "100000", \r\n\t\t\t"free_of_charge_indicator": false,\r\n\t\t\t"description": "TIJERA NECROPSIA AVES 2",\r\n\t\t\t"code": "HMT84",\r\n\t\t\t"type_item_identifications_id": "4",\r\n\t\t\t"reference_price_id": "1",\r\n\t\t\t"price_amount": "50000",\r\n\t\t\t"base_quantity": "2",\r\n            "invoice_period": {\r\n                "start_date": "2022-08-30",\r\n                "description_code": 1\r\n            },\r\n\t\t\t"tax_totals": [\r\n\t\t\t\t{\r\n\t\t\t\t\t"tax_id": "1",\r\n\t\t\t\t\t"tax_amount": 19000,\r\n\t\t\t\t\t"taxable_amount": 100000,\r\n\t\t\t\t\t"percent": 19\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t},\r\n        {\r\n\t\t\t"invoiced_quantity": "1",\r\n\t\t\t"quantity_units_id": "1093",\r\n\t\t\t"line_extension_amount": "28500", \r\n\t\t\t"free_of_charge_indicator": false,\r\n\t\t\t"description": "TIJERA NECROPSIA AVES",\r\n\t\t\t"code": "HMT81",\r\n\t\t\t"type_item_identifications_id": "4",\r\n\t\t\t"reference_price_id": "1",\r\n\t\t\t"price_amount": "28500",\r\n\t\t\t"base_quantity": "1",\r\n            "invoice_period": {\r\n                "start_date": "2022-08-30",\r\n                "description_code": 1\r\n            },\r\n\t\t\t"tax_totals": [\r\n\t\t\t\t{\r\n\t\t\t\t\t"tax_id": "1",\r\n\t\t\t\t\t"tax_amount":  1425,\r\n\t\t\t\t\t"taxable_amount": 28500,\r\n\t\t\t\t\t"percent": 5\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t}\r\n\t],\r\n    "legal_monetary_totals": {\r\n\t\t"line_extension_amount": "210100",\r\n\t\t"tax_exclusive_amount": "128500",\r\n\t\t"tax_inclusive_amount": "230525",\r\n\t\t"payable_amount": "230525"\r\n\t},\r\n\t"tax_totals": [\r\n\t\t{\r\n            "tax_id": "1",\r\n            "tax_amount":  1425,\r\n            "taxable_amount": 28500,\r\n            "percent": 5\r\n        },\r\n        {\r\n            "tax_id": "1",\r\n            "tax_amount": 19000,\r\n            "taxable_amount": 100000,\r\n            "percent": 19\r\n        }\r\n\t]\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"no-residente",children:"No residente"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="support-document.json"',children:'{\r\n    "resolution_number": "18764055792808",\r\n\t"date": "2023-09-18",\r\n\t"time": "22:46:53",\r\n    "notes": "Nota del documento",\r\n    "document_number": "16",\r\n\t"operation_type_id": 10,\r\n\t"type_document_id": 11,\r\n    "graphic_representation": 1,\r\n    "send_email": 1,\r\n    "currency_id": 188,\r\n    "payments": [{\r\n        "payment_method_id": 1,\r\n        "means_payment_id": 10,\r\n        "value_paid": "230525.00"\r\n    }],\r\n    "payment_exchange_rate": {\r\n        "exchange_rate": "3950.00",\r\n        "rate_date": "2022-06-28"\r\n    },\r\n    "customer": {\r\n        "country_id": "239",\r\n        "city_id": "149",\r\n        "identity_document_id": "10",\r\n        "type_organization_id": 1,\r\n        "tax_regime_id": 1,\r\n        "tax_level_id": "5",\r\n        "company_name": "CONINOS, INC",\r\n        "dni": "444444017",\r\n        "email": "flor.leyva@yorcop.com",\r\n        "address": "3843 S.BRISTOL ST 268 SANTA ANA"\r\n    },\r\n    "lines": [\r\n        {\r\n\t\t\t"invoiced_quantity": "3",\r\n\t\t\t"quantity_units_id": "1093",\r\n\t\t\t"line_extension_amount": "81600", \r\n\t\t\t"free_of_charge_indicator": false,\r\n\t\t\t"description": "Hunters Mini Tumaco 82%",\r\n\t\t\t"code": "HMT82",\r\n\t\t\t"type_item_identifications_id": "4",\r\n\t\t\t"reference_price_id": "1",\r\n\t\t\t"price_amount": "27200",\r\n\t\t\t"base_quantity": "3",\r\n            "invoice_period": {\r\n                "start_date": "2022-08-30",\r\n                "description_code": 1\r\n            }\r\n\t\t},\r\n\t\t{\r\n\t\t\t"invoiced_quantity": "2",\r\n\t\t\t"quantity_units_id": "1093",\r\n\t\t\t"line_extension_amount": "100000", \r\n\t\t\t"free_of_charge_indicator": false,\r\n\t\t\t"description": "TIJERA NECROPSIA AVES 2",\r\n\t\t\t"code": "HMT84",\r\n\t\t\t"type_item_identifications_id": "4",\r\n\t\t\t"reference_price_id": "1",\r\n\t\t\t"price_amount": "50000",\r\n\t\t\t"base_quantity": "2",\r\n            "invoice_period": {\r\n                "start_date": "2022-08-30",\r\n                "description_code": 1\r\n            },\r\n\t\t\t"tax_totals": [\r\n\t\t\t\t{\r\n\t\t\t\t\t"tax_id": "1",\r\n\t\t\t\t\t"tax_amount": 19000,\r\n\t\t\t\t\t"taxable_amount": 100000,\r\n\t\t\t\t\t"percent": 19\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t},\r\n        {\r\n\t\t\t"invoiced_quantity": "1",\r\n\t\t\t"quantity_units_id": "1093",\r\n\t\t\t"line_extension_amount": "28500", \r\n\t\t\t"free_of_charge_indicator": false,\r\n\t\t\t"description": "TIJERA NECROPSIA AVES",\r\n\t\t\t"code": "HMT81",\r\n\t\t\t"type_item_identifications_id": "4",\r\n\t\t\t"reference_price_id": "1",\r\n\t\t\t"price_amount": "28500",\r\n\t\t\t"base_quantity": "1",\r\n            "invoice_period": {\r\n                "start_date": "2022-08-30",\r\n                "description_code": 1\r\n            },\r\n\t\t\t"tax_totals": [\r\n\t\t\t\t{\r\n\t\t\t\t\t"tax_id": "1",\r\n\t\t\t\t\t"tax_amount":  1425,\r\n\t\t\t\t\t"taxable_amount": 28500,\r\n\t\t\t\t\t"percent": 5\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t}\r\n\t],\r\n    "legal_monetary_totals": {\r\n\t\t"line_extension_amount": "210100",\r\n\t\t"tax_exclusive_amount": "128500",\r\n\t\t"tax_inclusive_amount": "230525",\r\n\t\t"payable_amount": "230525"\r\n\t},\r\n\t"tax_totals": [\r\n\t\t{\r\n            "tax_id": "1",\r\n            "tax_amount":  1425,\r\n            "taxable_amount": 28500,\r\n            "percent": 5\r\n        },\r\n        {\r\n            "tax_id": "1",\r\n            "tax_amount": 19000,\r\n            "taxable_amount": 100000,\r\n            "percent": 19\r\n        }\r\n\t]\r\n}\n'})})]})}function u(t={}){const{wrapper:n}={...(0,i.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}},1151:(t,n,e)=>{e.d(n,{Z:()=>s,a:()=>a});var r=e(7294);const i={},o=r.createContext(i);function a(t){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function s(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),r.createElement(o.Provider,{value:n},t.children)}}}]);