$('.temperature .left').click(() => {
  const type = 'temperature';
  const fromValue = $('.temperature .value2').val();
  const fromUnit = $('.temperature .unit2').val();
  const toUnit = $('.temperature .unit1').val();
  console.log({ type, fromValue, fromUnit, toUnit });
  $.getJSON('/api/temperature', { fromValue, fromUnit, toUnit }, (data) => {
    console.log(data);
    $('.temperature .value1').val(data.result);
  });
});

$('.temperature .right').click(() => {
  const type = 'temperature';
  const fromValue = $('.temperature .value1').val();
  const fromUnit = $('.temperature .unit1').val();
  const toUnit = $('.temperature .unit2').val();
  console.log({ type, fromValue, fromUnit, toUnit });
  $.getJSON('/api/temperature', { fromValue, fromUnit, toUnit }, (data) => {
    console.log(data);
    $('.temperature .value2').val(data.result);
  });
});

$('.currency .left').click(() => {
  const type = 'currency';
  const fromValue = $('.currency .value2').val();
  const fromUnit = $('.currency .unit2').val();
  const toUnit = $('.currency .unit1').val();
  console.log({ type, fromValue, fromUnit, toUnit });
  $.getJSON('/api/currency', { fromValue, fromUnit, toUnit }, (data) => {
    console.log(data);
    $('.currency .value1').val(data.result);
  });
});

$('.currency .right').click(() => {
  const type = 'currency';
  const fromValue = $('.currency .value1').val();
  const fromUnit = $('.currency .unit1').val();
  const toUnit = $('.currency .unit2').val();
  console.log({ type, fromValue, fromUnit, toUnit });
  $.getJSON('/api/currency', { fromValue, fromUnit, toUnit }, (data) => {
    console.log(data);
    $('.currency .value2').val(data.result);
  });
});
