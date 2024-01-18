import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Forms from '@/views/Forms.vue'
import General from '@/components/forms/General.vue'
import Advanced from '@/components/forms/Advanced.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard
		},
		{
			path: '/forms',
			name: 'forms',
			component: Forms,
			children: [
				{
					path: "/forms/general",
					name: "general",
					component: General
				},
				{
					path: "/forms/advanced",
					name: "advanced",
					component: Advanced
				}
			]
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue')
		}
	]
})

export default router
