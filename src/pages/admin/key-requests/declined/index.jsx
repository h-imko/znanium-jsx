import Page from "../../../../components/Page"
import Generic from "../../../../components/Generic"
import Filter from "../../../../components/Filter"
import Controls from "../../../../components/Controls"
import Table from "../../../../components/Table"
import Input from "../../../../components/Input"
import Form from "../../../../components/Form"
import Links from "../../../../components/Links"
import Checkbox from "../../../../components/Checkbox"
import IconButtons from "../../../../components/IconButtons"

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
        <Controls showBy excel />
        <Table small data={ {
          headers: [
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
            },
            {}
          ],
          rows: [
            [
              <>Малова Анастасия <br />malova.iteb@gmail.com</>,
              "",
              "-",
              "",
              "27.07.2020 13:50",
              <IconButtons items={ [
                {
                  icon: "cached",
                  isButton: true,
                  title: "Восстановить"
                },
              ] } />
            ]
          ]
        } } />
      </Generic >
    </Page>
  )
}