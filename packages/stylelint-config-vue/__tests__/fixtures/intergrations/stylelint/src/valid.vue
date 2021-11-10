<template>
  <div class="foobar"></div>
</template>

<script>
export default {
  name: `FooBar`
}
</script>

<style scoped>
.selector-1,
.selector-2,
.selector-3[type='text'] {
  background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
  box-sizing: border-box;
  display: block;
  color: #333;
}
</style>
