import { LabelsAll } from "./Labels"
import AccordionSimple from "./AccordionSimple"

function DocumentInfoMain() {
	return (
		<div class="document__info__block">
			<dl className="document__info__list">
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
			</dl>
		</div>
	)
}

function DocumentInfoExtra() {
	return (
		<div className="document__info__block document__info__block--mobile">
			<AccordionSimple toggler={ <span class="document__info__block__toggler"> Дополнительно </span> }>
				<dl className="document__info__list">
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
						</dd>
					</div>
				</dl>
			</AccordionSimple>
		</div>
	)
}

function DocumentColAccess() {
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
			</div>
		</div>
	)
}

export default function () {
	return (
		<div className="document">
			<div className="container-fluid">
				<div className="document__inner">
					<div className="document__col document__col--main">
						<a href="" className="document__cover" title="Перейти к документу">
							<img src="/assets/static/img/12.webp" alt="Обложка" />
						</a>
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
					</div>
					<div className="document__col document__col--info">
						<a href="" class="document__header">
							<span class="document__title"> Современный русский язык. Лексикология. Фразеология </span>
							<span class="document__subtitle"> Учебное пособие </span>
						</a>
						<div class="document__labels">
							<LabelsAll />
						</div>
						<div class="document__info">
							<DocumentInfoMain />
							<DocumentInfoExtra />
						</div>
					</div>
					<DocumentColAccess />
				</div>
			</div>
		</div>
	)
}