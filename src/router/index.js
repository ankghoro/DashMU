import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
import Forms from '@/views/Forms.vue'
import Tables from '@/views/Tables.vue'
import About from '@/views/AboutView.vue'

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
				},
				{
					path: "/forms/editors",
					name: "editors",
					component: Advanced
				}
			]
		},
		{
			path: '/table',
			name: 'table',
			component: Tables
		},
		{
			path: '/about',
			name: 'about',
			component: About
		}
	]
})

export default router
