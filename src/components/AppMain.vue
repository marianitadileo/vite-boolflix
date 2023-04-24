<script>
import { store } from '../store';

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
    computed: {
        getFlags() {
              return function(language) {
                const flags = {
                "it": "https://www.countryflagicons.com/SHINY/64/IT.png",
                "us": "https://www.countryflagicons.com/SHINY/64/US.png",
                "en": "https://www.countryflagicons.com/SHINY/64/GB.png",
                "de": "https://www.countryflagicons.com/SHINY/64/DE.png",
                };
                return flags[language];
              };

        }
    }
}
</script>

<template>
<div class="container">
    <div>FILM</div>
    <div class="container-cards" v-for="(content, index) in this.store.listFilm">
        <div class="card">
            <span>
                <img src="" alt="">
            </span>
            <div class="content">
                <h3>{{ content.name }}</h3>
                <h3>{{ content.original_title }}</h3>
                <img v-if="getFlags(content.original_language)" :src="getFlags(content.original_language)" alt="flags-language">
                <h3 v-else> {{ content.original_language }}</h3>
                <h4>{{ content.vote_average }}</h4>
            </div>
        </div>
    </div>
    <div>SERIE TV</div>
    <div class="container-cards" v-for="(content, index) in this.store.listSeries">
        <div class="card">
            <span>
                <img src="" alt="">
            </span>
            <div class="content">
                <h3>{{ content.name }}</h3>
                <h3>{{ content.original_name}}</h3>
                <img v-if="getFlags(content.original_language)" :src="getFlags(content.original_language)" alt="flags-language">
                <h3 v-else> {{ content.original_language }}</h3>
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

img {
    width: 20px;
}
</style>