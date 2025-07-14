import AccordionNav from "./AccordionNav.jsx"
import Breadcrumbs from "./Breadcrumbs.jsx"
import Footer from "./Footer.jsx.jsx"
import Head from "./Head.jsx"
import Header from "./Header.jsx"
import Singleform from "./Singleform.jsx"
import Calendar from "./Webinar/Calendar.jsx"

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