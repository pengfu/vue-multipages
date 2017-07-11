<template>
    <div class="home-container">
        <h1>{{ msg }}</h1>
        <home-banner></home-banner>
        <hr>
        <home-list></home-list>
    </div>
</template>

<script>
    import HomeList from '../../components/home/home-list.vue'
    import HomeBanner from '../../components/home/home-banner.vue'

    export default {
        data () {
            return {
                msg: 'home page'
            }
        },

        components: {
            'home-banner': HomeBanner,
            'home-list': HomeList
        }
    }
</script>