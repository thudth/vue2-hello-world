<template>
  <div class="unicorns">
    <h3>Unicorns</h3>
    <div class="spinner-border" v-if="loading"></div>
    <table class="table" v-if="!loading">
      <thead>
      <tr>
        <th colspan="3" class="text-center">
          <a :href="'/unicorn-addition'">
            <i class="bi-plus-circle-fill text-success"></i>
          </a>
        </th>
        <th>Index</th>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Colour</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(unicorn, unIdx) in unicorns" :key="unIdx"
          v-bind:style="{ color: unicorn.colour }">
        <td>
          <router-link :to="{ name: 'UnicornDetail', params: { id: unicorn._id }}">
            <i class="bi-pencil"></i>
          </router-link>
        </td>
        <td><i class="bi-eye"></i></td>
        <td><i class="bi-trash text-danger " v-on:click="deleteOne(unicorn._id)"></i></td>
        <td>{{ unIdx + 1 }}</td>
        <td>{{ unicorn._id }}</td>
        <td>{{ unicorn.name }}</td>
        <td>{{ unicorn.age }}</td>
        <td>{{ unicorn.colour }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UnicornsApi from '../../service/UnicornsApi'

export default {
  name: "Unicorns",
  methods: {
    getAll() {
      this.loading = true;
      UnicornsApi.getAll().then(response => {
        this.unicorns = response.data;
        console.log('response', response);
      }).catch(error => {
        console.log('error', error);
      }).finally(f => {
        this.loading = false;
        console.log('f', f);
      })
    },
    deleteOne(id) {
      UnicornsApi.delete(id).then(response => {
        this.unicorns = response.data;
        console.log('response', response);
        this.getAll();
      }).catch(error => {
        console.log('error', error);
      }).finally(f => {
        console.log('f', f);
      })
    }
  },
  data() {
    return {
      unicorns: [],
      loading: false,
    }
  },

  //  this is lifecycle
  beforeCreate() {
    // before init component
  },
  created() {
    // todo (used a lot)
    // cannot read any properties in DOM
    // can access in data()
    this.getAll();
  },
  beforeMount() {
    // call when component is compiled and run first time
    // cannot read any properties in DOM
  },
  mounted() {
    // todo (used a lot)
    // almost variables, properties in Dom can access in this
  },
  computed: {},
  watch: {},
  beforeUpdate() {
    // only check data on data() method of vue
    // Logs the value every second, before variables/DOM updates.
  },
  updated() {
    // only check data on data() method of vue
    // Logs the value every second,  variables updates.
  },
  beforeDestroy() {
    // todo (used a lot)
    // data, event haven't been killed
  },
  destroyed() {
  }
}
</script>

<style scoped>

</style>
