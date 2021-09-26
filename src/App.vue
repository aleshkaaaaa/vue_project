<template>
  <div id="app">
    <header>
      <div class="header">My Personal costs</div>
    </header>
    <main>
      Total Price : {{ getFPV }}
      <add-payment-form @emitName="methodName" :categoryList="getCategoryList"/>
      <PaymentDisplay show-items :items="paymentsList" />
      {{ fields }}
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
    fields: {}
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
  color: red;
}
</style>
