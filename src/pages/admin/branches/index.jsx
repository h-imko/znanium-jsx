import Generic from "../../../components/Generic"
import IconButtons from "../../../components/IconButtons"
import Page from "../../../components/Page"
import Table from "../../../components/Table"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Филиалы" }>
        <Table small data={ {
          headers: [
            {
              title: "Филиал",
              sortable: true
            },
            {
              title: "Передано ключей"
            },
            {}
          ],
          rows: [
            [
              "Российский экономический университет им. Г.В. Плеханова, Брянский ф-л",
              <a href="#">Lorem ipsum dolor sit amet.</a>,
              <IconButtons items={ [
                {
                  icon: "arrow_forward",
                  isButton: true,
                  title: "Передать ключи доступа"
                },
                {
                  icon: "close",
                  isButton: true,
                  title: "Отозвать ключи доступа"
                },
              ] } />
            ],
          ]
        } } />
      </Generic >
    </Page>
  )
}