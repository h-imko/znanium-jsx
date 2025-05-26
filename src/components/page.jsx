import Head from "./Head"
import Footer from "./Footer"
import Header from "./Header"

export default function ({ children }) {
	return (
		<html lang="ru">
			<Head />
			<body>
				<Header />
				<main>
					{ children }
				</main>
				<Footer />
			</body>
		</html >
	)
}