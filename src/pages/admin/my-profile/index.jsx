import Form from "../../../components/Form"
import Generic from "../../../components/Generic"
import Input from "../../../components/Input"
import Page from "../../../components/Page"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Мой профиль">
        <Form slim items={
          [
            [
              <Input label={ "Логин" } value={ "varivodin_nk" } readOnly />
            ],
            [
              <Input label={ "Фамилия" } value={ "Вариводин" } required />
            ],
            [
              <Input label={ "Имя" } value={ "Никита" } required />
            ],
            [
              <Input label={ "Отчество" } value={ "Константинович" } required />
            ],
            [
              <Input label={ "Email" } value={ "varivodin_nk+bib@znanium.ru" } readOnly customButtonLink={ "Изменить" } />
            ],
          ]
        } controls={ { submit: "Сохранить" } } />
      </Generic>
    </Page>
  )
}