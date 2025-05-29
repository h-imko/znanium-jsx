import Head from "./Head"
import Footer from "./Footer"
import Header from "./Header"
import Breadcrumbs from "./Breadcrumbs"
import AccordionNav from "./Accordion-nav"

function Aside() {
	return (
		<aside class="page__aside">
			<AccordionNav />
		</aside>
	)
}

export default function ({ children, aside, breadcrumbs, search }) {
	return (
		<html lang="ru">
			<Head />
			<body>
				<Header />
				{ breadcrumbs && <Breadcrumbs /> }
				<div className="page">
					<div className="page__inner">
						{ aside && Aside() }
						<main className="page__content">
							{ search && 123 }
							{ children }
						</main>
					</div>
				</div>
				<Footer />
			</body>
		</html >
	)
}