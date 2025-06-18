import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Filter from "../../../components/Filter"
import Controls from "../../../components/Controls"
import Table from "../../../components/Table"
import Input from "../../../components/Input"
import Form from "../../../components/Form"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "С моего портала" }>
        <Filter togglerText="Фильтр" form={
          <Form bordered items={
            [
              [
                <Input label={ "ФИО" } />,
                <Input label={ "Email" } type={ "email" } />,
                <Input label={ "Логин" } />,
              ],
              [
                <Input label={ "Комментарий" } />,
              ],
            ]
          } controls={ {
            submit: "Применить",
            reset: "Очистить"
          } } />
        } />
        <Controls showBy excel />
        <Table data={ {
          headers: [
            {
              title: "Email и ФИО",
              sortable: true,
            },
            {
              title: "Логин",
              sortable: true,
            },
            {
              title: "Дата создания в ЭБС",
              sortable: true,
              sorted: "desc"
            },
          ],
          rows: [
            [
              <> Исагулова Марианна <a href="#">isagulova_mt@infra-m.ru</a> </>,
              "Всеволод310",
              "16.06.2025 16:52	",
            ]
          ]
        } } />
      </Generic >
    </Page>
  )
}