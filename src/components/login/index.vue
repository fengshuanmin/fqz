<template>
	<div class="wrap" @keydown.enter.native="login">
		<div class="content">
      <div class="logintit">
        <img :src="src">
      </div>
			<div class="center">
				<div class="left left1">
          <!--<img :src="src1">-->
        </div>
				<div class="left">
					<div class="title">
						<h4>北斗车险反欺诈平台</h4>
					</div>
					<div class="body">
            <el-input placeholder="账号" v-model="input1" size="medium" @keydown.enter.native="login" clearable></el-input>
            <el-input type="password" @keydown.enter.native="login" placeholder="密码" v-model="input2" size="medium" clearable></el-input>
					</div>
					<div class="footer">
            <el-row>
              <el-button type="primary" @click="login">登录</el-button>
            </el-row>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.css"></style>
