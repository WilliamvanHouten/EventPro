SEMICOLON.Core.getVars.fn.navtree=e=>{const i=SEMICOLON.Core;if(i.initFunction({class:"has-plugin-navtree",event:"pluginNavTreeReady"}),(e=i.getSelector(e)).length<1)return!0;e.each(function(){let l=jQuery(this),t=l.attr("data-speed")||250,n=l.attr("data-easing")||"swing";l.find("ul li:has(ul)").addClass("sub-menu"),l.find("ul li:has(ul) > a").filter(":not(:has(.fa-caret-right))").append('<i class="fa-solid fa-caret-right"></i>'),l.hasClass("on-hover")?l.find("ul li:has(ul):not(.active)").hover(function(e){jQuery(this).children("ul").stop(!0,!0).slideDown(Number(t),n)},function(){jQuery(this).children("ul").delay(250).slideUp(Number(t),n)}):l.find("ul li:has(ul) > a").off("click").on("click",function(e){let i=jQuery(this);l.find("ul li").not(i.parents()).removeClass("active"),i.parent().children("ul").slideToggle(Number(t),n,function(){jQuery(this).find("ul").hide(),jQuery(this).find("li.active").removeClass("active")}),l.find("ul li > ul").not(i.parent().children("ul")).not(i.parents("ul")).slideUp(Number(t),n),i.parent("li:has(ul)").toggleClass("active"),e.preventDefault()})})};