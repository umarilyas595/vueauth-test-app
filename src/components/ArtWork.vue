<template>
  <div class="col-mb-5">
    <h2>Art Work</h2>
    <div class="col-md-12 mt-5 ">
    	<gallery :images="images" :index="index" @close="index = null"></gallery>
	    <div
	      class="image"
	      v-for="(image, imageIndex) in images"
	      :key="imageIndex"
	      @click="index = imageIndex"
	      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
	    ></div>
    </div>
  </div>
</template>
<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    data: function () {
      return {
        images: [
          'https://images.unsplash.com/photo-1563206327-19e3bf3f60e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          'https://images.unsplash.com/photo-1561788806-baefea3f96cc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          'https://images.unsplash.com/photo-1561835503-648c2f1169d2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          'https://images.unsplash.com/photo-1562492569-e54b36dc0236?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          'https://images.unsplash.com/photo-1561162104-f10cf6a8c716?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          'https://images.unsplash.com/photo-1561542421-f1734db6ed05?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          'https://images.unsplash.com/photo-1561271657-fbad0db4caaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          'https://images.unsplash.com/photo-1561053602-7045b995540c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          'https://images.unsplash.com/photo-1562134956-4e7d93e96ffd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          'https://images.unsplash.com/photo-1562254717-fc60152e0b17?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          'https://images.unsplash.com/photo-1560941186-6f5a4428ca49?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          'https://images.unsplash.com/photo-1561065671-7231f7f8c501?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'
        ],
        index: null
      };
    },
 
    components: {
      'gallery': VueGallery
    },
  }
</script> 
 
<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
  .col-mb-5 {
  	margin-bottom: 50px;
  }
</style> 