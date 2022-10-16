<template>
  <div>
    <div class="navigation-chip-search">
      <div class="navigation-chip-search--icon">
        <IconsSearch />
      </div>
      <input v-model="keyword" @click="handleShow" />
    </div>
    <div class="navigation-chip-search-mobile">
      <button class="navigation-chip-search-mobile--icon" @click="handleShow">
        <IconsSearch />
      </button>
    </div>

    <Modal v-model="show">
      <template #title>
        <h1><IconsSearch /> Search</h1>
      </template>
      <template #body>
        <div class="w-full">
          <input class="input rounded-full" />
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts" src="./controller.ts"></script>
