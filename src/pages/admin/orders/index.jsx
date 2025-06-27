import Controls from "../../../components/Controls"
import Generic from "../../../components/Generic"
import Page from "../../../components/Page"
import Pagination from "../../../components/Pagination"
import Table from "../../../components/Table"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Заказы">
        <Controls showBy />
        <Table data={ {
          headers: [
            {
              sortable: true,
              title: "№"
            },
            {
              sortable: true,
              title: "Дата"
            },
            {
              title: "Статус"
            },
            {
              sortable: true,
              title: "Кол-во ключей"
            },
            {
              sortable: true,
              title: "Сумма"
            },
            {
              sortable: true,
              title: "Книг вне коллекций"
            },
            {
              sortable: true,
              title: "Коллекций"
            },
            {
              sortable: true,
              title: "Подшивок журналов"
            },
            {
              sortable: true,
              title: "Печатных книг"
            },
          ],
          rows: [
            [
              "15368",
              "11.12.2024",
              "Новый",
              "0",
              "7&nbsp;299&nbsp;₽",
              <a href="/admin/order-documents?id=15368">6</a>,
              "",
              "",
              "",
            ],
            [
              "15368",
              "11.12.2024",
              "Новый",
              "0",
              "7&nbsp;299&nbsp;₽",
              "",
              "",
              <a href="/admin/order-documents?id=15368">6</a>,
              "",
            ],
          ]
        } } />
        <Pagination />
      </Generic>
    </Page>
  )
}