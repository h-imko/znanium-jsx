import Form from "../../../components/Form"
import Generic from "../../../components/Generic"
import Input from "../../../components/Input"
import Page from "../../../components/Page"
import Reviews from "../../../components/Reviews"
import Text from "../../../components/Text"

export default function index() {
  return (
    <Page aside breadcrumbs search>
      <Generic title="Отзывы об ЭБС Znanium">
        <Text>
          <h2>Так говорят преподаватели</h2>
        </Text>
        <Reviews />
        <Text>
          <h2>Так говорят преподаватели</h2>
        </Text>
        <Reviews />
        <Text>
          <h2>Оставить отзыв</h2>
        </Text>
        <Form slim items={ [
          [
            <Input required value={ "Тест тестович" } label={ "Ваше имя" } />
          ],
          [
            <Input required label={ "Ваш E-mail" } type={ "email" } />
          ],
          [
            <Input required textarea label={ "Ваш отзыв" } type={ "email" } />
          ],
          [
            <p>Сделайте клик на картинке для получения другого кода</p>
          ]
        ] } controls={ { submit: "Отправить" } } />
      </Generic>
    </Page>
  )
}