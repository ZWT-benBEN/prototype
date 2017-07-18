;/*!modules/js/app.js*/
define('modules/js/app', function(require, exports, module) {

  require('node_modules/framework7/dist/js/framework7');
  var $$ = Dom7;
  var myApp;
  var framework = {
    init: function(e) {
      if (myApp) {
        return myApp;
      } else {
        return new Framework7(e);
      }
    }
  };
  var set = {
    init: function() {
      myApp = framework.init({
        pushState: true
      });
      // Add view
      var mainView = myApp.addView('.view-main', {
        // Because we use fixed-through navbar we can enable dynamic navbar
        dynamicNavbar: true,
        animatePages:true,
        swipeBackPageAnimateOpacity:false
      });
      var e = $$('.toolbar .toolbar-item');
      var iconFull = ['icon-comment-i', 'icon-openness-i', 'icon-ioslist', 'icon-user-i'],
        iconEmpty = [ 'icon-comment', 'icon-openness', 'icon-list', 'icon-user'];
      e.each(function(i) {
        e.eq(i).touchstart(function() {
          var els = e.parent().find('i');
          for (var j = 0; j < els.length; j++) {
            $$(els[j]).removeClass(iconFull[j]).addClass(iconEmpty[j]);
          }
          e.removeClass('active');
          $$(this).addClass('active').find('i').removeClass(iconEmpty[i]).addClass(iconFull[i]);
        })
      });
      
        //预约
      myApp.onPageInit('yuyue', function(page) {
            $$('.ch_type').find('.type_inner2').on('click',function(){
                $$(this).find('.type_btn').addClass('active');
                myApp.pickerModal('.picker-advtype');
                $$('.mask').addClass('active');
            })
            //遮罩
            $$('.mask').on('click',function(){
                $$(this).removeClass('active');
                $$('.type_btn').removeClass('active');
                myApp.closeModal('.picker-advtype');
                var textinner = '';
                var liinner = $$('.picker-advtype ul li')
                var lilen = liinner.length;
                for(var i = 0; i < lilen; i++) {
                    if(liinner.eq(i).hasClass('active')) {
                        textinner += liinner.eq(i).find('span').text() +'/';
                    }
                }
                if(textinner) {
                    $$('.ch_type').find('.type_text').text(textinner);
                } else {
                    $$('.ch_type').find('.type_text').text('请选择类型')
                }
            })
            //取消 完成
            $$('.close-picker').on('click',function(){
                $$('.type_btn').removeClass('active');
                $$('.mask').removeClass('active')
            })
            //完成点击
            $$('.close-picker.done').on('click',function(){
                var textinner = '';
                var liinner = $$('.picker-advtype ul li')
                var lilen = liinner.length;
                for(var i = 0; i < lilen; i++) {
                    if(liinner.eq(i).hasClass('active')) {
                        textinner += liinner.eq(i).find('span').text() +'/';
                    }
                }
                if(textinner) {
                    $$('.ch_type').find('.type_text').text(textinner);
                } else {
                    $$('.ch_type').find('.type_text').text('请选择类型')
                }
            })
            $$('.picker-advtype').find(' li').on('click',function(){
                $$(this).toggleClass('active')
            })
            //input单选
            var pickerDevice = myApp.picker({
                input: '#picker-d',
                toolbarCloseText: '完成',
                onOpen: function(){
                    $$('.mask').addClass('active');
                    $$('.ch_profession').find('.type_btn').addClass('active')
                },
                onClose:function(){
                  $$('.mask').removeClass('active');
                    $$('.ch_profession').find('.type_btn').removeClass('active');
                    var val = $$('#picker-d').val();
                    $$('.ch_profession').find('.type_text').text(val);
                },
                cols: [
                    {
                        textAlign: 'center',
                        values: ['行政管理人员', '基层法律服务工作者', '戒毒人民警察', '司法鉴定人']
                    }
                ]
            });
         //   验证码限时
            var num  = 60;
            var t;
            var count = function(){
                num--;
                $$('.get_auth').text(num +'s后重新获取');
                $$('.get_auth').attr('disabled',true);
                if(num < 0) {
                    $$('.get_auth').removeAttr("disabled");
                    num = 60;
                    $$('.get_auth').text('获取验证码');
                    clearInterval(t)
                }
            }
            $$('.get_auth').on('click',function(){
                t = setInterval(count,1000)
            })
      });
      myApp.onPageInit('home_1',function(page) {
            $$('.mytabinner').on('click',function(){
                $$('.mytabinner').removeClass('active');
                $$(this).addClass('active')
            })
            $$('.tab_con_tel .body li').on('click',function(){
                $$('.tab_con_tel .body li').removeClass('active');
                $$(this).addClass('active')
            })
      });
      var context = '';
      myApp.onPageInit('home',function(page) {
           var len = $$('.consultationBox').find('.cardWarp').length;
          $$('.consultationBox').find('.cardWarp').on('click', function () {
            $$('.consultationBox').find('.cardWarp').removeClass('active');
            $$(this).addClass('active');
            context = $$(this).text();
          });
           $$('.sure').on('click',function(){
            // context = $$('.cardWarp.active').text();
            if(context) {
              $$('.zixunspan').text(context)
            }
           })
      });
       myApp.onPageInit('chatroom',function(page) {
            var chatBoxofhei = $$('.chatbox')[0].offsetHeight;
            var winhei = $$(window).height();
            var topbarHeight = $$('.topbar')[0].offsetHeight;
            var chatTextHeight = $$('.chat_toolinner')[0].scrollHeight;
            var hei = chatBoxofhei-winhei+topbarHeight+150;
            $$('.page-content').scrollTop(hei);
            $$('.quee_box').on('keyup',function(){
                if(!$$(this).val()) {
                    $$(this).css({height:'.66rem'})
                }
            })
            $$('.quee_box').on('blur',function(){
                if(!$$(this).val()) {
                    $$(this).css({height:'.66rem'})
                } else {
                    var theLi = $$('<li class="goSet"><div class="head" style="background-image: url(/static/images/timg.jpg)"></div><div class="content">'+$$(this).val()+'</div></li>');
                    theLi.appendTo('.chatbox');
                    $$(this).val('');
                    $$(this).css({height:'.66rem'});
                    var chatBoxofhei = $$('.chatbox')[0].offsetHeight;
                    var winhei = $$(window).height();
                    var topbarHeight = $$('.topbar')[0].offsetHeight;
                    var chatTextHeight = $$('.chat_toolinner')[0].scrollHeight;
                    var hei = chatBoxofhei-winhei+topbarHeight+150;
                    $$('.page-content').scrollTop(hei);
                }
            })
            var flag = true;
            $$('.btn').on('click',function(){
                if(flag) {
                    flag = false
                    var eval = $$('<li class="evaluate"><div class="cont"><div class="head" style="background-image: url(/static/images/expic01.jpg);"></div><p>请您对我的服务做出评价</p><div class="theStar"><div class="lineLeft"></div><div class="lineRiget"></div><div class="tehBall ballLeft"><div class="BooltextBox"><div class="textConet">不满意</div></div></div><div class="tehBall ballCover"><div class="BooltextBox"><div class="textConet">满意</div></div></div><div class="tehBall ballRiget"><div class="BooltextBox"><div class="textConet">非常满意</div></div></div></div><a class="goSub" href="index.html">提交评价</a></div></li>');
                    eval.appendTo('.chatbox');
                    $$('.chat_toolinner').css({display:'none'})
                    $$('.chatCloseinner').css({display:'block'})
                    var chatBoxofhei = $$('.chatbox')[0].offsetHeight;
                    var winhei = $$(window).height();
                    var topbarHeight = $$('.topbar')[0].offsetHeight;
                    var chatTextHeight = $$('.chat_toolinner')[0].scrollHeight;
                    var hei = chatBoxofhei-winhei+topbarHeight+150;
                    $$('.page-content').scrollTop(hei);
                    $$('.tehBall').on('touchend', function () {
                        var tex = $$(this).find('.textConet').text();
                        var len = $$('.tehBall').length;
                        var ind = $$(this).index() - 1;
                        if (tex === '不满意') {
                            $$('.tehBall').removeClass('red');
                            $$('.tehBall').removeClass('yel');
                            $$('.tehBall').removeClass('gre');
                            $$('.lineRiget').removeClass('yel');
                            $$('.lineRiget').removeClass('gre');
                            $$('.lineRiget').removeClass('red');
                            $$('.lineLeft').removeClass('yel');
                            $$('.lineLeft').removeClass('gre');
                            $$('.lineLeft').removeClass('red');
                            for(var i=0; i<ind; i++) {
                                $$('.tehBall').eq(i).addClass('red');
                            }
                        } else if (tex === '满意') {
                            $$('.tehBall').removeClass('red');
                            $$('.tehBall').removeClass('yel');
                            $$('.tehBall').removeClass('gre');
                            $$('.lineRiget').removeClass('yel');
                            $$('.lineRiget').removeClass('gre');
                            $$('.lineRiget').removeClass('red');
                            $$('.lineLeft').removeClass('yel');
                            $$('.lineLeft').removeClass('gre');
                            $$('.lineLeft').removeClass('red');
                            $$('.lineLeft').addClass('yel')
                            for(var i=0; i<ind; i++) {
                                $$('.tehBall').eq(i).addClass('yel');
                            }
                        } else {
                            $$('.tehBall').removeClass('red');
                            $$('.tehBall').removeClass('yel');
                            $$('.tehBall').removeClass('gre');
                            $$('.lineRiget').removeClass('yel');
                            $$('.lineRiget').removeClass('gre');
                            $$('.lineRiget').removeClass('red');
                            $$('.lineLeft').removeClass('yel');
                            $$('.lineLeft').removeClass('gre');
                            $$('.lineLeft').removeClass('red');
                            $$('.lineLeft').addClass('gre');
                            $$('.lineRiget').addClass('gre');
                            for(var i=0; i<ind; i++) {
                                $$('.tehBall').eq(i).addClass('gre');
                            }
                        }
                    })
                }
            })
        })
    }
  };
  
  exports.set = set;
  exports.framework = framework;
  // exports.chart = chart;

});
