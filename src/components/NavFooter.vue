<template>
  <footer>
    <nav>
      <div class="nav-container">
        <RouterLink to="/">Today</RouterLink>
        <RouterLink to="/week">Week</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "NavFooter",
};
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  width: 100%;
}
footer {
  width: 100vw;
  max-width: 600px;
  position: fixed;
  bottom: 20px;
}
</style>
