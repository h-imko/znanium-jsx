import Checkbox from "../../../components/Checkbox"
import Generic from "../../../components/Generic"
import Page from "../../../components/Page"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Подписки">
        <a href="" class="button-text">
          <span class="icon icon--arrow_backward"></span>
          Назад в "Подписки"
        </a>
        <p>Подписчик: <b>Никитка</b></p>
        <div class="table-wrapper">
          <table class="table table--small table--bordered table--slim">
            <tbody>
              <tr>
                <th>Подписка № </th>
                <td> 271</td>
              </tr>
              <tr>
                <th>Комментарий </th>
                <td> </td>
              </tr>
              <tr>
                <th>Договор </th>
                <td> sss</td>
              </tr>
              <tr>
                <th>Статус </th>
                <td>Подписка </td>
              </tr>
              <tr>
                <th>Начало </th>
                <td> 16.04.2019 </td>
              </tr>
              <tr>
                <th>Окончание </th>
                <td> 23.07.2029</td>
              </tr>
              <tr>
                <th> Дней до окончания </th>
                <td>1551 </td>
              </tr>
              <tr>
                <th>Общая стоимость подписки </th>
                <td> 266 000 ₽ </td>
              </tr>
              <tr>
                <th>Количество ключей </th>
                <td> 600</td>
              </tr>
              <tr>
                <th> Автоматическая выдача ключей пользователям в читальном зале (по ip или с портала) </th>
                <td>
                  <Checkbox />
                </td>
              </tr>
              <tr>
                <th> Автоматический отзыв неактивированных ключей (через 14 дней после выдачи) </th>
                <td>
                  <Checkbox />
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="text">
                    <b>Состав подписки:</b>
                    <ul>
                      <li><a href="">Все документы подписки</a></li>
                      <li><a href="">Основная коллекция ЭБС</a></li>
                      <li><a href="">Альпина Диджитал</a></li>
                      <li><a href="">Нефтегазопромысловое оборудование</a></li>
                      <li><a href="">Теоретическая механика</a></li>
                      <li><a href="">Детали машин</a></li>
                      <li><a href="">Электротехника</a></li>
                      <li><a href="">Гидромеханика и гидродинамика</a></li>
                      <li><a href="">Сопротивление материалов</a></li>
                      <li><a href="">Гидромашины и компрессоры</a></li>
                      <li><a href="">Механика грунтов, основания и фундаменты</a></li>
                      <li><a href="">Физика</a></li>
                      <li><a href="">Издательство "Просвещение". ФПУ 10-11 класс. ЭФУ</a></li>
                      <li><a href="">Книги вне коллекций</a></li>
                      <li><a href="">Электронная энциклопедия</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Generic>
    </Page>
  )
}