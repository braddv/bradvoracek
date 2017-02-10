var race = "Overall";
var gender = "Overall";

function updateOccupation(occupation) {
	var selection = 0;
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

	var width = 300,
	    height = 180;

	var svg = d3.select("#occupation").attr("width",width).attr("height",height);

	svg.selectAll("*").remove();

	d3.tsv("/data/occupationsbysex.tsv", function(data) {

		console.log(data[selection]);

		var barHeight = 20;
		var barWidth = 40;
		var barSpacing = 70;
		var numFemales = data[selection]["Female"];
		var numMales = data[selection]["Male"];
		var numFemalesInt = parseInt(numFemales.replace(",",""))/800;
		var numMalesInt = parseInt(numMales.replace(",",""))/800;
		console.log(numFemalesInt);
		console.log(numMalesInt);


		svg.append("text").text("Number Employed by Gender").attr("y",15).attr("x",60).style("font-weight", "bold");

		//females
		svg.append("text").text("Female").attr("y",45).attr("x",0);
		svg.append("rect").attr("height", barHeight).attr("width",numFemalesInt).attr("x",0).attr("y",50);
		svg.append("text").text(numFemales).attr("y",85).attr("x",0);

		//males
		svg.append("text").text("Male").attr("y",45+(barSpacing)).attr("x",0);
		svg.append("rect").attr("height", barHeight).attr("width",numMalesInt).attr("x",0).attr("y",50+(barSpacing));
		svg.append("text").text(numMales).attr("y",85+(barSpacing)).attr("x",0);

	});
};
var width = 300,
	height = 180;
var svg = d3.select("#fll").attr("width",width).attr("height",height);
//svg.append("text").text("FLL Students by Gender").attr("y",15).attr("x",60).style("font-weight", "bold");

//females
svg.append("text").text("Female").attr("y",45).attr("x",0);
svg.append("rect").attr("height", 20).attr("width",822/5).attr("x",0).attr("y",50);
svg.append("text").text("822").attr("y",85).attr("x",0);

//males
svg.append("text").text("Male").attr("y",45+(70)).attr("x",0);
svg.append("rect").attr("height", 20).attr("width",1440/5).attr("x",0).attr("y",50+(70));
svg.append("text").text("1440").attr("y",85+(70)).attr("x",0);

updateOccupation(occupation);

d3.select("#Jobs").on("change", function(e){
	occupation = d3.select("#Jobs").property("value");
	updateOccupation(occupation);
});
