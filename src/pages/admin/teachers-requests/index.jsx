import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Filter from "../../../components/Filter"
import Table from "../../../components/Table"
import Input from "../../../components/Input"
import Form from "../../../components/Form"
import Links from "../../../components/Links"
import Checkbox from "../../../components/Checkbox"
import IconButtons from "../../../components/IconButtons"
import Labels from "../../../components/Labels"

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
        <div class="button-group">
          <button type="button" class="button" disabled=""> В корзину </button>
          <button type="button" class="button" disabled=""> Отказать </button>
        </div>
      </Generic >
    </Page>
  )
}