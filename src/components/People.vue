<template>
    <div>
        <div v-bind:key="person._id" v-for="person in people"> 
            <h3>
                <router-link class="button" :to="{ name: 'person', params: { id: person._id }}">{{person.name}}</router-link>
            </h3>
        </div>
    </div>
</template>


<script>

export default {
    name: "People",
    computed: {
        people() {
            return this.$store.getters.getPeopleSortedByName;
        }
    },
    created() {
        this.$store.dispatch('loadPeople');
    }
}
</script>

<style scoped>
h3 a {
    text-decoration: none;
    color: grey;
    font-weight: 500;
}

h3 a:hover {
    color: black;
}
</style>
