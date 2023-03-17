<template>
  <transition name="nav" appear>
    <nav>
      <div class="logo">
        <router-link :to="{ name: 'Home' }">
          <div class="logo-c"><sub>dev</sub>Dave</div>
        </router-link>
      </div>

      <div class="router-nav-links">
        <div class="nav-link-box">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </div>

        <div class="nav-link-box">
          <router-link :to="{ name: 'Repos' }">Repos</router-link>
        </div>
      </div>
    </nav>
  </transition>

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
/* .nav-enter-to {
  opacity: 1;
  transform: translateY(0);
} */
.nav-enter-active {
  transition: all 1s ease;
}

.logo {
  font-weight: 800;
  font-size: x-large;
}

.logo-c {
  color: #00235b;
}

.logo-c:hover {
  opacity: 0.56;
  box-shadow: -9px 9px 10px 1px rgba(211, 211, 211);
}
.nav-link-box {
  font-family: Roboto, sans-serif;
  font-weight: 0;
  font-size: 14px;
  color: #fff;
  background-color: #00235b;
  padding: 10px 30px;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);
  cursor: pointer;
}

.nav-link-box:hover {
  opacity: 0.56;
  box-shadow: -9px 9px 10px 1px rgba(211, 211, 211);
}
/* 
.nav-link-repos-box {
  border: 1px solid grey;
  background-color: #060047;
  padding: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
} */

nav {
  display: flex;
  padding: 20px;
  justify-content: space-around;
  width: 100%;
  /* border: 2px solid aqua;  */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: #eaeaea; */
}

/* nav a .nav-link-home-box {
  font-weight: bold;
  color: #2c3333;
  text-decoration: none;
}  */

/* nav a.router-link-exact-active {
  color: #ddf7e3;
  background-color: #443c68;
} */

nav a {
  color: #fff;
  text-decoration: none;
}

.router-nav-links {
  display: flex;
  gap: 50px;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3 ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

@media (max-width: 800px) {
  .router-nav-links {
    display: flex;
    gap: 5px;
  }
}
</style>
