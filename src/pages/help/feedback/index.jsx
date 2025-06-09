import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Form from "../../../components/Form"
import Input from "../../../components/Input"
import SelectSimple from "../../../components/SelectSimple"
import Dropzone from "../../../components/Dropzone"

export default function index() {
  return (
    <Page aside breadcrumbs search>
      <Generic title="Обратная связь" p={ "Введите, пожалуйста, Ваши контактные данные:" }>
        <Form items={ [
          [<Input label={ "Имя и фамилия" } value={ "Никита Вариводин" } required />],
          [<Input label={ "Email" } value={ "varivodin_nk+bib@znanium.ru" } placeholder={ "Ваш емейл" } type={ "email" } required />],
          [<SelectSimple label={ "Категория" } required />],
          [<Input label={ "Тема обращения" } required />],
          [<Input textarea label={ "Сообщение" } required />],
          [<Dropzone />],
        ] } controls={ { submit: "Сохранить" } } slim />
      </Generic>
    </Page>
  )
}