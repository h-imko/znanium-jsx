import Form from "../Form"
import Input from "../Input"

export default function () {
  return (
    <div class="webinar-calendar">
      <h4 class="webinar-calendar__title">Календарь вебинаров</h4>
      <p class="webinar-calendar__caption">Ежемесячная рассылка: узнавайте первыми о предстоящих мероприятиях и получайте информацию для размещения на сайтах ваших организаций.</p>
      <Form items={ [[<Input type={ "email" } required />]] } controls={ { submit: "Подписаться" } } />
    </div>
  )
}
