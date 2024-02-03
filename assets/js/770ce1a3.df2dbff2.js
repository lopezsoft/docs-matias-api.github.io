"use strict";(self.webpackChunkapiubl_2_1=self.webpackChunkapiubl_2_1||[]).push([[2724],{3329:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=r(5893),a=r(1151);const o={sidebar_position:11},i="JSON P.O.S",s={id:"jsons-billing/pos",title:"JSON P.O.S",description:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa un punto de venta. Este JSON se puede utilizar para pruebas o para simular un punto de venta real.",source:"@site/docs/jsons-billing/pos.md",sourceDirName:"jsons-billing",slug:"/jsons-billing/pos",permalink:"/docs-matias-api.github.io/docs/jsons-billing/pos",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jsons-billing/pos.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"JSON de una Nota D\xe9bito",permalink:"/docs-matias-api.github.io/docs/jsons-billing/debit-note"},next:{title:"JSON de una Nota Cr\xe9dito P.O.S",permalink:"/docs-matias-api.github.io/docs/jsons-billing/pos-credit-note"}},u={},c=[];function d(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"json-pos",children:"JSON P.O.S"}),"\n",(0,t.jsx)(e.p,{children:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa un punto de venta. Este JSON se puede utilizar para pruebas o para simular un punto de venta real."}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Nota:"})," Este JSON es un ejemplo tentativo y no final, puede variar de acuerdo a los ajustes de la DIAN."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",metastring:'title="pos.json"',children:'{\r\n    "resolution_number": "18760000001",\r\n    "date": "2024-01-22",\r\n    "expiration_date": "2024-01-22",\r\n    "time": "22:46:53",\r\n    "notes": "Nota del documento",\r\n    "document_number": "12",\r\n    "graphic_representation": 1,\r\n    "send_email": 1,\r\n    "operation_type_id": 1,\r\n    "type_document_id": 20,\r\n    "payments": [{\r\n        "payment_method_id": 1,\r\n        "means_payment_id": 10,\r\n        "value_paid": "224.00"\r\n    }],\r\n    "customer": {\r\n        "company_name": "Santiago Arango",\r\n        "dni": "1152440359",\r\n        "points": 0\r\n    },\r\n    "point_of_sale": {\r\n        "cashier_name": "LEWIS LOPEZ",\r\n        "terminal_number": "CJ001aB",\r\n        "cashier_type": "Caja de apoyo",\r\n        "sales_code": "POS01",\r\n        "address": "Gilbarco Encore 4 L1 - Mangue ra 17 AC",\r\n        "sub_total": "2000.10"\r\n    },\r\n    "software_manufacturer": {\r\n        "owner_name": "LEWIS LOPEZ GOMEZ",\r\n        "company_name": "LOPEZSOFT SAS",\r\n        "software_name": "SOFTWARE POS MATIAS APP"\r\n    },\r\n    "lines": [\r\n        {\r\n            "invoiced_quantity": "2",\r\n            "unit_measure_id": "1093",\r\n            "line_extension_amount": "100.00",\r\n            "free_of_charge_indicator": false,\r\n            "description": "TIJERA NECROPSIA AVES",\r\n            "code": "HMT83",\r\n            "type_item_identifications_id": "4",\r\n            "reference_price_id": "1",\r\n            "price_amount": "50",\r\n            "base_quantity": "2",\r\n            "tax_totals": [\r\n                {\r\n                    "tax_id": "1",\r\n                    "tax_amount": 19,\r\n                    "taxable_amount": 100,\r\n                    "percent": 19\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            "invoiced_quantity": "2",\r\n            "unit_measure_id": "1093",\r\n            "line_extension_amount": "100.00",\r\n            "free_of_charge_indicator": false,\r\n            "description": "TIJERA NECROPSIA AVES 2",\r\n            "code": "HMT84",\r\n            "type_item_identifications_id": "4",\r\n            "reference_price_id": "1",\r\n            "price_amount": "50",\r\n            "base_quantity": "2",\r\n            "tax_totals": [\r\n                {\r\n                    "tax_id": "1",\r\n                    "tax_amount": 5,\r\n                    "taxable_amount": 100,\r\n                    "percent": 5\r\n                }\r\n            ]\r\n        }\r\n    ],\r\n    "legal_monetary_totals": {\r\n        "line_extension_amount": "200.00",\r\n        "tax_exclusive_amount": "200.00",\r\n        "tax_inclusive_amount": "224.00",\r\n        "payable_amount": 224.00\r\n    },\r\n    "tax_totals": [\r\n        {\r\n            "tax_id": "1",\r\n            "tax_amount": 19,\r\n            "taxable_amount": 100,\r\n            "percent": 19\r\n        },\r\n        {\r\n            "tax_id": "1",\r\n            "tax_amount": 5,\r\n            "taxable_amount": 100,\r\n            "percent": 5\r\n        }\r\n    ]\r\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>s,a:()=>i});var t=r(7294);const a={},o=t.createContext(a);function i(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);