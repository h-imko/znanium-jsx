import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Form from "../../../components/Form"
import Input from "../../../components/Input"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Смена email">
        <Form slim items={
          [
            [
              <Input label={ "Email" } type={ "email" } value={ "varivodin_nk+bib@znanium.ru" } />
            ],
            [
              <Input label={ "Пароль" } type={ "password" } placeholder="Текущий пароль" buttonEye caption={ "Для подтверждения смены email необходимо ввести пароль от своего аккаунта" } />
            ],
          ]
        } controls={ { submit: "Сохранить" } } />
      </Generic>
    </Page>
  )
}