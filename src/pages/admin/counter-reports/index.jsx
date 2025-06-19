import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Form from "../../../components/Form"
import Input from "../../../components/Input"
import SelectSimple from "../../../components/SelectSimple"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Отчеты в формате Excel">
        <Form slim items={
          [
            [
              <Input label={ "Дата от" } type={ "date" } />,
              <Input label={ "Дата до" } type={ "date" } />
            ],
            [
              <SelectSimple />
            ],
            [
              <Input label={ "Access_Type" } />
            ],
            [
              <Input label={ "Access_Method" } />
            ],
            [
              <Input label={ "Data_Type" } />
            ],
          ]
        } controls={ { submit: "Выгрузить" } } />
      </Generic>
    </Page>
  )
}