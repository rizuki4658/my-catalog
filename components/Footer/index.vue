<template>
  <div class="footer-container">
    <div class="footer-menu">
      <div class="footer-menu-left">
        <ul v-for="(item, key) in items" :key="key">
          <li class="title">
            {{ item.title }}
            <ul class="list">
              <li
                v-for="(child, keyChild) in item.items"
                :key="`${key}${keyChild}`"
                class="list-item"
              >
                <NuxtLink :to="child.link">
                  {{ child.name }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="footer-menu-right">
        <NuxtLink v-for="(media, n) in socials" :key="n" :to="media.link">
          <button>
            <Component :is="`Icons${media.icon}`" />
          </button>
        </NuxtLink>
      </div>
    </div>

    <div class="footer-copyright">&copy; 2022</div>
  </div>
</template>

<script src="./controller.ts"></script>
