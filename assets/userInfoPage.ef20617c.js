import{d as B,u as f,a as v,r as i,_ as g,o as c,c as D,b as e,e as o,w as r,v as p,f as m,g as h,t as C}from"./index.1599143b.js";const N=B({setup(){const u=f(),t=v(),l=i(""),s=i(""),a=i(""),d=()=>{n()&&(t.commit("setAge",l),t.commit("setGender",s),t.commit("setNickName",a),u.push("/orderPage"))},n=()=>!l.value||l.value.length<0?(alert("\uB098\uC774\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),!1):!s.value||s.value.length<0?(alert("\uC131\uBCC4\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."),!1):!a.value||a.value.length<0?(alert("\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),!1):isNaN(parseInt(l.value))?(alert("\uC5F0\uB839\uC740 \uC22B\uC790\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),!1):!0;return{age:l,gender:s,nickName:a,saveData:d}}}),b={class:"userInfoPage"},k=e("br",null,null,-1),w=e("label",{for:"man"},"\uB0A8",-1),y=e("label",{for:"women"},"\uC5EC",-1),V=e("br",null,null,-1),A={class:"test",style:{width:"200px"}},F=e("br",null,null,-1),E=e("br",null,null,-1),U=e("br",null,null,-1);function _(u,t,l,s,a,d){return c(),D("div",b,[e("p",null,[o(" \uB098\uC774 : "),r(e("input",{class:"unerBar","onUpdate:modelValue":t[0]||(t[0]=n=>u.age=n),maxlength:"3",style:{width:"23px"}},null,512),[[p,u.age]])]),k,e("p",null,[o(" \uC131\uBCC4 : "),r(e("input",{type:"radio",id:"man",value:"\uB0A8","onUpdate:modelValue":t[1]||(t[1]=n=>u.gender=n)},null,512),[[m,u.gender]]),w,r(e("input",{type:"radio",id:"women",value:"\uC5EC","onUpdate:modelValue":t[2]||(t[2]=n=>u.gender=n)},null,512),[[m,u.gender]]),y]),V,e("p",null,[o(" \uB2C9\uB124\uC784 : "),r(e("input",{class:"unerBar","onUpdate:modelValue":t[3]||(t[3]=n=>u.nickName=n),maxlength:"100",style:{width:"200px"}},null,512),[[p,u.nickName]])]),e("button",{class:"nextButton",onClick:t[4]||(t[4]=h((...n)=>u.saveData&&u.saveData(...n),["prevent"]))},"\uB2E4\uC74C"),e("div",A,[F,E,o(" --\uAC1C\uBC1C\uD655\uC778\uC6A9--"),U,o(" "+C(u.age)+" "+C(u.gender)+" "+C(u.nickName),1)])])}const M=g(N,[["render",_]]);export{M as default};