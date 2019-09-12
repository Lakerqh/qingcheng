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
                <div class="boxtwo_box">
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
            </div>
            <div class="boxtwo">
                <h2>授课科目</h2>
                <div class="boxtwo_box">
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
    </div>
</template>
<style>
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
    .boxtwo{
        display: flex;
        /* border: 1px solid red; */
        /* margin-bottom: 31px; */
        box-sizing: border-box;
    }
    .boxtwo h2{
        font-size: 15px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.5);
        width: 64px;
        min-width: 64px;
        padding-right: 20px;
    }
     .boxtwo_box {
        display: flex;
        flex-wrap: wrap;
    }
    .boxtwo_box p{
        font-size: 13px;
        height: 17px;
        text-align: center;
        line-height: 17px;
        padding: 1px 12px;
        color: #333;
        color:rgba(0,0,0,0.87);
        margin-right: 10px;
        margin-bottom: 25px;
        cursor: pointer;
    }

</style>
