!function(){"use strict";var t=document.getElementById("burger"),c=document.getElementById("menu");t.addEventListener("click",function(){c.classList.toggle("active"),t.classList.toggle("active")}),c.querySelectorAll("a").forEach(function(e){e.addEventListener("click",function(){c.classList.toggle("active"),t.classList.toggle("active")})}),window.addEventListener("scroll",function(){var e=document.querySelector(".header");50<=window.scrollY?e.classList.add("header-fixed"):e.classList.remove("header-fixed")}),document.querySelectorAll(".accord__top").forEach(function(t){t.addEventListener("click",function(){t.classList.toggle("active");var e=t.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})})}();