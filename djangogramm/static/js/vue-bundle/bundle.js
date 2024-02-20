var Rc = {};
/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ae(e, t) {
  const n = new Set(e.split(","));
  return t ? (i) => n.has(i.toLowerCase()) : (i) => n.has(i);
}
const le = Rc.NODE_ENV !== "production" ? Object.freeze({}) : {}, Pn = Rc.NODE_ENV !== "production" ? Object.freeze([]) : [], pe = () => {
}, ui = () => !1, At = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), gs = (e) => e.startsWith("onUpdate:"), ie = Object.assign, ao = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Iu = Object.prototype.hasOwnProperty, se = (e, t) => Iu.call(e, t), j = Array.isArray, gn = (e) => Zn(e) === "[object Map]", wn = (e) => Zn(e) === "[object Set]", _l = (e) => Zn(e) === "[object Date]", ku = (e) => Zn(e) === "[object RegExp]", J = (e) => typeof e == "function", Z = (e) => typeof e == "string", dt = (e) => typeof e == "symbol", oe = (e) => e !== null && typeof e == "object", Fs = (e) => (oe(e) || J(e)) && J(e.then) && J(e.catch), Mc = Object.prototype.toString, Zn = (e) => Mc.call(e), fo = (e) => Zn(e).slice(8, -1), Pc = (e) => Zn(e) === "[object Object]", uo = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jt = /* @__PURE__ */ Ae(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), $c = /* @__PURE__ */ Ae(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Bs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ru = /-(\w)/g, Ee = Bs((e) => e.replace(Ru, (t, n) => n ? n.toUpperCase() : "")), Mu = /\B([A-Z])/g, $e = Bs(
  (e) => e.replace(Mu, "-$1").toLowerCase()
), bt = Bs((e) => e.charAt(0).toUpperCase() + e.slice(1)), gt = Bs((e) => e ? `on${bt(e)}` : ""), pt = (e, t) => !Object.is(e, t), Wt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Es = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Oi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ys = (e) => {
  const t = Z(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Nl;
const po = () => Nl || (Nl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), yt = {
  1: "TEXT",
  2: "CLASS",
  4: "STYLE",
  8: "PROPS",
  16: "FULL_PROPS",
  32: "NEED_HYDRATION",
  64: "STABLE_FRAGMENT",
  128: "KEYED_FRAGMENT",
  256: "UNKEYED_FRAGMENT",
  512: "NEED_PATCH",
  1024: "DYNAMIC_SLOTS",
  2048: "DEV_ROOT_FRAGMENT",
  [-1]: "HOISTED",
  [-2]: "BAIL"
}, Pu = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, $u = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error", Lu = /* @__PURE__ */ Ae($u), bl = 2;
function Fu(e, t = 0, n = e.length) {
  let i = e.split(/(\r?\n)/);
  const s = i.filter((l, c) => c % 2 === 1);
  i = i.filter((l, c) => c % 2 === 0);
  let r = 0;
  const o = [];
  for (let l = 0; l < i.length; l++)
    if (r += i[l].length + (s[l] && s[l].length || 0), r >= t) {
      for (let c = l - bl; c <= l + bl || n > r; c++) {
        if (c < 0 || c >= i.length)
          continue;
        const a = c + 1;
        o.push(
          `${a}${" ".repeat(Math.max(3 - String(a).length, 0))}|  ${i[c]}`
        );
        const u = i[c].length, f = s[c] && s[c].length || 0;
        if (c === l) {
          const p = t - (r - (u + f)), E = Math.max(
            1,
            n > r ? u - p : n - t
          );
          o.push("   |  " + " ".repeat(p) + "^".repeat(E));
        } else if (c > l) {
          if (n > r) {
            const p = Math.max(Math.min(n - r, u), 1);
            o.push("   |  " + "^".repeat(p));
          }
          r += u + f;
        }
      }
      break;
    }
  return o.join(`
`);
}
function Qn(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], s = Z(i) ? Lc(i) : Qn(i);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (Z(e) || oe(e))
    return e;
}
const Bu = /;(?![^(]*\))/g, Hu = /:([^]+)/, ju = /\/\*[^]*?\*\//g;
function Lc(e) {
  const t = {};
  return e.replace(ju, "").split(Bu).forEach((n) => {
    if (n) {
      const i = n.split(Hu);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Uu(e) {
  let t = "";
  if (!e || Z(e))
    return t;
  for (const n in e) {
    const i = e[n], s = n.startsWith("--") ? n : $e(n);
    (Z(i) || typeof i == "number") && (t += `${s}:${i};`);
  }
  return t;
}
function Vn(e) {
  let t = "";
  if (Z(e))
    t = e;
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const i = Vn(e[n]);
      i && (t += i + " ");
    }
  else if (oe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ku(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !Z(t) && (e.class = Vn(t)), n && (e.style = Qn(n)), e;
}
const qu = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Wu = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Gu = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", zu = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Fc = /* @__PURE__ */ Ae(qu), Bc = /* @__PURE__ */ Ae(Wu), Hc = /* @__PURE__ */ Ae(Gu), Ju = /* @__PURE__ */ Ae(zu), jc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yu = /* @__PURE__ */ Ae(jc), vl = /* @__PURE__ */ Ae(
  jc + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function ho(e) {
  return !!e || e === "";
}
const Xu = /* @__PURE__ */ Ae(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), Zu = /* @__PURE__ */ Ae(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function Qu(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
function ed(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = nn(e[i], t[i]);
  return n;
}
function nn(e, t) {
  if (e === t)
    return !0;
  let n = _l(e), i = _l(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = dt(e), i = dt(t), n || i)
    return e === t;
  if (n = j(e), i = j(t), n || i)
    return n && i ? ed(e, t) : !1;
  if (n = oe(e), i = oe(t), n || i) {
    if (!n || !i)
      return !1;
    const s = Object.keys(e).length, r = Object.keys(t).length;
    if (s !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !nn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Hs(e, t) {
  return e.findIndex((n) => nn(n, t));
}
const Dr = (e) => Z(e) ? e : e == null ? "" : j(e) || oe(e) && (e.toString === Mc || !J(e.toString)) ? JSON.stringify(e, Uc, 2) : String(e), Uc = (e, t) => t && t.__v_isRef ? Uc(e, t.value) : gn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, s], r) => (n[pr(i, r) + " =>"] = s, n),
    {}
  )
} : wn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => pr(n))
} : dt(t) ? pr(t) : oe(t) && !j(t) && !Pc(t) ? String(t) : t, pr = (e, t = "") => {
  var n;
  return dt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
var Ne = {};
function jn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Je;
class mo {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Je, !t && Je && (this.index = (Je.scopes || (Je.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Je;
      try {
        return Je = this, t();
      } finally {
        Je = n;
      }
    } else
      Ne.NODE_ENV !== "production" && jn("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Je = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Je = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function td(e) {
  return new mo(e);
}
function Kc(e, t = Je) {
  t && t.active && t.effects.push(e);
}
function qc() {
  return Je;
}
function nd(e) {
  Je ? Je.cleanups.push(e) : Ne.NODE_ENV !== "production" && jn(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let En;
class Un {
  constructor(t, n, i, s) {
    this.fn = t, this.trigger = n, this.scheduler = i, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Kc(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, on();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (id(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ln();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Yt, n = En;
    try {
      return Yt = !0, En = this, this._runnings++, Ol(this), this.fn();
    } finally {
      Sl(this), this._runnings--, En = n, Yt = t;
    }
  }
  stop() {
    var t;
    this.active && (Ol(this), Sl(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function id(e) {
  return e.value;
}
function Ol(e) {
  e._trackId++, e._depsLength = 0;
}
function Sl(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Wc(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Wc(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
function sd(e, t) {
  e.effect instanceof Un && (e = e.effect.fn);
  const n = new Un(e, pe, () => {
    n.dirty && n.run();
  });
  t && (ie(n, t), t.scope && Kc(n, t.scope)), (!t || !t.lazy) && n.run();
  const i = n.run.bind(n);
  return i.effect = n, i;
}
function rd(e) {
  e.effect.stop();
}
let Yt = !0, wr = 0;
const Gc = [];
function on() {
  Gc.push(Yt), Yt = !1;
}
function ln() {
  const e = Gc.pop();
  Yt = e === void 0 ? !0 : e;
}
function go() {
  wr++;
}
function Eo() {
  for (wr--; !wr && Vr.length; )
    Vr.shift()();
}
function zc(e, t, n) {
  var i;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Wc(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, Ne.NODE_ENV !== "production" && ((i = e.onTrack) == null || i.call(e, ie({ effect: e }, n)));
  }
}
const Vr = [];
function Jc(e, t, n) {
  var i;
  go();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (Ne.NODE_ENV !== "production" && ((i = s.onTrigger) == null || i.call(s, ie({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && Vr.push(s.scheduler)));
  }
  Eo();
}
const Yc = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, _s = /* @__PURE__ */ new WeakMap(), yn = Symbol(Ne.NODE_ENV !== "production" ? "iterate" : ""), xr = Symbol(Ne.NODE_ENV !== "production" ? "Map key iterate" : "");
function Me(e, t, n) {
  if (Yt && En) {
    let i = _s.get(e);
    i || _s.set(e, i = /* @__PURE__ */ new Map());
    let s = i.get(n);
    s || i.set(n, s = Yc(() => i.delete(n))), zc(
      En,
      s,
      Ne.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function _t(e, t, n, i, s, r) {
  const o = _s.get(e);
  if (!o)
    return;
  let l = [];
  if (t === "clear")
    l = [...o.values()];
  else if (n === "length" && j(e)) {
    const c = Number(i);
    o.forEach((a, u) => {
      (u === "length" || !dt(u) && u >= c) && l.push(a);
    });
  } else
    switch (n !== void 0 && l.push(o.get(n)), t) {
      case "add":
        j(e) ? uo(n) && l.push(o.get("length")) : (l.push(o.get(yn)), gn(e) && l.push(o.get(xr)));
        break;
      case "delete":
        j(e) || (l.push(o.get(yn)), gn(e) && l.push(o.get(xr)));
        break;
      case "set":
        gn(e) && l.push(o.get(yn));
        break;
    }
  go();
  for (const c of l)
    c && Jc(
      c,
      4,
      Ne.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: i,
        oldValue: s,
        oldTarget: r
      } : void 0
    );
  Eo();
}
function od(e, t) {
  var n;
  return (n = _s.get(e)) == null ? void 0 : n.get(t);
}
const ld = /* @__PURE__ */ Ae("__proto__,__v_isRef,__isVue"), Xc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(dt)
), Cl = /* @__PURE__ */ cd();
function cd() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const i = Q(this);
      for (let r = 0, o = this.length; r < o; r++)
        Me(i, "get", r + "");
      const s = i[t](...n);
      return s === -1 || s === !1 ? i[t](...n.map(Q)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      on(), go();
      const i = Q(this)[t].apply(this, n);
      return Eo(), ln(), i;
    };
  }), e;
}
function ad(e) {
  const t = Q(this);
  return Me(t, "has", e), t.hasOwnProperty(e);
}
class Zc {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, i) {
    const s = this._isReadonly, r = this._shallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return i === (s ? r ? ra : sa : r ? ia : na).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = j(t);
    if (!s) {
      if (o && se(Cl, n))
        return Reflect.get(Cl, n, i);
      if (n === "hasOwnProperty")
        return ad;
    }
    const l = Reflect.get(t, n, i);
    return (dt(n) ? Xc.has(n) : ld(n)) || (s || Me(t, "get", n), r) ? l : Oe(l) ? o && uo(n) ? l : l.value : oe(l) ? s ? _o(l) : Ks(l) : l;
  }
}
class Qc extends Zc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, s) {
    let r = t[n];
    if (!this._shallow) {
      const c = It(r);
      if (!Zt(i) && !It(i) && (r = Q(r), i = Q(i)), !j(t) && Oe(r) && !Oe(i))
        return c ? !1 : (r.value = i, !0);
    }
    const o = j(t) && uo(n) ? Number(n) < t.length : se(t, n), l = Reflect.set(t, n, i, s);
    return t === Q(s) && (o ? pt(i, r) && _t(t, "set", n, i, r) : _t(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = se(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && i && _t(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!dt(n) || !Xc.has(n)) && Me(t, "has", n), i;
  }
  ownKeys(t) {
    return Me(
      t,
      "iterate",
      j(t) ? "length" : yn
    ), Reflect.ownKeys(t);
  }
}
class ea extends Zc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Ne.NODE_ENV !== "production" && jn(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Ne.NODE_ENV !== "production" && jn(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const fd = /* @__PURE__ */ new Qc(), ud = /* @__PURE__ */ new ea(), dd = /* @__PURE__ */ new Qc(
  !0
), pd = /* @__PURE__ */ new ea(!0), yo = (e) => e, js = (e) => Reflect.getPrototypeOf(e);
function Xi(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const s = Q(e), r = Q(t);
  n || (pt(t, r) && Me(s, "get", t), Me(s, "get", r));
  const { has: o } = js(s), l = i ? yo : n ? bo : Ci;
  if (o.call(s, t))
    return l(e.get(t));
  if (o.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function Zi(e, t = !1) {
  const n = this.__v_raw, i = Q(n), s = Q(e);
  return t || (pt(e, s) && Me(i, "has", e), Me(i, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Qi(e, t = !1) {
  return e = e.__v_raw, !t && Me(Q(e), "iterate", yn), Reflect.get(e, "size", e);
}
function Tl(e) {
  e = Q(e);
  const t = Q(this);
  return js(t).has.call(t, e) || (t.add(e), _t(t, "add", e, e)), this;
}
function Dl(e, t) {
  t = Q(t);
  const n = Q(this), { has: i, get: s } = js(n);
  let r = i.call(n, e);
  r ? Ne.NODE_ENV !== "production" && ta(n, i, e) : (e = Q(e), r = i.call(n, e));
  const o = s.call(n, e);
  return n.set(e, t), r ? pt(t, o) && _t(n, "set", e, t, o) : _t(n, "add", e, t), this;
}
function wl(e) {
  const t = Q(this), { has: n, get: i } = js(t);
  let s = n.call(t, e);
  s ? Ne.NODE_ENV !== "production" && ta(t, n, e) : (e = Q(e), s = n.call(t, e));
  const r = i ? i.call(t, e) : void 0, o = t.delete(e);
  return s && _t(t, "delete", e, void 0, r), o;
}
function Vl() {
  const e = Q(this), t = e.size !== 0, n = Ne.NODE_ENV !== "production" ? gn(e) ? new Map(e) : new Set(e) : void 0, i = e.clear();
  return t && _t(e, "clear", void 0, void 0, n), i;
}
function es(e, t) {
  return function(i, s) {
    const r = this, o = r.__v_raw, l = Q(o), c = t ? yo : e ? bo : Ci;
    return !e && Me(l, "iterate", yn), o.forEach((a, u) => i.call(s, c(a), c(u), r));
  };
}
function ts(e, t, n) {
  return function(...i) {
    const s = this.__v_raw, r = Q(s), o = gn(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, a = s[e](...i), u = n ? yo : t ? bo : Ci;
    return !t && Me(
      r,
      "iterate",
      c ? xr : yn
    ), {
      // iterator protocol
      next() {
        const { value: f, done: p } = a.next();
        return p ? { value: f, done: p } : {
          value: l ? [u(f[0]), u(f[1])] : u(f),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function $t(e) {
  return function(...t) {
    if (Ne.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${bt(e)} operation ${n}failed: target is readonly.`,
        Q(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function hd() {
  const e = {
    get(r) {
      return Xi(this, r);
    },
    get size() {
      return Qi(this);
    },
    has: Zi,
    add: Tl,
    set: Dl,
    delete: wl,
    clear: Vl,
    forEach: es(!1, !1)
  }, t = {
    get(r) {
      return Xi(this, r, !1, !0);
    },
    get size() {
      return Qi(this);
    },
    has: Zi,
    add: Tl,
    set: Dl,
    delete: wl,
    clear: Vl,
    forEach: es(!1, !0)
  }, n = {
    get(r) {
      return Xi(this, r, !0);
    },
    get size() {
      return Qi(this, !0);
    },
    has(r) {
      return Zi.call(this, r, !0);
    },
    add: $t("add"),
    set: $t("set"),
    delete: $t("delete"),
    clear: $t("clear"),
    forEach: es(!0, !1)
  }, i = {
    get(r) {
      return Xi(this, r, !0, !0);
    },
    get size() {
      return Qi(this, !0);
    },
    has(r) {
      return Zi.call(this, r, !0);
    },
    add: $t("add"),
    set: $t("set"),
    delete: $t("delete"),
    clear: $t("clear"),
    forEach: es(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = ts(
      r,
      !1,
      !1
    ), n[r] = ts(
      r,
      !0,
      !1
    ), t[r] = ts(
      r,
      !1,
      !0
    ), i[r] = ts(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    i
  ];
}
const [
  md,
  gd,
  Ed,
  yd
] = /* @__PURE__ */ hd();
function Us(e, t) {
  const n = t ? e ? yd : Ed : e ? gd : md;
  return (i, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? i : Reflect.get(
    se(n, s) && s in i ? n : i,
    s,
    r
  );
}
const _d = {
  get: /* @__PURE__ */ Us(!1, !1)
}, Nd = {
  get: /* @__PURE__ */ Us(!1, !0)
}, bd = {
  get: /* @__PURE__ */ Us(!0, !1)
}, vd = {
  get: /* @__PURE__ */ Us(!0, !0)
};
function ta(e, t, n) {
  const i = Q(n);
  if (i !== n && t.call(e, i)) {
    const s = fo(e);
    console.warn(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const na = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakMap(), sa = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap();
function Od(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Sd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Od(fo(e));
}
function Ks(e) {
  return It(e) ? e : qs(
    e,
    !1,
    fd,
    _d,
    na
  );
}
function oa(e) {
  return qs(
    e,
    !1,
    dd,
    Nd,
    ia
  );
}
function _o(e) {
  return qs(
    e,
    !0,
    ud,
    bd,
    sa
  );
}
function dn(e) {
  return qs(
    e,
    !0,
    pd,
    vd,
    ra
  );
}
function qs(e, t, n, i, s) {
  if (!oe(e))
    return Ne.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const o = Sd(e);
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? i : n
  );
  return s.set(e, l), l;
}
function Xt(e) {
  return It(e) ? Xt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function It(e) {
  return !!(e && e.__v_isReadonly);
}
function Zt(e) {
  return !!(e && e.__v_isShallow);
}
function Si(e) {
  return Xt(e) || It(e);
}
function Q(e) {
  const t = e && e.__v_raw;
  return t ? Q(t) : e;
}
function No(e) {
  return Object.isExtensible(e) && Es(e, "__v_skip", !0), e;
}
const Ci = (e) => oe(e) ? Ks(e) : e, bo = (e) => oe(e) ? _o(e) : e, Cd = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class la {
  constructor(t, n, i, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Un(
      () => t(this._value),
      () => $n(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = i;
  }
  get value() {
    const t = Q(this);
    return (!t._cacheable || t.effect.dirty) && pt(t._value, t._value = t.effect.run()) && $n(t, 4), vo(t), t.effect._dirtyLevel >= 2 && (Ne.NODE_ENV !== "production" && jn(Cd), $n(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function Td(e, t, n = !1) {
  let i, s;
  const r = J(e);
  r ? (i = e, s = Ne.NODE_ENV !== "production" ? () => {
    jn("Write operation failed: computed value is readonly");
  } : pe) : (i = e.get, s = e.set);
  const o = new la(i, s, r || !s, n);
  return Ne.NODE_ENV !== "production" && t && !n && (o.effect.onTrack = t.onTrack, o.effect.onTrigger = t.onTrigger), o;
}
function vo(e) {
  var t;
  Yt && En && (e = Q(e), zc(
    En,
    (t = e.dep) != null ? t : e.dep = Yc(
      () => e.dep = void 0,
      e instanceof la ? e : void 0
    ),
    Ne.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function $n(e, t = 4, n) {
  e = Q(e);
  const i = e.dep;
  i && Jc(
    i,
    t,
    Ne.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function Oe(e) {
  return !!(e && e.__v_isRef === !0);
}
function xt(e) {
  return ca(e, !1);
}
function Dd(e) {
  return ca(e, !0);
}
function ca(e, t) {
  return Oe(e) ? e : new wd(e, t);
}
class wd {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Q(t), this._value = n ? t : Ci(t);
  }
  get value() {
    return vo(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Zt(t) || It(t);
    t = n ? t : Q(t), pt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ci(t), $n(this, 4, t));
  }
}
function Vd(e) {
  $n(e, 4, Ne.NODE_ENV !== "production" ? e.value : void 0);
}
function Oo(e) {
  return Oe(e) ? e.value : e;
}
function xd(e) {
  return J(e) ? e() : Oo(e);
}
const Ad = {
  get: (e, t, n) => Oo(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return Oe(s) && !Oe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function So(e) {
  return Xt(e) ? e : new Proxy(e, Ad);
}
class Id {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: i } = t(
      () => vo(this),
      () => $n(this)
    );
    this._get = n, this._set = i;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function aa(e) {
  return new Id(e);
}
function kd(e) {
  Ne.NODE_ENV !== "production" && !Si(e) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const t = j(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = fa(e, n);
  return t;
}
class Rd {
  constructor(t, n, i) {
    this._object = t, this._key = n, this._defaultValue = i, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return od(Q(this._object), this._key);
  }
}
class Md {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Pd(e, t, n) {
  return Oe(e) ? e : J(e) ? new Md(e) : oe(e) && arguments.length > 1 ? fa(e, t, n) : xt(e);
}
function fa(e, t, n) {
  const i = e[t];
  return Oe(i) ? i : new Rd(e, t, n);
}
const $d = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Ld = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
};
var h = {};
const _n = [];
function di(e) {
  _n.push(e);
}
function pi() {
  _n.pop();
}
function D(e, ...t) {
  on();
  const n = _n.length ? _n[_n.length - 1].component : null, i = n && n.appContext.config.warnHandler, s = Fd();
  if (i)
    Nt(
      i,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${sr(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Bd(s)), console.warn(...r);
  }
  ln();
}
function Fd() {
  let e = _n[_n.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const i = e.component && e.component.parent;
    e = i && i.vnode;
  }
  return t;
}
function Bd(e) {
  const t = [];
  return e.forEach((n, i) => {
    t.push(...i === 0 ? [] : [`
`], ...Hd(n));
  }), t;
}
function Hd({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", i = e.component ? e.component.parent == null : !1, s = ` at <${sr(
    e.component,
    e.type,
    i
  )}`, r = ">" + n;
  return e.props ? [s, ...jd(e.props), r] : [s + r];
}
function jd(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((i) => {
    t.push(...ua(i, e[i]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ua(e, t, n) {
  return Z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Oe(t) ? (t = ua(e, Q(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : J(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Q(t), n ? t : [`${e}=`, t]);
}
function Co(e, t) {
  h.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? D(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && D(`${t} is NaN - the duration expression might be incorrect.`));
}
const Ud = {
  SETUP_FUNCTION: 0,
  0: "SETUP_FUNCTION",
  RENDER_FUNCTION: 1,
  1: "RENDER_FUNCTION",
  WATCH_GETTER: 2,
  2: "WATCH_GETTER",
  WATCH_CALLBACK: 3,
  3: "WATCH_CALLBACK",
  WATCH_CLEANUP: 4,
  4: "WATCH_CLEANUP",
  NATIVE_EVENT_HANDLER: 5,
  5: "NATIVE_EVENT_HANDLER",
  COMPONENT_EVENT_HANDLER: 6,
  6: "COMPONENT_EVENT_HANDLER",
  VNODE_HOOK: 7,
  7: "VNODE_HOOK",
  DIRECTIVE_HOOK: 8,
  8: "DIRECTIVE_HOOK",
  TRANSITION_HOOK: 9,
  9: "TRANSITION_HOOK",
  APP_ERROR_HANDLER: 10,
  10: "APP_ERROR_HANDLER",
  APP_WARN_HANDLER: 11,
  11: "APP_WARN_HANDLER",
  FUNCTION_REF: 12,
  12: "FUNCTION_REF",
  ASYNC_COMPONENT_LOADER: 13,
  13: "ASYNC_COMPONENT_LOADER",
  SCHEDULER: 14,
  14: "SCHEDULER"
}, Ws = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Nt(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (s) {
    cn(s, t, n);
  }
}
function Xe(e, t, n, i) {
  if (J(e)) {
    const r = Nt(e, t, n, i);
    return r && Fs(r) && r.catch((o) => {
      cn(o, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(Xe(e[r], t, n, i));
  return s;
}
function cn(e, t, n, i = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const o = t.proxy, l = h.NODE_ENV !== "production" ? Ws[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let u = 0; u < a.length; u++)
          if (a[u](e, o, l) === !1)
            return;
      }
      r = r.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Nt(
        c,
        null,
        10,
        [e, o, l]
      );
      return;
    }
  }
  Kd(e, n, s, i);
}
function Kd(e, t, n, i = !0) {
  if (h.NODE_ENV !== "production") {
    const s = Ws[t];
    if (n && di(n), D(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && pi(), i)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ti = !1, Ar = !1;
const Le = [];
let Et = 0;
const Ln = [];
let wt = null, Ht = 0;
const da = /* @__PURE__ */ Promise.resolve();
let To = null;
const qd = 100;
function Gs(e) {
  const t = To || da;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Wd(e) {
  let t = Et + 1, n = Le.length;
  for (; t < n; ) {
    const i = t + n >>> 1, s = Le[i], r = wi(s);
    r < e || r === e && s.pre ? t = i + 1 : n = i;
  }
  return t;
}
function Hi(e) {
  (!Le.length || !Le.includes(
    e,
    Ti && e.allowRecurse ? Et + 1 : Et
  )) && (e.id == null ? Le.push(e) : Le.splice(Wd(e.id), 0, e), pa());
}
function pa() {
  !Ti && !Ar && (Ar = !0, To = da.then(ha));
}
function Gd(e) {
  const t = Le.indexOf(e);
  t > Et && Le.splice(t, 1);
}
function Di(e) {
  j(e) ? Ln.push(...e) : (!wt || !wt.includes(
    e,
    e.allowRecurse ? Ht + 1 : Ht
  )) && Ln.push(e), pa();
}
function xl(e, t, n = Ti ? Et + 1 : 0) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Le.length; n++) {
    const i = Le[n];
    if (i && i.pre) {
      if (e && i.id !== e.uid || h.NODE_ENV !== "production" && Do(t, i))
        continue;
      Le.splice(n, 1), n--, i();
    }
  }
}
function Ns(e) {
  if (Ln.length) {
    const t = [...new Set(Ln)].sort(
      (n, i) => wi(n) - wi(i)
    );
    if (Ln.length = 0, wt) {
      wt.push(...t);
      return;
    }
    for (wt = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ht = 0; Ht < wt.length; Ht++)
      h.NODE_ENV !== "production" && Do(e, wt[Ht]) || wt[Ht]();
    wt = null, Ht = 0;
  }
}
const wi = (e) => e.id == null ? 1 / 0 : e.id, zd = (e, t) => {
  const n = wi(e) - wi(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ha(e) {
  Ar = !1, Ti = !0, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Le.sort(zd);
  const t = h.NODE_ENV !== "production" ? (n) => Do(e, n) : pe;
  try {
    for (Et = 0; Et < Le.length; Et++) {
      const n = Le[Et];
      if (n && n.active !== !1) {
        if (h.NODE_ENV !== "production" && t(n))
          continue;
        Nt(n, null, 14);
      }
    }
  } finally {
    Et = 0, Le.length = 0, Ns(e), Ti = !1, To = null, (Le.length || Ln.length) && ha(e);
  }
}
function Do(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > qd) {
      const i = t.ownerInstance, s = i && ki(i.type);
      return cn(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let Qt = !1;
const Mn = /* @__PURE__ */ new Set();
h.NODE_ENV !== "production" && (po().__VUE_HMR_RUNTIME__ = {
  createRecord: hr(ma),
  rerender: hr(Xd),
  reload: hr(Zd)
});
const On = /* @__PURE__ */ new Map();
function Jd(e) {
  const t = e.type.__hmrId;
  let n = On.get(t);
  n || (ma(t, e.type), n = On.get(t)), n.instances.add(e);
}
function Yd(e) {
  On.get(e.type.__hmrId).instances.delete(e);
}
function ma(e, t) {
  return On.has(e) ? !1 : (On.set(e, {
    initialDef: hi(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function hi(e) {
  return Ef(e) ? e.__vccOpts : e;
}
function Xd(e, t) {
  const n = On.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((i) => {
    t && (i.render = t, hi(i.type).render = t), i.renderCache = [], Qt = !0, i.effect.dirty = !0, i.update(), Qt = !1;
  }));
}
function Zd(e, t) {
  const n = On.get(e);
  if (!n)
    return;
  t = hi(t), Al(n.initialDef, t);
  const i = [...n.instances];
  for (const s of i) {
    const r = hi(s.type);
    Mn.has(r) || (r !== n.initialDef && Al(r, t), Mn.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Mn.add(r), s.ceReload(t.styles), Mn.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, Hi(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Di(() => {
    for (const s of i)
      Mn.delete(
        hi(s.type)
      );
  });
}
function Al(e, t) {
  ie(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function hr(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (i) {
      console.error(i), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ct, li = [], Ir = !1;
function ji(e, ...t) {
  ct ? ct.emit(e, ...t) : Ir || li.push({ event: e, args: t });
}
function wo(e, t) {
  var n, i;
  ct = e, ct ? (ct.enabled = !0, li.forEach(({ event: s, args: r }) => ct.emit(s, ...r)), li = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((i = (n = window.navigator) == null ? void 0 : n.userAgent) != null && i.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    wo(r, t);
  }), setTimeout(() => {
    ct || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ir = !0, li = []);
  }, 3e3)) : (Ir = !0, li = []);
}
function Qd(e, t) {
  ji("app:init", e, t, {
    Fragment: Ce,
    Text: sn,
    Comment: ve,
    Static: en
  });
}
function ep(e) {
  ji("app:unmount", e);
}
const kr = /* @__PURE__ */ Vo(
  "component:added"
  /* COMPONENT_ADDED */
), ga = /* @__PURE__ */ Vo(
  "component:updated"
  /* COMPONENT_UPDATED */
), tp = /* @__PURE__ */ Vo(
  "component:removed"
  /* COMPONENT_REMOVED */
), np = (e) => {
  ct && typeof ct.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ct.cleanupBuffer(e) && tp(e);
};
function Vo(e) {
  return (t) => {
    ji(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ip = /* @__PURE__ */ Ea(
  "perf:start"
  /* PERFORMANCE_START */
), sp = /* @__PURE__ */ Ea(
  "perf:end"
  /* PERFORMANCE_END */
);
function Ea(e) {
  return (t, n, i) => {
    ji(e, t.appContext.app, t.uid, t, n, i);
  };
}
function rp(e, t, n) {
  ji(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function op(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const i = e.vnode.props || le;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [f]
    } = e;
    if (u)
      if (!(t in u))
        (!f || !(gt(t) in f)) && D(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${gt(t)}" prop.`
        );
      else {
        const p = u[t];
        J(p) && (p(...n) || D(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), o = r && t.slice(7);
  if (o && o in i) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`, { number: f, trim: p } = i[u] || le;
    p && (s = n.map((E) => Z(E) ? E.trim() : E)), f && (s = n.map(Oi));
  }
  if (h.NODE_ENV !== "production" && rp(e, t, s), h.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && i[gt(u)] && D(
      `Event "${u}" is emitted in component ${sr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${$e(
        t
      )}" instead of "${t}".`
    );
  }
  let l, c = i[l = gt(t)] || // also try camelCase event handler (#2249)
  i[l = gt(Ee(t))];
  !c && r && (c = i[l = gt($e(t))]), c && Xe(
    c,
    e,
    6,
    s
  );
  const a = i[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Xe(
      a,
      e,
      6,
      s
    );
  }
}
function ya(e, t, n = !1) {
  const i = t.emitsCache, s = i.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let o = {}, l = !1;
  if (!J(e)) {
    const c = (a) => {
      const u = ya(a, t, !0);
      u && (l = !0, ie(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (oe(e) && i.set(e, null), null) : (j(r) ? r.forEach((c) => o[c] = null) : ie(o, r), oe(e) && i.set(e, o), o);
}
function zs(e, t) {
  return !e || !At(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), se(e, t[0].toLowerCase() + t.slice(1)) || se(e, $e(t)) || se(e, t));
}
let ge = null, Js = null;
function Vi(e) {
  const t = ge;
  return ge = e, Js = e && e.type.__scopeId || null, t;
}
function lp(e) {
  Js = e;
}
function cp() {
  Js = null;
}
const ap = (e) => xo;
function xo(e, t = ge, n) {
  if (!t || e._n)
    return e;
  const i = (...s) => {
    i._d && jr(-1);
    const r = Vi(t);
    let o;
    try {
      o = e(...s);
    } finally {
      Vi(r), i._d && jr(1);
    }
    return h.NODE_ENV !== "production" && ga(t), o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
let Rr = !1;
function bs() {
  Rr = !0;
}
function fs(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: s,
    props: r,
    propsOptions: [o],
    slots: l,
    attrs: c,
    emit: a,
    render: u,
    renderCache: f,
    data: p,
    setupState: E,
    ctx: y,
    inheritAttrs: T
  } = e;
  let P, M;
  const S = Vi(e);
  h.NODE_ENV !== "production" && (Rr = !1);
  try {
    if (n.shapeFlag & 4) {
      const N = s || i, I = h.NODE_ENV !== "production" && E.__isScriptSetup ? new Proxy(N, {
        get(w, b, v) {
          return D(
            `Property '${String(
              b
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(w, b, v);
        }
      }) : N;
      P = We(
        u.call(
          I,
          N,
          f,
          r,
          E,
          p,
          y
        )
      ), M = c;
    } else {
      const N = t;
      h.NODE_ENV !== "production" && c === r && bs(), P = We(
        N.length > 1 ? N(
          r,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return bs(), c;
            },
            slots: l,
            emit: a
          } : { attrs: c, slots: l, emit: a }
        ) : N(
          r,
          null
          /* we know it doesn't need it */
        )
      ), M = t.props ? c : fp(c);
    }
  } catch (N) {
    _i.length = 0, cn(N, e, 1), P = he(ve);
  }
  let g = P, _;
  if (h.NODE_ENV !== "production" && P.patchFlag > 0 && P.patchFlag & 2048 && ([g, _] = _a(P)), M && T !== !1) {
    const N = Object.keys(M), { shapeFlag: I } = g;
    if (N.length) {
      if (I & 7)
        o && N.some(gs) && (M = up(
          M,
          o
        )), g = rt(g, M);
      else if (h.NODE_ENV !== "production" && !Rr && g.type !== ve) {
        const w = Object.keys(c), b = [], v = [];
        for (let C = 0, R = w.length; C < R; C++) {
          const V = w[C];
          At(V) ? gs(V) || b.push(V[2].toLowerCase() + V.slice(3)) : v.push(V);
        }
        v.length && D(
          `Extraneous non-props attributes (${v.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), b.length && D(
          `Extraneous non-emits event listeners (${b.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !Il(g) && D(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), g = rt(g), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !Il(g) && D(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), g.transition = n.transition), h.NODE_ENV !== "production" && _ ? _(g) : P = g, Vi(S), P;
}
const _a = (e) => {
  const t = e.children, n = e.dynamicChildren, i = Ys(t, !1);
  if (i) {
    if (h.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048)
      return _a(i);
  } else
    return [e, void 0];
  const s = t.indexOf(i), r = n ? n.indexOf(i) : -1, o = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [We(i), o];
};
function Ys(e, t = !0) {
  let n;
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (kt(s)) {
      if (s.type !== ve || s.children === "v-if") {
        if (n)
          return;
        if (n = s, h.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ys(n.children);
      }
    } else
      return;
  }
  return n;
}
const fp = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || At(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, up = (e, t) => {
  const n = {};
  for (const i in e)
    (!gs(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
}, Il = (e) => e.shapeFlag & 7 || e.type === ve;
function dp(e, t, n) {
  const { props: i, children: s, component: r } = e, { props: o, children: l, patchFlag: c } = t, a = r.emitsOptions;
  if (h.NODE_ENV !== "production" && (s || l) && Qt || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return i ? kl(i, o, a) : !!o;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (o[p] !== i[p] && !zs(a, p))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : i === o ? !1 : i ? o ? kl(i, o, a) : !0 : !!o;
  return !1;
}
function kl(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (t[r] !== e[r] && !zs(n, r))
      return !0;
  }
  return !1;
}
function Ao({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const vs = "components", pp = "directives";
function hp(e, t) {
  return ko(vs, e, !0, t) || e;
}
const Io = Symbol.for("v-ndc");
function mp(e) {
  return Z(e) ? ko(vs, e, !1) || e : e || Io;
}
function gp(e) {
  return ko(pp, e);
}
function ko(e, t, n = !0, i = !1) {
  const s = ge || be;
  if (s) {
    const r = s.type;
    if (e === vs) {
      const l = ki(
        r,
        !1
      );
      if (l && (l === t || l === Ee(t) || l === bt(Ee(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Rl(s[e] || r[e], t) || // global registration
      Rl(s.appContext[e], t)
    );
    if (!o && i)
      return r;
    if (h.NODE_ENV !== "production" && n && !o) {
      const l = e === vs ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      D(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return o;
  } else
    h.NODE_ENV !== "production" && D(
      `resolve${bt(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Rl(e, t) {
  return e && (e[t] || e[Ee(t)] || e[bt(Ee(t))]);
}
const Na = (e) => e.__isSuspense;
let Mr = 0;
const Ep = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, i, s, r, o, l, c, a) {
    if (e == null)
      _p(
        t,
        n,
        i,
        s,
        r,
        o,
        l,
        c,
        a
      );
    else {
      if (r && r.deps > 0) {
        t.suspense = e.suspense;
        return;
      }
      Np(
        e,
        t,
        n,
        i,
        s,
        o,
        l,
        c,
        a
      );
    }
  },
  hydrate: bp,
  create: Ro,
  normalize: vp
}, yp = Ep;
function xi(e, t) {
  const n = e.props && e.props[t];
  J(n) && n();
}
function _p(e, t, n, i, s, r, o, l, c) {
  const {
    p: a,
    o: { createElement: u }
  } = c, f = u("div"), p = e.suspense = Ro(
    e,
    s,
    i,
    t,
    f,
    n,
    r,
    o,
    l,
    c
  );
  a(
    null,
    p.pendingBranch = e.ssContent,
    f,
    null,
    i,
    p,
    r,
    o
  ), p.deps > 0 ? (xi(e, "onPending"), xi(e, "onFallback"), a(
    null,
    e.ssFallback,
    t,
    n,
    i,
    null,
    // fallback tree will not have suspense context
    r,
    o
  ), Fn(p, e.ssFallback)) : p.resolve(!1, !0);
}
function Np(e, t, n, i, s, r, o, l, { p: c, um: a, o: { createElement: u } }) {
  const f = t.suspense = e.suspense;
  f.vnode = t, t.el = e.el;
  const p = t.ssContent, E = t.ssFallback, { activeBranch: y, pendingBranch: T, isInFallback: P, isHydrating: M } = f;
  if (T)
    f.pendingBranch = p, at(p, T) ? (c(
      T,
      p,
      f.hiddenContainer,
      null,
      s,
      f,
      r,
      o,
      l
    ), f.deps <= 0 ? f.resolve() : P && (M || (c(
      y,
      E,
      n,
      i,
      s,
      null,
      // fallback tree will not have suspense context
      r,
      o,
      l
    ), Fn(f, E)))) : (f.pendingId = Mr++, M ? (f.isHydrating = !1, f.activeBranch = T) : a(T, s, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = u("div"), P ? (c(
      null,
      p,
      f.hiddenContainer,
      null,
      s,
      f,
      r,
      o,
      l
    ), f.deps <= 0 ? f.resolve() : (c(
      y,
      E,
      n,
      i,
      s,
      null,
      // fallback tree will not have suspense context
      r,
      o,
      l
    ), Fn(f, E))) : y && at(p, y) ? (c(
      y,
      p,
      n,
      i,
      s,
      f,
      r,
      o,
      l
    ), f.resolve(!0)) : (c(
      null,
      p,
      f.hiddenContainer,
      null,
      s,
      f,
      r,
      o,
      l
    ), f.deps <= 0 && f.resolve()));
  else if (y && at(p, y))
    c(
      y,
      p,
      n,
      i,
      s,
      f,
      r,
      o,
      l
    ), Fn(f, p);
  else if (xi(t, "onPending"), f.pendingBranch = p, p.shapeFlag & 512 ? f.pendingId = p.component.suspenseId : f.pendingId = Mr++, c(
    null,
    p,
    f.hiddenContainer,
    null,
    s,
    f,
    r,
    o,
    l
  ), f.deps <= 0)
    f.resolve();
  else {
    const { timeout: S, pendingId: g } = f;
    S > 0 ? setTimeout(() => {
      f.pendingId === g && f.fallback(E);
    }, S) : S === 0 && f.fallback(E);
  }
}
let Ml = !1;
function Ro(e, t, n, i, s, r, o, l, c, a, u = !1) {
  h.NODE_ENV !== "production" && !Ml && (Ml = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: f,
    m: p,
    um: E,
    n: y,
    o: { parentNode: T, remove: P }
  } = a;
  let M;
  const S = Op(e);
  S && t != null && t.pendingBranch && (M = t.pendingId, t.deps++);
  const g = e.props ? ys(e.props.timeout) : void 0;
  h.NODE_ENV !== "production" && Co(g, "Suspense timeout");
  const _ = r, N = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: o,
    container: i,
    hiddenContainer: s,
    deps: 0,
    pendingId: Mr++,
    timeout: typeof g == "number" ? g : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !u,
    isHydrating: u,
    isUnmounted: !1,
    effects: [],
    resolve(I = !1, w = !1) {
      if (h.NODE_ENV !== "production") {
        if (!I && !N.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (N.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: b,
        activeBranch: v,
        pendingBranch: C,
        pendingId: R,
        effects: V,
        parentComponent: K,
        container: Y
      } = N;
      let te = !1;
      N.isHydrating ? N.isHydrating = !1 : I || (te = v && C.transition && C.transition.mode === "out-in", te && (v.transition.afterLeave = () => {
        R === N.pendingId && (p(
          C,
          Y,
          r === _ ? y(v) : r,
          0
        ), Di(V));
      }), v && (T(v.el) !== N.hiddenContainer && (r = y(v)), E(v, K, N, !0)), te || p(C, Y, r, 0)), Fn(N, C), N.pendingBranch = null, N.isInFallback = !1;
      let W = N.parent, z = !1;
      for (; W; ) {
        if (W.pendingBranch) {
          W.effects.push(...V), z = !0;
          break;
        }
        W = W.parent;
      }
      !z && !te && Di(V), N.effects = [], S && t && t.pendingBranch && M === t.pendingId && (t.deps--, t.deps === 0 && !w && t.resolve()), xi(b, "onResolve");
    },
    fallback(I) {
      if (!N.pendingBranch)
        return;
      const { vnode: w, activeBranch: b, parentComponent: v, container: C, namespace: R } = N;
      xi(w, "onFallback");
      const V = y(b), K = () => {
        N.isInFallback && (f(
          null,
          I,
          C,
          V,
          v,
          null,
          // fallback tree will not have suspense context
          R,
          l,
          c
        ), Fn(N, I));
      }, Y = I.transition && I.transition.mode === "out-in";
      Y && (b.transition.afterLeave = K), N.isInFallback = !0, E(
        b,
        v,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), Y || K();
    },
    move(I, w, b) {
      N.activeBranch && p(N.activeBranch, I, w, b), N.container = I;
    },
    next() {
      return N.activeBranch && y(N.activeBranch);
    },
    registerDep(I, w) {
      const b = !!N.pendingBranch;
      b && N.deps++;
      const v = I.vnode.el;
      I.asyncDep.catch((C) => {
        cn(C, I, 0);
      }).then((C) => {
        if (I.isUnmounted || N.isUnmounted || N.pendingId !== I.suspenseId)
          return;
        I.asyncResolved = !0;
        const { vnode: R } = I;
        h.NODE_ENV !== "production" && di(R), Gr(I, C, !1), v && (R.el = v);
        const V = !v && I.subTree.el;
        w(
          I,
          R,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          T(v || I.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          v ? null : y(I.subTree),
          N,
          o,
          c
        ), V && P(V), Ao(I, R.el), h.NODE_ENV !== "production" && pi(), b && --N.deps === 0 && N.resolve();
      });
    },
    unmount(I, w) {
      N.isUnmounted = !0, N.activeBranch && E(
        N.activeBranch,
        n,
        I,
        w
      ), N.pendingBranch && E(
        N.pendingBranch,
        n,
        I,
        w
      );
    }
  };
  return N;
}
function bp(e, t, n, i, s, r, o, l, c) {
  const a = t.suspense = Ro(
    t,
    i,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    s,
    r,
    o,
    l,
    !0
  ), u = c(
    e,
    a.pendingBranch = t.ssContent,
    n,
    a,
    r,
    o
  );
  return a.deps === 0 && a.resolve(!1, !0), u;
}
function vp(e) {
  const { shapeFlag: t, children: n } = e, i = t & 32;
  e.ssContent = Pl(
    i ? n.default : n
  ), e.ssFallback = i ? Pl(n.fallback) : he(ve);
}
function Pl(e) {
  let t;
  if (J(e)) {
    const n = Cn && e._c;
    n && (e._d = !1, Ki()), e = e(), n && (e._d = !0, t = Ge, nf());
  }
  if (j(e)) {
    const n = Ys(e);
    h.NODE_ENV !== "production" && !n && e.filter((i) => i !== Io).length > 0 && D("<Suspense> slots expect a single root node."), e = n;
  }
  return e = We(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function ba(e, t) {
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : Di(e);
}
function Fn(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: i } = e;
  let s = t.el;
  for (; !s && t.component; )
    t = t.component.subTree, s = t.el;
  n.el = s, i && i.subTree === n && (i.vnode.el = s, Ao(i, s));
}
function Op(e) {
  var t;
  return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1;
}
const va = Symbol.for("v-scx"), Oa = () => {
  {
    const e = Ei(va);
    return e || h.NODE_ENV !== "production" && D(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Sp(e, t) {
  return Ui(e, null, t);
}
function Sa(e, t) {
  return Ui(
    e,
    null,
    h.NODE_ENV !== "production" ? ie({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function Ca(e, t) {
  return Ui(
    e,
    null,
    h.NODE_ENV !== "production" ? ie({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
const ns = {};
function mi(e, t, n) {
  return h.NODE_ENV !== "production" && !J(t) && D(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ui(e, t, n);
}
function Ui(e, t, {
  immediate: n,
  deep: i,
  flush: s,
  once: r,
  onTrack: o,
  onTrigger: l
} = le) {
  if (t && r) {
    const w = t;
    t = (...b) => {
      w(...b), I();
    };
  }
  h.NODE_ENV !== "production" && i !== void 0 && typeof i == "number" && D(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), h.NODE_ENV !== "production" && !t && (n !== void 0 && D(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && D(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && D(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (w) => {
    D(
      "Invalid watch source: ",
      w,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = be, u = (w) => i === !0 ? w : (
    // for deep: false, only traverse root-level properties
    pn(w, i === !1 ? 1 : void 0)
  );
  let f, p = !1, E = !1;
  if (Oe(e) ? (f = () => e.value, p = Zt(e)) : Xt(e) ? (f = () => u(e), p = !0) : j(e) ? (E = !0, p = e.some((w) => Xt(w) || Zt(w)), f = () => e.map((w) => {
    if (Oe(w))
      return w.value;
    if (Xt(w))
      return u(w);
    if (J(w))
      return Nt(w, a, 2);
    h.NODE_ENV !== "production" && c(w);
  })) : J(e) ? t ? f = () => Nt(e, a, 2) : f = () => (y && y(), Xe(
    e,
    a,
    3,
    [T]
  )) : (f = pe, h.NODE_ENV !== "production" && c(e)), t && i) {
    const w = f;
    f = () => pn(w());
  }
  let y, T = (w) => {
    y = _.onStop = () => {
      Nt(w, a, 4), y = _.onStop = void 0;
    };
  }, P;
  if (qi)
    if (T = pe, t ? n && Xe(t, a, 3, [
      f(),
      E ? [] : void 0,
      T
    ]) : f(), s === "sync") {
      const w = Oa();
      P = w.__watcherHandles || (w.__watcherHandles = []);
    } else
      return pe;
  let M = E ? new Array(e.length).fill(ns) : ns;
  const S = () => {
    if (!(!_.active || !_.dirty))
      if (t) {
        const w = _.run();
        (i || p || (E ? w.some((b, v) => pt(b, M[v])) : pt(w, M))) && (y && y(), Xe(t, a, 3, [
          w,
          // pass undefined as the old value when it's changed for the first time
          M === ns ? void 0 : E && M[0] === ns ? [] : M,
          T
        ]), M = w);
      } else
        _.run();
  };
  S.allowRecurse = !!t;
  let g;
  s === "sync" ? g = S : s === "post" ? g = () => Re(S, a && a.suspense) : (S.pre = !0, a && (S.id = a.uid), g = () => Hi(S));
  const _ = new Un(f, pe, g), N = qc(), I = () => {
    _.stop(), N && ao(N.effects, _);
  };
  return h.NODE_ENV !== "production" && (_.onTrack = o, _.onTrigger = l), t ? n ? S() : M = _.run() : s === "post" ? Re(
    _.run.bind(_),
    a && a.suspense
  ) : _.run(), P && P.push(I), I;
}
function Cp(e, t, n) {
  const i = this.proxy, s = Z(e) ? e.includes(".") ? Ta(i, e) : () => i[e] : e.bind(i, i);
  let r;
  J(t) ? r = t : (r = t.handler, n = t);
  const o = Tn(this), l = Ui(s, r.bind(i), n);
  return o(), l;
}
function Ta(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++)
      i = i[n[s]];
    return i;
  };
}
function pn(e, t, n = 0, i) {
  if (!oe(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (i = i || /* @__PURE__ */ new Set(), i.has(e))
    return e;
  if (i.add(e), Oe(e))
    pn(e.value, t, n, i);
  else if (j(e))
    for (let s = 0; s < e.length; s++)
      pn(e[s], t, n, i);
  else if (wn(e) || gn(e))
    e.forEach((s) => {
      pn(s, t, n, i);
    });
  else if (Pc(e))
    for (const s in e)
      pn(e[s], t, n, i);
  return e;
}
function Da(e) {
  $c(e) && D("Do not use built-in directive ids as custom directive id: " + e);
}
function Tp(e, t) {
  if (ge === null)
    return h.NODE_ENV !== "production" && D("withDirectives can only be used inside render functions."), e;
  const n = ir(ge) || ge.proxy, i = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, o, l, c = le] = t[s];
    r && (J(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && pn(o), i.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function mt(e, t, n, i) {
  const s = e.dirs, r = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    r && (l.oldValue = r[o].value);
    let c = l.dir[i];
    c && (on(), Xe(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ln());
  }
}
const jt = Symbol("_leaveCb"), is = Symbol("_enterCb");
function Mo() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ti(() => {
    e.isMounted = !0;
  }), er(() => {
    e.isUnmounting = !0;
  }), e;
}
const et = [Function, Array], Po = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: et,
  onEnter: et,
  onAfterEnter: et,
  onEnterCancelled: et,
  // leave
  onBeforeLeave: et,
  onLeave: et,
  onAfterLeave: et,
  onLeaveCancelled: et,
  // appear
  onBeforeAppear: et,
  onAppear: et,
  onAfterAppear: et,
  onAppearCancelled: et
}, Dp = {
  name: "BaseTransition",
  props: Po,
  setup(e, { slots: t }) {
    const n = Mt(), i = Mo();
    let s;
    return () => {
      const r = t.default && Xs(t.default(), !0);
      if (!r || !r.length)
        return;
      let o = r[0];
      if (r.length > 1) {
        let T = !1;
        for (const P of r)
          if (P.type !== ve) {
            if (h.NODE_ENV !== "production" && T) {
              D(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (o = P, T = !0, h.NODE_ENV === "production")
              break;
          }
      }
      const l = Q(e), { mode: c } = l;
      if (h.NODE_ENV !== "production" && c && c !== "in-out" && c !== "out-in" && c !== "default" && D(`invalid <transition> mode: ${c}`), i.isLeaving)
        return mr(o);
      const a = $l(o);
      if (!a)
        return mr(o);
      const u = Kn(
        a,
        l,
        i,
        n
      );
      Sn(a, u);
      const f = n.subTree, p = f && $l(f);
      let E = !1;
      const { getTransitionKey: y } = a.type;
      if (y) {
        const T = y();
        s === void 0 ? s = T : T !== s && (s = T, E = !0);
      }
      if (p && p.type !== ve && (!at(a, p) || E)) {
        const T = Kn(
          p,
          l,
          i,
          n
        );
        if (Sn(p, T), c === "out-in")
          return i.isLeaving = !0, T.afterLeave = () => {
            i.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, mr(o);
        c === "in-out" && a.type !== ve && (T.delayLeave = (P, M, S) => {
          const g = Va(
            i,
            p
          );
          g[String(p.key)] = p, P[jt] = () => {
            M(), P[jt] = void 0, delete u.delayedLeave;
          }, u.delayedLeave = S;
        });
      }
      return o;
    };
  }
}, wa = Dp;
function Va(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function Kn(e, t, n, i) {
  const {
    appear: s,
    mode: r,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: c,
    onAfterEnter: a,
    onEnterCancelled: u,
    onBeforeLeave: f,
    onLeave: p,
    onAfterLeave: E,
    onLeaveCancelled: y,
    onBeforeAppear: T,
    onAppear: P,
    onAfterAppear: M,
    onAppearCancelled: S
  } = t, g = String(e.key), _ = Va(n, e), N = (b, v) => {
    b && Xe(
      b,
      i,
      9,
      v
    );
  }, I = (b, v) => {
    const C = v[1];
    N(b, v), j(b) ? b.every((R) => R.length <= 1) && C() : b.length <= 1 && C();
  }, w = {
    mode: r,
    persisted: o,
    beforeEnter(b) {
      let v = l;
      if (!n.isMounted)
        if (s)
          v = T || l;
        else
          return;
      b[jt] && b[jt](
        !0
        /* cancelled */
      );
      const C = _[g];
      C && at(e, C) && C.el[jt] && C.el[jt](), N(v, [b]);
    },
    enter(b) {
      let v = c, C = a, R = u;
      if (!n.isMounted)
        if (s)
          v = P || c, C = M || a, R = S || u;
        else
          return;
      let V = !1;
      const K = b[is] = (Y) => {
        V || (V = !0, Y ? N(R, [b]) : N(C, [b]), w.delayedLeave && w.delayedLeave(), b[is] = void 0);
      };
      v ? I(v, [b, K]) : K();
    },
    leave(b, v) {
      const C = String(e.key);
      if (b[is] && b[is](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return v();
      N(f, [b]);
      let R = !1;
      const V = b[jt] = (K) => {
        R || (R = !0, v(), K ? N(y, [b]) : N(E, [b]), b[jt] = void 0, _[C] === e && delete _[C]);
      };
      _[C] = e, p ? I(p, [b, V]) : V();
    },
    clone(b) {
      return Kn(b, t, n, i);
    }
  };
  return w;
}
function mr(e) {
  if (ei(e))
    return e = rt(e), e.children = null, e;
}
function $l(e) {
  return ei(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    h.NODE_ENV !== "production" && e.component ? e.component.subTree : e.children ? e.children[0] : void 0
  ) : e;
}
function Sn(e, t) {
  e.shapeFlag & 6 && e.component ? Sn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Xs(e, t = !1, n) {
  let i = [], s = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === Ce ? (o.patchFlag & 128 && s++, i = i.concat(
      Xs(o.children, t, l)
    )) : (t || o.type !== ve) && i.push(l != null ? rt(o, { key: l }) : o);
  }
  if (s > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function $o(e, t) {
  return J(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ie({ name: e.name }, t, { setup: e })
  ) : e;
}
const Nn = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wp(e) {
  J(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: i,
    delay: s = 200,
    timeout: r,
    // undefined = never times out
    suspensible: o = !0,
    onError: l
  } = e;
  let c = null, a, u = 0;
  const f = () => (u++, c = null, p()), p = () => {
    let E;
    return c || (E = c = t().catch((y) => {
      if (y = y instanceof Error ? y : new Error(String(y)), l)
        return new Promise((T, P) => {
          l(y, () => T(f()), () => P(y), u + 1);
        });
      throw y;
    }).then((y) => {
      if (E !== c && c)
        return c;
      if (h.NODE_ENV !== "production" && !y && D(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), h.NODE_ENV !== "production" && y && !oe(y) && !J(y))
        throw new Error(`Invalid async component load result: ${y}`);
      return a = y, y;
    }));
  };
  return /* @__PURE__ */ $o({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    get __asyncResolved() {
      return a;
    },
    setup() {
      const E = be;
      if (a)
        return () => gr(a, E);
      const y = (S) => {
        c = null, cn(
          S,
          E,
          13,
          !i
        );
      };
      if (o && E.suspense || qi)
        return p().then((S) => () => gr(S, E)).catch((S) => (y(S), () => i ? he(i, {
          error: S
        }) : null));
      const T = xt(!1), P = xt(), M = xt(!!s);
      return s && setTimeout(() => {
        M.value = !1;
      }, s), r != null && setTimeout(() => {
        if (!T.value && !P.value) {
          const S = new Error(
            `Async component timed out after ${r}ms.`
          );
          y(S), P.value = S;
        }
      }, r), p().then(() => {
        T.value = !0, E.parent && ei(E.parent.vnode) && (E.parent.effect.dirty = !0, Hi(E.parent.update));
      }).catch((S) => {
        y(S), P.value = S;
      }), () => {
        if (T.value && a)
          return gr(a, E);
        if (P.value && i)
          return he(i, {
            error: P.value
          });
        if (n && !M.value)
          return he(n);
      };
    }
  });
}
function gr(e, t) {
  const { ref: n, props: i, children: s, ce: r } = t.vnode, o = he(e, i, s);
  return o.ref = n, o.ce = r, delete t.vnode.ce, o;
}
const ei = (e) => e.type.__isKeepAlive, Vp = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(e, { slots: t }) {
    const n = Mt(), i = n.ctx;
    if (!i.renderer)
      return () => {
        const S = t.default && t.default();
        return S && S.length === 1 ? S[0] : S;
      };
    const s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
    let o = null;
    h.NODE_ENV !== "production" && (n.__v_cache = s);
    const l = n.suspense, {
      renderer: {
        p: c,
        m: a,
        um: u,
        o: { createElement: f }
      }
    } = i, p = f("div");
    i.activate = (S, g, _, N, I) => {
      const w = S.component;
      a(S, g, _, 0, l), c(
        w.vnode,
        S,
        g,
        _,
        w,
        l,
        N,
        S.slotScopeIds,
        I
      ), Re(() => {
        w.isDeactivated = !1, w.a && Wt(w.a);
        const b = S.props && S.props.onVnodeMounted;
        b && qe(b, w.parent, S);
      }, l), h.NODE_ENV !== "production" && kr(w);
    }, i.deactivate = (S) => {
      const g = S.component;
      a(S, p, null, 1, l), Re(() => {
        g.da && Wt(g.da);
        const _ = S.props && S.props.onVnodeUnmounted;
        _ && qe(_, g.parent, S), g.isDeactivated = !0;
      }, l), h.NODE_ENV !== "production" && kr(g);
    };
    function E(S) {
      Er(S), u(S, n, l, !0);
    }
    function y(S) {
      s.forEach((g, _) => {
        const N = ki(g.type);
        N && (!S || !S(N)) && T(_);
      });
    }
    function T(S) {
      const g = s.get(S);
      !o || !at(g, o) ? E(g) : o && Er(o), s.delete(S), r.delete(S);
    }
    mi(
      () => [e.include, e.exclude],
      ([S, g]) => {
        S && y((_) => ci(S, _)), g && y((_) => !ci(g, _));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let P = null;
    const M = () => {
      P != null && s.set(P, yr(n.subTree));
    };
    return ti(M), Qs(M), er(() => {
      s.forEach((S) => {
        const { subTree: g, suspense: _ } = n, N = yr(g);
        if (S.type === N.type && S.key === N.key) {
          Er(N);
          const I = N.component.da;
          I && Re(I, _);
          return;
        }
        E(S);
      });
    }), () => {
      if (P = null, !t.default)
        return null;
      const S = t.default(), g = S[0];
      if (S.length > 1)
        return h.NODE_ENV !== "production" && D("KeepAlive should contain exactly one component child."), o = null, S;
      if (!kt(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
        return o = null, g;
      let _ = yr(g);
      const N = _.type, I = ki(
        Nn(_) ? _.type.__asyncResolved || {} : N
      ), { include: w, exclude: b, max: v } = e;
      if (w && (!I || !ci(w, I)) || b && I && ci(b, I))
        return o = _, g;
      const C = _.key == null ? N : _.key, R = s.get(C);
      return _.el && (_ = rt(_), g.shapeFlag & 128 && (g.ssContent = _)), P = C, R ? (_.el = R.el, _.component = R.component, _.transition && Sn(_, _.transition), _.shapeFlag |= 512, r.delete(C), r.add(C)) : (r.add(C), v && r.size > parseInt(v, 10) && T(r.values().next().value)), _.shapeFlag |= 256, o = _, Na(g.type) ? g : _;
    };
  }
}, xp = Vp;
function ci(e, t) {
  return j(e) ? e.some((n) => ci(n, t)) : Z(e) ? e.split(",").includes(t) : ku(e) ? e.test(t) : !1;
}
function xa(e, t) {
  Ia(e, "a", t);
}
function Aa(e, t) {
  Ia(e, "da", t);
}
function Ia(e, t, n = be) {
  const i = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Zs(t, i, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      ei(s.parent.vnode) && Ap(i, t, n, s), s = s.parent;
  }
}
function Ap(e, t, n, i) {
  const s = Zs(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  tr(() => {
    ao(i[t], s);
  }, n);
}
function Er(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function yr(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Zs(e, t, n = be, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      on();
      const l = Tn(n), c = Xe(t, n, e, o);
      return l(), ln(), c;
    });
    return i ? s.unshift(r) : s.push(r), r;
  } else if (h.NODE_ENV !== "production") {
    const s = gt(Ws[e].replace(/ hook$/, ""));
    D(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Rt = (e) => (t, n = be) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!qi || e === "sp") && Zs(e, (...i) => t(...i), n)
), ka = Rt("bm"), ti = Rt("m"), Ra = Rt("bu"), Qs = Rt("u"), er = Rt("bum"), tr = Rt("um"), Ma = Rt("sp"), Pa = Rt(
  "rtg"
), $a = Rt(
  "rtc"
);
function La(e, t = be) {
  Zs("ec", e, t);
}
function Ip(e, t, n, i) {
  let s;
  const r = n && n[i];
  if (j(e) || Z(e)) {
    s = new Array(e.length);
    for (let o = 0, l = e.length; o < l; o++)
      s[o] = t(e[o], o, void 0, r && r[o]);
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && D(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let o = 0; o < e; o++)
      s[o] = t(o + 1, o, void 0, r && r[o]);
  } else if (oe(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (o, l) => t(o, l, void 0, r && r[l])
      );
    else {
      const o = Object.keys(e);
      s = new Array(o.length);
      for (let l = 0, c = o.length; l < c; l++) {
        const a = o[l];
        s[l] = t(e[a], a, l, r && r[l]);
      }
    }
  else
    s = [];
  return n && (n[i] = s), s;
}
function kp(e, t) {
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (j(i))
      for (let s = 0; s < i.length; s++)
        e[i[s].name] = i[s].fn;
    else
      i && (e[i.name] = i.key ? (...s) => {
        const r = i.fn(...s);
        return r && (r.key = i.key), r;
      } : i.fn);
  }
  return e;
}
function Rp(e, t, n = {}, i, s) {
  if (ge.isCE || ge.parent && Nn(ge.parent) && ge.parent.isCE)
    return t !== "default" && (n.name = t), he("slot", n, i && i());
  let r = e[t];
  h.NODE_ENV !== "production" && r && r.length > 1 && (D(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), Ki();
  const o = r && Fa(r(n)), l = Ho(
    Ce,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      o && o.key || `_${t}`
    },
    o || (i ? i() : []),
    o && e._ === 1 ? 64 : -2
  );
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
}
function Fa(e) {
  return e.some((t) => kt(t) ? !(t.type === ve || t.type === Ce && !Fa(t.children)) : !0) ? e : null;
}
function Mp(e, t) {
  const n = {};
  if (h.NODE_ENV !== "production" && !oe(e))
    return D("v-on with no argument expects an object value."), n;
  for (const i in e)
    n[t && /[A-Z]/.test(i) ? `on:${i}` : gt(i)] = e[i];
  return n;
}
const Pr = (e) => e ? df(e) ? ir(e) || e.proxy : Pr(e.parent) : null, bn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? dn(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? dn(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? dn(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? dn(e.refs) : e.refs,
    $parent: (e) => Pr(e.parent),
    $root: (e) => Pr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Fo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Hi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Gs.bind(e.proxy)),
    $watch: (e) => Cp.bind(e)
  })
), Lo = (e) => e === "_" || e === "$", _r = (e, t) => e !== le && !e.__isScriptSetup && se(e, t), gi = {
  get({ _: e }, t) {
    const { ctx: n, setupState: i, data: s, props: r, accessCache: o, type: l, appContext: c } = e;
    if (h.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const E = o[t];
      if (E !== void 0)
        switch (E) {
          case 1:
            return i[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (_r(i, t))
          return o[t] = 1, i[t];
        if (s !== le && se(s, t))
          return o[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && se(a, t)
        )
          return o[t] = 3, r[t];
        if (n !== le && se(n, t))
          return o[t] = 4, n[t];
        $r && (o[t] = 0);
      }
    }
    const u = bn[t];
    let f, p;
    if (u)
      return t === "$attrs" ? (Me(e, "get", t), h.NODE_ENV !== "production" && bs()) : h.NODE_ENV !== "production" && t === "$slots" && Me(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== le && se(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, se(p, t)
    )
      return p[t];
    h.NODE_ENV !== "production" && ge && (!Z(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== le && Lo(t[0]) && se(s, t) ? D(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ge && D(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: s, ctx: r } = e;
    return _r(s, t) ? (s[t] = n, !0) : h.NODE_ENV !== "production" && s.__isScriptSetup && se(s, t) ? (D(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : i !== le && se(i, t) ? (i[t] = n, !0) : se(e.props, t) ? (h.NODE_ENV !== "production" && D(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && D(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (h.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: s, propsOptions: r }
  }, o) {
    let l;
    return !!n[o] || e !== le && se(e, o) || _r(t, o) || (l = r[0]) && se(l, o) || se(i, o) || se(bn, o) || se(s.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (gi.ownKeys = (e) => (D(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Pp = /* @__PURE__ */ ie(
  {},
  gi,
  {
    get(e, t) {
      if (t !== Symbol.unscopables)
        return gi.get(e, t, e);
    },
    has(e, t) {
      const n = t[0] !== "_" && !Lu(t);
      return h.NODE_ENV !== "production" && !n && gi.has(e, t) && D(
        `Property ${JSON.stringify(
          t
        )} should not start with _ which is a reserved prefix for Vue internals.`
      ), n;
    }
  }
);
function $p(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(bn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => bn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: pe
    });
  }), t;
}
function Lp(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((i) => {
    Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i],
      set: pe
    });
  });
}
function Fp(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Q(n)).forEach((i) => {
    if (!n.__isScriptSetup) {
      if (Lo(i[0])) {
        D(
          `setup() return property ${JSON.stringify(
            i
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, i, {
        enumerable: !0,
        configurable: !0,
        get: () => n[i],
        set: pe
      });
    }
  });
}
const xn = (e) => D(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function Bp() {
  return h.NODE_ENV !== "production" && xn("defineProps"), null;
}
function Hp() {
  return h.NODE_ENV !== "production" && xn("defineEmits"), null;
}
function jp(e) {
  h.NODE_ENV !== "production" && xn("defineExpose");
}
function Up(e) {
  h.NODE_ENV !== "production" && xn("defineOptions");
}
function Kp() {
  return h.NODE_ENV !== "production" && xn("defineSlots"), null;
}
function qp() {
  h.NODE_ENV !== "production" && xn("defineModel");
}
function Wp(e, t) {
  return h.NODE_ENV !== "production" && xn("withDefaults"), null;
}
function Gp() {
  return Ba().slots;
}
function zp() {
  return Ba().attrs;
}
function Ba() {
  const e = Mt();
  return h.NODE_ENV !== "production" && !e && D("useContext() called without active instance."), e.setupContext || (e.setupContext = gf(e));
}
function Ai(e) {
  return j(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Jp(e, t) {
  const n = Ai(e);
  for (const i in t) {
    if (i.startsWith("__skip"))
      continue;
    let s = n[i];
    s ? j(s) || J(s) ? s = n[i] = { type: s, default: t[i] } : s.default = t[i] : s === null ? s = n[i] = { default: t[i] } : h.NODE_ENV !== "production" && D(`props default key "${i}" has no corresponding declaration.`), s && t[`__skip_${i}`] && (s.skipFactory = !0);
  }
  return n;
}
function Yp(e, t) {
  return !e || !t ? e || t : j(e) && j(t) ? e.concat(t) : ie({}, Ai(e), Ai(t));
}
function Xp(e, t) {
  const n = {};
  for (const i in e)
    t.includes(i) || Object.defineProperty(n, i, {
      enumerable: !0,
      get: () => e[i]
    });
  return n;
}
function Zp(e) {
  const t = Mt();
  h.NODE_ENV !== "production" && !t && D(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return qr(), Fs(n) && (n = n.catch((i) => {
    throw Tn(t), i;
  })), [n, () => Tn(t)];
}
function Qp() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? D(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let $r = !0;
function eh(e) {
  const t = Fo(e), n = e.proxy, i = e.ctx;
  $r = !1, t.beforeCreate && Ll(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: o,
    watch: l,
    provide: c,
    inject: a,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: p,
    beforeUpdate: E,
    updated: y,
    activated: T,
    deactivated: P,
    beforeDestroy: M,
    beforeUnmount: S,
    destroyed: g,
    unmounted: _,
    render: N,
    renderTracked: I,
    renderTriggered: w,
    errorCaptured: b,
    serverPrefetch: v,
    // public API
    expose: C,
    inheritAttrs: R,
    // assets
    components: V,
    directives: K,
    filters: Y
  } = t, te = h.NODE_ENV !== "production" ? Qp() : null;
  if (h.NODE_ENV !== "production") {
    const [z] = e.propsOptions;
    if (z)
      for (const q in z)
        te("Props", q);
  }
  if (a && th(a, i, te), o)
    for (const z in o) {
      const q = o[z];
      J(q) ? (h.NODE_ENV !== "production" ? Object.defineProperty(i, z, {
        value: q.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : i[z] = q.bind(n), h.NODE_ENV !== "production" && te("Methods", z)) : h.NODE_ENV !== "production" && D(
        `Method "${z}" has type "${typeof q}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    h.NODE_ENV !== "production" && !J(s) && D(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const z = s.call(n, n);
    if (h.NODE_ENV !== "production" && Fs(z) && D(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !oe(z))
      h.NODE_ENV !== "production" && D("data() should return an object.");
    else if (e.data = Ks(z), h.NODE_ENV !== "production")
      for (const q in z)
        te("Data", q), Lo(q[0]) || Object.defineProperty(i, q, {
          configurable: !0,
          enumerable: !0,
          get: () => z[q],
          set: pe
        });
  }
  if ($r = !0, r)
    for (const z in r) {
      const q = r[z], we = J(q) ? q.bind(n, n) : J(q.get) ? q.get.bind(n, n) : pe;
      h.NODE_ENV !== "production" && we === pe && D(`Computed property "${z}" has no getter.`);
      const Qe = !J(q) && J(q.set) ? q.set.bind(n) : h.NODE_ENV !== "production" ? () => {
        D(
          `Write operation failed: computed property "${z}" is readonly.`
        );
      } : pe, ot = yf({
        get: we,
        set: Qe
      });
      Object.defineProperty(i, z, {
        enumerable: !0,
        configurable: !0,
        get: () => ot.value,
        set: (An) => ot.value = An
      }), h.NODE_ENV !== "production" && te("Computed", z);
    }
  if (l)
    for (const z in l)
      Ha(l[z], i, n, z);
  if (c) {
    const z = J(c) ? c.call(n) : c;
    Reflect.ownKeys(z).forEach((q) => {
      Ua(q, z[q]);
    });
  }
  u && Ll(u, e, "c");
  function W(z, q) {
    j(q) ? q.forEach((we) => z(we.bind(n))) : q && z(q.bind(n));
  }
  if (W(ka, f), W(ti, p), W(Ra, E), W(Qs, y), W(xa, T), W(Aa, P), W(La, b), W($a, I), W(Pa, w), W(er, S), W(tr, _), W(Ma, v), j(C))
    if (C.length) {
      const z = e.exposed || (e.exposed = {});
      C.forEach((q) => {
        Object.defineProperty(z, q, {
          get: () => n[q],
          set: (we) => n[q] = we
        });
      });
    } else
      e.exposed || (e.exposed = {});
  N && e.render === pe && (e.render = N), R != null && (e.inheritAttrs = R), V && (e.components = V), K && (e.directives = K);
}
function th(e, t, n = pe) {
  j(e) && (e = Lr(e));
  for (const i in e) {
    const s = e[i];
    let r;
    oe(s) ? "default" in s ? r = Ei(
      s.from || i,
      s.default,
      !0
    ) : r = Ei(s.from || i) : r = Ei(s), Oe(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r, h.NODE_ENV !== "production" && n("Inject", i);
  }
}
function Ll(e, t, n) {
  Xe(
    j(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ha(e, t, n, i) {
  const s = i.includes(".") ? Ta(n, i) : () => n[i];
  if (Z(e)) {
    const r = t[e];
    J(r) ? mi(s, r) : h.NODE_ENV !== "production" && D(`Invalid watch handler specified by key "${e}"`, r);
  } else if (J(e))
    mi(s, e.bind(n));
  else if (oe(e))
    if (j(e))
      e.forEach((r) => Ha(r, t, n, i));
    else {
      const r = J(e.handler) ? e.handler.bind(n) : t[e.handler];
      J(r) ? mi(s, r, e) : h.NODE_ENV !== "production" && D(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    h.NODE_ENV !== "production" && D(`Invalid watch option: "${i}"`, e);
}
function Fo(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !s.length && !n && !i ? c = t : (c = {}, s.length && s.forEach(
    (a) => Os(c, a, o, !0)
  ), Os(c, t, o)), oe(t) && r.set(t, c), c;
}
function Os(e, t, n, i = !1) {
  const { mixins: s, extends: r } = t;
  r && Os(e, r, n, !0), s && s.forEach(
    (o) => Os(e, o, n, !0)
  );
  for (const o in t)
    if (i && o === "expose")
      h.NODE_ENV !== "production" && D(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = nh[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const nh = {
  data: Fl,
  props: Bl,
  emits: Bl,
  // objects
  methods: ai,
  computed: ai,
  // lifecycle
  beforeCreate: je,
  created: je,
  beforeMount: je,
  mounted: je,
  beforeUpdate: je,
  updated: je,
  beforeDestroy: je,
  beforeUnmount: je,
  destroyed: je,
  unmounted: je,
  activated: je,
  deactivated: je,
  errorCaptured: je,
  serverPrefetch: je,
  // assets
  components: ai,
  directives: ai,
  // watch
  watch: sh,
  // provide / inject
  provide: Fl,
  inject: ih
};
function Fl(e, t) {
  return t ? e ? function() {
    return ie(
      J(e) ? e.call(this, this) : e,
      J(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ih(e, t) {
  return ai(Lr(e), Lr(t));
}
function Lr(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ai(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Bl(e, t) {
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    Ai(e),
    Ai(t ?? {})
  ) : t;
}
function sh(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ie(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = je(e[i], t[i]);
  return n;
}
function ja() {
  return {
    app: null,
    config: {
      isNativeTag: ui,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let rh = 0;
function oh(e, t) {
  return function(i, s = null) {
    J(i) || (i = ie({}, i)), s != null && !oe(s) && (h.NODE_ENV !== "production" && D("root props passed to app.mount() must be an object."), s = null);
    const r = ja(), o = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const c = r.app = {
      _uid: rh++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Jr,
      get config() {
        return r.config;
      },
      set config(a) {
        h.NODE_ENV !== "production" && D(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(a, ...u) {
        return o.has(a) ? h.NODE_ENV !== "production" && D("Plugin has already been applied to target app.") : a && J(a.install) ? (o.add(a), a.install(c, ...u)) : J(a) ? (o.add(a), a(c, ...u)) : h.NODE_ENV !== "production" && D(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(a) {
        return r.mixins.includes(a) ? h.NODE_ENV !== "production" && D(
          "Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")
        ) : r.mixins.push(a), c;
      },
      component(a, u) {
        return h.NODE_ENV !== "production" && Wr(a, r.config), u ? (h.NODE_ENV !== "production" && r.components[a] && D(`Component "${a}" has already been registered in target app.`), r.components[a] = u, c) : r.components[a];
      },
      directive(a, u) {
        return h.NODE_ENV !== "production" && Da(a), u ? (h.NODE_ENV !== "production" && r.directives[a] && D(`Directive "${a}" has already been registered in target app.`), r.directives[a] = u, c) : r.directives[a];
      },
      mount(a, u, f) {
        if (l)
          h.NODE_ENV !== "production" && D(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && a.__vue_app__ && D(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = he(i, s);
          return p.appContext = r, f === !0 ? f = "svg" : f === !1 && (f = void 0), h.NODE_ENV !== "production" && (r.reload = () => {
            e(
              rt(p),
              a,
              f
            );
          }), u && t ? t(p, a) : e(p, a, f), l = !0, c._container = a, a.__vue_app__ = c, h.NODE_ENV !== "production" && (c._instance = p.component, Qd(c, Jr)), ir(p.component) || p.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, c._container), h.NODE_ENV !== "production" && (c._instance = null, ep(c)), delete c._container.__vue_app__) : h.NODE_ENV !== "production" && D("Cannot unmount an app that is not mounted.");
      },
      provide(a, u) {
        return h.NODE_ENV !== "production" && a in r.provides && D(
          `App already provides property with key "${String(a)}". It will be overwritten with the new value.`
        ), r.provides[a] = u, c;
      },
      runWithContext(a) {
        const u = Bn;
        Bn = c;
        try {
          return a();
        } finally {
          Bn = u;
        }
      }
    };
    return c;
  };
}
let Bn = null;
function Ua(e, t) {
  if (!be)
    h.NODE_ENV !== "production" && D("provide() can only be used inside setup().");
  else {
    let n = be.provides;
    const i = be.parent && be.parent.provides;
    i === n && (n = be.provides = Object.create(i)), n[e] = t;
  }
}
function Ei(e, t, n = !1) {
  const i = be || ge;
  if (i || Bn) {
    const s = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : Bn._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && J(t) ? t.call(i && i.proxy) : t;
    h.NODE_ENV !== "production" && D(`injection "${String(e)}" not found.`);
  } else
    h.NODE_ENV !== "production" && D("inject() can only be used inside setup() or functional components.");
}
function lh() {
  return !!(be || ge || Bn);
}
function ch(e, t, n, i = !1) {
  const s = {}, r = {};
  Es(r, nr, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Ka(e, t, s, r);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  h.NODE_ENV !== "production" && Wa(t || {}, s, e), n ? e.props = i ? s : oa(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function ah(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function fh(e, t, n, i) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = Q(s), [c] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(h.NODE_ENV !== "production" && ah(e)) && (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let p = u[f];
        if (zs(e.emitsOptions, p))
          continue;
        const E = t[p];
        if (c)
          if (se(r, p))
            E !== r[p] && (r[p] = E, a = !0);
          else {
            const y = Ee(p);
            s[y] = Fr(
              c,
              l,
              y,
              E,
              e,
              !1
            );
          }
        else
          E !== r[p] && (r[p] = E, a = !0);
      }
    }
  } else {
    Ka(e, t, s, r) && (a = !0);
    let u;
    for (const f in l)
      (!t || // for camelCase
      !se(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = $e(f)) === f || !se(t, u))) && (c ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (s[f] = Fr(
        c,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete s[f]);
    if (r !== l)
      for (const f in r)
        (!t || !se(t, f)) && (delete r[f], a = !0);
  }
  a && _t(e, "set", "$attrs"), h.NODE_ENV !== "production" && Wa(t || {}, s, e);
}
function Ka(e, t, n, i) {
  const [s, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Jt(c))
        continue;
      const a = t[c];
      let u;
      s && se(s, u = Ee(c)) ? !r || !r.includes(u) ? n[u] = a : (l || (l = {}))[u] = a : zs(e.emitsOptions, c) || (!(c in i) || a !== i[c]) && (i[c] = a, o = !0);
    }
  if (r) {
    const c = Q(n), a = l || le;
    for (let u = 0; u < r.length; u++) {
      const f = r[u];
      n[f] = Fr(
        s,
        c,
        f,
        a[f],
        e,
        !se(a, f)
      );
    }
  }
  return o;
}
function Fr(e, t, n, i, s, r) {
  const o = e[n];
  if (o != null) {
    const l = se(o, "default");
    if (l && i === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && J(c)) {
        const { propsDefaults: a } = s;
        if (n in a)
          i = a[n];
        else {
          const u = Tn(s);
          i = a[n] = c.call(
            null,
            t
          ), u();
        }
      } else
        i = c;
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === $e(n)) && (i = !0));
  }
  return i;
}
function qa(e, t, n = !1) {
  const i = t.propsCache, s = i.get(e);
  if (s)
    return s;
  const r = e.props, o = {}, l = [];
  let c = !1;
  if (!J(e)) {
    const u = (f) => {
      c = !0;
      const [p, E] = qa(f, t, !0);
      ie(o, p), E && l.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return oe(e) && i.set(e, Pn), Pn;
  if (j(r))
    for (let u = 0; u < r.length; u++) {
      h.NODE_ENV !== "production" && !Z(r[u]) && D("props must be strings when using array syntax.", r[u]);
      const f = Ee(r[u]);
      Hl(f) && (o[f] = le);
    }
  else if (r) {
    h.NODE_ENV !== "production" && !oe(r) && D("invalid props options", r);
    for (const u in r) {
      const f = Ee(u);
      if (Hl(f)) {
        const p = r[u], E = o[f] = j(p) || J(p) ? { type: p } : ie({}, p);
        if (E) {
          const y = Ul(Boolean, E.type), T = Ul(String, E.type);
          E[
            0
            /* shouldCast */
          ] = y > -1, E[
            1
            /* shouldCastTrue */
          ] = T < 0 || y < T, (y > -1 || se(E, "default")) && l.push(f);
        }
      }
    }
  }
  const a = [o, l];
  return oe(e) && i.set(e, a), a;
}
function Hl(e) {
  return e[0] !== "$" && !Jt(e) ? !0 : (h.NODE_ENV !== "production" && D(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Br(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function jl(e, t) {
  return Br(e) === Br(t);
}
function Ul(e, t) {
  return j(t) ? t.findIndex((n) => jl(n, e)) : J(t) && jl(t, e) ? 0 : -1;
}
function Wa(e, t, n) {
  const i = Q(t), s = n.propsOptions[0];
  for (const r in s) {
    let o = s[r];
    o != null && uh(
      r,
      i[r],
      o,
      h.NODE_ENV !== "production" ? dn(i) : i,
      !se(e, r) && !se(e, $e(r))
    );
  }
}
function uh(e, t, n, i, s) {
  const { type: r, required: o, validator: l, skipCheck: c } = n;
  if (o && s) {
    D('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !o)) {
    if (r != null && r !== !0 && !c) {
      let a = !1;
      const u = j(r) ? r : [r], f = [];
      for (let p = 0; p < u.length && !a; p++) {
        const { valid: E, expectedType: y } = ph(t, u[p]);
        f.push(y || ""), a = E;
      }
      if (!a) {
        D(hh(e, t, f));
        return;
      }
    }
    l && !l(t, i) && D('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const dh = /* @__PURE__ */ Ae(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function ph(e, t) {
  let n;
  const i = Br(t);
  if (dh(i)) {
    const s = typeof e;
    n = s === i.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    i === "Object" ? n = oe(e) : i === "Array" ? n = j(e) : i === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: i
  };
}
function hh(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let i = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(bt).join(" | ")}`;
  const s = n[0], r = fo(t), o = Kl(t, s), l = Kl(t, r);
  return n.length === 1 && ql(s) && !mh(s, r) && (i += ` with value ${o}`), i += `, got ${r} `, ql(r) && (i += `with value ${l}.`), i;
}
function Kl(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ql(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function mh(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ga = (e) => e[0] === "_" || e === "$stable", Bo = (e) => j(e) ? e.map(We) : [We(e)], gh = (e, t, n) => {
  if (t._n)
    return t;
  const i = xo((...s) => (h.NODE_ENV !== "production" && be && (!n || n.root === be.root) && D(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Bo(t(...s))), n);
  return i._c = !1, i;
}, za = (e, t, n) => {
  const i = e._ctx;
  for (const s in e) {
    if (Ga(s))
      continue;
    const r = e[s];
    if (J(r))
      t[s] = gh(s, r, i);
    else if (r != null) {
      h.NODE_ENV !== "production" && D(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const o = Bo(r);
      t[s] = () => o;
    }
  }
}, Ja = (e, t) => {
  h.NODE_ENV !== "production" && !ei(e.vnode) && D(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Bo(t);
  e.slots.default = () => n;
}, Eh = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = Q(t), Es(t, "_", n)) : za(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Ja(e, t);
  Es(e.slots, nr, 1);
}, yh = (e, t, n) => {
  const { vnode: i, slots: s } = e;
  let r = !0, o = le;
  if (i.shapeFlag & 32) {
    const l = t._;
    l ? h.NODE_ENV !== "production" && Qt ? (ie(s, t), _t(e, "set", "$slots")) : n && l === 1 ? r = !1 : (ie(s, t), !n && l === 1 && delete s._) : (r = !t.$stable, za(t, s)), o = t;
  } else
    t && (Ja(e, t), o = { default: 1 });
  if (r)
    for (const l in s)
      !Ga(l) && o[l] == null && delete s[l];
};
function Ss(e, t, n, i, s = !1) {
  if (j(e)) {
    e.forEach(
      (p, E) => Ss(
        p,
        t && (j(t) ? t[E] : t),
        n,
        i,
        s
      )
    );
    return;
  }
  if (Nn(i) && !s)
    return;
  const r = i.shapeFlag & 4 ? ir(i.component) || i.component.proxy : i.el, o = s ? null : r, { i: l, r: c } = e;
  if (h.NODE_ENV !== "production" && !l) {
    D(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const a = t && t.r, u = l.refs === le ? l.refs = {} : l.refs, f = l.setupState;
  if (a != null && a !== c && (Z(a) ? (u[a] = null, se(f, a) && (f[a] = null)) : Oe(a) && (a.value = null)), J(c))
    Nt(c, l, 12, [o, u]);
  else {
    const p = Z(c), E = Oe(c);
    if (p || E) {
      const y = () => {
        if (e.f) {
          const T = p ? se(f, c) ? f[c] : u[c] : c.value;
          s ? j(T) && ao(T, r) : j(T) ? T.includes(r) || T.push(r) : p ? (u[c] = [r], se(f, c) && (f[c] = u[c])) : (c.value = [r], e.k && (u[e.k] = c.value));
        } else
          p ? (u[c] = o, se(f, c) && (f[c] = o)) : E ? (c.value = o, e.k && (u[e.k] = o)) : h.NODE_ENV !== "production" && D("Invalid template ref type:", c, `(${typeof c})`);
      };
      o ? (y.id = -1, Re(y, n)) : y();
    } else
      h.NODE_ENV !== "production" && D("Invalid template ref type:", c, `(${typeof c})`);
  }
}
let Ot = !1;
const _h = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Nh = (e) => e.namespaceURI.includes("MathML"), ss = (e) => {
  if (_h(e))
    return "svg";
  if (Nh(e))
    return "mathml";
}, ii = (e) => e.nodeType === 8;
function bh(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: i,
      createText: s,
      nextSibling: r,
      parentNode: o,
      remove: l,
      insert: c,
      createComment: a
    }
  } = e, u = (g, _) => {
    if (!_.hasChildNodes()) {
      h.NODE_ENV !== "production" && D(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, g, _), Ns(), _._vnode = g;
      return;
    }
    Ot = !1, f(_.firstChild, g, null, null, null), Ns(), _._vnode = g, Ot && console.error("Hydration completed but contains mismatches.");
  }, f = (g, _, N, I, w, b = !1) => {
    const v = ii(g) && g.data === "[", C = () => T(
      g,
      _,
      N,
      I,
      w,
      v
    ), { type: R, ref: V, shapeFlag: K, patchFlag: Y } = _;
    let te = g.nodeType;
    _.el = g, h.NODE_ENV !== "production" && ("__vnode" in g || Object.defineProperty(g, "__vnode", {
      value: _,
      enumerable: !1
    }), "__vueParentComponent" in g || Object.defineProperty(g, "__vueParentComponent", {
      value: N,
      enumerable: !1
    })), Y === -2 && (b = !1, _.dynamicChildren = null);
    let W = null;
    switch (R) {
      case sn:
        te !== 3 ? _.children === "" ? (c(_.el = s(""), o(g), g), W = g) : W = C() : (g.data !== _.children && (Ot = !0, h.NODE_ENV !== "production" && D(
          "Hydration text mismatch in",
          g.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            g.data
          )}
  - expected on client: ${JSON.stringify(_.children)}`
        ), g.data = _.children), W = r(g));
        break;
      case ve:
        S(g) ? (W = r(g), M(
          _.el = g.content.firstChild,
          g,
          N
        )) : te !== 8 || v ? W = C() : W = r(g);
        break;
      case en:
        if (v && (g = r(g), te = g.nodeType), te === 1 || te === 3) {
          W = g;
          const z = !_.children.length;
          for (let q = 0; q < _.staticCount; q++)
            z && (_.children += W.nodeType === 1 ? W.outerHTML : W.data), q === _.staticCount - 1 && (_.anchor = W), W = r(W);
          return v ? r(W) : W;
        } else
          C();
        break;
      case Ce:
        v ? W = y(
          g,
          _,
          N,
          I,
          w,
          b
        ) : W = C();
        break;
      default:
        if (K & 1)
          (te !== 1 || _.type.toLowerCase() !== g.tagName.toLowerCase()) && !S(g) ? W = C() : W = p(
            g,
            _,
            N,
            I,
            w,
            b
          );
        else if (K & 6) {
          _.slotScopeIds = w;
          const z = o(g);
          if (v ? W = P(g) : ii(g) && g.data === "teleport start" ? W = P(g, g.data, "teleport end") : W = r(g), t(
            _,
            z,
            null,
            N,
            I,
            ss(z),
            b
          ), Nn(_)) {
            let q;
            v ? (q = he(Ce), q.anchor = W ? W.previousSibling : z.lastChild) : q = g.nodeType === 3 ? jo("") : he("div"), q.el = g, _.component.subTree = q;
          }
        } else
          K & 64 ? te !== 8 ? W = C() : W = _.type.hydrate(
            g,
            _,
            N,
            I,
            w,
            b,
            e,
            E
          ) : K & 128 ? W = _.type.hydrate(
            g,
            _,
            N,
            I,
            ss(o(g)),
            w,
            b,
            e,
            f
          ) : h.NODE_ENV !== "production" && D("Invalid HostVNode type:", R, `(${typeof R})`);
    }
    return V != null && Ss(V, null, I, _), W;
  }, p = (g, _, N, I, w, b) => {
    b = b || !!_.dynamicChildren;
    const { type: v, props: C, patchFlag: R, shapeFlag: V, dirs: K, transition: Y } = _, te = v === "input" || v === "option";
    if (h.NODE_ENV !== "production" || te || R !== -1) {
      K && mt(_, null, N, "created");
      let W = !1;
      if (S(g)) {
        W = Qa(I, Y) && N && N.vnode.props && N.vnode.props.appear;
        const q = g.content.firstChild;
        W && Y.beforeEnter(q), M(q, g, N), _.el = g = q;
      }
      if (V & 16 && // skip if element has innerHTML / textContent
      !(C && (C.innerHTML || C.textContent))) {
        let q = E(
          g.firstChild,
          _,
          g,
          N,
          I,
          w,
          b
        ), we = !1;
        for (; q; ) {
          Ot = !0, h.NODE_ENV !== "production" && !we && (D(
            "Hydration children mismatch on",
            g,
            `
Server rendered element contains more child nodes than client vdom.`
          ), we = !0);
          const Qe = q;
          q = q.nextSibling, l(Qe);
        }
      } else
        V & 8 && g.textContent !== _.children && (Ot = !0, h.NODE_ENV !== "production" && D(
          "Hydration text content mismatch on",
          g,
          `
  - rendered on server: ${g.textContent}
  - expected on client: ${_.children}`
        ), g.textContent = _.children);
      if (C)
        if (h.NODE_ENV !== "production" || te || !b || R & 48)
          for (const q in C)
            h.NODE_ENV !== "production" && vh(g, q, C[q], _, N) && (Ot = !0), (te && (q.endsWith("value") || q === "indeterminate") || At(q) && !Jt(q) || // force hydrate v-bind with .prop modifiers
            q[0] === ".") && i(
              g,
              q,
              null,
              C[q],
              void 0,
              void 0,
              N
            );
        else
          C.onClick && i(
            g,
            "onClick",
            null,
            C.onClick,
            void 0,
            void 0,
            N
          );
      let z;
      (z = C && C.onVnodeBeforeMount) && qe(z, N, _), K && mt(_, null, N, "beforeMount"), ((z = C && C.onVnodeMounted) || K || W) && ba(() => {
        z && qe(z, N, _), W && Y.enter(g), K && mt(_, null, N, "mounted");
      }, I);
    }
    return g.nextSibling;
  }, E = (g, _, N, I, w, b, v) => {
    v = v || !!_.dynamicChildren;
    const C = _.children, R = C.length;
    let V = !1;
    for (let K = 0; K < R; K++) {
      const Y = v ? C[K] : C[K] = We(C[K]);
      if (g)
        g = f(
          g,
          Y,
          I,
          w,
          b,
          v
        );
      else {
        if (Y.type === sn && !Y.children)
          continue;
        Ot = !0, h.NODE_ENV !== "production" && !V && (D(
          "Hydration children mismatch on",
          N,
          `
Server rendered element contains fewer child nodes than client vdom.`
        ), V = !0), n(
          null,
          Y,
          N,
          null,
          I,
          w,
          ss(N),
          b
        );
      }
    }
    return g;
  }, y = (g, _, N, I, w, b) => {
    const { slotScopeIds: v } = _;
    v && (w = w ? w.concat(v) : v);
    const C = o(g), R = E(
      r(g),
      _,
      C,
      N,
      I,
      w,
      b
    );
    return R && ii(R) && R.data === "]" ? r(_.anchor = R) : (Ot = !0, c(_.anchor = a("]"), C, R), R);
  }, T = (g, _, N, I, w, b) => {
    if (Ot = !0, h.NODE_ENV !== "production" && D(
      `Hydration node mismatch:
- rendered on server:`,
      g,
      g.nodeType === 3 ? "(text)" : ii(g) && g.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      _.type
    ), _.el = null, b) {
      const R = P(g);
      for (; ; ) {
        const V = r(g);
        if (V && V !== R)
          l(V);
        else
          break;
      }
    }
    const v = r(g), C = o(g);
    return l(g), n(
      null,
      _,
      C,
      v,
      N,
      I,
      ss(C),
      w
    ), v;
  }, P = (g, _ = "[", N = "]") => {
    let I = 0;
    for (; g; )
      if (g = r(g), g && ii(g) && (g.data === _ && I++, g.data === N)) {
        if (I === 0)
          return r(g);
        I--;
      }
    return g;
  }, M = (g, _, N) => {
    const I = _.parentNode;
    I && I.replaceChild(g, _);
    let w = N;
    for (; w; )
      w.vnode.el === _ && (w.vnode.el = w.subTree.el = g), w = w.parent;
  }, S = (g) => g.nodeType === 1 && g.tagName.toLowerCase() === "template";
  return [u, f];
}
function vh(e, t, n, i, s) {
  var r;
  let o, l, c, a;
  if (t === "class")
    c = e.getAttribute("class"), a = Vn(n), Oh(Wl(c || ""), Wl(a)) || (o = l = "class");
  else if (t === "style") {
    c = e.getAttribute("style"), a = Z(n) ? n : Uu(Qn(n));
    const u = Gl(c), f = Gl(a);
    if (i.dirs)
      for (const { dir: E, value: y } of i.dirs)
        E.name === "show" && !y && f.set("display", "none");
    const p = s == null ? void 0 : s.subTree;
    if (i === p || (p == null ? void 0 : p.type) === Ce && p.children.includes(i)) {
      const E = (r = s == null ? void 0 : s.getCssVars) == null ? void 0 : r.call(s);
      for (const y in E)
        f.set(`--${y}`, String(E[y]));
    }
    Sh(u, f) || (o = l = "style");
  } else
    (e instanceof SVGElement && Zu(t) || e instanceof HTMLElement && (vl(t) || Xu(t))) && (vl(t) ? (c = e.hasAttribute(t), a = ho(n)) : n == null ? (c = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? c = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? c = e.value : c = !1, a = Qu(n) ? String(n) : !1), c !== a && (o = "attribute", l = t));
  if (o) {
    const u = (E) => E === !1 ? "(not rendered)" : `${l}="${E}"`, f = `Hydration ${o} mismatch on`, p = `
  - rendered on server: ${u(c)}
  - expected on client: ${u(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return D(f, e, p), !0;
  }
  return !1;
}
function Wl(e) {
  return new Set(e.trim().split(/\s+/));
}
function Oh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Gl(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.split(";")) {
    let [i, s] = n.split(":");
    i = i == null ? void 0 : i.trim(), s = s == null ? void 0 : s.trim(), i && s && t.set(i, s);
  }
  return t;
}
function Sh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, i] of e)
    if (i !== t.get(n))
      return !1;
  return !0;
}
let si, Gt;
function St(e, t) {
  e.appContext.config.performance && Cs() && Gt.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && ip(e, t, Cs() ? Gt.now() : Date.now());
}
function Ct(e, t) {
  if (e.appContext.config.performance && Cs()) {
    const n = `vue-${t}-${e.uid}`, i = n + ":end";
    Gt.mark(i), Gt.measure(
      `<${sr(e, e.type)}> ${t}`,
      n,
      i
    ), Gt.clearMarks(n), Gt.clearMarks(i);
  }
  h.NODE_ENV !== "production" && sp(e, t, Cs() ? Gt.now() : Date.now());
}
function Cs() {
  return si !== void 0 || (typeof window < "u" && window.performance ? (si = !0, Gt = window.performance) : si = !1), si;
}
function Ch() {
  const e = [];
  if (h.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Re = ba;
function Ya(e) {
  return Za(e);
}
function Xa(e) {
  return Za(e, bh);
}
function Za(e, t) {
  Ch();
  const n = po();
  n.__VUE__ = !0, h.NODE_ENV !== "production" && wo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: i,
    remove: s,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: c,
    setText: a,
    setElementText: u,
    parentNode: f,
    nextSibling: p,
    setScopeId: E = pe,
    insertStaticContent: y
  } = e, T = (d, m, O, x = null, A = null, L = null, H = void 0, $ = null, F = h.NODE_ENV !== "production" && Qt ? !1 : !!m.dynamicChildren) => {
    if (d === m)
      return;
    d && !at(d, m) && (x = Yi(d), Pt(d, A, L, !0), d = null), m.patchFlag === -2 && (F = !1, m.dynamicChildren = null);
    const { type: k, ref: U, shapeFlag: X } = m;
    switch (k) {
      case sn:
        P(d, m, O, x);
        break;
      case ve:
        M(d, m, O, x);
        break;
      case en:
        d == null ? S(m, O, x, H) : h.NODE_ENV !== "production" && g(d, m, O, H);
        break;
      case Ce:
        K(
          d,
          m,
          O,
          x,
          A,
          L,
          H,
          $,
          F
        );
        break;
      default:
        X & 1 ? I(
          d,
          m,
          O,
          x,
          A,
          L,
          H,
          $,
          F
        ) : X & 6 ? Y(
          d,
          m,
          O,
          x,
          A,
          L,
          H,
          $,
          F
        ) : X & 64 || X & 128 ? k.process(
          d,
          m,
          O,
          x,
          A,
          L,
          H,
          $,
          F,
          In
        ) : h.NODE_ENV !== "production" && D("Invalid VNode type:", k, `(${typeof k})`);
    }
    U != null && A && Ss(U, d && d.ref, L, m || d, !m);
  }, P = (d, m, O, x) => {
    if (d == null)
      i(
        m.el = l(m.children),
        O,
        x
      );
    else {
      const A = m.el = d.el;
      m.children !== d.children && a(A, m.children);
    }
  }, M = (d, m, O, x) => {
    d == null ? i(
      m.el = c(m.children || ""),
      O,
      x
    ) : m.el = d.el;
  }, S = (d, m, O, x) => {
    [d.el, d.anchor] = y(
      d.children,
      m,
      O,
      x,
      d.el,
      d.anchor
    );
  }, g = (d, m, O, x) => {
    if (m.children !== d.children) {
      const A = p(d.anchor);
      N(d), [m.el, m.anchor] = y(
        m.children,
        O,
        A,
        x
      );
    } else
      m.el = d.el, m.anchor = d.anchor;
  }, _ = ({ el: d, anchor: m }, O, x) => {
    let A;
    for (; d && d !== m; )
      A = p(d), i(d, O, x), d = A;
    i(m, O, x);
  }, N = ({ el: d, anchor: m }) => {
    let O;
    for (; d && d !== m; )
      O = p(d), s(d), d = O;
    s(m);
  }, I = (d, m, O, x, A, L, H, $, F) => {
    m.type === "svg" ? H = "svg" : m.type === "math" && (H = "mathml"), d == null ? w(
      m,
      O,
      x,
      A,
      L,
      H,
      $,
      F
    ) : C(
      d,
      m,
      A,
      L,
      H,
      $,
      F
    );
  }, w = (d, m, O, x, A, L, H, $) => {
    let F, k;
    const { props: U, shapeFlag: X, transition: G, dirs: ee } = d;
    if (F = d.el = o(
      d.type,
      L,
      U && U.is,
      U
    ), X & 8 ? u(F, d.children) : X & 16 && v(
      d.children,
      F,
      null,
      x,
      A,
      Nr(d, L),
      H,
      $
    ), ee && mt(d, null, x, "created"), b(F, d, d.scopeId, H, x), U) {
      for (const fe in U)
        fe !== "value" && !Jt(fe) && r(
          F,
          fe,
          null,
          U[fe],
          L,
          d.children,
          x,
          A,
          vt
        );
      "value" in U && r(F, "value", null, U.value, L), (k = U.onVnodeBeforeMount) && qe(k, x, d);
    }
    h.NODE_ENV !== "production" && (Object.defineProperty(F, "__vnode", {
      value: d,
      enumerable: !1
    }), Object.defineProperty(F, "__vueParentComponent", {
      value: x,
      enumerable: !1
    })), ee && mt(d, null, x, "beforeMount");
    const re = Qa(A, G);
    re && G.beforeEnter(F), i(F, m, O), ((k = U && U.onVnodeMounted) || re || ee) && Re(() => {
      k && qe(k, x, d), re && G.enter(F), ee && mt(d, null, x, "mounted");
    }, A);
  }, b = (d, m, O, x, A) => {
    if (O && E(d, O), x)
      for (let L = 0; L < x.length; L++)
        E(d, x[L]);
    if (A) {
      let L = A.subTree;
      if (h.NODE_ENV !== "production" && L.patchFlag > 0 && L.patchFlag & 2048 && (L = Ys(L.children) || L), m === L) {
        const H = A.vnode;
        b(
          d,
          H,
          H.scopeId,
          H.slotScopeIds,
          A.parent
        );
      }
    }
  }, v = (d, m, O, x, A, L, H, $, F = 0) => {
    for (let k = F; k < d.length; k++) {
      const U = d[k] = $ ? Ut(d[k]) : We(d[k]);
      T(
        null,
        U,
        m,
        O,
        x,
        A,
        L,
        H,
        $
      );
    }
  }, C = (d, m, O, x, A, L, H) => {
    const $ = m.el = d.el;
    let { patchFlag: F, dynamicChildren: k, dirs: U } = m;
    F |= d.patchFlag & 16;
    const X = d.props || le, G = m.props || le;
    let ee;
    if (O && an(O, !1), (ee = G.onVnodeBeforeUpdate) && qe(ee, O, m, d), U && mt(m, d, O, "beforeUpdate"), O && an(O, !0), h.NODE_ENV !== "production" && Qt && (F = 0, H = !1, k = null), k ? (R(
      d.dynamicChildren,
      k,
      $,
      O,
      x,
      Nr(m, A),
      L
    ), h.NODE_ENV !== "production" && yi(d, m)) : H || we(
      d,
      m,
      $,
      null,
      O,
      x,
      Nr(m, A),
      L,
      !1
    ), F > 0) {
      if (F & 16)
        V(
          $,
          m,
          X,
          G,
          O,
          x,
          A
        );
      else if (F & 2 && X.class !== G.class && r($, "class", null, G.class, A), F & 4 && r($, "style", X.style, G.style, A), F & 8) {
        const re = m.dynamicProps;
        for (let fe = 0; fe < re.length; fe++) {
          const me = re[fe], Ve = X[me], lt = G[me];
          (lt !== Ve || me === "value") && r(
            $,
            me,
            Ve,
            lt,
            A,
            d.children,
            O,
            x,
            vt
          );
        }
      }
      F & 1 && d.children !== m.children && u($, m.children);
    } else
      !H && k == null && V(
        $,
        m,
        X,
        G,
        O,
        x,
        A
      );
    ((ee = G.onVnodeUpdated) || U) && Re(() => {
      ee && qe(ee, O, m, d), U && mt(m, d, O, "updated");
    }, x);
  }, R = (d, m, O, x, A, L, H) => {
    for (let $ = 0; $ < m.length; $++) {
      const F = d[$], k = m[$], U = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === Ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !at(F, k) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 70) ? f(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          O
        )
      );
      T(
        F,
        k,
        U,
        null,
        x,
        A,
        L,
        H,
        !0
      );
    }
  }, V = (d, m, O, x, A, L, H) => {
    if (O !== x) {
      if (O !== le)
        for (const $ in O)
          !Jt($) && !($ in x) && r(
            d,
            $,
            O[$],
            null,
            H,
            m.children,
            A,
            L,
            vt
          );
      for (const $ in x) {
        if (Jt($))
          continue;
        const F = x[$], k = O[$];
        F !== k && $ !== "value" && r(
          d,
          $,
          k,
          F,
          H,
          m.children,
          A,
          L,
          vt
        );
      }
      "value" in x && r(d, "value", O.value, x.value, H);
    }
  }, K = (d, m, O, x, A, L, H, $, F) => {
    const k = m.el = d ? d.el : l(""), U = m.anchor = d ? d.anchor : l("");
    let { patchFlag: X, dynamicChildren: G, slotScopeIds: ee } = m;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Qt || X & 2048) && (X = 0, F = !1, G = null), ee && ($ = $ ? $.concat(ee) : ee), d == null ? (i(k, O, x), i(U, O, x), v(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      O,
      U,
      A,
      L,
      H,
      $,
      F
    )) : X > 0 && X & 64 && G && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren ? (R(
      d.dynamicChildren,
      G,
      O,
      A,
      L,
      H,
      $
    ), h.NODE_ENV !== "production" ? yi(d, m) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (m.key != null || A && m === A.subTree) && yi(
        d,
        m,
        !0
        /* shallow */
      )
    )) : we(
      d,
      m,
      O,
      U,
      A,
      L,
      H,
      $,
      F
    );
  }, Y = (d, m, O, x, A, L, H, $, F) => {
    m.slotScopeIds = $, d == null ? m.shapeFlag & 512 ? A.ctx.activate(
      m,
      O,
      x,
      H,
      F
    ) : te(
      m,
      O,
      x,
      A,
      L,
      H,
      F
    ) : W(d, m, F);
  }, te = (d, m, O, x, A, L, H) => {
    const $ = d.component = uf(
      d,
      x,
      A
    );
    if (h.NODE_ENV !== "production" && $.type.__hmrId && Jd($), h.NODE_ENV !== "production" && (di(d), St($, "mount")), ei(d) && ($.ctx.renderer = In), h.NODE_ENV !== "production" && St($, "init"), pf($), h.NODE_ENV !== "production" && Ct($, "init"), $.asyncDep) {
      if (A && A.registerDep($, z), !d.el) {
        const F = $.subTree = he(ve);
        M(null, F, m, O);
      }
    } else
      z(
        $,
        d,
        m,
        O,
        A,
        L,
        H
      );
    h.NODE_ENV !== "production" && (pi(), Ct($, "mount"));
  }, W = (d, m, O) => {
    const x = m.component = d.component;
    if (dp(d, m, O))
      if (x.asyncDep && !x.asyncResolved) {
        h.NODE_ENV !== "production" && di(m), q(x, m, O), h.NODE_ENV !== "production" && pi();
        return;
      } else
        x.next = m, Gd(x.update), x.effect.dirty = !0, x.update();
    else
      m.el = d.el, x.vnode = m;
  }, z = (d, m, O, x, A, L, H) => {
    const $ = () => {
      if (d.isMounted) {
        let { next: U, bu: X, u: G, parent: ee, vnode: re } = d;
        {
          const kn = ef(d);
          if (kn) {
            U && (U.el = re.el, q(d, U, H)), kn.asyncDep.then(() => {
              d.isUnmounted || $();
            });
            return;
          }
        }
        let fe = U, me;
        h.NODE_ENV !== "production" && di(U || d.vnode), an(d, !1), U ? (U.el = re.el, q(d, U, H)) : U = re, X && Wt(X), (me = U.props && U.props.onVnodeBeforeUpdate) && qe(me, ee, U, re), an(d, !0), h.NODE_ENV !== "production" && St(d, "render");
        const Ve = fs(d);
        h.NODE_ENV !== "production" && Ct(d, "render");
        const lt = d.subTree;
        d.subTree = Ve, h.NODE_ENV !== "production" && St(d, "patch"), T(
          lt,
          Ve,
          // parent may have changed if it's in a teleport
          f(lt.el),
          // anchor may have changed if it's in a fragment
          Yi(lt),
          d,
          A,
          L
        ), h.NODE_ENV !== "production" && Ct(d, "patch"), U.el = Ve.el, fe === null && Ao(d, Ve.el), G && Re(G, A), (me = U.props && U.props.onVnodeUpdated) && Re(
          () => qe(me, ee, U, re),
          A
        ), h.NODE_ENV !== "production" && ga(d), h.NODE_ENV !== "production" && pi();
      } else {
        let U;
        const { el: X, props: G } = m, { bm: ee, m: re, parent: fe } = d, me = Nn(m);
        if (an(d, !1), ee && Wt(ee), !me && (U = G && G.onVnodeBeforeMount) && qe(U, fe, m), an(d, !0), X && dr) {
          const Ve = () => {
            h.NODE_ENV !== "production" && St(d, "render"), d.subTree = fs(d), h.NODE_ENV !== "production" && Ct(d, "render"), h.NODE_ENV !== "production" && St(d, "hydrate"), dr(
              X,
              d.subTree,
              d,
              A,
              null
            ), h.NODE_ENV !== "production" && Ct(d, "hydrate");
          };
          me ? m.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !d.isUnmounted && Ve()
          ) : Ve();
        } else {
          h.NODE_ENV !== "production" && St(d, "render");
          const Ve = d.subTree = fs(d);
          h.NODE_ENV !== "production" && Ct(d, "render"), h.NODE_ENV !== "production" && St(d, "patch"), T(
            null,
            Ve,
            O,
            x,
            d,
            A,
            L
          ), h.NODE_ENV !== "production" && Ct(d, "patch"), m.el = Ve.el;
        }
        if (re && Re(re, A), !me && (U = G && G.onVnodeMounted)) {
          const Ve = m;
          Re(
            () => qe(U, fe, Ve),
            A
          );
        }
        (m.shapeFlag & 256 || fe && Nn(fe.vnode) && fe.vnode.shapeFlag & 256) && d.a && Re(d.a, A), d.isMounted = !0, h.NODE_ENV !== "production" && kr(d), m = O = x = null;
      }
    }, F = d.effect = new Un(
      $,
      pe,
      () => Hi(k),
      d.scope
      // track it in component's effect scope
    ), k = d.update = () => {
      F.dirty && F.run();
    };
    k.id = d.uid, an(d, !0), h.NODE_ENV !== "production" && (F.onTrack = d.rtc ? (U) => Wt(d.rtc, U) : void 0, F.onTrigger = d.rtg ? (U) => Wt(d.rtg, U) : void 0, k.ownerInstance = d), k();
  }, q = (d, m, O) => {
    m.component = d;
    const x = d.vnode.props;
    d.vnode = m, d.next = null, fh(d, m.props, x, O), yh(d, m.children, O), on(), xl(d), ln();
  }, we = (d, m, O, x, A, L, H, $, F = !1) => {
    const k = d && d.children, U = d ? d.shapeFlag : 0, X = m.children, { patchFlag: G, shapeFlag: ee } = m;
    if (G > 0) {
      if (G & 128) {
        ot(
          k,
          X,
          O,
          x,
          A,
          L,
          H,
          $,
          F
        );
        return;
      } else if (G & 256) {
        Qe(
          k,
          X,
          O,
          x,
          A,
          L,
          H,
          $,
          F
        );
        return;
      }
    }
    ee & 8 ? (U & 16 && vt(k, A, L), X !== k && u(O, X)) : U & 16 ? ee & 16 ? ot(
      k,
      X,
      O,
      x,
      A,
      L,
      H,
      $,
      F
    ) : vt(k, A, L, !0) : (U & 8 && u(O, ""), ee & 16 && v(
      X,
      O,
      x,
      A,
      L,
      H,
      $,
      F
    ));
  }, Qe = (d, m, O, x, A, L, H, $, F) => {
    d = d || Pn, m = m || Pn;
    const k = d.length, U = m.length, X = Math.min(k, U);
    let G;
    for (G = 0; G < X; G++) {
      const ee = m[G] = F ? Ut(m[G]) : We(m[G]);
      T(
        d[G],
        ee,
        O,
        null,
        A,
        L,
        H,
        $,
        F
      );
    }
    k > U ? vt(
      d,
      A,
      L,
      !0,
      !1,
      X
    ) : v(
      m,
      O,
      x,
      A,
      L,
      H,
      $,
      F,
      X
    );
  }, ot = (d, m, O, x, A, L, H, $, F) => {
    let k = 0;
    const U = m.length;
    let X = d.length - 1, G = U - 1;
    for (; k <= X && k <= G; ) {
      const ee = d[k], re = m[k] = F ? Ut(m[k]) : We(m[k]);
      if (at(ee, re))
        T(
          ee,
          re,
          O,
          null,
          A,
          L,
          H,
          $,
          F
        );
      else
        break;
      k++;
    }
    for (; k <= X && k <= G; ) {
      const ee = d[X], re = m[G] = F ? Ut(m[G]) : We(m[G]);
      if (at(ee, re))
        T(
          ee,
          re,
          O,
          null,
          A,
          L,
          H,
          $,
          F
        );
      else
        break;
      X--, G--;
    }
    if (k > X) {
      if (k <= G) {
        const ee = G + 1, re = ee < U ? m[ee].el : x;
        for (; k <= G; )
          T(
            null,
            m[k] = F ? Ut(m[k]) : We(m[k]),
            O,
            re,
            A,
            L,
            H,
            $,
            F
          ), k++;
      }
    } else if (k > G)
      for (; k <= X; )
        Pt(d[k], A, L, !0), k++;
    else {
      const ee = k, re = k, fe = /* @__PURE__ */ new Map();
      for (k = re; k <= G; k++) {
        const He = m[k] = F ? Ut(m[k]) : We(m[k]);
        He.key != null && (h.NODE_ENV !== "production" && fe.has(He.key) && D(
          "Duplicate keys found during update:",
          JSON.stringify(He.key),
          "Make sure keys are unique."
        ), fe.set(He.key, k));
      }
      let me, Ve = 0;
      const lt = G - re + 1;
      let kn = !1, gl = 0;
      const ni = new Array(lt);
      for (k = 0; k < lt; k++)
        ni[k] = 0;
      for (k = ee; k <= X; k++) {
        const He = d[k];
        if (Ve >= lt) {
          Pt(He, A, L, !0);
          continue;
        }
        let ht;
        if (He.key != null)
          ht = fe.get(He.key);
        else
          for (me = re; me <= G; me++)
            if (ni[me - re] === 0 && at(He, m[me])) {
              ht = me;
              break;
            }
        ht === void 0 ? Pt(He, A, L, !0) : (ni[ht - re] = k + 1, ht >= gl ? gl = ht : kn = !0, T(
          He,
          m[ht],
          O,
          null,
          A,
          L,
          H,
          $,
          F
        ), Ve++);
      }
      const El = kn ? Th(ni) : Pn;
      for (me = El.length - 1, k = lt - 1; k >= 0; k--) {
        const He = re + k, ht = m[He], yl = He + 1 < U ? m[He + 1].el : x;
        ni[k] === 0 ? T(
          null,
          ht,
          O,
          yl,
          A,
          L,
          H,
          $,
          F
        ) : kn && (me < 0 || k !== El[me] ? An(ht, O, yl, 2) : me--);
      }
    }
  }, An = (d, m, O, x, A = null) => {
    const { el: L, type: H, transition: $, children: F, shapeFlag: k } = d;
    if (k & 6) {
      An(d.component.subTree, m, O, x);
      return;
    }
    if (k & 128) {
      d.suspense.move(m, O, x);
      return;
    }
    if (k & 64) {
      H.move(d, m, O, In);
      return;
    }
    if (H === Ce) {
      i(L, m, O);
      for (let X = 0; X < F.length; X++)
        An(F[X], m, O, x);
      i(d.anchor, m, O);
      return;
    }
    if (H === en) {
      _(d, m, O);
      return;
    }
    if (x !== 2 && k & 1 && $)
      if (x === 0)
        $.beforeEnter(L), i(L, m, O), Re(() => $.enter(L), A);
      else {
        const { leave: X, delayLeave: G, afterLeave: ee } = $, re = () => i(L, m, O), fe = () => {
          X(L, () => {
            re(), ee && ee();
          });
        };
        G ? G(L, re, fe) : fe();
      }
    else
      i(L, m, O);
  }, Pt = (d, m, O, x = !1, A = !1) => {
    const {
      type: L,
      props: H,
      ref: $,
      children: F,
      dynamicChildren: k,
      shapeFlag: U,
      patchFlag: X,
      dirs: G
    } = d;
    if ($ != null && Ss($, null, O, d, !0), U & 256) {
      m.ctx.deactivate(d);
      return;
    }
    const ee = U & 1 && G, re = !Nn(d);
    let fe;
    if (re && (fe = H && H.onVnodeBeforeUnmount) && qe(fe, m, d), U & 6)
      Au(d.component, O, x);
    else {
      if (U & 128) {
        d.suspense.unmount(O, x);
        return;
      }
      ee && mt(d, null, m, "beforeUnmount"), U & 64 ? d.type.remove(
        d,
        m,
        O,
        A,
        In,
        x
      ) : k && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== Ce || X > 0 && X & 64) ? vt(
        k,
        m,
        O,
        !1,
        !0
      ) : (L === Ce && X & 384 || !A && U & 16) && vt(F, m, O), x && ar(d);
    }
    (re && (fe = H && H.onVnodeUnmounted) || ee) && Re(() => {
      fe && qe(fe, m, d), ee && mt(d, null, m, "unmounted");
    }, O);
  }, ar = (d) => {
    const { type: m, el: O, anchor: x, transition: A } = d;
    if (m === Ce) {
      h.NODE_ENV !== "production" && d.patchFlag > 0 && d.patchFlag & 2048 && A && !A.persisted ? d.children.forEach((H) => {
        H.type === ve ? s(H.el) : ar(H);
      }) : xu(O, x);
      return;
    }
    if (m === en) {
      N(d);
      return;
    }
    const L = () => {
      s(O), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (d.shapeFlag & 1 && A && !A.persisted) {
      const { leave: H, delayLeave: $ } = A, F = () => H(O, L);
      $ ? $(d.el, L, F) : F();
    } else
      L();
  }, xu = (d, m) => {
    let O;
    for (; d !== m; )
      O = p(d), s(d), d = O;
    s(m);
  }, Au = (d, m, O) => {
    h.NODE_ENV !== "production" && d.type.__hmrId && Yd(d);
    const { bum: x, scope: A, update: L, subTree: H, um: $ } = d;
    x && Wt(x), A.stop(), L && (L.active = !1, Pt(H, d, m, O)), $ && Re($, m), Re(() => {
      d.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve()), h.NODE_ENV !== "production" && np(d);
  }, vt = (d, m, O, x = !1, A = !1, L = 0) => {
    for (let H = L; H < d.length; H++)
      Pt(d[H], m, O, x, A);
  }, Yi = (d) => d.shapeFlag & 6 ? Yi(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : p(d.anchor || d.el);
  let fr = !1;
  const ml = (d, m, O) => {
    d == null ? m._vnode && Pt(m._vnode, null, null, !0) : T(
      m._vnode || null,
      d,
      m,
      null,
      null,
      null,
      O
    ), fr || (fr = !0, xl(), Ns(), fr = !1), m._vnode = d;
  }, In = {
    p: T,
    um: Pt,
    m: An,
    r: ar,
    mt: te,
    mc: v,
    pc: we,
    pbc: R,
    n: Yi,
    o: e
  };
  let ur, dr;
  return t && ([ur, dr] = t(
    In
  )), {
    render: ml,
    hydrate: ur,
    createApp: oh(ml, ur)
  };
}
function Nr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function an({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Qa(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function yi(e, t, n = !1) {
  const i = e.children, s = t.children;
  if (j(i) && j(s))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = Ut(s[r]), l.el = o.el), n || yi(o, l)), l.type === sn && (l.el = o.el), h.NODE_ENV !== "production" && l.type === ve && !l.el && (l.el = o.el);
    }
}
function Th(e) {
  const t = e.slice(), n = [0];
  let i, s, r, o, l;
  const c = e.length;
  for (i = 0; i < c; i++) {
    const a = e[i];
    if (a !== 0) {
      if (s = n[n.length - 1], e[s] < a) {
        t[i] = s, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < a ? r = l + 1 : o = l;
      a < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function ef(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ef(t);
}
const Dh = (e) => e.__isTeleport, Hn = (e) => e && (e.disabled || e.disabled === ""), zl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Jl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Hr = (e, t) => {
  const n = e && e.to;
  if (Z(n))
    if (t) {
      const i = t(n);
      return i || h.NODE_ENV !== "production" && D(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), i;
    } else
      return h.NODE_ENV !== "production" && D(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return h.NODE_ENV !== "production" && !n && !Hn(e) && D(`Invalid Teleport target: ${n}`), n;
}, wh = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, s, r, o, l, c, a) {
    const {
      mc: u,
      pc: f,
      pbc: p,
      o: { insert: E, querySelector: y, createText: T, createComment: P }
    } = a, M = Hn(t.props);
    let { shapeFlag: S, children: g, dynamicChildren: _ } = t;
    if (h.NODE_ENV !== "production" && Qt && (c = !1, _ = null), e == null) {
      const N = t.el = h.NODE_ENV !== "production" ? P("teleport start") : T(""), I = t.anchor = h.NODE_ENV !== "production" ? P("teleport end") : T("");
      E(N, n, i), E(I, n, i);
      const w = t.target = Hr(t.props, y), b = t.targetAnchor = T("");
      w ? (E(b, w), o === "svg" || zl(w) ? o = "svg" : (o === "mathml" || Jl(w)) && (o = "mathml")) : h.NODE_ENV !== "production" && !M && D("Invalid Teleport target on mount:", w, `(${typeof w})`);
      const v = (C, R) => {
        S & 16 && u(
          g,
          C,
          R,
          s,
          r,
          o,
          l,
          c
        );
      };
      M ? v(n, I) : w && v(w, b);
    } else {
      t.el = e.el;
      const N = t.anchor = e.anchor, I = t.target = e.target, w = t.targetAnchor = e.targetAnchor, b = Hn(e.props), v = b ? n : I, C = b ? N : w;
      if (o === "svg" || zl(I) ? o = "svg" : (o === "mathml" || Jl(I)) && (o = "mathml"), _ ? (p(
        e.dynamicChildren,
        _,
        v,
        s,
        r,
        o,
        l
      ), yi(e, t, !0)) : c || f(
        e,
        t,
        v,
        C,
        s,
        r,
        o,
        l,
        !1
      ), M)
        b ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : rs(
          t,
          n,
          N,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const R = t.target = Hr(
          t.props,
          y
        );
        R ? rs(
          t,
          R,
          null,
          a,
          0
        ) : h.NODE_ENV !== "production" && D(
          "Invalid Teleport target on update:",
          I,
          `(${typeof I})`
        );
      } else
        b && rs(
          t,
          I,
          w,
          a,
          1
        );
    }
    tf(t);
  },
  remove(e, t, n, i, { um: s, o: { remove: r } }, o) {
    const { shapeFlag: l, children: c, anchor: a, targetAnchor: u, target: f, props: p } = e;
    if (f && r(u), o && r(a), l & 16) {
      const E = o || !Hn(p);
      for (let y = 0; y < c.length; y++) {
        const T = c[y];
        s(
          T,
          t,
          n,
          E,
          !!T.dynamicChildren
        );
      }
    }
  },
  move: rs,
  hydrate: Vh
};
function rs(e, t, n, { o: { insert: i }, m: s }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: c, children: a, props: u } = e, f = r === 2;
  if (f && i(o, t, n), (!f || Hn(u)) && c & 16)
    for (let p = 0; p < a.length; p++)
      s(
        a[p],
        t,
        n,
        2
      );
  f && i(l, t, n);
}
function Vh(e, t, n, i, s, r, {
  o: { nextSibling: o, parentNode: l, querySelector: c }
}, a) {
  const u = t.target = Hr(
    t.props,
    c
  );
  if (u) {
    const f = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (Hn(t.props))
        t.anchor = a(
          o(e),
          t,
          l(e),
          n,
          i,
          s,
          r
        ), t.targetAnchor = f;
      else {
        t.anchor = o(e);
        let p = f;
        for (; p; )
          if (p = o(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
            t.targetAnchor = p, u._lpa = t.targetAnchor && o(t.targetAnchor);
            break;
          }
        a(
          f,
          t,
          u,
          n,
          i,
          s,
          r
        );
      }
    tf(t);
  }
  return t.anchor && o(t.anchor);
}
const xh = wh;
function tf(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const Ce = Symbol.for("v-fgt"), sn = Symbol.for("v-txt"), ve = Symbol.for("v-cmt"), en = Symbol.for("v-stc"), _i = [];
let Ge = null;
function Ki(e = !1) {
  _i.push(Ge = e ? null : []);
}
function nf() {
  _i.pop(), Ge = _i[_i.length - 1] || null;
}
let Cn = 1;
function jr(e) {
  Cn += e;
}
function sf(e) {
  return e.dynamicChildren = Cn > 0 ? Ge || Pn : null, nf(), Cn > 0 && Ge && Ge.push(e), e;
}
function rf(e, t, n, i, s, r) {
  return sf(
    Ii(
      e,
      t,
      n,
      i,
      s,
      r,
      !0
    )
  );
}
function Ho(e, t, n, i, s) {
  return sf(
    he(
      e,
      t,
      n,
      i,
      s,
      !0
    )
  );
}
function kt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function at(e, t) {
  return h.NODE_ENV !== "production" && t.shapeFlag & 6 && Mn.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
let Ur;
function Ah(e) {
  Ur = e;
}
const Ih = (...e) => lf(
  ...Ur ? Ur(e, ge) : e
), nr = "__vInternal", of = ({ key: e }) => e ?? null, us = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Z(e) || Oe(e) || J(e) ? { i: ge, r: e, k: t, f: !!n } : e : null);
function Ii(e, t = null, n = null, i = 0, s = null, r = e === Ce ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && of(t),
    ref: t && us(t),
    scopeId: Js,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ge
  };
  return l ? (Uo(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= Z(n) ? 8 : 16), h.NODE_ENV !== "production" && c.key !== c.key && D("VNode created with invalid key (NaN). VNode type:", c.type), Cn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ge.push(c), c;
}
const he = h.NODE_ENV !== "production" ? Ih : lf;
function lf(e, t = null, n = null, i = 0, s = null, r = !1) {
  if ((!e || e === Io) && (h.NODE_ENV !== "production" && !e && D(`Invalid vnode type when creating vnode: ${e}.`), e = ve), kt(e)) {
    const l = rt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Uo(l, n), Cn > 0 && !r && Ge && (l.shapeFlag & 6 ? Ge[Ge.indexOf(e)] = l : Ge.push(l)), l.patchFlag |= -2, l;
  }
  if (Ef(e) && (e = e.__vccOpts), t) {
    t = cf(t);
    let { class: l, style: c } = t;
    l && !Z(l) && (t.class = Vn(l)), oe(c) && (Si(c) && !j(c) && (c = ie({}, c)), t.style = Qn(c));
  }
  const o = Z(e) ? 1 : Na(e) ? 128 : Dh(e) ? 64 : oe(e) ? 4 : J(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && o & 4 && Si(e) && (e = Q(e), D(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Ii(
    e,
    t,
    n,
    i,
    s,
    o,
    r,
    !0
  );
}
function cf(e) {
  return e ? Si(e) || nr in e ? ie({}, e) : e : null;
}
function rt(e, t, n = !1) {
  const { props: i, ref: s, patchFlag: r, children: o } = e, l = t ? ff(i || {}, t) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && of(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? j(s) ? s.concat(us(t)) : [s, us(t)] : us(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && r === -1 && j(o) ? o.map(af) : o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ce ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && rt(e.ssContent),
    ssFallback: e.ssFallback && rt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function af(e) {
  const t = rt(e);
  return j(e.children) && (t.children = e.children.map(af)), t;
}
function jo(e = " ", t = 0) {
  return he(sn, null, e, t);
}
function kh(e, t) {
  const n = he(en, null, e);
  return n.staticCount = t, n;
}
function Rh(e = "", t = !1) {
  return t ? (Ki(), Ho(ve, null, e)) : he(ve, null, e);
}
function We(e) {
  return e == null || typeof e == "boolean" ? he(ve) : j(e) ? he(
    Ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ut(e) : he(sn, null, String(e));
}
function Ut(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : rt(e);
}
function Uo(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (j(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Uo(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(nr in t) ? t._ctx = ge : s === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    J(t) ? (t = { default: t, _ctx: ge }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [jo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ff(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = Vn([t.class, i.class]));
      else if (s === "style")
        t.style = Qn([t.style, i.style]);
      else if (At(s)) {
        const r = t[s], o = i[s];
        o && r !== o && !(j(r) && r.includes(o)) && (t[s] = r ? [].concat(r, o) : o);
      } else
        s !== "" && (t[s] = i[s]);
  }
  return t;
}
function qe(e, t, n, i = null) {
  Xe(e, t, 7, [
    n,
    i
  ]);
}
const Mh = ja();
let Ph = 0;
function uf(e, t, n) {
  const i = e.type, s = (t ? t.appContext : e.appContext) || Mh, r = {
    uid: Ph++,
    vnode: e,
    type: i,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new mo(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: qa(i, s),
    emitsOptions: ya(i, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: le,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: le,
    data: le,
    props: le,
    attrs: le,
    slots: le,
    refs: le,
    setupState: le,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return h.NODE_ENV !== "production" ? r.ctx = $p(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = op.bind(null, r), e.ce && e.ce(r), r;
}
let be = null;
const Mt = () => be || ge;
let Ts, Kr;
{
  const e = po(), t = (n, i) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
    };
  };
  Ts = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => be = n
  ), Kr = t(
    "__VUE_SSR_SETTERS__",
    (n) => qi = n
  );
}
const Tn = (e) => {
  const t = be;
  return Ts(e), e.scope.on(), () => {
    e.scope.off(), Ts(t);
  };
}, qr = () => {
  be && be.scope.off(), Ts(null);
}, $h = /* @__PURE__ */ Ae("slot,component");
function Wr(e, t) {
  const n = t.isNativeTag || ui;
  ($h(e) || n(e)) && D(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function df(e) {
  return e.vnode.shapeFlag & 4;
}
let qi = !1;
function pf(e, t = !1) {
  t && Kr(t);
  const { props: n, children: i } = e.vnode, s = df(e);
  ch(e, n, s, t), Eh(e, i);
  const r = s ? Lh(e, t) : void 0;
  return t && Kr(!1), r;
}
function Lh(e, t) {
  var n;
  const i = e.type;
  if (h.NODE_ENV !== "production") {
    if (i.name && Wr(i.name, e.appContext.config), i.components) {
      const r = Object.keys(i.components);
      for (let o = 0; o < r.length; o++)
        Wr(r[o], e.appContext.config);
    }
    if (i.directives) {
      const r = Object.keys(i.directives);
      for (let o = 0; o < r.length; o++)
        Da(r[o]);
    }
    i.compilerOptions && Ko() && D(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = No(new Proxy(e.ctx, gi)), h.NODE_ENV !== "production" && Lp(e);
  const { setup: s } = i;
  if (s) {
    const r = e.setupContext = s.length > 1 ? gf(e) : null, o = Tn(e);
    on();
    const l = Nt(
      s,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? dn(e.props) : e.props,
        r
      ]
    );
    if (ln(), o(), Fs(l)) {
      if (l.then(qr, qr), t)
        return l.then((c) => {
          Gr(e, c, t);
        }).catch((c) => {
          cn(c, e, 0);
        });
      if (e.asyncDep = l, h.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = i.name) != null ? n : "Anonymous";
        D(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Gr(e, l, t);
  } else
    mf(e, t);
}
function Gr(e, t, n) {
  J(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : oe(t) ? (h.NODE_ENV !== "production" && kt(t) && D(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = So(t), h.NODE_ENV !== "production" && Fp(e)) : h.NODE_ENV !== "production" && t !== void 0 && D(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), mf(e, n);
}
let Ni, zr;
function hf(e) {
  Ni = e, zr = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Pp));
  };
}
const Ko = () => !Ni;
function mf(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && Ni && !i.render) {
      const s = i.template || Fo(e).template;
      if (s) {
        h.NODE_ENV !== "production" && St(e, "compile");
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: c } = i, a = ie(
          ie(
            {
              isCustomElement: r,
              delimiters: l
            },
            o
          ),
          c
        );
        i.render = Ni(s, a), h.NODE_ENV !== "production" && Ct(e, "compile");
      }
    }
    e.render = i.render || pe, zr && zr(e);
  }
  {
    const s = Tn(e);
    on();
    try {
      eh(e);
    } finally {
      ln(), s();
    }
  }
  h.NODE_ENV !== "production" && !i.render && e.render === pe && !t && (!Ni && i.template ? D(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : D("Component is missing template or render function."));
}
function Yl(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    h.NODE_ENV !== "production" ? {
      get(t, n) {
        return bs(), Me(e, "get", "$attrs"), t[n];
      },
      set() {
        return D("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return D("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return Me(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Fh(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return Me(e, "get", "$slots"), t[n];
    }
  }));
}
function gf(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && D("expose() should be called only once per setup()."), n != null)) {
      let i = typeof n;
      i === "object" && (j(n) ? i = "array" : Oe(n) && (i = "ref")), i !== "object" && D(
        `expose() should be passed a plain object, received ${i}.`
      );
    }
    e.exposed = n || {};
  };
  return h.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return Yl(e);
    },
    get slots() {
      return Fh(e);
    },
    get emit() {
      return (n, ...i) => e.emit(n, ...i);
    },
    expose: t
  }) : {
    get attrs() {
      return Yl(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ir(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(So(No(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in bn)
          return bn[n](e);
      },
      has(t, n) {
        return n in t || n in bn;
      }
    }));
}
const Bh = /(?:^|[-_])(\w)/g, Hh = (e) => e.replace(Bh, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ki(e, t = !0) {
  return J(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function sr(e, t, n = !1) {
  let i = ki(t);
  if (!i && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (i = s[1]);
  }
  if (!i && e && e.parent) {
    const s = (r) => {
      for (const o in r)
        if (r[o] === t)
          return o;
    };
    i = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return i ? Hh(i) : n ? "App" : "Anonymous";
}
function Ef(e) {
  return J(e) && "__vccOpts" in e;
}
const yf = (e, t) => Td(e, t, qi);
function jh(e, t, n = le) {
  const i = Mt();
  if (h.NODE_ENV !== "production" && !i)
    return D("useModel() called without active instance."), xt();
  if (h.NODE_ENV !== "production" && !i.propsOptions[0][t])
    return D(`useModel() called with prop "${t}" which is not declared.`), xt();
  const s = Ee(t), r = $e(t), o = aa((c, a) => {
    let u;
    return Ca(() => {
      const f = e[t];
      pt(u, f) && (u = f, a());
    }), {
      get() {
        return c(), n.get ? n.get(u) : u;
      },
      set(f) {
        const p = i.vnode.props;
        !(p && // check if parent has passed v-model
        (t in p || s in p || r in p) && (`onUpdate:${t}` in p || `onUpdate:${s}` in p || `onUpdate:${r}` in p)) && pt(f, u) && (u = f, a()), i.emit(`update:${t}`, n.set ? n.set(f) : f);
      }
    };
  }), l = t === "modelValue" ? "modelModifiers" : `${t}Modifiers`;
  return o[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? { value: c++ ? e[l] || {} : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
function _f(e, t, n) {
  const i = arguments.length;
  return i === 2 ? oe(t) && !j(t) ? kt(t) ? he(e, null, [t]) : he(e, t) : he(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && kt(n) && (n = [n]), he(e, t, n));
}
function Nf() {
  if (h.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, i = { style: "color:#eb2f96" }, s = {
    header(f) {
      return oe(f) ? f.__isVue ? ["div", e, "VueInstance"] : Oe(f) ? [
        "div",
        {},
        ["span", e, u(f)],
        "<",
        l(f.value),
        ">"
      ] : Xt(f) ? [
        "div",
        {},
        ["span", e, Zt(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${It(f) ? " (readonly)" : ""}`
      ] : It(f) ? [
        "div",
        {},
        ["span", e, Zt(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...r(f.$)
        ];
    }
  };
  function r(f) {
    const p = [];
    f.type.props && f.props && p.push(o("props", Q(f.props))), f.setupState !== le && p.push(o("setup", f.setupState)), f.data !== le && p.push(o("data", Q(f.data)));
    const E = c(f, "computed");
    E && p.push(o("computed", E));
    const y = c(f, "inject");
    return y && p.push(o("injected", y)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: i.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), p;
  }
  function o(f, p) {
    return p = ie({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((E) => [
          "div",
          {},
          ["span", i, E + ": "],
          l(p[E], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, p = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", i, f] : oe(f) ? ["object", { object: p ? Q(f) : f }] : ["span", n, String(f)];
  }
  function c(f, p) {
    const E = f.type;
    if (J(E))
      return;
    const y = {};
    for (const T in f.ctx)
      a(E, T, p) && (y[T] = f.ctx[T]);
    return y;
  }
  function a(f, p, E) {
    const y = f[E];
    if (j(y) && y.includes(p) || oe(y) && p in y || f.extends && a(f.extends, p, E) || f.mixins && f.mixins.some((T) => a(T, p, E)))
      return !0;
  }
  function u(f) {
    return Zt(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
function Uh(e, t, n, i) {
  const s = n[i];
  if (s && bf(s, e))
    return s;
  const r = t();
  return r.memo = e.slice(), n[i] = r;
}
function bf(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (pt(n[i], t[i]))
      return !1;
  return Cn > 0 && Ge && Ge.push(e), !0;
}
const Jr = "3.4.19", xe = h.NODE_ENV !== "production" ? D : pe, Kh = Ws, qh = (h.NODE_ENV, ct), Wh = (h.NODE_ENV, wo), Gh = {
  createComponentInstance: uf,
  setupComponent: pf,
  renderComponentRoot: fs,
  setCurrentRenderingInstance: Vi,
  isVNode: kt,
  normalizeVNode: We
}, zh = Gh, Jh = null, Yh = null, Xh = null;
var De = {};
const Zh = "http://www.w3.org/2000/svg", Qh = "http://www.w3.org/1998/Math/MathML", Kt = typeof document < "u" ? document : null, Xl = Kt && /* @__PURE__ */ Kt.createElement("template"), em = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const s = t === "svg" ? Kt.createElementNS(Zh, e) : t === "mathml" ? Kt.createElementNS(Qh, e) : Kt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
  },
  createText: (e) => Kt.createTextNode(e),
  createComment: (e) => Kt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Kt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, s, r) {
    const o = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      Xl.innerHTML = i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e;
      const l = Xl.content;
      if (i === "svg" || i === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Lt = "transition", ri = "animation", qn = Symbol("_vtc"), qo = (e, { slots: t }) => _f(wa, Of(e), t);
qo.displayName = "Transition";
const vf = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, tm = qo.props = /* @__PURE__ */ ie(
  {},
  Po,
  vf
), fn = (e, t = []) => {
  j(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Zl = (e) => e ? j(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Of(e) {
  const t = {};
  for (const V in e)
    V in vf || (t[V] = e[V]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: i,
    duration: s,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = r,
    appearActiveClass: a = o,
    appearToClass: u = l,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: E = `${n}-leave-to`
  } = e, y = nm(s), T = y && y[0], P = y && y[1], {
    onBeforeEnter: M,
    onEnter: S,
    onEnterCancelled: g,
    onLeave: _,
    onLeaveCancelled: N,
    onBeforeAppear: I = M,
    onAppear: w = S,
    onAppearCancelled: b = g
  } = t, v = (V, K, Y) => {
    Bt(V, K ? u : l), Bt(V, K ? a : o), Y && Y();
  }, C = (V, K) => {
    V._isLeaving = !1, Bt(V, f), Bt(V, E), Bt(V, p), K && K();
  }, R = (V) => (K, Y) => {
    const te = V ? w : S, W = () => v(K, V, Y);
    fn(te, [K, W]), Ql(() => {
      Bt(K, V ? c : r), Tt(K, V ? u : l), Zl(te) || ec(K, i, T, W);
    });
  };
  return ie(t, {
    onBeforeEnter(V) {
      fn(M, [V]), Tt(V, r), Tt(V, o);
    },
    onBeforeAppear(V) {
      fn(I, [V]), Tt(V, c), Tt(V, a);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(V, K) {
      V._isLeaving = !0;
      const Y = () => C(V, K);
      Tt(V, f), Cf(), Tt(V, p), Ql(() => {
        V._isLeaving && (Bt(V, f), Tt(V, E), Zl(_) || ec(V, i, P, Y));
      }), fn(_, [V, Y]);
    },
    onEnterCancelled(V) {
      v(V, !1), fn(g, [V]);
    },
    onAppearCancelled(V) {
      v(V, !0), fn(b, [V]);
    },
    onLeaveCancelled(V) {
      C(V), fn(N, [V]);
    }
  });
}
function nm(e) {
  if (e == null)
    return null;
  if (oe(e))
    return [br(e.enter), br(e.leave)];
  {
    const t = br(e);
    return [t, t];
  }
}
function br(e) {
  const t = ys(e);
  return De.NODE_ENV !== "production" && Co(t, "<transition> explicit duration"), t;
}
function Tt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[qn] || (e[qn] = /* @__PURE__ */ new Set())).add(t);
}
function Bt(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[qn];
  n && (n.delete(t), n.size || (e[qn] = void 0));
}
function Ql(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let im = 0;
function ec(e, t, n, i) {
  const s = e._endId = ++im, r = () => {
    s === e._endId && i();
  };
  if (n)
    return setTimeout(r, n);
  const { type: o, timeout: l, propCount: c } = Sf(e, t);
  if (!o)
    return i();
  const a = o + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(a, p), r();
  }, p = (E) => {
    E.target === e && ++u >= c && f();
  };
  setTimeout(() => {
    u < c && f();
  }, l + 1), e.addEventListener(a, p);
}
function Sf(e, t) {
  const n = window.getComputedStyle(e), i = (y) => (n[y] || "").split(", "), s = i(`${Lt}Delay`), r = i(`${Lt}Duration`), o = tc(s, r), l = i(`${ri}Delay`), c = i(`${ri}Duration`), a = tc(l, c);
  let u = null, f = 0, p = 0;
  t === Lt ? o > 0 && (u = Lt, f = o, p = r.length) : t === ri ? a > 0 && (u = ri, f = a, p = c.length) : (f = Math.max(o, a), u = f > 0 ? o > a ? Lt : ri : null, p = u ? u === Lt ? r.length : c.length : 0);
  const E = u === Lt && /\b(transform|all)(,|$)/.test(
    i(`${Lt}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: p,
    hasTransform: E
  };
}
function tc(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => nc(n) + nc(e[i])));
}
function nc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Cf() {
  return document.body.offsetHeight;
}
function sm(e, t, n) {
  const i = e[qn];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ri = Symbol("_vod"), Wo = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ri] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : oi(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t == !n && (e.style.display === e[Ri] || !t) || (i ? t ? (i.beforeEnter(e), oi(e, !0), i.enter(e)) : i.leave(e, () => {
      oi(e, !1);
    }) : oi(e, t));
  },
  beforeUnmount(e, { value: t }) {
    oi(e, t);
  }
};
De.NODE_ENV !== "production" && (Wo.name = "show");
function oi(e, t) {
  e.style.display = t ? e[Ri] : "none";
}
function rm() {
  Wo.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Tf = Symbol(De.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function om(e) {
  const t = Mt();
  if (!t) {
    De.NODE_ENV !== "production" && xe("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (s = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Xr(r, s));
  };
  De.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const i = () => {
    const s = e(t.proxy);
    Yr(t.subTree, s), n(s);
  };
  Sa(i), ti(() => {
    const s = new MutationObserver(i);
    s.observe(t.subTree.el.parentNode, { childList: !0 }), tr(() => s.disconnect());
  });
}
function Yr(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Yr(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Xr(e.el, t);
  else if (e.type === Ce)
    e.children.forEach((n) => Yr(n, t));
  else if (e.type === en) {
    let { el: n, anchor: i } = e;
    for (; n && (Xr(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Xr(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const s in t)
      n.setProperty(`--${s}`, t[s]), i += `--${s}: ${t[s]};`;
    n[Tf] = i;
  }
}
const lm = /(^|;)\s*display\s*:/;
function cm(e, t, n) {
  const i = e.style, s = Z(n), r = i.display;
  let o = !1;
  if (n && !s) {
    if (t && !Z(t))
      for (const l in t)
        n[l] == null && Zr(i, l, "");
    for (const l in n)
      l === "display" && (o = !0), Zr(i, l, n[l]);
  } else if (s) {
    if (t !== n) {
      const l = i[Tf];
      l && (n += ";" + l), i.cssText = n, o = lm.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Ri in e && (e[Ri] = o ? i.display : "", i.display = r);
}
const am = /[^\\];\s*$/, ic = /\s*!important$/;
function Zr(e, t, n) {
  if (j(n))
    n.forEach((i) => Zr(e, t, i));
  else if (n == null && (n = ""), De.NODE_ENV !== "production" && am.test(n) && xe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = fm(e, t);
    ic.test(n) ? e.setProperty(
      $e(i),
      n.replace(ic, ""),
      "important"
    ) : e[i] = n;
  }
}
const sc = ["Webkit", "Moz", "ms"], vr = {};
function fm(e, t) {
  const n = vr[t];
  if (n)
    return n;
  let i = Ee(t);
  if (i !== "filter" && i in e)
    return vr[t] = i;
  i = bt(i);
  for (let s = 0; s < sc.length; s++) {
    const r = sc[s] + i;
    if (r in e)
      return vr[t] = r;
  }
  return t;
}
const rc = "http://www.w3.org/1999/xlink";
function um(e, t, n, i, s) {
  if (i && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(rc, t.slice(6, t.length)) : e.setAttributeNS(rc, t, n);
  else {
    const r = Yu(t);
    n == null || r && !ho(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function dm(e, t, n, i, s, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    i && o(i, s, r), e[t] = n ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    e._value = n;
    const a = l === "OPTION" ? e.getAttribute("value") : e.value, u = n ?? "";
    a !== u && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = ho(n) : n == null && a === "string" ? (n = "", c = !0) : a === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    De.NODE_ENV !== "production" && !c && xe(
      `Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  c && e.removeAttribute(t);
}
function Vt(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function pm(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const oc = Symbol("_vei");
function hm(e, t, n, i, s = null) {
  const r = e[oc] || (e[oc] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [l, c] = mm(t);
    if (i) {
      const a = r[t] = ym(i, s);
      Vt(e, l, a, c);
    } else
      o && (pm(e, l, o, c), r[t] = void 0);
  }
}
const lc = /(?:Once|Passive|Capture)$/;
function mm(e) {
  let t;
  if (lc.test(e)) {
    t = {};
    let i;
    for (; i = e.match(lc); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : $e(e.slice(2)), t];
}
let Or = 0;
const gm = /* @__PURE__ */ Promise.resolve(), Em = () => Or || (gm.then(() => Or = 0), Or = Date.now());
function ym(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Xe(
      _m(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = Em(), n;
}
function _m(e, t) {
  if (j(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((i) => (s) => !s._stopped && i && i(s));
  } else
    return t;
}
const cc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Nm = (e, t, n, i, s, r, o, l, c) => {
  const a = s === "svg";
  t === "class" ? sm(e, i, a) : t === "style" ? cm(e, n, i) : At(t) ? gs(t) || hm(e, t, n, i, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : bm(e, t, i, a)) ? dm(
    e,
    t,
    i,
    r,
    o,
    l,
    c
  ) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), um(e, t, i, a));
};
function bm(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && cc(t) && J(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return cc(t) && Z(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Df(e, t) {
  const n = /* @__PURE__ */ $o(e);
  class i extends rr {
    constructor(r) {
      super(n, r, t);
    }
  }
  return i.def = n, i;
}
/*! #__NO_SIDE_EFFECTS__ */
const vm = /* @__NO_SIDE_EFFECTS__ */ (e) => /* @__PURE__ */ Df(e, Lf), Om = typeof HTMLElement < "u" ? HTMLElement : class {
};
class rr extends Om {
  constructor(t, n = {}, i) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && i ? i(this._createVNode(), this.shadowRoot) : (De.NODE_ENV !== "production" && this.shadowRoot && xe(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Gs(() => {
      this._connected || (Qr(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let i = 0; i < this.attributes.length; i++)
      this._setAttr(this.attributes[i].name);
    this._ob = new MutationObserver((i) => {
      for (const s of i)
        this._setAttr(s.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (i, s = !1) => {
      const { props: r, styles: o } = i;
      let l;
      if (r && !j(r))
        for (const c in r) {
          const a = r[c];
          (a === Number || a && a.type === Number) && (c in this._props && (this._props[c] = ys(this._props[c])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ee(c)] = !0);
        }
      this._numberProps = l, s && this._resolveProps(i), this._applyStyles(o), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((i) => t(i, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, i = j(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && i.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of i.map(Ee))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(r) {
          this._setProp(s, r);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const i = Ee(t);
    this._numberProps && this._numberProps[i] && (n = ys(n)), this._setProp(i, n, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, i = !0, s = !0) {
    n !== this._props[t] && (this._props[t] = n, s && this._instance && this._update(), i && (n === !0 ? this.setAttribute($e(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute($e(t), n + "") : n || this.removeAttribute($e(t))));
  }
  _update() {
    Qr(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = he(this._def, ie({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, De.NODE_ENV !== "production" && (n.ceReload = (r) => {
        this._styles && (this._styles.forEach((o) => this.shadowRoot.removeChild(o)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const i = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(r, {
            detail: o
          })
        );
      };
      n.emit = (r, ...o) => {
        i(r, o), $e(r) !== r && i($e(r), o);
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof rr) {
          n.parent = s._instance, n.provides = s._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const i = document.createElement("style");
      i.textContent = n, this.shadowRoot.appendChild(i), De.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(i);
    });
  }
}
function Sm(e = "$style") {
  {
    const t = Mt();
    if (!t)
      return De.NODE_ENV !== "production" && xe("useCssModule must be called inside setup()"), le;
    const n = t.type.__cssModules;
    if (!n)
      return De.NODE_ENV !== "production" && xe("Current instance does not have CSS modules injected."), le;
    const i = n[e];
    return i || (De.NODE_ENV !== "production" && xe(`Current instance does not have CSS module named "${e}".`), le);
  }
}
const wf = /* @__PURE__ */ new WeakMap(), Vf = /* @__PURE__ */ new WeakMap(), Ds = Symbol("_moveCb"), ac = Symbol("_enterCb"), xf = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ ie({}, tm, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Mt(), i = Mo();
    let s, r;
    return Qs(() => {
      if (!s.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!xm(
        s[0].el,
        n.vnode.el,
        o
      ))
        return;
      s.forEach(Dm), s.forEach(wm);
      const l = s.filter(Vm);
      Cf(), l.forEach((c) => {
        const a = c.el, u = a.style;
        Tt(a, o), u.transform = u.webkitTransform = u.transitionDuration = "";
        const f = a[Ds] = (p) => {
          p && p.target !== a || (!p || /transform$/.test(p.propertyName)) && (a.removeEventListener("transitionend", f), a[Ds] = null, Bt(a, o));
        };
        a.addEventListener("transitionend", f);
      });
    }), () => {
      const o = Q(e), l = Of(o);
      let c = o.tag || Ce;
      s = r, r = t.default ? Xs(t.default()) : [];
      for (let a = 0; a < r.length; a++) {
        const u = r[a];
        u.key != null ? Sn(
          u,
          Kn(u, l, i, n)
        ) : De.NODE_ENV !== "production" && xe("<TransitionGroup> children must be keyed.");
      }
      if (s)
        for (let a = 0; a < s.length; a++) {
          const u = s[a];
          Sn(
            u,
            Kn(u, l, i, n)
          ), wf.set(u, u.el.getBoundingClientRect());
        }
      return he(c, null, r);
    };
  }
}, Cm = (e) => delete e.mode;
xf.props;
const Tm = xf;
function Dm(e) {
  const t = e.el;
  t[Ds] && t[Ds](), t[ac] && t[ac]();
}
function wm(e) {
  Vf.set(e, e.el.getBoundingClientRect());
}
function Vm(e) {
  const t = wf.get(e), n = Vf.get(e), i = t.left - n.left, s = t.top - n.top;
  if (i || s) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${i}px,${s}px)`, r.transitionDuration = "0s", e;
  }
}
function xm(e, t, n) {
  const i = e.cloneNode(), s = e[qn];
  s && s.forEach((l) => {
    l.split(/\s+/).forEach((c) => c && i.classList.remove(c));
  }), n.split(/\s+/).forEach((l) => l && i.classList.add(l)), i.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(i);
  const { hasTransform: o } = Sf(i);
  return r.removeChild(i), o;
}
const rn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return j(t) ? (n) => Wt(t, n) : t;
};
function Am(e) {
  e.target.composing = !0;
}
function fc(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const st = Symbol("_assign"), ws = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, s) {
    e[st] = rn(s);
    const r = i || s.props && s.props.type === "number";
    Vt(e, t ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), r && (l = Oi(l)), e[st](l);
    }), n && Vt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Vt(e, "compositionstart", Am), Vt(e, "compositionend", fc), Vt(e, "change", fc));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: i, number: s } }, r) {
    if (e[st] = rn(r), e.composing)
      return;
    const o = s || e.type === "number" ? Oi(e.value) : e.value, l = t ?? "";
    o !== l && (document.activeElement === e && e.type !== "range" && (n || i && e.value.trim() === l) || (e.value = l));
  }
}, Go = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[st] = rn(n), Vt(e, "change", () => {
      const i = e._modelValue, s = Wn(e), r = e.checked, o = e[st];
      if (j(i)) {
        const l = Hs(i, s), c = l !== -1;
        if (r && !c)
          o(i.concat(s));
        else if (!r && c) {
          const a = [...i];
          a.splice(l, 1), o(a);
        }
      } else if (wn(i)) {
        const l = new Set(i);
        r ? l.add(s) : l.delete(s), o(l);
      } else
        o(If(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: uc,
  beforeUpdate(e, t, n) {
    e[st] = rn(n), uc(e, t, n);
  }
};
function uc(e, { value: t, oldValue: n }, i) {
  e._modelValue = t, j(t) ? e.checked = Hs(t, i.props.value) > -1 : wn(t) ? e.checked = t.has(i.props.value) : t !== n && (e.checked = nn(t, If(e, !0)));
}
const zo = {
  created(e, { value: t }, n) {
    e.checked = nn(t, n.props.value), e[st] = rn(n), Vt(e, "change", () => {
      e[st](Wn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, i) {
    e[st] = rn(i), t !== n && (e.checked = nn(t, i.props.value));
  }
}, Af = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    const s = wn(t);
    Vt(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? Oi(Wn(o)) : Wn(o)
      );
      e[st](
        e.multiple ? s ? new Set(r) : r : r[0]
      ), e._assigning = !0, Gs(() => {
        e._assigning = !1;
      });
    }), e[st] = rn(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, oldValue: n, modifiers: { number: i } }) {
    dc(e, t, n, i);
  },
  beforeUpdate(e, t, n) {
    e[st] = rn(n);
  },
  updated(e, { value: t, oldValue: n, modifiers: { number: i } }) {
    e._assigning || dc(e, t, n, i);
  }
};
function dc(e, t, n, i) {
  const s = e.multiple, r = j(t);
  if (s && !r && !wn(t)) {
    De.NODE_ENV !== "production" && xe(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, l = e.options.length; o < l; o++) {
    const c = e.options[o], a = Wn(c);
    if (s)
      if (r) {
        const u = typeof a;
        u === "string" || u === "number" ? c.selected = t.includes(
          i ? Oi(a) : a
        ) : c.selected = Hs(t, a) > -1;
      } else
        c.selected = t.has(a);
    else if (nn(Wn(c), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Wn(e) {
  return "_value" in e ? e._value : e.value;
}
function If(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const kf = {
  created(e, t, n) {
    os(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    os(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, i) {
    os(e, t, n, i, "beforeUpdate");
  },
  updated(e, t, n, i) {
    os(e, t, n, i, "updated");
  }
};
function Rf(e, t) {
  switch (e) {
    case "SELECT":
      return Af;
    case "TEXTAREA":
      return ws;
    default:
      switch (t) {
        case "checkbox":
          return Go;
        case "radio":
          return zo;
        default:
          return ws;
      }
  }
}
function os(e, t, n, i, s) {
  const o = Rf(
    e.tagName,
    n.props && n.props.type
  )[s];
  o && o(e, t, n, i);
}
function Im() {
  ws.getSSRProps = ({ value: e }) => ({ value: e }), zo.getSSRProps = ({ value: e }, t) => {
    if (t.props && nn(t.props.value, e))
      return { checked: !0 };
  }, Go.getSSRProps = ({ value: e }, t) => {
    if (j(e)) {
      if (t.props && Hs(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (wn(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, kf.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = Rf(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const km = ["ctrl", "shift", "alt", "meta"], Rm = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => km.some((n) => e[`${n}Key`] && !t.includes(n))
}, Mm = (e, t) => {
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (s, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = Rm[t[o]];
      if (l && l(s, t))
        return;
    }
    return e(s, ...r);
  });
}, Pm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, $m = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = (s) => {
    if (!("key" in s))
      return;
    const r = $e(s.key);
    if (t.some((o) => o === r || Pm[o] === r))
      return e(s);
  });
}, Mf = /* @__PURE__ */ ie({ patchProp: Nm }, em);
let bi, pc = !1;
function Pf() {
  return bi || (bi = Ya(Mf));
}
function $f() {
  return bi = pc ? bi : Xa(Mf), pc = !0, bi;
}
const Qr = (...e) => {
  Pf().render(...e);
}, Lf = (...e) => {
  $f().hydrate(...e);
}, Ff = (...e) => {
  const t = Pf().createApp(...e);
  De.NODE_ENV !== "production" && (Hf(t), jf(t));
  const { mount: n } = t;
  return t.mount = (i) => {
    const s = Uf(i);
    if (!s)
      return;
    const r = t._component;
    !J(r) && !r.render && !r.template && (r.template = s.innerHTML), s.innerHTML = "";
    const o = n(s, !1, Bf(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
}, Lm = (...e) => {
  const t = $f().createApp(...e);
  De.NODE_ENV !== "production" && (Hf(t), jf(t));
  const { mount: n } = t;
  return t.mount = (i) => {
    const s = Uf(i);
    if (s)
      return n(s, !0, Bf(s));
  }, t;
};
function Bf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Hf(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Fc(t) || Bc(t) || Hc(t),
    writable: !1
  });
}
function jf(e) {
  if (Ko()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        xe(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, i = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return xe(i), n;
      },
      set() {
        xe(i);
      }
    });
  }
}
function Uf(e) {
  if (Z(e)) {
    const t = document.querySelector(e);
    return De.NODE_ENV !== "production" && !t && xe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return De.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && xe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let hc = !1;
const Fm = () => {
  hc || (hc = !0, Im(), rm());
}, Bm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: wa,
  BaseTransitionPropsValidators: Po,
  Comment: ve,
  DeprecationTypes: Xh,
  EffectScope: mo,
  ErrorCodes: Ud,
  ErrorTypeStrings: Kh,
  Fragment: Ce,
  KeepAlive: xp,
  ReactiveEffect: Un,
  Static: en,
  Suspense: yp,
  Teleport: xh,
  Text: sn,
  TrackOpTypes: $d,
  Transition: qo,
  TransitionGroup: Tm,
  TriggerOpTypes: Ld,
  VueElement: rr,
  assertNumber: Co,
  callWithAsyncErrorHandling: Xe,
  callWithErrorHandling: Nt,
  camelize: Ee,
  capitalize: bt,
  cloneVNode: rt,
  compatUtils: Yh,
  computed: yf,
  createApp: Ff,
  createBlock: Ho,
  createCommentVNode: Rh,
  createElementBlock: rf,
  createElementVNode: Ii,
  createHydrationRenderer: Xa,
  createPropsRestProxy: Xp,
  createRenderer: Ya,
  createSSRApp: Lm,
  createSlots: kp,
  createStaticVNode: kh,
  createTextVNode: jo,
  createVNode: he,
  customRef: aa,
  defineAsyncComponent: wp,
  defineComponent: $o,
  defineCustomElement: Df,
  defineEmits: Hp,
  defineExpose: jp,
  defineModel: qp,
  defineOptions: Up,
  defineProps: Bp,
  defineSSRCustomElement: vm,
  defineSlots: Kp,
  devtools: qh,
  effect: sd,
  effectScope: td,
  getCurrentInstance: Mt,
  getCurrentScope: qc,
  getTransitionRawChildren: Xs,
  guardReactiveProps: cf,
  h: _f,
  handleError: cn,
  hasInjectionContext: lh,
  hydrate: Lf,
  initCustomFormatter: Nf,
  initDirectivesForSSR: Fm,
  inject: Ei,
  isMemoSame: bf,
  isProxy: Si,
  isReactive: Xt,
  isReadonly: It,
  isRef: Oe,
  isRuntimeOnly: Ko,
  isShallow: Zt,
  isVNode: kt,
  markRaw: No,
  mergeDefaults: Jp,
  mergeModels: Yp,
  mergeProps: ff,
  nextTick: Gs,
  normalizeClass: Vn,
  normalizeProps: Ku,
  normalizeStyle: Qn,
  onActivated: xa,
  onBeforeMount: ka,
  onBeforeUnmount: er,
  onBeforeUpdate: Ra,
  onDeactivated: Aa,
  onErrorCaptured: La,
  onMounted: ti,
  onRenderTracked: $a,
  onRenderTriggered: Pa,
  onScopeDispose: nd,
  onServerPrefetch: Ma,
  onUnmounted: tr,
  onUpdated: Qs,
  openBlock: Ki,
  popScopeId: cp,
  provide: Ua,
  proxyRefs: So,
  pushScopeId: lp,
  queuePostFlushCb: Di,
  reactive: Ks,
  readonly: _o,
  ref: xt,
  registerRuntimeCompiler: hf,
  render: Qr,
  renderList: Ip,
  renderSlot: Rp,
  resolveComponent: hp,
  resolveDirective: gp,
  resolveDynamicComponent: mp,
  resolveFilter: Jh,
  resolveTransitionHooks: Kn,
  setBlockTracking: jr,
  setDevtoolsHook: Wh,
  setTransitionHooks: Sn,
  shallowReactive: oa,
  shallowReadonly: dn,
  shallowRef: Dd,
  ssrContextKey: va,
  ssrUtils: zh,
  stop: rd,
  toDisplayString: Dr,
  toHandlerKey: gt,
  toHandlers: Mp,
  toRaw: Q,
  toRef: Pd,
  toRefs: kd,
  toValue: xd,
  transformVNodeArgs: Ah,
  triggerRef: Vd,
  unref: Oo,
  useAttrs: zp,
  useCssModule: Sm,
  useCssVars: om,
  useModel: jh,
  useSSRContext: Oa,
  useSlots: Gp,
  useTransitionState: Mo,
  vModelCheckbox: Go,
  vModelDynamic: kf,
  vModelRadio: zo,
  vModelSelect: Af,
  vModelText: ws,
  vShow: Wo,
  version: Jr,
  warn: xe,
  watch: mi,
  watchEffect: Sp,
  watchPostEffect: Sa,
  watchSyncEffect: Ca,
  withAsyncContext: Zp,
  withCtx: xo,
  withDefaults: Wp,
  withDirectives: Tp,
  withKeys: $m,
  withMemo: Uh,
  withModifiers: Mm,
  withScopeId: ap
}, Symbol.toStringTag, { value: "Module" }));
var B = {};
const Mi = Symbol(B.NODE_ENV !== "production" ? "Fragment" : ""), vi = Symbol(B.NODE_ENV !== "production" ? "Teleport" : ""), Jo = Symbol(B.NODE_ENV !== "production" ? "Suspense" : ""), Vs = Symbol(B.NODE_ENV !== "production" ? "KeepAlive" : ""), Kf = Symbol(B.NODE_ENV !== "production" ? "BaseTransition" : ""), Dn = Symbol(B.NODE_ENV !== "production" ? "openBlock" : ""), qf = Symbol(B.NODE_ENV !== "production" ? "createBlock" : ""), Wf = Symbol(B.NODE_ENV !== "production" ? "createElementBlock" : ""), Yo = Symbol(B.NODE_ENV !== "production" ? "createVNode" : ""), Xo = Symbol(B.NODE_ENV !== "production" ? "createElementVNode" : ""), Wi = Symbol(B.NODE_ENV !== "production" ? "createCommentVNode" : ""), Zo = Symbol(B.NODE_ENV !== "production" ? "createTextVNode" : ""), Gf = Symbol(B.NODE_ENV !== "production" ? "createStaticVNode" : ""), Qo = Symbol(B.NODE_ENV !== "production" ? "resolveComponent" : ""), el = Symbol(
  B.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), tl = Symbol(B.NODE_ENV !== "production" ? "resolveDirective" : ""), nl = Symbol(B.NODE_ENV !== "production" ? "resolveFilter" : ""), il = Symbol(B.NODE_ENV !== "production" ? "withDirectives" : ""), sl = Symbol(B.NODE_ENV !== "production" ? "renderList" : ""), zf = Symbol(B.NODE_ENV !== "production" ? "renderSlot" : ""), Jf = Symbol(B.NODE_ENV !== "production" ? "createSlots" : ""), or = Symbol(B.NODE_ENV !== "production" ? "toDisplayString" : ""), xs = Symbol(B.NODE_ENV !== "production" ? "mergeProps" : ""), rl = Symbol(B.NODE_ENV !== "production" ? "normalizeClass" : ""), ol = Symbol(B.NODE_ENV !== "production" ? "normalizeStyle" : ""), Pi = Symbol(B.NODE_ENV !== "production" ? "normalizeProps" : ""), Gi = Symbol(B.NODE_ENV !== "production" ? "guardReactiveProps" : ""), ll = Symbol(B.NODE_ENV !== "production" ? "toHandlers" : ""), eo = Symbol(B.NODE_ENV !== "production" ? "camelize" : ""), Hm = Symbol(B.NODE_ENV !== "production" ? "capitalize" : ""), to = Symbol(B.NODE_ENV !== "production" ? "toHandlerKey" : ""), As = Symbol(B.NODE_ENV !== "production" ? "setBlockTracking" : ""), jm = Symbol(B.NODE_ENV !== "production" ? "pushScopeId" : ""), Um = Symbol(B.NODE_ENV !== "production" ? "popScopeId" : ""), cl = Symbol(B.NODE_ENV !== "production" ? "withCtx" : ""), Km = Symbol(B.NODE_ENV !== "production" ? "unref" : ""), qm = Symbol(B.NODE_ENV !== "production" ? "isRef" : ""), al = Symbol(B.NODE_ENV !== "production" ? "withMemo" : ""), Yf = Symbol(B.NODE_ENV !== "production" ? "isMemoSame" : ""), Gn = {
  [Mi]: "Fragment",
  [vi]: "Teleport",
  [Jo]: "Suspense",
  [Vs]: "KeepAlive",
  [Kf]: "BaseTransition",
  [Dn]: "openBlock",
  [qf]: "createBlock",
  [Wf]: "createElementBlock",
  [Yo]: "createVNode",
  [Xo]: "createElementVNode",
  [Wi]: "createCommentVNode",
  [Zo]: "createTextVNode",
  [Gf]: "createStaticVNode",
  [Qo]: "resolveComponent",
  [el]: "resolveDynamicComponent",
  [tl]: "resolveDirective",
  [nl]: "resolveFilter",
  [il]: "withDirectives",
  [sl]: "renderList",
  [zf]: "renderSlot",
  [Jf]: "createSlots",
  [or]: "toDisplayString",
  [xs]: "mergeProps",
  [rl]: "normalizeClass",
  [ol]: "normalizeStyle",
  [Pi]: "normalizeProps",
  [Gi]: "guardReactiveProps",
  [ll]: "toHandlers",
  [eo]: "camelize",
  [Hm]: "capitalize",
  [to]: "toHandlerKey",
  [As]: "setBlockTracking",
  [jm]: "pushScopeId",
  [Um]: "popScopeId",
  [cl]: "withCtx",
  [Km]: "unref",
  [qm]: "isRef",
  [al]: "withMemo",
  [Yf]: "isMemoSame"
};
function Wm(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Gn[t] = e[t];
  });
}
const Ze = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function Gm(e, t = "") {
  return {
    type: 0,
    source: t,
    children: e,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: void 0,
    loc: Ze
  };
}
function $i(e, t, n, i, s, r, o, l = !1, c = !1, a = !1, u = Ze) {
  return e && (l ? (e.helper(Dn), e.helper(Yn(e.inSSR, a))) : e.helper(Jn(e.inSSR, a)), o && e.helper(il)), {
    type: 13,
    tag: t,
    props: n,
    children: i,
    patchFlag: s,
    dynamicProps: r,
    directives: o,
    isBlock: l,
    disableTracking: c,
    isComponent: a,
    loc: u
  };
}
function zi(e, t = Ze) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function nt(e, t = Ze) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function _e(e, t) {
  return {
    type: 16,
    loc: Ze,
    key: Z(e) ? ne(e, !0) : e,
    value: t
  };
}
function ne(e, t = !1, n = Ze, i = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : i
  };
}
function ut(e, t = Ze) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function Te(e, t = [], n = Ze) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function zn(e, t = void 0, n = !1, i = !1, s = Ze) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: i,
    loc: s
  };
}
function no(e, t, n, i = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: i,
    loc: Ze
  };
}
function zm(e, t, n = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    isVNode: n,
    loc: Ze
  };
}
function Jm(e) {
  return {
    type: 21,
    body: e,
    loc: Ze
  };
}
function Jn(e, t) {
  return e || t ? Yo : Xo;
}
function Yn(e, t) {
  return e || t ? qf : Wf;
}
function fl(e, { helper: t, removeHelper: n, inSSR: i }) {
  e.isBlock || (e.isBlock = !0, n(Jn(i, e.isComponent)), t(Dn), t(Yn(i, e.isComponent)));
}
const mc = new Uint8Array([123, 123]), gc = new Uint8Array([125, 125]);
function Ec(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Ye(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function Ft(e) {
  return e === 47 || e === 62 || Ye(e);
}
function Is(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const Ie = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class Ym {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = mc, this.delimiterClose = gc, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = mc, this.delimiterClose = gc;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(t) {
    let n = 1, i = t + 1;
    for (let s = this.newlines.length - 1; s >= 0; s--) {
      const r = this.newlines[s];
      if (t > r) {
        n = s + 2, i = t - r;
        break;
      }
    }
    return {
      column: i,
      line: n,
      offset: t
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(t) {
    t === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t));
  }
  stateInterpolationOpen(t) {
    if (t === this.delimiterOpen[this.delimiterIndex])
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const n = this.index + 1 - this.delimiterOpen.length;
        n > this.sectionStart && this.cbs.ontext(this.sectionStart, n), this.state = 3, this.sectionStart = n;
      } else
        this.delimiterIndex++;
    else
      this.inRCDATA ? (this.state = 32, this.stateInRCDATA(t)) : (this.state = 1, this.stateText(t));
  }
  stateInterpolation(t) {
    t === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(t));
  }
  stateInterpolationClose(t) {
    t === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(t));
  }
  stateSpecialStartSequence(t) {
    const n = this.sequenceIndex === this.currentSequence.length;
    if (!(n ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      Ft(t)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (t | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.inRCDATA = !1;
    else if (!n) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = 6, this.stateInTagName(t);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(t) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (t === 62 || Ye(t)) {
        const n = this.index - this.currentSequence.length;
        if (this.sectionStart < n) {
          const i = this.index;
          this.index = n, this.cbs.ontext(this.sectionStart, n), this.index = i;
        }
        this.sectionStart = n + 2, this.stateInClosingTagName(t), this.inRCDATA = !1;
        return;
      }
      this.sequenceIndex = 0;
    }
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Ie.TitleEnd || this.currentSequence === Ie.TextareaEnd && !this.inSFCRoot ? t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === Ie.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Ie.Cdata.length && (this.state = 28, this.currentSequence = Ie.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(t) {
    for (; ++this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      if (n === 10 && this.newlines.push(this.index), n === t)
        return !0;
    }
    return this.index = this.buffer.length - 1, !1;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(t) {
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Ie.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), this.state = 31;
  }
  enterRCDATA(t, n) {
    this.inRCDATA = !0, this.currentSequence = t, this.sequenceIndex = n;
  }
  stateBeforeTagName(t) {
    if (t === 33)
      this.state = 22, this.sectionStart = this.index + 1;
    else if (t === 63)
      this.state = 24, this.sectionStart = this.index + 1;
    else if (Ec(t))
      if (this.sectionStart = this.index, this.mode === 0)
        this.state = 6;
      else if (this.inSFCRoot)
        this.state = 34;
      else if (this.inXML)
        this.state = 6;
      else {
        const n = t | 32;
        n === 116 ? this.state = 30 : this.state = n === 115 ? 29 : 6;
      }
    else
      t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    Ft(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (Ft(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(Is("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    Ye(t) || (t === 62 ? (B.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = Ec(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || Ye(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, B.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : Ye(t) || (B.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(t));
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : Ye(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    t === 61 || Ft(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : B.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
      17,
      this.index
    );
  }
  stateInDirName(t) {
    t === 61 || Ft(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(t) {
    t === 61 || Ft(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(t) {
    t === 93 ? this.state = 14 : (t === 61 || Ft(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), B.NODE_ENV !== "production" && this.cbs.onerr(
      27,
      this.index
    ));
  }
  stateInDirModifier(t) {
    t === 61 || Ft(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(t) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(t);
  }
  stateAfterAttrName(t) {
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : Ye(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : Ye(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
  }
  handleInAttrValue(t, n) {
    (t === n || this.fastForwardTo(n)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(
      n === 34 ? 3 : 2,
      this.index + 1
    ), this.state = 11);
  }
  stateInAttrValueDoubleQuotes(t) {
    this.handleInAttrValue(t, 34);
  }
  stateInAttrValueSingleQuotes(t) {
    this.handleInAttrValue(t, 39);
  }
  stateInAttrValueNoQuotes(t) {
    Ye(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (B.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
      18,
      this.index
    );
  }
  stateBeforeDeclaration(t) {
    t === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = t === 45 ? 25 : 23;
  }
  stateInDeclaration(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(t) {
    t === 45 ? (this.state = 28, this.currentSequence = Ie.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    const n = t | 32;
    n === Ie.ScriptEnd[3] ? this.startSpecial(Ie.ScriptEnd, 4) : n === Ie.StyleEnd[3] ? this.startSpecial(Ie.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    const n = t | 32;
    n === Ie.TitleEnd[3] ? this.startSpecial(Ie.TitleEnd, 4) : n === Ie.TextareaEnd[3] ? this.startSpecial(Ie.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(t) {
    for (this.buffer = t; this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      switch (n === 10 && this.newlines.push(this.index), this.state) {
        case 1: {
          this.stateText(n);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(n);
          break;
        }
        case 3: {
          this.stateInterpolation(n);
          break;
        }
        case 4: {
          this.stateInterpolationClose(n);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(n);
          break;
        }
        case 32: {
          this.stateInRCDATA(n);
          break;
        }
        case 26: {
          this.stateCDATASequence(n);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(n);
          break;
        }
        case 12: {
          this.stateInAttrName(n);
          break;
        }
        case 13: {
          this.stateInDirName(n);
          break;
        }
        case 14: {
          this.stateInDirArg(n);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(n);
          break;
        }
        case 16: {
          this.stateInDirModifier(n);
          break;
        }
        case 28: {
          this.stateInCommentLike(n);
          break;
        }
        case 27: {
          this.stateInSpecialComment(n);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(n);
          break;
        }
        case 6: {
          this.stateInTagName(n);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(n);
          break;
        }
        case 9: {
          this.stateInClosingTagName(n);
          break;
        }
        case 5: {
          this.stateBeforeTagName(n);
          break;
        }
        case 17: {
          this.stateAfterAttrName(n);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(n);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(n);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(n);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(n);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(n);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(n);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(n);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(n);
          break;
        }
        case 23: {
          this.stateInDeclaration(n);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(n);
          break;
        }
        case 25: {
          this.stateBeforeComment(n);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(n);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup(), this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  finish() {
    this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const t = this.buffer.length;
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === Ie.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const Xm = {
  COMPILER_IS_ON_ELEMENT: {
    message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',
    link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
  },
  COMPILER_V_BIND_SYNC: {
    message: (e) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,
    link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
  },
  COMPILER_V_BIND_OBJECT_ORDER: {
    message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',
    link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
  },
  COMPILER_V_ON_NATIVE: {
    message: ".native modifier for v-on has been removed as is no longer necessary.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
  },
  COMPILER_V_IF_V_FOR_PRECEDENCE: {
    message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
  },
  COMPILER_NATIVE_TEMPLATE: {
    message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3."
  },
  COMPILER_INLINE_TEMPLATE: {
    message: '"inline-template" has been removed in Vue 3.',
    link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
  },
  COMPILER_FILTERS: {
    message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',
    link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
  }
};
function io(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function tn(e, t) {
  const n = io("MODE", t), i = io(e, t);
  return n === 3 ? i === !0 : i !== !1;
}
function Xn(e, t, n, ...i) {
  const s = tn(e, t);
  return B.NODE_ENV !== "production" && s && ks(e, t, n, ...i), s;
}
function ks(e, t, n, ...i) {
  if (io(e, t) === "suppress-warning")
    return;
  const { message: r, link: o } = Xm[e], l = `(deprecation ${e}) ${typeof r == "function" ? r(...i) : r}${o ? `
  Details: ${o}` : ""}`, c = new SyntaxError(l);
  c.code = e, n && (c.loc = n), t.onWarn(c);
}
function ul(e) {
  throw e;
}
function Xf(e) {
  B.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function ue(e, t, n, i) {
  const s = B.NODE_ENV !== "production" ? (n || Zm)[e] + (i || "") : `https://vuejs.org/error-reference/#compiler-${e}`, r = new SyntaxError(String(s));
  return r.code = e, r.loc = t, r;
}
const Zm = {
  // parse errors
  0: "Illegal comment.",
  1: "CDATA section is allowed only in XML context.",
  2: "Duplicate attribute.",
  3: "End tag cannot have attributes.",
  4: "Illegal '/' in tags.",
  5: "Unexpected EOF in tag.",
  6: "Unexpected EOF in CDATA section.",
  7: "Unexpected EOF in comment.",
  8: "Unexpected EOF in script.",
  9: "Unexpected EOF in tag.",
  10: "Incorrectly closed comment.",
  11: "Incorrectly opened comment.",
  12: "Illegal tag name. Use '&lt;' to print '<'.",
  13: "Attribute value was expected.",
  14: "End tag name was expected.",
  15: "Whitespace was expected.",
  16: "Unexpected '<!--' in comment.",
  17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  19: "Attribute name cannot start with '='.",
  21: "'<?' is allowed only in XML context.",
  20: "Unexpected null character.",
  22: "Illegal '/' in tags.",
  // Vue-specific parse errors
  23: "Invalid end tag.",
  24: "Element is missing end tag.",
  25: "Interpolation end sign was not found.",
  27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  26: "Legal directive name was expected.",
  // transform errors
  28: "v-if/v-else-if is missing expression.",
  29: "v-if/else branches must use unique keys.",
  30: "v-else/v-else-if has no adjacent v-if or v-else-if.",
  31: "v-for is missing expression.",
  32: "v-for has invalid expression.",
  33: "<template v-for> key should be placed on the <template> tag.",
  34: "v-bind is missing expression.",
  52: "v-bind with same-name shorthand only allows static argument.",
  35: "v-on is missing expression.",
  36: "Unexpected custom directive on <slot> outlet.",
  37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
  38: "Duplicate slot names found. ",
  39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
  40: "v-slot can only be used on components or <template> tags.",
  41: "v-model is missing expression.",
  42: "v-model value must be a valid JavaScript member expression.",
  43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
  44: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  45: "Error parsing JavaScript expression: ",
  46: "<KeepAlive> expects exactly one child component.",
  51: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",
  // generic errors
  47: '"prefixIdentifiers" option is not supported in this build of compiler.',
  48: "ES module mode is not supported in this build of compiler.",
  49: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',
  50: '"scopeId" option is only supported in module mode.',
  // just to fulfill types
  53: ""
}, ze = (e) => e.type === 4 && e.isStatic;
function Zf(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return vi;
    case "Suspense":
    case "suspense":
      return Jo;
    case "KeepAlive":
    case "keep-alive":
      return Vs;
    case "BaseTransition":
    case "base-transition":
      return Kf;
  }
}
const Qm = /^\d|[^\$\w]/, dl = (e) => !Qm.test(e), eg = /[A-Za-z_$\xA0-\uFFFF]/, tg = /[\.\?\w$\xA0-\uFFFF]/, ng = /\s+[.[]\s*|\s*[.[]\s+/g, ig = (e) => {
  e = e.trim().replace(ng, (o) => o.trim());
  let t = 0, n = [], i = 0, s = 0, r = null;
  for (let o = 0; o < e.length; o++) {
    const l = e.charAt(o);
    switch (t) {
      case 0:
        if (l === "[")
          n.push(t), t = 1, i++;
        else if (l === "(")
          n.push(t), t = 2, s++;
        else if (!(o === 0 ? eg : tg).test(l))
          return !1;
        break;
      case 1:
        l === "'" || l === '"' || l === "`" ? (n.push(t), t = 3, r = l) : l === "[" ? i++ : l === "]" && (--i || (t = n.pop()));
        break;
      case 2:
        if (l === "'" || l === '"' || l === "`")
          n.push(t), t = 3, r = l;
        else if (l === "(")
          s++;
        else if (l === ")") {
          if (o === e.length - 1)
            return !1;
          --s || (t = n.pop());
        }
        break;
      case 3:
        l === r && (t = n.pop(), r = null);
        break;
    }
  }
  return !i && !s;
}, Qf = ig;
function yc(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function tt(e, t, n = !1) {
  for (let i = 0; i < e.props.length; i++) {
    const s = e.props[i];
    if (s.type === 7 && (n || s.exp) && (Z(t) ? s.name === t : t.test(s.name)))
      return s;
  }
}
function Li(e, t, n = !1, i = !1) {
  for (let s = 0; s < e.props.length; s++) {
    const r = e.props[s];
    if (r.type === 6) {
      if (n)
        continue;
      if (r.name === t && (r.value || i))
        return r;
    } else if (r.name === "bind" && (r.exp || i) && zt(r.arg, t))
      return r;
  }
}
function zt(e, t) {
  return !!(e && ze(e) && e.content === t);
}
function sg(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function Sr(e) {
  return e.type === 5 || e.type === 2;
}
function rg(e) {
  return e.type === 7 && e.name === "slot";
}
function Rs(e) {
  return e.type === 1 && e.tagType === 3;
}
function Ms(e) {
  return e.type === 1 && e.tagType === 2;
}
const og = /* @__PURE__ */ new Set([Pi, Gi]);
function eu(e, t = []) {
  if (e && !Z(e) && e.type === 14) {
    const n = e.callee;
    if (!Z(n) && og.has(n))
      return eu(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function Ps(e, t, n) {
  let i, s = e.type === 13 ? e.props : e.arguments[2], r = [], o;
  if (s && !Z(s) && s.type === 14) {
    const l = eu(s);
    s = l[0], r = l[1], o = r[r.length - 1];
  }
  if (s == null || Z(s))
    i = nt([t]);
  else if (s.type === 14) {
    const l = s.arguments[0];
    !Z(l) && l.type === 15 ? _c(t, l) || l.properties.unshift(t) : s.callee === ll ? i = Te(n.helper(xs), [
      nt([t]),
      s
    ]) : s.arguments.unshift(nt([t])), !i && (i = s);
  } else
    s.type === 15 ? (_c(t, s) || s.properties.unshift(t), i = s) : (i = Te(n.helper(xs), [
      nt([t]),
      s
    ]), o && o.callee === Gi && (o = r[r.length - 2]));
  e.type === 13 ? o ? o.arguments[0] = i : e.props = i : o ? o.arguments[0] = i : e.arguments[2] = i;
}
function _c(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const i = e.key.content;
    n = t.properties.some(
      (s) => s.key.type === 4 && s.key.content === i
    );
  }
  return n;
}
function Fi(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, i) => n === "-" ? "_" : e.charCodeAt(i).toString())}`;
}
function lg(e) {
  return e.type === 14 && e.callee === al ? e.arguments[1].returns : e;
}
const cg = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, tu = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: ui,
  isPreTag: ui,
  isCustomElement: ui,
  onError: ul,
  onWarn: Xf,
  comments: B.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ce = tu, Bi = null, vn = "", Pe = null, ae = null, Ke = "", Dt = -1, un = -1, $s = 0, qt = !1, so = null;
const ye = [], de = new Ym(ye, {
  onerr: Ue,
  ontext(e, t) {
    ls(ke(e, t), e, t);
  },
  ontextentity(e, t, n) {
    ls(e, t, n);
  },
  oninterpolation(e, t) {
    if (qt)
      return ls(ke(e, t), e, t);
    let n = e + de.delimiterOpen.length, i = t - de.delimiterClose.length;
    for (; Ye(vn.charCodeAt(n)); )
      n++;
    for (; Ye(vn.charCodeAt(i - 1)); )
      i--;
    let s = ke(n, i);
    s.includes("&") && (s = ce.decodeEntities(s, !1)), ro({
      type: 5,
      content: ps(s, !1, Se(n, i)),
      loc: Se(e, t)
    });
  },
  onopentagname(e, t) {
    const n = ke(e, t);
    Pe = {
      type: 1,
      tag: n,
      ns: ce.getNamespace(n, ye[0], ce.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: Se(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    bc(e);
  },
  onclosetag(e, t) {
    const n = ke(e, t);
    if (!ce.isVoidTag(n)) {
      let i = !1;
      for (let s = 0; s < ye.length; s++)
        if (ye[s].tag.toLowerCase() === n.toLowerCase()) {
          i = !0, s > 0 && Ue(24, ye[0].loc.start.offset);
          for (let o = 0; o <= s; o++) {
            const l = ye.shift();
            ds(l, t, o < s);
          }
          break;
        }
      i || Ue(23, nu(e, 60));
    }
  },
  onselfclosingtag(e) {
    var t;
    const n = Pe.tag;
    Pe.isSelfClosing = !0, bc(e), ((t = ye[0]) == null ? void 0 : t.tag) === n && ds(ye.shift(), e);
  },
  onattribname(e, t) {
    ae = {
      type: 6,
      name: ke(e, t),
      nameLoc: Se(e, t),
      value: void 0,
      loc: Se(e)
    };
  },
  ondirname(e, t) {
    const n = ke(e, t), i = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!qt && i === "" && Ue(26, e), qt || i === "")
      ae = {
        type: 6,
        name: n,
        nameLoc: Se(e, t),
        value: void 0,
        loc: Se(e)
      };
    else if (ae = {
      type: 7,
      name: i,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? ["prop"] : [],
      loc: Se(e)
    }, i === "pre") {
      qt = de.inVPre = !0, so = Pe;
      const s = Pe.props;
      for (let r = 0; r < s.length; r++)
        s[r].type === 7 && (s[r] = Eg(s[r]));
    }
  },
  ondirarg(e, t) {
    if (e === t)
      return;
    const n = ke(e, t);
    if (qt)
      ae.name += n, hn(ae.nameLoc, t);
    else {
      const i = n[0] !== "[";
      ae.arg = ps(
        i ? n : n.slice(1, -1),
        i,
        Se(e, t),
        i ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = ke(e, t);
    if (qt)
      ae.name += "." + n, hn(ae.nameLoc, t);
    else if (ae.name === "slot") {
      const i = ae.arg;
      i && (i.content += "." + n, hn(i.loc, t));
    } else
      ae.modifiers.push(n);
  },
  onattribdata(e, t) {
    Ke += ke(e, t), Dt < 0 && (Dt = e), un = t;
  },
  onattribentity(e, t, n) {
    Ke += e, Dt < 0 && (Dt = t), un = n;
  },
  onattribnameend(e) {
    const t = ae.loc.start.offset, n = ke(t, e);
    ae.type === 7 && (ae.rawName = n), Pe.props.some(
      (i) => (i.type === 7 ? i.rawName : i.name) === n
    ) && Ue(2, t);
  },
  onattribend(e, t) {
    if (Pe && ae) {
      if (hn(ae.loc, t), e !== 0)
        if (Ke.includes("&") && (Ke = ce.decodeEntities(
          Ke,
          !0
        )), ae.type === 6)
          ae.name === "class" && (Ke = su(Ke).trim()), e === 1 && !Ke && Ue(13, t), ae.value = {
            type: 2,
            content: Ke,
            loc: e === 1 ? Se(Dt, un) : Se(Dt - 1, un + 1)
          }, de.inSFCRoot && Pe.tag === "template" && ae.name === "lang" && Ke && Ke !== "html" && de.enterRCDATA(Is("</template"), 0);
        else {
          let n = 0;
          ae.exp = ps(
            Ke,
            !1,
            Se(Dt, un),
            0,
            n
          ), ae.name === "for" && (ae.forParseResult = fg(ae.exp));
          let i = -1;
          ae.name === "bind" && (i = ae.modifiers.indexOf("sync")) > -1 && Xn(
            "COMPILER_V_BIND_SYNC",
            ce,
            ae.loc,
            ae.rawName
          ) && (ae.name = "model", ae.modifiers.splice(i, 1));
        }
      (ae.type !== 7 || ae.name !== "pre") && Pe.props.push(ae);
    }
    Ke = "", Dt = un = -1;
  },
  oncomment(e, t) {
    ce.comments && ro({
      type: 3,
      content: ke(e, t),
      loc: Se(e - 4, t + 3)
    });
  },
  onend() {
    const e = vn.length;
    if (B.NODE_ENV !== "production" && de.state !== 1)
      switch (de.state) {
        case 5:
        case 8:
          Ue(5, e);
          break;
        case 3:
        case 4:
          Ue(
            25,
            de.sectionStart
          );
          break;
        case 28:
          de.currentSequence === Ie.CdataEnd ? Ue(6, e) : Ue(7, e);
          break;
        case 6:
        case 7:
        case 9:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
          Ue(9, e);
          break;
      }
    for (let t = 0; t < ye.length; t++)
      ds(ye[t], e - 1), Ue(24, ye[t].loc.start.offset);
  },
  oncdata(e, t) {
    ye[0].ns !== 0 ? ls(ke(e, t), e, t) : Ue(1, e - 9);
  },
  onprocessinginstruction(e) {
    (ye[0] ? ye[0].ns : ce.ns) === 0 && Ue(
      21,
      e - 1
    );
  }
}), Nc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, ag = /^\(|\)$/g;
function fg(e) {
  const t = e.loc, n = e.content, i = n.match(cg);
  if (!i)
    return;
  const [, s, r] = i, o = (f, p, E = !1) => {
    const y = t.start.offset + p, T = y + f.length;
    return ps(
      f,
      !1,
      Se(y, T),
      0,
      E ? 1 : 0
      /* Normal */
    );
  }, l = {
    source: o(r.trim(), n.indexOf(r, s.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let c = s.trim().replace(ag, "").trim();
  const a = s.indexOf(c), u = c.match(Nc);
  if (u) {
    c = c.replace(Nc, "").trim();
    const f = u[1].trim();
    let p;
    if (f && (p = n.indexOf(f, a + c.length), l.key = o(f, p, !0)), u[2]) {
      const E = u[2].trim();
      E && (l.index = o(
        E,
        n.indexOf(
          E,
          l.key ? p + f.length : a + c.length
        ),
        !0
      ));
    }
  }
  return c && (l.value = o(c, a, !0)), l;
}
function ke(e, t) {
  return vn.slice(e, t);
}
function bc(e) {
  de.inSFCRoot && (Pe.innerLoc = Se(e + 1, e + 1)), ro(Pe);
  const { tag: t, ns: n } = Pe;
  n === 0 && ce.isPreTag(t) && $s++, ce.isVoidTag(t) ? ds(Pe, e) : (ye.unshift(Pe), (n === 1 || n === 2) && (de.inXML = !0)), Pe = null;
}
function ls(e, t, n) {
  var i;
  {
    const o = (i = ye[0]) == null ? void 0 : i.tag;
    o !== "script" && o !== "style" && e.includes("&") && (e = ce.decodeEntities(e, !1));
  }
  const s = ye[0] || Bi, r = s.children[s.children.length - 1];
  (r == null ? void 0 : r.type) === 2 ? (r.content += e, hn(r.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Se(t, n)
  });
}
function ds(e, t, n = !1) {
  n ? hn(e.loc, nu(t, 60)) : hn(e.loc, t + 1), de.inSFCRoot && (e.children.length ? e.innerLoc.end = ie({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = ie({}, e.innerLoc.start), e.innerLoc.source = ke(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: i, ns: s } = e;
  qt || (i === "slot" ? e.tagType = 2 : vc(e) ? e.tagType = 3 : dg(e) && (e.tagType = 1)), de.inRCDATA || (e.children = iu(e.children, e.tag)), s === 0 && ce.isPreTag(i) && $s--, so === e && (qt = de.inVPre = !1, so = null), de.inXML && (ye[0] ? ye[0].ns : ce.ns) === 0 && (de.inXML = !1);
  {
    const r = e.props;
    if (B.NODE_ENV !== "production" && tn(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ce
    )) {
      let l = !1, c = !1;
      for (let a = 0; a < r.length; a++) {
        const u = r[a];
        if (u.type === 7 && (u.name === "if" ? l = !0 : u.name === "for" && (c = !0)), l && c) {
          ks(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            ce,
            e.loc
          );
          break;
        }
      }
    }
    if (!de.inSFCRoot && tn(
      "COMPILER_NATIVE_TEMPLATE",
      ce
    ) && e.tag === "template" && !vc(e)) {
      B.NODE_ENV !== "production" && ks(
        "COMPILER_NATIVE_TEMPLATE",
        ce,
        e.loc
      );
      const l = ye[0] || Bi, c = l.children.indexOf(e);
      l.children.splice(c, 1, ...e.children);
    }
    const o = r.find(
      (l) => l.type === 6 && l.name === "inline-template"
    );
    o && Xn(
      "COMPILER_INLINE_TEMPLATE",
      ce,
      o.loc
    ) && e.children.length && (o.value = {
      type: 2,
      content: ke(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: o.loc
    });
  }
}
function nu(e, t) {
  let n = e;
  for (; vn.charCodeAt(n) !== t && n >= 0; )
    n--;
  return n;
}
const ug = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function vc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && ug.has(t[n].name))
        return !0;
  }
  return !1;
}
function dg({ tag: e, props: t }) {
  var n;
  if (ce.isCustomElement(e))
    return !1;
  if (e === "component" || pg(e.charCodeAt(0)) || Zf(e) || (n = ce.isBuiltInComponent) != null && n.call(ce, e) || ce.isNativeTag && !ce.isNativeTag(e))
    return !0;
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (s.type === 6) {
      if (s.name === "is" && s.value) {
        if (s.value.content.startsWith("vue:"))
          return !0;
        if (Xn(
          "COMPILER_IS_ON_ELEMENT",
          ce,
          s.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      s.name === "bind" && zt(s.arg, "is") && Xn(
        "COMPILER_IS_ON_ELEMENT",
        ce,
        s.loc
      )
    )
      return !0;
  }
  return !1;
}
function pg(e) {
  return e > 64 && e < 91;
}
const hg = /\r\n/g;
function iu(e, t) {
  var n, i;
  const s = ce.whitespace !== "preserve";
  let r = !1;
  for (let o = 0; o < e.length; o++) {
    const l = e[o];
    if (l.type === 2)
      if ($s)
        l.content = l.content.replace(hg, `
`);
      else if (mg(l.content)) {
        const c = (n = e[o - 1]) == null ? void 0 : n.type, a = (i = e[o + 1]) == null ? void 0 : i.type;
        !c || !a || s && (c === 3 && (a === 3 || a === 1) || c === 1 && (a === 3 || a === 1 && gg(l.content))) ? (r = !0, e[o] = null) : l.content = " ";
      } else
        s && (l.content = su(l.content));
  }
  if ($s && t && ce.isPreTag(t)) {
    const o = e[0];
    o && o.type === 2 && (o.content = o.content.replace(/^\r?\n/, ""));
  }
  return r ? e.filter(Boolean) : e;
}
function mg(e) {
  for (let t = 0; t < e.length; t++)
    if (!Ye(e.charCodeAt(t)))
      return !1;
  return !0;
}
function gg(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function su(e) {
  let t = "", n = !1;
  for (let i = 0; i < e.length; i++)
    Ye(e.charCodeAt(i)) ? n || (t += " ", n = !0) : (t += e[i], n = !1);
  return t;
}
function ro(e) {
  (ye[0] || Bi).children.push(e);
}
function Se(e, t) {
  return {
    start: de.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : de.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : ke(e, t)
  };
}
function hn(e, t) {
  e.end = de.getPos(t), e.source = ke(e.start.offset, t);
}
function Eg(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: Se(
      e.loc.start.offset,
      e.loc.start.offset + e.rawName.length
    ),
    value: void 0,
    loc: e.loc
  };
  if (e.exp) {
    const n = e.exp.loc;
    n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
      type: 2,
      content: e.exp.content,
      loc: n
    };
  }
  return t;
}
function ps(e, t = !1, n, i = 0, s = 0) {
  return ne(e, t, n, i);
}
function Ue(e, t, n) {
  ce.onError(
    ue(e, Se(t, t), void 0, n)
  );
}
function yg() {
  de.reset(), Pe = null, ae = null, Ke = "", Dt = -1, un = -1, ye.length = 0;
}
function _g(e, t) {
  if (yg(), vn = e, ce = ie({}, tu), t) {
    let s;
    for (s in t)
      t[s] != null && (ce[s] = t[s]);
  }
  if (B.NODE_ENV !== "production" && !ce.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  de.mode = ce.parseMode === "html" ? 1 : ce.parseMode === "sfc" ? 2 : 0, de.inXML = ce.ns === 1 || ce.ns === 2;
  const n = t == null ? void 0 : t.delimiters;
  n && (de.delimiterOpen = Is(n[0]), de.delimiterClose = Is(n[1]));
  const i = Bi = Gm([], e);
  return de.parse(vn), i.loc = Se(0, e.length), i.children = iu(i.children), Bi = null, i;
}
function Ng(e, t) {
  hs(
    e,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    ru(e, e.children[0])
  );
}
function ru(e, t) {
  const { children: n } = e;
  return n.length === 1 && t.type === 1 && !Ms(t);
}
function hs(e, t, n = !1) {
  const { children: i } = e, s = i.length;
  let r = 0;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    if (l.type === 1 && l.tagType === 0) {
      const c = n ? 0 : it(l, t);
      if (c > 0) {
        if (c >= 2) {
          l.codegenNode.patchFlag = -1 + (B.NODE_ENV !== "production" ? " /* HOISTED */" : ""), l.codegenNode = t.hoist(l.codegenNode), r++;
          continue;
        }
      } else {
        const a = l.codegenNode;
        if (a.type === 13) {
          const u = au(a);
          if ((!u || u === 512 || u === 1) && lu(l, t) >= 2) {
            const f = cu(l);
            f && (a.props = t.hoist(f));
          }
          a.dynamicProps && (a.dynamicProps = t.hoist(a.dynamicProps));
        }
      }
    }
    if (l.type === 1) {
      const c = l.tagType === 1;
      c && t.scopes.vSlot++, hs(l, t), c && t.scopes.vSlot--;
    } else if (l.type === 11)
      hs(l, t, l.children.length === 1);
    else if (l.type === 9)
      for (let c = 0; c < l.branches.length; c++)
        hs(
          l.branches[c],
          t,
          l.branches[c].children.length === 1
        );
  }
  if (r && t.transformHoist && t.transformHoist(i, t, e), r && r === s && e.type === 1 && e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && j(e.codegenNode.children)) {
    const o = t.hoist(
      zi(e.codegenNode.children)
    );
    t.hmr && (o.content = `[...${o.content}]`), e.codegenNode.children = o;
  }
}
function it(e, t) {
  const { constantCache: n } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0)
        return 0;
      const i = n.get(e);
      if (i !== void 0)
        return i;
      const s = e.codegenNode;
      if (s.type !== 13 || s.isBlock && e.tag !== "svg" && e.tag !== "foreignObject")
        return 0;
      if (au(s))
        return n.set(e, 0), 0;
      {
        let l = 3;
        const c = lu(e, t);
        if (c === 0)
          return n.set(e, 0), 0;
        c < l && (l = c);
        for (let a = 0; a < e.children.length; a++) {
          const u = it(e.children[a], t);
          if (u === 0)
            return n.set(e, 0), 0;
          u < l && (l = u);
        }
        if (l > 1)
          for (let a = 0; a < e.props.length; a++) {
            const u = e.props[a];
            if (u.type === 7 && u.name === "bind" && u.exp) {
              const f = it(u.exp, t);
              if (f === 0)
                return n.set(e, 0), 0;
              f < l && (l = f);
            }
          }
        if (s.isBlock) {
          for (let a = 0; a < e.props.length; a++)
            if (e.props[a].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(Dn), t.removeHelper(
            Yn(t.inSSR, s.isComponent)
          ), s.isBlock = !1, t.helper(Jn(t.inSSR, s.isComponent));
        }
        return n.set(e, l), l;
      }
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return it(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let o = 3;
      for (let l = 0; l < e.children.length; l++) {
        const c = e.children[l];
        if (Z(c) || dt(c))
          continue;
        const a = it(c, t);
        if (a === 0)
          return 0;
        a < o && (o = a);
      }
      return o;
    default:
      return 0;
  }
}
const bg = /* @__PURE__ */ new Set([
  rl,
  ol,
  Pi,
  Gi
]);
function ou(e, t) {
  if (e.type === 14 && !Z(e.callee) && bg.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return it(n, t);
    if (n.type === 14)
      return ou(n, t);
  }
  return 0;
}
function lu(e, t) {
  let n = 3;
  const i = cu(e);
  if (i && i.type === 15) {
    const { properties: s } = i;
    for (let r = 0; r < s.length; r++) {
      const { key: o, value: l } = s[r], c = it(o, t);
      if (c === 0)
        return c;
      c < n && (n = c);
      let a;
      if (l.type === 4 ? a = it(l, t) : l.type === 14 ? a = ou(l, t) : a = 0, a === 0)
        return a;
      a < n && (n = a);
    }
  }
  return n;
}
function cu(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function au(e) {
  const t = e.patchFlag;
  return t ? parseInt(t, 10) : void 0;
}
function vg(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: i = !1,
  hmr: s = !1,
  cacheHandlers: r = !1,
  nodeTransforms: o = [],
  directiveTransforms: l = {},
  transformHoist: c = null,
  isBuiltInComponent: a = pe,
  isCustomElement: u = pe,
  expressionPlugins: f = [],
  scopeId: p = null,
  slotted: E = !0,
  ssr: y = !1,
  inSSR: T = !1,
  ssrCssVars: P = "",
  bindingMetadata: M = le,
  inline: S = !1,
  isTS: g = !1,
  onError: _ = ul,
  onWarn: N = Xf,
  compatConfig: I
}) {
  const w = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), b = {
    // options
    filename: t,
    selfName: w && bt(Ee(w[1])),
    prefixIdentifiers: n,
    hoistStatic: i,
    hmr: s,
    cacheHandlers: r,
    nodeTransforms: o,
    directiveTransforms: l,
    transformHoist: c,
    isBuiltInComponent: a,
    isCustomElement: u,
    expressionPlugins: f,
    scopeId: p,
    slotted: E,
    ssr: y,
    inSSR: T,
    ssrCssVars: P,
    bindingMetadata: M,
    inline: S,
    isTS: g,
    onError: _,
    onWarn: N,
    compatConfig: I,
    // state
    root: e,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    cached: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    currentNode: e,
    childIndex: 0,
    inVOnce: !1,
    // methods
    helper(v) {
      const C = b.helpers.get(v) || 0;
      return b.helpers.set(v, C + 1), v;
    },
    removeHelper(v) {
      const C = b.helpers.get(v);
      if (C) {
        const R = C - 1;
        R ? b.helpers.set(v, R) : b.helpers.delete(v);
      }
    },
    helperString(v) {
      return `_${Gn[b.helper(v)]}`;
    },
    replaceNode(v) {
      if (B.NODE_ENV !== "production") {
        if (!b.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!b.parent)
          throw new Error("Cannot replace root node.");
      }
      b.parent.children[b.childIndex] = b.currentNode = v;
    },
    removeNode(v) {
      if (B.NODE_ENV !== "production" && !b.parent)
        throw new Error("Cannot remove root node.");
      const C = b.parent.children, R = v ? C.indexOf(v) : b.currentNode ? b.childIndex : -1;
      if (B.NODE_ENV !== "production" && R < 0)
        throw new Error("node being removed is not a child of current parent");
      !v || v === b.currentNode ? (b.currentNode = null, b.onNodeRemoved()) : b.childIndex > R && (b.childIndex--, b.onNodeRemoved()), b.parent.children.splice(R, 1);
    },
    onNodeRemoved: pe,
    addIdentifiers(v) {
    },
    removeIdentifiers(v) {
    },
    hoist(v) {
      Z(v) && (v = ne(v)), b.hoists.push(v);
      const C = ne(
        `_hoisted_${b.hoists.length}`,
        !1,
        v.loc,
        2
      );
      return C.hoisted = v, C;
    },
    cache(v, C = !1) {
      return zm(b.cached++, v, C);
    }
  };
  return b.filters = /* @__PURE__ */ new Set(), b;
}
function Og(e, t) {
  const n = vg(e, t);
  lr(e, n), t.hoistStatic && Ng(e, n), t.ssr || Sg(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function Sg(e, t) {
  const { helper: n } = t, { children: i } = e;
  if (i.length === 1) {
    const s = i[0];
    if (ru(e, s) && s.codegenNode) {
      const r = s.codegenNode;
      r.type === 13 && fl(r, t), e.codegenNode = r;
    } else
      e.codegenNode = s;
  } else if (i.length > 1) {
    let s = 64, r = yt[64];
    B.NODE_ENV !== "production" && i.filter((o) => o.type !== 3).length === 1 && (s |= 2048, r += `, ${yt[2048]}`), e.codegenNode = $i(
      t,
      n(Mi),
      void 0,
      e.children,
      s + (B.NODE_ENV !== "production" ? ` /* ${r} */` : ""),
      void 0,
      void 0,
      !0,
      void 0,
      !1
    );
  }
}
function Cg(e, t) {
  let n = 0;
  const i = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const s = e.children[n];
    Z(s) || (t.parent = e, t.childIndex = n, t.onNodeRemoved = i, lr(s, t));
  }
}
function lr(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, i = [];
  for (let r = 0; r < n.length; r++) {
    const o = n[r](e, t);
    if (o && (j(o) ? i.push(...o) : i.push(o)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(Wi);
      break;
    case 5:
      t.ssr || t.helper(or);
      break;
    case 9:
      for (let r = 0; r < e.branches.length; r++)
        lr(e.branches[r], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      Cg(e, t);
      break;
  }
  t.currentNode = e;
  let s = i.length;
  for (; s--; )
    i[s]();
}
function fu(e, t) {
  const n = Z(e) ? (i) => i === e : (i) => e.test(i);
  return (i, s) => {
    if (i.type === 1) {
      const { props: r } = i;
      if (i.tagType === 3 && r.some(rg))
        return;
      const o = [];
      for (let l = 0; l < r.length; l++) {
        const c = r[l];
        if (c.type === 7 && n(c.name)) {
          r.splice(l, 1), l--;
          const a = t(i, c, s);
          a && o.push(a);
        }
      }
      return o;
    }
  };
}
const cr = "/*#__PURE__*/", uu = (e) => `${Gn[e]}: _${Gn[e]}`;
function Tg(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: i = !1,
  filename: s = "template.vue.html",
  scopeId: r = null,
  optimizeImports: o = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: c = "vue",
  ssrRuntimeModuleName: a = "vue/server-renderer",
  ssr: u = !1,
  isTS: f = !1,
  inSSR: p = !1
}) {
  const E = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: i,
    filename: s,
    scopeId: r,
    optimizeImports: o,
    runtimeGlobalName: l,
    runtimeModuleName: c,
    ssrRuntimeModuleName: a,
    ssr: u,
    isTS: f,
    inSSR: p,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(T) {
      return `_${Gn[T]}`;
    },
    push(T, P = -2, M) {
      E.code += T;
    },
    indent() {
      y(++E.indentLevel);
    },
    deindent(T = !1) {
      T ? --E.indentLevel : y(--E.indentLevel);
    },
    newline() {
      y(E.indentLevel);
    }
  };
  function y(T) {
    E.push(
      `
` + "  ".repeat(T),
      0
      /* Start */
    );
  }
  return E;
}
function Dg(e, t = {}) {
  const n = Tg(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: i,
    push: s,
    prefixIdentifiers: r,
    indent: o,
    deindent: l,
    newline: c,
    scopeId: a,
    ssr: u
  } = n, f = Array.from(e.helpers), p = f.length > 0, E = !r && i !== "module";
  wg(e, n);
  const T = u ? "ssrRender" : "render", M = (u ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (s(`function ${T}(${M}) {`), o(), E && (s("with (_ctx) {"), o(), p && (s(
    `const { ${f.map(uu).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), c())), e.components.length && (Cr(e.components, "component", n), (e.directives.length || e.temps > 0) && c()), e.directives.length && (Cr(e.directives, "directive", n), e.temps > 0 && c()), e.filters && e.filters.length && (c(), Cr(e.filters, "filter", n), c()), e.temps > 0) {
    s("let ");
    for (let S = 0; S < e.temps; S++)
      s(`${S > 0 ? ", " : ""}_temp${S}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (s(
    `
`,
    0
    /* Start */
  ), c()), u || s("return "), e.codegenNode ? Fe(e.codegenNode, n) : s("null"), E && (l(), s("}")), l(), s("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function wg(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: i,
    push: s,
    newline: r,
    runtimeModuleName: o,
    runtimeGlobalName: l,
    ssrRuntimeModuleName: c
  } = t, a = l, u = Array.from(e.helpers);
  if (u.length > 0 && (s(
    `const _Vue = ${a}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const f = [
      Yo,
      Xo,
      Wi,
      Zo,
      Gf
    ].filter((p) => u.includes(p)).map(uu).join(", ");
    s(
      `const { ${f} } = _Vue
`,
      -1
      /* End */
    );
  }
  Vg(e.hoists, t), r(), s("return ");
}
function Cr(e, t, { helper: n, push: i, newline: s, isTS: r }) {
  const o = n(
    t === "filter" ? nl : t === "component" ? Qo : tl
  );
  for (let l = 0; l < e.length; l++) {
    let c = e[l];
    const a = c.endsWith("__self");
    a && (c = c.slice(0, -6)), i(
      `const ${Fi(c, t)} = ${o}(${JSON.stringify(c)}${a ? ", true" : ""})${r ? "!" : ""}`
    ), l < e.length - 1 && s();
  }
}
function Vg(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: i, helper: s, scopeId: r, mode: o } = t;
  i();
  for (let l = 0; l < e.length; l++) {
    const c = e[l];
    c && (n(
      `const _hoisted_${l + 1} = `
    ), Fe(c, t), i());
  }
  t.pure = !1;
}
function xg(e) {
  return Z(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function pl(e, t) {
  const n = e.length > 3 || B.NODE_ENV !== "production" && e.some((i) => j(i) || !xg(i));
  t.push("["), n && t.indent(), Ji(e, t, n), n && t.deindent(), t.push("]");
}
function Ji(e, t, n = !1, i = !0) {
  const { push: s, newline: r } = t;
  for (let o = 0; o < e.length; o++) {
    const l = e[o];
    Z(l) ? s(
      l,
      -3
      /* Unknown */
    ) : j(l) ? pl(l, t) : Fe(l, t), o < e.length - 1 && (n ? (i && s(","), r()) : i && s(", "));
  }
}
function Fe(e, t) {
  if (Z(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (dt(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      B.NODE_ENV !== "production" && yc(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), Fe(e.codegenNode, t);
      break;
    case 2:
      Ag(e, t);
      break;
    case 4:
      du(e, t);
      break;
    case 5:
      Ig(e, t);
      break;
    case 12:
      Fe(e.codegenNode, t);
      break;
    case 8:
      pu(e, t);
      break;
    case 3:
      Rg(e, t);
      break;
    case 13:
      Mg(e, t);
      break;
    case 14:
      $g(e, t);
      break;
    case 15:
      Lg(e, t);
      break;
    case 17:
      Fg(e, t);
      break;
    case 18:
      Bg(e, t);
      break;
    case 19:
      Hg(e, t);
      break;
    case 20:
      jg(e, t);
      break;
    case 21:
      Ji(e.body, t, !0, !1);
      break;
    case 22:
      break;
    case 23:
      break;
    case 24:
      break;
    case 25:
      break;
    case 26:
      break;
    case 10:
      break;
    default:
      if (B.NODE_ENV !== "production")
        return yc(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function Ag(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function du(e, t) {
  const { content: n, isStatic: i } = e;
  t.push(
    i ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function Ig(e, t) {
  const { push: n, helper: i, pure: s } = t;
  s && n(cr), n(`${i(or)}(`), Fe(e.content, t), n(")");
}
function pu(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const i = e.children[n];
    Z(i) ? t.push(
      i,
      -3
      /* Unknown */
    ) : Fe(i, t);
  }
}
function kg(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), pu(e, t), n("]");
  else if (e.isStatic) {
    const i = dl(e.content) ? e.content : JSON.stringify(e.content);
    n(i, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function Rg(e, t) {
  const { push: n, helper: i, pure: s } = t;
  s && n(cr), n(
    `${i(Wi)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function Mg(e, t) {
  const { push: n, helper: i, pure: s } = t, {
    tag: r,
    props: o,
    children: l,
    patchFlag: c,
    dynamicProps: a,
    directives: u,
    isBlock: f,
    disableTracking: p,
    isComponent: E
  } = e;
  u && n(i(il) + "("), f && n(`(${i(Dn)}(${p ? "true" : ""}), `), s && n(cr);
  const y = f ? Yn(t.inSSR, E) : Jn(t.inSSR, E);
  n(i(y) + "(", -2, e), Ji(
    Pg([r, o, l, c, a]),
    t
  ), n(")"), f && n(")"), u && (n(", "), Fe(u, t), n(")"));
}
function Pg(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function $g(e, t) {
  const { push: n, helper: i, pure: s } = t, r = Z(e.callee) ? e.callee : i(e.callee);
  s && n(cr), n(r + "(", -2, e), Ji(e.arguments, t), n(")");
}
function Lg(e, t) {
  const { push: n, indent: i, deindent: s, newline: r } = t, { properties: o } = e;
  if (!o.length) {
    n("{}", -2, e);
    return;
  }
  const l = o.length > 1 || B.NODE_ENV !== "production" && o.some((c) => c.value.type !== 4);
  n(l ? "{" : "{ "), l && i();
  for (let c = 0; c < o.length; c++) {
    const { key: a, value: u } = o[c];
    kg(a, t), n(": "), Fe(u, t), c < o.length - 1 && (n(","), r());
  }
  l && s(), n(l ? "}" : " }");
}
function Fg(e, t) {
  pl(e.elements, t);
}
function Bg(e, t) {
  const { push: n, indent: i, deindent: s } = t, { params: r, returns: o, body: l, newline: c, isSlot: a } = e;
  a && n(`_${Gn[cl]}(`), n("(", -2, e), j(r) ? Ji(r, t) : r && Fe(r, t), n(") => "), (c || l) && (n("{"), i()), o ? (c && n("return "), j(o) ? pl(o, t) : Fe(o, t)) : l && Fe(l, t), (c || l) && (s(), n("}")), a && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function Hg(e, t) {
  const { test: n, consequent: i, alternate: s, newline: r } = e, { push: o, indent: l, deindent: c, newline: a } = t;
  if (n.type === 4) {
    const f = !dl(n.content);
    f && o("("), du(n, t), f && o(")");
  } else
    o("("), Fe(n, t), o(")");
  r && l(), t.indentLevel++, r || o(" "), o("? "), Fe(i, t), t.indentLevel--, r && a(), r || o(" "), o(": ");
  const u = s.type === 19;
  u || t.indentLevel++, Fe(s, t), u || t.indentLevel--, r && c(
    !0
    /* without newline */
  );
}
function jg(e, t) {
  const { push: n, helper: i, indent: s, deindent: r, newline: o } = t;
  n(`_cache[${e.index}] || (`), e.isVNode && (s(), n(`${i(As)}(-1),`), o()), n(`_cache[${e.index}] = `), Fe(e.value, t), e.isVNode && (n(","), o(), n(`${i(As)}(1),`), o(), n(`_cache[${e.index}]`), r()), n(")");
}
const Ug = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), Kg = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function mn(e, t, n = !1, i = !1) {
  const s = e.content;
  if (s.trim())
    try {
      new Function(
        i ? ` ${s} ` : `return ${n ? `(${s}) => {}` : `(${s})`}`
      );
    } catch (r) {
      let o = r.message;
      const l = s.replace(Kg, "").match(Ug);
      l && (o = `avoid using JavaScript keyword as property name: "${l[0]}"`), t.onError(
        ue(
          45,
          e.loc,
          void 0,
          o
        )
      );
    }
}
const qg = (e, t) => {
  if (e.type === 5)
    e.content = Tr(
      e.content,
      t
    );
  else if (e.type === 1)
    for (let n = 0; n < e.props.length; n++) {
      const i = e.props[n];
      if (i.type === 7 && i.name !== "for") {
        const s = i.exp, r = i.arg;
        s && s.type === 4 && !(i.name === "on" && r) && (i.exp = Tr(
          s,
          t,
          // slot args must be processed as function params
          i.name === "slot"
        )), r && r.type === 4 && !r.isStatic && (i.arg = Tr(r, t));
      }
    }
};
function Tr(e, t, n = !1, i = !1, s = Object.create(t.identifiers)) {
  return B.NODE_ENV !== "production" && mn(e, t, n, i), e;
}
const Wg = fu(
  /^(if|else|else-if)$/,
  (e, t, n) => Gg(e, t, n, (i, s, r) => {
    const o = n.parent.children;
    let l = o.indexOf(i), c = 0;
    for (; l-- >= 0; ) {
      const a = o[l];
      a && a.type === 9 && (c += a.branches.length);
    }
    return () => {
      if (r)
        i.codegenNode = Sc(
          s,
          c,
          n
        );
      else {
        const a = Jg(i.codegenNode);
        a.alternate = Sc(
          s,
          c + i.branches.length - 1,
          n
        );
      }
    };
  })
);
function Gg(e, t, n, i) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const s = t.exp ? t.exp.loc : e.loc;
    n.onError(
      ue(28, t.loc)
    ), t.exp = ne("true", !1, s);
  }
  if (B.NODE_ENV !== "production" && t.exp && mn(t.exp, n), t.name === "if") {
    const s = Oc(e, t), r = {
      type: 9,
      loc: e.loc,
      branches: [s]
    };
    if (n.replaceNode(r), i)
      return i(r, s, !0);
  } else {
    const s = n.parent.children, r = [];
    let o = s.indexOf(e);
    for (; o-- >= -1; ) {
      const l = s[o];
      if (l && l.type === 3) {
        n.removeNode(l), B.NODE_ENV !== "production" && r.unshift(l);
        continue;
      }
      if (l && l.type === 2 && !l.content.trim().length) {
        n.removeNode(l);
        continue;
      }
      if (l && l.type === 9) {
        t.name === "else-if" && l.branches[l.branches.length - 1].condition === void 0 && n.onError(
          ue(30, e.loc)
        ), n.removeNode();
        const c = Oc(e, t);
        if (B.NODE_ENV !== "production" && r.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (c.children = [...r, ...c.children]), B.NODE_ENV !== "production") {
          const u = c.userKey;
          u && l.branches.forEach(({ userKey: f }) => {
            zg(f, u) && n.onError(
              ue(
                29,
                c.userKey.loc
              )
            );
          });
        }
        l.branches.push(c);
        const a = i && i(l, c, !1);
        lr(c, n), a && a(), n.currentNode = null;
      } else
        n.onError(
          ue(30, e.loc)
        );
      break;
    }
  }
}
function Oc(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !tt(e, "for") ? e.children : [e],
    userKey: Li(e, "key"),
    isTemplateIf: n
  };
}
function Sc(e, t, n) {
  return e.condition ? no(
    e.condition,
    Cc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    Te(n.helper(Wi), [
      B.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : Cc(e, t, n);
}
function Cc(e, t, n) {
  const { helper: i } = n, s = _e(
    "key",
    ne(
      `${t}`,
      !1,
      Ze,
      2
    )
  ), { children: r } = e, o = r[0];
  if (r.length !== 1 || o.type !== 1)
    if (r.length === 1 && o.type === 11) {
      const c = o.codegenNode;
      return Ps(c, s, n), c;
    } else {
      let c = 64, a = yt[64];
      return B.NODE_ENV !== "production" && !e.isTemplateIf && r.filter((u) => u.type !== 3).length === 1 && (c |= 2048, a += `, ${yt[2048]}`), $i(
        n,
        i(Mi),
        nt([s]),
        r,
        c + (B.NODE_ENV !== "production" ? ` /* ${a} */` : ""),
        void 0,
        void 0,
        !0,
        !1,
        !1,
        e.loc
      );
    }
  else {
    const c = o.codegenNode, a = lg(c);
    return a.type === 13 && fl(a, n), Ps(a, s, n), c;
  }
}
function zg(e, t) {
  if (!e || e.type !== t.type)
    return !1;
  if (e.type === 6) {
    if (e.value.content !== t.value.content)
      return !1;
  } else {
    const n = e.exp, i = t.exp;
    if (n.type !== i.type || n.type !== 4 || n.isStatic !== i.isStatic || n.content !== i.content)
      return !1;
  }
  return !0;
}
function Jg(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else
      e.type === 20 && (e = e.value);
}
const Yg = fu(
  "for",
  (e, t, n) => {
    const { helper: i, removeHelper: s } = n;
    return Xg(e, t, n, (r) => {
      const o = Te(i(sl), [
        r.source
      ]), l = Rs(e), c = tt(e, "memo"), a = Li(e, "key"), u = a && (a.type === 6 ? ne(a.value.content, !0) : a.exp), f = a ? _e("key", u) : null, p = r.source.type === 4 && r.source.constType > 0, E = p ? 64 : a ? 128 : 256;
      return r.codegenNode = $i(
        n,
        i(Mi),
        void 0,
        o,
        E + (B.NODE_ENV !== "production" ? ` /* ${yt[E]} */` : ""),
        void 0,
        void 0,
        !0,
        !p,
        !1,
        e.loc
      ), () => {
        let y;
        const { children: T } = r;
        B.NODE_ENV !== "production" && l && e.children.some((S) => {
          if (S.type === 1) {
            const g = Li(S, "key");
            if (g)
              return n.onError(
                ue(
                  33,
                  g.loc
                )
              ), !0;
          }
        });
        const P = T.length !== 1 || T[0].type !== 1, M = Ms(e) ? e : l && e.children.length === 1 && Ms(e.children[0]) ? e.children[0] : null;
        if (M ? (y = M.codegenNode, l && f && Ps(y, f, n)) : P ? y = $i(
          n,
          i(Mi),
          f ? nt([f]) : void 0,
          e.children,
          64 + (B.NODE_ENV !== "production" ? ` /* ${yt[64]} */` : ""),
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (y = T[0].codegenNode, l && f && Ps(y, f, n), y.isBlock !== !p && (y.isBlock ? (s(Dn), s(
          Yn(n.inSSR, y.isComponent)
        )) : s(
          Jn(n.inSSR, y.isComponent)
        )), y.isBlock = !p, y.isBlock ? (i(Dn), i(Yn(n.inSSR, y.isComponent))) : i(Jn(n.inSSR, y.isComponent))), c) {
          const S = zn(
            oo(r.parseResult, [
              ne("_cached")
            ])
          );
          S.body = Jm([
            ut(["const _memo = (", c.exp, ")"]),
            ut([
              "if (_cached",
              ...u ? [" && _cached.key === ", u] : [],
              ` && ${n.helperString(
                Yf
              )}(_cached, _memo)) return _cached`
            ]),
            ut(["const _item = ", y]),
            ne("_item.memo = _memo"),
            ne("return _item")
          ]), o.arguments.push(
            S,
            ne("_cache"),
            ne(String(n.cached++))
          );
        } else
          o.arguments.push(
            zn(
              oo(r.parseResult),
              y,
              !0
            )
          );
      };
    });
  }
);
function Xg(e, t, n, i) {
  if (!t.exp) {
    n.onError(
      ue(31, t.loc)
    );
    return;
  }
  const s = t.forParseResult;
  if (!s) {
    n.onError(
      ue(32, t.loc)
    );
    return;
  }
  hu(s, n);
  const { addIdentifiers: r, removeIdentifiers: o, scopes: l } = n, { source: c, value: a, key: u, index: f } = s, p = {
    type: 11,
    loc: t.loc,
    source: c,
    valueAlias: a,
    keyAlias: u,
    objectIndexAlias: f,
    parseResult: s,
    children: Rs(e) ? e.children : [e]
  };
  n.replaceNode(p), l.vFor++;
  const E = i && i(p);
  return () => {
    l.vFor--, E && E();
  };
}
function hu(e, t) {
  e.finalized || (B.NODE_ENV !== "production" && (mn(e.source, t), e.key && mn(
    e.key,
    t,
    !0
  ), e.index && mn(
    e.index,
    t,
    !0
  ), e.value && mn(
    e.value,
    t,
    !0
  )), e.finalized = !0);
}
function oo({ value: e, key: t, index: n }, i = []) {
  return Zg([e, t, n, ...i]);
}
function Zg(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, i) => n || ne("_".repeat(i + 1), !1));
}
const Tc = ne("undefined", !1), Qg = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = tt(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, eE = (e, t, n, i) => zn(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : i
);
function tE(e, t, n = eE) {
  t.helper(cl);
  const { children: i, loc: s } = e, r = [], o = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const c = tt(e, "slot", !0);
  if (c) {
    const { arg: P, exp: M } = c;
    P && !ze(P) && (l = !0), r.push(
      _e(
        P || ne("default", !0),
        n(M, void 0, i, s)
      )
    );
  }
  let a = !1, u = !1;
  const f = [], p = /* @__PURE__ */ new Set();
  let E = 0;
  for (let P = 0; P < i.length; P++) {
    const M = i[P];
    let S;
    if (!Rs(M) || !(S = tt(M, "slot", !0))) {
      M.type !== 3 && f.push(M);
      continue;
    }
    if (c) {
      t.onError(
        ue(37, S.loc)
      );
      break;
    }
    a = !0;
    const { children: g, loc: _ } = M, {
      arg: N = ne("default", !0),
      exp: I,
      loc: w
    } = S;
    let b;
    ze(N) ? b = N ? N.content : "default" : l = !0;
    const v = tt(M, "for"), C = n(I, v, g, _);
    let R, V;
    if (R = tt(M, "if"))
      l = !0, o.push(
        no(
          R.exp,
          cs(N, C, E++),
          Tc
        )
      );
    else if (V = tt(
      M,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let K = P, Y;
      for (; K-- && (Y = i[K], Y.type === 3); )
        ;
      if (Y && Rs(Y) && tt(Y, "if")) {
        i.splice(P, 1), P--;
        let te = o[o.length - 1];
        for (; te.alternate.type === 19; )
          te = te.alternate;
        te.alternate = V.exp ? no(
          V.exp,
          cs(
            N,
            C,
            E++
          ),
          Tc
        ) : cs(N, C, E++);
      } else
        t.onError(
          ue(30, V.loc)
        );
    } else if (v) {
      l = !0;
      const K = v.forParseResult;
      K ? (hu(K, t), o.push(
        Te(t.helper(sl), [
          K.source,
          zn(
            oo(K),
            cs(N, C),
            !0
          )
        ])
      )) : t.onError(
        ue(
          32,
          v.loc
        )
      );
    } else {
      if (b) {
        if (p.has(b)) {
          t.onError(
            ue(
              38,
              w
            )
          );
          continue;
        }
        p.add(b), b === "default" && (u = !0);
      }
      r.push(_e(N, C));
    }
  }
  if (!c) {
    const P = (M, S) => {
      const g = n(M, void 0, S, s);
      return t.compatConfig && (g.isNonScopedSlot = !0), _e("default", g);
    };
    a ? f.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    f.some((M) => mu(M)) && (u ? t.onError(
      ue(
        39,
        f[0].loc
      )
    ) : r.push(
      P(void 0, f)
    )) : r.push(P(void 0, i));
  }
  const y = l ? 2 : ms(e.children) ? 3 : 1;
  let T = nt(
    r.concat(
      _e(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        ne(
          y + (B.NODE_ENV !== "production" ? ` /* ${Pu[y]} */` : ""),
          !1
        )
      )
    ),
    s
  );
  return o.length && (T = Te(t.helper(Jf), [
    T,
    zi(o)
  ])), {
    slots: T,
    hasDynamicSlots: l
  };
}
function cs(e, t, n) {
  const i = [
    _e("name", e),
    _e("fn", t)
  ];
  return n != null && i.push(
    _e("key", ne(String(n), !0))
  ), nt(i);
}
function ms(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || ms(n.children))
          return !0;
        break;
      case 9:
        if (ms(n.branches))
          return !0;
        break;
      case 10:
      case 11:
        if (ms(n.children))
          return !0;
        break;
    }
  }
  return !1;
}
function mu(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : mu(e.content);
}
const gu = /* @__PURE__ */ new WeakMap(), nE = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: i, props: s } = e, r = e.tagType === 1;
  let o = r ? iE(e, t) : `"${i}"`;
  const l = oe(o) && o.callee === el;
  let c, a, u, f = 0, p, E, y, T = (
    // dynamic component may resolve to plain elements
    l || o === vi || o === Jo || !r && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (i === "svg" || i === "foreignObject")
  );
  if (s.length > 0) {
    const P = Eu(
      e,
      t,
      void 0,
      r,
      l
    );
    c = P.props, f = P.patchFlag, E = P.dynamicPropNames;
    const M = P.directives;
    y = M && M.length ? zi(
      M.map((S) => rE(S, t))
    ) : void 0, P.shouldUseBlock && (T = !0);
  }
  if (e.children.length > 0)
    if (o === Vs && (T = !0, f |= 1024, B.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      ue(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), r && // Teleport is not a real component and has dedicated runtime handling
    o !== vi && // explained above.
    o !== Vs) {
      const { slots: M, hasDynamicSlots: S } = tE(e, t);
      a = M, S && (f |= 1024);
    } else if (e.children.length === 1 && o !== vi) {
      const M = e.children[0], S = M.type, g = S === 5 || S === 8;
      g && it(M, t) === 0 && (f |= 1), g || S === 2 ? a = M : a = e.children;
    } else
      a = e.children;
  if (f !== 0) {
    if (B.NODE_ENV !== "production")
      if (f < 0)
        u = f + ` /* ${yt[f]} */`;
      else {
        const P = Object.keys(yt).map(Number).filter((M) => M > 0 && f & M).map((M) => yt[M]).join(", ");
        u = f + ` /* ${P} */`;
      }
    else
      u = String(f);
    E && E.length && (p = oE(E));
  }
  e.codegenNode = $i(
    t,
    o,
    c,
    a,
    u,
    p,
    y,
    !!T,
    !1,
    r,
    e.loc
  );
};
function iE(e, t, n = !1) {
  let { tag: i } = e;
  const s = lo(i), r = Li(e, "is");
  if (r)
    if (s || tn(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      const l = r.type === 6 ? r.value && ne(r.value.content, !0) : r.exp;
      if (l)
        return Te(t.helper(el), [
          l
        ]);
    } else
      r.type === 6 && r.value.content.startsWith("vue:") && (i = r.value.content.slice(4));
  const o = Zf(i) || t.isBuiltInComponent(i);
  return o ? (n || t.helper(o), o) : (t.helper(Qo), t.components.add(i), Fi(i, "component"));
}
function Eu(e, t, n = e.props, i, s, r = !1) {
  const { tag: o, loc: l, children: c } = e;
  let a = [];
  const u = [], f = [], p = c.length > 0;
  let E = !1, y = 0, T = !1, P = !1, M = !1, S = !1, g = !1, _ = !1;
  const N = [], I = (v) => {
    a.length && (u.push(
      nt(Dc(a), l)
    ), a = []), v && u.push(v);
  }, w = ({ key: v, value: C }) => {
    if (ze(v)) {
      const R = v.content, V = At(R);
      if (V && (!i || s) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      R.toLowerCase() !== "onclick" && // omit v-model handlers
      R !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Jt(R) && (S = !0), V && Jt(R) && (_ = !0), V && C.type === 14 && (C = C.arguments[0]), C.type === 20 || (C.type === 4 || C.type === 8) && it(C, t) > 0)
        return;
      R === "ref" ? T = !0 : R === "class" ? P = !0 : R === "style" ? M = !0 : R !== "key" && !N.includes(R) && N.push(R), i && (R === "class" || R === "style") && !N.includes(R) && N.push(R);
    } else
      g = !0;
  };
  for (let v = 0; v < n.length; v++) {
    const C = n[v];
    if (C.type === 6) {
      const { loc: R, name: V, nameLoc: K, value: Y } = C;
      let te = !0;
      if (V === "ref" && (T = !0, t.scopes.vFor > 0 && a.push(
        _e(
          ne("ref_for", !0),
          ne("true")
        )
      )), V === "is" && (lo(o) || Y && Y.content.startsWith("vue:") || tn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      a.push(
        _e(
          ne(V, !0, K),
          ne(
            Y ? Y.content : "",
            te,
            Y ? Y.loc : R
          )
        )
      );
    } else {
      const { name: R, arg: V, exp: K, loc: Y, modifiers: te } = C, W = R === "bind", z = R === "on";
      if (R === "slot") {
        i || t.onError(
          ue(40, Y)
        );
        continue;
      }
      if (R === "once" || R === "memo" || R === "is" || W && zt(V, "is") && (lo(o) || tn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || z && r)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (W && zt(V, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        z && p && zt(V, "vue:before-update")) && (E = !0), W && zt(V, "ref") && t.scopes.vFor > 0 && a.push(
          _e(
            ne("ref_for", !0),
            ne("true")
          )
        ), !V && (W || z)
      ) {
        if (g = !0, K)
          if (W) {
            if (I(), B.NODE_ENV !== "production" && u.some((Qe) => Qe.type === 15 ? Qe.properties.some(({ key: ot }) => ot.type !== 4 || !ot.isStatic ? !0 : ot.content !== "class" && ot.content !== "style" && !At(ot.content)) : !0) && Xn(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              Y
            ), tn(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              u.unshift(K);
              continue;
            }
            u.push(K);
          } else
            I({
              type: 14,
              loc: Y,
              callee: t.helper(ll),
              arguments: i ? [K] : [K, "true"]
            });
        else
          t.onError(
            ue(
              W ? 34 : 35,
              Y
            )
          );
        continue;
      }
      W && te.includes("prop") && (y |= 32);
      const q = t.directiveTransforms[R];
      if (q) {
        const { props: we, needRuntime: Qe } = q(C, e, t);
        !r && we.forEach(w), z && V && !ze(V) ? I(nt(we, l)) : a.push(...we), Qe && (f.push(C), dt(Qe) && gu.set(C, Qe));
      } else
        $c(R) || (f.push(C), p && (E = !0));
    }
  }
  let b;
  if (u.length ? (I(), u.length > 1 ? b = Te(
    t.helper(xs),
    u,
    l
  ) : b = u[0]) : a.length && (b = nt(
    Dc(a),
    l
  )), g ? y |= 16 : (P && !i && (y |= 2), M && !i && (y |= 4), N.length && (y |= 8), S && (y |= 32)), !E && (y === 0 || y === 32) && (T || _ || f.length > 0) && (y |= 512), !t.inSSR && b)
    switch (b.type) {
      case 15:
        let v = -1, C = -1, R = !1;
        for (let Y = 0; Y < b.properties.length; Y++) {
          const te = b.properties[Y].key;
          ze(te) ? te.content === "class" ? v = Y : te.content === "style" && (C = Y) : te.isHandlerKey || (R = !0);
        }
        const V = b.properties[v], K = b.properties[C];
        R ? b = Te(
          t.helper(Pi),
          [b]
        ) : (V && !ze(V.value) && (V.value = Te(
          t.helper(rl),
          [V.value]
        )), K && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (M || K.value.type === 4 && K.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        K.value.type === 17) && (K.value = Te(
          t.helper(ol),
          [K.value]
        )));
        break;
      case 14:
        break;
      default:
        b = Te(
          t.helper(Pi),
          [
            Te(t.helper(Gi), [
              b
            ])
          ]
        );
        break;
    }
  return {
    props: b,
    directives: f,
    patchFlag: y,
    dynamicPropNames: N,
    shouldUseBlock: E
  };
}
function Dc(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (s.key.type === 8 || !s.key.isStatic) {
      n.push(s);
      continue;
    }
    const r = s.key.content, o = t.get(r);
    o ? (r === "style" || r === "class" || At(r)) && sE(o, s) : (t.set(r, s), n.push(s));
  }
  return n;
}
function sE(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = zi(
    [e.value, t.value],
    e.loc
  );
}
function rE(e, t) {
  const n = [], i = gu.get(e);
  i ? n.push(t.helperString(i)) : (t.helper(tl), t.directives.add(e.name), n.push(Fi(e.name, "directive")));
  const { loc: s } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const r = ne("true", !1, s);
    n.push(
      nt(
        e.modifiers.map(
          (o) => _e(o, r)
        ),
        s
      )
    );
  }
  return zi(n, e.loc);
}
function oE(e) {
  let t = "[";
  for (let n = 0, i = e.length; n < i; n++)
    t += JSON.stringify(e[n]), n < i - 1 && (t += ", ");
  return t + "]";
}
function lo(e) {
  return e === "component" || e === "Component";
}
const lE = (e, t) => {
  if (Ms(e)) {
    const { children: n, loc: i } = e, { slotName: s, slotProps: r } = cE(e, t), o = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      s,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    r && (o[2] = r, l = 3), n.length && (o[3] = zn([], n, !1, !1, i), l = 4), t.scopeId && !t.slotted && (l = 5), o.splice(l), e.codegenNode = Te(
      t.helper(zf),
      o,
      i
    );
  }
};
function cE(e, t) {
  let n = '"default"', i;
  const s = [];
  for (let r = 0; r < e.props.length; r++) {
    const o = e.props[r];
    if (o.type === 6)
      o.value && (o.name === "name" ? n = JSON.stringify(o.value.content) : (o.name = Ee(o.name), s.push(o)));
    else if (o.name === "bind" && zt(o.arg, "name")) {
      if (o.exp)
        n = o.exp;
      else if (o.arg && o.arg.type === 4) {
        const l = Ee(o.arg.content);
        n = o.exp = ne(l, !1, o.arg.loc);
      }
    } else
      o.name === "bind" && o.arg && ze(o.arg) && (o.arg.content = Ee(o.arg.content)), s.push(o);
  }
  if (s.length > 0) {
    const { props: r, directives: o } = Eu(
      e,
      t,
      s,
      !1,
      !1
    );
    i = r, o.length && t.onError(
      ue(
        36,
        o[0].loc
      )
    );
  }
  return {
    slotName: n,
    slotProps: i
  };
}
const aE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, yu = (e, t, n, i) => {
  const { loc: s, modifiers: r, arg: o } = e;
  !e.exp && !r.length && n.onError(ue(35, s));
  let l;
  if (o.type === 4)
    if (o.isStatic) {
      let f = o.content;
      B.NODE_ENV !== "production" && f.startsWith("vnode") && n.onError(ue(51, o.loc)), f.startsWith("vue:") && (f = `vnode-${f.slice(4)}`);
      const p = t.tagType !== 0 || f.startsWith("vnode") || !/[A-Z]/.test(f) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        gt(Ee(f))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${f}`
      );
      l = ne(p, !0, o.loc);
    } else
      l = ut([
        `${n.helperString(to)}(`,
        o,
        ")"
      ]);
  else
    l = o, l.children.unshift(`${n.helperString(to)}(`), l.children.push(")");
  let c = e.exp;
  c && !c.content.trim() && (c = void 0);
  let a = n.cacheHandlers && !c && !n.inVOnce;
  if (c) {
    const f = Qf(c.content), p = !(f || aE.test(c.content)), E = c.content.includes(";");
    B.NODE_ENV !== "production" && mn(
      c,
      n,
      !1,
      E
    ), (p || a && f) && (c = ut([
      `${p ? "$event" : "(...args)"} => ${E ? "{" : "("}`,
      c,
      E ? "}" : ")"
    ]));
  }
  let u = {
    props: [
      _e(
        l,
        c || ne("() => {}", !1, s)
      )
    ]
  };
  return i && (u = i(u)), a && (u.props[0].value = n.cache(u.props[0].value)), u.props.forEach((f) => f.key.isHandlerKey = !0), u;
}, fE = (e, t, n) => {
  const { modifiers: i, loc: s } = e, r = e.arg;
  let { exp: o } = e;
  if (o && o.type === 4 && !o.content.trim() && (o = void 0), !o) {
    if (r.type !== 4 || !r.isStatic)
      return n.onError(
        ue(
          52,
          r.loc
        )
      ), {
        props: [
          _e(r, ne("", !0, s))
        ]
      };
    const l = Ee(r.content);
    o = e.exp = ne(l, !1, r.loc);
  }
  return r.type !== 4 ? (r.children.unshift("("), r.children.push(') || ""')) : r.isStatic || (r.content = `${r.content} || ""`), i.includes("camel") && (r.type === 4 ? r.isStatic ? r.content = Ee(r.content) : r.content = `${n.helperString(eo)}(${r.content})` : (r.children.unshift(`${n.helperString(eo)}(`), r.children.push(")"))), n.inSSR || (i.includes("prop") && wc(r, "."), i.includes("attr") && wc(r, "^")), {
    props: [_e(r, o)]
  };
}, wc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, uE = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let i, s = !1;
      for (let r = 0; r < n.length; r++) {
        const o = n[r];
        if (Sr(o)) {
          s = !0;
          for (let l = r + 1; l < n.length; l++) {
            const c = n[l];
            if (Sr(c))
              i || (i = n[r] = ut(
                [o],
                o.loc
              )), i.children.push(" + ", c), n.splice(l, 1), l--;
            else {
              i = void 0;
              break;
            }
          }
        }
      }
      if (!(!s || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      n.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !e.props.find(
        (r) => r.type === 7 && !t.directiveTransforms[r.name]
      ) && e.tag !== "template")))
        for (let r = 0; r < n.length; r++) {
          const o = n[r];
          if (Sr(o) || o.type === 8) {
            const l = [];
            (o.type !== 2 || o.content !== " ") && l.push(o), !t.ssr && it(o, t) === 0 && l.push(
              1 + (B.NODE_ENV !== "production" ? ` /* ${yt[1]} */` : "")
            ), n[r] = {
              type: 12,
              content: o,
              loc: o.loc,
              codegenNode: Te(
                t.helper(Zo),
                l
              )
            };
          }
        }
    };
}, Vc = /* @__PURE__ */ new WeakSet(), dE = (e, t) => {
  if (e.type === 1 && tt(e, "once", !0))
    return Vc.has(e) || t.inVOnce || t.inSSR ? void 0 : (Vc.add(e), t.inVOnce = !0, t.helper(As), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0
        /* isVNode */
      ));
    });
}, _u = (e, t, n) => {
  const { exp: i, arg: s } = e;
  if (!i)
    return n.onError(
      ue(41, e.loc)
    ), as();
  const r = i.loc.source, o = i.type === 4 ? i.content : r, l = n.bindingMetadata[r];
  if (l === "props" || l === "props-aliased")
    return n.onError(ue(44, i.loc)), as();
  if (!o.trim() || !Qf(o) && !!1)
    return n.onError(
      ue(42, i.loc)
    ), as();
  const a = s || ne("modelValue", !0), u = s ? ze(s) ? `onUpdate:${Ee(s.content)}` : ut(['"onUpdate:" + ', s]) : "onUpdate:modelValue";
  let f;
  const p = n.isTS ? "($event: any)" : "$event";
  f = ut([
    `${p} => ((`,
    i,
    ") = $event)"
  ]);
  const E = [
    // modelValue: foo
    _e(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    _e(u, f)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const y = e.modifiers.map((P) => (dl(P) ? P : JSON.stringify(P)) + ": true").join(", "), T = s ? ze(s) ? `${s.content}Modifiers` : ut([s, ' + "Modifiers"']) : "modelModifiers";
    E.push(
      _e(
        T,
        ne(
          `{ ${y} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return as(E);
};
function as(e = []) {
  return { props: e };
}
const pE = /[\w).+\-_$\]]/, hE = (e, t) => {
  tn("COMPILER_FILTERS", t) && (e.type === 5 && Ls(e.content, t), e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Ls(n.exp, t);
  }));
};
function Ls(e, t) {
  if (e.type === 4)
    xc(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const i = e.children[n];
      typeof i == "object" && (i.type === 4 ? xc(i, t) : i.type === 8 ? Ls(e, t) : i.type === 5 && Ls(i.content, t));
    }
}
function xc(e, t) {
  const n = e.content;
  let i = !1, s = !1, r = !1, o = !1, l = 0, c = 0, a = 0, u = 0, f, p, E, y, T = [];
  for (E = 0; E < n.length; E++)
    if (p = f, f = n.charCodeAt(E), i)
      f === 39 && p !== 92 && (i = !1);
    else if (s)
      f === 34 && p !== 92 && (s = !1);
    else if (r)
      f === 96 && p !== 92 && (r = !1);
    else if (o)
      f === 47 && p !== 92 && (o = !1);
    else if (f === 124 && // pipe
    n.charCodeAt(E + 1) !== 124 && n.charCodeAt(E - 1) !== 124 && !l && !c && !a)
      y === void 0 ? (u = E + 1, y = n.slice(0, E).trim()) : P();
    else {
      switch (f) {
        case 34:
          s = !0;
          break;
        case 39:
          i = !0;
          break;
        case 96:
          r = !0;
          break;
        case 40:
          a++;
          break;
        case 41:
          a--;
          break;
        case 91:
          c++;
          break;
        case 93:
          c--;
          break;
        case 123:
          l++;
          break;
        case 125:
          l--;
          break;
      }
      if (f === 47) {
        let M = E - 1, S;
        for (; M >= 0 && (S = n.charAt(M), S === " "); M--)
          ;
        (!S || !pE.test(S)) && (o = !0);
      }
    }
  y === void 0 ? y = n.slice(0, E).trim() : u !== 0 && P();
  function P() {
    T.push(n.slice(u, E).trim()), u = E + 1;
  }
  if (T.length) {
    for (B.NODE_ENV !== "production" && ks(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), E = 0; E < T.length; E++)
      y = mE(y, T[E], t);
    e.content = y;
  }
}
function mE(e, t, n) {
  n.helper(nl);
  const i = t.indexOf("(");
  if (i < 0)
    return n.filters.add(t), `${Fi(t, "filter")}(${e})`;
  {
    const s = t.slice(0, i), r = t.slice(i + 1);
    return n.filters.add(s), `${Fi(s, "filter")}(${e}${r !== ")" ? "," + r : r}`;
  }
}
const Ac = /* @__PURE__ */ new WeakSet(), gE = (e, t) => {
  if (e.type === 1) {
    const n = tt(e, "memo");
    return !n || Ac.has(e) ? void 0 : (Ac.add(e), () => {
      const i = e.codegenNode || t.currentNode.codegenNode;
      i && i.type === 13 && (e.tagType !== 1 && fl(i, t), e.codegenNode = Te(t.helper(al), [
        n.exp,
        zn(void 0, i),
        "_cache",
        String(t.cached++)
      ]));
    });
  }
};
function EE(e) {
  return [
    [
      dE,
      Wg,
      gE,
      Yg,
      hE,
      ...B.NODE_ENV !== "production" ? [qg] : [],
      lE,
      nE,
      Qg,
      uE
    ],
    {
      on: yu,
      bind: fE,
      model: _u
    }
  ];
}
function yE(e, t = {}) {
  const n = t.onError || ul, i = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(ue(47)) : i && n(ue(48));
  const s = !1;
  t.cacheHandlers && n(ue(49)), t.scopeId && !i && n(ue(50));
  const r = ie({}, t, {
    prefixIdentifiers: s
  }), o = Z(e) ? _g(e, r) : e, [l, c] = EE();
  return Og(
    o,
    ie({}, r, {
      nodeTransforms: [
        ...l,
        ...t.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: ie(
        {},
        c,
        t.directiveTransforms || {}
        // user transforms
      )
    })
  ), Dg(o, r);
}
const _E = () => ({ props: [] });
var Be = {};
const Nu = Symbol(Be.NODE_ENV !== "production" ? "vModelRadio" : ""), bu = Symbol(Be.NODE_ENV !== "production" ? "vModelCheckbox" : ""), vu = Symbol(Be.NODE_ENV !== "production" ? "vModelText" : ""), Ou = Symbol(Be.NODE_ENV !== "production" ? "vModelSelect" : ""), co = Symbol(Be.NODE_ENV !== "production" ? "vModelDynamic" : ""), Su = Symbol(Be.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""), Cu = Symbol(Be.NODE_ENV !== "production" ? "vOnKeysGuard" : ""), Tu = Symbol(Be.NODE_ENV !== "production" ? "vShow" : ""), hl = Symbol(Be.NODE_ENV !== "production" ? "Transition" : ""), Du = Symbol(Be.NODE_ENV !== "production" ? "TransitionGroup" : "");
Wm({
  [Nu]: "vModelRadio",
  [bu]: "vModelCheckbox",
  [vu]: "vModelText",
  [Ou]: "vModelSelect",
  [co]: "vModelDynamic",
  [Su]: "withModifiers",
  [Cu]: "withKeys",
  [Tu]: "vShow",
  [hl]: "Transition",
  [Du]: "TransitionGroup"
});
let Rn;
function NE(e, t = !1) {
  return Rn || (Rn = document.createElement("div")), t ? (Rn.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, Rn.children[0].getAttribute("foo")) : (Rn.innerHTML = e, Rn.textContent);
}
const bE = {
  parseMode: "html",
  isVoidTag: Ju,
  isNativeTag: (e) => Fc(e) || Bc(e) || Hc(e),
  isPreTag: (e) => e === "pre",
  decodeEntities: NE,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return hl;
    if (e === "TransitionGroup" || e === "transition-group")
      return Du;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(e, t, n) {
    let i = t ? t.ns : n;
    if (t && i === 2)
      if (t.tag === "annotation-xml") {
        if (e === "svg")
          return 1;
        t.props.some(
          (s) => s.type === 6 && s.name === "encoding" && s.value != null && (s.value.content === "text/html" || s.value.content === "application/xhtml+xml")
        ) && (i = 0);
      } else
        /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (i = 0);
    else
      t && i === 1 && (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") && (i = 0);
    if (i === 0) {
      if (e === "svg")
        return 1;
      if (e === "math")
        return 2;
    }
    return i;
  }
}, vE = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: ne("style", !0, t.loc),
      exp: OE(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, OE = (e, t) => {
  const n = Lc(e);
  return ne(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function ft(e, t) {
  return ue(
    e,
    t,
    Be.NODE_ENV !== "production" ? SE : void 0
  );
}
const SE = {
  53: "v-html is missing expression.",
  54: "v-html will override element children.",
  55: "v-text is missing expression.",
  56: "v-text will override element children.",
  57: "v-model can only be used on <input>, <textarea> and <select> elements.",
  58: "v-model argument is not supported on plain elements.",
  59: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",
  60: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",
  61: "v-show is missing expression.",
  62: "<Transition> expects exactly one child element or component.",
  63: "Tags with side effect (<script> and <style>) are ignored in client component templates."
}, CE = (e, t, n) => {
  const { exp: i, loc: s } = e;
  return i || n.onError(
    ft(53, s)
  ), t.children.length && (n.onError(
    ft(54, s)
  ), t.children.length = 0), {
    props: [
      _e(
        ne("innerHTML", !0, s),
        i || ne("", !0)
      )
    ]
  };
}, TE = (e, t, n) => {
  const { exp: i, loc: s } = e;
  return i || n.onError(
    ft(55, s)
  ), t.children.length && (n.onError(
    ft(56, s)
  ), t.children.length = 0), {
    props: [
      _e(
        ne("textContent", !0),
        i ? it(i, n) > 0 ? i : Te(
          n.helperString(or),
          [i],
          s
        ) : ne("", !0)
      )
    ]
  };
}, DE = (e, t, n) => {
  const i = _u(e, t, n);
  if (!i.props.length || t.tagType === 1)
    return i;
  e.arg && n.onError(
    ft(
      58,
      e.arg.loc
    )
  );
  function s() {
    const l = tt(t, "bind");
    l && zt(l.arg, "value") && n.onError(
      ft(
        60,
        l.loc
      )
    );
  }
  const { tag: r } = t, o = n.isCustomElement(r);
  if (r === "input" || r === "textarea" || r === "select" || o) {
    let l = vu, c = !1;
    if (r === "input" || o) {
      const a = Li(t, "type");
      if (a) {
        if (a.type === 7)
          l = co;
        else if (a.value)
          switch (a.value.content) {
            case "radio":
              l = Nu;
              break;
            case "checkbox":
              l = bu;
              break;
            case "file":
              c = !0, n.onError(
                ft(
                  59,
                  e.loc
                )
              );
              break;
            default:
              Be.NODE_ENV !== "production" && s();
              break;
          }
      } else
        sg(t) ? l = co : Be.NODE_ENV !== "production" && s();
    } else
      r === "select" ? l = Ou : Be.NODE_ENV !== "production" && s();
    c || (i.needRuntime = n.helper(l));
  } else
    n.onError(
      ft(
        57,
        e.loc
      )
    );
  return i.props = i.props.filter(
    (l) => !(l.key.type === 4 && l.key.content === "modelValue")
  ), i;
}, wE = /* @__PURE__ */ Ae("passive,once,capture"), VE = /* @__PURE__ */ Ae(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), xE = /* @__PURE__ */ Ae("left,right"), wu = /* @__PURE__ */ Ae(
  "onkeyup,onkeydown,onkeypress",
  !0
), AE = (e, t, n, i) => {
  const s = [], r = [], o = [];
  for (let l = 0; l < t.length; l++) {
    const c = t[l];
    c === "native" && Xn(
      "COMPILER_V_ON_NATIVE",
      n,
      i
    ) || wE(c) ? o.push(c) : xE(c) ? ze(e) ? wu(e.content) ? s.push(c) : r.push(c) : (s.push(c), r.push(c)) : VE(c) ? r.push(c) : s.push(c);
  }
  return {
    keyModifiers: s,
    nonKeyModifiers: r,
    eventOptionModifiers: o
  };
}, Ic = (e, t) => ze(e) && e.content.toLowerCase() === "onclick" ? ne(t, !0) : e.type !== 4 ? ut([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, IE = (e, t, n) => yu(e, t, n, (i) => {
  const { modifiers: s } = e;
  if (!s.length)
    return i;
  let { key: r, value: o } = i.props[0];
  const { keyModifiers: l, nonKeyModifiers: c, eventOptionModifiers: a } = AE(r, s, n, e.loc);
  if (c.includes("right") && (r = Ic(r, "onContextmenu")), c.includes("middle") && (r = Ic(r, "onMouseup")), c.length && (o = Te(n.helper(Su), [
    o,
    JSON.stringify(c)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!ze(r) || wu(r.content)) && (o = Te(n.helper(Cu), [
    o,
    JSON.stringify(l)
  ])), a.length) {
    const u = a.map(bt).join("");
    r = ze(r) ? ne(`${r.content}${u}`, !0) : ut(["(", r, `) + "${u}"`]);
  }
  return {
    props: [_e(r, o)]
  };
}), kE = (e, t, n) => {
  const { exp: i, loc: s } = e;
  return i || n.onError(
    ft(61, s)
  ), {
    props: [],
    needRuntime: n.helper(Tu)
  };
}, RE = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === hl)
    return () => {
      if (!e.children.length)
        return;
      Vu(e) && t.onError(
        ft(
          62,
          {
            start: e.children[0].loc.start,
            end: e.children[e.children.length - 1].loc.end,
            source: ""
          }
        )
      );
      const i = e.children[0];
      if (i.type === 1)
        for (const s of i.props)
          s.type === 7 && s.name === "show" && e.props.push({
            type: 6,
            name: "persisted",
            nameLoc: e.loc,
            value: void 0,
            loc: e.loc
          });
    };
};
function Vu(e) {
  const t = e.children = e.children.filter(
    (i) => i.type !== 3 && !(i.type === 2 && !i.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(Vu);
}
const ME = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (Be.NODE_ENV !== "production" && t.onError(
    ft(
      63,
      e.loc
    )
  ), t.removeNode());
}, PE = [
  vE,
  ...Be.NODE_ENV !== "production" ? [RE] : []
], $E = {
  cloak: _E,
  html: CE,
  text: TE,
  model: DE,
  // override compiler-core
  on: IE,
  // override compiler-core
  show: kE
};
function LE(e, t = {}) {
  return yE(
    e,
    ie({}, bE, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        ME,
        ...PE,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: ie(
        {},
        $E,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
var fi = {};
function FE() {
  Nf();
}
fi.NODE_ENV !== "production" && FE();
const kc = /* @__PURE__ */ new WeakMap();
function BE(e) {
  let t = kc.get(e ?? le);
  return t || (t = /* @__PURE__ */ Object.create(null), kc.set(e ?? le, t)), t;
}
function HE(e, t) {
  if (!Z(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return fi.NODE_ENV !== "production" && xe("invalid template option: ", e), pe;
  const n = e, i = BE(t), s = i[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const a = document.querySelector(e);
    fi.NODE_ENV !== "production" && !a && xe(`Template element not found or is empty: ${e}`), e = a ? a.innerHTML : "";
  }
  const r = ie(
    {
      hoistStatic: !0,
      onError: fi.NODE_ENV !== "production" ? l : void 0,
      onWarn: fi.NODE_ENV !== "production" ? (a) => l(a, !0) : pe
    },
    t
  );
  !r.isCustomElement && typeof customElements < "u" && (r.isCustomElement = (a) => !!customElements.get(a));
  const { code: o } = LE(e, r);
  function l(a, u = !1) {
    const f = u ? a.message : `Template compilation error: ${a.message}`, p = a.loc && Fu(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    xe(p ? `${f}
${p}` : f);
  }
  const c = new Function("Vue", o)(Bm);
  return c._rc = !0, i[n] = c;
}
hf(HE);
const jE = { class: "mb-3" }, UE = { class: "ms-3" }, KE = {
  __name: "Like",
  props: ["postId"],
  setup(e) {
    const t = e, n = xt(0), i = xt(!1);
    ti(async () => {
      let o = await (await fetch(`/posts/${t.postId}/get-likes`)).json();
      n.value = o.likes, i.value = o.user_likes;
    });
    async function s() {
      let o = await (await fetch(`/posts/${t.postId}/like`)).json();
      n.value = o.likes, i.value = o.user_likes;
    }
    return (r, o) => (Ki(), rf("div", jE, [
      Ii("button", {
        class: Vn(["btn", { "btn-warning": i.value, "btn-primary": !i.value }]),
        onClick: s
      }, Dr(i.value ? "Unlike" : "Like"), 3),
      Ii("span", UE, Dr(n.value) + " likes", 1)
    ]));
  }
};
document.querySelectorAll('[id^="like-"]').forEach((e) => {
  Ff({
    components: {
      Like: KE
    }
  }).mount(`#${e.id}`);
});
