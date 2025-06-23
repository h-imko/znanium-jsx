import clsx from "clsx"
import { v7 as uuid } from "uuid"

export default function ({ label, type, textarea, small, required, maxLength, readOnly, value, buttonEye, customButton, customButtonLink, caption, placeholder = " " }) {
	const id = uuid()

	function Textarea({ placeholder, required, maxLength, readOnly, value }) {
		return (
			<textarea { ...{ id, placeholder, required, maxLength, readOnly } }>
				{ value }
			</textarea>
		)
	}

	function Input({ placeholder, required, maxLength, readOnly, value, type }) {
		return (
			<input { ...{ type: type ?? "text", id, placeholder, required, maxLength, readOnly, value } } />
		)
	}

	return (
		<>
			<div className={ clsx({
				input: true,
				"input--small": small
			}) }>
				{ label && (<label className={ `input__label` } htmlFor={ id }>{ label }</label>) }
				{ textarea ? <Textarea { ...{ placeholder, required, maxLength, readOnly, value } } /> : <Input { ...{ placeholder, required, maxLength, readOnly, value, type } } /> }
				{ buttonEye && (<button type="button" className="input__button input__button--eye" data-input-button="toggleType" title="Показать/скрыть пароль"></button>) }
				{ customButton && (<button type="button" className="input__button" title="Какое-то действие" dangerouslySetInnerHTML={ { __html: customButton } }>  </button>) }
				{ customButtonLink && (<a href="" className="input__button" dangerouslySetInnerHTML={ { __html: customButtonLink } }></a>) }
			</div>
			{ caption && (<div className="form__item__caption"> { caption } </div>) }
		</>
	)
}