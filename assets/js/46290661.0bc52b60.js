"use strict";(self.webpackChunkMATIAS_API=self.webpackChunkMATIAS_API||[]).push([[3746],{5071:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(5893),a=t(1151);const i={sidebar_position:3},o="JSON de Factura con Retenciones",s={id:"jsons-billing/invoice-with-retentions-example",title:"JSON de Factura con Retenciones",description:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa una factura con retenciones. Este JSON se puede utilizar para pruebas o para simular una factura real.",source:"@site/docs/jsons-billing/invoice-with-retentions-example.md",sourceDirName:"jsons-billing",slug:"/jsons-billing/invoice-with-retentions-example",permalink:"/docs-matias-api.github.io/docs/jsons-billing/invoice-with-retentions-example",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jsons-billing/invoice-with-retentions-example.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"JSON de una Factura consumidor final",permalink:"/docs-matias-api.github.io/docs/jsons-billing/invoice-final-consumer"},next:{title:"JSON Factura a cr\xe9dito",permalink:"/docs-matias-api.github.io/docs/jsons-billing/credit-invoice"}},c={},u=[];function d(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"json-de-factura-con-retenciones",children:"JSON de Factura con Retenciones"}),"\n",(0,r.jsx)(e.p,{children:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa una factura con retenciones. Este JSON se puede utilizar para pruebas o para simular una factura real."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",metastring:'title="invoice-with-retentions.json"',children:'{\r\n    "resolution_number": "18764055792775",\r\n    "date": "2024-01-12",\r\n    "time": "22:46:53",\r\n    "notes": "Nota del documento",\r\n    "document_number": "8001",\r\n    "operation_type_id": 1,\r\n    "type_document_id": 7,\r\n    "graphic_representation": 1,\r\n    "send_email": 0,\r\n    "payments": [{\r\n        "payment_method_id": 1,\r\n        "means_payment_id": 10,\r\n        "value_paid": "224.00"\r\n    }],\r\n    "customer": {\r\n        "country_id": "170",\r\n        "city_id": "149",\r\n        "identity_document_id": "1",\r\n        "type_organization_id": 2,\r\n        "tax_regime_id": 2,\r\n        "tax_level_id": 5,\r\n        "company_name": "Santiago Arango",\r\n        "dni": "1152440359",\r\n        "mobile": "3108435423",\r\n        "email": "lws_1234@hotmail.com",\r\n        "address": "Direccion residencial",\r\n        "postal_code": "661002"\r\n    },\r\n    "lines": [\r\n        {\r\n            "invoiced_quantity": "2",\r\n            "quantity_units_id": "1093",\r\n            "line_extension_amount": "100.00",\r\n            "free_of_charge_indicator": false,\r\n            "description": "TIJERA NECROPSIA AVES",\r\n            "code": "HMT83",\r\n            "type_item_identifications_id": "4",\r\n            "reference_price_id": "1",\r\n            "price_amount": "50",\r\n            "base_quantity": "2",\r\n            "tax_totals": [\r\n                {\r\n                    "tax_id": "1",\r\n                    "tax_amount": 19,\r\n                    "taxable_amount": 100,\r\n                    "percent": 19\r\n                },\r\n                {\r\n                    "tax_id": "6",\r\n                    "tax_amount": 3,\r\n                    "taxable_amount": 100,\r\n                    "percent": 3\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            "invoiced_quantity": "2",\r\n            "quantity_units_id": "1093",\r\n            "line_extension_amount": "100.00",\r\n            "free_of_charge_indicator": false,\r\n            "description": "TIJERA NECROPSIA AVES 2",\r\n            "code": "HMT84",\r\n            "type_item_identifications_id": "4",\r\n            "reference_price_id": "1",\r\n            "price_amount": "50",\r\n            "base_quantity": "2",\r\n            "tax_totals": [\r\n                {\r\n                    "tax_id": "1",\r\n                    "tax_amount": 5,\r\n                    "taxable_amount": 100,\r\n                    "percent": 5\r\n                }\r\n            ]\r\n        }\r\n    ],\r\n    "legal_monetary_totals": {\r\n        "line_extension_amount": "200.00",\r\n        "tax_exclusive_amount": "200.00",\r\n        "tax_inclusive_amount": "224.00",\r\n        "payable_amount": "224.00"\r\n    },\r\n    "tax_totals": [\r\n        {\r\n            "tax_id": "1",\r\n            "tax_amount": 19,\r\n            "taxable_amount": 100,\r\n            "percent": 19\r\n        },\r\n        {\r\n            "tax_id": "1",\r\n            "tax_amount": 5,\r\n            "taxable_amount": 100,\r\n            "percent": 5\r\n        },\r\n        {\r\n            "tax_id": "5",\r\n            "tax_amount": 3.6,\r\n            "taxable_amount": 24,\r\n            "percent": 15\r\n        },\r\n        {\r\n            "tax_id": "7",\r\n            "tax_amount": 2.2,\r\n            "taxable_amount": 200,\r\n            "percent": 11\r\n        }\r\n    ]\r\n}\n'})})]})}function l(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>o});var r=t(7294);const a={},i=r.createContext(a);function o(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);