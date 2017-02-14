
function updateOccupation(occupation) {
	var selection = 4;
	if (occupation == "Management") {
		selection = 0;
	}
	else if (occupation == "Operations") {
		selection = 1;
	}
	else if (occupation == "Finance") {
		selection = 2;
	}
	else if (occupation == "Computers") {
		selection = 3;
	}
	else if (occupation == "Engineering") {
		selection = 4;
	}
	else if (occupation == "Technicians") {
		selection = 5;
	}
	else if (occupation == "Science") {
		selection = 6;
	}
	else if (occupation == "Social") {
		selection = 7;
	}
	else if (occupation == "Legal") {
		selection = 8;
	}
	else if (occupation == "Education") {
		selection = 9;
	}
	else if (occupation == "Entertainment") {
		selection = 10;
	}
	else if (occupation == "Healthcare") {
		selection = 11;
	}
	else if (occupation == "Protection") {
		selection = 12;
	}
	else if (occupation == "Food") {
		selection = 13;
	}
	else if (occupation == "Maintenance") {
		selection = 14;
	}
	else if (occupation == "Care") {
		selection = 15;
	}
	else if (occupation == "Sales") {
		selection = 16;
	}
	else if (occupation == "OfficeAdmin") {
		selection = 17;
	}
	else if (occupation == "Farming") {
		selection = 18;
	}
	else if (occupation == "Construction") {
		selection = 19;
	}
	else if (occupation == "Extraction") {
		selection = 20;
	}
	else if (occupation == "Repair") {
		selection = 21;
	}
	else if (occupation == "Production") {
		selection = 22;
	}
	else if (occupation == "Transportation") {
		selection = 23;
	}
	else if (occupation == "Military") {
		selection = 24;
	}

	var width = 425,
	    height = 180;

	var svg = d3.select("#occupation").attr("width",width).attr("height",height);

	svg.selectAll("*").remove();

	d3.tsv("/data/occupationsbysex.tsv", function(data) {

		var barHeight = 20;
		var barWidth = 40;
		var barSpacing = 70;
		var numFemales = data[selection]["Female"];
		var numMales = data[selection]["Male"];
		var femaleInc = data[selection]["FemaleAvgHrly"];
		var maleInc = data[selection]["MaleAvgHrly"];
		var numFemalesInt = parseInt(numFemales.replace(",",""))/800;
		var numMalesInt = parseInt(numMales.replace(",",""))/800;

		svg.append("text").text("Occupational Employment by Gender").attr("y",15).attr("x",0).style("font-weight", "bold");
		svg.append("text").text("Avg Hrly Income").attr("y",15).attr("x",300).style("font-weight", "bold");

		//females
		svg.append("text").text("Female").attr("y",45).attr("x",0);
		svg.append("rect").attr("height", barHeight).attr("width",numFemalesInt).attr("x",0).attr("y",50);
		svg.append("text").text(numFemales).attr("y",85).attr("x",0);
		svg.append("text").text(femaleInc).attr("y",15).attr("x",300).attr("y",65);

		//males
		svg.append("text").text("Male").attr("y",45+(barSpacing)).attr("x",0);
		svg.append("rect").attr("height", barHeight).attr("width",numMalesInt).attr("x",0).attr("y",50+(barSpacing));
		svg.append("text").text(numMales).attr("y",85+(barSpacing)).attr("x",0);
		svg.append("text").text(maleInc).attr("y",15).attr("x",300).attr("y",65+(barSpacing));

	});
};

var width = 300,
	height = 1660;

var svg2 = d3.select("#overalloccupation").attr("width",width).attr("height",height);

var tip = d3.tip().attr('class', 'd3-tip').direction('e').html(function(d) { return d; });

d3.tsv("/data/overalljobs.tsv", function(data) {
	var numPeople = 0;
	svg2.append("text").text("Employed Individuals by Occupation").attr("y", 20).style("font-weight", "bold");
	svg2.call(tip);
	for (i = 0; i < 25; i++){
		svg2.append("text").text(data[i]["Occupation"]).attr("y",50+i*65).attr("x",0);
		numPeople = parseInt(data[i]["Overall"].replace(",",""));
		svg2.append("rect").datum(data[i]["Sample Jobs"]).attr("height", 20).attr("width",numPeople/1700).attr("x",0).attr("y",55+i*65)
		.on("mouseover",tip.show)
		.on("mouseout",tip.hide);
		svg2.append("text").text(data[i]["Overall"]).attr("y",90+i*65).attr("x",0);
	}
});
width = 300;
height = 500;
var svg4 = d3.select("#overalleducation").attr("width",width).attr("height",height);
d3.tsv("/data/overalleducation.tsv", function(data) {
	var numPeople = 0;
	var numUnemployed = 0;
	var numEmployed = 0;
	svg4.append("text").text("Highest Educational Attainment").attr("y", 20).style("font-weight", "bold");
	for (i = 0; i < 6; i++){
		svg4.append("text").text(data[i]["Attainment"]).attr("y",50+i*65).attr("x",0);
		numPeople = parseInt(data[i]["number of people"].replace(/,/g,""));
		numUnemployed = parseInt(data[i]["unemployed"].replace(",",""));
		numEmployed = numPeople - numUnemployed;
		svg4.append("rect").attr("height", 20).attr("width",numEmployed/5000).attr("x",0).attr("y",55+i*65);
		svg4.append("rect").attr("height", 20).attr("width",numUnemployed/5000).attr("x",numEmployed/5000).attr("y",55+i*65).style("fill","#e6550d");
		svg4.append("text").text(data[i]["number of people"]).attr("y",90+i*65).attr("x",0);
	}
});
svg4.append("rect").attr("height", 20).attr("width", 20).attr("x",0).attr("y",440);
svg4.append("text").text("Employed").attr("x",25).attr("y",455);
svg4.append("rect").attr("height", 20).attr("width", 20).attr("x",150).attr("y",440).style("fill","#e6550d");
svg4.append("text").text("Unemployed").attr("x",175).attr("y",455);


width = 300;
height = 180;
var svg3 = d3.select("#fll").attr("width",width).attr("height",height);
//svg.append("text").text("FLL Students by Gender").attr("y",15).attr("x",60).style("font-weight", "bold");

//females
svg3.append("text").text("Female").attr("y",45).attr("x",0);
svg3.append("rect").attr("height", 20).attr("width",822/5).attr("x",0).attr("y",50);
svg3.append("text").text("822").attr("y",85).attr("x",0);

//males
svg3.append("text").text("Male").attr("y",45+(70)).attr("x",0);
svg3.append("rect").attr("height", 20).attr("width",1440/5).attr("x",0).attr("y",50+(70));
svg3.append("text").text("1440").attr("y",85+(70)).attr("x",0);

updateOccupation(occupation);

d3.select("#Jobs").on("change", function(e){
	occupation = d3.select("#Jobs").property("value");
	updateOccupation(occupation);
});
