import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Links from "../../../components/Links"
import Controls from "../../../components/Controls"
import { Button as ControlsButton, Item as ControlsItem } from "../../../components/Controls"
import Table from "../../../components/Table"
import SelectSimple from "../../../components/SelectSimple"
import Text from "../../../components/Text"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Фонд" }>
        <Links items={ ["Документы", "Тематика", "УДК", "ГРНТИ", "ББК", "УГС (ОКСО)", "Вид изд.", "Тип публикации"] } />
        <Text>
          <p>В отчете отображается распределение документов из активных подписок по тематикам ЭБС. Данные по демоподпискам в отчет не включаются. Данные — на текущий момент времени.</p>
        </Text>
        <Controls excel />
        <Table data={ {
          headers: [
            {
              title: "Номер раздела",
            },
            {
              title: "Раздел",
            },
            {
              title: "Документов",
            },
          ],
          rows: [
            [
              "01",
              <a href="#">Науковедение. Общенаучное знание и теории</a>,
              "1012",
            ],
            [
              "01",
              <a href="#">Бизнес. Предпринимательство. Сервис</a>,
              "1012",
            ],
            [
              "01",
              <a href="#">Литература для средней школы и абитуриентов</a>,
              "1012",
            ],
          ]
        } } />
      </Generic >
      <Text>
        <p>
          <i>Примечание 1.</i> Отчёт включает только документы, которым присвоена классификация по тематикам ЭБС. <br />
          <i>Примечание 2.</i> Некоторые документы могут быть отнесены в несколько разделов одновременно.
        </p>
      </Text>
    </Page>
  )
}