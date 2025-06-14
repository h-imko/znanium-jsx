import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Table from "../../../components/Table"
import Controls from "../../../components/Controls"
import Links from "../../../components/Links"
import Text from "../../../components/Text"
import IconButtons from "../../../components/IconButtons"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Подписки">
        <Links items={ ["Актуальные", "Архив"] } />
        <Controls showBy />
        <Table data={ {
          headers: [
            {
              sortable: true,
              title: "№ подписки"
            },
            {
              title: "Комментарий"
            },
            {
              sortable: true,
              title: "Период"
            },
            {
              sortable: true,
              title: "Статус"
            },
            {
              sortable: true,
              title: "Сумма"
            },
            {
              sortable: true,
              title: "Ключей"
            },
            {
              sortable: true,
              title: "Док-тов"
            },
            {},
          ],
          rows: [
            [
              <a href="#">86102</a>,
              "",
              "01.07.2024<br>30.06.2025<br>Дней&nbsp;ост.:&nbsp;147",
              "Подписка",
              "3&nbsp;496&nbsp;700&nbsp;₽",
              <a href="#">95039</a>,
              <a href="#">55192</a>,
              <IconButtons items={ [
                {
                  icon: "monitoring",
                  title: "Перейти к статистике"
                }
              ] } />,
            ],
            [
              <a href="#">86102</a>,
              "",
              "01.07.2024<br>30.06.2025<br>Дней&nbsp;ост.:&nbsp;147",
              "Подписка",
              "3&nbsp;496&nbsp;700&nbsp;₽",
              <a href="#">95039</a>,
              <a href="#">55192</a>,
              <IconButtons items={ [
                {
                  icon: "monitoring",
                  title: "Перейти к статистике"
                }
              ] } />,
            ],
          ]
        } } />
        <Text>
          <p>
            <img src="https://znanium.ru/uploads/managers/Исагулова_Марианна_Тенгизовна_2-small.jpg" align="left" style="display: inline; width: auto; margin-right: 20px;" />
            Продлить подписку на ЭБС Вы можете у своего менеджера:
          </p>
          <p><b>Исагулова Марианна Тенгизовна</b></p>
          <p>тел. (495) 859-48-60 доб. 210, моб. +7 (929) 984-30-66</p>
          <p>email: isagulova_mt@infra-m.ru</p>
          <p>
            Получить ознакомительный доступ Вы можете через <a href="/site/request-for-connect">форму запроса на тестирование ЭБС</a>.
            <br />Все способы доступа к ЭБС — <a href="/help/firstvisit">здесь</a>.
          </p>
        </Text>
      </Generic>
    </Page>
  )
}