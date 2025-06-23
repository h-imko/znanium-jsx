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
          <p>Доступный фонд — количество документов, доступных пользователям по всем активным подпискам. Данные — на последний день месяца. Данные по демоподпискам в отчет не включаются.</p>
        </Text>
        <Controls excel items={ [
          {
            select: "Год"
          }
        ] } />
        <Table data={ {
          headers: [
            {
              title: "Период",
            },
            {
              title: "Документов",
            },
          ],
          rows: [
            [
              "янв. 2025",
              <a href="#">50828</a>,
            ]
          ]
        } } />
        <Text>
          <h4>По филиалам</h4>
          <p>Данные по филиалам не включены в верхний отчет по головному подразделению.</p>
          <ul>
            <li>
              <a href="#"  >Российский экономический университет им. Г.В. Плеханова, Смоленский ф-л</a>
            </li>
            <li>
              <a href="#" >Российский экономический университет им. Г.В. Плеханова, Краснодарский ф-л</a>
            </li>
            <li>
              <a href="#" >Российский экономический университет им. Г.В. Плеханова, ф-л Московский Приборостроительный Техникум</a>
            </li>
            <li>
              <a href="#" >Российский экономический университет им. Г.В. Плеханова, ф-л Московский технологический колледж питания</a>
            </li>
            <li>
              <a href="#" >Российский экономический университет им. Г.В. Плеханова, Брянский ф-л</a>
            </li>
            <li>
              <a href="#" >Российский экономический университет им. Г.В. Плеханова, Тульский ф-л</a>
            </li>
          </ul>
        </Text>
      </Generic >
    </Page>
  )
}