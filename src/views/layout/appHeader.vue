<template>
    <div class="app-head">
        <ul class="head-tabs">
            <li>首页</li>
            <li class="active">下载地址管理</li>
        </ul>
        <div class="head-user">
            <i class="el-icon-refresh"></i>
            <el-avatar :size="30" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"></el-avatar>
            <el-dropdown>
                <span class="el-dropdown-link">
                    欢迎,admin<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .app-head{
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 12px;
        color: #fff;
        background: rgba(2,111,196,1);
        height: 40px;
        .head-tabs{
            display: flex;
            line-height: 40px;
            margin-right: auto;
            li{
                width:85px ;
                &.active{
                    background: rgb(0, 0, 0,0.1);
                }
            }
        }
        .head-user{
            margin-right: 15px;
            display: flex;
            align-items: center;
            .el-icon-refresh{
                font-size:14px;
                font-weight:800;
                margin: 20px;
            }
            ::v-deep .el-dropdown{
                margin-left: 10px;
                color: #fff;
            }
        }
    }
</style>
