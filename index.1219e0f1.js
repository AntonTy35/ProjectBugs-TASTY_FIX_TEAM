document.querySelector(".recipes-js");!async function(){await fetch("https://tasty-treats-backend.p.goit.global/api/recipes?limit=9").then((t=>{if(!t.ok)throw new Error(t.status);return t.json()})).then((t=>console.log(t))).catch((t=>console.log(t)))}();
//# sourceMappingURL=index.1219e0f1.js.map
