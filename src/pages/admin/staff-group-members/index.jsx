import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Filter from "../../../components/Filter"
import Controls from "../../../components/Controls"
import Table from "../../../components/Table"
import Checkbox from "../../../components/Checkbox"
import IconButtons from "../../../components/IconButtons"
import Input from "../../../components/Input"
import SelectSimple from "../../../components/SelectSimple"
import Form from "../../../components/Form"
import Fieldset from "../../../components/Fieldset"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ <>\<a href="#">Все пользователи</a>\<a href="">Базовая кафедра торговой политики</a></> }>
        <button type="button" class="button">Выдать ключи всем, учитывая фильтры</button>
        <Filter togglerText="Фильтр" form={
          <Form bordered items={
            [
              [
                <SelectSimple label={ "Подписки" } />,
                <Input label={ "ФИО" } />,
                <SelectSimple label={ "Пользователи" } />,
              ],
              [
                <Input label={ "Дата регистрации от" } type={ "date" } />,
                <Input label={ "Дата регистрации до" } type={ "date" } />,
                <Input label={ "ФИО" } type={ "email" } />,
              ],
              [
                <Input label={ "Логин" } />,
                <Input label={ "Комментарий" } />,
                <Input label={ "ФИО" } />,
              ],
              [

                <SelectSimple label={ "Статус ключа" } />,
                <SelectSimple label={ "Пачка" } />,
              ],
              [
                <Fieldset>
                  <Checkbox label={ "Преподаватели" } />
                  <Checkbox label={ "Исключить пользователей подгрупп" } />
                </Fieldset>
              ]
            ]
          } controls={ {
            submit: "Применить",
            reset: "Очистить"
          } } />
        } />
        <Controls showBy excel items={ [
          {
            button: {
              icon: "add_box",
              text: "добавить читателя"
            }
          }
        ] } />
        <Table data={ {
          headers: [
            {
              title: <Checkbox />
            },
            {
              title: "Группа / Логин / Email / ФИО / Комментарий",
              sortable: true,
              sorted: "asc"
            },
            {
              title: "Преп"
            },
            {
              title: "Ключ"
            },
            {
              title: "Дата рег.",
              sortable: true,
            },
            {}
          ],
          rows: [
            [
              <Checkbox />,
              <><a href="/admin/staff-group-members?id=8388">Преподаватели</a><br />-<br />email1@example.ru<br />ФИО 111</>,
              "Да",
              <button type="button">55139-75478-133 (для КС ИНФРА-М)</button>,
              "-",
              <IconButtons items={ [
                {
                  icon: "edit",
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
        <div class="button-group">
          <button type="button" class="button" disabled=""> Выдать ключи </button>
          <button type="button" class="button" disabled=""> Отозвать ключи </button>
          <button type="button" class="button" disabled=""> Перенести в группу... </button>
          <button type="button" class="button" disabled=""> Удалить из группы</button>
          <button type="button" class="button">Удалить из всех групп </button>
        </div>
        <div class="controls">
          <div class="controls__item">
            <button type="button" class="controls__button" data-popovertarget="popover-actions">
              <span> Операции с группой </span>
            </button>
            <div class="controls__item__popover" data-popover="" id="popover-actions">
              <div class="export-list">
                <div class="export-list__item">
                  <div class="export-list__item__name"><span>Заполнить студентов из файла .csv</span></div>
                  <div class="export-list__item__value">
                    <a href="">Скачать образец файла</a>
                    <label>
                      <span class="icon icon--upload"></span>
                      <span>Выбрать файл</span>
                      <input type="file" name="" id="" />
                    </label>
                  </div>
                </div>
                <div class="export-list__item">
                  <div class="export-list__item__name"><span>Генератор учетных записей</span></div>
                  <div class="export-list__item__value">
                    <a href=""> Скачать не активированные логины </a>
                    <button type="button">Создать новые логины списком</button>
                  </div>
                </div>
                <div class="export-list__item">
                  <div class="export-list__item__name"><span>Заполнить преподавателей из файла .csv</span></div>
                  <div class="export-list__item__value">
                    <a href="">Скачать образец файла</a>
                    <label>
                      <span class="icon icon--upload"></span>
                      <span>Выбрать файл</span>
                      <input type="file" name="" id="" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Generic >
    </Page>
  )
}