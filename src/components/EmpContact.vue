<template>
    <li>
        <h2>{{ empName }}</h2>
        <button @click="toggleList">{{ listVisible ? "Hide" : "Show" }}</button>
        <button id="btn-delete" @click.stop.prevent="deleteEmp">X</button>
        <ul v-show="listVisible">
            <li>Age: {{ age }}</li>
            <li>Salary: {{ salary }}</li>
            <li>Job: {{ job }}</li>
        </ul>
    </li>

</template>


<script>
export default {
    props: {
        empName: { type: String, required: true },
        age: Number,
        salary: String,
        job: String,
    },
    emits: ['parent-listen', 'delete-emp'],

    data() {
        return {
            listVisible: false,

        }

    },
    methods: {
        toggleList() {
            this.listVisible = !this.listVisible;
            this.$emit('parent-listen', this.empName)
        },
        deleteEmp() {
            this.$emit('delete-emp', this.empName)

        }
    }

};


</script>

<style>
li {
    position: relative;
}

#btn-delete {
    position: absolute;
    top: -15px;
    border-radius: 50%;
    right: 7px;
    cursor: pointer;
}
</style>