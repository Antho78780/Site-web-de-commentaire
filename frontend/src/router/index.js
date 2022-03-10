import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'login',
		component: () => import("../views/loginView.vue")
	},
	{
		path: '/register',
		name: 'register',
		component: () => import("../views/registerView.vue")
	},
	{
		path: '/accueil',
		name: 'accueil',
		component: () => import("../views/accueilView.vue")
	},
	{
		path: '/profil',
		name: 'profil',
		component: () => import("../views/profilView.vue")
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
