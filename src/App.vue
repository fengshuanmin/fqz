<template>
	<div id="app">
		<router-view name="login"></router-view>
    <router-view name="list"></router-view>
    <!--<keep-alive>
      <router-view name="list"></router-view>
    </keep-alive>-->
		<router-view name="zhuyemian"></router-view>
		<router-view name="chart"></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	#app{
		width:100%;
		height:100%;
    position: relative;
    background:#e1e3e9;
	}
	.skin-blue .wrapper{
		background:#e1e3e9;
	}
	/*.skin-blue .wrapper, .skin-blue .main-sidebar, .skin-blue .left-side{
		background:#40516F;
	}
    .skin-blue .main-header .navbar{
		background:#37455F;
    }
    .skin-blue .main-header .logo{
  	    background:#3D4C69;
    }
    .skin-blue .sidebar-menu>li:hover>a, .skin-blue .sidebar-menu>li.active>a, .skin-blue .sidebar-menu>li.menu-open>a{
  		background:#DC6767;
    }
    .skin-blue .sidebar-menu>li>.treeview-menu{
  		background:#37455F;
    }
    .skin-blue .sidebar-menu .treeview-menu>li.active>a, .skin-blue .sidebar-menu .treeview-menu>li>a:hover{
  		color:#DC6767;
    }
    .skin-blue .main-header .navbar .nav>li>a{
    	padding-right:50px;
    }*/
</style>
