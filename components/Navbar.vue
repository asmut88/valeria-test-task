<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nuxt SSR</a>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link to="/" active-class="active" class="nav-link"  no-prefetch exact>
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about" active-class="active" class="nav-link" >
              About
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>