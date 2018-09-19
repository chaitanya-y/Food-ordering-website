$(".clock1").setAsClock();
$(".clock2").setAsClock({
  backgroundColor: 'firebrick',
  ticks: 1,
  numbers: false
});
$(".clock3").setAsClock({
  backgroundColor: 'seagreen',
  ticks: 0,
  numbers: false
});

$('.clock4').setAsClock();

$('.clock5').setAsClock({
 sweeping: false, //Changes the hands to a ticking
 numbers: true, //false will turn the numbers off
 numberSize: '24px', //Adjust the font size of the numbers
 ticks: 1, //adjusts the tick amount, 0 = no ticks, 1 = just the hour ticks, 2 = full ticks
 backgroundColor: '#500', //can take any normal css color
 color: 'lightblue', //Changes the color of all the forground items
 borderRadius: '60px' //change how round the clock is
});

$('.arrows').setAsClock({
  initUI: false
});

$('.new-york-clock').setAsClock({
  UTCOffset: -5
});

$('.london-clock').setAsClock({
  UTCOffset: -2
});

$('.paris-clock').setAsClock({
  UTCOffset: +1
})