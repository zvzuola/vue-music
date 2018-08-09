import Vue from 'vue'
import Vuex from 'vuex'
import { fetchArtists, fetchArtist, fetchAlbum } from '../fetch'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        include: [],
        artists: [],
        artistData: {},
        albums: [],
        albumData: {},
        recents: localStorage.musicRecents
            ? JSON.parse(localStorage.musicRecents)
            : [],
    },
    getters: {
        // countGet: state => state.count + 1
    },
    mutations: {
        ADDINCLUDE: (state, n) => state.include = state.include.concat(n),
        REMOVEINCLUDE: (state, n) => state.include = state.include.filter(i => i !== n),
        FETCHARTISTS: (state, data) => {
            state.artists = state.artists.concat(data)
            state.artists.forEach(v => {
                state.artistData[v.artist] = []
            })
        },
        FETCHARTIST: (state, { data, artist }) => {
            state.artistData = { ...state.artistData, ...{ [artist]: data } }
            data.forEach(v => {
                state.albumData[v.album] = []
            })
        },
        // FETCHALBUMS: (state, { data, album }) => {
        //     state.albumsData = {...state.albumsData, ...{[album]: data}}
        // },
        FETCHALBUM: (state, { data, album }) => {
            state.albumData = { ...state.albumData, ...{ [album]: data } }
        },
    },
    actions: {
        addInclude: ({ commit }, n) => commit('ADDINCLUDE', n),
        removeInclude: ({ commit }, n) => commit('REMOVEINCLUDE', n),
        fetchArtists: ({ commit }) => {
            fetchArtists().then(data => commit('FETCHARTISTS', data))
        },
        fetchArtist: ({ commit }, artist) => {
            fetchArtist(artist).then(data => commit('FETCHARTIST', { data, artist }))
        },
        // fetchAlbums: ({ commit }, album) => {
        //     fetchAlbums(album).then(data => commit('FETCHALBUMS', data, album))
        // },
        fetchAlbum: ({ commit }, album) => {
            fetchAlbum(album).then(data => commit('FETCHALBUM', { data, album }))
        }
    }
})