import Controls from "../../../components/Controls"
import Filter from "../../../components/Filter"
import Form from "../../../components/Form"
import Generic from "../../../components/Generic"
import IconButtons from "../../../components/IconButtons"
import Input from "../../../components/Input"
import Page from "../../../components/Page"
import Pagination from "../../../components/Pagination"
import Table from "../../../components/Table"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Преподаватели" }>
        <Filter togglerText="Фильтр" form={
          <Form bordered items={
            [
              [
                <Input label={ "ФИО" } />,
                <Input label={ "Email" } type={ "email" } />,
                <Input label={ "Логин" } />,
              ],
              [
                <Input label={ "Комментарий" } />,
              ],
            ]
          } controls={ {
            submit: "Применить",
            reset: "Очистить"
          } } />
        } />
        <Controls showBy items={ [
          {
            button: {
              icon: "add_box",
              text: "Выдать ключи всем"
            }
          },
          {
            button: {
              icon: "add_box",
              text: "Добавить преподавателя"
            }
          }
        ] } />
        <Table data={ {
          headers: [
            {
              title: "Email и ФИО"
            },
            {
              title: "Логин",
              sortable: true,
            },
            {
              title: "Комментарий",
              sortable: true,
            },
            {
              title: "Ключи",
            },
            {}
          ],
          rows: [
            [
              <> Исагулова Марианна <a href="#">isagulova_mt@infra-m.ru</a> </>,
              "abonent-82374",
              "",
              <>
                <button type="button">55139-75478-17 + истекшие ключи</button>
                <button type="button" className="button button--small">Выдать ключи</button>
              </>,
              <IconButtons items={ [
                {
                  icon: "add",
                  isButton: true,
                  title: "Изменить"
                },
                {
                  icon: "delete",
                  isButton: true,
                  title: "Переименовать"
                },
              ] } />
            ]
          ]
        } } />
        <Pagination />
      </Generic >
    </Page>
  )
}