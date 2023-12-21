
$('.btn-rightside').on('click', function () {
  $('.rightside').toggleClass('rightside--open');
  $('.btn-rightside').toggleClass('btn-rightside--close');
});

$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: "<img src='images/src/ar-l.svg' class='prev' alt='1'>",
  nextArrow: "<img src='images/src/ar-r.svg' class='next' alt='2'>",
    autoplay: true,
  autoplaySpeed: 5000
});

$(".autoplay").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: "<img src='images/src/ar-l.svg' class='prev1' alt='1'>",
  nextArrow: "<img src='images/src/ar-r.svg' class='next2' alt='2'>",
  autoplay: true,
  autoplaySpeed: 5000
});

$(".sld").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: "<img src='images/src/ar-l.svg' class='prev1' alt='1'>",
  nextArrow: "<img src='images/src/ar-r.svg' class='next2' alt='2'>",
  autoplay: true,
  autoplaySpeed: 8000
});

$(".slaidders").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: "<img src='images/src/ar-l.svg' class='prev1' alt='1'>",
  nextArrow: "<img src='images/src/ar-r.svg' class='next2' alt='2'>",
  autoplay: true,
  autoplaySpeed: 5000
});

function init() {
  let map = new ymaps.Map('info__map', {
    center: [55.837459, 37.533427],
    zoom: 16
  });
  let placemark = new ymaps.Placemark([55.837459, 37.533427], {}, {

  });
  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(init);