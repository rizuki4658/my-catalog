<template>
  <div class="modal-default">
    <transition name="fade">
      <div v-if="show" class="modal-wrapper" @click="handleShow">A</div>
    </transition>

    <div :class="['modal-content-slide', show ? 'show' : '']">
      <div class="modal-title">
        <div class="modal-title--content">
          <slot name="title" />
        </div>
        <button @click="handleShow">x</button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" src="./controller.ts"></script>
