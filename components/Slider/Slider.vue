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
        <div v-for="item in slides" :key="item.id" class="slider-list-item">
          <NuxtLink :to="`/detail/`">
            <Card>
              <template #image>
                <img
                  :alt="`image-${item.title}`"
                  :src="item.thumbnail"
                  height="300"
                  width="300"
                />
              </template>
              <template #title>
                <div>{{ item.title }}</div>
                <div>$. {{ item.price }}.00</div>
              </template>
              <template #desc> Category {{ item.id }} </template>
            </Card>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./controller.ts"></script>
