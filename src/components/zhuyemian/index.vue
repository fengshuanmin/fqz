<template>
	<div class="wrapper">
    <div style="position: relative;">
      <div class="echartstop">
        <div class="echarttitle">
            <div style="margin: 0 50px;display: flex;">
            <!--<span style="flex: 1;color:#47A1FB;line-height: 31px">
              <router-link to="zhuyemian" tag="span">关系图</router-link>
            </span>-->
              <span style="flex: 1;line-height: 31px;color: #666;">
                <span v-if="wzflag" style="color: #666;cursor: pointer;margin-right: 20px;" @click="jj">简洁版关系图</span>
                <span v-else style="color: #47A1FB;cursor: pointer;margin-right: 20px;" @click="jj">简洁版关系图</span>
                <span v-if="wzflag" style="color: #47A1FB;cursor: pointer;" @click="wz">完整版关系图</span>
                <span v-else style="color: #666;cursor: pointer;margin-right: 20px;" @click="wz">完整版关系图</span>
              </span>
             <!--    <span style="width: 50px;text-align: center" @click="zoommin">
                   <span style="font-size: 22px;" class="iconfont icon-zoomin"></span>
                 </span>
                 <span style="width: 50px;text-align: center" @click="zoomout">
                   <span style="font-size: 22px;" class="iconfont icon-zoomout"></span>
                 </span>
              |<router-link to="chart" tag="span">树图</router-link>-->
              <el-row>
                <!--<el-button type="primary" plain @click="jj" size="small">简介版关系图</el-button>-->
                <el-button type="primary" plain @click="fh" size="small">返回</el-button>
              </el-row>
            </div>
          </div>
        <div v-if="wzflag" class="titlebody">
          <div class="titledata" style="display: flex;align-items: center;">
            <!--<div v-if="zb" class="jt" style="width: 40px;text-align: center" @click="zbclick">
              <span style="font-size: 30px;color:#C9CCD5;" class="iconfont icon-fanhui"></span>
            </div>-->
            <div class="titlediv" style="position: relative;height: 76px;flex:1;overflow: hidden;text-align:center;white-space: nowrap">
              <div class="potit" style="position: absolute;left: 0px;text-align:center;">
                <span class="titlesingle">
                  <span class="titleflex">
                    <span><img :src="bah.icon"></span>
                    <span>{{bah.name}}</span>
                  </span>
                </span>
                <span class="titlesingle"  v-for="item in name">
                  <span class="titleflex" style="cursor: pointer" @click="nameclick(item)">
                    <span v-if="item.select"><img :src="item.icon"></span>
                    <span v-else  style="opacity: 0.5"><img class="opimg" :src="item.icon"></span>
                    <span v-if="item.select">{{item.name}}</span>
                    <span v-else style="color: #CCCCCC;">{{item.name}}</span>
                  </span>
                </span>
                <!--<span class="titlesingle"  v-for="item1 in phone">
                  <span class="titleflex" style="cursor: pointer" @click="nameclick(item1)">
                    <span v-if="item1.select"><img :src="item1.icon"></span>
                    <span v-else style="opacity: 0.5"><img class="opimg" :src="item1.icon"></span>
                    <span v-if="item1.select">{{item1.name}}</span>
                    <span v-else style="color: #CCCCCC;">{{item1.name}}</span>
                  </span>
                </span>
                <span class="titlesingle" v-for="item2 in plate">
                  <span class="titleflex" style="cursor: pointer" @click="nameclick(item2)">
                    <span v-if="item2.select"><img :src="item2.icon"></span>
                    <span v-else style="opacity: 0.5"><img class="opimg" :src="item2.icon"></span>
                    <span v-if="item2.select">{{item2.name}}</span>
                    <span v-else style="color: #CCCCCC;">{{item2.name}}</span>
                  </span>
                </span>
                <span class="titlesingle" v-for="item3 in card">
                  <span class="titleflex" style="cursor: pointer" @click="nameclick(item3)">
                    <span v-if="item3.select"><img :src="item3.icon"></span>
                    <span v-else style="opacity: 0.5"><img class="opimg" :src="item3.icon"></span>
                    <span v-if="item3.select">{{item3.name}}</span>
                    <span v-else style="color: #CCCCCC;">{{item3.name}}</span>
                  </span>
                </span>-->
              </div>
            </div>
            <!--<div v-if="yb" class="jt" style="width: 40px;text-align: center" @click="ybclick">
              <span style="font-size: 30px;color:#C9CCD5;" class="iconfont icon-gengduo"></span>
            </div>-->
          </div>
        </div>
        <div v-else class="titlebody">
          <div class="titledata" style="display: flex;align-items: center;">
            <!--<div v-if="zb" class="jt" style="width: 40px;text-align: center" @click="zbclick">
              <span style="font-size: 30px;color:#C9CCD5;" class="iconfont icon-fanhui"></span>
            </div>-->
            <div class="titlediv" style="position: relative;height: 76px;flex:1;overflow: hidden;text-align:center;white-space: nowrap">
              <div class="potit" style="position: absolute;left: 0px;text-align:center;">
                <span class="titlesingle">
                  <span class="titleflex">
                    <span><img :src="bah.icon"></span>
                    <span>{{bah.name}}</span>
                  </span>
                </span>
                <span class="titlesingle"  v-for="item1 in jjname">
                  <span class="titleflex">
                    <span v-if="item1.select"><img :src="item1.icon"></span>
                    <span v-else  style="opacity: 0.5"><img class="opimg" :src="item1.icon"></span>
                    <span v-if="item1.select">{{item1.name}}</span>
                    <span v-else style="color: #CCCCCC;">{{item1.name}}</span>
                  </span>
                </span>
              <!--<span class="titlesingle"  v-for="item1 in phone">
                <span class="titleflex" style="cursor: pointer" @click="nameclick(item1)">
                  <span v-if="item1.select"><img :src="item1.icon"></span>
                  <span v-else style="opacity: 0.5"><img class="opimg" :src="item1.icon"></span>
                  <span v-if="item1.select">{{item1.name}}</span>
                  <span v-else style="color: #CCCCCC;">{{item1.name}}</span>
                </span>
              </span>
              <span class="titlesingle" v-for="item2 in plate">
                <span class="titleflex" style="cursor: pointer" @click="nameclick(item2)">
                  <span v-if="item2.select"><img :src="item2.icon"></span>
                  <span v-else style="opacity: 0.5"><img class="opimg" :src="item2.icon"></span>
                  <span v-if="item2.select">{{item2.name}}</span>
                  <span v-else style="color: #CCCCCC;">{{item2.name}}</span>
                </span>
              </span>
              <span class="titlesingle" v-for="item3 in card">
                <span class="titleflex" style="cursor: pointer" @click="nameclick(item3)">
                  <span v-if="item3.select"><img :src="item3.icon"></span>
                  <span v-else style="opacity: 0.5"><img class="opimg" :src="item3.icon"></span>
                  <span v-if="item3.select">{{item3.name}}</span>
                  <span v-else style="color: #CCCCCC;">{{item3.name}}</span>
                </span>
              </span>-->
              </div>
            </div>
            <!--<div v-if="yb" class="jt" style="width: 40px;text-align: center" @click="ybclick">
              <span style="font-size: 30px;color:#C9CCD5;" class="iconfont icon-gengduo"></span>
            </div>-->
          </div>
        </div>
      </div>
    </div>
		<div id="main" style="width:100%;height:100%;margin: auto;"></div>
    <div class="dialog1 echartdialog">
      <el-dialog
        title="案件详情"
        :visible.sync="dialogVisible"
        width="30%">
        <span><span>承保机构</span><span>{{banews.comCode}}</span></span>
        <span><span>报案号码</span><span>{{banews.registNo}}</span></span>
        <span><span>出险时间</span><span>{{banews.damageStarthour}}</span></span>
        <span><span>出险地点</span><span>{{banews.damageAddress}}</span></span>
        <span><span>标的车牌</span><span>{{banews.actualLicenseno1}}</span></span>
        <span><span>标的车架</span><span>{{banews.vinNo1}}</span></span>
        <span><span>三者车牌</span><span>{{banews.actualLicenseno2}}</span></span>
        <span><span>三者车架</span><span>{{banews.vinNo2}}</span></span>
        <span style="display: flex;">
          <span>添加备注</span>
          <el-input type="textarea" :rows="2" v-model="textarea">
          </el-input>
        </span>
        <span style="display: flex;">
          <span></span>
          <span style="margin-left:15px;">
            <el-row>
              <el-button type="primary" @click="tjbz" plain size="mini">提交</el-button>
            </el-row>
          </span>
        </span>
        <span style="display: flex;" v-if="bzlist!=''">
          <span>案件备注</span>
          <span style="margin-left:15px;">
            <ul class="ajbz">
              <li v-for="item in bzlist">
                <div style="padding:10px 5px;">
                  <span>{{item.createUserName}}</span><span style="float: right;font-size: 12px;color:#999;">{{item.createTime}}</span>
                </div>
                <div style="padding:0 5px 10px">
                  {{item.remark}}
                </div>
              </li>
            </ul>
          </span>
        </span>
        <!--<span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="valetRate2">确 定</el-button>
                  <el-button @click="dialogVisible = false">取 消</el-button>
              </span>-->
      </el-dialog>
    </div>
	</div>
</template>
<script src="./script.js">
</script>
<style lang="scss" src="./style.css">

</style>
