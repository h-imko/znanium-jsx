import Page from "../../../../components/Page"
import Generic from "../../../../components/Generic"
import Links from "../../../../components/Links"
import Controls from "../../../../components/Controls"
import { Button as ControlsButton, Item as ControlsItem } from "../../../../components/Controls"
import Table from "../../../../components/Table"
import SelectSimple from "../../../../components/SelectSimple"
import Select from "../../../../components/Select"
import Text from "../../../../components/Text"
import Filter from "../../../../components/Filter"
import Form from "../../../../components/Form"
import Checkbox from "../../../../components/Checkbox"
import Input from "../../../../components/Input"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Активность" }>
        <Links items={ ["Чтение", "Читатели", "Книговыдачи", "Документы - чтение", "Отказы", "Пользователи", "Список отказов", "Документы - отказы",] } />
        <Text>
          <p>В отчете отображается список документов, с указанием количества пользователей и книговыдач.</p>
        </Text>
        <Filter togglerText="Фильтр" form={ <Form bordered items={
          [
            [
              <Input label={ "Наименование" } />,
              <Input label={ "Авторы" } />,
              <SelectSimple label={ "Вид издания" } />,
            ],
            [
              <Input label={ "Издательство" } />,
              <SelectSimple label={ "Год издания" } />,
            ],
            [
              <Checkbox label={ "Бессрочные права" } />,
              <Checkbox label={ "Бесплатно" } />,
              <Checkbox label={ "Только портальные пользователи" } />,
            ],
            [
              <Select multiple label={ "Уровень образования" } />,
            ],
            [
              <Select multiple label={ "Подписка" } />,
            ],
            [
              <Select multiple label={ "Читательская группа" } />,
            ]
          ]
        } controls={ {
          submit: "Применить",
          reset: "Очистить"
        } } /> } />
        <Controls excel showBy items={ [
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
              title: "Документ",
              sortable: true,
            },
            {
              title: "Издательство",
              sortable: true,
            },
            {
              title: "Пользователей",
              sortable: true,
            },
            {
              title: "Книговыдач",
              sortable: true,
              sorted: "desc"
            },
            {
              title: "Страниц",
              sortable: true,
            },
          ],
          rows: [
            [
              <a href="#">Иванов, Г. Г. Коммерческая деятельность : учебник / Г.Г. Иванов, Е.С. Холин. — Москва : ФОРУМ : ИНФРА-М, 2024. — 384 с. : ил. — (Высшее образование). - ISBN 978-5-8199-0939-3. - Текст : электронный. - URL: https://znanium.ru/catalog/product/2111789</a>,
              <a href="#">НИЦ ИНФРА-М</a>,
              "61",
              <a href="#">332</a>,
              "6619",
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