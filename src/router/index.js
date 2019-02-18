import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

import Login from '@/components/login';
import List from '@/components/list';
// import CaseIdentification from '@/components/CaseIdentification';
// import LowerHair from '@/components/LowerHair';
import Zhuyemian from '@/components/zhuyemian';
import chart from '@/components/chart';

export default new Router({
  routes: [
    {path:"/",redirect:"/login"},
    {
    	path:'/login',
    	name:'login',
    	components:{
    		login:Login
    	}/*,
      meta: {
        keepAlive: true, //此组件需要被缓存
        isBack:false, //用于判断上一个页面是哪个
      }*/
    },
    {
    	path:'/list',
    	name:'list',
    	components:{
    		list:List
    	}/*,
      meta: {
        keepAlive: true, //此组件需要被缓存
        isBack:false, //用于判断上一个页面是哪个
      }*/
    },
    /*{
      path:'/CaseIdentification',
      name:'CaseIdentification',
      components:{
        CaseIdentification:CaseIdentification
      }
    },
    {
      path:'/LowerHair',
      name:'LowerHair',
      components:{
        LowerHair:LowerHair
      }
    },*/
    {
    	path:'/zhuyemian',
    	name:'zhuyemian',
    	components:{
    		zhuyemian:Zhuyemian
    	}/*,
      meta: {
        keepAlive: true, //此组件需要被缓存
        isBack:false, //用于判断上一个页面是哪个
      }*/
    },
    {
      path:'/chart',
      name:'chart',
      components:{
        chart:chart
      }
    }
  ]
})
