import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Fpl from "../../../components/Fpl"

export default function index() {
	return (
		<Page aside breadcrumbs>
			<Generic title="LMS-ссылки" p={ "Здесь отображаются созданные в интерфейсе ридера ссылки на страницы книг, предназначенные для вставки в Систему управления обучением (англ. learning management system, LMS) вашего учебного заведения. Для чтения страниц по таким ссылкам не требуется быть авторизованным пользователем ЭБС." }>
				<Fpl />
			</Generic>
		</Page>
	)
} 