import Controls from "../../../../components/Controls"
import Filter from "../../../../components/Filter"
import Form from "../../../../components/Form"
import Generic from "../../../../components/Generic"
import IconButtons from "../../../../components/IconButtons"
import Input from "../../../../components/Input"
import Links from "../../../../components/Links"
import Page from "../../../../components/Page"
import Table from "../../../../components/Table"

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