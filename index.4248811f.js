!function(){var e=document.querySelector(".breed-select");document.querySelector(".cat-info");fetch("https://api.thecatapi.com/v1/breeds").then((function(e){return e.json()})).then((function(t){t.forEach((function(t){var n=document.createElement("option");n.value=t.id,n.textContent=t.name,e.appendChild(n)}))})),e.addEventListener("change",(function(){var t,n,o,r=e.value;(t=r,n={"x-api-key":"live_VY16isoMfVwTscFXp0PO3sLHtazvEwsNGlEIbRiYRdilDHkpPGgsoL2LiHXQRVTb"},o="https://api.thecatapi.com/v1/images/search?breed_ids=".concat(t),fetch(o,{headers:n}).then((function(e){if(!e.ok)throw new Error("Error");return e.json()})).then((function(e){return e}))).then((function(e){return console.log(e)}))}))}();
//# sourceMappingURL=index.4248811f.js.map
