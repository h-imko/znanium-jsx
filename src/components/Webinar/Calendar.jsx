import Form from "../Form"
import Input from "../Input"

export default function () {
  return (
    <div className="webinar-calendar">
      <h4 className="webinar-calendar__title">Календарь вебинаров</h4>
      <p className="webinar-calendar__caption">Ежемесячная рассылка: узнавайте первыми о предстоящих мероприятиях и получайте информацию для размещения на сайтах ваших организаций.</p>
      <Form items={ [[<Input type={ "email" } required />]] } controls={ { submit: "Подписаться" } } />
    </div>
  )
}
