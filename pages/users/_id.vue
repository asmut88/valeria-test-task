<template>
  <section>
    <h1>{{ user.name }}</h1>
    <hr />
    <h3>{{ user.email }}</h3>
  </section>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $axios, params }) {
    /*
    данные о пользователе не храним в store,
    поскольку хотим всегда видеть актуальную информацию о пользоавателе
    */
    const user = await $axios.$get(
      "https://jsonplaceholder.typicode.com/users/" + params.id
    );
    return { user };
  },
};
</script>