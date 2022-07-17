<template>
  <div class="siderBar">
    <h2>开心四个换域名后台</h2>
    <div class="siderBar-icon">
        <div><i class="el-icon-s-home"></i></div>
        <div><i class="el-icon-document-remove"></i></div>
        <div><i class="el-icon-delete-solid"></i></div>
        <div><i class="el-icon-setting"></i></div>
    </div>
    <el-menu
        class="siderBar-menu"
        :default-active="'5-1'"
        @open="handleOpen"
        @close="handleClose"
        active-text-color="#5D5F5B"
    >
        <menuTree :menuData="menuList"/>
    </el-menu>
  </div>
</template>
<script>
import menuTree from './menuTree.vue'
export default {
  name: "siderBar",
  components:{
    menuTree,
  },
  data(){
    return {
        menuList:[{
                path: '/',
                name: 'home',
                label: '设置',
                icon: 'el-icon-s-tools',
                url: 'Home/Home',
                index:'1'
              },
              {
                path: '/video',
                name: 'video',
                label: '演示插件',
                icon: 'el-icon-video-camera-solid',
                url: 'VideoManage/VideoManage',
                index:'2'
              },
              {
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon: 'el-icon-user-solid',
                url: 'UserManage/UserManage',
                index:'3'
              },
              {
                label: '插件中心',
                icon: 'el-icon-upload',
                index:'4',
                children: [{
                        path: '/page1',
                        name: 'page1',
                        label: '插件信息',
                        icon: 'el-icon-caret-right',
                        index:'4-1',
                        url: 'Other/PageOne'
                    },
                    {
                        label: '插件管理',
                        icon: 'el-icon-s-operation',
                        index:'4-2',
                        url: 'Other/PageTwo',
                        children:[{
                            path: '/page',
                            name: 'page1',
                            label: '插件设置',
                            icon: 'el-icon-caret-right',
                            index:'4-2-2',
                        }]
                    }]
                },{
                label: '下载地址管理',
                icon: 'el-icon-s-platform',
                index:'5',
                children: [{
                        path: '/urlEdit',
                        name: 'urlEdit',
                        label: '下载地址管理',
                        icon: 'el-icon-caret-right',
                        index:'5-1',
                    },
                    ]
                }
            ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped lang="scss">
.siderBar{
    overflow: hidden;
     >h2{   
            line-height: 40px;
            text-align: center;
            background: rgb(1, 1, 196);
            font-size: 16px;
            color: #fff;
        }
    .siderBar-icon{
        display: flex;
        color: #fff;
        background: rgb(250,250,250);
        border-bottom: 2px solid #efefef;
        justify-content: center;
        >div{
            margin: 5px;
            border-radius: 5px;
            background-color: red;
            width: 25px;
            text-align: center;
            cursor: pointer;
        }
    }
    .siderBar-menu{
        min-height: calc(100vh - 40px);
    }
    ::v-deep .el-menu-item:focus,::v-deep .el-menu-item:hover,::v-deep .el-submenu__title:hover{
        background-color: #efefef;
    }
}
</style>
