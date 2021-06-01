<template>
  <div id="app">
    <div class="p-4">
      <div class="row">
        <div class="col-3">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
          <ul class="list-group">
            <li class="list-group-item">
              <router-link active-class="active" to="/">Home</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/students">Students</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/teachers">Teachers</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/unicorns">Unicorns</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/other">Other</router-link>
            </li>
          </ul>
        </div>
        <div class="col-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

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
