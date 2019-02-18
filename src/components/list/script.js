import $ from "jquery";
import BaseURL from '../../../static/js/baseurl.js';
export default {
  data(){
    return {
      loading:true,
      inputtitle:'',
      username:'',
      options: [],
      value1:[],
      option1:[],
      gsjg:'',
      options1:[
        {
          value:'',
          label:'选择条件'
        },
        {
          value:'gt',
          label:'大于'
        },
        {
          value:'eq',
          label:'等于'
        },
        {
          value:'lt',
          label:'小于'
        }
      ],
      value11:[],
      input:'',
      tableData:[],
      dialogVisible1:false,
      option:[],
      tableData1:[{id:'',registNo:'',caseNature:'',involveMoney:'',derogationMoney:'',caseRemark:''}],
      options2: [
        {
          value:'正常案件',
          label:'正常案件'
        },
        {
          value:'疑似欺诈',
          label:'疑似欺诈'
        },
        {
          value:'确认欺诈',
          label:'确认欺诈'
        }
      ],
      dialogVisible2:false,
      tableData3:[],
      dialogVisible5:false,
      sizes:[10,15,20,30],
      currentPage:5,
      limit:10,
      page:1,
      total:1,
      multipleSelection: [],
      token:'',
      flag:false,
      groupId:'',
      loginoutflag:false,
      selectHead:'',
      array:'',
      caseid:'',
      rymc:'',
      dqvalue:'',
      dqoptions:[{value:'',label:'全部区域'}],
      qylist:[],
      orderBy:'desc',
      zgsLogo:'',
      bxgs:'',
      gsoption:[],
      pager:1,
      pagesize:10,
      ajyjflag:true,
      userRole:''
    };
  },
  created:function(){
    var self=this;
    self.zgsLogo=localStorage.getItem("zgs")
    self.userRole=localStorage.getItem("userRole")
    if(self.zgsLogo=='TMXC'){
      self.ajyjflag=false
    }
    self.username=localStorage.getItem("userName")
    self.token=localStorage.getItem("token");
    if(this.$route.query.page&&localStorage.getItem("dataselect")){
      var datsel=localStorage.getItem("dataselect")
      var datselcted=JSON.parse(datsel)
      self.limit=datselcted[0].limit
      self.pagesize=datselcted[0].limit
      self.page=datselcted[0].page
      self.selectHead=datselcted[0].selecttit
      self.value1=datselcted[0].value1
      self.value11=datselcted[0].value11
      self.input=datselcted[0].input
      self.currentPage=datselcted[0].page
      if(self.value1&&self.value1!=''){
        self.dqoptions=datselcted[0].dpoptions
        for(var d in self.dqoptions){
          if(self.dqoptions[d].label==datselcted[0].dqvalue){
            self.dqvalue=self.dqoptions[d].value
          }
        }
      }else{
        self.gsoption=datselcted[0].dpoptions
        for(var d in self.gsoption){
          if(self.gsoption[d].label==datselcted[0].dqvalue){
            self.dqvalue=self.gsoption[d].value
          }
        }
      }
      $.ajax({
        url:BaseURL+'/tmxc-api/api/tmxcsnaff/getOwerOrgs?token='+self.token,
        success:function(data){
          for(var n in data.array){
            self.options.push({value:data.array[n].insName,label:data.array[n].insName});
            self.qylist.push(data.array[n])
          }
          self.bxgs=data.array[0].insName
          /*for(var gs in data.array[0].sfData){
            self.gsoption.push({value:data.array[0].sfData[gs].sfbm,label:data.array[0].sfData[gs].sfmc})
          }
          self.gsoption.unshift({value:'',label:'全部区域'})*/
        }
      });
    }else{
      $.ajax({
        url:BaseURL+'/tmxc-api/api/tmxcsnaff/getOwerOrgs?token='+self.token,
        success:function(data){
          console.log(data)
          for(var n in data.array){
            self.options.push({value:data.array[n].insName,label:data.array[n].insName});
            self.qylist.push(data.array[n])
          }
          self.bxgs=data.array[0].insName
          for(var gs in data.array[0].sfData){
            self.gsoption.push({value:data.array[0].sfData[gs].sfbm,label:data.array[0].sfData[gs].sfmc})
          }
          self.gsoption.unshift({value:'',label:'全部区域'})
        }
      });
    }
    console.log(self.page)
    console.log(self.currentPage)
    self.loading=true
    console.log(self.selectHead)
    self.first(self.page,self.limit,self.token,self.selectHead,self.value1,self.dqvalue,self.value11,self.input,self.orderBy);
    },
  mounted(){
    $("body").not(".nodiv").click(function (e) {
      $(".nodiv").hide();
    });
  },
  methods:{
    //公共调用列表方法
    first:function(page,limit,token,selectHead,value1,dqvalue,isRiskMark,riskMark,orderBy){
      var self=this;
      var arr=''
      for(var i in value1){
        arr+=value1[i]+','
      }
      var arr1=arr.substr(0,arr.length-1)
      self.array=arr1
       $.ajax({
         url:BaseURL+'/tmxc-api/api/tmxcsnaff/list?token='+token,
         data:{
           page:page,limit:limit,selectHead:selectHead,
           array:arr1,sfbm:dqvalue,isRiskMark:isRiskMark,riskMark:riskMark,orderBy:orderBy
         },
         success:function(data){
           self.loading=false
           if(data.msg=='token失效，请重新登录'){
             self.$alert('', '登陆超时，请重新登录', {
               confirmButtonText: '确定',
               center: true,
               callback: function () {
                 self.$router.push({path: "/login"});
               }
             });
           }else{
             self.tableData=data.page.list;
             self.total=data.page.totalCount;
             self.currentPage =data.page.currPage
             self.pagesize =data.page.pageSize
             self.limit=data.page.pageSize
             // localStorage.removeItem('dataselect');
           }
         }
        });
    },
    //升序降序
    sortChange:function(column,prop,order){
      var self=this
      if(column.order=='ascending'){
        self.orderBy='asc'
      }else{
        self.orderBy='desc'
      }
      self.loading=true
      self.first('1','10',self.token,self.selectHead,self.value1,self.dqvalue,self.value11,self.input,self.orderBy)
    },
    //网络号、报案号、车牌号或车架筛选
    cx:function(){
      var self=this, dqvalue='',dpoptions=[],options=[];
      localStorage.removeItem('dataselect');
      if(self.value1&&self.value1!=''){
        for(var d in self.dqoptions){
          if(self.dqoptions[d].value==self.dqvalue){
            dqvalue=self.dqoptions[d].label
          }
        }
        dpoptions=self.dqoptions
        options=self.options
      }else{
        for(var d in self.gsoption){
          if(self.gsoption[d].value==self.dqvalue){
            dqvalue=self.gsoption[d].label
          }
        }
        dpoptions=self.gsoption
        options=self.options
      }
      var dataselect=[{page:self.page,selecttit:self.selectHead,options:options,value1:self.value1,dpoptions:dpoptions,dqvalue:dqvalue,value11:self.value11,
        input:self.input,limit:self.limit}]
      var datselct=JSON.stringify(dataselect)
      localStorage.setItem("dataselect", datselct);
      self.loading=true
      self.first('1','10',self.token,self.selectHead,self.value1,self.dqvalue,self.value11,self.input,self.orderBy)
    },
    //分值的筛选
    sxcx:function(){
      var self=this, dqvalue='',dpoptions=[],options=[];
      localStorage.removeItem('dataselect');
      if(self.value1&&self.value1!=''){
        for(var d in self.dqoptions){
          if(self.dqoptions[d].value==self.dqvalue){
            dqvalue=self.dqoptions[d].label
          }
        }
        dpoptions=self.dqoptions
        options=self.options
      }else{
        for(var d in self.gsoption){
          if(self.gsoption[d].value==self.dqvalue){
            dqvalue=self.gsoption[d].label
          }
        }
        dpoptions=self.gsoption
        options=self.options
      }
      var dataselect=[{page:self.page,selecttit:self.selectHead,options:options,value1:self.value1,dpoptions:dpoptions,dqvalue:dqvalue,value11:self.value11,
        input:self.input,limit:self.limit}]
      var datselct=JSON.stringify(dataselect)
      localStorage.setItem("dataselect", datselct);
      if(self.value11=='gt'||self.value11=='eq'||self.value11=='lt'){
        if(self.input==''){
          self.$alert('', '请输入分值', {
            confirmButtonText: '确定',
            center: true
          });
        }else{
          self.loading=true
          self.first('1','10',self.token,self.selectHead,self.value1,self.dqvalue,self.value11,self.input,self.orderBy)
        }
      }else{
        if(self.input!=''){
          self.$alert('', '请选择条件', {
            confirmButtonText: '确定',
            center: true
          });
        }else{
          self.loading=true
          self.first('1','10',self.token,self.selectHead,self.value1,self.dqvalue,self.value11,self.input,self.orderBy)
        }
      }
    },
    //长度的筛选
    handleSizeChange:function(val){
      var self=this, dqvalue='',dpoptions=[],options=[];
      self.limit=val
      localStorage.removeItem('dataselect');
      if(self.value1&&self.value1!=''){
        for(var d in self.dqoptions){
          if(self.dqoptions[d].value==self.dqvalue){
            dqvalue=self.dqoptions[d].label
          }
        }
        dpoptions=self.dqoptions
        options=self.options
      }else{
        for(var d in self.gsoption){
          if(self.gsoption[d].value==self.dqvalue){
            dqvalue=self.gsoption[d].label
          }
        }
        dpoptions=self.gsoption
        options=self.options
      }
      var dataselect=[{page:self.page,selecttit:self.selectHead,options:options,value1:self.value1,dpoptions:dpoptions,dqvalue:dqvalue,value11:self.value11,
        input:self.input,limit:self.limit}]
      var datselct=JSON.stringify(dataselect)
      localStorage.setItem("dataselect", datselct);
      self.loading=true
      self.first('1',self.limit,self.token,self.selectHead,self.value1,self.dqvalue,self.value11,self.input,self.orderBy)
    },
   //页码的筛选
    handleCurrentChange:function(val){
      var self=this, dqvalue='',dpoptions=[],options=[];
      self.page=val
      this.currentPage = val;
      localStorage.removeItem('dataselect');
      if(self.value1&&self.value1!=''){
        for(var d in self.dqoptions){
          if(self.dqoptions[d].value==self.dqvalue){
            dqvalue=self.dqoptions[d].label
          }
        }
        dpoptions=self.dqoptions
        options=self.options
      }else{
        for(var d in self.gsoption){
          if(self.gsoption[d].value==self.dqvalue){
            dqvalue=self.gsoption[d].label
          }
        }
        dpoptions=self.gsoption
        options=self.options
      }
      var dataselect=[{page:self.page,selecttit:self.selectHead,options:options,value1:self.value1,dpoptions:dpoptions,dqvalue:dqvalue,value11:self.value11,
        input:self.input,limit:self.limit}]
      var datselct=JSON.stringify(dataselect)
      localStorage.setItem("dataselect", datselct);
      self.loading=true
      self.first(self.page,self.limit,self.token,self.selectHead,self.value1,self.dqvalue,self.value11,self.input,self.orderBy)
    },
    //区域的选择
    dq:function(){
      var self=this
      var self=this, dqvalue='',dpoptions=[],options=[];
      localStorage.removeItem('dataselect');
      if(self.value1&&self.value1!=''){
        for(var d in self.dqoptions){
          if(self.dqoptions[d].value==self.dqvalue){
            dqvalue=self.dqoptions[d].label
          }
        }
        dpoptions=self.dqoptions
        options=self.options
      }else{
        for(var d in self.gsoption){
          if(self.gsoption[d].value==self.dqvalue){
            dqvalue=self.gsoption[d].label
          }
        }
        dpoptions=self.gsoption
        options=self.options
      }
      var dataselect=[{page:self.page,selecttit:self.selectHead,options:options,value1:self.value1,dpoptions:dpoptions,dqvalue:dqvalue,value11:self.value11,
        input:self.input,limit:self.limit}]
      var datselct=JSON.stringify(dataselect)
      localStorage.setItem("dataselect", datselct);
      self.loading=true
      self.first('1','10',self.token,self.selectHead,self.value1,self.dqvalue,self.value11,self.input,self.orderBy)
    },
    //保险公司选择
    queryId:function(){
      var self=this, dqvalue='',dpoptions=[],options=[],qylist=[]
      self.dqoptions=[{value:'',label:'全部区域'}]
      self.value1.forEach(function(dq){
        self.qylist.forEach(function(qy){
          if(dq==qy.insName){
            for(var sf in qy.sfData){
              qylist.push(qy.sfData[sf])
            }
          }
        })
      })
      var dataArr = [];
      var dataObj = {};
      for (var i = 0; i < qylist.length; i++) {
        var item = qylist[i].sfmc;
        if (!dataObj[item]) {
          dataArr.push(qylist[i]);
          dataObj[item] = true;
        }
      }
      for(var l in dataArr){
        self.dpoptions=[]
        self.dqoptions.push({value:dataArr[l].sfbm,label:dataArr[l].sfmc});
      }
      localStorage.removeItem('dataselect');
      if(self.value1&&self.value1!=''){
        for(var d in self.dqoptions){
          if(self.dqoptions[d].value==self.dqvalue){
            dqvalue=self.dqoptions[d].label
          }
        }
        dpoptions=self.dqoptions
        options=self.options
      }else{
        for(var d in self.gsoption){
          if(self.gsoption[d].value==self.dqvalue){
            dqvalue=self.gsoption[d].label
          }
        }
        dpoptions=self.gsoption
        options=self.options
      }
      var dataselect=[{page:self.page,selecttit:self.selectHead,options:options,value1:self.value1,dpoptions:dpoptions,dqvalue:dqvalue,value11:self.value11,
        input:self.input,limit:self.limit}]
      var datselct=JSON.stringify(dataselect)
      localStorage.setItem("dataselect", datselct);
      self.loading=true
      self.first('1','10',self.token,self.selectHead,self.value1,self.dqvalue,self.value11,self.input,self.orderBy)
    },
   //页面登出按钮的展示
    outflag:function(){
      var self=this
      self.loginoutflag=!self.loginoutflag;
    },
    //页面登出
    loginout:function(){
      var self=this
      self.$router.push({path: "/login"});
    },
    //织网图的页面
    echartscavas:function(row){
      var self=this, dqvalue='',dpoptions=[],options=[]
      // if(self.value1&&self.value1!=''){
      //   for(var d in self.dqoptions){
      //     if(self.dqoptions[d].value==self.dqvalue){
      //       dqvalue=self.dqoptions[d].label
      //     }
      //   }
      //   dpoptions=self.dqoptions
      //   options=self.options
      // }else{
      //   for(var d in self.gsoption){
      //     if(self.gsoption[d].value==self.dqvalue){
      //       dqvalue=self.gsoption[d].label
      //     }
      //   }
      //   dpoptions=self.gsoption
      //   options=self.options
      // }
      // var dataselect=[{page:self.page,selecttit:self.selectHead,options:options,value1:self.value1,dpoptions:dpoptions,dqvalue:dqvalue,value11:self.value11,
      //   input:self.input,limit:self.limit}]
      // var datselct=JSON.stringify(dataselect)
      // localStorage.setItem("dataselect", datselct);
      this.$router.push({path:"/zhuyemian",query:{groupId:row.groupId}});
    },
    //案件标识
    handlepurchase:function(row){
      var self=this
      self.groupId=row.groupId;
      $.ajax({
        url:BaseURL+'/tmxc-api/api/tmxcsnaff/reportList/'+self.groupId,
        data:{token:self.token},
        type:"POST",
        success:function(data){
          self.loading=false;
          if(data.msg=='token失效，请重新登录'){
            self.$alert('', '登陆超时，请重新登录', {
              confirmButtonText: '确定',
              center: true,
              callback: function () {
                self.$router.push({path: "/login"});
              }
            });
          }else{
            self.dialogVisible1=true;
            self.flag=false
            self.option=data.unsignList
            if(data.signList.length>0){
              self.tableData1=data.signList
            }else{
              self.tableData1=[{groupId:'',registNo:'',caseNature:'',involveMoney:'',derogationMoney:'',caseRemark:''}]
            }
          }
        }
      });
    },
    //案件移交
    CaseNumber:function(row){
      console.log(row)
      var self=this
      self.groupId=row.groupId;
      self.caseid=row.id
      self.token=localStorage.getItem("token");
      $.ajax({
        url:BaseURL+'/tmxc-api/api/tmxcsnaff/getAppointUsers',
        data:{token:self.token,caseId:self.caseid},
        success:function(data){
          console.log(data)
          self.loading=false;
          if(data.msg=='token失效，请重新登录'){
            self.$alert('', '登陆超时，请重新登录', {
              confirmButtonText: '确定',
              center: true,
              callback: function () {
                self.$router.push({path: "/login"});
              }
            });
          }else{
            self.dialogVisible2=true;
            self.tableData3=data.list;
            self.option1=[]
            data.orgArray.map((item) => {
              self.option1.push({label:item,value:item})
            })
          }
        }
      });
    },
    //新增案件标识页面展开
    xz:function(){
      console.log('123')
      var self=this
      console.log(self.option)
      if(self.option==''){
        self.$alert('', '当前网络号没有可标识的案件', {
          confirmButtonText: '确定',
          center: true,
        });
      }else{
        self.flag=!self.flag
      }
    },
    //点击单个案件
    itegroup:function(val){
     var self=this
     var array=[]
     let flag1 = false;
     self.tableData1.map((item) => {
        if (item.registNo == val.registNo) {
          flag1 = true;
        }
      })
      if (flag1) {
        self.$alert('', '您已添加过该案件，不能重复添加哦~',{
          confirmButtonText: '确定',
          center: true,
          callback: function () {
            self.flag=false;
          }
        })
        return;
      }
      self.tableData1.push({groupId:val.groupId,registNo:val.registNo,caseNature:'',
        involveMoney:'',derogationMoney:'',caseRemark:''})
      self.tableData1.forEach(function(a){
        if(a.groupId!=''){
          array.push(a);
        }
      })
      self.tableData1=array
      self.flag=false;
    },
    //删除案件标识
    delecte:function(row){
      var self=this
      if(self.tableData1.length>1){
        self.tableData1.map((item, index) => {
          if (row.registNo === item.registNo) {
            self.tableData1.splice(index, 1);
          }
        })
      }else{
        self.tableData1=[{groupId:'',registNo:'',caseNature:'',involveMoney:'',derogationMoney:'',caseRemark:''}]
      }
    },
    //案件标识调用成功
    commit:function(){
      var self=this
      var list=JSON.stringify(self.tableData1)
      if(self.tableData1.length==1&&self.tableData1[0].groupId==''){
        list=[]
        self.loading=true
        $.ajax({
          url:BaseURL+'/tmxc-api/api/tmxcsnaff/updateCaseMark?token='+self.token,
          data:{list:list,groupId:self.groupId},
          type:"POST",
          success:function(data){
            self.loading=false;
            if(data.code==0){
              self.$alert('', '案件标识成功', {
                confirmButtonText: '确定',
                center: true,
                callback: function () {
                  self.dialogVisible1=false;
                }
              });
            }else{
              self.$alert('', '案件标识失败', {
                confirmButtonText: '确定',
                center: true,
                callback: function () {
                }
              });
            }
          }
        });
      }else{
        self.loading=true
        $.ajax({
          url:BaseURL+'/tmxc-api/api/tmxcsnaff/updateCaseMark?token='+self.token,
          data:{list:list,groupId:self.groupId},
          type:"POST",
          success:function(data){
            self.loading=false;
            if(data.code==0){
              self.$alert('', '案件标识成功', {
                confirmButtonText: '确定',
                center: true,
                callback: function () {
                  self.dialogVisible1=false;
                }
              });
            }else{
              self.$alert('', '案件标识失败', {
                confirmButtonText: '确定',
                center: true,
                callback: function () {
                }
              });
            }
          }
        });
      }
    },
    //案件标识页面关闭
    caseqx:function(){
      var self=this
      self.dialogVisible1=false;
      self.flag=false;
    },
    //案件移交
    handleSelectionChange:function(val){
      var self=this
      self.multipleSelection=val
      self.dialogVisible5=true
    },
    //案件移交调用接口
    catch1:function(){
      var self=this
      self.dialogVisible5=false
      $.ajax({
        url:BaseURL+'/tmxc-api/api/tmxcsnaff/updateAssignment',
        type:'POST',
        data:{userId:self.multipleSelection.userId,caseId:self.caseid},
        success:function(data){
          if(data.code==0){
            self.$alert('', '案件移交成功', {
              confirmButtonText: '确定',
              center: true,
              callback: function () {
                self.dialogVisible2=false
                self.dialogVisible5=false
                self.dialogVisible2=false;
              }
            })
          }
        }
      })
    },
    //案件移交条件筛选
    jgcx:function(){
      var self=this
      $.ajax({
        url:BaseURL+'/tmxc-api/api/tmxcsnaff/getAppointUsers',
        data:{token:self.token,caseId:self.caseid,orgName:self.gsjg,userName:self.rymc},
        success:function(data){
          self.loading=false;
          if(data.msg=='token失效，请重新登录'){
            self.$alert('', '登陆超时，请重新登录', {
              confirmButtonText: '确定',
              center: true,
              callback: function () {
                self.$router.push({path: "/login"});
              }
            });
          }else{
            self.dialogVisible2=true;
            self.tableData3=data.list;
          }
        }
      });
    },
  },
  computed:{

  },
  components:{

  },
  watch:{
    value11:function(newval,oldval){
      var self=this
      if(self.value11==''){
        self.input=''
      }else{
        self.input=self.input
      }
    },
    /*value1:function(newvalue1,oldvalue1){
      var self=this
      var qylist=[]
      self.dqoptions=[{value:'',label:'全部区域'}]
      self.value1.forEach(function(dq){
        self.qylist.forEach(function(qy){
          if(dq==qy.insName){
            for(var sf in qy.sfData){
              qylist.push(qy.sfData[sf])
            }
          }
        })
      })
      var dataArr = [];
      var dataObj = {};
      for (var i = 0; i < qylist.length; i++) {
        var item = qylist[i].sfmc;
        if (!dataObj[item]) {
          dataArr.push(qylist[i]);
          dataObj[item] = true;
        }
      }
      for(var l in dataArr){
        self.dpoptions=[]
        self.dqoptions.push({value:dataArr[l].sfbm,label:dataArr[l].sfmc});
      }
      self.loading=true
      self.first('1','10',self.token,self.selectHead,self.value1,self.dqvalue,self.value11,self.input,self.orderBy)
    },*/
    /*dqvalue:function (newdq,olddq) {
      var self=this
      self.loading=true
      self.first('1','10',self.token,self.selectHead,self.value1,self.dqvalue,self.value11,self.input,self.orderBy)
    }*/
  }
}
