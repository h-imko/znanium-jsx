import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Reflist from "../../../components/Reflist"
import Alphabetical from "../../../components/Alphabetical"
import Controls from "../../../components/Controls"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Издательства" }>
        <Alphabetical />
        <Controls showBy />
        <Reflist links pack titleLink />
      </Generic >
    </Page>
  )
}