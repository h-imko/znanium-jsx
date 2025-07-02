import Checkbox from "../../../components/Checkbox"
import Controls from "../../../components/Controls"
import Filter from "../../../components/Filter"
import Form from "../../../components/Form"
import Generic from "../../../components/Generic"
import IconButtons from "../../../components/IconButtons"
import Input from "../../../components/Input"
import Links from "../../../components/Links"
import Page from "../../../components/Page"
import Pagination from "../../../components/Pagination"
import Table from "../../../components/Table"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Заявки на выдачу ключей" }>
        <Links items={ ["Новые", "Выполненные", "Отклоненные"] } />
        <Filter togglerText="Фильтр" form={
          <Form bordered items={
            [
              [
                <Input label={ "ФИО" } />,
                <Input label={ "Сообщение" } />,
              ],
            ]
          } controls={ {
            submit: "Применить",
            reset: "Очистить"
          } } />
        } />
        <Controls showBy />
        <Table small data={ {
          headers: [
            {
              title: <Checkbox />,
            },
            {
              title: "ФИО"
            },
            {
              title: "Сообщение",
              sortable: true,
            },
            {
              title: "Запрошена роль",
              sortable: true,
            },
            {
              title: "Группа",
              sortable: true,
            },
            {
              title: "Дата",
              sortable: true,
              sorted: "desc"
            },
            {}
          ],
          rows: [
            [
              <Checkbox />,
              <>Малова Анастасия <br />malova.iteb@gmail.com</>,
              "",
              "-",
              "",
              "27.07.2020 13:50",
              <IconButtons items={ [
                {
                  icon: "close",
                  isButton: true,
                  title: "Отклонить"
                },
              ] } />
            ]
          ]
        } } />
        <Pagination />
        <div className="button-group">
          <button type="button" className="button" disabled=""> Выдать ключи выбранным </button>
          <button type="button" className="button" disabled="">Отклонить выбранные заявки </button>
        </div>
      </Generic >
    </Page>
  )
}