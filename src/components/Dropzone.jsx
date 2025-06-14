export default function () {
  return (
    <div className="dropzone">
      <div className="dropzone__title">Файл</div>
      <div className="dropzone__list" href="biba">
        <label className="dropzone__label">
          <input className="dropzone__input" type="file" />
          <span>Перетащите файл в поле или <span className="dropzone__label__accent"> выберите с диска </span></span>
        </label>
      </div>
    </div>
  )
}