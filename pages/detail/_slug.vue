<template>
  <div class="detail">
    <div class="detail-image">
      <SliderGallery />
    </div>
    <div class="detail-product">
      <div class="detail-product-title">
        <h1>Product 1</h1>
        <NuxtLink to="/">
          <span>category's 1</span>
        </NuxtLink>
      </div>
      <div class="detail-product-price">Rp. 1.000.000</div>
      <div class="detail-product-color">
        <div class="label">Select Colors</div>
        <Radio v-model="language" option="HTML">
          <div class="detail-product-color--option">
            <div class="color" style="background-color: red" />
          </div>
        </Radio>
        <Radio v-model="language" option="HTML">
          <div class="detail-product-color--option">
            <div class="color" style="background-color: green" />
          </div>
        </Radio>
        <Radio v-model="language" option="HTML">
          <div class="detail-product-color--option">
            <div class="color" style="background-color: blue" />
          </div>
        </Radio>
      </div>
      <div class="detail-product-size">
        <div class="label">Select Size</div>
        <div class="columns">
          <Radio v-for="n in 10" :key="n" v-model="size" :option="`Size ${n}`">
            <div class="detail-product-size--option">
              {{ `Size ${n}` }}
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
          Join the party and celebrate 40 years of pushing sport and fashion
          boundaries with the Air Force 1 React. Taking a bold step into b-ball
          iconography, its plush React foam and amplified outsole bring new-age
          comfort. Polished gold details and fresh branding that blends logos
          from past releases honour the fearless off-court look and pay tribute
          to the AF-1's reign.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./_slug.ts" />
