<template>
  <button
    :class="{ 'is-active': isActive ? isActive() : null }"
    :title="title"
    class="menu-item"
    @click="action"
  >
    <VIcon :icon="icon" />
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    action: {
      type: Function,
      required: true
    },

    isActive: {
      type: Function,
      default: null
    }
  }

  //   data() {
  //     return {
  //       remixiconUrl
  //     }
  //   }
}
</script>

<style lang="scss">
.menu-item {
  background: transparent;
  border: none;
  border-radius: 0.4rem;
  // color: #fff;
  cursor: pointer;
  height: 1.75rem;
  padding: 0.25rem;
  margin-right: 0.25rem;
  width: 1.75rem;

  svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  &.is-active,
  &:hover {
    color: #0a2be5;
  }
}
</style>
