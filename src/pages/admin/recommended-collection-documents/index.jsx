import Generic from "../../../components/Generic"
import Page from "../../../components/Page"
import Table from "../../../components/Table"
import Text from "../../../components/Text"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Математика" }>
        <Text>
          <h3>Преподаватель: Панасенко Татьяна Александровна</h3>
        </Text>
        <Table data={ {
          headers: [
            {
              title: "Основное заглавие",
              sortable: true,
            },
            {
              title: "Автор",
              sortable: true,
            },
            {
              title: "Издатель",
              sortable: true,
            },
            {
              title: "Год",
              sortable: true,
            },
          ],
          rows: [
            [
              <a href="#">Wirtschaftsdeutsch: Markt, Unternehmerschaft, Handel (Деловой немецкий язык: Рынок, предпринимательство, торговля)</a>,
              "Чернышева Н.Г., Лыгина Н.И., Музалевская Р.С.-55139",
              <a href="#">Издательство ФОРУМ</a>,
              "2019"
            ]
          ]
        } } />
      </Generic >
    </Page>
  )
}