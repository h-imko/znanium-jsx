import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Table from "../../../components/Table"
import Form from "../../../components/Form"
import Input from "../../../components/Input"
import Text from "../../../components/Text"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Мои ключи доступа"  >
        <Form slim items={ [
          [
            <Input label={ "Номер ключа:" } />
          ],
          [
            <Input label={ "Код активации ключа:" } />
          ],
        ] } controls={ { submit: "Активировать" } } />
        <Table small data={ {
          headers: [
            {
              title: "Ключ",
              sortable: true
            },
            {
              title: "Начало"
            },
            {
              title: "Окончание"
            },
            {
              title: "Дней до окончания	"
            },
            {
              title: "Кем выдан	"
            },
            {
              title: "Содержимое"
            },
          ],
          rows: [
            [
              "11111-75478-98	",
              "31.12.2024	",
              "31.12.2025",
              "338",
              "Новый Znanium для сотрудников	",
              <a href="">Подробнее</a>
            ],
          ]
        } } />
        <Text>
          <p>Все способы доступа к ЭБС — <a href="">здесь</a>.</p>
        </Text>
      </Generic>
    </Page>
  )
}