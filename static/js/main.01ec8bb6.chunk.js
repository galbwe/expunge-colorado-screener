(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{11:function(e,o,t){},12:function(e,o,t){"use strict";t.r(o);var r=t(0),i=t(4),s=t.n(i),a=t(1),n=t.n(a),c=t(2),d=t(5),l={title:"Tell us some more about your case.",triggers:[{type:"setvalue",expression:"{coloradoArrest} = 'No' or {over18} = 'No' or {federalCase} = 'Yes' or {chargeToSeal} = 'Ineligible Charge Type' or {completedSentencing} = 'No' or {enoughTimePassed} = 'Not Enough Time Has Passed' or {paidRestitutionAndFees} = 'No' or {attemptedToSeal} = 'Yes'",setToName:"outcome",setValue:"ineligible"},{type:"setvalue",expression:"{sealingArrestRecordOnly} = 'Yes' or {chargeDismissedOrAcquitted} = 'Yes' or {anyNewOffense} = 'No'",setToName:"outcome",setValue:"eligible"},{type:"setvalue",expression:"{federalCase} = 'Not Sure' or {chargeToSeal} = 'Not Sure' or {completedSentencing} = 'Not Sure' or {enoughTimePassed} = 'Not Sure' or {chargeDismissedOrAcquitted} = 'Not Sure' or {paidRestitutionAndFees} = 'Not Sure' or {anyNewOffense} = 'Yes' or {anyNewOffense} = 'Not Sure'",setToName:"outcome",setValue:"needInfo"}],pages:[{name:"preliminaryQuestions",questions:[{type:"radiogroup",choices:["Yes","No"],isRequired:!0,name:"coloradoArrest",title:"Did your arrest or charge take place in Colorado?"},{type:"radiogroup",choices:["Yes","No"],isRequired:!0,name:"over18",title:"Were you over 18 at the time of the arrest or charge?",visibleIf:"{coloradoArrest} = 'Yes'"},{type:"radiogroup",choices:["Yes","No","Not Sure"],isRequired:!0,name:"federalCase",title:"Was your case a federal case?",visibleIf:"{over18} = 'Yes' and {coloradoArrest} = 'Yes'"}]},{name:"sealingArrestsAndCharges",visibleIf:"{coloradoArrest} = 'Yes' and {over18} = 'Yes' and {federalCase} = 'No'",questions:[{type:"radiogroup",choices:["Yes","No"],isRequired:!0,name:"sealingArrestRecordOnly",title:"Were you arrested, but not charged & seeking to seal arrest record only?"},{type:"radiogroup",choices:["Yes","No","Not Sure"],isRequired:!0,name:"chargeDismissedOrAcquitted",title:"Were all charges in your case dismissed or were you acquitted (found not guilty)?",visibleIf:"{sealingArrestRecordOnly} = 'No'"},{type:"radiogroup",choices:["Eligible Charge Type","Ineligible Charge Type","Not Sure"],isRequired:!0,name:"chargeToSeal",title:"What conviction are you looking to seal?",visibleIf:"{chargeDismissedOrAcquitted} = 'No'"}]},{name:"convictionRequirements",visibleIf:"{chargeToSeal} = 'Eligible Charge Type' and {chargeDismissedOrAcquitted} = 'No'",questions:[{type:"radiogroup",choices:["Yes","No","Not Sure"],isRequired:!0,name:"completedSentencing",title:"If you were sentenced at the end of your case, have you completed all sentencing, including supervised or unsupervised probation, parole, community corrections, incarceration, etc?"},{type:"radiogroup",choices:["Enough Time Has Passed","Not Enough Time Has Passed","Not Sure"],isRequired:!0,name:"enoughTimePassed",title:"In most cases, a certain period of time must go by from the date of conviction, or the final date of completing a sentence, before you can apply to seal your record. What is the month & year you completed your sentencing/supervision?",visibleIf:"{completedSentencing} = 'Yes'"},{type:"radiogroup",choices:["Yes","No","Not Sure"],isRequired:!0,name:"paidRestitutionAndFees",title:"Have you paid all restitution, fines, court costs, late fees or other fees ordered by the Court in your case?",visibleIf:"{enoughTimePassed} = 'Enough Time Has Passed'"},{type:"radiogroup",choices:["Yes","No","Not Sure"],isRequired:!0,name:"attemptedToSeal",title:"Have you attempted to seal your record for this conviction within the past 12 months?",visibleIf:"{paidRestitutionAndFees} = 'Yes'"},{type:"radiogroup",choices:["Yes","No","Not Sure"],isRequired:!0,name:"anyNewOffense",title:"Have you been convicted of or charged with another offense after the conviction you are trying to seal?",visibleIf:"{attemptedToSeal} = 'No'"}]}]};var u={matrix:{root:"table table-striped"},navigationButton:"btn-nav",header:"header",container:"container"};var h=function(e){switch(e.type){case"eligible":return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"You are eligible!"}),Object(r.jsx)("div",{children:"blah blah blah"})]});case"needInfo":return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Need more info"}),Object(r.jsx)("div",{children:"go here ask this ...."})]});case"ineligible":return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Sorry not eligible"}),Object(r.jsx)("div",{children:"here are resources"})]});default:return null}},g=function(){var e=function(e,o){var t=Object(a.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):o}catch(r){return console.log(r),o}})),r=Object(c.a)(t,2),i=r[0],s=r[1];return[i,function(o){try{var t=o instanceof Function?o(i):o;s(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(r){console.log(r)}}]}("surveyData",null),o=Object(c.a)(e,2),t=(o[0],o[1]),i=Object(a.useState)(""),s=Object(c.a)(i,2),n=s[0],g=s[1];return Object(r.jsx)("div",{children:n?Object(r.jsx)(h,{type:n}):Object(r.jsx)(d.Survey,{json:l,css:u,onValueChanged:function(e){t(e.data)},onComplete:function(e){g(e.data.outcome)}})})};t(11);s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("h1",{children:"Expunge Colorado Screener"}),Object(r.jsx)("div",{className:"center-me",children:Object(r.jsx)(g,{})})]})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.01ec8bb6.chunk.js.map