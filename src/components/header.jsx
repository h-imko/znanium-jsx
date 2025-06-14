import Accessibility from "./Accessibility"
import Logo from "./Logo"

function LoginBlock() {
	const randLogin = Math.floor(Math.random() * 3 + 1)

	switch (randLogin) {
		case 1:
			return (
				<div className="header__top__block">
					<a href="" className="header__link">Впервые на сайте?</a>
					<div className="header__login">
						<a href="" className="header__login__item header__login__item--registration"> <span className="icon icon--person"></span> Регистрация</a>
						/
						<a href="" className="header__login__item">Вход </a>
					</div>
				</div>
			)
		case 2:
			return (
				<div className="header__top__block">
					<a href="" className="header__link">234 дня до окончания доступа</a>
					<div className="header__login">
						<a href="" className="header__login__item header__login__item--registration"> <span className="icon icon--person"></span> Регистрация</a>
						/
						<a href="" className="header__login__item">Вход (IP 172.16.30.9)</a>
					</div>
				</div>
			)
		case 3:
			return (
				<div className="header__top__block">
					<a href="" className="header__link">234 дня до окончания доступа </a>
					<a href="" className="header__link">varivodin_nk <span className="icon icon--person"></span></a>
					<a href="" className="header__link" title="Выйти"> <span className="icon icon--logout"></span></a>
				</div>
			)

		default:
			return ""
	}
}

export default function () {
	return (
		<>
			<Accessibility />
			<header className="header">
				<div className="header__top">
					<div className="container">
						<div className="header__top__inner">
							<div className="header__top__block">
								<a href="/src/index.jsx" className="header__logo" aria-label="Главная">
									<div className="header__logo__desktop">
										<Logo />
									</div>
									<div className="header__logo__mobile">
										<Logo compact />
									</div>
								</a>
							</div>
							<LoginBlock />
						</div>
					</div>
				</div>
				<div className="header__bottom">
					<div className="container">
						<div className="header__bottom__inner">
							<nav className="header__nav">
								<button type="button" className="header__nav__button" title="Показать/скрыть навигацию"> </button>
								<div className="header__nav__list">
									<div className="header__nav__item">
										<a href="" className="header__nav__item__self">Каталог</a>
										<ul className="header__nav__item__drop">
											<li className="header__nav__item__drop__col">
												<a href=""><strong>Книги</strong></a>
												<ul className="header__nav__item__drop__list">
													<li><a href="">Тематика</a></li>
													<li><a href="">ОКСО</a></li>
													<li><a href="">УДК</a></li>
													<li><a href="">ГРНТИ</a></li>
												</ul>
											</li>
											<li className="header__nav__item__drop__col">
												<a href=""><strong>Журналы</strong></a>
												<ul className="header__nav__item__drop__list">
													<li><a href="">Наменклатура ВАК</a></li>
													<li><a href="">Журналы ИНФРА-М</a></li>
													<li><a href="">Алфавитный указатель</a></li>
													<li><a href="">Полный перечень</a></li>
												</ul>
											</li>
											<li className="header__nav__item__drop__col">
												<a href=""><strong>Статьи</strong></a>
												<ul className="header__nav__item__drop__list">
													<li><a href="">ОКСО</a></li>
													<li><a href="">УДК</a></li>
													<li><a href="">ГРНТИ</a></li>
													<li><a href="">ББК</a></li>
												</ul>
											</li>
											<li className="header__nav__item__drop__col">
												<br />
												<ul className="header__nav__item__drop__list">
													<li><a href="">Новинки</a></li>
													<li><a href="">Авторы</a></li>
													<li><a href="">Издательства</a></li>
													<li><a href="">Аффилиация авторов</a></li>
												</ul>
											</li>
											<li className="header__nav__item__drop__col">
												<br />
												<ul className="header__nav__item__drop__list">
													<li><a href="">Подборки Znanium</a></li>
													<li><a href="">Публичным библиотекам</a></li>
													<li><a href="">Книги с доп. материалами</a></li>
												</ul>
											</li>
										</ul>
									</div>
									<div className="header__nav__item">
										<a href="" className="header__nav__item__self">Коллекции</a>
										<ul className="header__nav__item__drop">
											<li className="header__nav__item__drop__col">
												<ul className="header__nav__item__drop__list">
													<li><a href="">Подборки Znanium</a></li>
													<li><a href="">Публичным библиотекам</a></li>
													<li><a href="">Книги с доп. материалами</a></li>
												</ul>
											</li>
										</ul>
									</div>
									<div className="header__nav__item">
										<a href="" className="header__nav__item__self">О проекте</a>
										<ul className="header__nav__item__drop">
											<li className="header__nav__item__drop__col">
												<ul className="header__nav__item__drop__list">
													<li><a href="">Подборки Znanium</a></li>
													<li><a href="">Публичным библиотекам</a></li>
													<li><a href="">Книги с доп. материалами</a></li>
												</ul>
											</li>
										</ul>
									</div>
									<div className="header__nav__item">
										<a href="" className="header__nav__item__self">Цены</a>
										<ul className="header__nav__item__drop">
											<li className="header__nav__item__drop__col">
												<ul className="header__nav__item__drop__list">
													<li><a href="">Подборки Znanium</a></li>
													<li><a href="">Публичным библиотекам</a></li>
													<li><a href="">Книги с доп. материалами</a></li>
												</ul>
											</li>
										</ul>
									</div>
									<div className="header__nav__item">
										<a href="" className="header__nav__item__self">Справка</a>
										<ul className="header__nav__item__drop">
											<li className="header__nav__item__drop__col">
												<ul className="header__nav__item__drop__list">
													<li><a href="">Подборки Znanium</a></li>
													<li><a href="">Публичным библиотекам</a></li>
													<li><a href="">Книги с доп. материалами</a></li>
												</ul>
											</li>
										</ul>
									</div>
									<div className="header__nav__item">
										<a href="" className="header__nav__item__self">Вебинары</a>
									</div>
								</div>
							</nav>
							<div className="header__actions">
								<div className="header__actions__item">
									<button type="button" className="header__actions__item__self theme-swap" title="Версия для слабовидящих">
										<span className="icon icon--eye"></span>
									</button>
								</div>
								<div className="header__actions__item">
									<a href="" className="header__actions__item__self" title="Корзина">
										<span className="header__cart">
											<span className="icon icon--cart"></span>
											<span className="header__cart__count">3</span>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}