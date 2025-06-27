import Alphabetical from "../../../components/Alphabetical"
import Controls from "../../../components/Controls"
import Generic from "../../../components/Generic"
import Page from "../../../components/Page"
import Pagination from "../../../components/Pagination"
import Reflist from "../../../components/Reflist"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title={ "Аффилиация авторов" }>
        <Alphabetical />
        <Controls showBy />
        <Reflist links pack />
        <Pagination />
      </Generic >
    </Page>
  )
}