<template>
  <div class="appHome">
    <div class="top-tabs">
      <div class="tab-item">管理列表</div>
      <div class="addBtn" @click="addFn">添加</div>
    </div>
    <div class="serchBox">
      <span style="font-size: 12px; margin-right: 5px">备注: </span>
      <el-input
        v-model="input"
        placeholder="请输入备注或app名称"
        size="mini"
        style="width: 200px; margin-right: 10px"
      >
      </el-input>
      <el-button type="primary" size="mini">搜索</el-button>
      <el-button type="danger" size="mini">清空</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      @selection-change="handleSelectionChange"
      style="width: 100%"
    >
      <el-table-column type="selection" align="center" width="40">
      </el-table-column>
      <el-table-column prop="date" label="内置域名" width="250">
      </el-table-column>
      <el-table-column prop="appName" label="app名称" width="80">
      </el-table-column>
      <el-table-column prop="remark" align="center" label="备注" width="80">
      </el-table-column>
      <el-table-column prop="andAddress" label="安装下载地址" width="250">
      </el-table-column>
      <el-table-column prop="iosAddress" label="苹果下载地址" width="250">
      </el-table-column>
      <el-table-column prop="date" label="创建时间" width="120">
      </el-table-column>
      <el-table-column prop="name" label="创建人" width="80"> </el-table-column>
      <el-table-column prop="update" label="最后修改时间" width="120">
      </el-table-column>
      <el-table-column prop="upName" label="最后修改人" width="80">
      </el-table-column>
      <el-table-column label="操作" width="80">
        <template #default="scope">
          <el-button type="primary" size="mini" @click="openEidt"
            >编辑</el-button
          >
          <el-button
            type="danger"
            style="margin: 5px 0"
            size="mini"
            @click="deleteFn(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button
      type="danger"
      style="margin-top: 20px"
      size="mini"
      @click="deleteFn"
      >批量删除</el-button
    >
    <el-dialog :title="title" :visible.sync="open">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="110">
          <el-input v-model="form.name" autocomplete="off" style="width:230px"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="110">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editableTabsValue: "2",
      tabIndex: 2,
      input: "",
      open:false,
      form:{},
      title:'',
      tableData: [
        {
          date: "2016-05-02 10:22",
          update: "2016-05-03 10:22",
          name: "王小虎",
          upName: "admin",
          appName: "俄罗斯大转盘",
          andAddress: "https://www.baidu.com/?tn",
          iosAddress: "https://www.google.com/",
          remark: "的撒的撒发生",
        },
        {
          date: "2016-05-02 10:22",
          update: "2016-05-03 10:22",
          appName: "俄罗斯大转盘",
          name: "王小虎",
          upName: "王小虎",
          andAddress: "https://www.baidu.com/?tn",
          iosAddress: "https://www.google.com/",
          remark: "的撒的撒发生",
        },
        {
          date: "2016-05-02 10:22",
          update: "2016-05-03 10:22",
          appName: "大力出奇迹",
          name: "王小虎",
          upName: "王小虎",
          andAddress: "https://www.baidu.com/?tn",
          iosAddress: "https://www.google.com/",
          remark: "的撒的撒发生",
        },
        {
          date: "2016-05-02 10:22",
          update: "2016-05-03 10:22",
          appName: "大乱斗去",
          name: "王小虎",
          upName: "王小虎",
          andAddress: "https://www.baidu.com/?tn",
          iosAddress: "https://www.google.com/",
          remark: "的撒的撒发生",
        },
      ],
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    openEidt() {
      this.open = true;
      this.title ='修改详情'
    },
    deleteFn() {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
    },
    addFn(){
      this.title = '添加域名'
      this.open = true
    },
    cencel(){
      this.open = true;
      this.form = {};
    }
  },
};
</script>
<style lang="scss" scoped>
.appHome {
  .top-tabs {
    width: 100%;
    border-bottom: 1px solid #e4e7ed;
    height: 40px;
    display: flex;
    color: #303133;
    line-height: 40px;
  }
  .tab-item {
    box-sizing: border-box;
    padding: 0 5px;
    border: 1px solid #e4e7ed;
    border-bottom: 1px solid #fff;
    margin-bottom: -1px;
    border-radius: 5px 5px 0 0;
  }
  .addBtn {
    color: rgb(105, 144, 185);
    padding: 0 15px;
    cursor: pointer;
  }
  .serchBox {
    margin: 20px 0;
    display: flex;
    align-items: center;
    background: #efefef;
    padding: 10px;
    border: 1px solid #e4e7ed;
    border-radius: 5px;
  }
  ::v-deep .el-table thead {
    color: rgb(94, 93, 88);
    > tr > th > .cell {
      font-weight: 800;
    }
  }
}
</style>
