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
							<h1> Каталог </h1>
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
					<li>
						<a href="/src/pages/collections/index.jsx">
							<h1> Коллекции </h1>
						</a>
						<ul>
							<li>
								<a href="/src/pages/collections/basic/index.jsx">
									<h1> Основная коллекция и её сегменты </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/collections/partners/index.jsx">
									<h1> Коллекции партнёров </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/collections/special/index.jsx">
									<h1> Специализированные коллекции</h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/collections/open-access/index.jsx">
									<h1> Коллекция Open Access </h1>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/src/pages/webinars/index.jsx">
							<h1> вебинары </h1>
						</a>
						<ul>
							<li>
								<a href="/src/pages/webinars/webinar/index.jsx">
									<h1> вебинар </h1>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/src/pages/news/index.jsx">
							<h1> новости </h1>
						</a>
						<ul>
							<li>
								<a href="/src/pages/news/item/index.jsx">
									<h1> новость </h1>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/src/pages/my/index.jsx">
							<h1> мой знаниум </h1>
						</a>
						<ul>
							<li>
								<a href="/src/pages/my/documents/index.jsx">
									<h1> В подписках </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/my/shelves/index.jsx">
									<h1> Книжные полки </h1>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</Page>
	)
}