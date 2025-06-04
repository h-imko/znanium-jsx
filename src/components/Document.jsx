import { LabelsAll } from "./Labels"
import AccordionSimple from "./AccordionSimple"
import ExportList from "./ExportList"
import AccordionList from "./AccordionList"
import DocumentsSlider from "../components/DocumentsSlider"
import clsx from "clsx"


export default function Document({ isDetail, isMagazine, isSub }) {

	function Actions() {
		return (
			<div class="document__actions">
				<a href="" class="document__action" title="Ознакомиться">
					<span class="icon icon--read"></span>
				</a>
				<button type="button" class="document__action" title="Рекомендовать для студентов">
					<span class="icon icon--thumb_up"></span>
				</button>
				<button type="button" class="document__action" title="Поместить на полку">
					<span class="icon icon--newsstand"></span>
				</button>
			</div>
		)
	}

	function ColAccess() {
		function Exrta() {
			return (
				<div class="document__accesses__extra" data-accordion="">
					<button type="button" class="document__accesses__extra__toggler" data-accordion-toggler="" aria-expanded="false" aria-controls="accordion-content-1">Как еще получить доступ?</button>
					<div class="document__accesses__extra__wrapper" data-accordion-wrapper="">
						<div class="document__accesses__extra__list" data-accordion-content="" id="accordion-content-1">
							<div class="document__offer">
								<div class="block-arrow-border">
									<div class="block-arrow-border__top">
										<div class="block-arrow-border__top__content">
											<div class="document__offer__title">Студенту или преподавателю</div>
										</div>
									</div>
									<div class="block-arrow-border__bottom">
										<div class="document__offer__body">
											<span>
												Отправьте <a href="">заявку на&nbsp;подключение к&nbsp;Znanium</a> по&nbsp;договору
											</span>
										</div>
									</div>
								</div>
							</div>
							<div class="document__offer">
								<div class="document__offer__body">
									<a href="" class="document__offer___buttonnk">Купить в составе основной коллекции от 899&nbsp;₽</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}

		return (
			<div className="document__col document__col--access">
				<div class="document__accesses">
					<div class="document__offer">
						<div class="document__offer__body">
							<span class="document__offer__name">Доступ онлайн</span>
							<span class="document__offer__price">3 000 ₽</span>
							<button type="button" class="document__offer__button" title="Добавить в корзину">В корзину</button>
						</div>
					</div>
					<div class="document__offer">
						<div class="document__offer__body">
							<span class="document__offer__name">Бумажная книга</span>
							<span class="document__offer__price">1&nbsp;590&nbsp;₽ <a href="" class="help" title="Смотреть справку"></a></span>
							<a href="" class="document__offer__button is-active" title="Перейти в корзину">В корзине</a>
						</div>
					</div>
					{ isDetail && <Exrta /> }
				</div>
			</div>
		)
	}

	function ColInfo() {

		function InfoItems() {
			return (
				<>
					<div class="document__info__item">
						<dt>Издательство:</dt>
						<dd><a href="">СОЛОН-Пресс</a></dd>
					</div>
					<div class="document__info__item">
						<dt>Год издания: </dt>
						<dd>2023</dd>
					</div>
					<div class="document__info__item">
						<dt>Авторы: </dt>
						<dd>
							<a href="">Курушин Александр Александрович, </a>
							<a href="">Нефедов Евгений Иванович,</a>
							<a href=""> Смольский Сергей Михайлович</a>
							<button type="button" class="rest-toggler" title="Показать остальное"></button>
							<a href="">Курушин Александр Александрович, </a>
							<a href="">Нефедов Евгений Иванович,</a>
							<a href=""> Смольский Сергей Михайлович</a>
							<a href="">Курушин Александр Александрович, </a>
							<a href="">Нефедов Евгений Иванович,</a>
							<a href=""> Смольский Сергей Михайлович</a>
							<a href="">Курушин Александр Александрович, </a>
							<a href="">Нефедов Евгений Иванович,</a>
							<a href=""> Смольский Сергей Михайлович</a>
						</dd>
					</div>
				</>
			)
		}

		function InfoMain() {
			return (
				<div class="document__info__block">
					<dl className="document__info__list">
						<InfoItems />
					</dl>
				</div>
			)
		}

		function InfoExtra({ isMobile, magazineItem, title = "Дополнительно" }) {
			function ItemVak() {
				return (
					<div class="document__info__item">
						<dt> </dt>
						<dd>
							<p><a href="/catalog/magazines/vak?ref=69df0b2d-84d2-11e8-b668-90b11c31de4c&amp;products=1">Биотехнология (в том числе бионанотехнологии)</a></p>
							<p><a href="/catalog/magazines/vak?ref=69df0bb3-84d2-11e8-b668-90b11c31de4c&amp;products=1">Технология обработки, хранения и переработки злаковых, бобовых культур, крупяных продуктов, плодоовощной продукции и виноградарства</a></p>
							<p><a href="/catalog/magazines/vak?ref=69df0bb4-84d2-11e8-b668-90b11c31de4c&amp;products=1">Технология мясных, молочных и рыбных продуктов и холодильных производств</a></p>
							<p><a href="/catalog/magazines/vak?ref=69df0bb7-84d2-11e8-b668-90b11c31de4c&amp;products=1">Биотехнология пищевых продуктов и биологических активных веществ</a></p>
							<p><a href="/catalog/magazines/vak?ref=69df0bb8-84d2-11e8-b668-90b11c31de4c&amp;products=1">Процессы и аппараты пищевых производств</a></p>
							<p><a href="/catalog/magazines/vak?ref=69df0bb9-84d2-11e8-b668-90b11c31de4c&amp;products=1">Технология и товароведение пищевых продуктов и функционального и специализированного назначения и общественного питания</a></p>
							<p><a href="/catalog/magazines/vak?ref=6fdec1ea-84d2-11e8-b668-90b11c31de4c&amp;products=1">"Экономика и управление народным хозяйством (по отраслям и сферам деятельности, в т.ч.: экономика, организация и управление предприятиями, отраслями, </a></p>
							<p><a href="/catalog/magazines/vak?ref=6fdec1ec-84d2-11e8-b668-90b11c31de4c&amp;products=1">Бухгалтерский учет, статистика</a></p>
						</dd>
					</div>
				)
			}

			return (
				<div className={
					clsx({
						"document__info__block": true,
						"document__info__block--mobile": isMobile
					})
				}>
					<AccordionSimple toggler={ <span class="document__info__block__toggler"> { title } </span> }>
						<dl className="document__info__list">
							{ magazineItem ? <ItemVak /> : <InfoItems /> }
						</dl>
					</AccordionSimple>
				</div>
			)
		}

		function Info() {
			return (
				<div class="document__info">
					<InfoMain />
					<InfoExtra isMobile />
					{ isMagazine && <InfoExtra title={ " Номенклатура ВАК " } magazineItem /> }
				</div>
			)
		}

		function Header() {
			if (!isDetail || isSub) {
				return (
					<a href="" class="document__header">
						<span class="document__title"> Современный русский язык. Лексикология. Фразеология </span>
						<span class="document__subtitle"> Учебное пособие </span>
					</a>
				)
			} else {
				return (
					<div class="document__header">
						<h1 class="document__title">Современный русский язык. Лексикология. Фразеология</h1>
						<span class="document__subtitle">Учебное пособие</span>
					</div>
				)
			}
		}

		function DocumentLabels() {
			return (
				<div class="document__labels">
					<LabelsAll />
				</div>
			)
		}
		return (
			<div className="document__col document__col--info">
				<Header />
				{ isSub && <Actions /> }
				{ isSub || <DocumentLabels /> }
				{ isSub || <Info /> }
			</div>
		)
	}

	function ColMain() {
		return (
			<div className="document__col document__col--main">
				<a href="" className="document__cover" title="Перейти к документу">
					<img src="/assets/static/img/12.webp" alt="Обложка" />
				</a>
				{ isSub || <Actions /> }
			</div>
		)
	}

	function Other() {
		function Group() {
			function Access({ isEmpty }) {
				if (isEmpty) {
					return (
						<div className="document__other__group__access"></div>
					)
				} else {
					return (
						<div class="document__other__group__access">
							<em>8 000 ₽</em>
							<a href="" class="document__other__button">В корзину</a>
						</div>
					)
				}
			}

			function OtherDocument() {
				return (
					<div className="document__other__document">
						<Document isSub />
					</div>
				)
			}

			return (
				<div className="document__other__group" data-accordion>
					<div class="document__other__group__header">
						<button type="button" class="document__other__group__title" data-accordion-toggler>2023 год</button>
						<Access isEmpty />
						<Access />
					</div>
					<div className="document__other__group__wrapper" data-accordion-wrapper>
						<div className="document__other__group__inner" data-accordion-content>
							<OtherDocument />
							<OtherDocument />
							<OtherDocument />
							<OtherDocument />
						</div>
					</div>
				</div>
			)
		}

		return (
			<div className="document__other">
				<Group />
				<Group />
				<Group />
				<Group />
			</div>
		)
	}

	function Tabs() {

		function Annotation() {
			return (
				<div class="document__annotation">
					В монографии исследуются социокультурные проблемы, возникающие при все большем и весьма агрессивном проникновении в нашу жизнь информационно-компьютерных технологий. Процесс цифровизации разных областей нашей жизни не только вытесняет определенные профессии, но меняет всю систему управления, начинает выполнять не только рутинные процессы, но и замещать человека в тех областях, которые казались собственно человеческими. Действительно, происходит цифровая революция, и нужно понимать происходящее. Как принимать цифровизацию, чтобы польза от ее прихода в наш мир не привела к необратимым потерям? Авторов книги объединяет глубокое чувство социальной ответственности. Настоящая работа является продолжением коллективной монографии «Современное российское образование: вызовы и ответы». Книга адресована всем, кого интересуют процессы, связанные с растущим влиянием новых цифровых технологий и кого волнуют проблемы цифровой трансформации нашего общества.
				</div>
			)
		}

		function Collections() {
			return (
				<div class="document__collections">
					<a href="">Основная коллекция ЭБС</a>
					<a href="">Основная коллекция ЭБС</a>
					<a href="">Основная коллекция ЭБС</a>
					<a href="">Основная коллекция ЭБС</a>
				</div>
			)
		}

		function Classifiers() {
			return (
				<div class="document__classifiers">
					<div class="document__classifiers__item">
						<div class="document__classifiers__item__name"><span>Тематика:</span></div>
						<div class="document__classifiers__item__value">
							<a href="">020202: Государственное регулирование предпринимательства</a>
						</div>
					</div>
					<div class="document__classifiers__item">
						<div class="document__classifiers__item__name"><span>ОКСО:</span></div>
						<div class="document__classifiers__item__value">
							<div class="document__classifiers__item">
								<div class="document__classifiers__item__name"><span>ВО - Магистратура</span></div>
								<div class="document__classifiers__item__value">
									<a href="">38.04.06: Торговое дело</a>
									<a href="">38.04.07: Товароведение</a>
								</div>
							</div>
						</div>
					</div>
					<div class="document__classifiers__item">
						<div class="document__classifiers__item__name"><span>Тематика:</span></div>
						<div class="document__classifiers__item__value">
							<a href="">020202: Государственное регулирование предпринимательства</a>
						</div>
					</div>
					<div class="document__classifiers__item">
						<div class="document__classifiers__item__name"><span>ОКСО:</span></div>
						<div class="document__classifiers__item__value">
							<div class="document__classifiers__item">
								<div class="document__classifiers__item__name"><span>ВО - Магистратура</span></div>
								<div class="document__classifiers__item__value">
									<a href="">38.04.06: Торговое дело</a>
									<a href="">38.04.07: Товароведение</a>
								</div>
							</div>
						</div>
					</div>
					<div class="document__classifiers__item">
						<div class="document__classifiers__item__name"><span>Тематика:</span></div>
						<div class="document__classifiers__item__value">
							<a href="">020202: Государственное регулирование предпринимательства</a>
						</div>
					</div>
					<div class="document__classifiers__item">
						<div class="document__classifiers__item__name"><span>ОКСО:</span></div>
						<div class="document__classifiers__item__value">
							<div class="document__classifiers__item">
								<div class="document__classifiers__item__name"><span>ВО - Магистратура</span></div>
								<div class="document__classifiers__item__value">
									<a href="">38.04.06: Торговое дело</a>
									<a href="">38.04.07: Товароведение</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}

		function Affiliation() {
			return (
				<div class="document__affiliation">
					<div class="document__affiliation__item">
						<a href=""><em>Дмитриченко Лилия Ивановна</em></a>
						<a href=""><span>Донецкий Государственный Университет</span></a>
					</div>
					<div class="document__affiliation__item">
						<a href=""><em>Дмитриченко Лилия Ивановна</em></a>
						<a href=""><span>Донецкий Государственный Университет</span></a>
					</div>
					<div class="document__affiliation__item">
						<a href=""><em>Дмитриченко Лилия Ивановна</em></a>
						<a href=""><span>Донецкий Государственный Университет</span></a>
					</div>

				</div>
			)
		}

		function BiblioCard() {
			return (
				<div class="document__biblio-card">
					<p class="document__biblio-card__text">Дмитриченко, Л. И. Государственное регулирование торговой деятельности : учебное пособие / Л.И. Дмитриченко, О.Н. Головинов, Л.А. Дмитриченко. — Москва : ИНФРА-М, 2025. — 174 с. — (Высшее образование). — DOI 10.12737/2158057. - ISBN 978-5-16-020107-8. - Текст : электронный. - URL: https://znanium.ru/catalog/product/2158057 (дата обращения: 21.12.2024). – Режим доступа: по подписке.</p>
					<button type="button" class="document__biblio-card__button"> Скопировать запись </button>
				</div>
			)
		}

		function Fragments() {
			function Item() {
				return (
					<div class="document__fragments__item">
						<pre>УДК 130.2
							ББК 60.524
							Ц75
							Р е ц е н з е н т ы:
							Г. А. Антипов — д-р филос. наук, профессор,
							профессор кафедры философии и гуманитарных наук НГУЭУ;
							М. В. Ромм — д-р филос. наук, профессор,
							заведующий кафедрой философии НГТУ

							А в т о р ы:
							д-р филос. наук, проф. О. А. Донских (предисловие, § 1.1); д-р
							искусствоведения, проф. К. М. Курленя (§ 1.2); д-р филос. наук, проф.
							В. В. Чешев (§ 1.3); д-р экон. наук, проф. В. И. Клисторин (§ 1.4); д-р филос.
							наук, проф. Л. Ю. Логунова (§ 1.5); д-р филос. наук, проф. С. А. Ильиных
							(§ 1.6); д-р филос. наук, проф. Н. И. Мартишина (§ 2.1); д-р филос. наук, проф.
							В. И. Разумов (§ 2.2); д-р филос. наук, проф. С. И. Черных (§ 2.3); д-р филос.
							наук, Э. В. Барбашина (§ 2.4); д-р филос. наук, доцент Р. А. Заякина (§ 2.5)

							Ц75 Цифровизация в социокультурном измерении : монография /
							О. А. Донских, К. М. Курленя, В. В. Чешев [и др.] ; под общ. ред. О. А. Донских ; Новосиб. гос. ун-т экономики и управления. — Новосибирск :
							НГУЭУ, 2023. — 291 с.
							ISBN 978-5-7014-1118-8
							Исследуются социокультурные проблемы, возникающие при все
							большем и весьма агрессивном проникновении в нашу жизнь информационно-компьютерных технологий. В результате цифровизации вытесняются определенные профессии и меняется вся система управления: не
							только выполняются рутинные процессы, но и происходит замещение человека в тех областях, которые казались собственно человеческими. Действительно, происходит цифровая революция, и нужно понимать происходящее. Как принимать цифровизацию, чтобы польза от ее прихода в наш
							мир не привела к необратимым потерям? Авторов книги объединяет глубокое чувство социальной ответственности. Настоящая работа является
							продолжением монографии «Современное российское образование: вызовы и ответы» (2022).
							Книга адресована всем, кого интересуют процессы, связанные с растущим влиянием новых цифровых технологий, и кого волнуют проблемы
							цифровой трансформации нашего общества.
							ISBN 978-5-7014-1118-8
							УДК 130.2
							ББК 60.524

							© Новосибирский государственный университет
							экономики и управления «НИНХ», 2023
						</pre>
						<div class="document__fragments__item__caption"><a href="">стр. 2</a></div>
					</div>
				)
			}
			return (
				<div className="document__fragments">
					<p>Фрагмент текстового слоя документа размещен для индексирующих роботов. Для полноценной работы с документом, пожалуйста, перейдите в <a href="">ридер</a></p>
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			)
		}

		/**
		 * @type {tab[]}
		 */
		const items = [
			{
				title: "Аннотация",
				content: <Annotation />
			},
			{
				title: "Оглавление",
				content: <AccordionList />
			},
			{
				title: "Коллекции",
				content: <Collections />
			},
			{
				title: "Классификаторы",
				content: <Classifiers />
			},
			{
				title: "Аффилиация",
				content: <Affiliation />
			},
			{
				title: "Бибзапись",
				content: <BiblioCard />
			},
			{
				title: "Экспорт",
				content: <ExportList />
			},
			{
				title: "Фрагменты",
				content: <Fragments />
			},
		]

		return (
			<div className="document__tabs">
				<div className="document__tabs__nav">
					{ items.map(({ title }, index) => {
						return (
							<button type="button" className={
								clsx({
									document__tabs__tab: true,
									"is-active": !index
								})
							}>
								{ title }
							</button>
						)
					}) }
				</div>
				<div className="document__tabs__contents">
					{ items.map(({ content }, index) => {
						return (
							<div className={
								clsx({
									document__tabs__content: true,
									"is-active": !index
								})
							}>
								{ content }
							</div>
						)
					}) }
				</div>
			</div>
		)
	}

	return (
		<>
			<div className="document">
				<div className="container-fluid">
					<div className="document__inner">
						<ColMain />
						<ColInfo />
						{ isMagazine || <ColAccess /> }
						{ isMagazine || isSub || !isDetail || <Tabs /> }
						{ isMagazine && !isSub && isDetail && <Other /> }
					</div>
				</div>
			</div>
			{ isMagazine || isSub || !isDetail || <DocumentsSlider title={ "Похожие" } /> }
		</>
	)
} 