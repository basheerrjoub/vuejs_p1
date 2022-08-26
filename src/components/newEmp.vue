<template>
    <h1 id="titleSection">{{ titleSection }}</h1>
    <form @submit.prevent.stop="submitData">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="enteredName">

        <label for="age">Age</label>
        <input type="text" id="age" v-model="enteredAge">

        <label for="salary">Salary</label>
        <input type="text" id="salary" v-model="enteredSalary">

        <label for="job">Job</label>
        <input type="text" id="job" v-model="enteredJob">
        <button style="display: block">ADD</button>
    </form>
</template>

<script>
export default {
    emits: ['add-employee'],
    inject: ['titleSection'],
    data() {
        return {
            enteredName: "",
            enteredAge: null,
            enteredSalary: "",
            enteredJob: ""

        };
    },
    methods: {
        submitData() {
            this.$emit('add-employee', this.enteredName, this.enteredAge, this.enteredSalary, this.enteredJob)
        }

    }
}

</script>

<style>
label {
    font-size: 20px;
    margin-right: 10px;
    margin-top: 10px;
    display: block;
}

button {
    background-color: aqua;
    font-weight: 900;
    margin-top: 20px;
}
#titleSection {
    margin-top: -10px;
    background-color: aqua;
    width: 150px;
    border-radius: 20px;
    cursor: progress;
    
}
</style>
