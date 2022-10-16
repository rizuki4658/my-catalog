<template>
  <div class="radio">
    <input
      :id="radioOption"
      v-model="model"
      :value="radioOption"
      :name="nameRadio"
      type="radio"
      @change="handleChange"
    />
    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" src="./controller.ts"></script>
