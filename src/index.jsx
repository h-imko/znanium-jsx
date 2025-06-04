import Page from "./components/Page"

export default function index() {
	return (
		<Page>
			<div className="container">
				<ul className="dev-nav">
					<li>
						<a href="/src/pages/index.jsx">
							<h1> Главная </h1>
						</a>
					</li>
					<li>
						<a href="/src/pages/catalog/index.jsx">
							<h1>Каталог </h1>
						</a>
						<ul>
							<li>
								<a href="/src/pages/catalog/novelty/index.jsx">
									<h1> новинки </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/catalog/books/index.jsx">
									<h1> книги </h1>
								</a>
								<ul>
									<li>
										<a href="/src/pages/catalog/books/theme/index.jsx">
											<h1> темы </h1>
										</a>
										<ul>
											<li>
												<a href="/src/pages/catalog/books/theme/publications/index.jsx">
													<h1> публикации </h1>
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<a href="/src/pages/catalog/magazines/index.jsx">
									<h1> журналы </h1>
								</a>
								<ul>
									<li>
										<a href="/src/pages/catalog/magazines/issues/index.jsx">
											<h1> журнал </h1>
										</a>
									</li>
									<li>
										<a href="/src/pages/catalog/magazines/all/index.jsx">
											<h1> все </h1>
										</a>
									</li>
									<li>
										<a href="/src/pages/catalog/magazines/alphabet/index.jsx">
											<h1> альфавитный указатель </h1>
										</a>
									</li>
									<li>
										<a href="/src/pages/catalog/magazines/infram/index.jsx">
											<h1> инфра м </h1>
										</a>
									</li>
									<li>
										<a href="/src/pages/catalog/magazines/vak/index.jsx">
											<h1> вак </h1>
										</a>
										<ul>
											<li>
												<a href="/src/pages/catalog/magazines/vak/ref/index.jsx">
													<h1> список </h1>
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<a href="/src/pages/catalog/document/index.jsx">
									<h1> документ </h1>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</Page>
	)
}