<template>
  <div>
    <div class="navigation-chip-search">
      <div class="navigation-chip-search--icon">
        <IconsSearch />
      </div>
      <input v-model="keyword" @focusin="handleShow" @focusout="handleHide" />
    </div>
    <div class="navigation-chip-search-mobile">
      <button class="navigation-chip-search-mobile--icon" @click="handleShow">
        <IconsSearch />
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="./controller.ts"></script>
