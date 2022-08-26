<template>

    <section id="section2">

        <new-emp @add-employee="addEmp"></new-emp>
    </section>
    <section id="section1">
        <emp-contact id="contact" v-for="emp in emps" :key="emp.name" :emp-name="emp.name" :age="emp.age"
            :salary="emp.salary" :job="emp.job" @parent-listen="print" @delete-emp="deleteEmp"></emp-contact>
    </section>
</template>

<script>
export default {
    provide() {return {
        titleSection: 'Add Employee'
    };
    },
    data() {
        return {
            emps: [{ id: 1, name: "Basheer", age: 23, salary: "600$", job: "Programmer" },
            { id: 2, name: "Ahmad", age: 24, salary: "600$", job: "Cloud Eng." },
            { id: 3, name: "Essa", age: 18, salary: "400$", job: "QA" },
            { id: 4, name: "Muna", age: 56, salary: "1600$", job: "UI Designer" },
            { id: 5, name: "Mohammad", age: 35, salary: "6500$", job: "Graphic Designer" }],
        
            titleSection: "Add Emp"
        };
    },
    methods: {
        print(empName) {
            console.log(empName)
        },
        addEmp(enteredName, enteredAge, enteredSalary, enteredJob) {
            const newEmp = {
                id: this.emps.length,
                name: enteredName,
                age: enteredAge,
                salary: enteredSalary,
                job: enteredJob
            }
            this.emps.push(newEmp);
        },
        deleteEmp(empName){
            const delID = this.emps.findIndex(x=> x.name == empName);
            console.log("Delete " + empName)
            this.emps.splice(delID, 1);
        }

    },
    computed: {

    }
}
</script>

<style>
body {
    background: lightblue;
}

h2 {
    color: aqua;
    font-size: 25px;

}

* {
    text-align: center;
    margin: auto;
    list-style: none;
    font-family: monospace;
}

#section1 {


    margin-top: 50px;

}

#contact {
    background: tomato;
    margin-top: 10px;
    width: 300px;
    border-radius: 15px;
    padding-bottom: 10px;
    box-shadow: 7px 9px 28px -8px rgba(0, 0, 0, 0.75);
}

button {

    background: lightblue;
    margin-top: 10px;
    border: none;
    font-size: 15px;
    cursor: pointer;

}

li {
    font-size: 15px;
}

#section2 {

    margin-top: 40px;
    background: linear-gradient(60deg, tomato, crimson);
    width: 330px;
    height: 280px;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 7px 9px 28px -8px rgba(0, 0, 0, 0.75);
}
</style>
