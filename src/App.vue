<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/students">Students</router-link>
      </li>
      <li>
        <router-link to="/student-detail">Student Detail</router-link>
      </li>
      <li>
        <router-link to="/teachers">Teachers</router-link>
      </li>
      <li>
        <router-link to="/teacher-detail">Teacher Detail</router-link>
      <li>
        <router-link to="/unicorns">Unicorns</router-link>
      </li>
      <li>
        <router-link to="/unicorn">Unicorn Detail</router-link>
      </li>
      <li>
        <router-link to="/other">Other</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-icons/font/bootstrap-icons.css';

#app {
}
</style>
