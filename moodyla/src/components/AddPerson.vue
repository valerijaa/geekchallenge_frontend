<template>

<div>

    <form @submit="AddPerson">
        <h1>Add new person</h1>
       Name: <input type="text" v-model="name" name="name">
Social media: <select>
                <option value="twitter">Twitter</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="linkedin">Linkedin</option>
            </select>

             Username: <input type="text" v-model="username" name="username">


        <input type="submit" value="Add" class="btn">
    </form>

</div>
    
</template>




<script>
export default {
    name: "AddPerson",
    data() {
        return {
            name: '',
            username: ''
        }
    },
    methods: {
        AddPerson(e) {
            e.preventDefault();
            const newPerson = {
                id: 99,
                name: this.name,
                username: this.username,
                socialMedia: 'twitter'
            }
            this.$emit('add-person', newPerson);

            this.name = '';
            this.username = '';
        }
    }
}
</script>





<style scoped>
    
</style>

