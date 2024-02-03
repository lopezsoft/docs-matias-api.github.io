"use strict";(self.webpackChunkapiubl_2_1=self.webpackChunkapiubl_2_1||[]).push([[8136],{8649:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var r=s(5893),d=s(1151);const i={sidebar_position:1},a="JSON de respuesta de la API de facturaci\xf3n",c={id:"jsons-billing/response",title:"JSON de respuesta de la API de facturaci\xf3n",description:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa una respuesta de la API de facturaci\xf3n.",source:"@site/docs/jsons-billing/response.md",sourceDirName:"jsons-billing",slug:"/jsons-billing/response",permalink:"/docs-matias-api.github.io/docs/jsons-billing/response",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jsons-billing/response.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Campos de la factura electr\xf3nica",permalink:"/docs-matias-api.github.io/docs/jsons-billing/billing-fields"},next:{title:"JSON de una Factura",permalink:"/docs-matias-api.github.io/docs/jsons-billing/invoice"}},l={},t=[{value:"Descripci\xf3n de los campos",id:"descripci\xf3n-de-los-campos",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"json-de-respuesta-de-la-api-de-facturaci\xf3n",children:"JSON de respuesta de la API de facturaci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"A continuaci\xf3n se muestra un ejemplo de un JSON que representa una respuesta de la API de facturaci\xf3n."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="response.json"',children:'\r\n{\r\n    "response": {\r\n        "ErrorMessage": {\r\n            "string": [\r\n                "Regla: DSAJ10a, Notificaci\xf3n:  El nombre no corresponde un valor correcto de la lista",\r\n                "Regla: DSAB19b, Notificaci\xf3n: NIT del Prestador de Servicios no est\xe1 autorizado por la DIAN",\r\n                "Regla: RUT01, Notificaci\xf3n: La validaci\xf3n del estado del RUT pr\xf3ximamente estar\xe1 disponible."\r\n            ]\r\n        },\r\n        "IsValid": "true",\r\n        "StatusCode": "00",\r\n        "StatusDescription": "Procesado Correctamente.",\r\n        "StatusMessage": "La Documento soporte con no obligados DS20, ha sido autorizada.",\r\n        "XmlBase64Bytes": "",\r\n        "XmlBytes": {\r\n            "_attributes": {\r\n                "nil": "true"\r\n            }\r\n        },\r\n        "XmlDocumentKey": "286839d9352ae0c397ad640f9678a56811bcbdf93f4eb081e1340dd7c5a6e950c59efad031569e6eb7de25639a201e2a",\r\n        "XmlFileName": "ds09010914030002400000043"\r\n    },\r\n    "XmlBase64Bytes": "",\r\n    "AttachedDocument": {\r\n        "pathZip": "1/ad/z09010914030002400000050.zip",\r\n        "path": "1/ad/ad09010914030002400000049.xml",\r\n        "url": "http://apidian.test/attachments/1/ad/ad09010914030002400000049.xml",\r\n        "data": ""\r\n    },\r\n    "qr": {\r\n        "qrDian": "https://catalogo-vpfe.dian.gov.co/document/searchqr?documentkey=286839d9352ae0c397ad640f9678a56811bcbdf93f4eb081e1340dd7c5a6e950c59efad031569e6eb7de25639a201e2a",\r\n        "url": "http://apidian.test/qr/1/ds09010914030002400000043.png",\r\n        "path": "1/ds09010914030002400000043.png",\r\n        "data": ""\r\n    },\r\n    "pdf": {\r\n        "path": "1/ds09010914030002400000043.pdf",\r\n        "url": "http://apidian.test/pdf/1/ds09010914030002400000043.pdf",\r\n        "data": ""\r\n    },\r\n    "success": true\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n-de-los-campos",children:"Descripci\xf3n de los campos"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"response"}),": Respuesta emitida por la DIAN","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ErrorMessage"}),": Mensajes de error"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"IsValid"}),": Indica si el documento es v\xe1lido"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"StatusCode"}),": C\xf3digo de estado"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"StatusDescription"}),": Descripci\xf3n del estado"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"StatusMessage"}),": Mensaje del estado"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"XmlBase64Bytes"}),": Documento en base64 generado por la DIAN"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"XmlBytes"}),": Documento en base64 generado por la DIAN"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"XmlDocumentKey"}),": CUFE, CUDE O CUNE DEL DOCUMENTO"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"XmlFileName"}),": Nombre del documento en el portal de la DIAN"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"XmlBase64Bytes"}),": El XML sin comprimir en base64"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AttachedDocument"}),": Contenedor de documentos","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pathZip"}),": Ruta del contenedor de documentos"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"}),": Ruta del contenedor de documentos"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"url"}),": URL del contenedor de documentos"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data"}),": El contenedor de documentos en base64"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"qr"}),": Contiene el la representaci\xf3n gr\xe1fica del documento","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"qrDian"}),": URL del QR en el portal de la DIAN"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"url"}),": URL del QR"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"}),": Ruta del QR"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data"}),": El QR en base64"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pdf"}),": Contiene el la representaci\xf3n gr\xe1fica del documento","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"}),": Ruta del PDF"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"url"}),": URL del PDF"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data"}),": El PDF en base64"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"success"}),": Indica si la respuesta fue exitosa"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var r=s(7294);const d={},i=r.createContext(d);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);