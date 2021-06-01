<template>
  <div class="unicon-detail">
    <a @click="$router.go(-1)"><i class="bi-arrow-left-circle"></i> Back</a>
    <h3>UnicornDetail</h3>
    <div class="spinner-border" v-if="loading"></div>
    <form v-if="!loading" ref="form">
      <div class="mb-3">
        <label for="unicorn-id" class="form-label">ID</label>
        <input id="unicorn-id" type="text" class="form-control" v-model="unicorn._id" :disabled="true">
        <div class="form-text">This is primary key, this is auto generated and cannot modified</div>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input id="name" type="text" class="form-control" v-model="unicorn.name">
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input id="age" type="number" class="form-control" v-model="unicorn.age">
      </div>
      <div class="mb-3">
        <label for="color" class="form-label">Color</label>
        <select id="color" class="form-select" v-model="unicorn.colour">
          <option v-for="color in colors" :key="color" v-bind:style="{ color: color }">{{ color }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" @click="save">Save</button>
    </form>

  </div>
</template>

<script>
import UnicornsApi from "@/service/UnicornsApi";
import {cloneDeep} from 'lodash';

export default {
  name: "UnicornDetail",
  props: {
    unicornProp: {}
  },
  data() {
    return {
      colors: ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan', 'white', 'gray'],
      unicornId: '',
      unicorn: {
        _id: '',
        name: '',
        age: null,
        colour: ''
      },
      loading: false,
    };
  },
  methods: {
    getDetail(id) {
      this.loading = true;
      UnicornsApi.get(id).then(response => {
        this.unicorn = response.data;
      }).catch(error => {
        console.log('error', error);
      }).finally(() => {
        this.loading = false;
      })
    },
    save() {
      this.loading = true;
      const data = cloneDeep(this.unicorn);
      delete data._id
      const api = this.unicorn._id
          ? UnicornsApi.update(this.unicorn._id, data)
          : UnicornsApi.create(data)
      console.log(data);
      api.then(() => {
        this.loading = false;
        history.back();
      }).catch(error => {
        console.log('error', error);
      }).finally(() => {
        this.loading = false;
      })
    }
  },
  created() {
    if (this.$route.params.id) {
      this.getDetail(this.$route.params.id)
    }
  },
  mounted() {
    // todo (used a lot)
    // almost variables, properties in Dom can access in this
  }
}
</script>

<style scoped>

</style>
