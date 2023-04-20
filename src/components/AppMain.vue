<script>
import { store } from '../store';

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
<div class="container">
    <div class="container-cards" v-for="(content, index) in this.store.listFilm">
        <div class="card">
            <div class="text">
                <img src="" alt="">
            </div>
            <div class="content">
                <h3>{{ content.name }}</h3>
                <h3>{{ content.original_title }}</h3>
                <h4>{{ content.original_language }}</h4>
                <h4>{{ content.vote_average }}</h4>
            </div>
        </div>
    </div>
</div>
</template>

<style>
.container {
    display: flex;
    flex-wrap: wrap;
}
</style>