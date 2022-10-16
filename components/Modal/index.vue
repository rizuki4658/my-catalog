<template>
  <div class="modal-default">
    <transition name="fade">
      <div v-if="show" class="modal-wrapper" @click="handleShow">A</div>
    </transition>

    <transition name="scale">
      <div v-if="show" class="modal-content">
        <div class="modal-title">
          <div class="modal-title--content">
            <slot name="title" />
          </div>
          <button @click="handleShow">x</button>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" src="./controller.ts"></script>
