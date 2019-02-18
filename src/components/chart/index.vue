<template>
	<div class="wrapper" style="text-align: center">
    <div class="echarttitle">
        <router-link to="zhuyemian" tag="span">关系图</router-link> |
        <router-link to="chart" tag="span">树图</router-link>
    </div>
		<div id="main" style="width:800px;height:600px;"></div>
    <div class="dialog1">
      <el-dialog
        title="案件详情"
        :visible.sync="dialogVisible"
        width="30%">
        <span><span>报案电话</span><span>123456789</span></span>
        <span><span>出险地点</span><span>123456789</span></span>
        <span><span>承保机构</span><span>123456789</span></span>
        <span><span>报案日期</span><span>123456789</span></span>
        <span><span>报案时间</span><span>123456789</span></span>
        <span><span>被保险人类型</span><span>123456789</span></span>
        <span><span>被保险人证件类型</span><span>123456789</span></span>
        <span><span>被保险人证件号</span><span>123456789</span></span>
        <span style="display: flex;">
                <span>案件备注</span>
                  <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
                  </el-input>
              </span>
        <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="valetRate2">确 定</el-button>
                  <el-button @click="dialogVisible = false">取 消</el-button>
              </span>
      </el-dialog>
    </div>
	</div>
</template>
<script src="./script.js">
</script>
<style lang="scss" src="./style.css">

</style>
