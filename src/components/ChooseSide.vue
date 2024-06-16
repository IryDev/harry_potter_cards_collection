<template>
  <section
    id="howtoplay"
    class="cut-section relative bg-bg-secondary bg-cover py-20 text-center lg:p-14 lg:pt-20"
  >
    <h2 class="mb-4 text-5xl uppercase text-[#d9bc60] [text-shadow:0_0_30px_#d9bc60]">
      Which side will you choose
    </h2>
    <p class="mb-12 text-2xl uppercase text-[#fff4e2] [text-shadow:0_0_30px_#d9bc60]">
      remember the final fight
    </p>

    <div class="cards flex flex-col items-center justify-center gap-16 md:flex-row lg:items-start">
      <div class="flex w-80 flex-col">
        <img class="light block w-80" src="../assets/images/light.webp" alt="" />
        <h3 class="side-title my-3 text-2xl text-[#fff4e2]">The Light Side</h3>
        <p class="side-desc max-w-full text-[#fff4e2]">
          Collect cards from the light side and rediscover the magic of the Harry Potter saga.
          Choose your side of good. Meet your favorite heroes Hermione Granger, Albus Dumbledore and
          many others.
        </p>
      </div>

      <div class="flex w-80 flex-col">
        <img class="dark block w-80" src="../assets/images/dark.webp" alt="" />
        <h3 class="side-title-2 my-3 text-2xl text-[#fff4e2]">The Dark Side</h3>
        <p class="side-desc-2 max-w-full text-[#fff4e2]">
          Collect cards from the side of darkness and rediscover the dark arts of the Harry saga
          Potter. Choose your side. Meet your favorite Death Eaters Bellatrix Lestrange, Lucius
          Malfoy and many others.
        </p>
      </div>
    </div>

    <img
      class="harry absolute left-0 top-0 hidden object-cover lg:block"
      src="../assets/images/harry-head.webp"
      alt=""
    />
    <img
      class="voldemort absolute right-0 top-0 hidden object-cover lg:block"
      src="../assets/images/voldemort-head.webp"
      alt=""
    />

    <SocialMedia />
  </section>
</template>

<script setup>
import { animateWithGsap } from '@/utils/animation'
import { onMounted } from 'vue'
import SocialMedia from './SocialMedia.vue'

onMounted(() => {
  animateWithGsap('.harry', {
    duration: 1,
    x: -500,
    stagger: 0.5,
    opacity: 1
  })

  animateWithGsap('.voldemort', {
    duration: 1,
    stagger: 0.5,
    x: 500,
    opacity: 0
  })

  animateWithGsap('.light', {
    duration: 1,
    opacity: 0,
    rotateY: 180
  })

  animateWithGsap('.dark', {
    duration: 1,
    opacity: 0,
    rotateY: 180
  })

  animateWithGsap('.side-title, .side-desc', {
    duration: 1,
    delay: 1,
    opacity: 0,
    y: 100
  })

  animateWithGsap('.side-title-2, .side-desc-2', {
    duration: 1,
    delay: 1,
    opacity: 0,
    y: 100
  })
})
</script>
