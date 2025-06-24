import Checkbox from "../../../components/Checkbox"
import Form from "../../../components/Form"
import Generic from "../../../components/Generic"
import Input from "../../../components/Input"
import Page from "../../../components/Page"
import Text from "../../../components/Text"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Передать ключи в филиал">
        <a href="#" className="button-text">
          <span className="icon icon--arrow_backward"></span>
          Назад к филиалам
        </a>
        <Text>
          <p>Российская академия народного хозяйства и государственной службы при Президенте РФ, ф-л Уральский институт управления</p>
        </Text>
        <Form slim items={
          [
            [
              <Checkbox label={ "Подписка №86102(01.07.2024-30.06.2025)" } />
            ],
            [
              <Checkbox label={ "Подписка №91149(01.10.2024-30.06.2025) Прометей" } />
            ],
            [
              <p>Внимание! Отзываются только свободные (ещё не выданные конечным пользователям) ключи</p>
            ],
            [
              <Input label={ "Количество" } value={ "0" } />
            ],
          ]
        } controls={ { submit: "Отозвать" } } />
      </Generic>
    </Page>
  )
}