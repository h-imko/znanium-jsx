import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Filter from "../../../components/Filter"
import Controls, { Button as ControlsButton, Item as ControlsItem } from "../../../components/Controls"
import Table from "../../../components/Table"
import Input from "../../../components/Input"
import Select from "../../../components/Select"
import Form from "../../../components/Form"

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
        <Controls showBy>
          <ControlsItem>
            <ControlsButton icon={ "download" } text={ "Экспорт в Excel рубрик и количества" } />
          </ControlsItem>
          <ControlsItem>
            <ControlsButton icon={ "download" } text={ "Экспорт списка документов в Excel" } />
          </ControlsItem>
        </Controls>
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
      </Generic >
    </Page>
  )
}