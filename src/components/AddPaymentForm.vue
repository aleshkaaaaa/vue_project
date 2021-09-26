<template>
  <div class="form">
    <input placeholder="Amount" v-model="amount" />
    <input placeholder="Date" v-model="date" />
    <select v-model="type">
      <option v-for="option in categoryList" :key="option">
        {{ option }}
      </option>
    </select>
    <button @click="onSaveClick">Save!</button>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  props: {
    categoryList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      amount: '',
      type: '',
      date: ''
    }
  },
  computed: {
    getCurrentDate () {
      return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).format(new Date())
    }
  },
  methods: {
    onSaveClick () {
      const data = {
        amount: Number(this.amount),
        type: this.type,
        date: this.date || this.getCurrentDate
      }
      this.$emit('emitName', data)
    }
  }
}
</script>
