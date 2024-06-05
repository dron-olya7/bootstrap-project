$(document).ready(function () {
  $("#form").submit(function (e) {

    e.preventDefault();

    let name = $("#name").val();
    let surname = $("#surname").val();
    let phone = $("#phone").val();
    let country = $("#country").val();
    let index = $("#index").val();
    let address = $("#address").val();

    $(".error").remove();

    if (name.length < 1) {
      alert("Заполните поле Имя");
      return;
    }

    if (surname.length < 1) {
      alert("Заполните поле Фамилия");
      return;
    }

    if (phone.length < 1) {
      alert("Заполните поле Телефон");
      return;
    }

    if (country.length < 1) {
      alert("Заполните поле Страна");
      return;
    }

    if (index.length < 1 || index.length < 6) {
      alert("Заполните поле Индекс, индекс должен содержать 6 символов");
      return;
    }

    if (address.length < 1) {
      alert("Заполните поле Адрес");
      return;
    }

    $('#submit').click(function (e){
      $('#form').hide();
      $('#order').text("Спасибо за заказ! Мы свяжемся с вами в ближайшее время!");
      e.preventDefault();
    })

    e.preventDefault();
  });
});



