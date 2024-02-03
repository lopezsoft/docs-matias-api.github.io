"use strict";(self.webpackChunkapiubl_2_1=self.webpackChunkapiubl_2_1||[]).push([[9095],{4978:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(5893),a=t(1151);const i={sidebar_position:12},o="JSON de una Nota Cr\xe9dito P.O.S",s={id:"jsons-billing/pos-credit-note",title:"JSON de una Nota Cr\xe9dito P.O.S",description:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa una nota cr\xe9dito P.O.S. Este JSON se puede utilizar para pruebas o para simular una nota cr\xe9dito real.",source:"@site/docs/jsons-billing/pos-credit-note.md",sourceDirName:"jsons-billing",slug:"/jsons-billing/pos-credit-note",permalink:"/docs-matias-api.github.io/docs/jsons-billing/pos-credit-note",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jsons-billing/pos-credit-note.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"JSON P.O.S",permalink:"/docs-matias-api.github.io/docs/jsons-billing/pos"},next:{title:"JSON de una Nota D\xe9bito P.O.S.",permalink:"/docs-matias-api.github.io/docs/jsons-billing/pos-debit-note"}},d={},c=[];function u(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"json-de-una-nota-cr\xe9dito-pos",children:"JSON de una Nota Cr\xe9dito P.O.S"}),"\n",(0,r.jsx)(e.p,{children:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa una nota cr\xe9dito P.O.S. Este JSON se puede utilizar para pruebas o para simular una nota cr\xe9dito real."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",metastring:'title="pos-credit-note.json"',children:'{\r\n    "resolution_number": "18760000001",\r\n\t"date": "2024-01-30",\r\n\t"time": "22:46:53",\r\n    "notes": "Nota del documento",\r\n    "document_number": "12",\r\n\t"operation_type_id": 11,\r\n\t"type_document_id": 94,\r\n    "graphic_representation": 1,\r\n    "send_email": 1,\r\n\t"payments": [{\r\n        "payment_method_id": 1,\r\n        "means_payment_id": 10,\r\n        "value_paid": "224.00"\r\n    }],\r\n    "customer": {\r\n        "company_name": "Santiago Arango",\r\n        "dni": "1152440359",\r\n        "points": 0\r\n    },\r\n\t"discrepancy_response": {\r\n\t\t"reference_id": "EPOS12",\r\n\t\t"response_id": "16"\r\n\t},\r\n\t"billing_reference": {\r\n\t\t"number": "EPOS12",\r\n        "date": "2024-01-30",\r\n        "uuid": "de32d201b563d4414c82db7959a53578fe2c852c50b9d77346d15d2ba2ad9ebd30cc1f14566071af5580189e7912e37a"\r\n\t},\r\n    "lines": [\r\n        {\r\n            "invoiced_quantity": "2",\r\n            "unit_measure_id": "1093",\r\n            "line_extension_amount": "100.00",\r\n            "free_of_charge_indicator": false,\r\n            "description": "TIJERA NECROPSIA AVES",\r\n            "code": "HMT83",\r\n            "type_item_identifications_id": "4",\r\n            "reference_price_id": "1",\r\n            "price_amount": "50",\r\n            "base_quantity": "2",\r\n            "tax_totals": [\r\n                {\r\n                    "tax_id": "1",\r\n                    "tax_amount": 19,\r\n                    "taxable_amount": 100,\r\n                    "percent": 19\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            "invoiced_quantity": "2",\r\n            "unit_measure_id": "1093",\r\n            "line_extension_amount": "100.00",\r\n            "free_of_charge_indicator": false,\r\n            "description": "TIJERA NECROPSIA AVES 2",\r\n            "code": "HMT84",\r\n            "type_item_identifications_id": "4",\r\n            "reference_price_id": "1",\r\n            "price_amount": "50",\r\n            "base_quantity": "2",\r\n            "tax_totals": [\r\n                {\r\n                    "tax_id": "1",\r\n                    "tax_amount": 5,\r\n                    "taxable_amount": 100,\r\n                    "percent": 5\r\n                }\r\n            ]\r\n        }\r\n    ],\r\n    "legal_monetary_totals": {\r\n        "line_extension_amount": "200.00",\r\n        "tax_exclusive_amount": "200.00",\r\n        "tax_inclusive_amount": "224.00",\r\n        "payable_amount": 224.00\r\n    },\r\n    "tax_totals": [\r\n        {\r\n            "tax_id": "1",\r\n            "tax_amount": 19,\r\n            "taxable_amount": 100,\r\n            "percent": 19\r\n        },\r\n        {\r\n            "tax_id": "1",\r\n            "tax_amount": 5,\r\n            "taxable_amount": 100,\r\n            "percent": 5\r\n        }\r\n    ]\r\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>o});var r=t(7294);const a={},i=r.createContext(a);function o(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);