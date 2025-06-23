import Checkbox from "../../../components/Checkbox"
import Generic from "../../../components/Generic"
import Page from "../../../components/Page"
import Select from "../../../components/Select"
import Table from "../../../components/Table"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Настройки">
        <form className="settings__block">
          <h4>Выдача ключей доступа</h4>
          <p>Для вас установлен режим автоматической выдачи ключей доступа к вашим подпискам. Вы можете отключить автоматическую выдачу ключей, сняв "галочку" на странице конкретной подписки</p>
          <div className="settings__input">
            <Checkbox label={ "Автоматическая выдача ключей подписки разрешена только членам читательских групп" } />
          </div>
          <h4>Оповещения</h4>
          <div className="settings__input">
            <Checkbox label={ `Включить "тихий" режим работы, без отправки email-оповещений` } />
          </div>
          <h4>Бесшовный переход </h4>
          <p>Домен: test.example.ru </p>
          <p>Тип интеграции: Портал</p>
          <p> Страница перехода: znanium.ru</p>
          <div className="settings__input">
            <Checkbox label={ "При указании идентификатора документа осуществлять перенаправление в карточку документа" } />
          </div>
          <h4>Группы</h4>
          <div className="settings__input">
            <Checkbox label={ "Разрешить выбор группы при регистрации" } />
          </div>
          <div className="settings__input">
            <Checkbox label={ "Разрешить пользователям самостоятельный выбор группы в Кабинете" } />
          </div>
          <div className="settings__input">
            <Select multiple />
          </div>
          <h4>Библиотекари, получающие оповещения о новых заявках </h4>
          <Table data={ {
            headers: [
              {
                title: <Checkbox />
              },
              {
                title: "Email"
              },
              {
                title: "ФИО"
              },
              {
                title: "Имя пользователя"
              }
            ],
            rows: [
              [
                <Checkbox />,
                <a href="#">derikova_ta@infra-m.ru</a>,
                "Пикалова Екатерина Игоревна",
                "Екатерина Е.И."
              ]
            ]
          } } />
          <div class="settings__input">
            <button type="submit" class="settings__button">Сохранить</button>
          </div>
        </form>
        <form className="settings__block">
          <h4>Каталог </h4>
          <Checkbox label={ "Показывать цены в каталоге на доступные издания и коллекции" } />
          <div class="settings__input">
            <button type="submit" class="settings__button">Сохранить</button>
          </div>
        </form>
        <div class="settings__block">
          <h4>Список IP читальных залов </h4>
          <Table data={ {
            headers: [
              {
                title: "Начальный адрес"
              },
              {
                title: "Конечный адрес"
              },
            ],
            rows: [
              [
                "81.25.70.77",
                "-"
              ]
            ]
          } } />
        </div>
      </Generic>
    </Page>
  )
}