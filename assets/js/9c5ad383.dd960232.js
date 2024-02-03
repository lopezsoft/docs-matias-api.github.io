"use strict";(self.webpackChunkapiubl_2_1=self.webpackChunkapiubl_2_1||[]).push([[2373],{950:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>_,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=e(5893),a=e(1151);const i={sidebar_position:5},o="JSON de una Factura con Cargos",c={id:"jsons-billing/invoice-with-charges",title:"JSON de una Factura con Cargos",description:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa una factura con cargos. Este JSON se puede utilizar para pruebas o para simular una factura real.",source:"@site/docs/jsons-billing/invoice-with-charges.md",sourceDirName:"jsons-billing",slug:"/jsons-billing/invoice-with-charges",permalink:"/docs-matias-api.github.io/docs/jsons-billing/invoice-with-charges",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jsons-billing/invoice-with-charges.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"JSON Factura a cr\xe9dito",permalink:"/docs-matias-api.github.io/docs/jsons-billing/credit-invoice"},next:{title:"JSON de una Factura en Euros",permalink:"/docs-matias-api.github.io/docs/jsons-billing/EURO-invoice"}},s={},u=[];function d(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"json-de-una-factura-con-cargos",children:"JSON de una Factura con Cargos"}),"\n",(0,r.jsx)(n.p,{children:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa una factura con cargos. Este JSON se puede utilizar para pruebas o para simular una factura real."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="invoice-with-charges.json"',children:'{\r\n    "resolution_number": "18760000001",\r\n\t"date": "2022-07-29",\r\n\t"time": "22:46:53",\r\n    "notes": "Nota del documento",\r\n    "document_number": 990000405,\r\n\t"operation_type_id": 1,\r\n\t"type_document_id": 7,\r\n\t"payment": {\r\n\t\t"payment_method_id": 1,\r\n\t\t"means_payment_id": 10,\r\n        "value_paid": "319600.00"\r\n\t},\r\n    "allowance_charges": [\r\n        {\r\n            "amount": "10000",\r\n            "base_amount": "725000",\r\n            "charge_indicator": true,\r\n            "allowance_charge_reason": "Motivo del cargo a la factura"\r\n        },\r\n        {\r\n            "amount": "10000",\r\n            "base_amount": "725000",\r\n            "charge_indicator": false,\r\n            "discount_id": 8,\r\n            "allowance_charge_reason": "Motivo del descuento a la factura"\r\n        }\r\n    ],\r\n\t"customer": {\r\n\t\t"country_id": "170",\r\n\t\t"city_id": "149",\r\n\t\t"identity_document_id": "1",\r\n\t\t"type_organization_id": 2,\r\n\t\t"tax_regime_id": 2,\r\n\t\t"tax_level_id": 5,\r\n\t\t"name": "Santiago Arango",\r\n\t\t"dni": "1152440359",\r\n        "mobile": "3108435423",\r\n\t\t"email": "arangotorosantiago@outlook.com",\r\n        "address": "Direccion residencial"\r\n\t},\r\n\t"lines": [\r\n\t\t{\r\n\t\t\t"invoiced_quantity": "3",\r\n\t\t\t"unit_measure_id": "1093",\r\n\t\t\t"line_extension_amount": "81600", \r\n\t\t\t"free_of_charge_indicator": false,\r\n\t\t\t"description": "Hunters Mini Tumaco 82%",\r\n\t\t\t"code": "HMT82",\r\n\t\t\t"type_item_identifications_id": "4",\r\n\t\t\t"reference_price_id": "1",\r\n\t\t\t"price_amount": "27200",\r\n\t\t\t"base_quantity": "3",\r\n            "allowance_charges": [\r\n                {\r\n                    "amount": "10000",\r\n                    "base_amount": "725000",\r\n                    "charge_indicator": true,\r\n                    "allowance_charge_reason": "Motivo del cargo a la linea"\r\n                },\r\n                {\r\n                    "amount": "10000",\r\n                    "base_amount": "725000",\r\n                    "charge_indicator": false,\r\n                    "discount_id": 8,\r\n                    "allowance_charge_reason": "Motivo del descuento a la linea"\r\n                }\r\n            ]\r\n\t\t},\r\n\t\t{\r\n\t\t\t"invoiced_quantity": "2",\r\n\t\t\t"unit_measure_id": "1093",\r\n\t\t\t"line_extension_amount": "100000", \r\n\t\t\t"free_of_charge_indicator": false,\r\n\t\t\t"description": "TIJERA NECROPSIA AVES",\r\n\t\t\t"code": "HMT83",\r\n\t\t\t"type_item_identifications_id": "4",\r\n\t\t\t"reference_price_id": "1",\r\n\t\t\t"price_amount": "59500",\r\n\t\t\t"base_quantity": "1",\r\n\t\t\t"tax_totals": [\r\n\t\t\t\t{\r\n\t\t\t\t\t"tax_id": "1",\r\n\t\t\t\t\t"tax_amount": 19000,\r\n\t\t\t\t\t"taxable_amount": 100000,\r\n\t\t\t\t\t"percent": 19\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t},\r\n\t\t{\r\n\t\t\t"invoiced_quantity": "2",\r\n\t\t\t"unit_measure_id": "1093",\r\n\t\t\t"line_extension_amount": "100000", \r\n\t\t\t"free_of_charge_indicator": false,\r\n\t\t\t"description": "TIJERA NECROPSIA AVES 2",\r\n\t\t\t"code": "HMT84",\r\n\t\t\t"type_item_identifications_id": "4",\r\n\t\t\t"reference_price_id": "1",\r\n\t\t\t"price_amount": "50000",\r\n\t\t\t"base_quantity": "1",\r\n\t\t\t"tax_totals": [\r\n\t\t\t\t{\r\n\t\t\t\t\t"tax_id": "1",\r\n\t\t\t\t\t"tax_amount": 19000,\r\n\t\t\t\t\t"taxable_amount": 100000,\r\n\t\t\t\t\t"percent": 19\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t}\r\n\t],\r\n    "legal_monetary_totals": {\r\n\t\t"line_extension_amount": "281600.00",\r\n\t\t"tax_exclusive_amount": "200000",\r\n\t\t"tax_inclusive_amount": "319600.00",\r\n\t\t"payable_amount": "319600.00"\r\n\t},\r\n\t"tax_totals": [\r\n\t\t{\r\n\t\t\t"tax_id": "1",\r\n\t\t\t"tax_amount": 38000,\r\n\t\t\t"taxable_amount": 200000,\r\n\t\t\t"percent": 19\r\n\t\t}\r\n\t]\r\n}\n'})})]})}function _(t={}){const{wrapper:n}={...(0,a.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},1151:(t,n,e)=>{e.d(n,{Z:()=>c,a:()=>o});var r=e(7294);const a={},i=r.createContext(a);function o(t){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),r.createElement(i.Provider,{value:n},t.children)}}}]);