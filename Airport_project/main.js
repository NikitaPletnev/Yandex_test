/*Обращение к объекту, с данными*/
let mydata = JSON.parse(data);
function addInfo(data) {
  var block = $(".block_item");
  object = {
    "time": ".time",
    "flight": ".flight",
    "town": ".city",
    "terminal": ".terminal",
    "status": ".status"
  };
  data.forEach(function(el, i) {
    let parent = block[i];
    Object.keys(object).forEach(function(key) {
      $(parent).find(object[key]).html(el[key]);
      switch (el[key]) {
        case 'совершил посадку':
        $(parent).addClass('flight-in');
        break;
        case 'вылетел':
        $(parent).addClass('flight-up');
        break;
        case 'задержан':
        $(parent).addClass('flight-delay');
        break;
      };
    });
  })
}
addInfo(mydata);


/*Поиск по номеру рейса*/
let searchStyle = document.getElementById('search-style');

document.getElementById('search').addEventListener('input', function() {
  if (!this.value) {
    searchStyle.innerHTML = '';
    return;
  }
  searchStyle.innerHTML = '.block_item div:not([data-index*="' + this.value.toLowerCase() + '"]) { display: none;}';
});

/*Фильтрация по выбору свойств(в конце я решил , что с jQuery удобнее)*/
$('#check-up').click(function(){
    if ($(this).is(':checked')){
        $('.flight-up').show(100);
    } else {
        $('.flight-up').hide(100);
    }
});

$('#check-in').click(function(){
    if ($(this).is(':checked')){
        $('.flight-in').show(100);
    } else {
        $('.flight-in').hide(100);
    }
});

$('#check-delay').click(function(){
    if ($(this).is(':checked')){
        $('.flight-delay').show(100);
    } else {
        $('.flight-delay').hide(100);
    }
});