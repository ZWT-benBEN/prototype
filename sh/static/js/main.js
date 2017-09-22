// 初始化APP
var myApp = new Framework7({
  pushState: true,
  pushStateRoot:'',
  cache: true,
  cacheDuration: 1000*60*60,
  modalActionsTemplate: '<div class="actions-modal">{{#each this}}<div class="actions-modal-group">{{#each this}}{{#if label}}<span class="actions-modal-label">{{text}}</span>{{else}}<div class="actions-modal-button {{#if color}}color-{{color}}{{/if}} {{#if bold}}actions-modal-button-bold{{/if}}"><a href="{{link}}">{{text}}</a></div>{{/if}}{{/each}}</div>{{/each}}</div>'
});
var $$ = Framework7.$;
// Add view
var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true,
  animatePages: true,
});

// tollbar style
$$('.toolbar-item ').on('click',function() {
  $$('.toolbar-item').removeClass('active')
  $$(this).addClass('active')
})
// 展开收起函数
function showClose(obj) {
  if (!obj.parents(".blockbox").hasClass('active')) {
      obj.parents(".blockbox").find('.accOpen').html('展开')
    } else {
      obj.parents(".blockbox").find('.accOpen').html('收起')
    }
  obj.parents('.blockbox').toggleClass('active');
}
// 获取验证码
var countdown = 10;
function verifyCode(val) {
  if(countdown === 0) {
    val.removeAttr('disabled');
    val.text('获取验证码');
    countdown = 10;
    return;
  } else {
    val.attr('disabled', true);
    val.text(countdown + 's后重新发送');
    countdown--;
  }
  setTimeout(function() {
    verifyCode(val)
  },1000)
}
// 3秒后自动跳转
var passnum  = 4;
var num = passnum;
function timeshow() {
  num -= 1;
  $$('.masknum').text(num);
  if (num===0) {
    num = passnum;
    $$('.passFindn').click();
    return;
  }
  setTimeout('timeshow()',1000)
}
// 安卓
function toolbarhide() {
  $$('input').on('focus', function() {
    mainView.hideToolbar();
  })
  $$('input').on('blur', function() {
    mainView.showToolbar();
  })
}
 
// 首页
// echarts
// var dayDone = echarts.init(document.querySelector('#dayDone'));
// dayDone.setOption(optionDay);
var mouthDoneLine1 = echarts.init(document.querySelector('.mouthLT'));
mouthDoneLine1.setOption(optionMouthLine1);
var mouthDoneLine2 = echarts.init(document.querySelector('.mouthRT'));
mouthDoneLine2.setOption(optionMouthLine2)
var mouthDonePie1 = echarts.init(document.querySelector('.mouthThird1'));
mouthDonePie1.setOption(optionMouthPie1)
var mouthDonePie2 = echarts.init(document.querySelector('.mouthThird2'));
mouthDonePie2.setOption(optionMouthPie2)
var mouthDonePie3 = echarts.init(document.querySelector('.mouthThird3'));
mouthDonePie3.setOption(optionMouthPie3)
var mouthDonePie4 = echarts.init(document.querySelector('.mouthThird4'));
mouthDonePie4.setOption(optionMouthPie4)
var mouthDonePie5 = echarts.init(document.querySelector('.mouthThird5'));
mouthDonePie5.setOption(optionMouthPie5)
// var yearDoneLine = echarts.init(document.querySelector('.yearTopLine'));
// yearDoneLine.setOption(optionYearLine)
var yearDonePie1 = echarts.init(document.querySelector('.yearThird1'));
yearDonePie1.setOption(optionMouthPie1)
var yearDonePie2 = echarts.init(document.querySelector('.yearThird2'));
yearDonePie2.setOption(optionMouthPie2)
var yearDonePie3 = echarts.init(document.querySelector('.yearThird3'));
yearDonePie3.setOption(optionMouthPie3)
var yearDonePie4 = echarts.init(document.querySelector('.yearThird4'));
yearDonePie4.setOption(optionMouthPie4)
var yearDonePie5 = echarts.init(document.querySelector('.yearThird5'));
yearDonePie5.setOption(optionMouthPie5)


