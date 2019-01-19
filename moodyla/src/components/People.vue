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
    props: ["people"]
}
</script>

<style scoped>

</style>
