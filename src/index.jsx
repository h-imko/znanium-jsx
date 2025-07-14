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
									<h1> книги/статьи/Публичным библиотекам/Книги с доп. материалами </h1>
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
									<h1> журналы/Подборки Znanium/ </h1>
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
							<li>
								<a href="/src/pages/catalog/authors/index.jsx">
									<h1> Авторы </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/catalog/publishers/index.jsx">
									<h1> Издательства </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/catalog/universities/index.jsx">
									<h1> Аффилиация авторов </h1>
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
						<a href="#">
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
						<a href="#">
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
						<a href="#">
							<h1> Рекомендательные сервисы </h1>
						</a>
						<ul>
							<li>
								<a href="/src/pages/recservice/journals/index.jsx">
									<h1> журналы </h1>
								</a>
								<ul>
									<li>
										<a href="/src/pages/recservice/journals/project/index.jsx">
											<h1> проект вариант 1 </h1>
										</a>
									</li>
									<li>
										<a href="/src/pages/recservice/journals/project/index.1.jsx">
											<h1> проект вариант 2 </h1>
										</a>
									</li>
								</ul>
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
						<a href="#">
							<h1> кабинет </h1>
						</a>
						<ul>
							<li>
								<a href="/src/pages/admin/subscribes/index.jsx">
									<h1> подписки </h1>
								</a>
								<ul>
									<li>
										<a href="/src/pages/admin/subscribe/index.jsx">
											<h1> подписка </h1>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="/src/pages/admin/orders/index.jsx">
									<h1> заказы </h1>
								</a>
							</li>
							<li>
								<a href="#">
									<h1> Мой профиль </h1>
								</a>
								<ul>
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
								</ul>
							</li>
							<li>
								<a href="#">
									<h1> пользователи </h1>
								</a>
								<ul>
									<li>
										<a href="/src/pages/admin/user-groups/index.jsx">
											<h1> группы </h1>
										</a>
										<ul>
											<li>
												<a href="/src/pages/admin/staff-group-members/index.jsx">
													<h1> группа </h1>
												</a>
											</li>
										</ul>
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
								<a href="#">
									<h1>Статистика</h1>
								</a>
								<ul>
									<li>
										<a href="#">
											<h1>Фонд</h1>
										</a>
										<ul>
											<li>
												<a href="/src/pages/admin/statistic-fund/index.jsx">
													<h1>Доступно</h1>
												</a>
											</li>
											<li>
												<a href="/src/pages/admin/statistic-ebs/index.jsx">
													<h1> Тематика </h1>
												</a>
											</li>
											<li>
												<a href="/src/pages/admin/statistic-publication-type-vpo/index.jsx">
													<h1> ВПО </h1>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="/src/pages/admin/statistic-users/index.jsx">
											<h1> Пользователи </h1>
										</a>
									</li>
									<li>
										<a href="#">
											<h1> активность </h1>
										</a>
										<ul>
											<li>
												<a href="/src/pages/admin/statistic-activity/browsing/index.jsx">
													<h1> чтение </h1>
												</a>
											</li>
											<li>
												<a href="/src/pages/admin/statistic-activity/activity-readers/index.jsx">
													<h1> Читатели </h1>
												</a>
											</li>
											<li>
												<a href="/src/pages/admin/statistic-activity/activity-browsed-docs/index.jsx">
													<h1> Книговыдачи </h1>
												</a>
											</li>
											<li>
												<a href="/src/pages/admin/statistic-activity/activity-docs/index.jsx">
													<h1> Документы - чтение </h1>
												</a>
											</li>
											<li>
												<a href="/src/pages/admin/statistic-activity/denied/index.jsx">
													<h1> Отказы </h1>
												</a>
											</li>
											<li>
												<a href="/src/pages/admin/statistic-activity/deniers/index.jsx">
													<h1> Пользователи </h1>
												</a>
											</li>
											<li>
												<a href="/src/pages/admin/statistic-activity/deny-list/index.jsx">
													<h1> Список отказов </h1>
												</a>
											</li>
											<li>
												<a href="/src/pages/admin/statistic-activity/denied-docs/index.jsx">
													<h1> Документы - отказы </h1>
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<a href="#">
									<h1> Статистика COUNTER R5 </h1>
								</a>
								<ul>
									<li>
										<a href="/src/pages/admin/counter-reports/index.jsx">
											<h1> Отчеты в формате Excel </h1>
										</a>
									</li>
									<li>
										<a href="/src/pages/admin/counter-info/index.jsx">
											<h1> Особенности COUNTER в Znanium </h1>
										</a>
									</li>
									<li>
										<a href="/src/pages/admin/counter-sushi/index.jsx">
											<h1> COUNTER SUSHI </h1>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#">
									<h1> Правообладателю </h1>
								</a>
								<ul>
									<li>
										<a href="/src/pages/admin/copyholder/statistic-fund/index.jsx">
											<h1> Фонд </h1>
										</a>
										<ul>
											<li>
												<a href="/src/pages/admin/copyholder/statistic-ebs/index.jsx">
													<h1> Тематика/УДК/ГРНТИ/ББК/УГС </h1>
												</a>
											</li>
											<li>
												<a href="/src/pages/admin/copyholder/statistic-publication-type/index.jsx">
													<h1> Вид изд./Тип публикации </h1>
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<a href="/src/pages/admin/updated-books/index.jsx">
									<h1> Обновлённые книги </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/admin/withdrawn-documents/index.jsx">
									<h1> Изъятые документы </h1>
								</a>
								<ul>
									<li>
										<a href="/src/pages/admin/withdrawn-documents/soon/index.jsx">
											<h1> Будут изъяты </h1>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="/src/pages/admin/my-tickets/index.jsx">
									<h1> Мои ключи доступа </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/admin/certificates/index.jsx">
									<h1> Мои сертификаты </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/admin/settings/index.jsx">
									<h1> Настройки </h1>
								</a>
							</li>
							<li>
								<a href="#">
									<h1> Моё учебное заведение </h1>
								</a>
								<ul>
									<li>
										<a href="/src/pages/admin/my-university-authors/index.jsx">
											<h1> Аффилированные авторы </h1>
										</a>
									</li>
									<li>
										<a href="/src/pages/admin/recommended-collections/index.jsx">
											<h1> Рекомендованная литература </h1>
										</a>
										<ul>
											<li>
												<a href="/src/pages/admin/recommended-collection-documents/index.jsx">
													<h1> Детальная </h1>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="/src/pages/admin/my-recommended-collections/index.jsx">
											<h1> Рекомендую студентам </h1>
										</a>
									</li>
									<li>
										<a href="/src/pages/admin/key-requests/index.jsx">
											<h1> Заявки на выдачу ключей </h1>
										</a>
										<ul>
											<li>
												<a href="/src/pages/admin/key-requests/approved/index.jsx">
													<h1> Выполненные </h1>
												</a>
											</li>
											<li>
												<a href="/src/pages/admin/key-requests/declined/index.jsx">
													<h1> Отклоненные </h1>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="/src/pages/admin/teachers-requests/index.jsx">
											<h1> Заявки на преподавателей </h1>
										</a>
										<ul>
											<li>
												<a href="/src/pages/admin/teachers-requests/ordered/index.jsx">
													<h1> В заказах </h1>
												</a>
											</li>
											<li>
												<a href="/src/pages/admin/teachers-requests/subscribed/index.jsx">
													<h1> В подписках </h1>
												</a>
											</li>
											<li>
												<a href="/src/pages/admin/teachers-requests/declined/index.jsx">
													<h1> Отклонено библиотекой </h1>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="/src/pages/admin/branches/index.jsx">
											<h1> Филиалы </h1>
										</a>
										<ul>
											<li>
												<a href="/src/pages/admin/assign-tickets-to-branch/index.jsx">
													<h1> Передать ключи в филиал </h1>
												</a>
											</li>
											<li>
												<a href="/src/pages/admin/release-tickets-from-branch/index.jsx">
													<h1> Отозвать ключи из филиала </h1>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="/src/pages/admin/discipline-okco/index.jsx">
											<h1> Документы по ОКСО </h1>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">
							<h1> О проекте </h1>
						</a>
						<ul>
							<li>
								<a href="/src/pages/about/contacts/index.jsx">
									<h1> Контакты </h1>
								</a>
							</li>
							<li>
								<a href="/src/pages/about/otzyvy/index.jsx">
									<h1> Отзывы </h1>
								</a>
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