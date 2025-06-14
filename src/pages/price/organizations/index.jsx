import Page from "../../../components/Page"
import Generic from "../../../components/Generic"

export default function index() {
  return (
    <Page aside breadcrumbs search>
      <Generic title="Цены на электронные продукты для частных лиц">
        <div class="text">
          <p></p>
          <p>Научно-образовательный портал Znanium&nbsp;— на&nbsp;службе у&nbsp;студентов, преподавателей, аспирантов, магистрантов, специалистов!</p>
          <h2>О&nbsp;Znanium</h2>
          <p>Задача нашего проекта&nbsp;— предоставление оперативного современного онлайн-доступа к&nbsp;учебной и&nbsp;научной информации для всех, кто связан с&nbsp;обучением и&nbsp;наукой, кто хочет получать достоверную профессиональную информацию.<br />
            Мы&nbsp;создаем новые электронные издания, но&nbsp;не&nbsp;забываем о&nbsp;традициях. С&nbsp;нами сотрудничают тысячи педагогов, ученых и&nbsp;специалистов. Наши пользователи учатся в&nbsp;сотнях учебных заведений по&nbsp;всей стране. Мы&nbsp;участвуем в&nbsp;формировании информационного профессионального пространства.</p>
          <h2>Мы предлагаем</h2>
          <div class="table-wrapper">
            <table class="table table--slim">
              <tbody>
                <tr>
                  <td>
                    <p>Большой выбор качественной<br />
                      и&nbsp;актуальной литературы:</p>
                    <ul>
                      <li>учебников</li>
                      <li>справочников</li>
                      <li>монографий</li>
                      <li>практикумов</li>
                      <li>журналов</li>
                      <li>статей</li>
                    </ul>
                  </td>
                  <td>
                    <p>Возможность купить необходимое на&nbsp;любой бюджет</p>
                    <p>Возможность купить в&nbsp;одном месте электронные и&nbsp;бумажные книги и&nbsp;журналы</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Возможность сэкономить время на&nbsp;поиски в&nbsp;интернете</p>
                    <p>Возможность самостоятельно подбирать литературу, переходя от&nbsp;одной ступени образования к&nbsp;другой<br />
                      <a href="https://znanium.ru/catalog/searchext" target="_blank">Подробнее</a>
                    </p>
                  </td>
                  <td>
                    <p>Возможность непрерывного обучения:&nbsp;<br />
                      Ваш аккаунт навсегда принадлежит Вам, как и&nbsp;Ваши наработки в&nbsp;Znanium<br />
                      <a href="https://znanium.ru/user/my-profile" target="_blank">Подробнее</a>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Коллекции ЭБС Znanium</h2>
          <h3>Основная коллекция</h3>
          <p>Подборка книг, журналов и&nbsp;статей в&nbsp;количестве более 38&nbsp;000&nbsp;документов, 29&nbsp;000&nbsp;наименований, представленных от&nbsp;более чем 40&nbsp;издательств по&nbsp;всем направлениям подготовки. Периоды подписки: 1&nbsp;месяц, 6&nbsp;месяцев, 12&nbsp;месяцев. Таким образом, цена месячного доступа составит: 899&nbsp;руб., 417&nbsp;руб., 317&nbsp;руб. соответственно.</p>
          <h3>Покнижная покупка</h3>
          <p>Цены указаны рядом с&nbsp;каждой книгой или выпуском журнала и&nbsp;зависят от&nbsp;периода доступа: 6&nbsp;месяцев, 12&nbsp;месяцев, бессрочно. Период подписки выбираете в&nbsp;Корзине.</p>
          <h3>Печатные книги</h3>
          <p>На&nbsp;сайте ЭБС есть возможность ознакомиться и&nbsp;купить печатные книги, выходящие в&nbsp;издательской группе ИНФРА-М, а&nbsp;это более 7000&nbsp;наименований.</p>
          <div class="table-wrapper">
            <table class="table">
              <thead>
                <tr>
                  <th><strong>Продукт</strong></th>
                  <th><strong>Период подписки</strong></th>
                  <th><strong>Стоимость&nbsp;</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="https://znanium.ru/cart/add-collection?months=1&amp;id=1&amp;from=price" target="_blank">Основная коллекция ЭБС</a></td>
                  <td>1 месяц</td>
                  <td>899 ₽</td>
                </tr>
                <tr>
                  <td><a href="https://znanium.ru/cart/add-collection?months=6&amp;id=1&amp;from=price" target="_blank">Основная коллекция ЭБС</a></td>
                  <td>6 месяцев</td>
                  <td>2499 ₽</td>
                </tr>
                <tr>
                  <td><a href="https://znanium.ru/cart/add-collection?months=12&amp;id=1&amp;from=price" target="_blank">Основная коллекция ЭБС</a></td>
                  <td>12 месяцев</td>
                  <td>3799 ₽</td>
                </tr>
                <tr>
                  <td>Покнижная подписка</td>
                  <td colspan="2" rowspan="1">Цены зависят от объёма книги в страницах и от периода подписки: 6, 12 месяцев, бессрочно</td>
                </tr>
                <tr>
                  <td>Статья</td>
                  <td>бессрочно</td>
                  <td>129 ₽</td>
                </tr>
                <tr>
                  <td>Статья</td>
                  <td>6 месяцев</td>
                  <td>49 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p></p>
        </div>
      </Generic>
    </Page>
  )
}