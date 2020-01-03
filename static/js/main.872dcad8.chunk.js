(this["webpackJsonpgoit-react-hw-05-budget-planner"]=this["webpackJsonpgoit-react-hw-05-budget-planner"]||[]).push([[0],{30:function(e,n,t){e.exports=t(49)},49:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(9),o=t.n(u),l=t(3),i=t(7),c=t(27),s=Object(i.b)({budget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"SAVE_BUDGET":return a.value;default:return e}},expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"ADD_EXPENSE":return[].concat(Object(c.a)(e),[a.expense]);case"REMOVE_EXPENSE":return e.filter((function(e){return e.id!==a.id}));default:return e}}}),p=Object(i.c)(s,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),d=t(1),m=t(2),b=t(10),f=t(11),v=t(14),g=t(12),E=t(15);function x(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return x=function(){return e},e}var h=m.a.form(x()),y=function(e){var n=e.onSubmit,t=void 0===n?function(){return null}:n,a=e.children;return r.a.createElement(h,{onSubmit:t},a)};function O(){var e=Object(d.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return O=function(){return e},e}var S=m.a.label(O(),(function(e){return e.customStyles})),j=function(e){var n=e.children,t=e.customStyles;return r.a.createElement(S,{customStyles:t},n)};function w(){var e=Object(d.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return w=function(){return e},e}var _=m.a.input(w()),C=function(e){var n=e.type,t=void 0===n?" text":n,a=e.value,u=void 0===a?"":a,o=e.onChange,l=void 0===o?function(){return null}:o,i=e.name,c=void 0===i?"":i;return r.a.createElement(_,{type:t,value:u,onChange:l,name:c})};C.defaultProps={name:""};var D=C;function P(){var e=Object(d.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return P=function(){return e},e}var k=m.a.button(P()),N=function(e){var n=e.type,t=void 0===n?"button":n,a=e.label,u=void 0===a?"":a,o=e.onClick,l=void 0===o?function(){return null}:o;return r.a.createElement(k,{type:t,onClick:l},u)};N.defaultProps={type:"button",label:"",onClick:function(){return null}};var A=N,B=t(24),T=t.n(B),X=function(e){function n(){var e,t;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(v.a)(this,(e=Object(g.a)(n)).call.apply(e,[this].concat(r)))).state={budget:0},t.handleChange=function(e){t.setState({budget:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSave(t.state.budget),t.setState({budget:0})},t}return Object(E.a)(n,e),Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement(y,{onSubmit:this.handleSubmit},r.a.createElement(j,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter your total budget",r.a.createElement(D,{type:"number",value:this.state.budget,onChange:this.handleChange})),r.a.createElement(A,{label:"Save",type:"submit"}))}}]),n}(a.Component),R=Object(l.b)(null,(function(e){return{onSave:function(n){return e(function(e){return{type:"SAVE_BUDGET",payload:{value:Number(e)}}}(n))}}}))(X),V=t(25),z=t(13),U=function(e){function n(){var e,t;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(v.a)(this,(e=Object(g.a)(n)).call.apply(e,[this].concat(r)))).state={name:"",amount:0},t.handleChange=function(e){t.setState(Object(z.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSave(Object(V.a)({},t.state)),t.setState({name:"",amount:0})},t}return Object(E.a)(n,e),Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement(y,{onSubmit:this.handleSubmit},r.a.createElement(j,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense name",r.a.createElement(D,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),r.a.createElement(j,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense amount",r.a.createElement(D,{type:"number",name:"amount",value:this.state.amount,onChange:this.handleChange})),r.a.createElement(A,{label:"Add",type:"submit"}))}}]),n}(a.Component),I=Object(l.b)(null,(function(e){return{onSave:function(n){return e(function(e){var n=e.name,t=e.amount;return{type:"ADD_EXPENSE",payload:{expense:{id:T.a.generate(),name:n,amount:Number(t)}}}}(n))}}}))(U),F=t(26),G=function(e){return e.budget},J=function(e){return e.expenses},L=Object(F.a)(J,(function(e){return e.reduce((function(e,n){return e+n.amount}),0)})),M={getBudget:G,getAllExpenses:J,getBalance:function(e){return G(e)-L(e)},getExpensesTotal:L};function $(){var e=Object(d.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return $=function(){return e},e}var q=m.a.table($()),H=Object(l.b)((function(e){return{items:M.getAllExpenses(e)}}),(function(e){return{onRemove:function(n){return e(function(e){return{type:"REMOVE_EXPENSE",payload:{id:e}}}(n))}}}))((function(e){var n=e.items,t=void 0===n?[]:n,a=e.onRemove;return r.a.createElement(q,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Expense name"),r.a.createElement("th",null,"Expense amount"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t.map((function(e){var n=e.id,t=e.name,u=e.amount;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t),r.a.createElement("td",null,u),r.a.createElement("td",null,r.a.createElement(A,{label:"Delete",onClick:function(){return a(n)}})))}))))}));function K(){var e=Object(d.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return K=function(){return e},e}function Q(){var e=Object(d.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return Q=function(){return e},e}function W(){var e=Object(d.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return W=function(){return e},e}var Y=m.a.div(W(),(function(e){return e.isPositive?"#388E3C":"#D32F2F"})),Z=m.a.p(Q()),ee=m.a.p(K()),ne=function(e){var n=e.label,t=e.value,a=e.isPositive;return r.a.createElement(Y,{isPositive:a},r.a.createElement(Z,null,n),r.a.createElement(ee,null,t,"\xa0$"))};ne.defaultProps={isPositive:!1};var te=ne;function ae(){var e=Object(d.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return ae=function(){return e},e}var re=m.a.section(ae()),ue=Object(l.b)((function(e){return{budget:M.getBudget(e),expenses:M.getExpensesTotal(e),balance:M.getBalance(e)}}))((function(e){var n=e.budget,t=void 0===n?0:n,a=e.expenses,u=void 0===a?0:a,o=e.balance,l=void 0===o?0:o;return r.a.createElement(re,null,r.a.createElement(te,{label:"Budget",value:t,isPositive:!0}),r.a.createElement(te,{label:"Expenses",value:u}),r.a.createElement(te,{label:"Balance",value:l,isPositive:l>=0}))}));function oe(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return oe=function(){return e},e}var le=m.a.div(oe()),ie=function(e){e.expenses;return r.a.createElement(le,null,r.a.createElement(R,null),r.a.createElement(ue,null),r.a.createElement(I,null),r.a.createElement(H,null))};ie.defaultProps={expenses:[]};var ce=ie;o.a.render(r.a.createElement(l.a,{store:p},r.a.createElement(ce,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.872dcad8.chunk.js.map