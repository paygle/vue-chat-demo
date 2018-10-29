<template>
  <div class="home">
    <el-button @click="chatting">在线聊天</el-button>
    <web-chat ref='chat'></web-chat>
  </div>
</template>

<script>
import WebChat from 'components/webchat/main'

export default {
  name: 'chat-demo',

  components: {
    WebChat
  },

  data() {
    return {

    }
  },
  methods: {
    chatting() {
      this.$refs.chat.open()
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
