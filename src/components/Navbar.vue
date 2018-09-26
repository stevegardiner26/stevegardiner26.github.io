<template>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Skills</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Projects</a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link" @click="changePage('app-contact')">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
    export default {
      data() {
        return {

        }
      },
      name: "Navbar",
      methods: {
        changePage(nav) {
          console.log(nav);
        },
      },
    }
</script>

<style scoped>
  .container-fluid {
    padding: 0;
  }

</style>
