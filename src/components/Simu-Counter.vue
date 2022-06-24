<template>
  <div id="counter">
    <button @click="count++">
      Count is : {{ count }}
    </button>
    <button @click="count=0">reset</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    }
  }
</script>

<style>
button {
  font-weight: bold;
}
</style>
