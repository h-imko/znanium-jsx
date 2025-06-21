import Page from "../../../../components/Page"
import Generic from "../../../../components/Generic"
import Links from "../../../../components/Links"
import Controls from "../../../../components/Controls"
import Text from "../../../../components/Text"
import FundList from "../../../../components/FundList"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Фонд правообладателя «ПРОФЕССИЯ ООО ЦОП»" }>
        <Links items={ ["Документы", "Тематика", "УДК", "ГРНТИ", "ББК", "УГС (ОКСО)", "Вид изд.", "Тип публикации"] } />
        <Text>
          <p>В отчете отображается распределение документов из активных подписок по тематикам ЭБС. Данные по демоподпискам в отчет не включаются. Данные — на текущий момент времени.</p>
        </Text>
        <Controls excel />
        <FundList nocode />
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