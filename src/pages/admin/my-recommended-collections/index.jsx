import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Controls, { Button as ControlsButton, Item as ControlsItem } from "../../../components/Controls"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Рекомендую студентам" }>
        <Controls>
          <ControlsItem>
            <ControlsButton icon={ "add_box" } text={ "Создать новый список" } />
          </ControlsItem>
        </Controls>
      </Generic >
    </Page>
  )
}