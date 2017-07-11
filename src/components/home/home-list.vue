<template>
    <div class="home-list-container">
        <h2>{{ msg }}</h2>

        <div class="row">
            <div class="col-md-6">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active">
                        <h5 class="list-group-item-heading">List group item heading</h5>
                        <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <h5 class="list-group-item-heading">List group item heading</h5>
                        <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <h5 class="list-group-item-heading">List group item heading</h5>
                        <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active">
                        <h5 class="list-group-item-heading">List group item heading</h5>
                        <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <h5 class="list-group-item-heading">List group item heading</h5>
                        <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <h5 class="list-group-item-heading">List group item heading</h5>
                        <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                msg: 'home-list.vue'
            }
        }
    }
</script>

<style lang="less" scoped>
    .home-list-container {
        margin-bottom: 30px;
    }
</style>
