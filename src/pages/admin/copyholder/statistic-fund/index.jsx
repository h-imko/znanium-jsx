import Page from "../../../../components/Page"
import Generic from "../../../../components/Generic"
import Filter from "../../../../components/Filter"
import Controls from "../../../../components/Controls"
import Table from "../../../../components/Table"
import Input from "../../../../components/Input"
import SelectSimple from "../../../../components/SelectSimple"
import Form from "../../../../components/Form"
import Links from "../../../../components/Links"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Фонд правообладателя «ПРОФЕССИЯ ООО ЦОП»" }>
        <Links items={ ["Документы", "Тематика", "УДК", "ГРНТИ", "ББК", "УГС (ОКСО)", "Вид изд.", "Тип публикации",] } />
        <Filter togglerText="Фильтр" form={
          <Form bordered items={
            [
              [
                <Input label={ "Наименование" } />,
                <Input label={ "Авторы" } />,
              ],
              [
                <SelectSimple label={ "Издательство" } />,
                <SelectSimple label={ "Год издания" } />,
              ],
              [
                <SelectSimple label={ "Коллекция" } />,
              ],
              [
                <SelectSimple label={ "Вид изданий" } />,
                <SelectSimple label={ "Типы публикаций" } />,
              ],
            ]
          } controls={ {
            submit: "Применить",
            reset: "Очистить"
          } } />
        } />
        <Controls showBy excel />
        <Table small data={ {
          headers: [
            {
              title: "Документ",
              sortable: true,
              sorted: "asc"
            },
            {
              title: "Коллекции"
            },
            {
              title: "Год",
              sortable: true,
            },
          ],
          rows: [
            [
              <a href="/admin/staff-group-members?id=8388">Кран, Г. 1000 примеров конструкций для литья под давлением / Г. Кран, Д. Эх, Х. Фогель; Пер. с нем. под ред. А.П. Пантелеева, А.А. Пантелеева. - Санкт-Петербург : ЦОП "Профессия", 2011. - 560 с.: ил.; . ISBN 978-5-91884-024-5, 500 экз. - Текст : электронный. - URL: https://znanium.ru/catalog/product/395280</a>,
              <>
                <a href="/admin/staff-group-members?id=8388">Профессия</a><br />
                <a href="/admin/staff-group-members?id=8388">Профессия. Полимеры, переработка пластмасс</a><br />
                <a href="/admin/staff-group-members?id=8388">Профессия. Технологии переработки литьем</a><br />
                <a href="/admin/staff-group-members?id=8388">Профессия. Полимеры, переработка пластмасс (для корпоративных клиентов)</a><br />
                <a href="/admin/staff-group-members?id=8388">Профессия. Технологии переработки литьем (для корпоративных клиентов)</a><br />
                <a href="/admin/staff-group-members?id=8388">Профессия (для корпоративных клиентов)</a>
              </>,
              "2011",
            ]
          ]
        } } />
      </Generic >
    </Page>
  )
}