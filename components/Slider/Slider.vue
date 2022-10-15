<template>
  <div class="slider">
    <div class="slider-title">
      <h1>Populars</h1>
      <div class="slider-control">
        <NuxtLink to="/populars">More</NuxtLink>
        <div class="slider-control--button">
          <button @click="prevSlide"><IconsLeft /></button>
          <button @click="nextSlide"><IconsRight /></button>
        </div>
      </div>
    </div>
    <div class="slider-list">
      <div ref="sliderTrack" class="slider-list-track">
        <div v-for="n in 24" :key="n" class="slider-list-item">
          <div class="slider-list-item--img">A</div>
          <div class="slider-list-item--desc">
            <h2 class="slider-list-item--desc_name">Item Name {{ n }}</h2>
            <span class="slider-list-item--desc_price">
              Rp. {{ n }}.000.000
            </span>
          </div>
          <div class="slider-list-item--category">Category {{ n }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./controller.ts"></script>
