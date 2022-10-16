<template>
  <div :class="['card', $props.block ? 'card-block' : '']">
    <div
      v-if="$slots.image"
      :class="['card-img', autoImage ? 'card-img-auto' : '']"
    >
      <slot name="image" />
    </div>
    <div v-else :class="['card-img', autoImage ? 'card-img-auto' : '']">
      <img src="/img/placeholder.jpg" alt="placeholder-img" />
    </div>
    <div class="card-title">
      <slot name="title" />
    </div>
    <div class="card-desc">
      <slot name="desc" />
    </div>
  </div>
</template>

<script lang="ts" src="./controller.ts"></script>
