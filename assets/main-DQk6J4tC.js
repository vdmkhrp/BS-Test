const e=document.querySelector(".anchor-link");window.addEventListener("scroll",(function(){window.scrollY>200?e.classList.add("show"):e.classList.remove("show")}));let s,t=90,i=document.querySelector(".content__timer"),d=document.querySelector(".header"),l=document.querySelector(".footer"),o=document.querySelector(".header-second"),c=document.querySelector(".footer-second"),a=!0;function n(){let e=Math.floor(t/60),n=t%60;i.textContent=`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`,t<=0?(clearInterval(s),function(){a?(d.classList.add("hidden"),l.classList.add("hidden"),d.classList.remove("visible"),l.classList.remove("visible"),o.classList.add("visible"),c.classList.add("visible"),o.classList.remove("hidden"),c.classList.remove("hidden")):(o.classList.add("hidden"),c.classList.add("hidden"),o.classList.remove("visible"),c.classList.remove("visible"),d.classList.add("visible"),l.classList.add("visible"),d.classList.remove("hidden"),l.classList.remove("hidden"));a=!a}(),t=90,r()):t--}function r(){s=setInterval(n,1e3)}r();
