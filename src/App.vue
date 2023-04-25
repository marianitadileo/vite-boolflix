<script>
import { store } from './store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from  './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.getFilm();
  },
  methods: {
    getFilm() {
      this.store.apiUrlFilm += `&query=${this.store.filter}`;

      axios.get(this.store.apiUrlFilm).then(resp => {
        this.store.listFilm = resp.data.results; 
      })
    },
    getSeries() {
      this.store.apiUrlSeries += `&query=${this.store.filter}`;

      axios.get(this.store.apiUrlSeries).then(resp => {
        this.store.listSerie = resp.data.results;
      })
    }
  }
}
</script>

<template>
  <AppHeader @search="getFilm()"/>
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss"; 
</style>
