<template>
  <div class="bef-footer z-40 mt-10 flex w-full flex-col items-center justify-center text-center">
    <div class="relative mx-2 max-w-[500px]">
      <img class="mb-8" src="../assets/images/rule-a.webp" alt="rule" />
      <div class="relative z-10 flex items-center justify-between">
        <a
          href="https://www.facebook.com/harrypotter"
          title="Harry Potter Facebook"
          class="social-icon"
          aria-label="Facebook"
        >
          <img src="../assets/icons/icons8-facebook.svg" alt="Facebook" />
        </a>

        <a
          href="https://www.instagram.com/harrypotter"
          title="Harry Potter Instagram"
          class="social-icon"
          aria-label="Instagram"
        >
          <img src="../assets/icons/instagram.svg" alt="" />
        </a>

        <a
          href="https://twitter.com/harrypotter"
          title="Harry Potter Twitter X"
          class="social-icon"
          aria-label="Harry Potter Twitter"
        >
          <img src="../assets/icons/icons8-twitterx.svg" alt="Twitter" />
        </a>

        <a
          href="https://www.youtube.com/@harrypotter"
          class="social-icon"
          aria-label="Harry Potter Youtube"
        >
          <img src="../assets/icons/youtube.svg" alt="YouTube" />
        </a>

        <a
          href="https://discord.com/invite/HogwartsLegacy"
          title="Harry Potter Hogwarts Legacy Discord"
          class="social-icon"
          aria-label="Hogwarts Legacy Discord"
        >
          <img src="../assets/icons/discord.svg" alt="discord" />
        </a>
        <a
          href="https://www.tiktok.com/@harrypotter"
          title="Harry Potter TikTok"
          class="social-icon"
          aria-label="Harry Potter TikTok"
        >
          <img src="../assets/icons/tiktok.svg" alt="tiktok" />
        </a>
      </div>
      <img class="mt-8" src="../assets/images/rule-a.webp" alt="rule" />
      <img
        class="absolute top-[50%] h-[calc(100%-3rem)] translate-y-[-50%] object-cover opacity-30"
        src="../assets/images/social-widget-bg.webp"
        alt="social-widgt-bg"
      />
    </div>
    <h3 class="z-10 mt-10 text-2xl uppercase text-white">get closer to the magic</h3>
    <a
      href="https://www.wizardingworld.com/"
      title="Join the Harry Potter Fan Club"
      name="join-the-harry-potter-fan-club"
      aria-label="Join the Harry Potter Fan Club"
      class="group z-20 flex items-center gap-3 uppercase text-[#b69451] duration-300 hover:translate-x-4 hover:text-white"
      >join the harry potter fan club
      <img
        class="delay-150 duration-300 group-hover:translate-x-6"
        src="../assets/icons/angle.svg"
        width="5"
        alt="angle"
      />
    </a>
  </div>
</template>

<script setup>
import { animateWithGsap } from '@/utils/animation'
import { onMounted } from 'vue'

onMounted(() => {
  animateWithGsap('.social-icon', {
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
    scale: 0
  })
})
</script>
