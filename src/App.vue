<script setup lang="ts">
import MainSection from './components/MainSection.vue'
import NavBar from './components/NavBar.vue';
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { IO } from "./composables/animation/observer"
import { useAnimation } from '../composables/animations/useAnimation';


gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
 useAnimation();
  const elem = document.querySelector(".main-container") as HTMLElement;
  // const main = document.querySelector("main") as HTMLElement;
  let scrollWidthTotalPage = 0;
  let width = 0;
  if (window.innerWidth > 1200 && window.innerWidth < 1500) {
    width = 4500;
  } else if (window.innerWidth > 1500) {
    width = 6500;
  } else {
    width = 3000;
  }
  console.log({width, scrollWidthTotalPage});
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sticky_container",
      scrub: 1,
      start: "top top",
      pinSpacing: false,
      pin: 'main',
      end: () => `+=${width} top`,
      toggleActions: "play reset none restart",
      markers: true,
    },
  });

  tl.to(elem, {
    x: () => -elem.scrollWidth,
    ease: "Power1.easeInOut",
  });

  
})
</script>

<template>
  <main class="relative min-h-screen bg-[#fafafa]">
    <NavBar />
    <MainSection />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
