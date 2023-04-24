<template>
  <BaseBtn :disabled="isCurrent" :loading="loading" prepend-icon="$mdiAccount" @click="handler()">
    {{ userName }}
  </BaseBtn>
</template>

<script setup>
let loading = $ref(false)

let auth = useAuthStore()

let userName = computed(() => (auth.userName ? `Logout ${auth.userName}` : 'Login'))

let handler = async () => {
  loading = true
  await auth.logout()
  loading = false
}
</script>
