import{C as e,p as o,w as r,a as s,d as t,N as n}from"./p-fe42e5c8.js";const a="undefined"!=typeof Deno,i=!(a||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),p=(a&&Deno,i?process:a&&Deno,i?process:a&&Deno,()=>e&&e.supports&&e.supports("color","var(--c)")?s():__sc_import_ui_library("./p-24fc4ba9.js").then(()=>(o.o=r.__cssshim)?(!1).i():0)),c=()=>{o.o=r.__cssshim;const e=Array.from(t.querySelectorAll("script")).find(e=>RegExp(`/${n}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===n),a=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(a.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,r.location.href)).href,l(a.resourcesUrl,e),r.customElements?s(a):__sc_import_ui_library("./p-46109683.js").then(()=>a))},l=(e,o)=>{const s="__sc_import_"+n.replace(/\s|-/g,"_");try{r[s]=Function("w","return import(w);//"+Math.random())}catch(a){const n=new Map;r[s]=a=>{const i=new URL(a,e).href;let p=n.get(i);if(!p){const e=t.createElement("script");e.type="module",e.crossOrigin=o.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${i}'; window.${s}.m = m;`],{type:"application/javascript"})),p=new Promise(o=>{e.onload=()=>{o(r[s].m),e.remove()}}),n.set(i,p),t.head.appendChild(e)}return p}}};export{p as a,c as p}