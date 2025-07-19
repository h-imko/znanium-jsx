import accessibility from "./_accessibility"
import accordion from "./_accordion"
import bookslist from "./_bookslist"
import cookieAlert from "./_cookieAlert"
import counter from "./_counter"
import customInput from "./_customInput"
import dialog from "./_dialog"
import documents from "./_document"
import dropzone from "./_Dropzone"
import filter from "./_filter"
import fpl from "./_fpl"
import header from "./_header"
import m31 from "./_m31"
import popovers from "./_popovers"
import recservice from "./_recservice"
import restToggler from "./_restToggler"
import select from "./_select"
import shelves from "./_shelves"
import showcase from "./_showcase"
import singleform from "./_singleform"
import sliders from "./_sliders"
import table from "./_table"
import toast from "./_toast"

document.addEventListener("DOMContentLoaded", () => {
	m31()
	sliders()
	singleform()
	showcase()
	dialog()
	select()
	documents()
	accordion()
	customInput()
	table()
	filter()
	counter()
	header()
	popovers()
	shelves()
	bookslist()
	dropzone()
	restToggler()
	accessibility()
	testToasts()
	fpl()
	recservice()
	cookieAlert()
	charts()

	function testToasts() {
		document.querySelector(".test-toast")?.addEventListener("click", () => {
			setTimeout(() => {
				toast({
					title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat facere nesciunt ab officiis itaque qui , <a href="#">labore, inventore eos. Illum, impedit.</a>`,
					type: "warning",
				})
				setTimeout(() => {
					toast({
						title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero, commodi maxime tempora aspernatur",
						text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero, commodi maxime tempora aspernatur eveniet, ad facere eligendi reprehenderit ducimus minus voluptate iste.Quasi officiis placeat aperiam cupiditate, iusto odio dignissimos?",
						type: "success",
					})
					setTimeout(() => {
						toast({
							title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero, commodi maxime tempora aspernatur",
							text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero, commodi maxime tempora aspernatur eveniet, ad facere eligendi reprehenderit ducimus minus voluptate iste.Quasi officiis placeat aperiam cupiditate, iusto odio dignissimos?",
							type: "error"
						})
						setTimeout(() => {
							toast({
								title: "Неописуемо важная информация, срочно прочитать",
								text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero, commodi maxime tempora aspernatur eveniet, ad facere eligendi reprehenderit ducimus minus voluptate iste.Quasi officiis placeat aperiam cupiditate, iusto odio dignissimos?"
							})
							setTimeout(() => {
								toast({
									title: "Неописуемо важная информация, срочно прочитать",
								})
								setTimeout(() => {
									toast({
										text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero, commodi maxime tempora aspernatur eveniet, ad facere eligendi reprehenderit ducimus minus voluptate iste.Quasi officiis placeat aperiam cupiditate, iusto odio dignissimos?"
									})
									setTimeout(() => {
										toast({
											type: "error",
											text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero, commodi maxime tempora aspernatur eveniet, ad facere eligendi reprehenderit ducimus minus voluptate iste.Quasi officiis placeat aperiam cupiditate, iusto odio dignissimos?"
										})
									}, 1000)
								}, 1000)
							}, 1000)
						}, 1000)
					}, 1000)
				}, 1000)
			}, 1000)
		})
	}

	function charts() {
		if (document.querySelectorAll(".chart")) {
			import("./_chart")
		}
	}
})