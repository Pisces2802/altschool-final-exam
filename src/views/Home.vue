<template>
  <transition name="home" appear>
    <div class="home-view">
      <img
        class="profile-picture"
        src="@/assets/my_headshot.jpeg"
        alt="profile_picture"
      />
      <div>
        <div class="about-me">
          <div>Hi, My name is <span>David Olaleye.</span></div>
          <p>
            I am frontend web developer with a passion for building web
            applications with wonderful user experience and an appealing
            interface.
          </p>
          <p>
            I'm quite proficient with HTML, CSS, JAVASCRIPT, REACT, VUE, GIT AND
            GITHUB.
          </p>
          <p>I also enjoy writing technical articles.</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.home-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
/* .home-enter-to {
  opacity: 1;
  transform: translateX(0);
} */
.home-enter-active {
  transition: all 1.5s ease;
}
.profile-picture {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 10px auto;
}

.about-me {
  width: 90%;
  font-family: "Courier New", Courier, monospace;
  font-size: medium;
  font-weight: bolder;
  line-height: 24px;
  border: 1px solid #fff;
  margin: 0 auto;
}
.home-view {
  width: 90%;
  margin: 80px auto;
  background: rgb(245, 248, 252);
  border-radius: 4px;
  /* border: 1px solid crimson; */
  /* border: 1px solid black; */
}
</style>
