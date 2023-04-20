<script>
import { store } from '../store';

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <span class="title">Boolflix</span>
        <div class="filter">
            <input type="text" placeholder="Cerca cosa guardare" v-model.trim="store.filter">
            <button @click="$emit('search')">Search</button>
        </div>
    </div>

</template>

<style>
.container {
    display: flex;
    justify-content: space-between;
    margin: 25px 100px;
}
</style>