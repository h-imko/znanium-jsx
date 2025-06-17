import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Groups from "../../../components/Groups"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Группы" p={ <>Чтобы включить выбор групп вашего учебного заведения при самостоятельной регистрации пользователей или дать возможность самостоятельно выбирать группу в профиле для зарегистрированных пользователей, пожалуйста, воспользуйтесь <a href="">настройками в кабинете</a></> }>
        <Groups />
      </Generic>
    </Page>
  )
}