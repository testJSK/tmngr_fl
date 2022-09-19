<template>
  <div class="app-grid">
    <header>
      <div class="container py-3 mb-4 border-bottom">
        <div class="row">
          <div class="col col-sm-9">
            <h1>Super shop</h1>
          </div>
          <div class="col col-sm-3">
            <div class="alert alert-default">
              <div>In Cart: </div>
              <div>Total: </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div>
      <div class="container">
        <div class="row">
          <div class="col col-12 col-md-3">
            <ul class="nav nav-pills flex-column mb-auto">

            </ul>
          </div>
          <main class="col col-12 col-md-9">
            <router-view />
          </main>
        </div>
      </div>
    </div>
    <footer class="py-3 m4-3 border-top">
      <div class="container">
        footer
      </div>
    </footer>
  </div>
</template>

<script>
export  default {
  name: 'App',
  components: {

  }
}

</script>

<style>
</style>
