import{S as s}from"./index.D5oLVljR.js";import{g as r}from"./index.ZORhgBxb.js";import{S as a}from"./ScrollTrigger.BS49OFpx.js";const t=document.querySelector(".frase"),e=new s(t,{types:"words"});r.registerPlugin(a);let o=r.matchMedia();o.add("(min-width: 800px)",()=>{r.from(e.words,{scrollTrigger:{trigger:t,start:"top 90%",end:"bottom 70%",scrub:!0},ease:"power2.out",y:-30,opacity:0,stagger:.1})});o.add("(max-width: 799px)",()=>{r.from(e.words,{scrollTrigger:{trigger:t,start:"top 70%",end:"bottom 40%",scrub:!0},ease:"power2.out",y:-30,opacity:0,stagger:.1})});