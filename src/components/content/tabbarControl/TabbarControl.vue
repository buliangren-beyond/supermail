<template>
  <div class="tabbarControl">
    <div v-for="(item, index) in titles"
         class="tabbarControlItem"
         :class="{active: index === indexconfig}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabbarControl",
    data() {
      return {
        indexconfig: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemClick(index) {
        this.indexconfig = index
      }
    }
  }
</script>

<style scoped>
  .tabbarControl {
    display: flex;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    background-color: white;
  }
  .tabbarControlItem {
    flex: 1;

  }
  .tabbarControlItem span {
    padding: 15px;
  }
  .active {
    color: pink;
  }

  .active span {

    border-bottom: 3px solid pink;
  }
</style>
