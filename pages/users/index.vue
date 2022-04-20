<template>
  <table>
    <thead>
      <tr>
        <th @click="sort('id')">id</th>
        <th @click="sort('name')">Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in sortedUsers" :key="user.id">
        <td>{{ user.id }}</td>
        <td><a href="#" @click.prevent="openUser(user)"> {{ user.name }} </a></td>
      </tr>
    </tbody>

    <p>
      <button @click="prevPage">Previous</button>
      <button @click="nextPage">Next</button>
    </p>
  </table>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["users/users"]?.length === 0) {
      /*
       *На стороне сервера Nuxt выполнит запрос
       *и положит данные о пользователях в store
       */
      await store.dispatch("users/fetch");
    }
  },
  data: () => ({
    pageTitle: "Users page",
    users: [],
    currentSort: "name",
    currentSortDir: "asc",

    //**Pagination */
    pageSize: 3,
    currentPage: 1,
  }),
  created: function () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        this.users = res;
      });
  },
  computed: {
    /*users() {
      return this.$store.getters["users/users"]; //**Попытка в vuex 
    },*/
    sortedUsers: function () {
      return this.users.sort((a,b) => {
		let modifier = 1;
		if(this.currentSortDir === 'desc') modifier = -1;
		if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
		if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
		return 0;
	}).filter((row, index) => {
		let start = (this.currentPage-1)*this.pageSize;
		let end = this.currentPage*this.pageSize;
		if(index >= start && index < end) return true;
	});
    },
  },
  methods: {
    openUser(user) {
      this.$router.push("/users/" + user.id);
    },
    sort: function (s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
    //**Pagination */
    nextPage: function () {
      if (this.currentPage * this.pageSize < this.users.length)
        this.currentPage++;
    },
    prevPage: function () {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
};
</script>