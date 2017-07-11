<template>
    <div class="home-banner-container">
        <div class="jumbotron jumbotron-fluid">
            <div class="container banner-container">
                <h1 class="display-3">{{ msg }}</h1>
                <img src="../../assets/img/2.jpg" alt="" class="gaki">
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                msg: 'home-banner.vue'
            }
        }
    }
</script>

<style lang="less" scoped>
    .home-banner-container {
        margin: 30px auto;
    }
    .banner-container {
        position: relative;

        .gaki {
            position: absolute;
            left: 10px;
            width: 50px;
            top: -60px;
        }
    }
</style>
