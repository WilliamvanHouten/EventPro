SEMICOLON.Core.getVars.fn.ajaxportfolio=t=>{const e=SEMICOLON.Core;if(e.initFunction({class:"has-plugin-ajaxportfolio",event:"pluginAjaxPortfolioReady"}),(t=e.getSelector(t,!1)).length<1)return!0;e.getVars.portfolioAjax.items=t[0].querySelectorAll(".portfolio-item"),e.getVars.portfolioAjax.wrapper=document.getElementById("portfolio-ajax-wrap"),e.getVars.portfolioAjax.wrapperOffset=e.offset(e.getVars.portfolioAjax.wrapper).top,e.getVars.portfolioAjax.container=document.getElementById("portfolio-ajax-container"),e.getVars.portfolioAjax.loader=document.getElementById("portfolio-ajax-loader"),e.getVars.portfolioAjax.prevItem="",t[0].querySelectorAll(".portfolio-ajax-trigger").forEach(t=>{t.querySelector("i:nth-child(2)")||(t.innerHTML+='<i class="bi-arrow-repeat icon-spin"></i>'),t.onclick=t=>{var o=t.target.closest(".portfolio-item").getAttribute("id");t.target.closest(".portfolio-item").classList.contains("portfolio-active")||CanvasPortfolioLoadItem(o,e.getVars.portfolioAjax.prevItem),t.preventDefault()}})};const CanvasPortfolioNewNextPrev=t=>{var o,e=CanvasPortfolioGetNextItem(t),t=CanvasPortfolioGetPrevItem(t);let r=document.getElementById("portfolio-navigation");!document.getElementById("prev-portfolio")&&t&&((o=document.createElement("a")).setAttribute("href","#"),o.setAttribute("id","prev-portfolio"),o.setAttribute("data-id",t),o.innerHTML='<i class="bi-arrow-left"></i>',r.insertBefore(o,document.getElementById("close-portfolio"))),!document.getElementById("next-portfolio")&&e&&((o=document.createElement("a")).setAttribute("href","#"),o.setAttribute("id","next-portfolio"),o.setAttribute("data-id",e),o.innerHTML='<i class="bi-arrow-right"></i>',r.insertBefore(o,document.getElementById("close-portfolio")))},CanvasPortfolioLoadItem=(r,t,o)=>{const a=SEMICOLON.Core;o=o||!1;let i=CanvasPortfolioGetNextItem(r),l=CanvasPortfolioGetPrevItem(r);0==o&&(CanvasPortfolioCloseItem(),a.getVars.elBody.classList.add("portfolio-ajax-loading"),o=document.getElementById(r).getAttribute("data-loader"),fetch(o).then(t=>t.text()).then(t=>{a.getVars.portfolioAjax.container.innerHTML=t;let o=document.getElementById("next-portfolio"),e=document.getElementById("prev-portfolio");o.classList.add("d-none"),e.classList.add("d-none"),i&&(o.setAttribute("data-id",i),o.classList.remove("d-none")),l&&(e.setAttribute("data-id",l),e.classList.remove("d-none")),CanvasPortfolioInitializeAjax(r),CanvasPortfolioOpenItem(),a.getVars.portfolioAjax.items.forEach(t=>{t.classList.remove("portfolio-active")}),document.getElementById(r).classList.add("portfolio-active")}).catch(t=>{console.warn("Something went wrong.",t)}))},CanvasPortfolioCloseItem=()=>{const t=SEMICOLON.Core;t.getVars.portfolioAjax.wrapper&&32<t.getVars.portfolioAjax.wrapper.offsetHeight&&(t.getVars.elBody.classList.remove("portfolio-ajax-loading"),t.getVars.portfolioAjax.wrapper.classList.remove("portfolio-ajax-opened"),t.getVars.portfolioAjax.wrapper.querySelector("#portfolio-ajax-single").ontransitionend=()=>{t.getVars.portfolioAjax.wrapper.querySelector("#portfolio-ajax-single").remove()},t.getVars.portfolioAjax.items.forEach(t=>{t.classList.remove("portfolio-active")}))},CanvasPortfolioOpenItem=()=>{const t=SEMICOLON.Core;t.getVars.portfolioAjax.container.querySelectorAll("img").length<1?CanvasPortfolioDisplayItem():(t.imagesLoaded(t.getVars.portfolioAjax.container),t.getVars.portfolioAjax.container.addEventListener("CanvasImagesLoaded",()=>{CanvasPortfolioDisplayItem()}))},CanvasPortfolioDisplayItem=()=>{const t=SEMICOLON.Core;t.getVars.portfolioAjax.container.style.display="block",t.getVars.portfolioAjax.wrapper.classList.add("portfolio-ajax-opened"),t.getVars.elBody.classList.remove("portfolio-ajax-loading"),setTimeout(()=>{t.runContainerModules(t.getVars.portfolioAjax.wrapper),window.scrollTo({top:t.getVars.portfolioAjax.wrapperOffset-t.getVars.topScrollOffset-60,behavior:"smooth"})},500)},CanvasPortfolioGetNextItem=t=>{let o=!1,e=document.getElementById(t).nextElementSibling;return e&&(o=e.getAttribute("id")),o},CanvasPortfolioGetPrevItem=t=>{let o=!1,e=document.getElementById(t).previousElementSibling;return e&&(o=e.getAttribute("id")),o},CanvasPortfolioInitializeAjax=t=>{const r=SEMICOLON.Core;r.getVars.portfolioAjax.prevItem=document.getElementById(t),CanvasPortfolioNewNextPrev(t),document.querySelectorAll("#next-portfolio, #prev-portfolio").forEach(e=>{e.onclick=t=>{CanvasPortfolioCloseItem();var o=e.getAttribute("data-id");document.getElementById(o).classList.add("portfolio-active"),CanvasPortfolioLoadItem(o,r.getVars.portfolioAjax.prevItem),t.preventDefault()}}),document.getElementById("close-portfolio").onclick=t=>{CanvasPortfolioCloseItem(),t.preventDefault()}};