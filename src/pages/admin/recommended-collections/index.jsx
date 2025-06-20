import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Controls from "../../../components/Controls"
import Table from "../../../components/Table"
import IconButtons from "../../../components/IconButtons"

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
      </Generic >
    </Page>
  )
}