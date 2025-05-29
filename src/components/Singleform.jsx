export default function () {
	return (
		<form className="singleform">
			<div className="container-fluid">
				<div className="singleform__innner">
					<div className="singleform__main">
						<div className="singleform__select">
							<select aria-label="Выбор области поиска">
								<option value="">Весь фонд</option>
								<option value="">В подписках</option>
								<option value="">Вне подписок</option>
							</select>
						</div>
						<div className="singleform__main__group">
							<input type="text" className="singleform__input" placeholder="Поиск по страницам сайта" required aria-label="Поисковый запрос" />
							<div className="singleform__controls">
								<a href="" className="singleform__controls__item" title="Расширенный поиск">
									<span className="icon icon--gear">
									</span>
								</a>
								<button type="reset" className="singleform__controls__item" title="Очистить">
									<span className="icon icon--close">
									</span>
								</button>
							</div>
						</div>
						<button type="submit" className="singleform__button">Найти</button>
					</div>
					<div className="singleform__suggest" hidden>
						<label className="singleform__suggest__item ">
							<input type="radio" name="singleform__suggest" checked value="0" data-placeholder="Поиск по страницам сайта" />
							<span> по сайту </span>
						</label>
						<label className="singleform__suggest__item">
							<input type="radio" name="singleform__suggest" value="1" data-placeholder="Поиск по всем документам каталога" />
							<span> в каталоге </span>
						</label>
						<label className="singleform__suggest__item">
							<input type="radio" name="singleform__suggest" value="2" data-placeholder="Поиск авторов по имени" />
							<span> в авторах </span>
						</label>
						<label className="singleform__suggest__item">
							<input type="radio" name="singleform__suggest" value="3" data-placeholder="Поиск аффилированных учреждений" />
							<span> в аффилиациях </span>
						</label>
						<label className="singleform__suggest__item">
							<input type="radio" name="singleform__suggest" value="4" data-placeholder="Поиск издательств по имени" />
							<span> в издательствах </span>
						</label>
						<label className="singleform__suggest__item">
							<input type="radio" name="singleform__suggest" value="5" data-placeholder="Поиск в наименованиях периодических изданий" />
							<span> в периодике </span>
						</label>
						<label className="singleform__suggest__item">
							<input type="radio" name="singleform__suggest" value="6" data-placeholder="Поиск в наименованиях тематических рубрик" />
							<span> в тематиках </span>
						</label>
						<label className="singleform__suggest__item">
							<input type="radio" name="singleform__suggest" value="7" data-placeholder="Поиск в наименованиях классификатора ОКСО" />
							<span> в ОКСО </span>
						</label>
						<div className="singleform__suggest__extra">
							<div className="singleform__suggest__extra__list">
								<label className="singleform__suggest__item">
									<input type="radio" name="singleform__suggest" value="8" data-placeholder="Поиск в наименованиях классификатора ГРНТИ" />
									<span> в ГРНТИ </span>
								</label>
								<label className="singleform__suggest__item">
									<input type="radio" name="singleform__suggest" value="9" data-placeholder="Поиск в наименованиях классификатора УДК" />
									<span> в УДК </span>
								</label>
								<label className="singleform__suggest__item">
									<input type="radio" name="singleform__suggest" value="10" data-placeholder="Поиск в наименованиях классификатора ББК" />
									<span> в ББК</span>
								</label>
							</div>
							<button className="singleform__suggest__extra__opener" type="button" title="Показать дополнительные"> </button>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}