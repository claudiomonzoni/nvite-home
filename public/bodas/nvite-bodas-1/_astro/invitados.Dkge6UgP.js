import{r as _}from"./index.NEDEFKed.js";var p={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=_,d=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,y=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function m(o,r,i){var e,s={},n=null,a=null;i!==void 0&&(n=""+i),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(a=r.ref);for(e in r)u.call(r,e)&&!x.hasOwnProperty(e)&&(s[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)s[e]===void 0&&(s[e]=r[e]);return{$$typeof:d,type:o,key:n,ref:a,props:s,_owner:y.current}}t.Fragment=l;t.jsx=m;t.jsxs=m;p.exports=t;var b=p.exports;const c=[{id:1,nombre:"Familia Ortiz",pases:3},{id:2,nombre:"Pedro Martinez",pases:1},{id:3,nombre:"Familia Hernandez",pases:6},{id:4,nombre:"Mario Bros y esposa",pases:3},{id:5,nombre:"Cristian Espinoza",pases:1}];export{c as i,b as j};
