
/*
create dropdowns in form
get correct number of days per month
get difference between two dates
manually convert milliseconds to days/hours/minutes/seconds/frames
use setInterval() to create a countdown
save the selected date to localStorage
*/

//---dropdowns and getting correct number of days per month--/

const $year = document.getElementById('year')
const $month = document.getElementById('month')
const $day = document.getElementById('day')
const $form = document.getElementById('form')

const daysInMonth = [31,31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const $container = document.getElementById('container') 
if(localStorage.getItem('date')){

const timer = new easytimer.Timer()
        let now = luxon.DateTime.local()
        let futureDate = JSON.parse(localStorage.getItem('date'));
        let future = luxon.DateTime.fromObject({year: futureDate.year, month: futureDate.month, day: futureDate.day})
        let difference = future.diff(now,['days']).toObject();
        timer.start({
        countdown:true,
        startValues: {days: difference.days}
        })
        timer.addEventListener('secondsUpdated', function (){
        $container.innerHTML = timer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds'])
        })
}
else{

    let years = []
for (let i = 2020; i<= 2030; i++) {
    years.push(`<option>${i}</option>`)
}
$year.innerHTML = years.join('')

let months = []
for (let i = 1; i <=12; i++){
    months.push(`<option>${i}</option>`)
}

$month.innerHTML = months.join('')

 let days = []
    console.log(daysInMonth[$month.value])
    for (let i = 1; i <= 31; i++){
        days.push(`<option>${i}</option>`)
    }
    
    $day.innerHTML = days.join('')
    
/*hacer lo de los cambios de mes*/
$month.addEventListener('change', function(){

    console.log('month changed')

    let days = []
    console.log(daysInMonth[$month.value])
    for (let i = 1; i <=daysInMonth[$month.value]; i++){
        days.push(`<option>${i}</option>`)
    }
    
    $day.innerHTML = days.join('')
    


})

/*use setInterval() to create a countdown*/




//--date difference and ms conservations
let DateTime = luxon.DateTime

 

$form.addEventListener('submit', function(event){
  event.preventDefault()


 let now = luxon.DateTime.local()



  let futureDateStore = DateTime.fromObject({
    year:$year.value,
    month:$month.value,
    day:$day.value


/*put the put in local storage*/

 })

 let localdata = {
     year:$year.value,
    month:$month.value,
    day:$day.value
 }

 console.log(futureDateStore);

let str = JSON.stringify(localdata)
localStorage.setItem('date', str);

let futureDate = JSON.parse(localStorage.getItem('date'));

let countdownDate =  DateTime.fromObject({
    year: futureDate.year,
    month: futureDate.month,
    day: futureDate.day

 })




console.log(futureDate)
let difference = countdownDate.diff(now,['days']).toObject();



/*create a new* console.log(difference) countdown to put also in the form in my html structure div*/



const timer = new easytimer.Timer()
timer.start({
countdown:true,
startValues: {days: difference.days}



})

timer.addEventListener('secondsUpdated', function (){

$container.innerHTML = timer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds'])
})

 })


}



