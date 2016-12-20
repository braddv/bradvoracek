var race = "Overall";
var gender = "Overall";
var selection = 0;

function update(race,gender) {
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

	var svg = d3.select("#bar").attr("width",width).attr("height",height);
	
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

		svg.append("text").text("Number of People").attr("y",15).attr("x",80);
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

update(race,gender);

d3.select("#Race").on("change", function(e){
	race = d3.select("#Race").property("value");
	update(race,gender);
});
d3.select("#Gender").on("change", function(e){
	gender = d3.select("#Gender").property("value");
	update(race,gender);
});