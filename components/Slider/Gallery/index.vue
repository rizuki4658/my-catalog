<template>
  <div class="slider slider-gallery">
    <div class="slider-image">
      <div
        :class="[
          'slider-image-active',
          zoomed ? 'slider-image-active--zoom' : '',
        ]"
        :style="{ backgroundImage: zoomed ? `url(${activeImage})` : '' }"
        @click="handleClickZoom"
        @mousemove="handleZoom"
      >
        <img v-if="activeImage" :src="`${activeImage}`" alt="banner" />
        <img v-else src="/img/placeholder.jpg" alt="banner" />
      </div>
    </div>
    <div class="slider-list slider-list--gallery">
      <template v-if="showButton">
        <button class="button-gallery-prev" @click="prevSlide">
          <IconsLeft />
        </button>
        <button class="button-gallery-next" @click="nextSlide">
          <IconsRight />
        </button>
      </template>
      <div ref="sliderTrackGallery" class="slider-list-track">
        <div v-for="(image, n) in images" :key="n" class="slider-list-item">
          <img
            :src="image"
            :alt="`image_${n}`"
            @click="handleSelectedImage(n)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./controller.ts"></script>
