import IconButtons from "./IconButtons"

export default function () {

  function Item({ children }) {

    function Header() {
      return (

        <div className="groups__item__header">
          { children && <button type="button" className="groups__item__toggler" title="Свернуть/развернуть" data-accordion-toggler></button> }
          <a href="#" className="groups__item__title">Все пользователи (206)</a>
          <div className="groups__item__controls">
            <IconButtons items={ [
              {
                icon: "add",
                isButton: true,
                title: "Добавить подгруппу"
              },
              {
                icon: "edit",
                isButton: true,
                title: "Переименовать группу"
              },
              {
                icon: "move-group",
                isButton: true,
                title: "Переместить группу"
              },
              {
                icon: "delete",
                isButton: true,
                title: "Удалить группу"
              },
            ] } />
          </div>
        </div>
      )
    }

    function Wrapper({ children }) {
      return (
        <div className="groups__item__wrapper" data-accordion-wrapper>
          <div className="groups__item__content" data-accordion-content>
            { children }
          </div>
        </div>
      )
    }

    return (
      <div className="groups__item" data-accordion>
        <Header />
        { children && <Wrapper> { children } </Wrapper> }
      </div>
    )
  }

  return (
    <div className="groups">
      <Item>
        <Item>
          <Item></Item>
          <Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </Item>
          <Item></Item>
        </Item>
        <Item></Item>
        <Item></Item>
        <Item>
          <Item></Item>
          <Item></Item>
          <Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </Item>
        </Item>
        <Item></Item>
        <Item>
          <Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </Item>
          <Item></Item>
          <Item></Item>
        </Item>
      </Item>
    </div>
  )
}