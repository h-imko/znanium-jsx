import Controls from "../../../components/Controls"
import Generic from "../../../components/Generic"
import Page from "../../../components/Page"
import Reflist from "../../../components/Reflist"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Рекомендую студентам" }>
        <Controls excel items={ [
          {
            button: {
              icon: "add_box",
              text: "Создать новый список"
            }
          }
        ] } />
        <Reflist actions pack titleLink text />
      </Generic >
    </Page>
  )
}