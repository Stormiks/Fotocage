(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f90c461"],{"715d":function(r,o,s){},b9733:function(r,o,s){"use strict";s.r(o);var t=function(){var r=this,o=r.$createElement,s=r._self._c||o;return s("section",{staticClass:"auth-registration"},[s("AuthFormLayout",{staticClass:"form__auth_registration",attrs:{"error-form":!r.$v.validForm.$invalid&&!r.$v.validPasswords.$invalid},on:{"auth-submit":function(o){return r.register(r.form)}}},[s("h1",[r._v("Регистрация")]),s("AuthFormGroup",{staticClass:"flex flex-col items-end mb-2.5"},[s("div",{staticClass:"w-full flex justify-between"},[s("label",{attrs:{for:"login"}},[r._v("Введите логин: ")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:r.form.login,expression:"form.login",modifiers:{trim:!0}}],class:{"is-invalid":r.$v.form.login.$error},attrs:{type:"text",id:"login",name:"login",placeholder:"Логин"},domProps:{value:r.form.login},on:{blur:[function(o){return r.$v.form.login.$touch()},function(o){return r.$forceUpdate()}],input:function(o){o.target.composing||r.$set(r.form,"login",o.target.value.trim())}}})]),!r.$v.form.login.required&&r.$v.form.login.$dirty?s("span",{staticClass:"px-1 py-0.5 text-red-600"},[r._v(" Введите логин ")]):r.$v.form.login.required&&!r.$v.form.login.minLength&&r.$v.form.login.$dirty?s("span",{staticClass:"px-1 py-0.5 text-red-600"},[r._v(" Минимальная длина логина "+r._s(r.$v.form.login.$params.minLength.min)+" символов ")]):r._e()]),s("AuthFormGroup",{staticClass:"flex flex-col items-end mb-2.5"},[s("div",{staticClass:"w-full flex justify-between"},[s("label",{attrs:{for:"pass1"}},[r._v("Введите пароль: ")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:r.form.password,expression:"form.password",modifiers:{trim:!0}}],class:{"is-invalid":r.$v.form.password.$error&&r.$v.form.password.$dirty||!r.$v.form.passwordConfirm.sameAsPassword&&!r.$v.form.passwordConfirm.$invalid},attrs:{type:"password",id:"pass1",name:"password1",placeholder:"Пароль"},domProps:{value:r.form.password},on:{blur:[r.$v.form.password.$touch,function(o){return r.$forceUpdate()}],input:function(o){o.target.composing||r.$set(r.form,"password",o.target.value.trim())}}})]),!r.$v.form.password.required&&r.$v.form.password.$dirty?s("span",{staticClass:"px-1 py-0.5 text-red-600"},[r._v(" Введите пароль ")]):!r.$v.form.password.minLength&&r.$v.form.password.$dirty?s("span",{staticClass:"px-1 py-0.5 text-red-600"},[r._v(" Минимальная длина пароля "+r._s(r.$v.form.password.$params.minLength.min)+" символов ")]):r._e()]),s("AuthFormGroup",{staticClass:"flex flex-col items-end mb-2.5"},[s("div",{staticClass:"w-full flex justify-between"},[s("label",{attrs:{for:"pass2"}},[r._v("Подтвердите пароль: ")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:r.form.passwordConfirm,expression:"form.passwordConfirm",modifiers:{trim:!0}}],class:{"is-invalid":!r.$v.form.passwordConfirm.sameAsPassword&&r.$v.form.passwordConfirm.$dirty},attrs:{disabled:r.$v.form.password.$invalid,type:"password",id:"pass2",name:"password2",placeholder:"Повторите пароль"},domProps:{value:r.form.passwordConfirm},on:{blur:[function(o){return r.$v.validPasswords.$touch()},function(o){return r.$forceUpdate()}],input:function(o){o.target.composing||r.$set(r.form,"passwordConfirm",o.target.value.trim())}}})]),!r.$v.form.passwordConfirm.sameAsPassword&&r.$v.form.passwordConfirm.$dirty?s("span",{staticClass:"px-1 py-0.5 text-red-600"},[r._v(" Пароли не совпадают ")]):r._e()]),s("AuthFormFooter",[s("button",{attrs:{disabled:r.$v.validForm.$invalid,type:"submit"}},[r._v("Регистрация")]),s("router-link",{attrs:{to:{name:"Login"},title:"Войти"}},[r._v(" Войти ")])],1)],1)],1)},e=[],i=s("5530"),a=(s("b0c0"),s("1dce")),n=s("b5ae"),m=s("2f62"),d=s("4461"),l=s("6251"),f=s("2277"),u=s("365c"),p={components:{AuthFormLayout:d["a"],AuthFormGroup:l["a"],AuthFormFooter:f["a"]},name:"ViewsRegistration",data:function(){return{form:{login:"",password:"",passwordConfirm:""}}},validations:{validForm:["form.login","form.password","form.passwordConfirm"],validPasswords:["form.password","form.passwordConfirm"],form:{login:{required:n["required"],minLength:Object(n["minLength"])(3)},password:{required:n["required"],minLength:Object(n["minLength"])(4)},passwordConfirm:{required:n["required"],sameAsPassword:Object(n["sameAs"])("password"),minLength:Object(n["minLength"])(4)}}},computed:Object(i["a"])({},Object(m["c"])({logged:function(r){return r.isLoggedIn}})),beforeRouteLeave:function(r,o,s){"Login"!==r.name?s(this.logged):s()},methods:{register:function(r){var o=this;this.$v.form.$touch(),this.$v.validForm.$error||Object(u["d"])(r,(function(r){if(r.error)return o.$store.dispatch("updateStatusLogin",!1);o.$store.dispatch("updateStatusLogin",{auth:r.auth,id:r.id,role:r.role,login:r.login}),o.$router.push({name:"Home"})}))}},mixins:[a["validationMixin"]]},c=p,v=(s("cdc7"),s("2877")),$=Object(v["a"])(c,t,e,!1,null,"2ede0198",null);o["default"]=$.exports},cdc7:function(r,o,s){"use strict";s("715d")}}]);