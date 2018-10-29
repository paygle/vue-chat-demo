<template>
  <div id="app" class="main-app">
    <div class="menu-wrap">
      <el-menu
        default-active="1"
        @open="handleOpen"
        @close="handleClose">
          <!-- <template slot="title">
            <i class="el-icon-menu"></i>
            <span>Web聊天</span>
          </template> -->
        <el-menu-item index="1">
          <router-link to="/">在线聊天</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main-wrapper">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
