var race = "Overall";
var gender = "Overall";


function updateOccupation(race, gender) {
	var selection = 0;
	if (race == "Overall" & gender == "Overall") {
		selection = 0;
	}
	else if (race == "Overall" & gender == "Male") {
		selection = 15;
	}
	else if (race == "Overall" & gender == "Female") {
		selection = 30;
	}
	else if (race == "Hispanic" & gender == "Overall") {
		selection = 45;
	}
	else if (race == "White" & gender == "Overall") {
		selection = 60;
	}
	else if (race == "Black" & gender == "Overall") {
		selection = 75;
	}
	else if (race == "Asian" & gender == "Overall") {
		selection = 90;
	}
	else if (race == "Hispanic" & gender == "Male") {
		selection = 105;
	}
	else if (race == "Hispanic" & gender == "Female") {
		selection = 120;
	}
	else if (race == "White" & gender == "Male") {
		selection = 135;
	}
	else if (race == "White" & gender == "Female") {
		selection = 150;
	}
	else if (race == "Black" & gender == "Male") {
		selection = 165;
	}	
	else if (race == "Black" & gender == "Female") {
		selection = 180;
	}
	else if (race == "Asian" & gender == "Male") {
		selection = 90;
	}
	else if (race == "Asian" & gender == "Female") {
		selection = 90;
	}

	var width = 300,
	    height = 1100;

	var svg = d3.select("#occupation").attr("width",width).attr("height",height);

	svg.selectAll("*").remove();

	d3.tsv("/data/occupation.tsv", function(data) {

		var industries = [];

		for (var step = 0; step < 15; step++) {
			newIndustry = new Object();
			newIndustry.numPpl = parseInt((data[selection+step]["# ppl"]).replace(",",""));
			newIndustry.industry = data[selection+step]["occupation"];
			newIndustry.width = newIndustry.numPpl/14;
			industries.push(newIndustry);
		}

		var barHeight = 20;
		var barSpacing = 70;

		svg.append("text").text("Most Popular Occupations").attr("y",15).attr("x",60).style("font-weight", "bold");

		for (step in industries) { 
			var industry = industries[step];
			svg.append("text").text(industry.industry).attr("y",45+(barSpacing*step)).attr("x",0);
			svg.append("rect").attr("height", barHeight).attr("width",industry.width).attr("x",0).attr("y",50+(barSpacing*step));
			svg.append("text").text(industry.numPpl).attr("y",85+(barSpacing*step)).attr("x",0);
			svg.append("text").text("people").attr("y",85+(barSpacing*step)).attr("x",35);
		}

	});
};

function updateIndustry(race, gender) {
	var selection = 0;
	if (race == "Overall" & gender == "Overall") {
		selection = 0;
	}
	else if (race == "Overall" & gender == "Male") {
		selection = 10;
	}
	else if (race == "Overall" & gender == "Female") {
		selection = 20;
	}
	else if (race == "Hispanic" & gender == "Overall") {
		selection = 30;
	}
	else if (race == "White" & gender == "Overall") {
		selection = 40;
	}
	else if (race == "Black" & gender == "Overall") {
		selection = 50;
	}
	else if (race == "Asian" & gender == "Overall") {
		selection = 60;
	}
	else if (race == "Hispanic" & gender == "Male") {
		selection = 70;
	}
	else if (race == "Hispanic" & gender == "Female") {
		selection = 80;
	}
	else if (race == "White" & gender == "Male") {
		selection = 90;
	}
	else if (race == "White" & gender == "Female") {
		selection = 100;
	}
	else if (race == "Black" & gender == "Male") {
		selection = 110;
	}	
	else if (race == "Black" & gender == "Female") {
		selection = 120;
	}
	else if (race == "Asian" & gender == "Male") {
		selection = 60;
	}
	else if (race == "Asian" & gender == "Female") {
		selection = 60;
	}

	var width = 300,
	    height = 740;

	var svg = d3.select("#industry").attr("width",width).attr("height",height);

	svg.selectAll("*").remove();

	d3.tsv("/data/industry.tsv", function(data) {

		var industries = [];

		for (var step = 0; step < 10; step++) {
			newIndustry = new Object();
			newIndustry.numPpl = parseInt((data[selection+step]["# ppl"]).replace(",",""));
			newIndustry.industry = data[selection+step]["Industry"];
			newIndustry.width = newIndustry.numPpl/14;
			industries.push(newIndustry);
		}

		var barHeight = 20;
		var barSpacing = 70;

		svg.append("text").text("Most Popular Industries").attr("y",15).attr("x",60).style("font-weight", "bold");

		for (step in industries) { 
			var industry = industries[step];
			svg.append("text").text(industry.industry).attr("y",45+(barSpacing*step)).attr("x",0);
			svg.append("rect").attr("height", barHeight).attr("width",industry.width).attr("x",0).attr("y",50+(barSpacing*step));
			svg.append("text").text(industry.numPpl).attr("y",85+(barSpacing*step)).attr("x",0);
			svg.append("text").text("people").attr("y",85+(barSpacing*step)).attr("x",35);
		}

	});
};

