// 1
//  get container of seats
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect  = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;
// console.log(ticketPrice);

// 3
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    ////////////////////////////////////
    // 5
    const seatIndex = [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat)
    })
    //  console.log(seatIndex);
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));
    /////////////////////////////////////
    // console.log(selectedSeats);
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}


// 6    
// save movie data to local storage
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// 7
function populateUI() {
        const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
        console.log(selectedSeats)
        if (selectedSeats !== null && selectedSeats.length > 0) {
            seats.forEach((seat, index)=>{
                if (selectedSeats.indexOf(index) > -1) {
                    seat.classList.add('selected');
                }
            })
        }
}


// 2
container.addEventListener('click',  e => {
    // e.target delect what div is click...
    //  console.log(e.target);

    if (e.target.classList.contains('seat') &&
       !e.target.classList.contains('occupied'))
        {
            // e.target.classList.add('selected'); // add only set not reset
            e.target.classList.toggle('selected'); // toggle set and reset if click again
            updateSelectedCount();
        }
});


// 4
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    console.log(e.target.selectedIndex, e.target.value);
    updateSelectedCount();

})






















