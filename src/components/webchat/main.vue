<script>
import ChatStore from './store'
import Card from './card'
import List from './list'
import ChatText from './text'
import Message from './message'
import { mapActions } from 'vuex'

export default {
  name: 'WebChat',
  components: { Card, List, ChatText, Message },
  data() {
    return {
      show: false
    }
  },
  methods: {
    ...mapActions('webchat', ['initData']),
    open() {
      this.show = true
    },
    close() {
      this.show = false
    },
    closeWindow() {
      this.show = false
    },
    miniWindow() {
      // this.show = false
    }
  },
  created() {
    if (!this.$store) {
      throw new Error('chat app need vuex import')
    }
    this.$store.registerModule('webchat', ChatStore)
    this.initData()
  }
}
</script>

<template>
<transition>
  <div v-if="show" class="web-chat-app">
    <div class="sidebar">
      <card></card>
      <list></list>
    </div>
    <div class="main">
      <div class="win-top">
        <i class="el-icon-minus" @click="miniWindow"></i>
        <i class="el-icon-close" @click="closeWindow"></i>
      </div>
      <message></message>
      <chat-text></chat-text>
    </div>
  </div>
</transition>
</template>

<style lang="less" scoped>
.win-top {
  height: 30px;
  line-height: 30px;
  text-align: right;

  i {
    font-size: 16px;
    font-weight: bold;
    margin-right: 5px;
    cursor: pointer;
    color: #666;
  }
  i:hover{
    color: #000;
  }
}

.web-chat-app {
  margin: 20px auto;
  width: 800px;
  height: 600px;
  border-radius: 3px;
  box-shadow: 0px 1px 30px 3px rgba(0,0,0,0.3);
  overflow: hidden;

  .sidebar,
  .main {
    height: 100%;
  }
  .sidebar {
    float: left;
    width: 200px;
    color: #f4f4f4;
    background-color: #2e3238;
  }
  .main {
    position: relative;
    overflow: hidden;
    background-color: #eee;
  }
  .text {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  .message {
    height: ~"calc(100% - 160px)";
  }
}
</style>
