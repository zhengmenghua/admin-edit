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
      <el-button type="primary" size="mini" @click="serchFn">搜索</el-button>
      <el-button type="danger" size="mini" @click="resetQuery">清空</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      @selection-change="handleSelectionChange"
      style="width: 100%"
    >
      <el-table-column type="selection" align="center" width="40">
      </el-table-column>
      <el-table-column prop="inner_url" label="内置域名" width="250">
      </el-table-column>
      <el-table-column prop="app_name" label="app名称" width="80">
      </el-table-column>
      <el-table-column prop="remark" align="center" label="备注" width="80">
      </el-table-column>
      <el-table-column prop="android_url" label="安卓下载地址" width="250">
      </el-table-column>
      <el-table-column prop="ios_url" label="苹果下载地址" width="250">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="创建时间"
        width="120"
        :formatter="formatTime"
      >
      </el-table-column>
      <el-table-column prop="createadmin" label="创建人" width="80">
      </el-table-column>
      <el-table-column prop="save-time" label="最后修改时间" width="120">
      </el-table-column>
      <el-table-column prop="saveadmin" label="最后修改人" width="80">
      </el-table-column>
      <el-table-column label="操作" width="80">
        <template #default="scope">
          <el-button type="primary" size="mini" @click="openEidt(scope.row)"
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
      @click="deleteFn()"
      >批量删除</el-button
    >
    <el-dialog :title="title" :visible.sync="open" v-if="open" @close="cancel">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="内置域名" :label-width="'110px'" prop="inner_url">
          <el-input
            v-model="form.inner_url"
            autocomplete="off"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <el-form-item label="APP名称" :label-width="'110px'" prop="app_name">
          <el-input
            v-model="form.app_name"
            autocomplete="off"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="安卓下载地址"
          :label-width="'110px'"
          prop="android_url"
        >
          <el-input
            v-model="form.android_url"
            autocomplete="off"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <el-form-item label="ios下载地址" :label-width="'110px'" prop="ios_url">
          <el-input
            v-model="form.ios_url"
            autocomplete="off"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注信息" :label-width="'110px'" prop="remark">
          <el-input
            v-model="form.remark"
            autocomplete="off"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="活动区域" :label-width="'110px'">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import router from '@/router';
import { getUrlList, deleteUrl, addteUrl, updateteUrl } from "./api";
export default {
  data() {
    return {
      editableTabsValue: "2",
      tabIndex: 2,
      input: "",
      ids: [],
      open: false,
      form: {},
      title: "",
      tableData: [],
      rules: {
        inner_url: [
          { required: true, message: "请输入内置域名", trigger: "blur" },
        ],
        app_name: [
          { required: true, message: "请填写内置域名", trigger: "blur" },
        ],
        android_url: [
          { required: true, message: "请输入安卓下载地址", trigger: "blur" },
        ],
        ios_url: [
          { required: true, message: "请输入ios下载地址", trigger: "blur" },
        ],
        remark: [
          { required: true, message: "请填写备注信息", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    formatTime(row, column, cellval) {
      return this.$setTimeType(cellval * 1000, "yyyy-mm-dd-hh-mm");
    },
    handleSelectionChange(val) {
      this.ids = val.map((item) => {
        return item.id;
      });
    },
    getList(query) {
      getUrlList(query).then((res) => {
        this.tableData = res.data;
      });
    },
    openEidt(row) {
      this.open = true;
      this.title = "修改详情";
      this.form = row;
    },
    deleteFn(row) {
      this.$confirm("此操作将永久删除这些数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        let query;
        if (row) {
          query = { id: row.id };
        } else {
          query = { id: this.ids + "" };
        }
        deleteUrl(query).then(() => {
          this.getList();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        });
      });
    },
    addFn() {
      this.title = "添加域名";
      this.open = true;
    },
    serchFn() {
      this.getList({ remark: this.input });
    },
    resetQuery() {
      this.input = null;
      this.getList();
    },
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if(this.form.id){
            updateteUrl(this.form).then(()=>{
              this.$message.success('保存成功！');
              this.cancel();
              this.getList();
            })
          }else{
            addteUrl(this.form).then(()=>{
            this.$message.success('添加成功！');
            this.cancel();
            this.getList();
            })
          }
        }
      });
    },
    resetForm() {
      this.$refs['form'].resetFields();
    },
    cancel() {
      this.open = false;
      this.form = {};
    },
  },
  created() {
    this.getList();
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
