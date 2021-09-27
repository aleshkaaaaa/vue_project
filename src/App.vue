<template>
  <div id="app">
    <header>
      <div class="header">My Personal costs</div>
    </header>
    <main>
      <div>
        <br>
        <button @click="show=!show">ADD NEW COST +</button>
      </div>
      <div>
        <br>
          <add-payment-form v-if="show" @emitName="methodName" :categoryList="getCategoryList"/>
        <br>
        <div class="about"><h4>#</h4><h4>Date</h4><h4>Category</h4><h4>Value</h4></div>
        <hr class="hr">
        <PaymentDisplay show-items :items="paymentsList" />
      </div>
    </main>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentDisplay from './components/PaymentDisplay.vue'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddPaymentForm
  },
  data: () => ({
    fields: {},
    show: false
  }),
  computed: {
    ...mapGetters([
      'getPaymentsList',
      'getCategoryList'
    ]),
    getFPV () {
      return this.$store.getters.getPaymentsListFullPrice
    },
    paymentsList () {
      return this.$store.getters.getPaymentsList
    }
  },
  methods: {
    ...mapMutations({
      addData: 'setPaymentsListData'
    }),
    methodName (data) {
      this.$store.commit('addDataToPaymentsList', data)
    }
  },
  created () {
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  font-size: 30px;
}
.hide {
  display: none;
}
.about {
  display: flex;
  justify-content: space-between;
  margin: 0 150px 0 150px;
}

</style>
