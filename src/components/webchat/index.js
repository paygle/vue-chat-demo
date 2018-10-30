import Vue from 'vue'
import WebChat from './main.vue'

export default {
  data() {
    return {
      instance: null
    }
  },
  methods: {
    initInstance() {
      const WebChatConstructor = Vue.extend(WebChat)
      this.instance = new WebChatConstructor({
        el: document.createElement('div'),
        store: this.$store
      })
    },
    WebChat(options = {}) {
      if (!this.instance) {
        this.initInstance()
      }

      if (!this.instance.visible) {
        for (let prop in options) {
          if (options.hasOwnProperty(prop)) {
            this.instance[prop] = options[prop]
          }
        }
        document.body.appendChild(this.instance.$el)
      }
    },

    open() {
      if (this.instance) {
        this.instance.doOpen()
      } else {
        this.WebChat()
      }
      this.instance.visible = true
    },

    close() {
      if (this.instance) {
        this.instance.doClose()
        this.instance.visible = false
      }
    }
  }
}
