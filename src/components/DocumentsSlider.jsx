import Splide from "./Splide/Splide"
import Labels from "./Labels"

function slide({ img, author, title }) {
	<a href="" class="documents-slider__slide">
		<img class="documents-slider__slide__img" src={ `/src/assets/static/img/${img}.webp` } alt="Книга такая-то" />
		<span class="documents-slider__slide__labels">
			{/* <%- include("/labels", {
					single: true
									}) %> */}
		</span>
		<Labels items={ [
			{

			}
		] }></Labels>
		<span class="documents-slider__slide__author">{ author }</span>
		<span class="documents-slider__slide__title">{ title }</span>
	</a>
}

export default function ({ title }) {
	return (
		1
	)
}