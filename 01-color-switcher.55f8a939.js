const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");e.addEventListener("click",(function(){d=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.setAttribute("disabled",!0),r.removeAttribute("disabled")})),r.addEventListener("click",(function(){clearInterval(d),e.removeAttribute("disabled"),r.setAttribute("disabled",!0)})),r.setAttribute("disabled",!0);let d=null;
//# sourceMappingURL=01-color-switcher.55f8a939.js.map
