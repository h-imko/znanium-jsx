import Chart from "../../../../components/Chart"
import Controls from "../../../../components/Controls"
import Generic from "../../../../components/Generic"
import Links from "../../../../components/Links"
import Page from "../../../../components/Page"
import Table from "../../../../components/Table"
import Text from "../../../../components/Text"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Активность" }>
        <Links items={ ["Чтение", "Читатели", "Книговыдачи", "Документы - чтение", "Отказы", "Пользователи", "Список отказов", "Документы - отказы",] } />
        <Text>
          <p>В отчете отображается статистика отказов по причине отсутствия документа в подписке — запросы полнотекстовых документов, которые не доступны авторизованному пользователю, т.е. запросы документов, которые не входят в подписку клиента.</p>
        </Text>
        <Controls excel items={ [
          {
            select: "Год"
          },
          {
            select: "Месяц"
          }
        ] } />
        <Table small data={ {
          headers: [
            {
              title: "Период",
            },
            {
              title: "Пользователей",
            },
            {
              title: "Сессий",
            },
            {
              title: "Отказов",
            },
            {
              title: "Документов",
            },
          ],
          rows: [
            [
              "янв. 2025	",
              <a href="#">168</a>,
              "324",
              <a href="#">324</a>,
              <a href="#">324</a>,
            ]
          ]
        } } />
        <Table small data={ {
          headers: [
            {
              title: "Всего (уник.):",
            },
            {
              title: "Пользователей",
            },
            {
              title: "Сессий",
            },
            {
              title: "Отказов",
            },
            {
              title: "Документов",
            },
          ],
          rows: [
            [
              "",
              <a href="#">168</a>,
              "1101",
              <a href="#">1234</a>,
              <a href="#">324</a>,
            ]
          ]
        } } />
        <Chart data={ "JTdCJTIyZGF0YXNldHMlMjIlM0ElNUIlN0IlMjJkYXRhJTIyJTNBJTVCJTIyMTclMjIlMkMlMjIxOCUyMiUyQyUyMjE5JTIyJTJDJTIyMTYlMjIlMkMlMjIxMyUyMiUyQyUyMjEzJTIyJTJDJTIyMTAlMjIlMkMlMjIxMiUyMiUyQyUyMjEwJTIyJTJDJTIyMTElMjIlMkMlMjIxOSUyMiUyQyUyMjE3JTIyJTVEJTJDJTIybGFiZWwlMjIlM0ElMjIlNUN1MDQxNyU1Q3UwNDMwJTVDdTA0NDAlNUN1MDQzNSU1Q3UwNDMzJTVDdTA0MzglNUN1MDQ0MSU1Q3UwNDQyJTVDdTA0NDAlNUN1MDQzOCU1Q3UwNDQwJTVDdTA0M2UlNUN1MDQzMiU1Q3UwNDMwJTVDdTA0M2QlNUN1MDQzZCU1Q3UwNDRiJTVDdTA0MzUrMjAyNCUyMiUyQyUyMnN0YWNrJTIyJTNBJTIyMjAyNCUyMiU3RCUyQyU3QiUyMmRhdGElMjIlM0ElNUIlMjIxMSUyMiUyQyUyMjAlMjIlMkMlMjI2JTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjIlMjIlMkMlMjIwJTIyJTVEJTJDJTIybGFiZWwlMjIlM0ElMjIlNUN1MDQxMCU1Q3UwNDNkJTVDdTA0M2UlNUN1MDQzZCU1Q3UwNDM4JTVDdTA0M2MlNUN1MDQzZCU1Q3UwNDRiJTVDdTA0MzUyMDI0JTIyJTJDJTIyc3RhY2slMjIlM0ElMjIyMDI0JTIyJTdEJTJDJTdCJTIyZGF0YSUyMiUzQSU1QiUyMjEzJTIyJTJDJTIyMTIlMjIlMkMlMjIxMSUyMiUyQyUyMjE2JTIyJTJDJTIyMTIlMjIlMkMlMjIxNyUyMiUyQyUyMjglMjIlMkMlMjIxMSUyMiUyQyUyMjE0JTIyJTJDJTIyMjIlMjIlMkMlMjIxMiUyMiUyQyUyMjEwJTIyJTVEJTJDJTIybGFiZWwlMjIlM0ElMjIlNUN1MDQxNyU1Q3UwNDMwJTVDdTA0NDAlNUN1MDQzNSU1Q3UwNDMzJTVDdTA0MzglNUN1MDQ0MSU1Q3UwNDQyJTVDdTA0NDAlNUN1MDQzOCU1Q3UwNDQwJTVDdTA0M2UlNUN1MDQzMiU1Q3UwNDMwJTVDdTA0M2QlNUN1MDQzZCU1Q3UwNDRiJTVDdTA0MzUrMjAyMyUyMiUyQyUyMnN0YWNrJTIyJTNBJTIyMjAyMyUyMiU3RCUyQyU3QiUyMmRhdGElMjIlM0ElNUIlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMSUyMiUyQyUyMjElMjIlNUQlMkMlMjJsYWJlbCUyMiUzQSUyMiU1Q3UwNDEwJTVDdTA0M2QlNUN1MDQzZSU1Q3UwNDNkJTVDdTA0MzglNUN1MDQzYyU1Q3UwNDNkJTVDdTA0NGIlNUN1MDQzNSsyMDIzJTIyJTJDJTIyc3RhY2slMjIlM0ElMjIyMDIzJTIyJTdEJTVEJTJDJTIybGFiZWxzJTIyJTNBJTVCMCUyQzElMkMyJTJDMyUyQzQlMkM1JTJDNiUyQzclMkM4JTJDOSUyQzEwJTJDMTElNUQlN0Q" } options={ "JTdCJTIyc2NhbGVzJTIyJTNBJTVCJTVEJTdE" } title={ "Пользователи" } />
        <Chart data={ "JTdCJTIyZGF0YXNldHMlMjI6JTVCJTdCJTIyZGF0YSUyMjolNUIlMjIxMiUyMiwlMjI5JTIyLCUyMjE3JTIyLCUyMjE1JTIyLCUyMjIyJTIyLCUyMjIyJTIyLCUyMjEzJTIyLCUyMjElMjIsJTIyMTMlMjIsJTIyMjAlMjIsJTIyMyUyMiwlMjIyJTIyJTVELCUyMmxhYmVsJTIyOiUyMiVEMCU5NyVEMCVCMCVEMSU4MCVEMCVCNSVEMCVCMyVEMCVCOCVEMSU4MSVEMSU4MiVEMSU4MCVEMCVCOCVEMSU4MCVEMCVCRSVEMCVCMiVEMCVCMCVEMCVCRCVEMCVCRCVEMSU4QiVEMCVCNSUyMDIwMjMlMjIlN0QsJTdCJTIyZGF0YSUyMjolNUIlMjIxNCUyMiwlMjIxNiUyMiwlMjIxOSUyMiwlMjIxOSUyMiwlMjIxMyUyMiwlMjIxMyUyMiwlMjIxNyUyMiwlMjIxOCUyMiwlMjIwJTIyLCUyMjIlMjIsJTIyMCUyMiwlMjIxJTIyJTVELCUyMmxhYmVsJTIyOiUyMiVEMCU5NyVEMCVCMCVEMSU4MCVEMCVCNSVEMCVCMyVEMCVCOCVEMSU4MSVEMSU4MiVEMSU4MCVEMCVCOCVEMSU4MCVEMCVCRSVEMCVCMiVEMCVCMCVEMCVCRCVEMCVCRCVEMSU4QiVEMCVCNSUyMDIwMjQlMjIlN0QsJTdCJTIyZGF0YSUyMjolNUIlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiwlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiwlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiwlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiU1RCwlMjJsYWJlbCUyMjolMjIlRDAlOTAlRDAlQkQlRDAlQkUlRDAlQkQlRDAlQjglRDAlQkMlRDAlQkQlRDElOEIlRDAlQjUlMjIlN0QsJTdCJTIyZGF0YSUyMjolNUIlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiwlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiwlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiwlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiU1RCwlMjJsYWJlbCUyMjolMjIlRDAlOTAlRDAlQkQlRDAlQkUlRDAlQkQlRDAlQjglRDAlQkMlRDAlQkQlRDElOEIlRDAlQjUlMjIlN0QlNUQsJTIybGFiZWxzJTIyOiU1QiUyMiVEMCVBRiVEMCVCRCVEMCVCMiVEMCVCMCVEMSU4MCVEMSU4QyUyMiwlMjIlRDAlQTQlRDAlQjUlRDAlQjIlRDElODAlRDAlQjAlRDAlQkIlRDElOEMlMjIsJTIyJUQwJTlDJUQwJUIwJUQxJTgwJUQxJTgyJTIyLCUyMiVEMCU5MCVEMCVCRiVEMSU4MCVEMCVCNSVEMCVCQiVEMSU4QyUyMiwlMjIlRDAlOUMlRDAlQjAlRDAlQjklMjIsJTIyJUQwJTk4JUQxJThFJUQwJUJEJUQxJThDJTIyLCUyMiVEMCU5OCVEMSU4RSVEMCVCQiVEMSU4QyUyMiwlMjIlRDAlOTAlRDAlQjIlRDAlQjMlRDElODMlRDElODElRDElODIlMjIsJTIyJUQwJUExJUQwJUI1JUQwJUJEJUQxJTgyJUQxJThGJUQwJUIxJUQxJTgwJUQxJThDJTIyLCUyMiVEMCU5RSVEMCVCQSVEMSU4MiVEMSU4RiVEMCVCMSVEMSU4MCVEMSU4QyUyMiwlMjIlRDAlOUQlRDAlQkUlRDElOEYlRDAlQjElRDElODAlRDElOEMlMjIsJTIyJUQwJTk0JUQwJUI1JUQwJUJBJUQwJUIwJUQwJUIxJUQxJTgwJUQxJThDJTIyJTVEJTdE" } title={ "Еще кто-то" } />
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
          <h4>Головное подразделение в сумме с филиалами</h4>
          <p>В отчете учтены данные головного подразделения и филиалов, которым были делегированы ключи доступа к подпискам головного подразделения.</p>
          <ul>
            <li><a href="/admin/statistic-users?with-branches=1">Российский экономический университет им. Г.В. Плеханова и филиалы</a></li>
          </ul>
        </Text>
      </Generic>
    </Page>
  )
}