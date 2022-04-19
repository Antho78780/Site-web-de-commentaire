import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'accueil',
		component: () => import("../views/accueilView.vue")
	},
	{
		path: '/register',
		name: 'register',
		component: () => import("../views/registerView.vue")
	},
	{
		path: '/login',
		name: 'login',
		component: () => import("../views/loginView.vue")
	},
	{
		path: '/profil',
		name: 'profil',
		component: () => import("../views/profilView.vue")
	},
	{
		path: "/post",
		name: "post",
		component: () => import("../views/postView.vue")
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
