!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");e.addEventListener("click",(function(){a=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.setAttribute("disabled",!0),r.removeAttribute("disabled")})),r.addEventListener("click",(function(){clearInterval(a),e.removeAttribute("disabled"),r.setAttribute("disabled",!0)})),r.setAttribute("disabled",!0);var a=null}();
//# sourceMappingURL=01-color-switcher.95f1035b.js.map
