import AffiliatedAuthors from "../../../components/AffiliatedAuthors"
import Generic from "../../../components/Generic"
import Page from "../../../components/Page"
import Text from "../../../components/Text"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Аффилированные авторы" p={ "Общее количество авторов - 597" }>
        <AffiliatedAuthors />
        <Text>
          <a href="#">Все книги</a>
        </Text>
      </Generic>
    </Page>
  )
}