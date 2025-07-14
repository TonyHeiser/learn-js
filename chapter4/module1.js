import showKontekst from "./arrowExport.js";
import showContextViaDeclaration from "./declarationExport.js";

let obje = {
  name: "Module1",
  objeMethod: showContextViaDeclaration, // { name: 'Module1', objeMethod: [Function: showContextViaDeclaration] }
  arrowMethod: showKontekst, // undefined
}

console.log(obje.arrowMethod());