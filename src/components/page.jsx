import AccordionNav from "./AccordionNav"
import Breadcrumbs from "./Breadcrumbs"
import Footer from "./Footer.jsx"
import Head from "./Head"
import Header from "./Header"
import Singleform from "./Singleform"
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