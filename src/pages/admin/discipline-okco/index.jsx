import Controls from "../../../components/Controls"
import Filter from "../../../components/Filter"
import Form from "../../../components/Form"
import Generic from "../../../components/Generic"
import Input from "../../../components/Input"
import Page from "../../../components/Page"
import Pagination from "../../../components/Pagination"
import Select from "../../../components/Select"
import Table from "../../../components/Table"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Документы по ОКСО" } p={ <>На этой странице отображаются направления подготовки и специальности из классификатора ОКСО, по которым учатся в вашем учебном заведении. По каждому ОКСО вы можете видеть все документы, которые вам доступны, и отдельно – документы, которые не входят в вашу подписку. <br /> Если вы не увидели в списке какое-либо направление подготовки или специальность, по которому в вашем учебном заведении ведется обучение, напишите, пожалуйста, об этом на почту вашего персонального менеджера, и мы добавим их в этот раздел.</> }>
        <Filter togglerText="Фильтр" form={
          <Form bordered items={
            [
              [
                <Input label={ "Наименование" } />,
                <Select label={ "Уровень образования" } />,
              ],
            ]
          } controls={ {
            submit: "Применить",
            reset: "Очистить"
          } } />
        } />
        <Controls showBy items={ [
          {
            button: {
              icon: "download",
              text: "Экспорт в Excel рубрик и количества"
            }
          },
          {
            button: {
              icon: "download",
              text: "Экспорт списка документов в Excel"
            }
          }
        ] } />
        <Table small data={ {
          headers: [
            {
              title: "ОКСО"
            },
            {
              title: "Документы",
              colspan: 2
            },
          ],
          rows: [
            [
              " 00.00.00: ОБЩИЕ ДИСЦИПЛИНЫ ДЛЯ ВСЕХ СПЕЦИАЛЬНОСТЕЙ",
              "",
              ""
            ],
            [
              "  00.01.00: СПО-1",
              "",
              ""
            ],
            [
              "   00.01.01: Безопасность жизнедеятельности",
              <a href="#">в подписке (18)</a>,
              <a href="#">нет в подписке (12)</a>
            ],
            [
              "   00.01.01: Безопасность жизнедеятельности",
              <a href="#">в подписке (18)</a>,
              <a href="#">нет в подписке (12)</a>
            ],
            [
              " 00.00.00: ОБЩИЕ ДИСЦИПЛИНЫ ДЛЯ ВСЕХ СПЕЦИАЛЬНОСТЕЙ",
              "",
              ""
            ],
            [
              "  00.01.00: СПО-1",
              "",
              ""
            ],
            [
              "   00.01.01: Безопасность жизнедеятельности",
              <a href="#">в подписке (18)</a>,
              <a href="#">нет в подписке (12)</a>
            ],
            [
              "   00.01.01: Безопасность жизнедеятельности",
              <a href="#">в подписке (18)</a>,
              <a href="#">нет в подписке (12)</a>
            ]
          ]
        } } />
        <Pagination />
      </Generic >
    </Page>
  )
}