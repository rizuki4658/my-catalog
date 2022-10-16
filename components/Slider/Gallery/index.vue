<template>
  <div class="slider slider-gallery">
    <div class="slider-image">
      <div
        :class="[
          'slider-image-active',
          zoomed ? 'slider-image-active--zoom' : '',
        ]"
        :style="{ backgroundImage: zoomed ? 'url(/img/placeholder.jpg)' : '' }"
        @click="handleClickZoom"
        @mousemove="handleZoom"
      >
        <img src="/img/placeholder.jpg" alt="banner" />
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
        <div v-for="n in 24" :key="n" class="slider-list-item">
          <button>
            <img src="/img/placeholder.jpg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./controller.ts"></script>
