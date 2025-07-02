import Checkbox from "../../../../components/Checkbox"
import Controls from "../../../../components/Controls"
import Filter from "../../../../components/Filter"
import Form from "../../../../components/Form"
import Generic from "../../../../components/Generic"
import Input from "../../../../components/Input"
import Links from "../../../../components/Links"
import Page from "../../../../components/Page"
import Pagination from "../../../../components/Pagination"
import Select from "../../../../components/Select"
import SelectSimple from "../../../../components/SelectSimple"
import Table from "../../../../components/Table"
import Text from "../../../../components/Text"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Активность" }>
        <Links items={ ["Чтение", "Читатели", "Книговыдачи", "Документы - чтение", "Отказы", "Пользователи", "Список отказов", "Документы - отказы",] } />
        <Text>
          <p>Книговыдача — обращение пользователя к документу в рамках одной сессии. После бездействия в 30 минут начинается новая сессия, в этом случае, при повторном обращении пользователя к документу фиксируется новая книговыдача.</p>
        </Text>
        <Filter togglerText="Фильтр" form={ <Form bordered items={
          [
            [
              <Input label={ "Email" } type={ "email" } />,
              <Input label={ "Логин" } />,
              <Input label={ "ФИО" } />,
            ],
            [
              <Input label={ "ID документа" } />,
              <Input label={ "Наименование документа" } />,
              <SelectSimple label={ "Год издания" } />,
            ],
            [
              <Checkbox label={ "Преподаватели" } />,
              <Checkbox label={ "Исключить администраторов" } />,
              <Checkbox label={ "Только портальные пользователи" } />,
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
              title: "Email",
              sortable: true,
            },
            {
              title: "ФИО",
            },
            {
              title: "Документ",
              sortable: true,
            },
            {
              title: "Страниц",
              sortable: true,
              sorted: "desc"
            },
            {
              title: "Дата",
              sortable: true,
            },
          ],
          rows: [
            [
              "051023756a@gmail.com",
              "Соколов Алексей Павлович",
              <a href="#">Иванов, Г. Г. Коммерческая деятельность : учебник / Г.Г. Иванов, Е.С. Холин. — Москва : ФОРУМ : ИНФРА-М, 2024. — 384 с. : ил. — (Высшее образование). - ISBN 978-5-8199-0939-3. - Текст : электронный. - URL: https://znanium.ru/catalog/product/2111789</a>,
              "1449",
              "13.02.2025 08:55:45",
            ]
          ]
        } } />
        <Pagination />
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