import $ from "jquery";
var echarts = require('echarts')
import BaseURL from '../../../static/js/baseurl.js';
import BaseImg from '../../../static/js/baseimg.js';

export default {
  data(){
    return {
      loading:true,
      dialogVisible: false,
      textarea:'',
      bah:{name: '保险公司', icon:BaseImg+ '/static/img/'+localStorage.getItem('zgs')+'.png'},
      name:[/*{name: '被保险人姓名', icon:BaseImg+ '/static/img/2.svg',index:'2',select:true,tmxname:'insuredName'},
        {name: '标的驾驶员', icon: BaseImg+'/static/img/7.svg',index:'7',select:true,tmxname:'driverName1'},
        {name: '三者驾驶员', icon: BaseImg+'/static/img/c.svg',index:'c',select:true,tmxname:'driverName2'},*/
        {name: '被保险人电话', icon: BaseImg+'/static/img/3.svg',index:'3',select:true,tmxname:'mobile'},
        {name: '标的驾驶员电话', icon: BaseImg+'/static/img/9.svg',index:'9',select:true,tmxname:'mobile1'},
        {name: '三者驾驶员电话', icon: BaseImg+'/static/img/e.svg',index:'e',select:true,tmxname:'mobile2'},
        {name: '报案电话', icon: BaseImg+'/static/img/1.svg',index:'1',select:true,tmxname:'reportorPhoneno'},
        {name: '标的车牌', icon: BaseImg+'/static/img/5.svg',index:'5',select:true,tmxname:'actualLicenseno1'},
        {name: '三者车牌', icon: BaseImg+'/static/img/a.svg',index:'a',select:true,tmxname:'actualLicenseno2'},
        {name: '标的车架', icon: BaseImg+'/static/img/6.svg',index:'6',select:true,tmxname:'vinNo1'},
        {name: '三者车架', icon:BaseImg+'/static/img/b.svg',index:'b',select:true,tmxname:'vinNo2'},
        {name: '被保险人证件', icon:BaseImg+ '/static/img/4.svg',index:'4',select:true,tmxname:'identifyNumber'},
        {name: '标的驾照', icon: BaseImg+'/static/img/8.svg',index:'8',select:true,tmxname:'drivingLicenseno1'},
        {name: '三者驾照', icon:BaseImg+'/static/img/d.svg',index:'d',select:true,tmxname:'drivingLicenseno2'}],
      legendes:[
        // {name: '报案号', icon: 'image://./static/img/CCIC.png', textStyle: {color: '#000'}},
        {name: '报案电话', icon: '/static/img/1.svg'},
        {name: '被保险人姓名', icon: '/static/img/2.svg'},
        {name: '被保险人电话', icon: '/static/img/3.svg'},
        {name: '被保险人证件', icon: '/static/img/4.svg'},
        {name: '标的车牌', icon: '/static/img/5.svg'},
        {name: '标的车架', icon: '/static/img/6.svg'},
        {name: '标的驾驶员', icon: '/static/img/7.svg'},
        {name: '标的驾照', icon: '/static/img/8.svg'},
        {name: '标的驾驶员电话', icon: '/static/img/9.svg'},
        {name: '三者车牌', icon: '/static/img/a.svg'},
        {name: '三者车架', icon: '/static/img/b.svg'},
        {name: '三者驾驶员', icon: '/static/img/c.svg'},
        {name: '三者驾照', icon: '/static/img/d.svg'},
        {name: '三者驾驶员电话', icon: '/static/img/e.svg'},
        ],
      texts:[
        // {"name":"报案号","itemStyle":{"normal":{"color":"#2ca4bf"}}},
        {"name":"报案电话","itemStyle":{"normal":{"color":"#aacf44"}}},
        {"name":"被保险人姓名","itemStyle":{"normal":{"color":"#ff9945"}}},
        {"name":"被保险人电话","itemStyle":{"normal":{"color":"#2ca4bf"}}},
        {"name":"被保险人证件","itemStyle":{"normal":{"color":"#ff9945"}}},
        {"name":"标的车牌","itemStyle":{"normal":{"color":"#2ca4bf"}}},
        {"name":"标的车架","itemStyle":{"normal":{"color":"#ff9945"}}},
        {"name":"标的驾驶员","itemStyle":{"normal":{"color":"#2ca4bf"}}},
        {"name":"标的驾照","itemStyle":{"normal":{"color":"#ff9945"}}},
        {"name":"标的驾驶员电话","itemStyle":{"normal":{"color":"#2ca4bf"}}},
        {"name":"三者车牌","itemStyle":{"normal":{"color":"#ff9945"}}},
        {"name":"三者车架","itemStyle":{"normal":{"color":"#ff9945"}}},
        {"name":"三者驾驶员","itemStyle":{"normal":{"color":"#2ca4bf"}}},
        {"name":"三者驾照","itemStyle":{"normal":{"color":"#ff9945"}}},
        {"name":"三者驾驶员电话","itemStyle":{"normal":{"color":"#2ca4bf"}}}],
      listdata:[],
      links:[],
      groupId:'',
      zoom:0.3,
      datalist:[],
      yb:false,
      zb:false,
      token:'',
      banews:[],
      link:[],
      bzlist:[],
      wzflag:false,
      jjname:[{name: '报案电话', icon: BaseImg+'/static/img/1.svg',index:'1',select:true,tmxname:'reportorPhoneno'},
        {name: '标的车架', icon: BaseImg+'/static/img/6.svg',index:'6',select:true,tmxname:'vinNo1'},
        {name: '三者车架', icon:BaseImg+'/static/img/b.svg',index:'b',select:true,tmxname:'vinNo2'}]
    };
  },
  mounted(){
    var self=this
    self.groupId=this.$route.query.groupId
    self.token=localStorage.getItem('token')
    console.log(self.token)
    var myChart = echarts.init(document.getElementById('main'))
    myChart.showLoading();
    $.ajax({
      url:BaseURL+'/tmxc-api/api/tmxcsnaff/drawRelation?token='+self.token,
      contentType: "application/json",
      dataType:"json",
      type:'post',
      data:JSON.stringify({groupId:self.groupId,flag:'true'}),
      success:function(data){
        // console.log("123")
        // console.log(data)
        if(data.msg=='token失效，请重新登录'){
          self.$alert('', '登陆超时，请重新登录', {
            confirmButtonText: '确定',
            center: true,
            callback: function () {
              self.$router.push({path: "/login"});
            }
          });
        }else{
          if(data.code==0){
            myChart.hideLoading();
            self.listdata=data.listdata
            self.links=data.links
            self.link=data.links
            self.echartsway(self.listdata,self.links);
          }else{
            self.$alert('', data.msg,{
              confirmButtonText: '确定',
              center: true
            });
          }
        }
      }
    });
    var el = document.getElementsByClassName('titlediv')[0];
    var w = el.scrollWidth;
    var winwid=$(window).width()
    if(w>winwid){
      self.yb=true
    }else{
      el.style.textAlign="center"
    }
  },
  methods:{
    echartsway:function(listdata,links){
      var myChart = echarts.init(document.getElementById('main')),self=this;
      for(var i in listdata){
        if(listdata[i].pictureIndexs&&listdata[i].pictureIndexs){
          if(listdata[i].pictureIndexs.length==1){
            if(listdata[i].pictureIndexs[0].pictureIndex=='CCIC'||listdata[i].pictureIndexs[0].pictureIndex=='CIC'||
              listdata[i].pictureIndexs[0].pictureIndex=='SAMSUNG'||listdata[i].pictureIndexs[0].pictureIndex=='TAIC'||
              listdata[i].pictureIndexs[0].pictureIndex=='TPIC'||listdata[i].pictureIndexs[0].pictureIndex=='YONGCHENG'){
              listdata[i].symbol=`image://./static/img/${listdata[i].pictureIndexs[0].pictureIndex}.png`;
              listdata[i].symbolSize="120";
            }else{
              listdata[i].symbol=`image://./static/img/${listdata[i].pictureIndexs[0].pictureIndex}.svg`;
            }
          }else{
            var url=''
            for(var j in listdata[i].pictureIndexs){
              url=url+listdata[i].pictureIndexs[j].pictureIndex;
            }
            listdata[i].symbol=`image://./static/img/${url}.svg`;
          }
        }
      }
      var option={
        title: {//组件的标题，包含主标题和副标题。
          text: ''
        },
        legend: {//图例的数据数组。包含name(图例项的名称)，icon(图例项的 icon。可以通过 'image://url' 设置为图片)，

        },
        tooltip: {//鼠标放上的提示
          formatter: function (parmes) {
            console.log(parmes)
       /*     if(parmes.data.showName!=''){*/
              if(parmes.data.pictureIndexs && parmes.data.pictureIndexs.length>0){
                if(parmes.data.pictureIndexs[0].pictureIndex=='CCIC'||parmes.data.pictureIndexs[0].pictureIndex=='CIC'||
                  parmes.data.pictureIndexs[0].pictureIndex=='SAMSUNG'||parmes.data.pictureIndexs[0].pictureIndex=='TAIC'||
                  parmes.data.pictureIndexs[0].pictureIndex=='TPIC'||parmes.data.pictureIndexs[0].pictureIndex=='YONGCHENG'){
                  return "报案号： " + parmes.data.showName;
                }else{
                  var arr=[];
                  for(var n in parmes.data.pictureIndexs){
                    if(parmes.data.pictureIndexs[n].pictureIndex=='a'){
                      arr.push("三者车牌");
                    }else if(parmes.data.pictureIndexs[n].pictureIndex=='b'){
                      arr.push("三者车架");
                    }else if(parmes.data.pictureIndexs[n].pictureIndex=='c'){
                      arr.push("三者驾驶员");
                    }else if(parmes.data.pictureIndexs[n].pictureIndex=='d'){
                      arr.push("三者驾照");
                    }else if(parmes.data.pictureIndexs[n].pictureIndex=='e'){
                      arr.push("三者驾驶员电话");
                    }else{
                      arr.push(self.legendes[parmes.data.pictureIndexs[n].pictureIndex-1].name);
                    }
                  }
                  var tool=""
                  for(var m in arr){
                    if(parmes.data.showName!=''){
                      tool=tool+(arr[m]+'：'+parmes.data.showName+'<br/>');
                    }else{
                      tool=tool+(arr[m]+'<br/>');
                    }
                  }
                  return tool;
                }
              }
            // }
          },
          padding: [5, 10],
          backgroundColor:'#fff',
          textStyle:{
            color:'#000'
          },
        },
        animationDurationUpdate: 300,//数据更新动画的时长。
        animationEasingUpdate: 'quinticInOut',//数据更新动画的缓动效果。
        series : [//系列列表
          {
            type: 'graph',//每个系列通过 type 决定自己的图表类型
            layout:'force',//echarts3的变化，force是力向图，circular是和弦图
            symbol:'circle',//关系图节点标记的图形
            symbolSize:100,//关系图节点标记的大小
            zoom:0.3,
            roam: true,//是否开启鼠标缩放和平移漫游。默认不开启。
            focusNodeAdjacency:false,//是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
            legendHoverLink:true,//是否启用图例 hover 时的联动高亮。
            draggable:true,//节点是否可拖拽，只在使用力引导布局的时候有用。
            force : {
              repulsion :1000,//节点之间的斥力因子。值越大则斥力越大
              gravity : 0.05,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
              edgeLength :300,//边的两个节点之间的距离，这个距离也会受 repulsion,值越小则长度越长。
              layoutAnimation : true//因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画，
              // 在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。
            },
            // categories:texts,//节点分类的类目，可选。
            label: {//图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等，
              normal: {
                show: false,
                position:"left",
                textStyle:{
                  color:'#000',
                  fontSize:'12'
                }
              }
            },
            data: listdata,//关系图的节点数据列表。
            links:links,//节点间的关系数据
            lineStyle: {//关系边的公用线条样式。
              normal: {
                width: 1,
                color: "#81859A"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      myChart.on('click', function (params) {
        console.log(params)
       /* if(params.data.tmxcSnaFfEntity==''||params.data.tmxcSnaFfEntity==null){
          console.log('123')
        }*/
       if(params.data.needDesensitizationFlag!=false){

       }else{
          self.dialogVisible=true
          self.textarea=''
          self.banews=params.data.tmxcSnaFfEntity
          $.ajax({
            url:BaseURL+'/tmxc-api/api/tmxcsnaff/selectCaseMarkList?token='+self.token,
            type:'post',
            data:{registNo:params.data.tmxcSnaFfEntity.registNo},
            success:function(data){
              console.log("123")
              console.log(data)
              if(data.msg=='token失效，请重新登录'){
                self.$alert('', '登陆超时，请重新登录', {
                  confirmButtonText: '确定',
                  center: true,
                  callback: function () {
                    self.$router.push({path: "/login"});
                  }
                });
              }else{
                self.bzlist=data.list
              }
            }
          });
        }
      });
    },
    tjbz:function(){
      var self=this
      console.log(self.textarea)
      console.log(self.textarea.length)
      if(self.textarea.length>=5&&self.textarea.length<=255){
        $.ajax({
          url:BaseURL+'/tmxc-api/api/tmxcsnaff/insertCaseMark?token='+self.token,
          type:'post',
          data:{registNo:self.banews.registNo,remark:self.textarea},
          success:function(data){
            console.log("123")
            console.log(data)
            if(data.msg=='token失效，请重新登录'){
              self.$alert('', '登陆超时，请重新登录', {
                confirmButtonText: '确定',
                center: true,
                callback: function () {
                  self.$router.push({path: "/login"});
                }
              });
            }else{
              var mydata=new Date()
              var year=mydata.getFullYear()
              var month=mydata.getMonth() + 1
              month=month>9?month:'0'+month
              var days=mydata.getDate()
              days=days>9?days:'0'+days
              var hour=mydata.getHours()
              hour=hour>9?hour:'0'+hour
              var mon=mydata.getMinutes()
              mon=mon>9?mon:'0'+mon
              var seconds=mydata.getSeconds()
              seconds=seconds>9?seconds:'0'+seconds
              var username=localStorage.getItem("userName")
              var createtime=year+'-'+month+'-'+days+' '+hour+':'+mon+':'+seconds
              console.log(createtime)
              self.bzlist.unshift({createUserName:username,createTime:createtime,remark:self.textarea})
              self.textarea=''
            }
          }
        });
      }else{
        self.$alert('', '请输入5~255字备注', {
          confirmButtonText: '确定',
          center: true
        });
      }
    },
    nameclick:function(e){
      var self=this
      e.select=!e.select
      var array=[]
      self.name.forEach(function(a){
        if(a.select==true){
          array.push(a.tmxname)
        }
      })
      console.log(array)
      var arr=array.join(',')
      // var arr=arr1.substr(0,arr1.length-1)
      console.log(arr)
      var myChart = echarts.init(document.getElementById('main'))
      myChart.showLoading();
      $.ajax({
        url:BaseURL+'/tmxc-api/api/tmxcsnaff/drawRelation?token='+self.token,
        contentType: "application/json",
        dataType:"json",
        type:'post',
        data:JSON.stringify({groupId:self.groupId,relationKeys:arr,flag:'false'}),
        success:function(data){
          // console.log("123")
          // console.log(data)
          if(data.msg=='token失效，请重新登录'){
            self.$alert('', '登陆超时，请重新登录', {
              confirmButtonText: '确定',
              center: true,
              callback: function () {
                self.$router.push({path: "/login"});
              }
            });
          }else{
            if(data.code==0){
              myChart.hideLoading();
              self.listdata=data.listdata
              self.links=data.links
              self.link=data.links
              self.echartsway(self.listdata,self.links);
            }else{
              self.$alert('', data.msg, {
                confirmButtonText: '确定',
                center: true
              });
            }
          }
        }
      });
    },
    jj:function(){
      console.log('123')
      var self=this
      self.wzflag=false
      self.loading=true
      var myChart = echarts.init(document.getElementById('main'))
      myChart.showLoading();
       $.ajax({
        url:BaseURL+'/tmxc-api/api/tmxcsnaff/drawRelation?token='+self.token,
        contentType: "application/json",
        dataType:"json",
        type:'post',
        data:JSON.stringify({groupId:self.groupId,flag:'false'}),
        success:function(data){
          // console.log("123")
          // console.log(data)
          if(data.msg=='token失效，请重新登录'){
            self.$alert('', '登陆超时，请重新登录', {
              confirmButtonText: '确定',
              center: true,
              callback: function () {
                self.$router.push({path: "/login"});
              }
            });
          }else{
             if(data.code==0){
              myChart.hideLoading();
              self.listdata=data.listdata
              self.links=data.links
              self.link=data.links
              self.echartsway(self.listdata,self.links);
            }else{
              self.$alert('', data.msg, {
                confirmButtonText: '确定',
                center: true
              });
            }
          }
        }
      });
    },
    wz:function(){
      var self=this
      self.wzflag=true
      var dat=[]
      self.name.forEach(function(a){
        dat.push(a.tmxname)
      })
      var dat1=dat.join(',')
      // var data=dat1.substr(0,dat1.length-1)
      console.log(dat1)
      self.loading=true
      var myChart = echarts.init(document.getElementById('main'))
      myChart.showLoading();
       $.ajax({
        url:BaseURL+'/tmxc-api/api/tmxcsnaff/drawRelation?token='+self.token,
        contentType: "application/json",
        dataType:"json",
        type:'post',
        data:JSON.stringify({groupId:self.groupId,relationKeys:dat1,flag:'false'}),
        success:function(data){
          if(data.msg=='token失效，请重新登录'){
            self.$alert('', '登陆超时，请重新登录', {
              confirmButtonText: '确定',
              center: true,
              callback: function () {
                self.$router.push({path: "/login"});
              }
            });
          }else{
             if(data.code==0){
              myChart.hideLoading();
              self.listdata=data.listdata
              self.links=data.links
              self.link=data.links
              self.echartsway(self.listdata,self.links);
            }else{
              self.$alert('', data.msg, {
                confirmButtonText: '确定',
                center: true
              });
            }
          }
        }
      });
    },
    fh:function(){
      var self=this
      self.$router.push({path: "/list",query:{page:'1'}});
      // this.$router.go(-1)
    },
  /*  ybclick:function(){
      var self=this
      self.zb=true
      var potit = document.getElementsByClassName('potit')[0];
      potit.style.left=parseInt(potit.style.left)-150
      if(parseInt(potit.style.left)<=$(window).width()-potit.scrollWidth){
        potit.style.left=$(window).width()-potit.scrollWidth-70
        self.yb=false
      }
    },
    zbclick:function(){
      var self=this
      self.yb=true
      var potit = document.getElementsByClassName('potit')[0];
      potit.style.left=parseInt(potit.style.left)+150
      if(parseInt(potit.style.left)>=0){
        potit.style.left=0
        self.zb=false
      }
    }*/
  },
  computed:{

  },
  components:{

  },
  watch:{

  }
}
