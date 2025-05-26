import Head from "./Head"
import Footer from "./Footer"
import Header from "./Header"

export default function ({ children }) {
	return (
		<html lang="ru">
			<Head />
			<body>
				<Header />
				<div className="page">
					<main className="page__content">
						{ children }
					</main>
				</div>
				<Footer />
			</body>
		</html >
	)
}