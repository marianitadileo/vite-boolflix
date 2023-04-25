import { reactive } from "vue";

export const store = reactive(
    {
        listFilm: [],
        listSerie: [],
        apiUrlFilm: "https://api.themoviedb.org/3/search/movie?api_key=b2ed180b4534b971288e074870709633",
        apiUrlSeries: "https://api.themoviedb.org/3/search/tv?api_key=b2ed180b4534b971288e074870709633",
        filter: "",
        posterURL: "https://image.tmdb.org/t/p/w342"
    }
)