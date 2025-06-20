import Page from "../../../components/Page"
import Generic from "../../../components/Generic"
import Text from "../../../components/Text"
import AffiliatedAuthors from "../../../components/AffiliatedAuthors"

export default function index() {
  return (
    <Page aside breadcrumbs>
      <Generic title="Аффилированные авторы" p={ "Общее количество авторов - 597" }>
        <AffiliatedAuthors />
        <Text>
          <a href="">Все книги</a>
        </Text>
      </Generic>
    </Page>
  )
}