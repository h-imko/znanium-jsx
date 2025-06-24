import Checkbox from "../../../components/Checkbox"
import Filter from "../../../components/Filter"
import Form from "../../../components/Form"
import Generic from "../../../components/Generic"
import IconButtons from "../../../components/IconButtons"
import Input from "../../../components/Input"
import Labels from "../../../components/Labels"
import Links from "../../../components/Links"
import Page from "../../../components/Page"
import Table from "../../../components/Table"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Заявки преподавателей" }>
        <Links items={ ["Новые", "В заказах", "В подписках", "Отклонено библиотекой"] } />
        <Filter togglerText="Фильтр" form={
          <Form bordered items={
            [
              [
                <Input label={ "Преподаватель" } />,
                <Input label={ "Документ" } />,
                <Input label={ "Издательство" } />,
              ],
              [
                <Input label={ "Год" } />,
                <Input label={ "№ заказа" } />,
              ],
            ]
          } controls={ {
            submit: "Применить",
            reset: "Очистить"
          } } />
        } />
        <Table small data={ {
          headers: [
            {
              title: <Checkbox />,
            },
            {
              title: "Дата"
            },
            {
              title: "Преподаватель"
            },
            {
              title: "Документ"
            },
            {
              title: "Издательство"
            },
            {
              title: "Год"
            },
            {},
            {}
          ],
          rows: [
            [
              <Checkbox />,
              "19.09.2024	",
              "Еманов А. Л.	",
              <a href="#">Алгоритмическая теория систем управления, основанная на спектральных методах. Том 2. Матрично-вычислительные технологии на базе интегральных уравнений</a>,
              "Республиканский институт профессионального образования",
              "2024",
              <Labels items={ [
                {
                  text: "Уже в подписке",
                  color: 'alt1'
                }
              ] } />,
              <IconButtons items={ [
                {
                  icon: "close",
                  isButton: true,
                  title: "Отклонить"
                },
              ] } />
            ],
            [
              <Checkbox />,
              "19.09.2024	",
              "Еманов А. Л.	",
              <a href="#">Основы философии</a>,
              "ФЛИНТА",
              "2024",
              "",
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
        <div className="button-group">
          <button type="button" className="button" disabled=""> В корзину </button>
          <button type="button" className="button" disabled=""> Отказать </button>
        </div>
      </Generic >
    </Page>
  )
}