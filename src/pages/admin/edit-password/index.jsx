import Form from "../../../components/Form"
import Generic from "../../../components/Generic"
import Input from "../../../components/Input"
import Page from "../../../components/Page"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Смена пароля">
        <Form slim items={
          [
            [
              <Input label={ "Старый пароль " } type={ "password" } placeholder="Старый пароль" buttonEye caption={ "Для подтверждения смены пароля необходимо ввести пароль от своего аккаунта" } required />
            ],
            [
              <Input label={ "Новый пароль" } type={ "password" } placeholder="Новый пароль" buttonEye caption={ <>Пароль должен содержать не менее 10 символов, из которых минимум 2 цифры, 1 строчная и 1 прописная буква (допустимы латиница и кириллица), 1 специальный символ. Пароль не должен совпадать с логином или email. <br /> <button type="button" className="input__link">Сгенерировать пароль</button></> } required />
            ],
            [
              <Input label={ "Подтверждение нового пароля" } type={ "password" } placeholder="Подтверждение нового пароля" buttonEye required />
            ],
          ]
        } controls={ { submit: "Сохранить" } } />
      </Generic>
    </Page>
  )
} 