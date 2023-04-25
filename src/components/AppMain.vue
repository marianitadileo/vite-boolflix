<script>
import { store } from '../store';

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
    methods: {
        getPoster(poster) {
            return new URL (poster, import.meta.url).href;
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
                <img v-if="content.poster_path" :src="getPoster(`${store.posterURL}${content.poster_path}`)" alt="poster">
                <img v-else src="../assets/image-not.jpg" alt="image-not-found">
            </span>
            <div class="content">
                <h3>{{ content.title}}</h3>
                <h3>{{ content.original_title }}</h3>
                <img v-if="getFlags(content.original_language)" :src="getFlags(content.original_language)" alt="flags-language">
                <h3 v-else> {{ content.original_language }}</h3>
                <h4>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </h4>
            </div>
        </div>
    </div>
    <div>SERIE TV</div>
    <div class="container-cards" v-for="(content, index) in this.store.listSeries">
        <div class="card">
            <span>
                <img v-if="content.poster_path" :src="getPoster(`${store.posterURL}${content.poster_path}`)" alt="poster">
                <img v-else src="../assets/image-not.jpg" alt="image-not-found">
            </span>
            <div class="content">
                <h3>{{ content.name }}</h3>
                <h3>{{ content.original_name}}</h3>
                <img class="flags" v-if="getFlags(content.original_language)" :src="getFlags(content.original_language)" alt="flags-language">
                <h3 v-else> {{ content.original_language }}</h3>
                <h4>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </h4>
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

.flags {
    width: 20px;
}
</style>