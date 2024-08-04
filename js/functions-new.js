let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

// SE NÃO SABE? D E I X A ! hahaha

var
	topx = 0,
	box = '',
	win = '',
	WheelBuild = '',
	spinFnc = '',
	boxWheel = '',
	doc = document;

WheelBuild = function () {
	var
		containerWheel = doc.querySelectorAll('section.boxWheel .container')[0],
		htmlWheel = '',
		part = 0;

	part = parseFloat((360 / objWheel.length));

	[].forEach.call(objWheel, function (v, i) {
		htmlWheel += '<div style="background-color:' + v.color + '; transform:rotate(' + (part * i) + 'deg);" data-pos="' + i + '">';
			htmlWheel += '<span>';
				htmlWheel += '<img src="' + v.img + '" alt="' + v.name + '"/>';
			htmlWheel += '</span>';
		htmlWheel += '</div>';
	});

	if (containerWheel) {
		containerWheel.innerHTML = htmlWheel;
	}
};

btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);

	setTimeout(function () {
		spinFnc = function () {
			topx = 0;
			boxWheel = doc.querySelectorAll('section.boxWheel .container div span');

			[].forEach.call(boxWheel, function (el) {
				box = el.getBoundingClientRect().top;

				if (topx === 0) {
					topx = box;
					win = el;

				} else if (topx >= box) {
					topx = box;
					win = el;
				}
			});

			var
				boxWin = doc.querySelectorAll('span.win')[0];

			if (boxWin) {
				boxWin.innerHTML = 'Você acaba de GANHAR: <b style="color:' + objWheel[win.parentElement.dataset.pos].color + ';">' + objWheel[win.parentElement.dataset.pos].amount + ' ' + objWheel[win.parentElement.dataset.pos].name + '</b>';
			}
		};

		spinFnc();

	}, 3400);
};

WheelBuild();