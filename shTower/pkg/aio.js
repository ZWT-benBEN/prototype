;/*!modules/app/main.js*/
define("modules/app/main",function(e,t){e("node_modules/framework7/dist/js/framework7");var o,i=e("node_modules/echarts/dist/echarts.min"),a=Dom7,n={init:function(e){return o?o:new Framework7(e)}},r={init:function(){function e(e){e.parents(".blockbox").find(".accOpen").html(e.parents(".blockbox").hasClass("active")?"收起":"展开"),e.parents(".blockbox").toggleClass("active")}o=n.init({pushState:!0,modalActionsTemplate:'<div class="actions-modal">{{#each this}}<div class="actions-modal-group">{{#each this}}{{#if label}}<span class="actions-modal-label">{{text}}</span>{{else}}<div class="actions-modal-button {{#if color}}color-{{color}}{{/if}} {{#if bold}}actions-modal-button-bold{{/if}}"><a href="{{link}}">{{text}}</a></div>{{/if}}{{/each}}</div>{{/each}}</div>'});o.addView(".view-main",{dynamicNavbar:!0,animatePages:!0,swipeBackPageAnimateOpacity:!1});a(".toolbar-item ").on("click",function(){a(".toolbar-item").removeClass("active"),a(this).addClass("active")});var t={tooltip:{trigger:"axis"},grid:{top:"10%",bottom:"30%"},legend:{data:["B2F零售店","118F零售店"],bottom:"8%"},xAxis:{type:"category",boundaryGap:!1,data:["1","2","3","4","5","6","7","8","9","10","11","12","13","14"],axisLabel:{show:!0,textStyle:{color:"#777"}},axisLine:{lineStyle:{color:"#e6e9f0"}}},yAxis:{type:"value",data:[0,10,20,30,40,50],axisLabel:{show:!0,textStyle:{color:"#777"}},axisLine:{lineStyle:{color:"#e6e9f0"}}},series:[{name:"实际",type:"line",smooth:!0,symbol:"circle",itemStyle:{normal:{color:"#0f98e7",lineStyle:{color:"#0f98e7"}}},data:[22,15,29,42,30,38,41,12,15,29,42,30,38,41]},{name:"预算",type:"line",smooth:!0,symbol:"circle",itemStyle:{normal:{color:"#afe5f8",lineStyle:{color:"#afe5f8"}}},data:[28,15,22,26,21,16,21,28,15,22,26,21,16,21]}]},r={tooltip:{trigger:"axis"},grid:{top:"10%",bottom:"40%",show:!1},xAxis:{splitLine:{show:!1},axisLabel:{textStyle:{color:"#777"}},axisLine:{show:!1,onZero:!1,lineStyle:{color:"#eaeaea"}},type:"category",boundaryGap:!1,data:["1月","2月","3月","4月","5月","6月","7月"]},yAxis:{type:"value",min:"0",max:"150",axisLine:{show:!0,onZero:!0,lineStyle:{color:"#eaeaea"}},splitLine:{show:!0},axisLabel:{formatter:"{value}",textStyle:{color:"#777"}}},series:[{name:"完成率",type:"line",smooth:!0,symbol:"circle",symbolSize:5,itemStyle:{normal:{color:"#5aceb1",lineStyle:{color:"#5aceb1"},label:{show:!0}}},data:["68","106","70","81","110","120","73"]}]},l={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",top:"20%",bottom:"5%",containLabel:!0},xAxis:{show:!1,type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["摩天VR40元","上海中心之水","雅壳照片6张\n8寸照片200元"],axisLabel:{show:!0,textStyle:{color:"#777"}},axisLine:{lineStyle:{color:"#e6e9f0"}}},series:[{name:"",type:"bar",barWidth:"15",data:[113,196,225],itemStyle:{normal:{color:function(e){var t=["#f8a20f","#5faee3","#a9d86e"];return t[e.dataIndex]},label:{show:!0,position:""}}}}]},s=i.init(document.querySelector("#dayDone")),c={backgroundColor:"white",color:["#3398DB"],tooltip:{show:!1,trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"-2%",right:"4%",bottom:"14%",containLabel:!0},xAxis:[{type:"category",data:["观光营业\n数据","观光参观\n人数","衍生品营\n业数据"],axisTick:{alignWithLabel:!0},axisLabel:{show:!0,textStyle:{color:"#777"}},axisLine:{lineStyle:{color:"#e6e9f0"}}}],yAxis:[{type:"value",show:!1}],series:[{name:"观光部",type:"bar",barWidth:"40",data:["55.67",18.4,5.9],itemStyle:{normal:{color:function(e){var t=["#3474c4","#ffb359","#c35ded"];return t[e.dataIndex]},label:{show:!0,position:"top"}}}}]};s.setOption(c);var m={backgroundColor:"white",color:["#3398DB"],tooltip:{show:!1,trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"-15%",right:"1%",bottom:"20%",containLabel:!0},xAxis:[{type:"category",data:["观光营业\n数据","观光参观\n人数","衍生品营\n业数据"],axisTick:{alignWithLabel:!0},axisLabel:{show:!0,interval:0,rotate:0,textStyle:{color:"#777"}},axisLine:{lineStyle:{color:"#e6e9f0"}}}],yAxis:[{type:"value",show:!1}],series:[{name:"月度实际",type:"bar",barWidth:"24",data:[1278,789,345],barGap:"0",itemStyle:{normal:{color:"#0f98e7",label:{show:!0,position:"top"}}}},{name:"月度预算",type:"bar",barWidth:"24",data:[1867,254,89],itemStyle:{normal:{color:"#afe5f8",label:{show:!0,position:"top"}}}}]},d={backgroundColor:"white",color:["#3398DB"],tooltip:{show:!1,trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"-25%",right:"1%",bottom:"20%",containLabel:!0},xAxis:[{type:"category",data:["观光营业\n数据","观光参观\n人数"],axisTick:{alignWithLabel:!0},axisLabel:{show:!0,interval:0,textStyle:{color:"#777"}},axisLine:{lineStyle:{color:"#e6e9f0"}}}],yAxis:[{type:"value",show:!1}],series:[{name:"月度实际",type:"bar",barWidth:"24",data:[130,240],barGap:"0",itemStyle:{normal:{color:"#0f98e7",label:{show:!0,position:"top"}}}},{name:"月度预算",type:"bar",barWidth:"24",data:[184,999],itemStyle:{normal:{color:"#afe5f8",label:{show:!0,position:"top"}}}}]},p={tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},color:["#3474c4","#e6e9f0"],series:[{name:"访问来源",silent:!0,type:"pie",hoverAnimation:!1,radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:78,name:"78%"},{value:22,name:""}]}]},h={tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},color:["#ffb359","#e6e9f0"],series:[{name:"访问来源",silent:!0,type:"pie",hoverAnimation:!1,radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:85,name:"85%"},{value:15,name:""}]}]},u={tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},color:["#c35ded","#e6e9f0"],series:[{name:"访问来源",silent:!0,type:"pie",hoverAnimation:!1,radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:78,name:"78%"},{value:22,name:""}]}]},y={tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},color:["#0db789","#e6e9f0"],series:[{name:"访问来源",silent:!0,type:"pie",hoverAnimation:!1,radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:34,name:"34%"},{value:66,name:""}]}]},b={tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{top:20},color:["#1bb5ec","#e6e9f0"],series:[{name:"访问来源",silent:!0,type:"pie",hoverAnimation:!1,radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:97,name:"97%"},{value:3,name:""}]}]},g={backgroundColor:"white",color:["#3398DB"],tooltip:{show:!1,trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"-9%",right:"1%",bottom:"2%",containLabel:!0},xAxis:[{type:"category",data:["观光营业\n数据","观光参观\n人数","衍生品\n营业数据","观光营业\n数据","观光参观\n人数"],axisTick:{alignWithLabel:!0},axisLabel:{show:!0,textStyle:{color:"#777"}},axisLine:{lineStyle:{color:"#e6e9f0"}}}],yAxis:[{type:"value",show:!1}],series:[{name:"年度实际",type:"bar",barWidth:"24",data:[1278,789,345,130,240],barGap:"0",itemStyle:{normal:{color:"#0f98e7",label:{show:!0,position:"top"}}}},{name:"年度预算",type:"bar",barWidth:"24",data:[1867,254,89,184,999],itemStyle:{normal:{color:"#afe5f8",label:{show:!0,position:"top"}}}}]},f=i.init(document.querySelector(".mouthLT")),x=i.init(document.querySelector(".mouthRT")),S=i.init(document.querySelector(".mouthThird1")),v=i.init(document.querySelector(".mouthThird2")),w=i.init(document.querySelector(".mouthThird3")),L=i.init(document.querySelector(".mouthThird4")),O=i.init(document.querySelector(".mouthThird5")),q=i.init(document.querySelector(".yearTopLine")),f=i.init(document.querySelector(".mouthLT")),x=i.init(document.querySelector(".mouthRT")),S=i.init(document.querySelector(".mouthThird1")),v=i.init(document.querySelector(".mouthThird2")),w=i.init(document.querySelector(".mouthThird3")),L=i.init(document.querySelector(".mouthThird4")),O=i.init(document.querySelector(".mouthThird5")),q=i.init(document.querySelector(".yearTopLine")),T=i.init(document.querySelector(".yearThird1")),k=i.init(document.querySelector(".yearThird2")),W=i.init(document.querySelector(".yearThird3")),A=i.init(document.querySelector(".yearThird4")),P=i.init(document.querySelector(".yearThird5"));f.setOption(m),x.setOption(d),S.setOption(p),v.setOption(h),w.setOption(u),L.setOption(y),O.setOption(b),q.setOption(g),f.setOption(m),x.setOption(d),S.setOption(p),v.setOption(h),w.setOption(u),L.setOption(y),O.setOption(b),q.setOption(g),T.setOption(p),k.setOption(h),W.setOption(u),A.setOption(y),P.setOption(b);var D={grid:{left:"-20%",rtooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c}万元 ({d}%)"},ight:"30%"},color:["#3474c4","#0db789","#ffb359"],legend:{orient:"vertical",x:"left",left:"63%",y:"middle",data:["包场","观光门票","VIP客户"]},series:[{name:"营业数据",type:"pie",radius:["50%","70%"],center:["30%","50%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}},formatter:function(e,t,o){return o+"%"}},labelLine:{normal:{show:!1}},data:[{value:335,name:"包场"},{value:310,name:"观光门票"},{value:234,name:"VIP客户"}]}]},M={title:{text:"本年预算1050",top:"15%",left:"65%"},grid:{left:"-20%",rtooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c}万元 ({d}%)"},ight:"30%"},color:["#0f98e7","#afe5f8"],legend:{orient:"vertical",x:"left",left:"65%",y:"middle",top:"30%",data:["本年实际","距离预算"]},series:[{name:"营业数据",type:"pie",radius:["50%","70%"],center:["30%","50%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}},formatter:function(e,t,o){return o+"%"}},labelLine:{normal:{show:!1}},data:[{value:450,name:"本年实际"},{value:600,name:"距离预算"}]}]},D={grid:{left:"-20%",rtooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c}万元 ({d}%)"},ight:"30%"},color:["#3474c4","#0db789","#ffb359"],legend:{orient:"vertical",x:"left",left:"63%",y:"middle",data:["包场","观光门票","VIP客户"]},series:[{name:"营业数据",type:"pie",radius:["50%","70%"],center:["30%","50%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}},formatter:function(e,t,o){return o+"%"}},labelLine:{normal:{show:!1}},data:[{value:335,name:"包场"},{value:310,name:"观光门票"},{value:234,name:"VIP客户"}]}]};o.onPageInit("index",function(){var e=i.init(document.querySelector("#dayDone")),t={backgroundColor:"white",color:["#3398DB"],tooltip:{show:!1,trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"-2%",right:"4%",bottom:"14%",containLabel:!0},xAxis:[{type:"category",data:["观光营业\n数据","观光参观\n人数","衍生品营\n业数据"],axisTick:{alignWithLabel:!0},axisLabel:{show:!0,textStyle:{color:"#777"}},axisLine:{lineStyle:{color:"#e6e9f0"}}}],yAxis:[{type:"value",show:!1}],series:[{name:"观光部",type:"bar",barWidth:"40",data:["55.67",18.4,5.9],itemStyle:{normal:{color:function(e){var t=["#3474c4","#ffb359","#c35ded"];return t[e.dataIndex]},label:{show:!0,position:"top"}}}}]};e.setOption(t);var o={backgroundColor:"white",color:["#3398DB"],tooltip:{show:!1,trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"-15%",right:"1%",bottom:"20%",containLabel:!0},xAxis:[{type:"category",data:["观光营业\n数据","观光参观\n人数","衍生品营\n业数据"],axisTick:{alignWithLabel:!0},axisLabel:{show:!0,interval:0,rotate:0,textStyle:{color:"#777"}},axisLine:{lineStyle:{color:"#e6e9f0"}}}],yAxis:[{type:"value",show:!1}],series:[{name:"月度实际",type:"bar",barWidth:"24",data:[1278,789,345],barGap:"0",itemStyle:{normal:{color:"#0f98e7",label:{show:!0,position:"top"}}}},{name:"月度预算",type:"bar",barWidth:"24",data:[1867,254,89],itemStyle:{normal:{color:"#afe5f8",label:{show:!0,position:"top"}}}}]},a={backgroundColor:"white",color:["#3398DB"],tooltip:{show:!1,trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"-25%",right:"1%",bottom:"20%",containLabel:!0},xAxis:[{type:"category",data:["观光营业\n数据","观光参观\n人数"],axisTick:{alignWithLabel:!0},axisLabel:{show:!0,interval:0,textStyle:{color:"#777"}},axisLine:{lineStyle:{color:"#e6e9f0"}}}],yAxis:[{type:"value",show:!1}],series:[{name:"月度实际",type:"bar",barWidth:"24",data:[130,240],barGap:"0",itemStyle:{normal:{color:"#0f98e7",label:{show:!0,position:"top"}}}},{name:"月度预算",type:"bar",barWidth:"24",data:[184,999],itemStyle:{normal:{color:"#afe5f8",label:{show:!0,position:"top"}}}}]},n={tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},color:["#3474c4","#e6e9f0"],series:[{name:"访问来源",silent:!0,type:"pie",hoverAnimation:!1,radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:78,name:"78%"},{value:22,name:""}]}]},r={tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},color:["#ffb359","#e6e9f0"],series:[{name:"访问来源",silent:!0,type:"pie",hoverAnimation:!1,radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:85,name:"85%"},{value:15,name:""}]}]},l={tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},color:["#c35ded","#e6e9f0"],series:[{name:"访问来源",silent:!0,type:"pie",hoverAnimation:!1,radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:78,name:"78%"},{value:22,name:""}]}]},s={tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},color:["#0db789","#e6e9f0"],series:[{name:"访问来源",silent:!0,type:"pie",hoverAnimation:!1,radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:34,name:"34%"},{value:66,name:""}]}]},c={tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{top:20},color:["#1bb5ec","#e6e9f0"],series:[{name:"访问来源",silent:!0,type:"pie",hoverAnimation:!1,radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:97,name:"97%"},{value:3,name:""}]}]},m={backgroundColor:"white",color:["#3398DB"],tooltip:{show:!1,trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"-9%",right:"1%",bottom:"2%",containLabel:!0},xAxis:[{type:"category",data:["观光营业\n数据","观光参观\n人数","衍生品\n营业数据","观光营业\n数据","观光参观\n人数"],axisTick:{alignWithLabel:!0},axisLabel:{show:!0,textStyle:{color:"#777"}},axisLine:{lineStyle:{color:"#e6e9f0"}}}],yAxis:[{type:"value",show:!1}],series:[{name:"年度实际",type:"bar",barWidth:"24",data:[1278,789,345,130,240],barGap:"0",itemStyle:{normal:{color:"#0f98e7",label:{show:!0,position:"top"}}}},{name:"年度预算",type:"bar",barWidth:"24",data:[1867,254,89,184,999],itemStyle:{normal:{color:"#afe5f8",label:{show:!0,position:"top"}}}}]},d=i.init(document.querySelector(".mouthLT")),p=i.init(document.querySelector(".mouthRT")),h=i.init(document.querySelector(".mouthThird1")),u=i.init(document.querySelector(".mouthThird2")),y=i.init(document.querySelector(".mouthThird3")),b=i.init(document.querySelector(".mouthThird4")),g=i.init(document.querySelector(".mouthThird5")),f=i.init(document.querySelector(".yearTopLine")),d=i.init(document.querySelector(".mouthLT")),p=i.init(document.querySelector(".mouthRT")),h=i.init(document.querySelector(".mouthThird1")),u=i.init(document.querySelector(".mouthThird2")),y=i.init(document.querySelector(".mouthThird3")),b=i.init(document.querySelector(".mouthThird4")),g=i.init(document.querySelector(".mouthThird5")),f=i.init(document.querySelector(".yearTopLine")),x=i.init(document.querySelector(".yearThird1")),S=i.init(document.querySelector(".yearThird2")),v=i.init(document.querySelector(".yearThird3")),w=i.init(document.querySelector(".yearThird4")),L=i.init(document.querySelector(".yearThird5"));d.setOption(o),p.setOption(a),h.setOption(n),u.setOption(r),y.setOption(l),b.setOption(s),g.setOption(c),f.setOption(m),d.setOption(o),p.setOption(a),h.setOption(n),u.setOption(r),y.setOption(l),b.setOption(s),g.setOption(c),f.setOption(m),x.setOption(n),S.setOption(r),v.setOption(l),w.setOption(s),L.setOption(c)}),o.onPageInit("ggbDay",function(){a(".yearicon").on("click",function(){var e=this,t=[{text:"日完成情况",link:"ggbDay.html"},{text:"月完成情况",link:"ggbMouth.html"},{text:"年完成情况",link:"ggbYear.html"}];o.actions(e,t)});var e=i.init(document.querySelector(".ggbDaypie")),t={grid:{left:"-20%",rtooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c}万元 ({d}%)"},ight:"30%"},color:["#3474c4","#0db789","#ffb359"],legend:{orient:"vertical",x:"left",left:"63%",y:"middle",data:["包场","观光门票","VIP客户"]},series:[{name:"营业数据",type:"pie",radius:["50%","70%"],center:["30%","50%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}},formatter:function(e,t,o){return o+"%"}},labelLine:{normal:{show:!1}},data:[{value:335,name:"包场"},{value:310,name:"观光门票"},{value:234,name:"VIP客户"}]}]};e.setOption(t);var n=i.init(document.querySelector(".ggbDayline")),r={tooltip:{trigger:"axis"},grid:{top:"10%",bottom:"40%"},xAxis:{splitLine:{show:!1},axisLabel:{textStyle:{color:"#777"}},axisLine:{onZero:!0,lineStyle:{color:"#eaeaea"}},type:"category",boundaryGap:!1,data:["9\n点\n之\n前","9\n|\n10\n点","10\n|\n11\n点","11\n|\n12\n点","12\n|\n13\n点","13\n|\n14\n点","14\n|\n15\n点","15\n|\n16\n点","16\n|\n17\n点","17\n|\n18\n点","18\n|\n19\n点","19\n|\n20\n点","20\n|\n21\n点","21\n点\n之\n后"]},yAxis:{type:"value",axisLine:{onZero:!0,lineStyle:{color:"#eaeaea"}},axisLabel:{formatter:"{value}",textStyle:{color:"#777"}}},series:[{name:"参观人数",type:"line",smooth:!0,symbol:"circle",itemStyle:{normal:{color:"#5aceb1",lineStyle:{color:"#5aceb1"}}},data:[21,150,297,424,301,386,421,389,406,305,223,283,145,30]}]};n.setOption(r)}),o.onPageInit("ggbMouth",function(){a(".yearicon").on("click",function(){var e=this,t=[{text:"日完成情况",link:"ggbDay.html"},{text:"月完成情况",link:"ggbMouth.html"},{text:"年完成情况",link:"ggbYear.html"}];o.actions(e,t)}),a(".accordation").on("click",function(){e(a(this))});var t=i.init(document.querySelector(".ggbMouthpie1"));t.setOption(M);var n=i.init(document.querySelector(".ggbMouthpie2"));n.setOption(D);var l=i.init(document.querySelector(".ggbMouthpie3"));l.setOption(r);var s=i.init(document.querySelector(".ggbMouthpie4"));s.setOption(M);var c=i.init(document.querySelector(".ggbMouthpie5"));c.setOption(r)}),o.onPageInit("ggbYear",function(){a(".yearicon").on("click",function(){var e=this,t=[{text:"日完成情况",link:"ggbDay.html"},{text:"月完成情况",link:"ggbMouth.html"},{text:"年完成情况",link:"ggbYear.html"}];o.actions(e,t)}),a(".accordation").on("click",function(){e(a(this))});var n=i.init(document.querySelector(".ggbYearpie1"));n.setOption(M);var l=i.init(document.querySelector(".ggbYearpie2"));l.setOption(D);var s=i.init(document.querySelector(".ggbYearpie3"));s.setOption(t);var c=i.init(document.querySelector(".ggbYearpie4"));c.setOption(r);var m=i.init(document.querySelector(".ggbYearpie5"));m.setOption(M);var d=i.init(document.querySelector(".ggbYearpie6"));d.setOption(t);var p=i.init(document.querySelector(".ggbYearpie7"));p.setOption(r)}),o.onPageInit("scb",function(){a(".accordation").on("click",function(){e(a(this))});var o=i.init(document.querySelector(".ggbMouthpie1"));o.setOption(D);var n=i.init(document.querySelector(".ggbMouthpie5"));n.setOption(D);var l=i.init(document.querySelector(".ggbMouthpie6"));l.setOption(t);var s=i.init(document.querySelector(".ggbMouthpie7"));s.setOption(r)}),o.onPageInit("hyzx",function(){a(".accordation").on("click",function(){e(a(this))});var o=i.init(document.querySelector(".ggbMouthpie1"));o.setOption(D);var n=i.init(document.querySelector(".ggbMouthpie5"));n.setOption(D);var l=i.init(document.querySelector(".ggbMouthpie6"));l.setOption(t);var s=i.init(document.querySelector(".ggbMouthpie7"));s.setOption(r)}),o.onPageInit("yspDay",function(){a(".yearicon").on("click",function(){var e=this,t=[{text:"日完成情况",link:"yspDay.html"},{text:"月完成情况",link:"yspMouth.html"},{text:"年完成情况",link:"yspYear.html"}];o.actions(e,t)});var e={title:{text:"营业额(元)",top:"6%",left:"16%",textStyle:{fontSize:"15",fontWeight:"normal"}},backgroundColor:"white",color:["#3398DB"],tooltip:{show:!1,trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"-40%",right:"4%",bottom:"14%",containLabel:!0},xAxis:[{type:"category",data:["B2F\n零售店","118F\n零售店"],axisTick:{alignWithLabel:!0},axisLabel:{show:!0,textStyle:{color:"#777"}},axisLine:{lineStyle:{color:"#e6e9f0"}}}],yAxis:[{type:"value",show:!1}],series:[{name:"衍生品",type:"bar",barWidth:"20",data:[23787,19345],itemStyle:{normal:{color:function(e){var t=["#ffb359","#0f98e7"];return t[e.dataIndex]},label:{show:!0,position:"top"}}}}]},t=i.init(document.querySelector(".yspDt1"));t.setOption(e);var n=i.init(document.querySelector(".yspDt2"));n.setOption(e);var r=i.init(document.querySelector(".yspDt3"));r.setOption(e);var l={title:{text:"每单商品数(个)",top:"6%",textStyle:{fontSize:"15",fontWeight:"normal"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{show:!1,type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["B2F零售店","118F零售店"],axisLabel:{show:!0,textStyle:{color:"#777"}},axisLine:{lineStyle:{color:"#e6e9f0"}}},series:[{name:"商品个数",type:"bar",barWidth:"15",data:[182,345],itemStyle:{normal:{color:function(e){var t=["#ffb359","#0f98e7"];return t[e.dataIndex]},label:{show:!0,position:""}}}}]},s=i.init(document.querySelector(".yspDt4"));s.setOption(l);var c=i.init(document.querySelector(".yspDt5"));c.setOption(l);var m={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",top:"10%",containLabel:!0},xAxis:{show:!1,type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["摩天VR40元","上海中心之水","雅壳照片6张\n8寸照片200元"],axisLabel:{show:!0,textStyle:{color:"#777"}},axisLine:{lineStyle:{color:"#e6e9f0"}}},series:[{name:"",type:"bar",barWidth:"15",data:[113,196,225],itemStyle:{normal:{color:function(e){var t=["#f8a20f","#5faee3","#a9d86e"];return t[e.dataIndex]},label:{show:!0,position:""}}}}]},d=i.init(document.querySelector(".yspDt6"));d.setOption(m)}),o.onPageInit("yspMouth",function(){a(".yearicon").on("click",function(){var e=this,t=[{text:"日完成情况",link:"yspDay.html"},{text:"月完成情况",link:"yspMouth.html"},{text:"年完成情况",link:"yspYear.html"}];o.actions(e,t)}),a(".yspcho").on("click",function(){a(".yspcho").removeClass("active"),a(this).addClass("active");var e=a(this).index();a(".chooseTab").removeClass("active"),a(a(".chooseTab")[e]).addClass("active")});var e=i.init(document.querySelector(".ggbMouthpie1"));e.setOption(D);var n=i.init(document.querySelector(".ggbMouthpie2"));n.setOption(r);var s=i.init(document.querySelector(".ggbMouthpie3"));s.setOption(l);var c=i.init(document.querySelector(".tabLine1"));c.setOption(t);var m=i.init(document.querySelector(".tabLine2"));m.setOption(r);var d=i.init(document.querySelector(".tabLine3"));d.setOption(t);var p=i.init(document.querySelector(".tabLine4"));p.setOption(r);var h=i.init(document.querySelector(".tabLine5"));h.setOption(t)})}};t.set=r,t.framework=n});