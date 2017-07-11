<template>
    <div class="cart-list-container">
        <h2>{{ msg }}</h2>

        <table class="table">
            <thead class="thead-default">
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                msg: 'cart-list.vue'
            }
        }
    }
</script>

<style lang="less" scoped>
.cart-list-container {
    margin: 30px 0;
}
</style>
