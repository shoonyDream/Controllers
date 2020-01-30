<template>
	<div class="body">
		<header class="header">11</header>
		<div class="page-wrapper">
			<main class="content">
				<div class="container">
					<Grouplist />
				</div>
			</main>
		</div>
		<footer class="footer">22</footer>
	</div>
</template>

<script>

// @ is an alias to /src
import Grouplist from '@/components/Group-list.vue'


export default {
  name: 'home',
  components: {
    Grouplist
  }
}
</script>
