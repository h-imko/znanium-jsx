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
import Input from "../../../../components/Input"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Активность" }>
        <Links items={ ["Чтение", "Читатели", "Книговыдачи", "Документы - чтение", "Отказы", "Пользователи", "Список отказов", "Документы - отказы",] } />
        <Text>
          <p>Читатели — зарегистрированные пользователи, для которых зафиксированы книговыдачи.</p>
        </Text>
        <Filter togglerText="Фильтр" form={ <Form bordered items={
          [
            [
              <Input label={ "Email" } type={ "email" } />,
              <Input label={ "Логин" } />,
              <Input label={ "ФИО" } />,
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
        <Controls excel showBy>
          <ControlsItem>
            <span>Год</span>
            <SelectSimple />
          </ControlsItem>
          <ControlsItem>
            <span>Месяц</span>
            <SelectSimple />
          </ControlsItem>
        </Controls>
        <Table small data={ {
          headers: [
            {
              title: "Email",
              sortable: true,
              sorted: "asc"
            },
            {
              title: "Логин",
              sortable: true,
            },
            {
              title: "ФИО",
            },
            {
              title: "Преподаватель	",
              sortable: true,
            },
            {
              title: "Книговыдач",
              sortable: true,
            },
            {
              title: "Страниц",
              sortable: true,
            },
          ],
          rows: [
            [
              "051023756a@gmail.com",
              "051023756a",
              "Цветков Алексей Викторович	",
              "Нет",
              <a href="#">5</a>,
              "146",
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