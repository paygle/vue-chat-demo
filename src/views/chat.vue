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
      
    }
  },
  methods: {
    chatting() {
      this.openChat()
    }
  }
}
</script>
<style lang="less">

</style>
