<template>
  <div class="body">
    <header class="header">Header</header>
    <div class="page-wrapper">
      <main class="content">
        <div class="container">
          <Grouplist />
        </div>
      </main>
    </div>
    <footer class="footer">Footer</footer>
  </div>
</template>

<script>

import Grouplist from '@/components/Group-list.vue'

export default {
  name: 'home',
  components: {
    Grouplist
  }
}
</script>
