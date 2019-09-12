<template>
    <div id="teacher">
        <div class="topbox">
            <div class="boxone">
                <h2>全部老师</h2>
                <div class="boxone_box">
                    <p><span>乐器</span>&nbsp;<span>x</span></p>
                    <p><span>乐器</span>&nbsp;<span>x</span></p>
                    <p><span>乐器</span>&nbsp;<span>x</span></p>
                    <p><span>乐器</span>&nbsp;<span>x</span></p>
                </div>
            </div>
            <div class="boxtwo">
                <h2>授课类型</h2>
                <div class="boxtwo_box">
                    <p :class="{active:pflag == ''}" @click="checkedClasify('')">不限</p>
                    <p :class="{active:pflag == 2}" @click="checkedClasify(2)">小学课程</p>
                    <p :class="{active:pflag == 3}" @click="checkedClasify(3)">初中课程</p>
                    <p :class="{active:pflag == 4}" @click="checkedClasify(4)">高中课程</p>
                    <p :class="{active:pflag == 5}" @click="checkedClasify(5)">兴趣特长</p>
                </div>
            </div>
            <div class="boxtwo">
                <h2>授课科目</h2>
                <div :class="{boxtwo_box:true,active2:flag2}">
                    <p :class="{active:boxflag == -1}" @click="checkedbox('')" >不限</p>
                    <p :class="{active:boxflag == index}" @click="checkedbox(item.classifyName,index)" v-for="(item,index) in classify_list" :key="index">{{item.classifyName}}</p>
                </div>
                <div class="shouqi" @click="hiddenbox"><span v-if="!flag2">收起</span><span v-else>展开</span>
                    <img v-if="!flag2" src="./../../../static/img/teacher/收起.png" alt="">
                    <img v-else src="./../../../static/img/teacher/展开.png" alt="">
                </div>
            </div>
            <div class="boxtwo">
                <h2>上门区域</h2>
                <div class="boxtwo_box">
                    <p>不限</p>
                    <p>未央区</p>
                    <p>长安区</p>
                    <p>咸阳</p>
                    <p>临潼区</p>
                </div>
            </div>
            <div class="boxtwo">
                <h2>上课方式</h2>
                <div class="boxtwo_box">
                    <p>不限</p>
                    <p>老师上门</p>
                    <p>学生上门</p>
                </div>
            </div>
            <div class="boxtwo">
                <h2>老师性别</h2>
                <div class="boxtwo_box">
                    <p>不限</p>
                    <p>男</p>
                    <p>女</p>
                </div>
            </div>
        </div>
        <!-- 教员列表 -->
        <div class="middlebox">
            <h1>符合条件的老师</h1>
            <p>
                <span>智能排序</span>
                <span>好评数</span>
                <span>价格最高</span>
                <span>价格最低</span>
                <span>教龄最长</span>
                <span>最新入库</span>
            </p>
        </div>
        <div class="teacherlist">
            <div class="onebox" v-for="(item,index) in teacherList" :key="index">
                <div class="picbox">
                    <img src="./../../../static/img/teacher/t1.png" alt="">
                </div>
                <div class="msgbox">
                    <p class="namebox">李老师<span>{{item.teachTeacher.school}}</span><span class="schoolbox">{{item.teachTeacher.grade}}</span></p>
                    <p class="namebox namemiddlebox">初中数学/高中数学</p>
                    <p>
                        <span class="primybox">{{item.teachTeacher.honor}}</span>
                    </p>
                </div>
                <div class="conbox">
                    <div>授课<span class="hour">&nbsp;{{item.teachTeacher.durationTime}}&nbsp;</span>小时</div>
                    <div class="teacherdetail" @click="to_detail">教员详情<img src="./../../../static/img/teacher/＞.png" alt=""> </div>
                </div>
            </div>
            <div class="footerbox">
                <el-pagination background layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        data() {
            return {
                pflag:'',
                boxflag:-1,
                flag2: false,
                classify_list:[],
                teacherList:[]
            }
        },
        mounted(){
            this.checkedClasify('');
            this.getTeacher()
        },
        methods: {
            hiddenbox() {
                this.flag2 = !this.flag2
            },
            to_detail(){
                this.$router.push({
                    path:'teacherdetail'
                })
            },
            checkedClasify(i){
                this.pflag = i;
                axios.get('/api/teach/classify/list?pid='+i).then(res => {
                    this.classify_list = res.data.data.content;
                })
            },
            checkedbox(name,i){
                this.boxflag = i;
            },
            getTeacher(){
                let params = {

                }
                axios.get('/api/teach/teacher/listUTeacher').then(res => {
                    this.teacherList = res.data.data.list

                    console.log(JSON.stringify(this.teacherList))
                })
            }
        }
    }

