<template>
	<div class="content-header">
		<div class="container-fluid">
			<div class="row mb-2">
				<div class="col-sm-6">
					<h1 class="m-0">Dashboard</h1>
				</div>
			</div>
		</div>
	</div>
	<div class="content-body">
		<div class="container-fluid">
			<General v-if="text == 'general'" />
			<Advanced v-if="text == 'advanced'" />
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import General from '@/components/forms/General.vue'
import Advanced from '@/components/forms/Advanced.vue'

export default {
	name: 'forms',
	components: {
		General,
		Advanced
	},
	setup() {
		const route = useRoute()
		const text = computed(() => route.name)
		return { text }
	}
}
</script>