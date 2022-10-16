<template>
  <div class="navigation">
    <div class="navigation-container">
      <div class="navigation-logo">
        <NuxtLink to="/">
          <img
            src="/img/evermos.png"
            alt="logo"
            width="120"
            height="32"
            class="navigation-logo--desktop"
            @click="handleResetMenu"
          />
          <img
            src="/img/logo1.png"
            alt="logo"
            width="32"
            height="32"
            class="navigation-logo--mobile"
            @click="showMenuMobile = true"
          />
        </NuxtLink>
      </div>
      <div class="navigation-menu">
        <ul class="navigation-menu--list">
          <li
            v-for="(item, key) in menu"
            :key="key"
            :class="['navigation-menu--list_item', item.active ? 'active' : '']"
            @click="handleClickMenu(key)"
          >
            <NuxtLink :to="item.link">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navigation-chip">
        <Search />
        <NuxtLink to="/" tag="button" class="navigation-chip-button">
          <IconsHeart />
        </NuxtLink>
        <NuxtLink to="/" tag="button" class="navigation-chip-button">
          <IconsCart />
        </NuxtLink>
      </div>
    </div>

    <div class="show-on-mobile">
      <ModalSlide v-model="showMenuMobile">
        <template #title>
          <NuxtLink to="/">
            <img
              src="/img/evermos.png"
              alt="logo"
              width="120"
              @click="handleResetMenu"
            />
          </NuxtLink>
        </template>
        <div class="navigation-container-mobile">
          <ul class="navigation-menu--list">
            <li
              v-for="(item, key) in menu"
              :key="key"
              :class="[
                'navigation-menu--list_item',
                item.active ? 'active' : '',
              ]"
              @click="handleClickMenu(key)"
            >
              <NuxtLink :to="item.link">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </ModalSlide>
    </div>
  </div>
</template>

<script lang="ts" src="./controller.ts"></script>
