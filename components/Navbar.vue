<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Valeria TT</a>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link
              to="/"
              active-class="active"
              class="nav-link"
              no-prefetch
              exact
            >
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/users" active-class="active" class="nav-link">
              Users
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about" active-class="active" class="nav-link">
              FAQ
            </nuxt-link>
          </li>
          <li class="nav-item" v-if="!hasToken">
            <nuxt-link to="/login" active-class="active" class="nav-link">
              Login
            </nuxt-link>
          </li>
          <li class="nav-item" v-else>
            <a @click.prevent="logout" class="nav-link" href="#" > Logout </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    hasToken() {
      return this.$store.getters.hasToken;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>