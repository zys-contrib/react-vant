import{dr as m,ds as a,dt as d,du as x,dv as f,dw as g,dx as y,dy as S,dz as C,dA as V,dB as k,dC as v,dD as E,dE as F,dF as z,dG as W}from"./FloatingPanel.836b5eee.js";import{r as t}from"./main.eaa8a40a.js";function A(i){return m(i)?JSON.stringify(i)==="{}":!0}function H(i={}){const{value:n,sync:o}=i,e=t.exports.useRef(null),[r,l]=t.exports.useState(!1),c=t.exports.useCallback(s=>{var u;(u=e==null?void 0:e.current)==null||u.setFieldsValue(s)},[]),p=t.exports.useCallback(s=>{var u;return(u=e==null?void 0:e.current)==null?void 0:u.getFieldValue(s)},[]),h=t.exports.useCallback(()=>{var s;(s=e==null?void 0:e.current)==null||s.submit()},[]),b=t.exports.useCallback(()=>{var s;(s=e==null?void 0:e.current)==null||s.resetFields()},[]),w=t.exports.useCallback(()=>{var s;return(s=e==null?void 0:e.current)==null?void 0:s.getFieldsValue()},[]);return t.exports.useEffect(()=>{A(n)||(o?c(n):r||(c(n),l(!0)))},[n]),[e,{set:c,get:p,submit:h,clear:b,getAll:w}]}function O(){const[i,n]=t.exports.useState("visible"),o=()=>{d&&n(document.hidden?"hidden":"visible")};return t.exports.useEffect(()=>{o()},[]),a("visibilitychange",o,{depends:[i]}),i}function P(){const[i,n]=t.exports.useState(d?window.innerWidth:0),[o,e]=t.exports.useState(d?window.innerHeight:0),r=()=>{n(window.innerWidth),e(window.innerHeight)};return a("resize",r),a("orientationchange",r),{width:i,height:o}}var L={useClickAway:x,useCountDown:f,useEventListener:a,useFormSmart:H,useSetState:g,useUpdateEffect:y,useMount:S,usePageVisibility:O,useVisibilityChange:C,useInViewport:V,useTouch:k,useScrollParent:v,useWindowSize:P,useIsomorphicLayoutEffect:E,useUpdate:F,useMemoizedFn:z,usePropsValue:W};export{L as h};
