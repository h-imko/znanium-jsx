import Generic from "../../../components/Generic"
import Manual from "../../../components/Manual"
import Page from "../../../components/Page"

export default function index() {
  return (
    <Page aside breadcrumbs search>
      <Generic title="Частые вопросы">
        <Manual>
          <p></p>
          <p><big>Авторизованные пользователи ЭБС Znanium могут находиться в разных ролях: <span style="color:#B22222;"><strong>библиотекарь</strong></span>, <span style="color:#0033cc;"><strong>преподаватель</strong></span>, читатель-<span style="color:#DAA520;"><strong>студент</strong></span> учебного заведения или <span style="color:#008000;"><strong>читатель</strong></span>-физическое лицо. В данном разделе размещены руководства для различных групп пользователей, призванные помочь решать конкретные функциональные задачи, возникающие при работе с ЭБС.</big></p>
          <p><big>ЭБС Znanium находится в постоянном развитии своего пользовательского интерфейса и функционального наполнения. Поэтому, хотя разделы руководств периодически обновляются, возможно их временное несоответствие текущему актуальному состоянию системы. Изменение в содержательной части конкретного руководства можно отследить по изменению номера его версии на титульной странице файла руководства.</big></p>
          <p><big>Вы можете просматривать представленные руководства непосредственно на сайте, <u><a href="#skachat"><span style="color:#3366cc;">скачивать</span></a></u> их в формате pdf для <u><a href="#navigacia"><span style="color:#3366cc;">изучения</span></a></u> вне сети, а также <u><a href="#pechat"><span style="color:#3366cc;">распечатывать</span></a></u> на принтере.</big></p>
          <p><big><a id="skachat" name="skachat"></a></big></p>
          <p><img alt="Заполните меня" src="https://znanium.ru/download/manuals/RUKOVODSTVA/RUKOVODSTVA_Kak_skachat.png" style="width: 100%;" /></p>
          <p><a id="navigacia" name="navigacia"></a></p>
          <p><img alt="Заполните меня" src="https://znanium.ru/download/manuals/RUKOVODSTVA/RUKOVODSTVA_Navigatciia_page 1.png" style="width: 100%;" /></p>
          <p><img alt="Заполните меня" src="https://znanium.ru/download/manuals/RUKOVODSTVA/RUKOVODSTVA_Navigatciia_page 2.png" style="width: 100%;" /></p>
          <p><a id="pechat" name="pechat"></a></p>
          <p><img alt="Заполните меня" src="https://znanium.ru/download/manuals/RUKOVODSTVA/RUKOVODSTVA_Kak_pechatat.png" style="width: 100%;" /></p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p></p>
        </Manual>
      </Generic>
    </Page>
  )
}