function updateEmployment(race,gender) {
	var selection = 0;

	if (race == "Overall" & gender == "Overall") {
		selection = 0;
	}
	else if (race == "Overall" & gender == "Male") {
		selection = 1;
	}
	else if (race == "Overall" & gender == "Female") {
		selection = 2;
	}
	else if (race == "Hispanic" & gender == "Overall") {
		selection = 3;
	}
	else if (race == "Hispanic" & gender == "Male") {
		selection = 4;
	}
	else if (race == "Hispanic" & gender == "Female") {
		selection = 5;
	}
	else if (race == "White" & gender == "Overall") {
		selection = 6;
	}
	else if (race == "White" & gender == "Male") {
		selection = 7;
	}
	else if (race == "White" & gender == "Female") {
		selection = 8;
	}
	else if (race == "Black" & gender == "Overall") {
		selection = 9;
	}
	else if (race == "Black" & gender == "Male") {
		selection = 10;
	}
	else if (race == "Black" & gender == "Female") {
		selection = 11;
	}	
	else if (race == "Asian" & gender == "Overall") {
		selection = 12;
	}
	else if (race == "Asian" & gender == "Male") {
		selection = 13;
	}
	else if (race == "Asian" & gender == "Female") {
		selection = 14;
	}

	var width = 300,
	    height = 300;

	var svg = d3.select("#emp").attr("width",width).attr("height",height);
	
	svg.selectAll("*").remove();

	d3.tsv("/data/emp.tsv", function(data) {

		var employed = parseInt((data[selection]["Employed"]).replace(",",""));
		var unemployed = parseInt((data[selection]["Unemployed"]).replace(",",""));
		var notInLaborForce = parseInt((data[selection]["Not in Labor Force"]).replace(",",""));

		heightEmployed = employed/200;
		heightUnemployed = unemployed/200;
		heightNotInLaborForce = notInLaborForce/200;

		var leftPadding = 15;
		var bottomPadding = 30;
		var barWidth = 35;
		var barSpacing = 70;

		svg.append("text").text("Number of 25-65 Year Olds").attr("y",15).attr("x",60).style("font-weight", "bold");
		svg.append("rect").attr("height", heightEmployed).attr("width",barWidth).attr("x",leftPadding).attr("y",(height-heightEmployed-bottomPadding));
		svg.append("text").text("Employed").attr("y",height-15);
		svg.append("text").text(employed).attr("y",height-heightEmployed-bottomPadding-2).attr("x",leftPadding-2);
		svg.append("rect").attr("height", heightUnemployed).attr("width",barWidth).attr("x",((barSpacing+barWidth)*2)+leftPadding).attr("y",(height-heightUnemployed-bottomPadding));
		svg.append("text").text("Not in Labor").attr("y",height-15).attr("x",(barWidth+barSpacing));
		svg.append("text").text("Force").attr("y",height).attr("x",(barWidth+barSpacing)+15);
		svg.append("text").text(notInLaborForce).attr("y",height-heightNotInLaborForce-bottomPadding-2).attr("x",(barWidth+barSpacing)+leftPadding);
		svg.append("rect").attr("height", heightNotInLaborForce).attr("width",barWidth).attr("x",(barSpacing+barWidth)+leftPadding).attr("y",(height-heightNotInLaborForce-bottomPadding));
		svg.append("text").text("Unemployed").attr("y",height-15).attr("x",((barWidth+barSpacing)*2));
		svg.append("text").text(unemployed).attr("y",height-heightUnemployed-bottomPadding-2).attr("x",((barWidth+barSpacing)*2)+leftPadding);
	});
};

updateEmployment(race,gender);
updateIndustry(race,gender);
updateOccupation(race,gender);

d3.select("#Race").on("change", function(e){
	race = d3.select("#Race").property("value");
	updateIndustry(race,gender);
	updateEmployment(race,gender);
	updateOccupation(race,gender);

});
d3.select("#Gender").on("change", function(e){
	gender = d3.select("#Gender").property("value");
	updateIndustry(race,gender);
	updateEmployment(race,gender);
	updateOccupation(race,gender);

});