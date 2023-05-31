<!--
 * @Author: jingmin-kuang
 * @Date: 2023-05-31 14:13:32
 * @LastEditTime: 2023-05-31 14:14:10
 * @LastEditors: jingmin-kuang
 * @Description: 
-->
<template>
  <div class="k-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'k-button',
  props: {
    type: String
  }
}
</script>

<style scoped>
  .k-button {
      display: inline-block;
      padding: 3px 6px;
      background: #000;
      color: #fff;
  }
</style>
