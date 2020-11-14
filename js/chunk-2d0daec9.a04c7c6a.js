(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0daec9"],{"6e59":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"container"},[t("b-row",{staticClass:"justify-content-center"},[t("b-col",{attrs:{md:"4",sm:"6"}},[t("b-card",{staticClass:"md-6",attrs:{header:"Form Book"}},[t("h1",[e._v(e._s(e.title))]),t("b-form",{attrs:{action:""}},[t("input",{attrs:{type:"hidden",id:"id"}}),t("b-form-group",{attrs:{"label-for":"name",label:"Title:"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("name")},attrs:{type:"text",id:"name",name:"name"},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}}),e.errors.has("name")?t("b-form-invalid-feedback",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("name")))]):e._e()],1),t("b-form-group",{attrs:{"label-for":"author",label:"Author:"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("author")},attrs:{type:"text",id:"author",name:"author"},model:{value:e.form.author,callback:function(r){e.$set(e.form,"author",r)},expression:"form.author"}}),e.errors.has("author")?t("b-form-invalid-feedback",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("author")))]):e._e()],1),t("b-form-group",{attrs:{"label-for":"publisher",label:"Publisher:"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("publisher")},attrs:{type:"text",id:"publisher",name:"publisher"},model:{value:e.form.publisher,callback:function(r){e.$set(e.form,"publisher",r)},expression:"form.publisher"}}),e.errors.has("publisher")?t("b-form-invalid-feedback",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("publisher")))]):e._e()],1),t("b-form-group",{attrs:{"label-for":"price",label:"Price:"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("price")},attrs:{type:"number",id:"price",name:"price"},model:{value:e.form.price,callback:function(r){e.$set(e.form,"price",r)},expression:"form.price"}}),e.errors.has("price")?t("b-form-invalid-feedback",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("price")))]):e._e()],1),t("b-row",[t("b-col",[t("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:function(r){return e.submit(r)}}},[e._v("Submit")])],1),t("b-col",{staticClass:"text-right"},[t("router-link",{attrs:{tag:"a",to:{name:"home"}}},[e._v("back to Home")])],1)],1)],1)],1)],1)],1)],1)},i=[],s=(t("b0c0"),t("96cf"),t("1da1")),o=t("cf1f"),n=o["a"].build(),u={name:"formBook",data:function(){return{id:this.$route.params.id,title:"",form:{id:"",name:"",author:"",publisher:"",price:""}}},methods:{submit:function(e){var r=this;e.preventDefault(),this.$validator.validate().then((function(e){e?r.save():alert("Data is invalid")}))},save:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r={name:this.form.name,author:this.form.author,publisher:this.form.publisher,price:this.form.price},t=null,void 0!==this.id){e.next=8;break}return e.next=5,n.addBook(r);case 5:t=e.sent,e.next=11;break;case 8:return e.next=10,n.editBook(this.id,r);case 10:t=e.sent;case 11:alert(t.message),this.$router.push("/");case 13:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),getDataById:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.getDataById(this.id);case 2:r=e.sent,this.form.id=r.data.id,this.form.name=r.data.name,this.form.author=r.data.author,this.form.publisher=r.data.publisher,this.form.price=r.data.price;case 8:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),resetForm:function(){this.form.id="",this.form.name="",this.form.author="",this.form.publisher="",this.form.price=""}},beforeMount:function(){void 0!==this.id?(this.title="Edit Book",this.getDataById()):this.title="Add Book"}},l=u,c=t("2877"),d=Object(c["a"])(l,a,i,!1,null,null,null);r["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0daec9.a04c7c6a.js.map