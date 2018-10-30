<template>
  <div class="home">
    <el-button @click="chatting">在线聊天</el-button>
  </div>
</template>

<script>
import WebChat from 'components/webchat'

export default {
  name: 'chat-demo',
  mixins: [WebChat],
  data() {
    return {
      chat: null
    }
  },
  methods: {
    chatting() {
      this.open()
    }
  }
}
</script>
<style lang="less">
 ul{
  padding: 0;
 }
 li{
  list-style: none;
  text-align: left;
 }

</style>
