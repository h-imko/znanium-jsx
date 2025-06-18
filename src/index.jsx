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
						<a href="">
							<h1> Цены </h1>
						</a>
						<ul>
							<li>
								<a href="/src/pages/price/organizations/index.jsx">
									<h1> Организациям </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/price/individuals/index.jsx">
									<h1> Физическм лицам </h1>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="">
							<h1> Корзина </h1>
						</a>
						<ul>
							<li>
								<a href="/src/pages/cart/documents/index.jsx">
									<h1> документы </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/cart/collections/index.jsx">
									<h1> коллекции </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/cart/pereodicals/index.jsx">
									<h1> журналы </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/cart/printed-books/index.jsx">
									<h1> печатные издания </h1>
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
						<a href="">
							<h1> кабинет </h1>
						</a>
						<ul>
							<li>
								<a href="/src/pages/admin/subscribes/index.jsx">
									<h1> подписки </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/admin/subscribe/index.jsx">
									<h1> подписка </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/admin/orders/index.jsx">
									<h1> заказы </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/admin/my-profile/index.jsx">
									<h1> профиль </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/admin/edit-password/index.jsx">
									<h1> смена пароля </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/admin/edit-email/index.jsx">
									<h1> смена email </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/admin/user-groups/index.jsx">
									<h1> группы </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/admin/staff-group-members/index.jsx">
									<h1> группа </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/admin/portal-users/index.jsx">
									<h1> С моего портала  </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/admin/teachers/index.jsx">
									<h1> Преподаватели </h1>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="">
							<h1> О проекте </h1>
						</a>
						<ul>
							<li>
								<a href="/src/pages/about/contacts/index.jsx">
									<h1> Контакты </h1>
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
								<a href="/src/pages/my/empty/index.jsx">
									<h1> Страница с пустым списком чего угодно</h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/my/shelves/index.jsx">
									<h1> Книжные полки </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/my/shelves/index.1.jsx">
									<h1> Книжные полки cписок </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/my/history/index.jsx">
									<h1> История </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/my/bookmarks/index.jsx">
									<h1> Закладки </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/my/free-pages-links/index.jsx">
									<h1> LMS-ссылки </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/my/quotations/index.jsx">
									<h1> Цитаты </h1>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/src/pages/help/index.jsx">
							<h1> мой знаниум </h1>
						</a>
						<ul>
							<li>
								<a href="/src/pages/help/faq/index.jsx">
									<h1> FAQ </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/help/feedback/index.jsx">
									<h1> Обратная связь </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/help/manuals/index.jsx">
									<h1> Руководства </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/help/manual-reader/index.jsx">
									<h1> Руководства для читателя </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/help/firstvisit/index.jsx">
									<h1> Впервые на сайте </h1>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</Page>
	)
}