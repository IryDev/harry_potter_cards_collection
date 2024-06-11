<script setup>
import { animateWithGsap } from '@/utils/animation'
import { onMounted } from 'vue'

onMounted(() => {
  animateWithGsap('.logo', {
    duration: 2,
    opacity: 0,
    scale: 0.5
  })
})
</script>

<template>
  <video
    autoplay
    muted
    loop
    class="absolute left-0 right-0 top-0 -z-10 h-screen w-full object-cover object-left"
    src="../assets/videos/background-video3.mp4"
  ></video>

  <main>
    <section id="home" class="flex h-screen flex-col items-center justify-end">
      <img
        class="logo z-10 mb-24 w-[600px]"
        src="../assets/images/logo.webp"
        alt="Harry Potter Hogwarts Cards Collection Logo"
      />

      <a
        href="/auth"
        class="group relative -top-20 flex max-w-[calc(100%-20px)] flex-col items-center rounded-md border-2 border-[#b69451] bg-play-now bg-cover px-12 py-4 text-[#f1ce89] transition duration-300 hover:text-white md:max-w-96"
      >
        <h2 class="text-center uppercase text-[#b69451] duration-300 group-hover:text-white">
          Play, Collect, Exchange, now !
        </h2>
        <img src="../assets/images/rule-a.webp" alt="" />
        <h1 class="text-center text-3xl uppercase leading-7">become the best collector</h1>
        <p class="uppercase text-[#b69451] duration-300 group-hover:text-white">
          Let's get started
        </p>
      </a>
    </section>
  </main>
</template>
