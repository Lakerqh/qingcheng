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
                    <p>不限</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                </div>
            </div>
            <div class="boxtwo">
                <h2>授课年级</h2>
                <div :class="{boxtwo_box:true,active1:flag1}">
                    <p>不限</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                </div>
                <div class="shouqi" @click="hiddenbox1"><span v-if="!flag1">收起</span><span v-else>展开</span>
                    <img v-if="!flag1" src="./../../../static/img/teacher/收起.png" alt="">
                    <img v-else src="./../../../static/img/teacher/展开.png" alt="">
                </div>
            </div>
            <div class="boxtwo">
                <h2>授课科目</h2>
                <div :class="{boxtwo_box:true,active2:flag2}">
                    <p>不限</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
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
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
                    <p>小学</p>
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
            <div class="onebox">
                <div class="picbox">
                    <img src="./../../../static/img/teacher/t1.png" alt="">
                </div>
                <div class="msgbox">
                    <p class="namebox">陈老师 <span>西安电子科技大学</span><span class="schoolbox">本科</span></p>
                    <p class="namebox namemiddlebox">初中数学/高中数学</p>
                    <p>
                        <span class="primybox">数模比赛第一</span>
                        <span class="primybox">数模比赛第一</span>
                        <span class="primybox">数模比赛第一</span>
                    </p>
                </div>
                <div class="conbox">
                    <div>授课<span class="hour">&nbsp;256&nbsp;</span>小时</div>
                    <div class="teacherdetail">教员详情<img src="./../../../static/img/teacher/＞.png" alt=""> </div>
                </div>
            </div>
            <div class="onebox">
                <div class="picbox">
                    <img src="./../../../static/img/teacher/t1.png" alt="">
                </div>
                <div class="msgbox">
                    <p class="namebox">陈老师 <span>西安电子科技大学</span><span class="schoolbox">本科</span></p>
                    <p class="namebox namemiddlebox">初中数学/高中数学</p>
                    <p>
                        <span class="primybox">数模比赛第一</span>
                        <span class="primybox">数模比赛第一</span>
                        <span class="primybox">数模比赛第一</span>
                    </p>
                </div>
                <div class="conbox">
                    <div>授课<span class="hour">&nbsp;256&nbsp;</span>小时</div>
                    <div class="teacherdetail">教员详情<img src="./../../../static/img/teacher/＞.png" alt=""> </div>
                </div>
            </div>
            <div class="onebox">
                <div class="picbox">
                    <img src="./../../../static/img/teacher/t1.png" alt="">
                </div>
                <div class="msgbox">
                    <p class="namebox">陈老师 <span>西安电子科技大学</span><span class="schoolbox">本科</span></p>
                    <p class="namebox namemiddlebox">初中数学/高中数学</p>
                    <p>
                        <span class="primybox">数模比赛第一</span>
                        <span class="primybox">数模比赛第一</span>
                        <span class="primybox">数模比赛第一</span>
                    </p>
                </div>
                <div class="conbox">
                    <div>授课<span class="hour">&nbsp;256&nbsp;</span>小时</div>
                    <div class="teacherdetail">教员详情<img src="./../../../static/img/teacher/＞.png" alt=""> </div>
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
    export default {
        data() {
            return {
                flag1: false,
                flag2: false,
            }
        },
        methods: {
            hiddenbox1() {
                this.flag1 = !this.flag1
            },
            hiddenbox() {
                this.flag2 = !this.flag2
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
    }
    .footerbox{
        text-align: center;
    }

</style>
