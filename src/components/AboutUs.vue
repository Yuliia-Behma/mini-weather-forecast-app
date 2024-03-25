<template>
  <div class="wraper">
    <p>
      <strong class="title">"Прогноз погоди"</strong> - це міні-додаток для відстеження погоди на <b>5 днів</b> з
      інтервалом в <b>3 години</b>. Він розроблений з використанням фреймворка <span class="vue">Vue.js 3</span>
      з метою навчання. Основна ідея додатка - надати користувачу зручний і
      простий інструмент для перегляду прогнозу погоди на найближчі дні.
    </p>
    <p>
      Основні компоненти додатка включають в себе використання бібліотеки
      <span class="library">vue-router</span> для налаштування маршрутизації, що дозволяє переходити між
      різними сторінками додатка. Для виконання HTTP запитів до API погоди
      використовується бібліотека <span class="library">axios</span>, яка дозволяє ефективно взаємодіяти з
      сервером. Крім того, для керування станом додатка використовується
      бібліотека <span class="library">Pinia</span>, яка дозволяє ефективно управляти даними і станом
      додатка.
    </p>
    <p>
      Для отримання даних про погоду використовується API від <span class="library">OpenWeatherMap</span>. Це
      дозволяє отримувати точні та актуальні дані про погоду з усього світу і
      забезпечує користувачів достовірною інформацією.
    </p>
    <p>
      Цей додаток створений з урахуванням сучасних практик розробки веб-додатків
      з використанням Vue.js та пов'язаних бібліотек. Він може бути використаний
      як основа для подальшого розвитку і розширення функціональності в
      майбутньому.
    </p>
    <p class="author">Made with love by <a href="https://www.linkedin.com/in/yuliia-behma-939394266/" target="_blank">Yuliia Behma</a></p>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.wraper{
  padding: 10px;
  margin: 10px 0 60px;
  backdrop-filter: blur(2px);
  background-color: rgba(240, 248, 255, 0.437);
  border-radius: 10px;
  font-weight: 500;
  text-align: justify;
  line-height: 1.5em;
}
.wraper p{
  margin-bottom: 20px;
}
.title{
  color: rgb(126, 11, 146);
  font-size: 1.2rem;
}
.vue{
  color: #1eab6b;
  font-weight: 700;
  font-size: 1.1rem;
}
.library{
  font-weight: 700;
  text-decoration: underline;
  text-transform: capitalize;
}
.author{
  text-align: end;
  font-family: "Kaushan Script", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 1.2rem;
}
.author a{
  font-family: inherit;
  color: rgb(253, 0, 240);
}
.author a:hover{
  color: blueviolet;
}
</style>