</script>
<style scoped>
    #teacher {
        padding-top: 90px;
        box-sizing: border-box;
        background: #F4F4F4;
    }

    .topbox {
        background: #ffffff;
        margin: 0 auto;
        width: 1024px;
        padding: 30px;
        box-sizing: border-box;
    }

    .boxone {
        display: flex;
        /* border: 1px solid red; */
        margin-bottom: 31px;
        box-sizing: border-box;
    }

    .boxone>h2 {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.7);
        width: 64px;
        padding-right: 20px;
    }

    .boxone_box {
        display: flex;
        color: #2EB268;
        font-size: 12px;
    }

    .boxone_box>p {
        border: 1px solid #2EB268;
        height: 17px;
        line-height: 17px;
        padding: 1px 12px;
        border-radius: 10px;
        margin-right: 10px;
        cursor: pointer;
    }

    .boxtwo {
        display: flex;
        /* border: 1px solid red; */
        /* margin-bottom: 31px; */
        box-sizing: border-box;
    }

    .boxtwo h2 {
        font-size: 15px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.5);
        width: 64px;
        min-width: 64px;
        padding-right: 20px;
    }

    .boxtwo_box {
        user-select: none;
        display: flex;
        flex-wrap: wrap;
        width: 815px;
    }
    .active{
        color: #2EB268 !important;
    }

    .active1 {
        height: 40px;
        overflow: hidden;
    }

    .active2 {
        height: 40px;
        overflow: hidden;
    }

    .boxtwo_box p {
        font-size: 13px;
        height: 17px;
        text-align: center;
        line-height: 17px;
        padding: 1px 12px;
        color: #333;
        color: rgba(0, 0, 0, 0.87);
        margin-right: 10px;
        margin-bottom: 25px;
        cursor: pointer;
    }

    .shouqi {
        user-select: none;
        font-size: 13px;
        color: #999;
        cursor: pointer;
    }

    .middlebox {
        width: 1024px;
        box-sizing: border-box;
        height: 50px;
        display: flex;
        align-items: center;
        margin: 0 auto;
        margin-top: 30px;
    }

    .middlebox h1 {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        opacity: 0.87;
    }

    .middlebox p {
        padding-left: 100px;
    }

    .middlebox p span {
        font-size: 12px;
        font-family: Microsoft YaHei;
        color: rgba(46, 178, 104, 1);
        display: inline-block;
        margin-right: 20px;
    }

    .teacherlist {
        width: 1024px;
        box-sizing: border-box;
        margin: 0 auto;
        background: #ffffff;
        padding: 20px 30px 70px 30px;
    }

    .onebox {
        height: 200px;
        display: flex;
        border-bottom: 1px solid #E0E0E0;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }

    .picbox {
        width: 200px;
        height: 200px;
    }

    .picbox img {
        width: 100%;
        height: 100%;
    }

    .msgbox {
        width: 500px;
        padding: 35px 38px;
        box-sizing: border-box;
    }

    .namebox {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.87);
    }

    .namebox span {
        font-weight: normal;
        color: rgba(0, 0, 0, 0.8);
        margin-left: 30px;
    }

    .schoolbox {
        font-size: 12px;
        margin-left: 15px !important;
    }

    .namemiddlebox {
        padding: 32px 0;
        box-sizing: border-box;
    }

    .primybox {
        color: #2EB268;
        border: 1px solid #2EB268;
        font-size: 12px;
        border-radius: 7px;
        padding: 2px 7px;
    }

    .conbox {
        padding: 35px 10px;
        box-sizing: border-box;
        width: 243px;
    }

    .conbox div {
        text-align: right;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
    }

    .conbox div span {
        color: #2EB268;
    }

    .teacherdetail {
        font-size: 12px !important;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.54) !important;
        margin-top: 88px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .footerbox{
        text-align: center;
    }

</style>
