<template>
    <div id="home">
        <div class="header">
            <div class="logobox"><img src="./../../static/img/home/LOGO.png">青橙家教</div>
            <div class="address"><img src="./../../static/img/home/address.png">西安</div>
            <div class="nav">
                <span :class="{active:flag == 0}" @click="changeNav(0)">首页</span>
                <span :class="{active:flag == 1}" @click="changeNav(1)">关于我们</span>
                <span :class="{active:flag == 2}" @click="changeNav(2)">青橙教员</span>
                <span :class="{active:flag == 3}" @click="changeNav(3)">联系我们</span>
            </div>
            <div class="link">
                <img src="./../../static/img/home/QQ.png">
                <img src="./../../static/img/home/wechat.png">
                <span>登录</span>
            </div>
        </div>
        <div>
            <router-view/>
        </div>
        <div class="footer">

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            flag:0,
            nav_list:['homepage','homepage','teacher']
        }
    },
    methods:{
        changeNav(i){
            this.flag = i
            this.$router.push({
                path: this.nav_list[i]
            })
        }
    }
}
</script>
<style scoped>
    #home{
        width: 1440px;
        margin: 0 auto;
        box-shadow: 0 1px 3px #999;
    }
    .header{
        z-index: 9999;
        width: 1300px;
        position: fixed;
        height: 60px;
        background:rgba(0,0,0,0.7);
        padding: 0 70px;
        display: flex;
        justify-content: space-between;
        color: #ffffff;
        font-size: 14px;
        cursor: default;
    }
    .logobox{
        width: 130px;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .address{
        width: 54px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .nav{
        padding-left: 30px;
        box-sizing: border-box;
        width: 800px;
        display: flex;
        align-items: center;
    }
    .nav>span{
        display: inline-block;
        width: 108px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        cursor: pointer;
    }
    .active{
        background: #2EB268;
    }
    .link{
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .link>span{
        display: inline-block;
        border-radius: 5px;
        padding: 6px 12px;
        background: #2EB268;
        cursor: pointer;
    }
</style>