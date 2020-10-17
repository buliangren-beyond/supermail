<template>
  <div class="itm" @click="itemClick">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon-active"></slot></div>
    <div :style="styleActive"><slot name="text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TarBarItem",
      props: {
        path: String,
        styleColor:{
          type: String,
          default: 'red'
        }
      },
      data() {
          return {
            // isActive: true
          }
      },
      computed: {
        isActive() {
          return this.$route.path.indexOf(this.path) != -1
        },
        styleActive() {
          return this.isActive ? {color: this.styleColor} : {}
        }
      },
      methods: {
           itemClick() {
             this.$router.push(this.path)
           }
      }
    }
</script>

<style scoped>
  .itm {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .itm img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

</style>
