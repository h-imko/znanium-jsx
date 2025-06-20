import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Reflist from "../../../components/Reflist"
import Alphabetical from "../../../components/Alphabetical"
import Controls from "../../../components/Controls"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Авторы" }>
        <Alphabetical />
        <Controls showBy />
        <Reflist links books />
      </Generic >
    </Page>
  )
}