import Controls from "../../../components/Controls"
import Generic from "../../../components/Generic"
import Page from "../../../components/Page"
import Pagination from "../../../components/Pagination"
import Table from "../../../components/Table"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Обновлённые книги"  >
        <Controls showBy excel />
        <Table small data={ {
          headers: [
            {
              title: "Артикул предыдущей / новой версии"
            },
            {
              title: "Предыдущая версия"
            },
            {
              title: "Новая версия"
            },
          ],
          rows: [
            [
              "254600.01.01/254600.02.01",
              <a href="#">Зайцева, Н. А. Десять советов по взаимодействию с проблемными подчиненными, руководителями, слушателями: Практическое пособие / Н.А. Зайцева. - Москва : Альфа-М, 2014. - 102 с. ISBN 978-5-98281-380-0. - Текст : электронный. - URL: https://znanium.com/catalog/product/442010</a>,
              <a href="#">Зайцева, Н. А. Десять советов по взаимодействию с проблемными подчиненными, руководителями, слушателями: практическое пособие / Н. А. Зайцева. - 2-e изд. - Москва : Альфа-М, 2014. - 102 с. ISBN 978-5-98281-380-0. - Текст : электронный. - URL: https://znanium.com/catalog/product/450196</a>,
            ],
          ]
        } } />
        <Pagination />
      </Generic>
    </Page>
  )
}