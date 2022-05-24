//create your own event

let count = 0;

// 1 To assign event
const event1 = new Event('start')

//2 // To trigger the event Listener
document.addEventListener('start', () => {
    count=0;
    alert('event tiggred as count came 5');

});


document.getElementById("countId").addEventListener("click", function () {
     count++;
     document.getElementById('countIndex').innerHTML=count;
    ////  3 .To trigger the Event
    if (count == 5) {
        document.dispatchEvent(event1);
    }

});



document.getElementById('countIndex').innerHTML=count;