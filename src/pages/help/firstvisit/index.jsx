import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Firstvisit from "../../../components/Firstvisit"
import Text from "../../../components/Text"

export default function index() {
  return (
    <Page aside breadcrumbs >
      <Generic title="Впервые на сайте?">
        <Text>
          <p>Znanium объединяет в себе <a href="/catalog">библиотечный</a>, <a href="https://enc.znanium.ru/">справочный</a> и <a href="https://search.znanium.com/">аналитически-информационный</a> порталы для обеспечения онлайн-доступа к фондам учебной и научной литературы, включая ресурсы <a href="/catalog/free-access">свободного доступа</a>.</p>
          <p>Определите свою роль:</p>
        </Text>
        <Firstvisit />
        <Text>
          <h3>Уже есть доступ в Znanium?</h3>
          <p><a href="/site/login">Войдите на сайт</a> с помощью учётной записи или через соцсети.</p>
          <p>Если Вы учитесь или преподаёте, работаете в научно-образовательной сфере или просто не можете не двигаться вперёд, то Znanium станет для Вас надежным спутником в любой деятельности!</p>
        </Text>
      </Generic>
    </Page>
  )
}