//index
$$(document).on('pageInit', '.page[data-page="index"]', function(e) {
  // var dayDone = echarts.init(document.querySelector('#dayDone'));
	// dayDone.setOption(optionDay);
	var mouthDoneLine1 = echarts.init(document.querySelector('.mouthLT'));
	mouthDoneLine1.setOption(optionMouthLine1);
	var mouthDoneLine2 = echarts.init(document.querySelector('.mouthRT'));
	mouthDoneLine2.setOption(optionMouthLine2)
	var mouthDonePie1 = echarts.init(document.querySelector('.mouthThird1'));
	mouthDonePie1.setOption(optionMouthPie1)
	var mouthDonePie2 = echarts.init(document.querySelector('.mouthThird2'));
	mouthDonePie2.setOption(optionMouthPie2)
	var mouthDonePie3 = echarts.init(document.querySelector('.mouthThird3'));
	mouthDonePie3.setOption(optionMouthPie3)
	var mouthDonePie4 = echarts.init(document.querySelector('.mouthThird4'));
	mouthDonePie4.setOption(optionMouthPie4)
	var mouthDonePie5 = echarts.init(document.querySelector('.mouthThird5'));
	mouthDonePie5.setOption(optionMouthPie5)
	var yearDoneLine = echarts.init(document.querySelector('.yearTopLine'));
	yearDoneLine.setOption(optionYearLine)
	var yearDonePie1 = echarts.init(document.querySelector('.yearThird1'));
	yearDonePie1.setOption(optionMouthPie1)
	var yearDonePie2 = echarts.init(document.querySelector('.yearThird2'));
	yearDonePie2.setOption(optionMouthPie2)
	var yearDonePie3 = echarts.init(document.querySelector('.yearThird3'));
	yearDonePie3.setOption(optionMouthPie3)
	var yearDonePie4 = echarts.init(document.querySelector('.yearThird4'));
	yearDonePie4.setOption(optionMouthPie4)
	var yearDonePie5 = echarts.init(document.querySelector('.yearThird5'));
	yearDonePie5.setOption(optionMouthPie5)
});
// 观光部日完成
$$(document).on('pageInit', '.page[data-page="ggbDay"]', function(e) {
  $$('.yearicon').on('click', function (e) {
    var target = this;
    var buttons = [
        {  
          text: '日完成情况',
          link: 'ggbDay.html'
        },
        {
          text: '月完成情况',
          link: 'ggbMouth.html'
        },
        {
          text: '年完成情况',
          link: 'ggbYear.html'
        }
    ];
    myApp.actions(target, buttons);
  });
  var ggbDaydata = echarts.init(document.querySelector('.ggbDaypie'));
  ggbDaydata.setOption(optiondata);
  var ggbDaynum = echarts.init(document.querySelector('.ggbDayline'));
  ggbDaynum.setOption(optionNum);
});

