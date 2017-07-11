<template>
    <nav class="navbar navbar-light navbar-light--skyblue">
        <div class="container">
            <a class="navbar-brand" href="/index.html">
                <img src="../../assets/logo.png" class="navbar-brand__img align-top" alt="">
            </a>
            <div class="nav navbar-nav">
                <a class="nav-item nav-link" href="./index.html">Home</a>
                <a class="nav-item nav-link" href="./cart.html">Cart</a>
                <a class="nav-item nav-link" href="./order.html">Order</a>
            </div>
        </div>

    </nav>
</template>
<script>
    export default {
        data () {
            return {
                msg: ''
            }
        }
    }
</script>

<style lang="css" scoped>
    .navbar-light--skyblue {
        background-color: #e3f2fd;
    }
    .navbar-brand__img{
        width: 30px;
        height: 30px;
    }
</style> 