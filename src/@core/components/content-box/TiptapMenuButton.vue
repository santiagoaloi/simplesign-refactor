<template>
  <VBtn
    :class="{ 'text-primary': isActive ? isActive() : null }"
    :title="title"
    class="rounded-0"
    size="33"
    @click="action"
  >
    <VIcon :icon="icon" />
  </VBtn>
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
}
</script>

<style lang="scss">
.menu-item {
  background: transparent;
  border: none;
  border-radius: 0.4rem;

  cursor: pointer;
  height: 1.75rem;
  padding: 0.25rem;
  margin-right: 0.25rem;
  width: 1.75rem;

  &.is-active,
  &:hover {
    color: #0a2be5;
  }
}
</style>