// 观光部月完成
$$(document).on('pageInit', '.page[data-page="ggbMouth"]', function(e) {
  $$('.yearicon').on('click', function (e) {
    var target = this;
    var buttons = [
        {
          text: '日完成情况',
          link: 'ggbDay.html'
        },
        {
          text: '月完成情况',
          link: 'ggbMouth.html'
        },
        {
          text: '年完成情况',
          link: 'ggbYear.html'
        }
    ];
    myApp.actions(target, buttons);
  });
  $$('.accordation').on('click', function() {
    showClose($$(this));
  })
  var ggbMouthpie1 = echarts.init(document.querySelector('.ggbMouthpie1'));
  ggbMouthpie1.setOption(option3);
  var ggbMouthpie2 = echarts.init(document.querySelector('.ggbMouthpie2'));
  ggbMouthpie2.setOption(option1);
  var ggbMouthpie3 = echarts.init(document.querySelector('.ggbMouthpie3'));
  ggbMouthpie3.setOption(optionPercentLineY);
  var ggbMouthpie4 = echarts.init(document.querySelector('.ggbMouthpie4'));
  ggbMouthpie4.setOption(option3);
  var ggbMouthpie5 = echarts.init(document.querySelector('.ggbMouthpie5'));
  ggbMouthpie5.setOption(optionPercentLineY);
});
// 观光部年完成
$$(document).on('pageInit', '.page[data-page="ggbYear"]', function(e) {
  $$('.yearicon').on('click', function (e) {
    var target = this;
    var buttons = [
        {
          text: '日完成情况',
          link: 'ggbDay.html'
        },
        {
          text: '月完成情况',
          link: 'ggbMouth.html'
        },
        {
          text: '年完成情况',
          link: 'ggbYear.html'
        }
    ];
    myApp.actions(target, buttons);
  });
  $$('.accordation').on('click', function() {
    showClose($$(this));
  })
  var ggbMouthpie1 = echarts.init(document.querySelector('.ggbYearpie1'));
  ggbMouthpie1.setOption(option3);
  var ggbMouthpie2 = echarts.init(document.querySelector('.ggbYearpie2'));
  ggbMouthpie2.setOption(option1);
  var ggbMouthpie3 = echarts.init(document.querySelector('.ggbYearpie3'));
  ggbMouthpie3.setOption(optionDataLineY);
  var ggbMouthpie4 = echarts.init(document.querySelector('.ggbYearpie4'));
  ggbMouthpie4.setOption(optionPercentLineY);
  var ggbMouthpie5 = echarts.init(document.querySelector('.ggbYearpie5'));
  ggbMouthpie5.setOption(option3);
   var ggbMouthpie6 = echarts.init(document.querySelector('.ggbYearpie6'));
  ggbMouthpie6.setOption(optionDataLineY);
  var ggbMouthpie7 = echarts.init(document.querySelector('.ggbYearpie7'));
  ggbMouthpie7.setOption(optionPercentLineY);
});
// 市场部
$$(document).on('pageInit', '.page[data-page="scb"]', function(e) {
  $$('.accordation').on('click', function() {
    showClose($$(this));
  })
  var ggbMouthpie1 = echarts.init(document.querySelector('.ggbMouthpie1'));
  ggbMouthpie1.setOption(option3);
  var ggbMouthpie5 = echarts.init(document.querySelector('.ggbMouthpie5'));
  ggbMouthpie5.setOption(option3);
   var ggbMouthpie6 = echarts.init(document.querySelector('.ggbMouthpie6'));
  ggbMouthpie6.setOption(optionDataLineY);
  var ggbMouthpie7 = echarts.init(document.querySelector('.ggbMouthpie7'));
  ggbMouthpie7.setOption(optionPercentLineY);
});
// 会议中心
$$(document).on('pageInit', '.page[data-page="hyzx"]', function(e) {
  $$('.accordation').on('click', function() {
   showClose($$(this));
  })
  var ggbMouthpie1 = echarts.init(document.querySelector('.ggbMouthpie1'));
  ggbMouthpie1.setOption(option3);
  var ggbMouthpie5 = echarts.init(document.querySelector('.ggbMouthpie5'));
  ggbMouthpie5.setOption(option3);
   var ggbMouthpie6 = echarts.init(document.querySelector('.ggbMouthpie6'));
  ggbMouthpie6.setOption(optionDataLineY);
  var ggbMouthpie7 = echarts.init(document.querySelector('.ggbMouthpie7'));
  ggbMouthpie7.setOption(optionPercentLineY);
});
// 衍生品日完成
$$(document).on('pageInit', '.page[data-page="yspDay"]', function(e) {
  $$('.yearicon').on('click', function (e) {
    var target = this;
    var buttons = [
        {
          text: '日完成情况',
          link: 'yspDay.html'
        },
        {
          text: '月完成情况',
          link: 'yspMouth.html'
        },
        {
          text: '年完成情况',
          link: 'yspYear.html'
        }
    ];
    myApp.actions(target, buttons);
  });
  var yspDaydata1 = echarts.init(document.querySelector('.yspDt1'));
  yspDaydata1.setOption(optiondata1);
  var yspDaydata2 = echarts.init(document.querySelector('.yspDt2'));
  yspDaydata2.setOption(optiondata1);
  var yspDaydata3 = echarts.init(document.querySelector('.yspDt3'));
  yspDaydata3.setOption(optiondata1);
  var yspDaydata4 = echarts.init(document.querySelector('.yspDt4'));
  yspDaydata4.setOption(optiondata2);
  var yspDaydata5 = echarts.init(document.querySelector('.yspDt5'));
  yspDaydata5.setOption(optiondata2);
  var yspDaydata6 = echarts.init(document.querySelector('.yspDt6'));
  yspDaydata6.setOption(optiondata3);
});
// 衍生品月完成
$$(document).on('pageInit', '.page[data-page="yspMouth"]', function(e) {
  $$('.yearicon').on('click', function (e) {
    var target = this;
    var buttons = [
        {  
          text: '日完成情况',
          link: 'yspDay.html'
        },
        {
          text: '月完成情况',
          link: 'yspMouth.html'
        },
        {
          text: '年完成情况',
          link: 'yspYear.html'
        }
    ];
    myApp.actions(target, buttons);
  }); 
  $$('.yspMouth .yspcho').on('click', function() {
    $$('.yspMouth .yspcho').removeClass('active');
    $$(this).addClass('active');
    var linum = $$(this).index();
    $$('.yspMouth .chooseTab').removeClass('active').css({display: 'none'});
    $$($$('.yspMouth .chooseTab')[linum]).addClass('active').css({display: 'block'});
  })
  var ggbMouthpie1 = echarts.init(document.querySelector('.ggbMouthpie1'));
  ggbMouthpie1.setOption(option1);
  var ggbMouthpie2 = echarts.init(document.querySelector('.ggbMouthpie2'));
  ggbMouthpie2.setOption(optionPercentLineY);
  var ggbMouthpie3 = echarts.init(document.querySelector('.ggbMouthpie3'));
  ggbMouthpie3.setOption(option4);
  var ysptabLine1 = echarts.init(document.querySelector('.tabLine1'));
  ysptabLine1.setOption(optionDataLineY);
  var ysptabLine2 = echarts.init(document.querySelector('.tabLine2'));
  ysptabLine2.setOption(optionPercentLineY);
  var ysptabLine3 = echarts.init(document.querySelector('.tabLine3'));
  ysptabLine3.setOption(optionDataLineY);
  var ysptabLine4 = echarts.init(document.querySelector('.tabLine4'));
  ysptabLine4.setOption(optionPercentLineY);
  var ysptabLine5 = echarts.init(document.querySelector('.tabLine5'));
  ysptabLine5.setOption(optionDataLineY);
});
// 衍生品月完成
$$(document).on('pageInit', '.page[data-page="yspYear"]', function(e) {
  $$('.yearicon').on('click', function (e) {
    var target = this;
    var buttons = [
        {  
          text: '日完成情况',
          link: 'yspDay.html'
        },
        {
          text: '月完成情况',
          link: 'yspMouth.html'
        },
        {
          text: '年完成情况',
          link: 'yspYear.html'
        }
    ];
    myApp.actions(target, buttons);
  }); 
  $$('.yspYear .yspcho').on('click', function() {
    $$('.yspYear .yspcho').removeClass('active');
    $$(this).addClass('active');
    var linum = $$(this).index();
    $$('.yspYear .chooseTab').removeClass('active').css({display: 'none'});
    $$($$('.yspYear .chooseTab')[linum]).addClass('active').css({display: 'block'});
  })
  var ggbMouthpie1 = echarts.init(document.querySelector('.ggbMouthpie1'));
  ggbMouthpie1.setOption(option1);
  var ggbMouthpie2 = echarts.init(document.querySelector('.ggbMouthpie2'));
  ggbMouthpie2.setOption(optionPercentLineY);
  var ggbMouthpie3 = echarts.init(document.querySelector('.ggbMouthpie3'));
  ggbMouthpie3.setOption(option4);
  var ysptabLine1 = echarts.init(document.querySelector('.tabLine1'));
  ysptabLine1.setOption(optionDataLineY);
  var ysptabLine2 = echarts.init(document.querySelector('.tabLine2'));
  ysptabLine2.setOption(optionPercentLineY);
  var ysptabLine3 = echarts.init(document.querySelector('.tabLine3'));
  ysptabLine3.setOption(optionDataLineY);
  var ysptabLine4 = echarts.init(document.querySelector('.tabLine4'));
  ysptabLine4.setOption(optionPercentLineY);
  var ysptabLine5 = echarts.init(document.querySelector('.tabLine5'));
  ysptabLine5.setOption(optionDataLineY);
});

