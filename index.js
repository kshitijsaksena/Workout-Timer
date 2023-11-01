function startWorkout(){
    let exercises = parseInt(document.getElementById("exercises-input").value);
    let sets = parseInt(document.getElementById("sets-input").value);
    let exerciseMinutes = parseInt(document.getElementById("exercise-min-input").value);
    let exerciseSeconds = parseInt(document.getElementById("exercise-sec-input").value);
    let restMinutes = parseInt(document.getElementById("rest-min-input").value);
    let restSeconds = parseInt(document.getElementById("rest-sec-input").value);
    let restTime = restMinutes*60+restSeconds;
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    let setCount = 0;
    let exerciseCount = 0;

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function restCountdownTimer(){
        let remainingRestTime = restMinutes*60+restSeconds;

        const restCountdownInterval = setInterval(function(){
            minutes.innerHTML = formatTime(Math.floor(remainingRestTime/60));
            seconds.innerHTML = formatTime(remainingRestTime%60);
            remainingRestTime--;

            if(remainingRestTime < 0){
                clearInterval(restCountdownInterval);
                setCount++;

                if(setCount < sets){
                    exerciseCountdownTimer();
                } else {
                    setCount = 0;
                    exerciseCount++;
                    exerciseCountdown();
                }
            }
        },1000);
    }

    function exerciseCountdownTimer() {
        let remainingExerciseTime = exerciseMinutes*60+exerciseSeconds;

        const exerciseCountdownInterval = setInterval(function() {
            minutes.innerHTML = formatTime(Math.floor(remainingExerciseTime/60));
            seconds.innerHTML = formatTime(remainingExerciseTime%60);
            remainingExerciseTime--;

            if (remainingExerciseTime < 0) {
                clearInterval(exerciseCountdownInterval);
                restCountdownTimer();
            }
        }, 1000);
    }

    function exerciseCountdown(){
        if(exerciseCount < exercises){
            exerciseCountdownTimer();
        }
    }

    exerciseCountdown();
}

