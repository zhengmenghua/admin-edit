<template>
  <div>
    <template v-for="(item) in menuData">
      <el-submenu v-if="item.children" :index="item.index" :key="item.url">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </template>
        <menuTree :menuData="item.children"/>
      </el-submenu>
      <el-menu-item v-else :index="item.index" :key="item.url" @click="changeRouter(item)">
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
export default {
  name: 'menuTree',
  props: {
    menuData: {
      type: Array,
      default: []
    }
  },
  methods:{
    changeRouter(item){
      if(item.path!==this.$route.path){
        this.$router.push(item.path);
      }
    }
  }
}
</script>
