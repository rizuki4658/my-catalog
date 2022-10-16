<template>
  <div class="catalog">
    <div class="catalog-header">
      <h1>
        Populars <span class="catalog-count">({{ data.total }})</span>
      </h1>
    </div>
    <div class="catalog-body">
      <div v-for="(item, n) in data.items" :key="item.id">
        <NuxtLink :to="`/detail/${n % 2 === 0 ? 'iphone_x' : 'iphone_9'}`">
          <Card block>
            <template #image>
              <img
                :alt="`image-${item.title}`"
                :src="item.thumbnail"
                height="300"
                width="300"
              />
            </template>
            <template #title>
              <div>{{ item.title }}</div>
              <div>$. {{ item.price }}.00</div>
            </template>
            <template #desc> Category {{ item.category }} </template>
          </Card>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
