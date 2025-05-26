import Logo from "./Logo"
import Socials from "./Socials"

export default function () {
	return (
		<footer className="footer">
			<div className="footer__top">
				<div className="container">
					<div className="footer__top__inner">
						<a href="" className="footer__logo" title="Перейти на главную">
							<Logo />
						</a>
						<nav className="footer__nav">
							<ul className="footer__nav__list">
								<li className="footer__nav__col">
									<h4 className="footer__nav__col__title">О компании</h4>
									<ul className="footer__nav__col__list">
										<li><a href="">Контакты</a></li>
										<li><a href="">Оплата и доставка</a></li>
										<li><a href="">Нормативные документы</a></li>
									</ul>
								</li>
								<li className="footer__nav__col">
									<h4 className="footer__nav__col__title">ВУЗам и ССУЗам</h4>
									<ul className="footer__nav__col__list">
										<li><a href="">О Znanium</a></li>
										<li><a href="">Сервисы</a></li>
										<li><a href="">Тестовый доступ</a></li>
										<li><a href="">Цены</a></li>
									</ul>
								</li>
								<li className="footer__nav__col">
									<h4 className="footer__nav__col__title">Сотрудничество</h4>
									<ul className="footer__nav__col__list">
										<li><a href="">Издательствам</a></li>
										<li><a href="">Авторам</a></li>
										<li><a href="">Преподавателям</a></li>
										<li><a href="">Вакансии</a></li>
									</ul>
								</li>
								<li className="footer__nav__col">
									<h4 className="footer__nav__col__title">Справка</h4>
									<ul className="footer__nav__col__list">
										<li><a href="">Видеоинструкции</a></li>
										<li><a href="">Руководства</a></li>
										<li><a href="">Обратная связь</a></li>
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="container">
					<div className="footer__bottom__inner">
						<div className="footer__bottom__block">
							<div className="footer__info">
								<p>© ООО «ЗНАНИУМ» 2011—2024 гг.</p>
								<p>Возрастное ограничение: 12+</p>
								<p>Версия — v3.21.0, revision — 23966</p>
								<p> IP: 109.106.142.112 </p>
							</div>
						</div>
						<div className="footer__bottom__block">
							<div className="footer__extra">
								<a href="">Пользовательское соглашение</a>
								<a href="">Политика обработки персональных данных</a>
								<a href="">Согласие на получение информационных рассылок</a>
								<a href="">Политика возврата средств</a>
								<a href="" target="_blank">Свидетельство о&nbsp;регистрации СМИ ЭЛ&nbsp;№&nbsp;ФС&nbsp;77 -&nbsp;72248</a>
							</div>
						</div>
						<div className="footer__bottom__block">
							<div className="footer__extra">
								<a href="">Карта сайта</a>
								<a href="">Uptime ЭБС</a>
								<button type="button" className="test-toast">Проверить тосты</button>
							</div>
						</div>
						<div className="footer__bottom__block">
							<div className="footer__socials">
								<Socials />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}