(this.webpackJsonpinterviewapp=this.webpackJsonpinterviewapp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(8),s=n.n(r),a=(n(14),n(7)),o=n.n(a),l=n(9),u=n(2),d=n(3),h=n(5),j=n(4),v=(n(16),n(0)),p=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).renderDifficultyLevelOptions=function(){return e.props.levelsData.map((function(e){var t=e.id,n=e.level;return Object(v.jsx)("option",{className:"option",value:n,children:n.toUpperCase()},t)}))},e.onChangeLevel=function(t){return(0,e.props.onChangeDifficultyLevel)(t.target.value)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{className:"select-filters",children:Object(v.jsxs)("div",{className:"select-options",children:[Object(v.jsx)("label",{htmlFor:"difficulty-level",className:"filter-name",children:"DIFFICULTY LEVEL"}),Object(v.jsx)("select",{className:"select-item",onChange:function(t){return e.onChangeLevel(t)},children:this.renderDifficultyLevelOptions()})]})})}}]),n}(i.Component),f=(n(18),0),m=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).renderScoreCard=function(){return Object(v.jsxs)("div",{className:"score-card",children:[Object(v.jsx)("h1",{children:"TIME IS UP"}),Object(v.jsxs)("h1",{className:"heading",children:["Your Score : ",f]})]})},e.renderClickedValue=function(t){var n=e.props,i=n.resetTimeAndProceedToNextQuestion,c=(n.isClicked,e.props.fetchedDataWithTimer),r=(void 0===c?"":c).correct_answer,s=t.target.textContent;if(console.log("event object",t.target),s===r)return f+=1,console.log(f),i(t);console.log("Wrong Answer")},e.renderOptions=function(t,n,i,c){var r=e.props.isClicked?"correct-ans":"option";return console.log("Render Options Function Called"),console.log(r),""===i?Object(v.jsxs)("div",{children:[Object(v.jsx)("li",{className:"option",onClick:e.renderClickedValue,value:n,children:n}),Object(v.jsx)("li",{className:"".concat(r),onClick:e.renderClickedValue,value:t,children:t})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("li",{className:"".concat(r),value:t,onClick:e.renderClickedValue,children:t}),Object(v.jsx)("li",{className:"option",value:n,onClick:e.renderClickedValue,children:n}),Object(v.jsx)("li",{className:"option",value:i,onClick:e.renderClickedValue,children:i}),Object(v.jsx)("li",{className:"option",value:c,onClick:e.renderClickedValue,children:c})]})},e.renderQuestion=function(){var t=e.props.fetchedDataWithTimer,n=void 0===t?"":t,i=e.props,c=i.questionNumber,r=i.timer,s=n.question,a=void 0===s?"Click on Start Quiz Button to start the quiz":s,o=n.correct_answer,l=void 0===o?"correct ans":o,u=n.option1,d=void 0===u?"":u,h=n.option2,j=void 0===h?"":h,p=n.option3,m=void 0===p?"":p;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"heading-container",children:[Object(v.jsxs)("div",{className:"score-container",children:[Object(v.jsx)("p",{className:"score",children:"SCORE"}),Object(v.jsxs)("p",{className:"count",children:[f,"/10"]})]}),Object(v.jsxs)("h1",{className:"heading",children:["Question ",c+1," of 10"]}),Object(v.jsxs)("div",{className:"time-container",children:[Object(v.jsx)("p",{className:"score",children:"TIME"}),Object(v.jsxs)("p",{className:"count",children:[r," sec(s)"]})]})]}),Object(v.jsxs)("p",{className:"question",children:[c+1,".",a]}),Object(v.jsx)("ul",{className:"option-container",children:e.renderOptions(l,d,j,m)})]})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.questionNumber;return Object(v.jsx)("div",{className:"question-container",children:10===e?this.renderScoreCard():this.renderQuestion()})}}]),n}(i.Component),b=(n(19),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={activeDifficultyLevel:"easy",fetchedQuestionData:[],questionNumber:0,timer:0,isQuizStarted:!1,isClicked:!1},e.onChangeDifficultyLevel=function(t){e.setState({activeDifficultyLevel:t})},e.resetTimeAndProceedToNextQuestion=function(t){e.setState({timer:9,isClicked:!0})},e.updateTimer=function(){var t=e.state,n=t.timer,i=t.questionNumber;n>=10?e.setState((function(e){return{timer:0,questionNumber:e.questionNumber+1}})):e.setState((function(e){return{isQuizStarted:!0,timer:e.timer+1,isClicked:!1}})),10===i&&clearInterval(e.timeInterval)},e.fetchData=Object(l.a)(o.a.mark((function t(){var n,i,c,r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.activeDifficultyLevel,t.next=3,fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=".concat(n));case 3:return i=t.sent,t.next=6,i.json();case 6:c=t.sent,r=c.results,s=r.map((function(e){return{question:e.question,correct_answer:e.correct_answer,option1:e.incorrect_answers[0],option2:e.incorrect_answers[1],option3:e.incorrect_answers[2]}})),e.setState({fetchedQuestionData:s}),e.timeInterval=setInterval(e.updateTimer,1e3);case 11:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.timeInterval)}},{key:"render",value:function(){var e=this.props.levelsData,t=this.state,n=t.fetchedQuestionData,i=t.questionNumber,c=t.timer,r=t.isQuizStarted,s=t.isClicked,a=n[i];return Object(v.jsxs)("div",{className:"app-container",children:[Object(v.jsx)("h1",{className:"heading",children:"Interview Quiz Application"}),Object(v.jsx)(p,{levelsData:e,onChangeDifficultyLevel:this.onChangeDifficultyLevel}),r?Object(v.jsx)(m,{fetchedDataWithTimer:a,questionNumber:i,timer:c,resetTimeAndProceedToNextQuestion:this.resetTimeAndProceedToNextQuestion,isClicked:s}):"Click the below button to start Quiz",Object(v.jsx)("div",{className:"button-container",children:Object(v.jsx)("button",{className:"start-button",onClick:this.fetchData,children:"Start Quiz"})})]})}}]),n}(i.Component)),O=(n(20),[{id:1,level:"easy"},{id:2,level:"medium"},{id:3,level:"hard"}]),x=function(){return Object(v.jsx)(b,{levelsData:O})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(x,{})}),document.getElementById("root")),C()}],[[21,1,2]]]);
//# sourceMappingURL=main.58c52957.chunk.js.map