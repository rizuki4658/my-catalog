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
          <NuxtLink :to="`/detail/${n}`">
            <Card>
              <!-- <template #image>
                <img :alt="`image-${n}`"/>
              </template> -->
              <template #title>
                <div>Item name {{ n }}</div>
                <div>Rp. {{ n }}.000.000</div>
              </template>
              <template #desc> Category {{ n }} </template>
            </Card>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./controller.ts"></script>
