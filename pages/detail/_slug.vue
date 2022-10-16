<template>
  <div class="detail">
    <div class="detail-image">
      <SliderGallery :items="detail.images" :active="detail.thumbnail" />
    </div>
    <div class="detail-product">
      <div class="detail-product-title">
        <h1>{{ detail.title }}</h1>
        <NuxtLink to="/">
          <span>{{ detail.category }}</span>
        </NuxtLink>
      </div>
      <div class="detail-product-price">$. {{ detail.price }}.00</div>
      <div class="detail-product-color">
        <div class="label">Select Colors</div>
        <Radio
          v-for="(color, keyColor) in detail.color"
          :key="keyColor"
          v-model="colors"
          :option="color"
        >
          <div class="detail-product-color--option">
            <div
              class="color"
              :style="{
                backgroundColor: color.color,
              }"
            />
          </div>
        </Radio>
      </div>
      <div class="detail-product-size">
        <div class="label">Select Size</div>
        <div class="columns">
          <Radio
            v-for="(sizeproduct, keySize) in detail.color"
            :key="keySize"
            v-model="size"
            :option="sizeproduct"
          >
            <div class="detail-product-size--option">
              {{ sizeproduct.name }}
            </div>
          </Radio>
        </div>

        <button class="button-cart">Add to Cart</button>
        <button class="button-favourite">
          Favourite
          <span class="icon">
            <IconsHeart />
          </span>
        </button>
      </div>
      <div class="detail-product-desc">
        <p>
          {{ detail.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./_slug.ts" />
