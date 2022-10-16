<template>
  <div class="catalog">
    <div class="catalog-header">
      <h1>Populars <span class="catalog-count">(128)</span></h1>
    </div>
    <div class="catalog-body">
      <div v-for="n in 24" :key="n">
        <NuxtLink :to="`/detail/product_${n}`">
          <Card block>
            <!-- <template #image>
              <img :alt="`image-${n}`"/>
            </template> -->
            <template #title>
              <div>Item name {{ n }}</div>
              <div>Rp. {{ n }}.000.000</div>
            </template>
            <template #desc> Category {{ n }} </template>
          </Card>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
