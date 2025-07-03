<template>
  <div class="image-gallery">
    <div v-for="(item, index) in images" :key="index"  class="image-column">
      <ImageItem
        :src="item.imageSrc"
        :alt="item.imageAlt"
        :title="item.imageTitle"
        :description="item.imageDescription"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ImageItem from './components/ImageItem.vue';
export default defineComponent({
  components: {
    ImageItem,
  },
  setup() {
    const images =  ref([{
      imageSrc: '/xxx/images/OIP-C (1).webp',
      imageAlt: 'Example Image',
      imageTitle: '示例图片(1)',
      imageDescription: '这是一张猫老师示例图片的描述。'
    },{
      imageSrc: '/xxx/images/OIP-C (2).webp',
      imageAlt: 'Example Image',
      imageTitle: '示例图片(2)',
      imageDescription: '这是一张猫老师示例图片的描述。'
    },{
      imageSrc: '/xxx/images/OIP-C (3).webp',
      imageAlt: 'Example Image',
      imageTitle: '示例图片(3)',
      imageDescription: '这是一张猫老师示例图片的描述。'
    },{
      imageSrc: '/xxx/images/OIP-C (4).webp',
      imageAlt: 'Example Image',
      imageTitle: '示例图片(4)',
      imageDescription: '这是一张猫老师示例图片的描述。'
    },{
      imageSrc: '/xxx/images/OIP-C (5).webp',
      imageAlt: 'Example Image',
      imageTitle: '示例图片(5)',
      imageDescription: '这是一张猫老师示例图片的描述。'
    },{
      imageSrc: '/xxx/images/OIP-C (6).webp',
      imageAlt: 'Example Image',
      imageTitle: '示例图片(6)',
      imageDescription: '这是一张猫老师示例图片的描述。'
    },{
      imageSrc: '/xxx/images/OIP-C (7).webp',
      imageAlt: 'Example Image',
      imageTitle: '示例图片(7)',
      imageDescription: '这是一张猫老师示例图片的描述。'
    },{
      imageSrc: '/xxx/images/OIP-C (8).webp',
      imageAlt: 'Example Image',
      imageTitle: '示例图片(8)',
      imageDescription: '这是一张猫老师示例图片的描述。'
    },{
      imageSrc: '/xxx/images/OIP-C (9).webp',
      imageAlt: 'Example Image',
      imageTitle: '示例图片(9)',
      imageDescription: '这是一张猫老师示例图片的描述。'
    },{
      imageSrc: '/xxx/images/OIP-C (10).webp',
      imageAlt: 'Example Image',
      imageTitle: '示例图片(10)',
      imageDescription: '这是一张猫老师示例图片的描述。'
    }])

    return {
      images
    };
  },
});
</script>

<style scoped>
/* .main-page {
  min-width: 1400px;
  display: flex;
  align-items: flex-start;
  flex-flow: wrap;
  gap: 8px;
} */
.image-gallery {
  column-count: 3; /* 设置列数 */
  column-gap: 20px; /* 设置列间距 */
}
.image-column {
  break-inside: avoid; /* 防止内容被分到不同的列 */
  margin-bottom: 20px;
}
</style>