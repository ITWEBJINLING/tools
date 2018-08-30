$(function(){    
                var windowWidth = document.body.clientWidth; //window 宽度;
				var wrap = document.getElementById('wrap');//整个大块
                var tabClick = wrap.querySelectorAll('.tabClick')[0];//头部的盒子
                var tabLi = tabClick.getElementsByTagName('li');//头部的选择内容
                
                var tabBox =  wrap.querySelectorAll('.tabBox')[0];//整体内容盒子
                var tabList = tabBox.querySelectorAll('.tabList');//每一块内容
                
                var lineBorder = wrap.querySelectorAll('.lineBorder')[0];//线条的盒子
                var lineDiv = lineBorder.querySelectorAll('.lineDiv')[0];//线条盒子中移动的线条
                
                var tar = 0;
                var endX = 0;
                var dist = 0;
                
                for(var i = 0 ;i<tabLi.length; i++ ){//循环头部的li
                      tabList[i].style.width=windowWidth+"px";//给每一块主体内容设置宽度为屏幕的宽度
                      tabList[i].style.float='left';//给每一块主体内容设置左浮动
                      tabList[i].style.padding='0';//给每一块主体内容设置padding:0
                      tabList[i].style.margin='0';//给每一块主体内容设置margin:0
                      tabList[i].style.verticalAlign='top';//设置元素顶部和最高元素顶部对齐
                      tabList[1].style.display='inline-block';//设置每一块主体内容以表格单元格显示
                      tabList[0].style.display='none'
                      tabList[2].style.display='none'
                      tabList[i].style.height="auto";
                }
                
                
                for(var i = 0 ;i<tabLi.length; i++ ){//循环头部的li
                    tabLi[i].start = i;//设置头部每一块的Start为i
                    var windowWidths=windowWidth*0.7+20;
                    lineDiv.style.webkitTransform='translate3d('+windowWidths/tabLi.length*1+'px,0,0)';
                    tabLi[i].onclick = function(){//点击每一块标题内容
                        var star = this.start;
                        //循环所有的头部，把所有类名变为空
                        for(var i = 0 ;i<tabLi.length; i++ ){
                            tabLi[i].className='';
                        };
                        for(var i=0;i<tabList.length;i++){
                        	tabList[i].style.display="none"
                        }
                        tabList[star].style.display="inline-block"
                        tabLi[star].className='active';//给当前加上active类
                        init.lineAnme(lineDiv,windowWidths/tabLi.length*star)//移动线条的动画：传入的值为（移动线条本身，屏幕的宽度/每一块头部的宽度*个数）
                        endX= -star*windowWidth;
                        $(tabList[star]).find(".gjl_imgshopimg").each(function(index,value1){
                        	var realWidth;//真实的宽度
                            var realHeight;//真实的高度
                            $(value1).find("img")
                            realWidth = $(value1).find("img").width();
                            realHeight =  $(value1).find("img").height(); 
                            if(realWidth>=realHeight){
                                $(value1).find("img").css({"height":"100%","width":"auto"});
                            }else if(realWidth<realHeight){
                                $(value1).find("img").css({"width":"100%","height":"auto"});
                            } 
                        })
//                      $(tabList[star]).find(".gjl_conttopphoto").each(function(index,value1){
//                      	var photoWidth;//真实的宽度
//                          var photoHeight;//真实的高度
//                          photoWidth = $(value1).find("img").width();
//                          photoHeight =  $(value1).find("img").height(); 
//                          if(photoWidth>=photoHeight){
//                              $(value1).find("img").css({"height":"100%","width":"auto"});
//                          }else if(photoWidth<photoHeight){
//                              $(value1).find("img").css({"width":"100%","height":"auto"});
//                          }
//                      })
                        
                    }
                }
                
                function OnTab(star){
                    if(star<0){
                        star=0;
                    }else if(star>=tabLi.length){
                        star=tabLi.length-1
                    }
                    for(var i = 0 ;i<tabLi.length; i++ ){
                        tabLi[i].className='';
                    };
                     tabLi[star].className='active';
                    init.translate(tabBox,windowWidth,star);
                    endX= -star*windowWidth;
                };
                
            var init={
                lineAnme:function(obj,stance){
                    obj.style.webkitTransform='translate3d('+stance+'px,0,0)';
                    obj.style.transform='translate3d('+stance+'px,0,0)';
                    obj.style.webkitTransition='all 0.1s ease-in-out';
                    obj.style.transition='all 0.1s ease-in-out';
                },
                back:function(obj,windowWidth,tar,distance,endX,time){
                    obj.style.webkitTransform='translate3d('+(distance+endX)+'px,0,0)';
                    obj.style.transform='translate3d('+(distance+endX)+',0,0)px';
                    obj.style.webkitTransition='all '+time+'s ease-in-out';
                    obj.style.transition='all '+time+'s ease-in-out';
                },
            }
});   