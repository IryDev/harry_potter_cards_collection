<template>
  <div
    role="navigation"
    aria-label="Mobile Navigation"
    :class="{
      'pointer-events-none scale-125 opacity-0': !showMobileMenu,
      'opacity-1 scale-100': showMobileMenu
    }"
    class="sidenav fixed top-0 z-[102] h-full w-full overflow-y-scroll bg-mobile-menu-bg bg-cover transition-all duration-300"
  >
    <button
      aria-label="Close Mobile Menu"
      @click="toggleNav"
      class="close absolute right-8 top-8 size-8 cursor-pointer"
    >
      <div class="line absolute h-0.5 w-full rotate-45 rounded-md bg-[#b69451]"></div>
      <div class="line absolute h-0.5 w-full -rotate-45 rounded-md bg-[#b69451]"></div>
    </button>

    <img
      width="230"
      class="absolute left-[50%] top-4 w-[230px] translate-x-[-50%]"
      src="../assets/images/logo.webp"
      alt=""
    />

    <div class="links flex flex-col items-end gap-3 px-8 pt-32 text-xl text-white">
      <a href="/" name="Home">Home</a>
      <a href="#howtoplay" name="Profile">Profile</a>
      <a href="#cards" name="Cards" class="text-[#b69451]">Discover the Cards</a>
      <a href="#community" name="Community">Community</a>
      <a href="#trailer" name="Trailer">Trailer</a>
      <a href="#">How to play</a>
      <a href="#social">Social</a>
      <a
        href=""
        aria-label="Create an account"
        class="signup rounded-2xl bg-gold-btn-bg bg-cover px-4 py-1 duration-300 hover:shadow-[0_0_34px_#ffd075]"
        >Create an account</a
      >
      <div class="social mt-4 flex items-center gap-4">
        <img width="30" src="../assets/icons/youtube.svg" alt="" />
        <img width="30" src="../assets/icons/icons8-facebook.svg" alt="" />
        <img width="30" src="../assets/icons/icons8-twitterx.svg" alt="" />
        <img width="30" src="../assets/icons/instagram.svg" alt="" />
        <img width="30" src="../assets/icons/discord.svg" alt="" />
      </div>
      <a
        href="#"
        aria-label="Report a bug"
        class="mt-8 flex items-center gap-2 fill-current text-xs uppercase text-[#b69541]"
      >
        <img class="text-[#b69541]" width="20" height="20" src="../assets/icons/bug.svg" alt="" />
        report a bug
      </a>

      <a
        href="#"
        aria-label="Login to your account"
        class="my-6 font-bold text-white hover:[text-shadow:0_0_30px_#fff]"
        >Sign In</a
      >
    </div>
  </div>
  <div class="navs absolute top-0 flex h-16 w-full items-center justify-between">
    <div
      class="mobile-nav fixed z-[101] flex h-16 w-full items-center justify-between bg-bg-nav-mobile bg-cover px-3 md:hidden"
    >
      <img width="120" src="../assets/images/logo.webp" alt="" />
      <div class="flex items-center gap-2">
        <a
          href="#"
          aria-label="Create an account"
          rel="noopener noreferrer"
          class="login rounded-3xl bg-gold-btn-bg bg-cover px-4 py-0.5 text-white duration-300 hover:shadow-[0_0_34px_#ffd075]"
          >Create an account</a
        >
        <button aria-label="Open Mobile Menu" @click="toggleNav" class="burger h-12 w-8">
          <div class="line my-1 h-0.5 w-full rounded-sm bg-[#b69451]"></div>
          <div class="line my-1 h-0.5 w-full rounded-sm bg-[#b69451]"></div>
          <div class="line my-1 h-0.5 w-full rounded-sm bg-[#b69451]"></div>
        </button>
      </div>
    </div>
    <nav
      class="nav-left hidden h-16 items-center justify-between gap-4 bg-[linear-gradient(_90deg,_rgba(23,_47,_73,_0.5),_rgba(23,_47,_73,_0.5)_58%,_rgba(23,_47,_73,_0)_)] px-8 md:flex"
    >
      <a
        href="./index.html"
        class="group flex items-center gap-2 text-white transition duration-300 hover:text-[#ffd075]"
        title="Home"
      >
        <img width="30" src="../assets/icons/nav-deco.svg" alt="" />
        <span>Home</span><img width="5" src="../assets/icons/angle.svg" alt=""
      /></a>
      <a href="#cards" title="Cards" class="flex items-center gap-2 text-white hover:text-[#ffd075]"
        ><img width="30" src="../assets/icons/nav-deco2.svg" alt="" />
        <span>Cards</span>
        <img width="5" src="../assets/icons/angle.svg" alt=""
      /></a>
      <a href="#help" class="flex items-center gap-2 text-white hover:text-[#ffd075]">
        <img width="30" src="../assets/icons/nav-deco3.svg" alt="" />
        <span>Help</span>
        <img width="5" src="../assets/icons/angle.svg" alt="" />
      </a>
    </nav>
    <nav class="nav-right hidden h-16 items-center justify-between gap-4 px-8 md:flex">
      <a href="./profile.html" class="flex items-center gap-2 text-white hover:text-[#ffd075]">
        <img width="30" src="../assets/icons/nav-deco4.svg" alt="" />
        <span>Profile</span>
        <img width="5" src="../assets/icons/angle.svg" alt=""
      /></a>
      <a
        href="./auth.html"
        class="flex items-center gap-2 stroke-[#b69451] font-bold text-[#ffd075] [text-shadow:0_0_34px_#ffd075,_0_0_14px_#ffd075]"
        ><img width="30" src="../assets/icons/nav-deco5.svg" alt="" />Enroll Now
        <img width="5" src="../assets/icons/angle.svg" alt=""
      /></a>
    </nav>
    <img
      class="animation-light-pulse pointer-events-none absolute right-0 top-0 hidden h-16 origin-top mix-blend-screen md:block"
      src="../assets/images/nav-glow.jpg"
      alt=""
    />
    <img
      class="animation-light-pulse-2 pointer-events-none absolute right-0 top-0 hidden h-16 origin-top mix-blend-screen md:block"
      src="../assets/images/nav-glow.jpg"
      alt=""
    />
    <img
      class="bar-left absolute -bottom-2 left-0 z-40 h-4 w-[50%] object-contain lg:w-[30%]"
      src="../assets/images/bar-left.webp"
      alt=""
    />
    <img
      class="bar-right absolute -bottom-2 right-0 z-40 h-4 w-[50%] object-contain lg:w-[30%]"
      src="../assets/images/bar-right.webp"
      alt=""
    />
    <img
      src="../assets/images/corner-left.webp"
      alt=""
      class="corner-left absolute left-0 top-16 w-32"
    />
    <img
      src="../assets/images/corner-right.webp"
      alt=""
      class="corner-right absolute right-0 top-16 w-32 object-contain"
    />
    <img
      class="nav-bar-bg-left pointer-events-none absolute left-0 top-0 z-10 h-16 w-[50%] object-cover opacity-20"
      src="../assets/images/nav-bar-bg-left.webp"
      alt=""
    />
    <img
      class="nav-bar-bg-right pointer-events-none absolute right-0 top-0 z-10 h-16 w-[50%] object-cover opacity-20"
      src="../assets/images/nav-bar-bg-right.webp"
      alt=""
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showMobileMenu = ref(false)

const toggleNav = () => {
  showMobileMenu.value = !showMobileMenu.value
  document.body.style.overflow = showMobileMenu.value ? 'hidden' : 'auto'
}
</script>

<style scoped>
.animation-light-pulse,
.animation-light-pulse-2 {
  animation: light-pulse 5s infinite alternate;
  width: auto;
}
@keyframes light-pulse {
  0% {
    opacity: 0;
    transform: scale3d(0.8, 0.8, 0.8);
  }
  30% {
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
