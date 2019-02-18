<template>
	<div class="wrap1">
    <div style="width: 100%;background: #fff;">
      <div class="listheader">
        <div style="width: 910px;margin: auto;">
          <p class="listhep">
            <span style="width: 180px;font-size:18px;display: inline-block;">北斗车险反欺诈平台</span>
            <span style="width:620px;text-align: right;display: inline-block;">
            <div style="margin-right: 20px;" id="selectheader">
              <span style="border: 1px solid #ccc;padding:12px 25px 12px 8px;border-radius: 20px;position:relative;">
                <el-input
                  placeholder="请输入网络号、报案号、车牌号或车架"
                  v-model="selectHead" @keydown.enter.native="cx">
                </el-input>
                <span @click="cx" style="position:absolute;right:10px;font-size: 24px;color:#dcdfe6;cursor: pointer;" class="iconfont icon-sousuo"></span>
              </span>
                <!--<el-input placeholder="请输入网络号、报案号、车牌号或车架" v-model="selectHead"><el-button  slot="append"  @click="cx">搜索</el-button></el-input>-->
            </div>
          </span>
            <span style=";display: inline-block;width: 100px;cursor: pointer;" @click="outflag">
              <span class="iconfont icon-touxiang1" style="font-size: 20px;color: #ccc;"></span>
              <span>{{username}}</span>
          </span>
          </p>
          <div class="nodiv" v-if="loginoutflag" style="width:910px;margin:auto;display: flex;margin-top: -5px;">
            <span style="flex:1"></span>
            <span style="float:right;background: #fff;width: 130px;z-index: 1;border: 1px solid #f0f0f2;border-radius: 2px;">
              <span @click="loginout" style="display:block;cursor: pointer;width:130px;text-align:center;padding: 10px;">切换账号</span>
              <span @click="loginout" style="display:block;cursor: pointer;width:130px;text-align:center;padding: 10px;">退出</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="listbody1">
      <div class="listtitle">
        <div>
          <span class='label1'>筛选</span>
          <span v-if="zgsLogo=='TMXC'">
             <span class='label2'>保险公司</span>
            <span class="gsjg">
              <span>
                <el-select v-model="value1" multiple placeholder="请选择保险公司" @change="queryId">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </span>
              <span class="xzdq">
                <el-select v-model="dqvalue" placeholder="全部区域" @change="dq">
                  <el-option
                    v-for="item in dqoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </span>
            </span>
          </span>
          <span v-else>
            <span v-if="userRole=='3'"></span>
            <span v-else-if="userRole=='4'"></span>
            <span v-else>
              <span class="xzdq">
              <el-select v-model="dqvalue" placeholder="全部区域" @change="dq">
                <el-option
                  v-for="item in gsoption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </span>
            </span>
          </span>
          <span class='label3'>风险评分</span>
          <span class="fxpgxz">
             <el-select v-model="value11">
              <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <span class="fz">
              <el-input v-if="value11==''" v-model="input" placeholder="请选择条件"
                        oninput="if(this.value){if(this.value.length==1){this.value=this.value.replace(/[^0-9]/g,'')}else{this.value=this.value.replace(/[^0-9]/g,'')}}" @keydown.enter.native="sxcx"></el-input>
              <el-input v-else  v-model="input" placeholder="请输入分值"
                        oninput="if(this.value){if(this.value.length==1){this.value=this.value.replace(/[^0-9]/g,'')}else{this.value=this.value.replace(/[^0-9]/g,'')}}" @keydown.enter.native="sxcx"></el-input>
              <span style="position:absolute;top:3px;right: 0px;font-size: 22px;margin-right: 10px;color:#dcdfe6;cursor: pointer;" class="iconfont icon-shaixuan" @click="sxcx"></span>
            </span>
          </span>
          <!--<div class="cxan">
            <el-row>
              <el-button type="primary" plain @click="sxcx">查询</el-button>
            </el-row>
          </div>-->
        </div>
      </div>
      <div class="listbody">
        <div class="tablediv" style="padding-top: 20px;">
          <el-table v-loading="loading" :data="tableData" @sort-change='sortChange' highlight-current-row style="width:100%">
            <el-table-column min-width="8%" label="网络号" style="white-space: nowrap;overflow: hidden;">
              <template slot-scope="scope">
                <span style="width:100%;word-break: break-word;" v-html="scope.row.groupId"></span>
              </template>
            </el-table-column>
            <el-table-column min-width="10%" label="网络案件数" style="white-space: nowrap;overflow: hidden;">
              <template slot-scope="scope">
                <span style="width:100%;word-break: break-word;">{{ scope.row.taskCount}}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="13%" label="归属机构案件数" style="white-space: nowrap;overflow: hidden;">
              <template slot-scope="scope">
                <span style="width:100%;word-break: break-word;">{{ scope.row.userTaskCount}}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="12%" label="风险评分" sortable="custom" style="white-space: nowrap;overflow: hidden;">
              <template slot-scope="scope" sortable>
                <span style="width:100%;word-break: break-word;" v-html="scope.row.riskMark">{{ scope.row.riskMark }}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="16%" label="涉案机构" style="white-space: nowrap;overflow: hidden;">
              <template slot-scope="scope">
                <span style="width:100%;word-break: break-word;">{{scope.row.owerOrgs}}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="9%" label="查阅次数" style="width: 10%;white-space: nowrap;overflow: hidden;">
              <template slot-scope="scope">
                <span style="width:100%;word-break: break-word;"></span>
                <span v-if="scope.row.checkNums=='0'" style="width:100%;word-break: break-word;color:#f56c6c;">0</span>
                <span v-else style="width:100%;word-break: break-word;color:#46be8a;">{{scope.row.checkNums}}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="24%" label="操作">
              <template slot-scope="scope">
                <el-button @click="echartscavas(scope.row)" type="text" size="small">图谱展示</el-button>
                <el-button @click="handlepurchase(scope.row)" type="text" size="small">案件标识</el-button>
                <el-button v-if="ajyjflag" @click="CaseNumber(scope.row)" type="text" size="small">案件移交</el-button>
                <!--<el-button @click="CaseNumber(scope.row)" type="text" size="small">案件移交</el-button>-->
              </template>
            </el-table-column>
          </el-table>
          <div class="dialog">
              <el-dialog
              title=""
              :visible.sync="dialogVisible1">
                  <div class="Identificationwrap">
                    <div class="listbody1">
                      <div class="listbody">
                        <div>
                          <h4 style="display: flex;align-items: center;" class="tit">
                            <span style="flex: 1;">案件标识</span>
                            <el-row>
                              <el-button type="primary" @click="xz">新增案件 <span style="width: 0; height: 0;border-left: 5px solid transparent;
            border-right:5px solid transparent;border-top: 5px solid #fff;"></span></el-button>
                            </el-row>
                          </h4>
                          <ul v-if="flag" class="flagul">
                            <li class="flagli" v-for="item in option" @click="itegroup(item)">{{item.registNo}}</li>
                          </ul>
                        </div>
                        <div class="tablediv">
                          <el-table v-loading="loading" :data="tableData1" border highlight-current-row style="width:100%">
                            <el-table-column min-width="16%" label="报案号" style="white-space: nowrap;overflow: hidden;">
                              <template slot-scope="scope">
                                <span style="width:100%;word-break: break-word;" v-html="scope.row.registNo"></span>
                              </template>
                            </el-table-column>
                            <el-table-column min-width="18%" label="案件性质" style="white-space: nowrap;overflow: hidden;">
                              <template slot-scope="scope">
                                <el-select v-if="scope.row.registNo==''" disabled  v-model="scope.row.caseNature">
                                  <el-option
                                    v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                                <el-select v-else v-model="scope.row.caseNature">
                                  <el-option
                                    v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column min-width="18%" label="涉案金额" style="white-space: nowrap;overflow: hidden;">
                              <template slot-scope="scope">
                                <div>
                                  <el-input v-if="scope.row.registNo==''" disabled v-model="scope.row.involveMoney"
                                            oninput="if(this.value){if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/[^\d^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.')}}">
                                    <template slot="append">元</template>
                                  </el-input>
                                  <el-input v-else v-model="scope.row.involveMoney"
                                            oninput="if(this.value){if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/[^\d^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.')}}">
                                    <template slot="append">元</template>
                                  </el-input>
                                </div>
                              </template>
                            </el-table-column>
                            <el-table-column min-width="18%" label="减损金额" style="white-space: nowrap;overflow: hidden;">
                              <template slot-scope="scope">
                                <div>
                                  <el-input v-if="scope.row.registNo==''" disabled v-model="scope.row.derogationMoney"
                                            oninput="if(this.value){if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/[^\d^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.')}}">
                                    <template slot="append">元</template>
                                  </el-input>
                                  <el-input v-else v-model="scope.row.derogationMoney"
                                            oninput="if(this.value){if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/[^\d^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.')}}">
                                    <template slot="append">元</template>
                                  </el-input>
                                </div>
                              </template>
                            </el-table-column>
                            <el-table-column min-width="18%" label="备注" style="width: 10%;white-space: nowrap;overflow: hidden;">
                              <template slot-scope="scope">
                                <el-input v-if="scope.row.registNo==''" disabled
                                  v-model="scope.row.caseRemark"
                                  clearable>
                                </el-input>
                                <el-input v-else
                                  v-model="scope.row.caseRemark"
                                  clearable>
                                </el-input>
                              </template>
                            </el-table-column>
                            <el-table-column min-width="12%" label="操作">
                              <template slot-scope="scope">
                                <el-button v-if="scope.row.registNo==''" type="text" size="small"></el-button>
                                <el-button v-else @click="delecte(scope.row)" type="text" size="small">删除</el-button>
                              </template>
                            </el-table-column>
                          </el-table>
                        </div>
                      </div>
                      <div style="text-align: center;padding: 25px;">
                        <el-row>
                          <el-button type="primary" @click="commit">确定</el-button>
                          <el-button @click="caseqx">取消</el-button>
                        </el-row>
                      </div>
                    </div>
                  </div>
            </el-dialog>
          </div>
          <div class="dialog">
            <el-dialog
              title="案件移交"
              :visible.sync="dialogVisible2">
                <div class="LowerHairbody">
                  <div class="LowerHairbody1">
                    <div class="tablediv">
                      <div class="jgdiv">
                        <span v-if="userRole=='3'"></span>
                        <span v-else-if="userRole=='4'"></span>
                        <span v-else>
                          <span>保险公司</span>
                          <el-select v-model="gsjg" placeholder="请选择">
                            <el-option
                              v-for="item in option1"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                             </el-option>
                           </el-select>
                        </span>
                        <span style="margin-left: 20px;">人员名称</span>
                        <el-input v-model="rymc" placeholder="请输入人员名称"></el-input>
                        <el-button type="primary" plain @click="jgcx">查询</el-button>
                      </div>
                      <el-table v-loading="loading" :data="tableData3" tooltip-effect="dark" style="width: 100%">
                        <el-table-column
                          label="保险公司"
                          min-width="30%">
                          <template slot-scope="scope">{{ scope.row.orgName }}</template>
                        </el-table-column>
                        <el-table-column
                          label="人员名称"
                          min-width="20%">
                          <template slot-scope="scope">{{ scope.row.userName }}</template>
                        </el-table-column>
                        <el-table-column
                          label="移交时间"
                          min-width="30%">
                          <template slot-scope="scope">{{ scope.row.appointTime}}</template>
                        </el-table-column>
                        <el-table-column
                          label="操作"
                          min-width="20%">
                          <template slot-scope="scope">
                            <span v-if="scope.row.appointStatus=='1'" style="width:100%;word-break: break-word;color:#46be8a;">已移交</span>
                            <span v-else style="width:100%;word-break: break-word;color:#6AA6FD;cursor: pointer;" @click="handleSelectionChange(scope.row)">移交</span>
                            <!--<el-button v-if="scope.row.appointStatus=='1'" type="text" size="small" style="width:100%;word-break: break-word;color:#46be8a;">已移交</el-button>-->
                            <!--<el-button v-else @click="handleSelectionChange(scope.row)" type="text" size="small">未移交</el-button>-->
                          </template>
                        </el-table-column>
                      </el-table>
                    </div>
                  </div>
                </div>
            </el-dialog>
          </div>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible5"
            width="30%">
            <span>是否确认移交</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible5 = false">取 消</el-button>
              <el-button type="primary" @click="catch1">确 定</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="block">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChange" :current-page.sync="currentPage"
                         :page-sizes="sizes"
                         :page-size="pagesize"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="total" v-if="total!=0">
          </el-pagination>
        </div>
      </div>
    </div>
	</div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.css"></style>
