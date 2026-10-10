/* The keepsake uses the same front page and language as the birthday site. */
(() => {
  function paintNewspaperDownload(){
    const ru=document.documentElement.lang==='ru';
    const href='assets/media/amarachi-birthday-post-'+(ru?'ru':'en')+'.jpg';
    const download=document.getElementById('newspaperDownload');
    download.href=href;download.download='Amarachi-at-20-The-Birthday-Post'+(ru?'-RU':'')+'.jpg';
    download.textContent=ru?'Сохранить газету':'Save the newspaper';
    const full=document.getElementById('newspaperFullSize');full.href=href;full.textContent=ru?'Открыть полностью ↗':'Open full size ↗';
    document.getElementById('newspaperSaveHint').textContent=ru?'Картинка, которую можно сохранить или опубликовать. На iPhone открой её и удерживай, чтобы сохранить в Фото.':'A full-size picture you can keep or post. On iPhone, open it and hold the image to save it to Photos.';
    download.parentElement.setAttribute('aria-label',ru?'Сохранить газету':'Save your newspaper');
  }
  document.addEventListener('victory:languagechange',paintNewspaperDownload);
  paintNewspaperDownload();
})();
