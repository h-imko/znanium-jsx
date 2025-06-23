import Generic from "../../../components/Generic"
import Page from "../../../components/Page"
import Text from "../../../components/Text"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="COUNTER SUSHI">
        <Text>
          <p>COUNTER_SUSHI — это RESTful-интерфейс, возвращающий отчеты COUNTER 5 в формате JSON, позволяющий получать сведения об использовании ЭБС Znanium в других приложениях. URL-адрес SUSHI состоит из четырех основных разделов:&nbsp;</p>
          <ul>
            <li>базовый URL-адрес SUSHI-сервера</li>
            <li>конкретный запрашиваемый отчет</li>
            <li>учетные данные аутентификации</li>
            <li>параметры отчета, такие как диапазон дат, список метрик, и т.д.</li>
          </ul>
          <p>Обязательные параметры для всех запросов выдаются службой поддержки Znanium:</p>
          <ul>
            <li>customer_id - идентификатор клиента ЭБС</li>
            <li>api_key - ключ api-аутентификации</li>
          </ul>
          <p>Ниже представлен перечень ресурсов и параметров, необходимых для успешной выгрузки отчетов COUNTER_SUSHI.</p>
          <p><strong>https://znanium.ru/counter-sushi/status</strong><br />
            Возвращает текущий статус службы отчетов, поддерживаемых API.</p>
          <p><strong>https://znanium.ru/counter-sushi/reports</strong><br />
            Возвращает детальный список поддерживаемых отчетов. С подробным описанием и прямой ссылкой на его выгрузку.</p>
          <p>Необязательные параметры:<br />
            <em>search</em> - поисковая фраза, позволяющая отфильтровать отчеты по названию.
          </p>
          <p><strong>https://znanium.ru/counter-sushi/reports/&lt;report_name&gt;</strong><br />
            Возвращает json-отчет COUNTER 5 по заданным параметрам. Вместо &lt;report_name&gt; указывается наименование отчета.<br />
            Полный перечень поддерживаемых отчетов: pr, pr_p1, dr, dr_d1, dr_d2, tr, tr_b1, tr_b2, tr_b3, tr_j1, tr_j2, tr_j3, tr_j4.</p>
          <p>Обязательные параметры:<br />
            <em>begin_date</em> - дата начала отчетного периода.<br />
            <em>end_date</em> - дата окончания отчетного периода.<br />
            Даты указываются в формате гггг-мм-дд или гггг-мм.&nbsp;<br />
            Статистика предоставляется кратно месяцу, поэтому даты, не относящиеся к концу или началу месяца будут преобразованы соответствующим образом.
          </p>
          <p>Важно отметить, что необязательные параметры применимы только к Master-отчетам pr, dr, tr, в то время как остальные являются их стандартными представлениями с фиксированным набором метрик и фильтров.<br />
            Множественные значения параметров указываются в виде перечня, разделенного символом "|". Если параметр не указан, будет использован полный перечень для текущего отчета.</p>
          <p>Необязательные параметры:</p>
          <p><em>metric_type</em> - перечень возвращаемых метрик отчета.<br />
            Пример: Total_Item_Investigations|Unique_Item_Investigations|Unique_Item_Requests|Unique_Title_Requests|No_License|Limit_Exceeded</p>
          <p><em>data_type</em> - перечень используемых в отчете типов данных.<br />
            Пример: Platform|Book|Journal|Article</p>
          <p><em>access_method</em> - перечень методов доступа, используемых в отчете.<br />
            Пример: Regular|TDM</p>
          <p><em>access_type</em>&nbsp;- перечень методов доступа, используемых в отчете.<br />
            Данный параметр применим только для отчетов TR.<br />
            Пример: Controlled|OA_Gold</p>
          <p><em>yop</em> - год публикации изданий, представленных в отчете.<br />
            Данный параметр применим только для отчетов TR.<br />
            Пример: 2001|2006</p>
          <p><em>granularity</em> - степень детализации отчета. По умолчанию используется значние "month" (помесячная статистика), альтернативой является "totals" - за весь выбранный период.</p>
          <p>Более подробную информацию можно найти в <a href="https://cop5.projectcounter.org/en/5.0.2/03-specifications/03-counter-report-common-attributes-and-elements.html" target="_blank">официальной документации по COUNTER 5</a>.</p>
        </Text>
      </Generic>
    </Page>
  )
}