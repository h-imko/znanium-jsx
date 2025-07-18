import Generic from "../../../../components/Generic"
import IconButtons from "../../../../components/IconButtons"
import Loader from "../../../../components/Loader"
import Page from "../../../../components/Page"

export default function index() {
	return (
		<Page breadcrumbs  >
			<Generic title={ "Какое-то название запроса" } p={ <>От  21.04.99  23:49 <br /> Файл:  capusta.txt </> }>
				<div className="button-group">
					<button type="button" className="button" > Редактировать </button>
					<button type="button" className="button button--secondary" > Удалить </button>
				</div>
				<h2>Результаты</h2>
				<div className="recservice1">
					<div className="recservice1__tabs">
						<button className="recservice1__tab is-active">Журналы</button>
						<button className="recservice1__tab">Авторы</button>
						<button className="recservice1__tab">Технологии</button>
					</div>
					<div className="recservice1__contents">
						<div className="recservice1__content is-active">
							<div className="recservice1__item">
								<button className="button">Выполнить анализ</button>
								<div className="recservice1__analysis">
									<Loader />
									<span className="recservice1__analysis__time">1 21.01.05  14:99</span>
									<IconButtons items={ [
										{
											icon: "delete",
											isButton: true,
											title: "Удалить"
										},
									] } />
								</div>
								<div className="recservice1__analysis">
									<a href="" className="recservice1__analysis__time">21.01.05  14:99 </a>
									<IconButtons items={ [
										{
											icon: "download",
											title: "Выгрузить файл"
										},
										{
											icon: "delete",
											isButton: true,
											title: "Удалить"
										},
									] } />
								</div>
							</div>
						</div>
						<div className="recservice1__content">
							<div className="recservice1__item">
								<button className="button">Выполнить анализ</button>
							</div>
						</div>
						<div className="recservice1__content">
							<div className="recservice1__item">
								<button className="button">Выполнить анализ</button>
								<div className="recservice1__analysis">
									<Loader />
									<span className="recservice1__analysis__time">3 21.01.05  14:99</span>
									<IconButtons items={ [
										{
											icon: "delete",
											isButton: true,
											title: "Удалить"
										},
									] } />
								</div>
								<div className="recservice1__analysis">
									<a href="" className="recservice1__analysis__time">21.01.05  14:99 </a>
									<IconButtons items={ [
										{
											icon: "download",
											title: "Выгрузить файл"
										},
										{
											icon: "delete",
											isButton: true,
											title: "Удалить"
										},
									] } />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Generic>
		</Page>
	)
}