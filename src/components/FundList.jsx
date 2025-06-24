export default function ({ nocode }) {

  function Item({ children }) {

    function Header() {
      return (
        <div className="fund-list__item__header">
          { children && !nocode && <button className="fund-list__item__toggler" data-accordion-toggler></button> }
          <div className="fund-list__item__title">
            { nocode || <div className="fund-list__item__title__code">02</div> }
            <a href="#" className="fund-list__item__title__name">Бизнес. Предпринимательство. Сервис</a>
            <div className="fund-list__item__title__count">1</div>
          </div>
        </div>
      )
    }

    function Wrapper() {
      return (
        <div className="fund-list__item__wrapper" data-accordion-wrapper>
          <div className="fund-list__item__content" data-accordion-content>
            { children }
          </div>
        </div>
      )
    }

    return (
      <div className="fund-list__item" data-accordion>
        <Header />
        { children && !nocode && <Wrapper /> }
      </div>
    )
  }

  return (
    <div className="fund-list">
      <div className="container-fluid">
        <div className="fund-list__items">
          <Item>
            <Item>
              <Item />
              <Item />
              <Item />
            </Item>
            <Item />
            <Item />
            <Item>
              <Item />
              <Item />
              <Item />
            </Item>
            <Item />
            <Item />
          </Item>
          <Item />
          <Item />
          <Item>
            <Item />
            <Item />
            <Item />
          </Item>
          <Item />
        </div>
      </div>
    </div>
  )
}