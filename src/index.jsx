import Page from "./components/Page"

export default function index() {
	return (
		<Page>
			<a href="/src/pages/index.html">
				<h1>Главная</h1>
			</a>
			<a href="/src/pages/catalog/novelty.html">
				<h1>Новинки</h1>
			</a>
		</Page>
	)
}