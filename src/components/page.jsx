import Head from "./Head"
import Footer from "./Footer"
import Header from "./Header"
import Breadcrumbs from "./Breadcrumbs"
import Singleform from "./Singleform"
import AccordionNav from "./AccordionNav"
import Calendar from "./Webinar/Calendar"

export default function ({ children, aside, breadcrumbs, search, calendar }) {
	function Aside() {
		return (
			<aside className="page__aside">
				<AccordionNav />
				{ calendar && <Calendar /> }
			</aside>
		)
	}

	return (
		<html lang="ru">
			<Head />
			<body>
				<Header />
				{ breadcrumbs && <Breadcrumbs /> }
				<div className="page">
					<div className="page__inner">
						{ aside && <Aside /> }
						<main className="page__content">
							{ search && <Singleform /> }
							{ children }
						</main>
					</div>
				</div>
				<Footer />
			</body>
		</html >
	)
}