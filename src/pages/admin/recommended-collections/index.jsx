import Controls from "../../../components/Controls"
import Generic from "../../../components/Generic"
import IconButtons from "../../../components/IconButtons"
import Page from "../../../components/Page"
import Pagination from "../../../components/Pagination"
import Table from "../../../components/Table"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Рекомендованная литература" }>
        <Controls showBy />
        <Table data={ {
          headers: [
            {
              title: "Дисциплина",
              sortable: true,
            },
            {
              title: "Преподаватель",
              sortable: true,
            },
            {
              title: "Комментарий",
              sortable: true,
            },
            {}
          ],
          rows: [
            [
              <a href="#">Современные мировые концепции экономики и менеджмента</a>,
              "Тохтиева Лариса Николаевна	",
              "4 курс, Наследственное право",
              <IconButtons items={ [
                {
                  icon: "delete",
                  isButton: true,
                  title: "Удалить"
                },
              ] } />
            ]
          ]
        } } />
        <Pagination />
      </Generic >
    </Page>
  )
}