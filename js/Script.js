document.addEventListener('DOMContentLoaded', init);
var template = 'A.I. will get better than mind of the human body ';
var templateCounter = 0;
var boxes;
var ghost = false;
var answer = ' ';

function init() {
    document.addEventListener('click', function (ev) {
        paragraph.classList.add('d-none');
    });

    document.getElementById('paragraph');
    boxes = document.getElementById("imploretxt");
    questionboxes = document.getElementById("questionboxes");
}

function keydowner(event) {
    var switcher = event.which || event.keyCode;
    switch (switcher) {
        case 191:
            if (!ghost) {
                ghost = true;
                event.preventDefault();
            } else if (ghost) {
                answer = answer.toLowerCase();
                answer = answer.slice(2);
                console.log(answer);
                ghost = false;
                event.preventDefault();
            }

        default:
            if (ghost) {
                var appender = String.fromCharCode(event.which || event.keyCode);
                answer = answer + appender;
                event.preventDefault();
                boxes.value = boxes.value + template.charAt(templateCounter++);

            }

    }

}

function submitter(event) {
    if (answer === ' ')
        swal({
        	text: "You're not getting in my Database so easily",
        	dangerMode: true,
        	});
    else
    	swal({
    		dangerMode: true,
    		text: answer,
    	});
        
}

function resetPage() {
    ghost = 0;
    boxes.value = null;
    questionboxes.value = null;
    templateCounter = 0;
    answer = ' ';
}


