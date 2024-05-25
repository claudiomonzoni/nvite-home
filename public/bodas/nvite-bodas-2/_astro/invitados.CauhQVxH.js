import{r as _}from"./index.NEDEFKed.js";var p={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=_,f=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,y=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function m(o,e,a){var r,t={},s=null,i=null;a!==void 0&&(s=""+a),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)u.call(e,r)&&!x.hasOwnProperty(r)&&(t[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return{$$typeof:f,type:o,key:s,ref:i,props:t,_owner:y.current}}n.Fragment=l;n.jsx=m;n.jsxs=m;p.exports=n;var v=p.exports;const b=[{id:1,nombre:"Familia Ortiz",pases:3},{id:2,nombre:"Aljandra Martinez",pases:1},{id:3,nombre:"Familia Hernandez",pases:6},{id:4,nombre:"Franco Mendez y esposa",pases:3},{id:5,nombre:"Cristian Espinoza",pases:1}];export{b as i,v as j};
