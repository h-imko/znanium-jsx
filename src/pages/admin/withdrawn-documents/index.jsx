import Controls from "../../../components/Controls"
import Generic from "../../../components/Generic"
import Links from "../../../components/Links"
import Page from "../../../components/Page"
import Pagination from "../../../components/Pagination"
import Table from "../../../components/Table"
import Text from "../../../components/Text"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Изъятые документы">
        <Links items={ ["Уже изъяты", "Будут изъяты"] } />
        <Text>
          <p>Документы, которые были доступны Вам в прошлых подписках, и отсутствующие на настоящий момент</p>
        </Text>
        <Controls showBy excel />
        <Table small data={ {
          headers: [
            {
              title: "Документ"
            },
            {
              title: "Дата изъятия"
            },
          ],
          rows: [
            [
              <a href="#">Зайцева, Н. А. Десять советов по взаимодействию с проблемными подчиненными, руководителями, слушателями: Практическое пособие / Н.А. Зайцева. - Москва : Альфа-М, 2014. - 102 с. ISBN 978-5-98281-380-0. - Текст : электронный. - URL: https://znanium.com/catalog/product/442010</a>,
              "254600.01.01/254600.02.01",
            ],
          ]
        } } />
        <Pagination />
      </Generic>
    </Page>
  )
}