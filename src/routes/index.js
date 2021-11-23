const routes = [
	{
		path: "/",
		name: "quotes",
		component: () => import('@/components/QuoteList')
	}
]

export default routes