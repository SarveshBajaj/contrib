<template>
  <div>
    <h1>User Registration</h1>
    <input
      type="text"
      name="username"
      v-model="username"
      placeholder="Enter your github username" />
    <br>
    <br>
    <input type="text"
    name="reg_year"
    v-model="reg_year"
    placeholder="Enter your year of registration in the college" />
    <br>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import Registration from '@/services/Registration'
export default {
  data () {
    return {
      username: '',
      reg_year: ''
    }
  },
  methods: {
    async register () {
      const response = await Registration.register({
        username: this.username,
        registration_year: this.registration_year
      })
      console.log(response.data)
    }
  }
}

</script>

<style scoped>

</style>
