import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Filter from "../../../components/Filter"
import Controls from "../../../components/Controls"
import { Button as ControlsButton, Item as ControlsItem } from "../../../components/Controls"
import Table from "../../../components/Table"
import IconButtons from "../../../components/IconButtons"
import Input from "../../../components/Input"
import Form from "../../../components/Form"

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
        <Controls showBy>
          <ControlsItem>
            <ControlsButton icon={ "add_box" } text={ "Выдать ключи всем" } />
          </ControlsItem>
          <ControlsItem>
            <ControlsButton icon={ "add_box" } text={ "Добавить преподавателя" } />
          </ControlsItem>
        </Controls>
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
                <button type="button" class="button button--small">Выдать ключи</button>
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
      </Generic >
    </Page>
  )
}