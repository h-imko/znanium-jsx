import Controls from "../../../../components/Controls"
import Generic from "../../../../components/Generic"
import Links from "../../../../components/Links"
import Page from "../../../../components/Page"
import Pagination from "../../../../components/Pagination"
import Table from "../../../../components/Table"
import Text from "../../../../components/Text"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Изъятые документы">
        <Links items={ ["Уже изъяты", "Будут изъяты"] } />
        <Text>
          <p> Документы, которые доступны на данный момент, но не будут доступны в будущем при переподписке </p>
        </Text>
        <Controls showBy excel />
        <Table small data={ {
          headers: [
            {
              title: "Документ",
              sortable: true,
            },
            {
              title: "Дата изъятия",
              sortable: true,
              sorted: "desc"
            },
            {
              title: "Новая версия",
              sortable: true,
            },
          ],
          rows: [
            [
              <a href="#">Зайцева, Н. А. Десять советов по взаимодействию с проблемными подчиненными, руководителями, слушателями: Практическое пособие / Н.А. Зайцева. - Москва : Альфа-М, 2014. - 102 с. ISBN 978-5-98281-380-0. - Текст : электронный. - URL: https://znanium.com/catalog/product/442010</a>,
              "29-05-2025",
              "Нет"
            ],
            [
              <a href="#">Зайцева, Н. А. Десять советов по взаимодействию с проблемными подчиненными, руководителями, слушателями: Практическое пособие / Н.А. Зайцева. - Москва : Альфа-М, 2014. - 102 с. ISBN 978-5-98281-380-0. - Текст : электронный. - URL: https://znanium.com/catalog/product/442010</a>,
              "29-05-2025",
              <a href="#">Да</a>
            ],
          ]
        } } />
        <Pagination />
      </Generic>
    </Page>
  )
}