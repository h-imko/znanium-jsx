export default function () {
	return (
		<div className="banners">
			<div className="container-fluid">
				<div className="banners__inner">
					<div className="banners__slider">
						<div className="splide">
							<div className="splide__track">
								<ul className="splide__list">
									<li className="splide__slide">
										<a href="" className="banners__slide">
											<img src="/src/assets/static/img/1.webp" alt="Какая-то акция" />
										</a>
									</li>
									<li className="splide__slide">
										<a href="" className="banners__slide">
											<img src="/src/assets/static/img/2.webp" alt="Какая-то акция" loading="lazy" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<a href="" className="banners__banner">
						<img src="/src/assets/static/img/3.webp" alt="Какая-то акция" />
					</a>
					<a href="" className="banners__banner">
						<img src="/src/assets/static/img/4.webp" alt="Какая-то акция" />
					</a>
				</div>
			</div>
		</div>
	)
}