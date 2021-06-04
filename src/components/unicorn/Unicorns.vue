<template>
  <div class="unicorns">
    <h3>Unicorns</h3>
    <div class="spinner-border" v-if="loading"></div>
    <table class="table" v-if="!loading">
      <thead>
      <tr>
        <th colspan="3" class="text-center">
          <div class="d-flex justify-content-around">
            <a :href="'/unicorn-addition'">
              <i class="bi-plus-circle-fill text-success"></i>
            </a>
            <a class="text-body" @click="selectedUnicorns = {}">
              <i class="bi bi-arrow-counterclockwise"></i>
            </a>
          </div>
        </th>
        <th>Index</th>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Colour</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(unicorn, unIdx) in unicorns" :key="unIdx" @click="selectedUnicorns = unicorn">
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
        <td v-bind:style="{ color: unicorn.colour }">{{ unicorn.colour }}</td>
      </tr>
      </tbody>
    </table>
    <UnicornDetail
        :unicorn-detail="selectedUnicorns"
        v-on:saved="getAll"
    ></UnicornDetail>
  </div>
</template>

<script>
import UnicornsApi from '@/service/UnicornsApi'
import UnicornDetail from "@/components/unicorn/UnicornDetail";

export default {
  name: "Unicorns",
  components: {UnicornDetail},
  methods: {
    getAll() {
      this.loading = true;
      UnicornsApi.getAll().then(response => {
        this.unicorns = response.data;
      }).catch(error => {
        console.log('error', error);
      }).finally(() => {
        this.loading = false;
      })
    },
    deleteOne(id) {
      UnicornsApi.delete(id).then(response => {
        this.unicorns = response.data;
        this.getAll();
      }).catch(error => {
        console.log('error', error);
      })
    }
  },
  data() {
    return {
      unicorns: [],
      selectedUnicorns: {},
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
