<template>
  <div class="image-item">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <img :src="src" :alt="alt" class="image" />
      <div class="description">
        {{ description }}
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageItem',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'Image',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true    
    },
  },
});
</script>

<style scoped>
.image-item {
  text-align: center;
}
.image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;
}
.description {
  margin-top: 10px ;
 font-size: 0.9em;
  color: #666;
}
</style>