NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each(function(){var e=$(this),i=e.attr("title"),t=e.parent("a");t.size()<1&&(t=e.wrap('<a href="'+this.getAttribute("src")+'"></a>').parent("a")),t.addClass("fancybox fancybox.image"),t.attr("rel","group"),i&&(t.append('<p class="image-caption">'+i+"</p>"),t.attr("title",i))}),$(".fancybox").fancybox({helpers:{overlay:{locked:!1}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({placeholder:"/images/loading.gif",effect:"fadeIn"})},registerESCKeyEvent:function(){$(document).on("keyup",function(e){27===e.which&&$(".search-popup").is(":visible")&&($(".search-popup").hide(),$(".search-popup-overlay").remove(),$("body").css("overflow",""))})},registerBackToTop:function(){var e=$(".back-to-top");$(window).on("scroll",function(){e.toggleClass("back-to-top-on",window.pageYOffset>50);var i=$(window).scrollTop(),t=$(document).height(),o=$(window).height(),n=i/(t-o),s=Math.round(100*n);$("#scrollpercent>span").html(s)}),e.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){function e(e){return{width:e.width(),height:e.height()}}function i(e,i){return i/e*100}var t=$("iframe"),o=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"],n=new RegExp(o.join("|"));t.each(function(){var t,o=this,s=$(this),r=e(s);if(this.src.search(n)>0){var a=i(r.width,r.height);s.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var c=document.createElement("div");c.className="fluid-vids",c.style.position="relative",c.style.marginBottom="20px",c.style.width="100%",c.style.paddingTop=a+"%";if(o.parentNode.insertBefore(c,o),c.appendChild(o),this.src.search("music.163.com")>0){t=e(s);(t.width>r.width||t.height<r.height)&&(c.style.paddingTop=i(t.width,r.height)+"%")}}})},addActiveClassToMenuItem:function(){var e=window.location.pathname;e="/"===e?e:e.substring(0,e.length-1),$('.menu-item a[href="'+e+'"]').parent().addClass("menu-item-active")},hasMobileUA:function(){return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(window.navigator.userAgent)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(e){return e.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){this.isDesktop()&&!this.isPisces()&&$(".sidebar-toggle").trigger("click")},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme},getScrollbarWidth:function(){var e=$("<div />").addClass("scrollbar-measure").prependTo("body"),i=e[0],t=i.offsetWidth-i.clientWidth;return e.remove(),t},needAffix:function(){return this.isPisces()}};