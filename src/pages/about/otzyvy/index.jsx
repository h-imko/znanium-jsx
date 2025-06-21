import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Text from "../../../components/Text"
import Reviews from "../../../components/Reviews"
import Form from "../../../components/Form"
import Input from "../../../components/Input"

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