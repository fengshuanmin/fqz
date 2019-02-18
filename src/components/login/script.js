import $ from "jquery"
import BaseURL from '../../../static/js/baseurl.js';
import BaseImg from '../../../static/js/baseimg.js';


export default {
  data(){
    return {
     input1:'',
     input2:'',
      loading:false,
      keyup:'',
      src:BaseImg+'/static/img/logintit.png',
      src1:BaseImg+'/static/img/login.png'
    }
  },
  mounted(){

  },
  methods:{
   login:function() {
     console.log(BaseURL)
     var self = this
     self.loading = true
     $.ajax({
       url: BaseURL + '/tmxc-api/api/login',
       contentType: "application/json",
       dataType: "json",
       type: 'post',
       data: JSON.stringify({username: self.input1, password: self.input2}),
       success: function (data) {
         self.loading = true
         console.log(data)
         if (data.code == '0') {
           console.log(data.userName)
           localStorage.setItem("token", data.token);
           localStorage.setItem("userName", data.userName);
           localStorage.setItem("zgs", data.zgsLogo);
           localStorage.setItem("userRole", data.userRole);
           self.$router.push({path: "/list", query: {username: data.userName}});
         } else {
           alert(data.msg);
         }
       }
     })
   }
  },
  computed:{

  },
  components:{

  },
  watch:{

  }
}
