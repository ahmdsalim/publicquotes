<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
      <div class="container-fluid">
        <div class="navbar-collapse justify-content-md-center collapse show">
          <ul class="navbar-nav">
            <li class="nav-item text-center">
              <h3 class="navbar-brand" aria-current="page" href="#">Public Quotes</h3>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <div class="container mt-5">
      <router-view></router-view>
    </div>

    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
          </a>
          <span class="text-muted">© 2021 Public Quotes</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a class="text-muted" href="//instagram.com/ahmadsalim_as/" target="_blank">@ahmadsalim_as</a></li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>