// 编辑个人信息
$$(document).on('pageInit', '.page[data-page="userSet"]', function(e) {
  // 性别
  var sex, birth ;
  var pickerDevice = myApp.picker({
    input: '#picker-device',
    toolbarTemplate: 
      '<div class="toolbar">' +
        '<div class="toolbar-inner">' +
          '<div class="left">' +
              '<a href="#" class="link toolbar-randomize-linko sexReturn close-picker">取消</a>' +
          '</div>' +
          '<div class="right">' +
              '<a href="#" class="link close-picker sexSure">确定</a>' +
          '</div>' +
        '</div>' +
      '</div>',
    cols: [
      {
        textAlign: 'center',
        values: ['男', '女', '保密'],
      }
    ],
    onOpen: function(picker) {
      picker.container.find('.sexSure').on('click', function () {
        var colValue = picker.cols[0].value;
        if(colValue === '男') {
          $$('.userSex').find('i').attr('class','iconfont icon-man')
        } else if (colValue === '女') {
          $$('.userSex').find('i').attr('class','iconfont icon-woman')
        } else if (colValue === '保密') {
          $$('.userSex').find('i').attr('class','')
        }
        sex = colValue;
        if(sex) {
          // console.log(1)
        }
      })
    }
  });
  var today = new Date();
  // 生日
  var pickerInline = myApp.picker({
    input: '#picker-date',
    toolbarTemplate: 
      '<div class="toolbar">' +
        '<div class="toolbar-inner">' +
          '<div class="left">' +
              '<a href="#" class="link toolbar-randomize-link oldReturn close-picker">取消</a>' +
          '</div>' +
          '<div class="right">' +
              '<a href="#" class="link close-picker oldSure">确定</a>' +
          '</div>' +
        '</div>' +
      '</div>',
    value: [today.getFullYear(), today.getMonth()+1, today.getDate()],
    formatValue: function (p, values, displayValues) {
        return displayValues[0] + '年 ' + values[1] + '月' + values[2] + '日' ;
    },
    cols: [
    // Years
        {
            values: (function () {
                var arr = [];
                for (var i = 1950; i <= 2030; i++) { arr.push(i); }
                return arr;
            })(),
            textAlign: 'left'
        },
        // Months
        {
            values: ('1 2 3 4 5 6 7 8 9 10 11 12').split(' '),
            displayValues: ('1月 2月 3月 4月 5月 6月 7月 8月 9月 10月 11月 12月').split(' ')
        },
        // Days
        {
            values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        }
    ]
  }); 
  // 头像
  $$("#update_img").change(function () {
    var $file = $$(this);
    var fileObj = $file[0];
    var windowURL = window.URL || window.webkitURL;
    var dataURL;
    var $img = $$("#preview");
    if (fileObj && fileObj.files && fileObj.files[0]) {
        dataURL = windowURL.createObjectURL(fileObj.files[0]);
        $img.attr('src', dataURL);
    } else {
        dataURL = $file.val();
        var imgObj = document.getElementById("preview");
        imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
        imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
    }
  });
})
// 账号管理password
$$(document).on('pageInit', '.page[data-page="accountPassword"]', function(e) {
  $$('.item-input input').on('focus', function(){
    
    $$(this).parents('.item-inner').addClass('active')
  })
  $$('.item-input input').on('blur', function(){
    $$(this).parents('.item-inner').removeClass('active')
  })
  $$('.button').on('click', function() {
    var inNum = $$('.item-input input');
    // for (var i=0; i<inNum.length; i++) {
    //   if (inNum[i].value.trim()==='') {
    //     var ts = $$(inNum[i]).parents('.item-inner').find('.label').text();
    //   }
    // }
    if (inNum[0].value.trim() === '') {
      myApp.alert('原始密码不能为空','提示！')
    } else if (inNum[1].value.trim().length < 6) {
      myApp.alert('密码长度少于6位，请重新输入','提示！')
    } else if (inNum[1].value.trim() !== inNum[2].value.trim()) {
      myApp.alert('两次输入不同，请重新输入','提示！');
    } else {
      $$(this).attr('href','account.html')
    }
  })
})
// 账号管理修改Tel
$$(document).on('pageInit', '.page[data-page="accountTel"]', function(e) {
  $$('.btnCode').on('click', function() {
    verifyCode($$(this))
  })
  $$('.item-input input').on('focus', function(){
    $$(this).parents('.item-inner').addClass('active')
  })
  $$('.item-input input').on('blur', function(){
    $$(this).parents('.item-inner').removeClass('active')
  })
  $$('.button').on('click', function() {
    var inNum = $$('.item-input input');
    for (var i=0; i<inNum.length; i++) {
      if (inNum[i].value.trim()==='') {
        var ts = $$(inNum[i]).parents('.item-inner').find('.label').text();       
      }
    }
    if (ts) {
      myApp.alert(ts+'不能为空','提示！');
    } else {
      $$(this).attr('href','account.html')
    }
  })
})
// 登录页
// console.log(window.location.url)
$$(document).on('pageInit', '.page[data-page="login"]', function(e) {
  $$('#tab1 .button').on('click', function() {
    var inNum = $$('#tab1 input');
    if (inNum[0].value.trim() === '') {
      myApp.alert('手机号不能为空','提示！');
    } else if (inNum[1].value.trim() === '') {
      myApp.alert('密码不能为空','提示！');
    } else {
      $$(this).attr('href','home.html')
      // window.location.href=' https://shao-xiaohhua.github.io/prototype/12348-message/'
      // mainView.router.loadPage('home.html') 
      // console.log(mainView.router.loadPage)
      // mainView.router.load({url:'home.html'})
      // console.log(window.location.url)
      // mainView.router.load({url:'/shzx-web/tourism/department/ggbDay'})
    }
  })
  $$('#tab2 .button').on('click', function() {
    var inNum = $$('#tab2 input');
    if (inNum[0].value.trim() === '') {
      myApp.alert('手机号不能为空','提示！');
    } else if (inNum[1].value.trim() === '') {
      myApp.alert('验证码不能为空','提示！');
    } else if (inNum[2].value.trim().length < 6) {
      myApp.alert('密码长度少于6位，请重新输入','提示！')
    } else if (inNum[2].value.trim() !== inNum[3].value.trim()) {
      myApp.alert('两次输入不同，请重新输入','提示！');
    } else {
      // $$(this).attr('href','home.html')
      $$('.login .mask').addClass('active');
      $$('.maskbtn').on('click',function() {
        $$('.mask').removeClass('active');
        $$($$('.tab-link')[1]).removeClass('active');
        $$($$('.tab')[1]).removeClass('active');
        $$($$('.tab-link')[0]).addClass('active');
        $$($$('.tab')[0]).addClass('active');
        $$('.tabs').css({transform: 'translate3d(0px, 0px, 0px)'})
      })
    }
  })
  $$('.btnCode').on('click', function() {
    verifyCode($$(this))
  })
})
// 找回密码
$$(document).on('pageInit', '.page[data-page="passwordFind"]', function(e) {
  $$('.btnCode').on('click', function() {
    verifyCode($$(this))
  })
  $$('.item-input input').on('focus', function(){
    $$(this).parents('.item-inner').addClass('active')
  })
  $$('.item-input input').on('blur', function(){
    $$(this).parents('.item-inner').removeClass('active')
  })
  $$('.passwordFind .button').on('click', function() {
    var inNum = $$('.item-input input');
    for (var i=0; i<inNum.length; i++) {
      if (inNum[i].value.trim()==='') {
        var ts = $$(inNum[i]).parents('.item-inner').find('.label').text();       
      }
    }
    if (ts) {
      myApp.alert(ts+'不能为空','提示！');
    } else {
      $$(this).attr('href','passwordCh.html');
    }
  })
})
// 找回密码修改密码
$$(document).on('pageInit', '.page[data-page="passwordCh"]', function(e) {
  $$('.item-input input').on('focus', function(){
    $$(this).parents('.item-inner').addClass('active')
  })
  $$('.item-input input').on('blur', function(){
    $$(this).parents('.item-inner').removeClass('active')
  })
  $$('.button').on('click', function() {
    var inNum = $$('.pCh .item-input input');
    if (inNum[0].value.trim().length < 6) {
      myApp.alert('密码长度少于6位，请重新输入','提示！')
    } else if (inNum[0].value.trim() !== inNum[1].value.trim()) {
      myApp.alert('两次输入不同，请重新输入','提示！');
    } else {
      $$('.pCh .mask').addClass('active');
      timeshow()
    }
  })
})
// 意见反馈
$$(document).on('pageInit', '.page[data-page="feedback"]', function(e) {
  // $$('textarea').on('focus', function() {
  //   mainView.hideToolbar();
  // })
  // $$('textarea').on('blur', function() {
  //   mainView.showToolbar();
  // })
  $$(".putPic").on("change", function(e) {
    var file = e.target.files; //获取图片资源
    var files;
    for (var i=0; i<file.length; i++) {
      files = file[i]
      // 只选择图片文件
      if (!files.type.match('image.*')) {
        return false;
      }
      var reader = new FileReader();
      reader.readAsDataURL(files); // 读取文件
      // 渲染文件
      reader.onload = function(arg) {
        var img = '<li class="picItem"><img class="preview" src="' + arg.target.result + '" alt="preview"/><span class="removepreview"><i class="iconfont icon-dele"></i></span></li>';
        $$(".PicUl").prepend(img);
        $$('.preview').on('click',function() {
          $$('.preview').parents('.picItem').find('.removepreview').removeClass('active')
          $$(this).parents('.picItem').find('.removepreview').addClass('active')
        })
        $$('.removepreview').on('click', function() {
          $$(this).removeClass('active')
        })
        $$('.removepreview').on('click', ' .iconfont', function() {
          var parent = $$(this).parents('.picItem')
          parent.remove();
        })
      }
    }
  });
  var maxlength = 100;
  function textnum() {
    var len = $$('#feedtext').val().length;
    $$('.numCh').text(len);
    if (parseInt($$('.numCh').text()) >= maxlength) {
      $$('.numCh').text(maxlength);
      var val = $$('#feedtext').val().substring(0, maxlength);
      $$('#feedtext').val(val)
    }
  }
  $$('#feedtext').on('keyup', function() {
    textnum()
  })
  setInterval(function(){
    textnum()
  },100)
})

