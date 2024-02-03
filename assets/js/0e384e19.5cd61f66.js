"use strict";(self.webpackChunkapiubl_2_1=self.webpackChunkapiubl_2_1||[]).push([[9671],{7876:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>l});var r=a(5893),i=a(1151);const s={sidebar_position:1},o="Introducci\xf3n",t={id:"intro",title:"Introducci\xf3n",description:"Matias es una plataforma de facturaci\xf3n electr\xf3nica que permite a las empresas emitir, enviar y gestionar facturas electr\xf3nicas de forma segura y eficiente. Nuestra API RESTful proporciona acceso a los servicios de Matias, permitiendo a los desarrolladores integrar la funcionalidad de facturaci\xf3n electr\xf3nica en sus aplicaciones.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"}},c={},l=[{value:"Autenticaci\xf3n de API con OAuth2",id:"autenticaci\xf3n-de-api-con-oauth2",level:2},{value:"Formato de las Solicitudes",id:"formato-de-las-solicitudes",level:2},{value:"Encabezado de Autorizaci\xf3n",id:"encabezado-de-autorizaci\xf3n",level:2},{value:"URL Base de la API",id:"url-base-de-la-api",level:2},{value:"Ejemplo de Encabezado para Solicitudes",id:"ejemplo-de-encabezado-para-solicitudes",level:2},{value:"Registro en la API",id:"registro-en-la-api",level:2},{value:"Opciones de Registro",id:"opciones-de-registro",level:2},{value:"Token de Acceso",id:"token-de-acceso",level:2},{value:"Obtener el Token de Acceso",id:"obtener-el-token-de-acceso",level:2},{value:"Uso del Token de Acceso",id:"uso-del-token-de-acceso",level:2},{value:"<strong>Ejemplo de Encabezado de Autorizaci\xf3n en PHP:</strong>",id:"ejemplo-de-encabezado-de-autorizaci\xf3n-en-php",level:2},{value:"<strong>Ejemplo de Encabezado de Autorizaci\xf3n en Python:</strong>",id:"ejemplo-de-encabezado-de-autorizaci\xf3n-en-python",level:2},{value:"<strong>Ejemplo de Encabezado de Autorizaci\xf3n en Java:</strong>",id:"ejemplo-de-encabezado-de-autorizaci\xf3n-en-java",level:2},{value:"<strong>Ejemplo de Encabezado de Autorizaci\xf3n en C#:</strong>",id:"ejemplo-de-encabezado-de-autorizaci\xf3n-en-c",level:2},{value:"<strong>Ejemplo de Encabezado de Autorizaci\xf3n en Ruby:</strong>",id:"ejemplo-de-encabezado-de-autorizaci\xf3n-en-ruby",level:2},{value:"<strong>Ejemplo de Encabezado de Autorizaci\xf3n en Go:</strong>",id:"ejemplo-de-encabezado-de-autorizaci\xf3n-en-go",level:2},{value:"Revocar el Token",id:"revocar-el-token",level:2},{value:"Nota Importante:",id:"nota-importante",level:2},{value:"Ejemplos y endpoints en Postman",id:"ejemplos-y-endpoints-en-postman",level:2},{value:"Soporte",id:"soporte",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Matias es una plataforma de facturaci\xf3n electr\xf3nica que permite a las empresas emitir, enviar y gestionar facturas electr\xf3nicas de forma segura y eficiente. Nuestra API RESTful proporciona acceso a los servicios de Matias, permitiendo a los desarrolladores integrar la funcionalidad de facturaci\xf3n electr\xf3nica en sus aplicaciones."}),"\n",(0,r.jsx)(n.h2,{id:"autenticaci\xf3n-de-api-con-oauth2",children:"Autenticaci\xf3n de API con OAuth2"}),"\n",(0,r.jsxs)(n.p,{children:["La autenticaci\xf3n para acceder a la API se gestiona mediante ",(0,r.jsx)(n.strong,{children:"Tokens de acceso"})," siguiendo el est\xe1ndar de autenticaci\xf3n OAuth2. Esto asegura que las interacciones con la API sean seguras y est\xe9n autorizadas."]}),"\n",(0,r.jsx)(n.h2,{id:"formato-de-las-solicitudes",children:"Formato de las Solicitudes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Tipo de Formato:"})," Todas las solicitudes hacia la API deben estar en formato ",(0,r.jsx)(n.code,{children:"JSON"}),". Este formato se aplica tanto para las peticiones enviadas como para las respuestas recibidas, facilitando la estandarizaci\xf3n del intercambio de datos."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Uso de HTTPS:"})," Es obligatorio realizar solicitudes a trav\xe9s de HTTPS, dado que la API no procesar\xe1 peticiones enviadas mediante HTTP. Esta medida garantiza la seguridad y la integridad de los datos transmitidos."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"encabezado-de-autorizaci\xf3n",children:"Encabezado de Autorizaci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Para acceder a los recursos de la API, es necesario incluir un encabezado de autorizaci\xf3n en cada solicitud. Este encabezado debe contener el token de acceso obtenido durante el proceso de autenticaci\xf3n:"}),"\n",(0,r.jsx)(n.h2,{id:"url-base-de-la-api",children:"URL Base de la API"}),"\n",(0,r.jsxs)(n.p,{children:["La URL base para acceder a la API se proporcionar\xe1 por nuestro equipo al momento de iniciar la integraci\xf3n. En la documentaci\xf3n, utilizaremos el par\xe1metro ",(0,r.jsx)(n.code,{children:"{{URL}}"})," como marcador de posici\xf3n, el cual debe ser sustituido por la URL base real proporcionada."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-de-encabezado-para-solicitudes",children:"Ejemplo de Encabezado para Solicitudes"}),"\n",(0,r.jsxs)(n.p,{children:["A continuaci\xf3n, se muestra un ejemplo de c\xf3mo configurar el encabezado ",(0,r.jsx)(n.code,{children:"Content-Type"})," para las solicitudes en formato JSON. Este encabezado es esencial para asegurar que la API interprete correctamente el tipo de contenido de la solicitud:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:"headers.set('Content-Type', 'application/json');\n"})}),"\n",(0,r.jsx)(n.h2,{id:"registro-en-la-api",children:"Registro en la API"}),"\n",(0,r.jsx)(n.p,{children:"Para acceder y utilizar los servicios de nuestra API, es necesario que primero se registre en nuestra base de datos de autenticaci\xf3n. Ofrecemos dos m\xe9todos para completar el proceso de registro, detallados a continuaci\xf3n:"}),"\n",(0,r.jsx)(n.h2,{id:"opciones-de-registro",children:"Opciones de Registro"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"A trav\xe9s del formulario de registro en nuestro sitio web"}),": Complete el formulario disponible en nuestro sitio web. Tras enviar el formulario, recibir\xe1 por correo electr\xf3nico los datos necesarios para acceder a los servicios de la API."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Mediante una petici\xf3n al servicio REST"}),": Si prefiere, puede registrarse realizando una petici\xf3n al servicio REST, siguiendo estos pasos:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Realice una petici\xf3n de tipo ",(0,r.jsx)(n.code,{children:"POST"})," a la siguiente direcci\xf3n: ",(0,r.jsx)(n.code,{children:"{{URL}}/register"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["El cuerpo (",(0,r.jsx)(n.code,{children:"BODY"}),") de la petici\xf3n debe incluir los siguientes par\xe1metros:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n  "first_name": "Lewis",\n  "last_name": "Lopez Gomez",\n  "email": "gerencia@lopezsoft.net.co", \n  "password": "****",\n  "password_confirmation": "****",\n  "address": "Cra 15 # 5738 Santa teresita", \n  "city_id": "836", \n  "company_name": "LOPEZSOFT S.A.S", \n  "dni": "901091403", \n  "identity_document_id": 3, \n  "mobile": "3108435431", \n  "tax_level_id": "4", \n  "tax_regime_id": "3",\n  "type_organization_id": 1\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Si el registro es correcto, la petici\xf3n devolver\xe1 una respuesta HTTP 200 en formato JSON con la estructura:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n  "message": "Empresa creada con \xe9xito. Verifique su direcci\xf3n de correo electr\xf3nico: gerencia@lopezsoft.net.co",\n  "success": true\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Si el registro es incorrecto, la petici\xf3n devolver\xe1 una respuesta HTTP 422 o 500 en formato JSON con la estructura:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["respuesta HTTP 422","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n   "message": "El correo electr\xf3nico ya existe (and 2 more errors)",\n   "errors": {\n    "email": [\n        "El correo electr\xf3nico ya existe"\n    ],\n    "password": [\n        "El campo password debe contener al menos 8 caracteres."\n    ],\n    "dni": [\n        "El NIT ya existe"\n    ]\n  }\n}           \n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["respuesta HTTP 500","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    "success": false,\n    "message": "Error interno del servidor. Por favor",\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"token-de-acceso",children:"Token de Acceso"}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de completar el registro, para realizar acciones como la emisi\xf3n de documentos al portal de la DIAN, es necesario contar con un token de acceso. Este token proporciona acceso a las URLs protegidas de nuestra API."}),"\n",(0,r.jsx)(n.p,{children:"El TOKEN generado tiene una validez de 1 a\xf1o y puede ser revocado en cualquier momento mediante una petici\xf3n a nuestra API."}),"\n",(0,r.jsx)(n.h2,{id:"obtener-el-token-de-acceso",children:"Obtener el Token de Acceso"}),"\n",(0,r.jsx)(n.p,{children:"Para obtener el token de acceso, se debe realizar los siguientes pasos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"a."})," Enviar una petici\xf3n de tipo ",(0,r.jsx)(n.code,{children:"POST"})," a ",(0,r.jsx)(n.code,{children:"{{URL}}/auth/login"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"b."})," El cuerpo (BODY) de la petici\xf3n debe contener los siguientes par\xe1metros:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "email": "", // Correo electr\xf3nico registrado\n  "password": "", // Contrase\xf1a enviada al correo\n  "remember_me": 0 // Siempre debe ser 0\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Si la autenticaci\xf3n es correcta, la petici\xf3n devolver\xe1 una respuesta HTTP 200 en formato JSON con la estructura:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM",\n    "user": {\n        "id": 1,\n        "type_id": 2,\n        "first_name": "LEWIS",\n        "last_name": "LOPEZ GOMEZ",\n        "email": "gerencia@lopezsoft.net.co",\n        "avatar": "users/1/profile/agente-de-servicio-al-cliente.png",\n        "active": 1,\n        "name": "LEWIS LOPEZ GOMEZ",\n        "avatarUrl": "http://apidian.test/storage/users/1/profile/agente-de-servicio-al-cliente.png",\n        "user_type": {\n            "id": 1,\n            "user_type_name": "ADMINISTRADOR",\n            "type": 1,\n            "active": 1\n        }\n    },\n    "expires_at": "2025-02-02 19:55:42",\n    "message": "Bienvenido a Matias. Su sesi\xf3n ha sido iniciada con \xe9xito.",\n    "success": true\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Si la autenticaci\xf3n es incorrecta, la petici\xf3n devolver\xe1 una respuesta HTTP 401 en formato JSON con la estructura:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "message": "Credenciales inv\xe1lidas",\n    "success": false\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"uso-del-token-de-acceso",children:"Uso del Token de Acceso"}),"\n",(0,r.jsx)(n.p,{children:"Tras obtener el token de acceso, este debe incluirse en el encabezado de autorizaci\xf3n de todas las solicitudes a la API. El encabezado debe tener el siguiente formato:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:"headers.set('Authorization', 'Bearer ' + token);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Donde ",(0,r.jsx)(n.code,{children:"token"})," es el valor del token de acceso obtenido."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ejemplo de Encabezado de Autorizaci\xf3n en nodejs:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const axios = require('axios');\nconst\nconst token\nconst headers = {\n    'Content-Type': 'application\n      'Authorization': `Bearer ${token}`\n};\naxios.get('https://api.matias.com.co/v1/user', { headers: headers })\n.then(response => {\n    console.log(response.data);\n})\n.catch(error => {\n    console.log(error);\n});\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h2,{id:"ejemplo-de-encabezado-de-autorizaci\xf3n-en-php",children:(0,r.jsx)(n.strong,{children:"Ejemplo de Encabezado de Autorizaci\xf3n en PHP:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:'$curl = curl_init();\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => "https://api.matias.com.co/v1/user",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 0,\n  CURLOPT_FOLLOWLOCATION => true,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "GET",\n  CURLOPT_HTTPHEADER => array(\n    "Content-Type: application/json",\n    "Authorization: Bearer $token"\n  ),\n));\n$response = curl_exec($curl);\ncurl_close($curl);\necho $response;\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h2,{id:"ejemplo-de-encabezado-de-autorizaci\xf3n-en-python",children:(0,r.jsx)(n.strong,{children:"Ejemplo de Encabezado de Autorizaci\xf3n en Python:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import requests\nurl = \"https://api.matias.com.co/v1/user\"\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer ' + token\n}\nresponse = requests.request(\"GET\", url, headers=headers)\nprint(response.text)\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h2,{id:"ejemplo-de-encabezado-de-autorizaci\xf3n-en-java",children:(0,r.jsx)(n.strong,{children:"Ejemplo de Encabezado de Autorizaci\xf3n en Java:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'OkHttpClient client = new OkHttpClient().newBuilder()\n  .build();\nRequest request = new Request.Builder()\n  .url("https://api.matias.com.co/v1/user")\n  .method("GET", null)\n  .addHeader("Content-Type", "application/json")\n  .addHeader("Authorization", "Bearer " + token)\n  .build();\nResponse response = client.newCall(request).execute();\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h2,{id:"ejemplo-de-encabezado-de-autorizaci\xf3n-en-c",children:(0,r.jsx)(n.strong,{children:"Ejemplo de Encabezado de Autorizaci\xf3n en C#:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'var client = new RestClient("https://api.matias.com.co/v1/user");\nclient.Timeout = -1;\nvar request = new RestRequest(Method.GET);\nrequest.AddHeader("Content-Type", "application/json");\nrequest.AddHeader("Authorization", "Bearer " + token);\nIRestResponse response = client.Execute(request);\nConsole.WriteLine(response.Content);\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h2,{id:"ejemplo-de-encabezado-de-autorizaci\xf3n-en-ruby",children:(0,r.jsx)(n.strong,{children:"Ejemplo de Encabezado de Autorizaci\xf3n en Ruby:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:'require \'uri\'\nrequire \'net/http\'\nurl = URI("https://api.matias.com.co/v1/user")\nhttp = Net::HTTP.new(url.host, url.port)\nhttp.use_ssl = true\nrequest = Net::HTTP::Get.new(url)\nrequest["Content-Type"] = "application/json"\nrequest["Authorization"] = "Bearer " + token\nresponse = http.request(request)\nputs response.read_body\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h2,{id:"ejemplo-de-encabezado-de-autorizaci\xf3n-en-go",children:(0,r.jsx)(n.strong,{children:"Ejemplo de Encabezado de Autorizaci\xf3n en Go:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\nimport (\n  "fmt"\n  "net/http"\n  "io/ioutil"\n)\nfunc main() {\n  url := "https://api.matias.com.co/v1/user"\n  method := "GET"\n  client := &http.Client {\n  }\n  req, err := http.NewRequest(method, url, nil)\n  if err != nil {\n    fmt.Println(err)\n    return\n  }\n  req.Header.Add("Content-Type", "application/json")\n  req.Header.Add("Authorization", "Bearer " + token)\n  res, err := client.Do(req)\n  if err != nil {\n    fmt.Println(err)\n    return\n  }\n  defer res.Body.Close()\n  body, err := ioutil.ReadAll(res.Body)\n  if err != nil {\n    fmt.Println(err)\n    return\n  }\n  fmt.Println(string(body))\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"revocar-el-token",children:"Revocar el Token"}),"\n",(0,r.jsxs)(n.p,{children:["Para revocar un token generado anteriormente y que a\xfan no ha vencido, debe enviarse una petici\xf3n de tipo GET a ",(0,r.jsx)(n.code,{children:"{{URL}}/auth/logout"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Si la revocaci\xf3n es correcta, la petici\xf3n devolver\xe1 una respuesta HTTP 200 en formato JSON con la estructura:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "message": "Successfully logged out",\n    "success": true\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Si la revocaci\xf3n es incorrecta, la petici\xf3n devolver\xe1 una respuesta HTTP 401 en formato JSON con la estructura:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "message": "Unauthenticated.",\n    "success": false\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"nota-importante",children:"Nota Importante:"}),"\n",(0,r.jsx)(n.p,{children:"Para que pueda dar continuidad a esta documentaci\xf3n, debe haber realizado la subida del certificado digital,\nla informaci\xf3n del Software generada por el portal de la DIAN, al igual que la resoluci\xf3n de facturaci\xf3n,\nesta informaci\xf3n la registra de forma visual mediante el portal web dispuesto para ello."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://auth.matias-api.com/#/auth/login\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplos-y-endpoints-en-postman",children:"Ejemplos y endpoints en Postman"}),"\n",(0,r.jsx)(n.p,{children:"Para facilitar la comprensi\xf3n de los ejemplos de uso de la API, hemos creado una colecci\xf3n de ejemplos en Postman.\nPuede descargar la colecci\xf3n de ejemplos en el siguiente enlace:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://documenter.getpostman.com/view/8699065/2s9YyvBLby\n"})}),"\n",(0,r.jsx)(n.h2,{id:"soporte",children:"Soporte"}),"\n",(0,r.jsx)(n.p,{children:"Si tiene alguna pregunta o necesita ayuda, no dude en ponerse en contacto con nuestro equipo de soporte t\xe9cnico. Estamos aqu\xed para ayudarle."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"soporte@matias.com.co\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>t,a:()=>o});var r=a(7294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);