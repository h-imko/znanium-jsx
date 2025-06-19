import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Table from "../../../components/Table"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Мои сертификаты" p={ "В таблице представлен список сертификатов прослушанных Вами вебинаров, с возможностью скачать." }>
        <Table small data={ {
          headers: [
            {
              title: "Дата вебинара"
            },
            {
              title: "Наименование вебинара"
            },
            {
              title: "Сертификат"
            },
          ],
          rows: [
            [
              "20.06.2024",
              <>
                Возможности для поддержки научно-образовательной деятельности: ресурс научного поиска «Неопоиск» (ведущий: Нестерова Альбина Николаевна)
                <a href="#">https://youtu.be/wmlnxp7vvlE</a>
              </>,
              <a href="">Скачать</a>
            ],
          ]
        } } />
      </Generic>
    </Page>
  )
}