// 商户营业
// 日报表
$$(document).on('pageInit', '.page[data-page="revenueDaylist"]', function(e) {
  // 日，月，年
  $$('.revendaycon').on('click', function (e) {
    var target = this;
    var buttons = [
        {  
          text: '日完成情况',
          link: 'revenueDaylist.html'
        },
        {
          text: '月完成情况',
          link: 'revenueMouthlist.html'
        },
        {
          text: '年完成情况',
          link: 'yspYear.html'
        }
    ];
    myApp.actions(target, buttons);
  }); 

  var  monthNames  = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
   var  monthNamess  = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  var calendarDefault = myApp.calendar({
    input: '#calenderPut',
    touchmove: false,
    monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    dayNames: ['周日','周一','周二','周三','周四','周五','周六'],
    dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
    toolbarTemplate: '<div class="toolbar calendar-custom-toolbar">' +
            '<div class="toolbar-inner">' +
                '<div class="left">取消</div>' +
                '<div class="center"><a href="#" class="link icon-only link-left"><i class="iconfont icon-back icon-leftR"></i></a><span class="mouthYear"><span class="mouth active"></span><span class="year"></span></span><a href="#" class="link icon-only link-right"><i class="iconfont icon-forward icon-rightR"></i></a></div>' +
                '<div class="right">确定</div>' +
            '</div>' +
        '</div>',
    onOpen: function (p) {
      var thismouth = $$('.picker-calendar-month-current');
      var thiscalender = thismouth.find('.picker-calendar-day');
      // console.log(thiscalender.length)
      var thisToday = thismouth.find('.picker-calendar-day.picker-calendar-day-today');
      // console.log(thisToday.index())
      for(var i=0; i<thiscalender.length; i++) {
        if($$(thiscalender[i]).find('span').text() == $$(thisToday).find('span').text()) {
          $$(thiscalender[i]).nextAll().attr('disabled',true);
          $$(thiscalender[i]).parent().nextAll().attr('disabled',true);
        }
      }
      // var todaynum = $$('.picker-calendar-day-today').find('span').text();
      // if(todaynum === '14') {
        // $$('.picker-calendar-day-today').nextAll().eq(0).attr('disabled',true);
        // $$('.picker-calendar-day-today').nextAll().eq(1).attr('disabled',true);
      // }
      $$('.calendar-custom-toolbar .center .mouth').text(monthNames[p.currentMonth]);
      $$('.calendar-custom-toolbar .center .year').text(p.currentYear);
      $$('.calendar-custom-toolbar .mouth ').on('click', function() {
        $$(this).addClass('active');
        $$('.calendar-custom-toolbar .year').removeClass('active')
      })
      $$('.calendar-custom-toolbar .year ').on('click', function() {
        $$(this).addClass('active');
        $$('.calendar-custom-toolbar .mouth').removeClass('active')
      })
      $$('.calendar-custom-toolbar .link-left').on('click', function () {
        if($$('.mouth').hasClass('active')) {calendarDefault.prevMonth();
        } else {
          calendarDefault.prevYear();
        }
      });
      $$('.calendar-custom-toolbar .link-right').on('click', function () {
        if($$('.mouth').hasClass('active')) {calendarDefault.nextMonth();
        } else {
          calendarDefault.nextYear();
        }
      });
      // 点击取消
      $$('.calendar-custom-toolbar .left').on('click', function(){
          $$('#calenderPut').val('2017-9-14')
          calendarDefault.close();
      });
      // 点击确定
      $$('.calendar-custom-toolbar .right').on('click', function() {
          calendarDefault.close();
      })
    },
    onMonthYearChangeStart: function (p) {
      if($$('.mouth').hasClass('active')) {
        $$('.calendar-custom-toolbar .center .mouth').text(monthNames[p.currentMonth]);
      } else if($$('.year').hasClass('active')) {
         $$('.calendar-custom-toolbar .center .year').text(p.currentYear);
        // $$('.calendar-custom-toolbar .center .year').text(monthNames[p.currentMonth] +', ' + p.currentYear);
      }
    }
  }); 

  $$('.btnSch').on('click', function() {
    $$(this).addClass('active');
    setTimeout(function(){
      $$('.btnSch').removeClass('active');
    },600)
  });
})

