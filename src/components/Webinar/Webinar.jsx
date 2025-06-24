export default function ({ content }) {
  function Header() {
    return (
      <div className={ `webinar__header webinar__header--color-${Math.floor(Math.random() * 3 + 1)} webinar__header--pattern-${Math.floor(Math.random() * 3 + 1)}` }>
        <div className="webinar__header__content">
          <h1 className="webinar__title">Издательский холдинг ИНФРА-М: подводим итоги 2024 года</h1>
          <div className="webinar__info">
            <div className="date"><em>24 декабря 2024</em> </div>
            <div className="time">11:00, 30 минут</div>
          </div>
          <div className="webinar__presenters">
            <div className="webinar__presenter">
              <img src="/src/assets/static/img/15.webp" alt="Заполните меня" className="webinar__presenter__img" />
              <div className="webinar__presenter__info">
                <div className="webinar__presenter__caption">Ведущий</div>
                <div className="webinar__presenter__name">Еманов Алексей Леонидович</div>
                <div className="webinar__presenter__post">Методист образовательных мероприятий</div>
              </div>
            </div>
            <div className="webinar__presenter">
              <img src="/src/assets/static/img/16.webp" alt="Заполните меня" className="webinar__presenter__img" />
              <div className="webinar__presenter__info">
                <div className="webinar__presenter__caption">Ведущий</div>
                <div className="webinar__presenter__name">Нестерова Альбина Николаевна</div>
                <div className="webinar__presenter__post">Методист образовательных мероприятий</div>
              </div>
            </div>
          </div>
          <a href="#" className="webinar__button"> Смотреть</a>
        </div>
      </div>
    )
  }

  function Aside() {
    return (
      <div className="webinar__aside">
        <div className="webinar__presenters">
          <div className="webinar__presenter">
            <img src="/assets/static/img/15.webp" alt="Заполните меня" className="webinar__presenter__img" />
            <div className="webinar__presenter__info">
              <div className="webinar__presenter__caption">Ведущий</div>
              <div className="webinar__presenter__name">Еманов Алексей Леонидович</div>
              <div className="webinar__presenter__post">Методист образовательных мероприятий</div>
            </div>
          </div>
          <div className="webinar__presenter">
            <img src="/assets/static/img/16.webp" alt="Заполните меня" className="webinar__presenter__img" />
            <div className="webinar__presenter__info">
              <div className="webinar__presenter__caption">Ведущий</div>
              <div className="webinar__presenter__name">Нестерова Альбина Николаевна</div>
              <div className="webinar__presenter__post">Методист образовательных мероприятий</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function Content() {
    return (
      <div className="webinar__content">
        <div className="webinar__video">
          <iframe src="https://vkvideo.ru/video_ext.php?oid=-38772636&amp;id=456239672&amp;hd=1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen=""></iframe>
        </div>
        <div className="webinar__main">
          <p>В издательском холдинге ИНФРА-М большое значение придается работе с авторами не только на этапе создания своих произведений, но и после выхода их в свет. Мы расскажем о программах лояльности и поддержки авторов, а также представлении их научно-образовательных школ на различных площадках ИНФРА-М.</p>
          <p>В этом и кроется особенность того, как мотивировать взрослых людей на обучение, как бороться за их внимание в мире, перенасыщенном информацией. </p>
          <h4>На вебинаре мы разберем темы:</h4>
          <ul>
            <li>поддержка авторской лояльности в ИНФРА-М;</li>
            <li>профессиональные конкурсы для авторов;</li>
            <li>продвижение авторов и научно-образовательных школ в сообществе.</li>
          </ul>
          <p>Также сможете задать вопросы эксперту.</p>
          <p><strong>Вебинар будет интересен сотрудникам библиотек, которые занимаются вопросами печатного и электронного комплектования, а также обновлениями фонда литературы по различным направлениям подготовки учебных заведений.</strong></p>
          <h4>Кому будет интересен вебинар? </h4>
          <ul>
            <li>Авторам учебной и научной литературы, которые заинтересованы в продвижении в сообществе своих произведений и научно-образовательных школ, которые они представляют.</li>
          </ul>
          <div className="webinar__main__extra">
            <h4>Дополнительные материалы</h4>
            <p><a href="#">Проекты ИНФРА.М по поддержке научного просвещения.pdf</a></p>
            <p>
              <a href="https://znanium.ru/webinarfiles/stuff/download?id=a35a00ab0682db2ca87317f028679cbf.9a102a8f7c2318fff0ff05cf8d72270e.pdf" _target="_blank">
                Приказ Минтруда РФ от 12.04.2013 N 148Н Об утверждении уровней квалификации в целях разработки.pdf </a>
            </p>
          </div>
        </div>
        <div className="webinar__text">
          <p>Обратите внимание! </p>
          <ol>
            <li>
              <p>Для регистрации на вебинар <a href="https://znanium.ru/site/login">авторизуйтесь</a> или <a href="https://znanium.ru/site/signup">зарегистрируйтесь</a>&nbsp;в ЭБС.</p>
            </li>
            <li>
              <p>При регистрации на вебинар необходимо указать свою электронную почту и учебное заведение, иначе сертификат будет недоступен для скачивания. Если от одной организации участвует несколько сотрудников, зарегистрироваться необходимо каждому из них.</p>
            </li>
            <li>
              <p>Не забудьте добавить свои вопросы на этапе регистрации – мы обязательно ответим на них во время вебинара.</p>
            </li>
            <li>
              <p>После регистрации на Вашу почту придёт приглашение на вебинар –&nbsp;для перехода на площадку, в указанное время переходите по ссылке, указанной&nbsp;в письме.</p>
            </li>
            <li>
              <p>Если в день регистрации Вы не получили приглашение на вебинар – проверьте папку «Спам», а если его там не оказалось, напишите о проблеме в отдел техподдержки на&nbsp;<a href="mailto:ebs_support@znanium.com">ebs_support@znanium.ru</a></p>
            </li>
            <li>
              <p>Присоединяясь к вебинару в день мероприятия, Вам потребуется ещё раз ввести свои ФИО и e-mail для входа на платформу.</p>
            </li>
            <li>
              <p><a href="https://events.webinar.ru/support/test-webrtc">Проверить доступность вебинарной площадки</a></p>
            </li>
            <li>
              <p><a href="https://help.webinar.ru/ru/articles/4184821-%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D0%B0%D1%86%D0%B8%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D1%80%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D0%B2%D0%B5%D0%B1%D0%B8%D0%BD%D0%B0%D1%80%D0%B0">Технические рекомендации для зрителей вебинара</a></p>
            </li>
            <li>
              <p>В течение 2-3 дней после завершения мероприятия Вы получите письмо со ссылками на сертификат участника, видеозапись и материалы вебинара. Все сертификаты прослушанных Вами вебинаров ZNANIUM доступны в Личном кабинете, в разделе «Мои сертификаты».</p>
            </li>
          </ol>
          <p>Подключайтесь к нашим вебинарам «<a href="https://znanium.ru/webinars">CoZnanium по вторникам</a>»! Записи прошедших вебинаров смотрите в «Видеотеке знаний» в&nbsp;<a href="https://www.youtube.com/channel/UC8lr8z9q-gDQbTXcrxsRasQ" target="_blank">Youtube&nbsp;</a>или&nbsp;<a href="https://vk.com/video/playlist/-38772636_7" target="_blank">Вконтакте</a>.</p>
          <div className="webinar__button is-disabled">Зарегистрироваться</div>
          <p>Для регистрации на вебинар <a href="#">авторизуйтесь</a> или <a href="#">зарегистрируйтесь</a> в ЭБС.</p>
        </div>
      </div>
    )
  }

  function Container() {
    return (
      <div className="container-fluid">
        <div className="webinar__inner">
          <Header />
          <Content />
          <Aside />
        </div>
      </div>
    )
  }

  return (
    <div className="webinar">
      { content || <Header /> }
      { content && <Container /> }
    </div>
  )
}