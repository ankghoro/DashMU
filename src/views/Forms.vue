<template>
	<div class="content-header">
		<div class="container-fluid">
			<div class="row mb-2">
				<div class="col-sm-6">
					<h1 class="m-0">{{ firstUpper(page) }}</h1>
				</div>
			</div>
		</div>
	</div>
	<div class="content-body">
		<div class="container-fluid">
			<General v-if="page == 'general'" />
			<Advanced v-if="page == 'advanced'" />
			<Editors v-if="page == 'editors'" />
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import General from '@/components/forms/General.vue'
import Advanced from '@/components/forms/Advanced.vue'
import Editors from '@/components/forms/Editors.vue'

export default {
	name: 'forms',
	components: {
		General,
		Advanced,
		Editors
	},
	methods: {
		firstUpper(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	},
	setup() {
		const route = useRoute()
		const page = computed(() => route.name)
		return { page }
	}
}
</script>