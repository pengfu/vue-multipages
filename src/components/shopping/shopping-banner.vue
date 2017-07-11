<template>
    <div class="shopping-banner-container">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-3">{{ msg }}</h1>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                msg: 'shopping-banner.vue'
            }
        }
    }
</script>

<style lang="less" scoped>
    .shopping-banner-container {
        margin: 30px 0;
    }
</style>
