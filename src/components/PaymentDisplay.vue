<template>
  <div>
    <div v-for="(item, idx) in items" :key="idx">
      <div class="allElements">
        <div calss="element">{{ idx+1 }}</div>
        <div calss="element">{{ item.date }}</div>
        <div calss="element">{{ item.type }}</div>
        <div calss="element">{{ item.amount }}</div>
      </div>
      <hr class="hr">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentDisplay',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    showItems: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
  .hr {
    margin: 0 130px 0 130px;
  }
  .allElements {
    margin: 10px 150px 10px 150px;
    display: flex;
    justify-content: space-between;
  }
  .element {
  }
</style>
