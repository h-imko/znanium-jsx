import SelectSimple from "./SelectSimple"
import RestToggler from "./RestToggler"
import Labels from "./Labels"

export default function () {

  function Item() {
    return (
      <div class="quotes__item">
        <div class="quotes__item__header">
          <time datetime="" class="quotes__item__datetime">
            <span class="date"> 21 апр. 2025 г. </span>
            <span class="time"> 19:49 </span>
          </time>
          <div class="quotes__actions">
            <button type="button" class="quotes__action" title="Копировать">
              <span class="icon icon--copy"></span>
            </button>
            <button type="button" class="quotes__action" title="Изменить">
              <span class="icon icon--edit"></span>
            </button>
            <button type="button" class="quotes__action" title="Удалить">
              <span class="icon icon--close"></span>
            </button>
          </div>
        </div>
        <div class="quotes__item__title">М. Тумин, О.П....</div>
        <div class="quotes__item__text">
          <div class="quotes__item__text__content">
            <span class="quotes__item__text__head">М. Тумин, О.П. Иванова, Е.В. Зенкина, П.А. Костромин. — Москва : ИНФРА-М, 2025. — 275 с. — (Высшее образование). — DOI 10.12737/2188420. ISBN 978-5-16-020699-8 (print) ISBN 978-5-16-113364-4 (online) В учебнике рассмотрены вопросы управления рисками, которые могут систематически возникать в хозяйственно-финансовой деятельности организаций и территорий.</span>
            <RestToggler />
            <span class="quotes__item__text__tail"> Изложено понимание сущности и содержания рисков, процесса управления рисками. Рассмотрены виды рисков, методы оценки рисков и управления рисками. Предназначен для студентов, обучающихся по направлениям и профилям подготовки «Менеджмент», «Экономика», «Государственное и муниципальное управление», «Жилищное хозяйство и коммунальная инфраструктура», «Торговое дело», а также по инженерным, технологическим и другим направлениям и специальностям подготовки, изучающих дисциплины экономико-организационного и управленческого циклов. Может быть полезен аспирантам, слушателям школ бизнеса и курсов повышения квалификации и переподготовки кадров, преподавателям вузов, работникам исследовательских и консалтинговых фирм, руководителям и специалистам организаций и органов территориального управления. УДК 338.2(075.8) ББК 65.290-09я73 Р е ц е н з е н т ы: Качалов Р.М., доктор экономических наук, профессор, заведующий лабораторией издательской и маркетинговой деятельности Центрального экономико-математического института Российской академии наук; Секерин В.Д., доктор экономических наук, профессор, заведующий кафедрой брендинга и визуальных коммун...</span>
          </div>
        </div>
        <div class="quotes__item__record">
          <div class="quotes__item__record__text">Риски организаций и территорий: учебник / В.М. Тумин, О.П. Иванова, Е.В. Зенкина, П.А. Костромин. — Москва: ИНФРА-М, 2025 — (Высшее образование) — С. 2 — Текст : электронный. — URL: https://znanium.ru/read?id=463340&amp;page=2 (дата обращения: 21.04.2025). – Режим доступа: по подписке.</div>
        </div>
        <div class="quotes__item__footer">
          <a href="https://znanium.org/read?id=463340&amp;page=2" class="quotes__item__link" target="_blank">
            <span class="icon icon--description"></span>
            Открыть документ
          </a>
          <Labels />
        </div>
      </div>
    )
  }

  return (
    <div className="quotes">
      <div class="quotes__header">
        <div class="quotes__lists">
          <div class="quotes__lists__select">
            <SelectSimple />
          </div>
          <div class="quotes__actions">
            <button type="button" class="quotes__action" title="Создать">
              <span class="icon icon--add_box"></span>
            </button>
            <button type="button" class="quotes__action" title="Изменить">
              <span class="icon icon--edit"></span>
            </button>
            <button type="button" class="quotes__action" title="Удалить">
              <span class="icon icon--close"></span>
            </button>
          </div>
        </div>
        <div class="quotes__export">
          <a href="" class="quotes__export__link" download> Экспорт списка в TXT </a>
        </div>
      </div>
      <div className="quotes__list">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}