import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as D,i as x}from"./assets/vendor-651d7991.js";const M=document.querySelector("#datetime-picker"),n=document.querySelector("button"),l=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),h=document.querySelector("[data-seconds]");document.addEventListener("DOMContentLoaded",()=>{n.disabled=!0});let y="";const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?(x.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):(n.disabled=!1,y=t[0])}};D(M,b);function q(t){const r=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),s=Math.floor(t%864e5%36e5/6e4),c=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:a,minutes:s,seconds:c}}n.addEventListener("click",v);function e(t){return t.toString().padStart(2,"0")}function v(){const t=y.getTime(),d=setInterval(()=>{const u=new Date,o=t-u,{days:i,hours:r,minutes:a,seconds:s}=q(o);if(o<=0)clearInterval(d),l.textContent="00",m.textContent="00",f.textContent="00",h.textContent="00";else{const c=e(i),S=e(r),p=e(a),C=e(s);l.textContent=c,m.textContent=S,f.textContent=p,h.textContent=C}},1e3)}
//# sourceMappingURL=commonHelpers.js.map