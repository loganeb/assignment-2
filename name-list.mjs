export var NameList = Vue.component('name-list',{
    props: {
        names: Array
    },
    template: `
        <div class="nameList">
            <h2>Names</h2>
            <ul>
                <li v-for="name in names">{{ name }}</li>
            </ul>
        </div>
    `
});