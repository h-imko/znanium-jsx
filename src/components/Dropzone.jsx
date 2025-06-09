export default function () {
  return (
    <div class="dropzone">
      <div class="dropzone__title">Файл</div>
      <div class="dropzone__list" href="biba">
        <label class="dropzone__label">
          <input class="dropzone__input" type="file" />
          <span>Перетащите файл в поле или <span class="dropzone__label__accent"> выберите с диска </span></span>
        </label>
      </div>
    </div>
  )
}