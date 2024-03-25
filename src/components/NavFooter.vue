<template>
  <footer>
    <nav>
      <div class="nav-container">
        <RouterLink to="/">Сьогодні</RouterLink>
        <RouterLink to="/forecast">5 днів</RouterLink>
        <RouterLink to="/about">Про додаток</RouterLink>
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
  justify-content: space-between;
  align-self: center;
  width: 100%;
}
footer {
  width: 100vw;
  max-width: 600px;
  position: fixed;
  bottom: 0;
  padding: 25px;
  background-color: rgba(240, 248, 255, 0.697);
  backdrop-filter: blur(2px);
  border-radius: 30px 30px 0 0;
  box-shadow: inset 2px 2px 8px #8b5df6,
  inset -2px 2px 8px #8b5df6;
  text-transform: uppercase;
}
.router-link-active{
  color: rgb(255, 2, 230);
  font-weight: 700;
  border-bottom: 2px dotted rgb(255, 2, 230);
}
</style>
