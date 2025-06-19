import Page from "../../../../components/Page"
import Generic from "../../../../components/Generic"
import Links from "../../../../components/Links"
import Controls from "../../../../components/Controls"
import { Button as ControlsButton, Item as ControlsItem } from "../../../../components/Controls"
import Table from "../../../../components/Table"
import SelectSimple from "../../../../components/SelectSimple"
import Select from "../../../../components/Select"
import Text from "../../../../components/Text"
import Chart from "../../../../components/Chart"
import Filter from "../../../../components/Filter"
import Form from "../../../../components/Form"
import Checkbox from "../../../../components/Checkbox"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Активность" }>
        <Links items={ ["Чтение", "Читатели", "Книговыдачи", "Документы - чтение", "Отказы", "Пользователи", "Список отказов", "Документы - отказы",] } />
        <Text>
          <p>В отчете отображается общее количество уникальных аутентифицированных пользователей (столбец "Итого зарег."), читавших документы за указанный период. </p>
          <p> По умолчанию учитываются студенты, а также в своих столбцах преподаватели, администраторы и пользователи с портала. Отдельно выведен столбец для анонимных пользователей (заходящих по ip), для которых отображаются сессии. </p>
          <p>Сумму Анонимных сессий и Зарегистрированных пользователей, которая отображена в столбце "Аноним. + зарег.", можно использовать в параметре "Численность зарегистрированных пользователей библиотеки" отчета ВПО-2.</p>
          <p>Данные — на текущий момент времени.</p>
        </Text>
        <Filter togglerText="Фильтр" form={ <Form bordered items={
          [
            [
              <Select multiple label={ "Подписка" } />,
            ],
            [
              <Select multiple label={ "Читательская группа" } />,
            ],
            [
              <Checkbox label={ "Только портальные пользователи" } />
            ]
          ]
        } controls={ {
          submit: "Применить",
          reset: "Очистить"
        } } /> } />
        <Controls excel>
          <ControlsItem>
            <span>Год</span>
            <SelectSimple />
          </ControlsItem>
          <ControlsItem>
            <span>Месяц</span>
            <SelectSimple />
          </ControlsItem>
        </Controls>
        <div class="table-wrapper">
          <table class="table table--small">
            <thead>
              <tr>
                <th rowspan="2">Период</th>
                <th colspan="3">Пользователей</th>
                <th rowspan="2">Сессий</th>
                <th rowspan="2">Книговыдач</th>
                <th rowspan="2">Документов</th>
                <th rowspan="2">Страниц</th>
              </tr>
              <tr>
                <th>Зарег.</th>
                <th>Аноним.</th>
                <th>Аноним.+зарег.</th>
              </tr>
            </thead>
            <tbody>
              <tr data-key="0">
                <td>янв. 2025</td>
                <td><a href="/admin/statistic-activity?type=activity-readers&amp;cid=590&amp;day=all&amp;month=1&amp;year=2025&amp;with-branches=0">11</a></td>
                <td>0</td>
                <td>11</td>
                <td>17</td>
                <td><a href="/admin/statistic-activity?type=activity-browsed-docs&amp;cid=590&amp;day=all&amp;month=1&amp;year=2025&amp;with-branches=0">25</a></td>
                <td><a href="/admin/statistic-activity?type=activity-docs&amp;cid=590&amp;day=all&amp;month=1&amp;year=2025&amp;with-branches=0">25</a></td>
                <td>108</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Table small data={ {
          headers: [
            {
              title: "Всего (уник.):",
            },
            {
              title: "Читателей",
            },
            {
              title: "Аноним.",
            },
            {
              title: "Аноним. + Зарег.",
            },
            {
              title: "Сессий",
            },
            {
              title: "Книговыдач",
            },
            {
              title: "Документов",
            },
            {
              title: "Страниц",
            },
          ],
          rows: [
            [
              "",
              <a href="#">1851</a>,
              "2287",
              "4138",
              "20543",
              <a href="#">44071</a>,
              <a href="#">6975</a>,
              "740682",
            ]
          ]
        } } />
        <Chart data={ "JTdCJTIyZGF0YXNldHMlMjIlM0ElNUIlN0IlMjJkYXRhJTIyJTNBJTVCJTIyMTclMjIlMkMlMjIxOCUyMiUyQyUyMjE5JTIyJTJDJTIyMTYlMjIlMkMlMjIxMyUyMiUyQyUyMjEzJTIyJTJDJTIyMTAlMjIlMkMlMjIxMiUyMiUyQyUyMjEwJTIyJTJDJTIyMTElMjIlMkMlMjIxOSUyMiUyQyUyMjE3JTIyJTVEJTJDJTIybGFiZWwlMjIlM0ElMjIlNUN1MDQxNyU1Q3UwNDMwJTVDdTA0NDAlNUN1MDQzNSU1Q3UwNDMzJTVDdTA0MzglNUN1MDQ0MSU1Q3UwNDQyJTVDdTA0NDAlNUN1MDQzOCU1Q3UwNDQwJTVDdTA0M2UlNUN1MDQzMiU1Q3UwNDMwJTVDdTA0M2QlNUN1MDQzZCU1Q3UwNDRiJTVDdTA0MzUrMjAyNCUyMiUyQyUyMnN0YWNrJTIyJTNBJTIyMjAyNCUyMiU3RCUyQyU3QiUyMmRhdGElMjIlM0ElNUIlMjIxMSUyMiUyQyUyMjAlMjIlMkMlMjI2JTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjIlMjIlMkMlMjIwJTIyJTVEJTJDJTIybGFiZWwlMjIlM0ElMjIlNUN1MDQxMCU1Q3UwNDNkJTVDdTA0M2UlNUN1MDQzZCU1Q3UwNDM4JTVDdTA0M2MlNUN1MDQzZCU1Q3UwNDRiJTVDdTA0MzUyMDI0JTIyJTJDJTIyc3RhY2slMjIlM0ElMjIyMDI0JTIyJTdEJTJDJTdCJTIyZGF0YSUyMiUzQSU1QiUyMjEzJTIyJTJDJTIyMTIlMjIlMkMlMjIxMSUyMiUyQyUyMjE2JTIyJTJDJTIyMTIlMjIlMkMlMjIxNyUyMiUyQyUyMjglMjIlMkMlMjIxMSUyMiUyQyUyMjE0JTIyJTJDJTIyMjIlMjIlMkMlMjIxMiUyMiUyQyUyMjEwJTIyJTVEJTJDJTIybGFiZWwlMjIlM0ElMjIlNUN1MDQxNyU1Q3UwNDMwJTVDdTA0NDAlNUN1MDQzNSU1Q3UwNDMzJTVDdTA0MzglNUN1MDQ0MSU1Q3UwNDQyJTVDdTA0NDAlNUN1MDQzOCU1Q3UwNDQwJTVDdTA0M2UlNUN1MDQzMiU1Q3UwNDMwJTVDdTA0M2QlNUN1MDQzZCU1Q3UwNDRiJTVDdTA0MzUrMjAyMyUyMiUyQyUyMnN0YWNrJTIyJTNBJTIyMjAyMyUyMiU3RCUyQyU3QiUyMmRhdGElMjIlM0ElNUIlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMSUyMiUyQyUyMjElMjIlNUQlMkMlMjJsYWJlbCUyMiUzQSUyMiU1Q3UwNDEwJTVDdTA0M2QlNUN1MDQzZSU1Q3UwNDNkJTVDdTA0MzglNUN1MDQzYyU1Q3UwNDNkJTVDdTA0NGIlNUN1MDQzNSsyMDIzJTIyJTJDJTIyc3RhY2slMjIlM0ElMjIyMDIzJTIyJTdEJTVEJTJDJTIybGFiZWxzJTIyJTNBJTVCMCUyQzElMkMyJTJDMyUyQzQlMkM1JTJDNiUyQzclMkM4JTJDOSUyQzEwJTJDMTElNUQlN0Q" } options={ "JTdCJTIyc2NhbGVzJTIyJTNBJTVCJTVEJTdE" } title={ "Пользователи" } />
        <Chart data={ "JTdCJTIyZGF0YXNldHMlMjI6JTVCJTdCJTIyZGF0YSUyMjolNUIlMjIxMiUyMiwlMjI5JTIyLCUyMjE3JTIyLCUyMjE1JTIyLCUyMjIyJTIyLCUyMjIyJTIyLCUyMjEzJTIyLCUyMjElMjIsJTIyMTMlMjIsJTIyMjAlMjIsJTIyMyUyMiwlMjIyJTIyJTVELCUyMmxhYmVsJTIyOiUyMiVEMCU5NyVEMCVCMCVEMSU4MCVEMCVCNSVEMCVCMyVEMCVCOCVEMSU4MSVEMSU4MiVEMSU4MCVEMCVCOCVEMSU4MCVEMCVCRSVEMCVCMiVEMCVCMCVEMCVCRCVEMCVCRCVEMSU4QiVEMCVCNSUyMDIwMjMlMjIlN0QsJTdCJTIyZGF0YSUyMjolNUIlMjIxNCUyMiwlMjIxNiUyMiwlMjIxOSUyMiwlMjIxOSUyMiwlMjIxMyUyMiwlMjIxMyUyMiwlMjIxNyUyMiwlMjIxOCUyMiwlMjIwJTIyLCUyMjIlMjIsJTIyMCUyMiwlMjIxJTIyJTVELCUyMmxhYmVsJTIyOiUyMiVEMCU5NyVEMCVCMCVEMSU4MCVEMCVCNSVEMCVCMyVEMCVCOCVEMSU4MSVEMSU4MiVEMSU4MCVEMCVCOCVEMSU4MCVEMCVCRSVEMCVCMiVEMCVCMCVEMCVCRCVEMCVCRCVEMSU4QiVEMCVCNSUyMDIwMjQlMjIlN0QsJTdCJTIyZGF0YSUyMjolNUIlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiwlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiwlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiwlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiU1RCwlMjJsYWJlbCUyMjolMjIlRDAlOTAlRDAlQkQlRDAlQkUlRDAlQkQlRDAlQjglRDAlQkMlRDAlQkQlRDElOEIlRDAlQjUlMjIlN0QsJTdCJTIyZGF0YSUyMjolNUIlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiwlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiwlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiwlMjIwJTIyLCUyMjAlMjIsJTIyMCUyMiU1RCwlMjJsYWJlbCUyMjolMjIlRDAlOTAlRDAlQkQlRDAlQkUlRDAlQkQlRDAlQjglRDAlQkMlRDAlQkQlRDElOEIlRDAlQjUlMjIlN0QlNUQsJTIybGFiZWxzJTIyOiU1QiUyMiVEMCVBRiVEMCVCRCVEMCVCMiVEMCVCMCVEMSU4MCVEMSU4QyUyMiwlMjIlRDAlQTQlRDAlQjUlRDAlQjIlRDElODAlRDAlQjAlRDAlQkIlRDElOEMlMjIsJTIyJUQwJTlDJUQwJUIwJUQxJTgwJUQxJTgyJTIyLCUyMiVEMCU5MCVEMCVCRiVEMSU4MCVEMCVCNSVEMCVCQiVEMSU4QyUyMiwlMjIlRDAlOUMlRDAlQjAlRDAlQjklMjIsJTIyJUQwJTk4JUQxJThFJUQwJUJEJUQxJThDJTIyLCUyMiVEMCU5OCVEMSU4RSVEMCVCQiVEMSU4QyUyMiwlMjIlRDAlOTAlRDAlQjIlRDAlQjMlRDElODMlRDElODElRDElODIlMjIsJTIyJUQwJUExJUQwJUI1JUQwJUJEJUQxJTgyJUQxJThGJUQwJUIxJUQxJTgwJUQxJThDJTIyLCUyMiVEMCU5RSVEMCVCQSVEMSU4MiVEMSU4RiVEMCVCMSVEMSU4MCVEMSU4QyUyMiwlMjIlRDAlOUQlRDAlQkUlRDElOEYlRDAlQjElRDElODAlRDElOEMlMjIsJTIyJUQwJTk0JUQwJUI1JUQwJUJBJUQwJUIwJUQwJUIxJUQxJTgwJUQxJThDJTIyJTVEJTdE" } title={ "Еще кто-то" } />
        <Chart data={ "JTdCJTIyZGF0YXNldHMlMjIlM0ElNUIlN0IlMjJkYXRhJTIyJTNBJTVCJTIyMTclMjIlMkMlMjIxOCUyMiUyQyUyMjE5JTIyJTJDJTIyMTYlMjIlMkMlMjIxMyUyMiUyQyUyMjEzJTIyJTJDJTIyMTAlMjIlMkMlMjIxMiUyMiUyQyUyMjEwJTIyJTJDJTIyMTElMjIlMkMlMjIxOSUyMiUyQyUyMjE3JTIyJTVEJTJDJTIybGFiZWwlMjIlM0ElMjIlNUN1MDQxNyU1Q3UwNDMwJTVDdTA0NDAlNUN1MDQzNSU1Q3UwNDMzJTVDdTA0MzglNUN1MDQ0MSU1Q3UwNDQyJTVDdTA0NDAlNUN1MDQzOCU1Q3UwNDQwJTVDdTA0M2UlNUN1MDQzMiU1Q3UwNDMwJTVDdTA0M2QlNUN1MDQzZCU1Q3UwNDRiJTVDdTA0MzUrMjAyNCUyMiUyQyUyMnN0YWNrJTIyJTNBJTIyMjAyNCUyMiU3RCUyQyU3QiUyMmRhdGElMjIlM0ElNUIlMjIxMSUyMiUyQyUyMjAlMjIlMkMlMjI2JTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjIlMjIlMkMlMjIwJTIyJTVEJTJDJTIybGFiZWwlMjIlM0ElMjIlNUN1MDQxMCU1Q3UwNDNkJTVDdTA0M2UlNUN1MDQzZCU1Q3UwNDM4JTVDdTA0M2MlNUN1MDQzZCU1Q3UwNDRiJTVDdTA0MzUyMDI0JTIyJTJDJTIyc3RhY2slMjIlM0ElMjIyMDI0JTIyJTdEJTJDJTdCJTIyZGF0YSUyMiUzQSU1QiUyMjEzJTIyJTJDJTIyMTIlMjIlMkMlMjIxMSUyMiUyQyUyMjE2JTIyJTJDJTIyMTIlMjIlMkMlMjIxNyUyMiUyQyUyMjglMjIlMkMlMjIxMSUyMiUyQyUyMjE0JTIyJTJDJTIyMjIlMjIlMkMlMjIxMiUyMiUyQyUyMjEwJTIyJTVEJTJDJTIybGFiZWwlMjIlM0ElMjIlNUN1MDQxNyU1Q3UwNDMwJTVDdTA0NDAlNUN1MDQzNSU1Q3UwNDMzJTVDdTA0MzglNUN1MDQ0MSU1Q3UwNDQyJTVDdTA0NDAlNUN1MDQzOCU1Q3UwNDQwJTVDdTA0M2UlNUN1MDQzMiU1Q3UwNDMwJTVDdTA0M2QlNUN1MDQzZCU1Q3UwNDRiJTVDdTA0MzUrMjAyMyUyMiUyQyUyMnN0YWNrJTIyJTNBJTIyMjAyMyUyMiU3RCUyQyU3QiUyMmRhdGElMjIlM0ElNUIlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMCUyMiUyQyUyMjAlMjIlMkMlMjIwJTIyJTJDJTIyMSUyMiUyQyUyMjElMjIlNUQlMkMlMjJsYWJlbCUyMiUzQSUyMiU1Q3UwNDEwJTVDdTA0M2QlNUN1MDQzZSU1Q3UwNDNkJTVDdTA0MzglNUN1MDQzYyU1Q3UwNDNkJTVDdTA0NGIlNUN1MDQzNSsyMDIzJTIyJTJDJTIyc3RhY2slMjIlM0ElMjIyMDIzJTIyJTdEJTVEJTJDJTIybGFiZWxzJTIyJTNBJTVCMCUyQzElMkMyJTJDMyUyQzQlMkM1JTJDNiUyQzclMkM4JTJDOSUyQzEwJTJDMTElNUQlN0Q" } options={ "JTdCJTIyc2NhbGVzJTIyJTNBJTVCJTVEJTdE" } title={ "Еще кто-то" } type={ "line" } />
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