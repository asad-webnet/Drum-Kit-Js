for (var i = 0; i < document.querySelectorAll("button").length; i++) {
        document.querySelectorAll("button")[i].addEventListener("click", function () {
                console.log(this.innerHTML);
                        TakingKeyInputs(this.innerHTML);


                }

        )
}

document.addEventListener("keypress", function (event) {
        TakingKeyInputs(event.key);
})

function TakingKeyInputs(ButtonPress) {
        var audio = new Audio();
        switch (ButtonPress) {
                case "w":
                        {
                                audio.src = "sounds/crash.mp3";
                                audio.play();
                                break;
                        }
                case "a":
                        {
                                audio.src = "sounds/kick-bass.mp3";
                                audio.play();
                                break;
                        }
                case "s":
                        {
                                audio.src = "sounds/snare.mp3";
                                audio.play();
                                break;
                        }
                case "d":
                        {
                                audio.src = "sounds/tom-1.mp3";
                                audio.play();
                                break;
                        }
                case "j":
                        {
                                audio.src = "sounds/tom-2.mp3";
                                audio.play();
                                break;
                        }
                case "k":
                        {
                                audio.src = "sounds/tom-3.mp3";
                                audio.play();
                                break;
                        }
                case "l":
                        {
                                audio.src = "sounds/tom-4.mp3";
                                audio.play();
                                break;
                        }

                default:
                        console.log("Wrong Key");
                        break;



        }

}