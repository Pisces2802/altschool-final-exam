<template>
  <section class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-10 col-sm-offset-1 text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center">Error 404</h1>
            </div>

            <div class="contant_box_404">
              <h3 class="h3">You don carry yourself go where you no know 🙄</h3>

              <router-link class="link_404" :to="{ name: 'Home' }"
                >Go back Home</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: "Arvo", serif;
  margin: 80px auto;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 30px;
  background: #00235b;
  margin: 20px 0;
  display: inline-block;
  text-decoration: none;

  font-family: Roboto, sans-serif;
  font-weight: 0;
  font-size: 14px;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);
  /* display: flex;
  flex-direction: row;
  align-items: center; */
  cursor: pointer;
}

.h3 {
  font-family: "Courier New", Courier, monospace;
}
.link_404:hover {
  opacity: 0.56;
  box-shadow: -9px 9px 10px 1px rgba(0, 0, 0, 0.5);
}
.contant_box_404 {
  margin-top: -50px;
}

.contant_box_404 {
  font-weight: bold;
}
</style>
