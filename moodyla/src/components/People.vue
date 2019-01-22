<template>
    <div>
        <div v-bind:key="all.id" v-for="all in people"> 
            <h3>{{all.name}}</h3>
        </div>
    </div>
</template>


<script>

export default {
    name: "People",
    computed: {
        people() {
            return this.$store.getters.getPeople;
        }
    },
}
</script>

<style scoped>

</style>
