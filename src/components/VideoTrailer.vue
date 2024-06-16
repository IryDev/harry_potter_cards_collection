<template>
  <section id="trailer" class="cut-section relative bg-bg-secondary bg-cover py-12 lg:p-14 lg:pt-0">
    <div class="frame relative -top-16 z-50 flex items-center justify-center">
      <button
        @click="toggleTrailer"
        aria-label="Play video"
        type="button"
        class="group absolute z-40 flex size-52 cursor-pointer items-center justify-center"
      >
        <img
          class="arrow absolute w-6 transition-transform duration-500 group-hover:scale-110 md:w-12"
          src="../assets/images/play-button-arrow.webp"
          alt=""
        />
        <img
          class="inner absolute w-20 transition-transform duration-500 group-hover:rotate-90 md:w-40"
          src="../assets/images/play-button-inner.webp"
          alt=""
        />
        <img
          class="outer absolute w-20 transition-transform duration-500 group-hover:-rotate-90 md:w-40"
          src="../assets/images/play-button-outer.webp"
          alt=""
        />
      </button>
      <div class="cadre absolute">
        <img class="relative z-30" src="../assets/images/video-frame.webp" alt="Video frame" />
      </div>
      <div class="frame-image">
        <img
          class="p-2 brightness-50 lg:p-8"
          src="../assets/images/video-frame-2.webp"
          alt="Video frame 2"
        />
      </div>
    </div>
    <p
      class="desc px-4 py-6 text-center text-sm text-[#fff4e2] lg:px-64 lg:text-left lg:text-xl"
      aria-label="Description of the Harry Potter Cards Collection"
    >
      Refound the magic of the Harry Potter saga with the Harry Potter Cards Collection. Collect
      cards from your favorite characters, creatures, spells and more. Choose who you want to be, a
      Gryffindor, a Slytherin, a Hufflepuff or a Ravenclaw. Enroll now and start collecting cards
      from the Harry Potter saga.
    </p>
    <div
      class="popup-video fixed left-0 top-0 z-[10000] h-full w-full bg-black/80 duration-300"
      :class="{
        showVideoTrailer: 'pointer-events-auto scale-100 opacity-100',
        'pointer-events-none scale-125 opacity-0': !showVideoTrailer
      }"
    >
      <div
        class="container-video absolute left-1/2 top-1/2 flex h-[300px] w-[90%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-black shadow-[0_0_70px_5px_#d0922b80] lg:h-[90%]"
      >
        <button
          aria-label="Close video trailer"
          v-on:click="toggleTrailer"
          class="close absolute right-4 top-4 size-8 cursor-pointer"
        >
          <div class="line absolute h-0.5 w-full rotate-45 rounded-md bg-[#b69451]"></div>
          <div class="line absolute h-0.5 w-full -rotate-45 rounded-md bg-[#b69451]"></div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { animateWithGsap } from '@/utils/animation'
import { onMounted, ref } from 'vue'

let showVideoTrailer = ref(false)

const toggleTrailer = () => {
  showVideoTrailer.value = !showVideoTrailer.value
}

onMounted(() => {
  animateWithGsap('.frame', {
    duration: 1,
    opacity: 0
  })
  animateWithGsap('.desc', {
    duration: 1,
    opacity: 0
  })
})
</script>