// 月报表
$$(document).on('pageInit', '.page[data-page="revenueMouthlist"]', function(e) {
  var today = new Date();
  // 日，月，年
  $$('.revendaycon').on('click', function (e) {
    var target = this;
    var buttons = [
        {  
          text: '日完成情况',
          link: 'revenueDaylist.html'
        },
        {
          text: '月完成情况',
          link: 'revenueMouthlist.html'
        },
        {
          text: '年完成情况',
          link: 'yspYear.html'
        }
    ];
    myApp.actions(target, buttons);
  }); 
  // 收起展开
  $$('.accordation').on('click', function() {
   showClose($$(this));
  })
  var pickerInline = myApp.picker({
    input: '#pickerPut',
    toolbarTemplate: 
      '<div class="toolbar">' +
        '<div class="toolbar-inner">' +
          '<div class="left">' +
              '<a href="#" class="link toolbar-randomize-link oldReturn close-picker">取消</a>' +
          '</div>' +
          '<div class="right">' +
              '<a href="#" class="link close-picker oldSure">确定</a>' +
          '</div>' +
        '</div>' +
      '</div>',
    value: [today.getFullYear(), today.getMonth()+1, today.getDate()],
    formatValue: function (p, values, displayValues) {
        return displayValues[0] + '年 ' + values[1] + '月' ;
    },
    cols: [
    // Years
        {
            values: (function () {
                var arr = [];
                for (var i = 1950; i <= 2030; i++) { arr.push(i); }
                return arr;
            })(),
            textAlign: 'left'
        },
        // Months
        {
            values: ('1 2 3 4 5 6 7 8 9 10 11 12').split(' '),
            displayValues: ('1月 2月 3月 4月 5月 6月 7月 8月 9月 10月 11月 12月').split(' ')
        }
    ]
  }); 

  // 饼图
  var tdchar1 = echarts.init(document.querySelector('#tdchar1'));
  var tdchar2 = echarts.init(document.querySelector('#tdchar2'));
  var tdchar3 = echarts.init(document.querySelector('#tdchar3'));
  var tdchar4 = echarts.init(document.querySelector('#tdchar4'));
  var tdchar5 = echarts.init(document.querySelector('#tdchar5'));
  var tdchar6 = echarts.init(document.querySelector('#tdchar6'));
  var td1char1 = echarts.init(document.querySelector('#td1char1'));
  var td1char2 = echarts.init(document.querySelector('#td1char2'));
  var td1char3 = echarts.init(document.querySelector('#td1char3'));
  var td1char4 = echarts.init(document.querySelector('#td1char4'));
  var td1char5 = echarts.init(document.querySelector('#td1char5'));
  var td1char6 = echarts.init(document.querySelector('#td1char6'));
  tdchar1.setOption(optionMouthPie2);
  tdchar2.setOption(optionMouthPie4);
  tdchar3.setOption(optionMouthPie3);
  tdchar4.setOption(optionMouthPie2);
  tdchar5.setOption(optionMouthPie4);
  tdchar6.setOption(optionMouthPie3);
  td1char1.setOption(optionMouthPie2);
  td1char2.setOption(optionMouthPie4);
  td1char3.setOption(optionMouthPie3);
  td1char4.setOption(optionMouthPie2);
  td1char5.setOption(optionMouthPie4);
  td1char6.setOption(optionMouthPie3);
})
