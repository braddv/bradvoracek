
var width = 800,
    height = 400;

var start = "2000-01-01";
var numQuarters = 80;
var startvalue = 0;
var scale = 0;
var scale2 = .08;
var numdatapoints = 160;
var svg = d3.select("#balancesintro").attr("width",width).attr("height",height);
var svg2 = d3.select("#balances").attr("width",width).attr("height",height);
var svg3 = d3.select("#balances2").attr("width",width).attr("height",height);

var barWidth2 = 10;
var barSpacing2 = 10;
var positiveGov = 0;
var negativeGov = 0;
var positiveCur = 0;
var negativeCur = 0;
var positivePriv = 0;
var negativePriv = 0;
var positiveH = 0;
var negativeH = 0;
var positiveB = 0;
var negativeB = 0;

function updateGraph(start,numQuarters) {


	if (start == "1960-01-01" && numQuarters == 40) {
		startvalue = 0;
		scale = 2;
		scale2 = 4;
		numdatapoints = 40;
		barWidth2 = 16;
		barSpacing2 = 17;
	}

	if (start == "1960-01-01" && numQuarters == 80) {
		startvalue = 0;
		scale = 1;
		scale2 = 2;
		numdatapoints = 80;
		barWidth2 = 8;
		barSpacing2 = 9;
	}

	if (start == "1970-01-01" && numQuarters == 40) {
		startvalue = 40;
		scale = .5;
		scale2 = 1;
		numdatapoints = 40;
		barWidth2 = 16;
		barSpacing2 = 17;
	}

	if (start == "1970-01-01" && numQuarters == 80) {
		startvalue = 40;
		scale = .5;
		scale2 = 1;
		numdatapoints = 80;
		barWidth2 = 8;
		barSpacing2 = 9;
	}

	if (start == "1980-01-01" && numQuarters == 40) {
		startvalue = 80;
		scale = .4;
		scale2 = .8;
		numdatapoints = 40;
		barWidth2 = 16;
		barSpacing2 = 17;
	}

	if (start == "1980-01-01" && numQuarters == 80) {
		startvalue = 80;
		scale = .4;
		scale2 = .8;
		numdatapoints = 80;
		barWidth2 = 8;
		barSpacing2 = 9;
	}

	if (start == "1990-01-01" && numQuarters == 40) {
		startvalue = 120;
		scale = .2;
		scale2 = .4;
		numdatapoints = 40;
		barWidth2 = 16;
		barSpacing2 = 17;
	}

	if (start == "1990-01-01" && numQuarters == 80) {
		startvalue = 120;
		scale = .1;
		scale2 = .1;
		numdatapoints = 80;
		barWidth2 = 8;
		barSpacing2 = 9;
	}

	if (start == "2000-01-01" && numQuarters == 40) {
		startvalue = 160;
		scale = .1;
		scale2 = .08;
		numdatapoints = 40;
		barWidth2 = 16;
		barSpacing2 = 17;
	}

	if (start == "2000-01-01" && numQuarters == 80) {
		startvalue = 160;
		scale = .1;
		scale2 = .05;
		numdatapoints = 80;
		barWidth2 = 8;
		barSpacing2 = 9;
	}

	if (start == "2010-01-01" && numQuarters == 40) {
		startvalue = 200;
		scale = .1;
		scale2 = .08;
		numdatapoints = 40;
		barWidth2 = 16;
		barSpacing2 = 17;
	}

	if (start == "2010-01-01" && numQuarters == 80) {
		startvalue = 200;
		scale = .1;
		scale2 = .05;
		numdatapoints = 40;
		barWidth2 = 8;
		barSpacing2 = 9;
	}

	var barHeightP = 20;
	var barHeightG = 20;
	var barHeightC = 20;
	var barHeightB = 20;
	var barHeightH = 20;
	var barWidth = 20;
	var barSpacing = 70;
	var leftSpacing = 80;
	var topSpacing = 160;
	svg.selectAll("*").remove();

	var tip = d3.tip().attr('class', 'd3-tip2').direction('w').offset([0,0]).html(function(d) { return d; });
	svg.call(tip);

	//3 yrs = 12 data points = i:0->12

	d3.csv("/data/balances.csv", function(data) {

		for (i = startvalue; i < startvalue+numdatapoints; i++){
			var privatesector = data[i]["private"];
			var date = data[i]["DATE"];
			var scaledpriv = privatesector*scale2;
			barHeightP = Math.abs(scaledpriv);

			var govsector = data[i]["gov"];
			var scaledgov = govsector*scale2;
			barHeightG = Math.abs(scaledgov);

			var curaccount = data[i]["currentaccount"];
			var scaledcur = curaccount*-scale2;
			barHeightC = Math.abs(scaledcur);

			var bussector = data[i]["business"];
			var scaledbus = bussector*scale2;
			barHeightB = Math.abs(scaledbus);

			var housesector = data[i]["household"];
			var scaledhouse = housesector*scale2;
			barHeightH = Math.abs(scaledhouse);

			if (i == startvalue+numdatapoints/2) {
				var maxheight = Math.max(barHeightH,barHeightB,barHeightP,barHeightC,barHeightG)+topSpacing; //TODO:Switch to scaled not height

				svg.append("text").text("Net lending and borrowing (-), Private: Households and institutions (H)")
					.attr("x",width/4).attr("y",15);
				svg.append("rect").attr("height", 20).attr("width", 20)
					.attr("x",width/4-25).attr("y",0).style("fill","#636363");

				svg.append("text").text("Net lending and borrowing (-), Private: Domestic business (B)")
					.attr("x",width/4).attr("y",35);
				svg.append("rect").attr("height", 20).attr("width", 20)
					.attr("x",width/4-25).attr("y",20).style("fill","#756bb1");

				svg.append("text").text("Net lending and borrowing (-), NIPAs: Private (P)")
					.attr("x",width/4).attr("y",55);
				svg.append("rect").attr("height", 20).attr("width", 20)
					.attr("x",width/4-25).attr("y",40);

				svg.append("text").text("Negated (-) Balance on Current Account, NIPA's (CA)")
					.attr("x",width/4).attr("y",75);
				svg.append("rect").attr("height", 20).attr("width", 20)
					.attr("x",width/4-25).attr("y",60).style("fill","#31a354");

				svg.append("text").text("Net lending or net borrowing (-), NIPAs: Government (G)")
					.attr("x",width/4).attr("y",95);
				svg.append("rect").attr("height", 20).attr("width", 20)
					.attr("x",width/4-25).attr("y",80).style("fill","#e6550d");

				svg.append("text").text("Two simple identities:")
					.attr("x",width/3).attr("y",150).style("font-weight", "bold");

				//grey bar
				svg.append("rect").datum(housesector).attr("height", barHeightH).attr("width",barWidth)
					.attr("x",leftSpacing+0).attr("y",maxheight-((barHeightH+scaledhouse)/2)).style("fill","#636363")
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
				//+ sign
				svg.append("rect").attr("height",2).attr("width",20)
					.attr("x",leftSpacing+barSpacing/2).attr("y",maxheight).style("fill","#000000");
				svg.append("rect").attr("height",20).attr("width",2)
					.attr("x",leftSpacing+barSpacing/2+9).attr("y",maxheight-9).style("fill","#000000");
				//purple bar
				svg.append("rect").datum(bussector).attr("height", barHeightB).attr("width",barWidth)
					.attr("x",leftSpacing+barSpacing).attr("y",maxheight-((barHeightB+scaledbus)/2)).style("fill","#756bb1")
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
				//= sign
				svg.append("rect").attr("height",2).attr("width",20)
					.attr("x",leftSpacing+barSpacing*3/2).attr("y",maxheight+4).style("fill","#000000");
				svg.append("rect").attr("height",2).attr("width",20)
					.attr("x",leftSpacing+barSpacing*3/2).attr("y",maxheight-6).style("fill","#000000");
				//blue bar
				svg.append("rect").datum(privatesector).attr("height", barHeightP).attr("width",barWidth)
					.attr("x",leftSpacing+(barSpacing)*2).attr("y",maxheight-((barHeightP+scaledpriv)/2))
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);

				//green bar
				svg.append("rect").datum(-1*curaccount).attr("height", barHeightC).attr("width",barWidth)
					.attr("x",leftSpacing+(barSpacing)*5).attr("y",maxheight-((barHeightC+scaledcur)/2)).style("fill","#31a354")
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
				//+ sign
				svg.append("rect").attr("height",2).attr("width",20)
					.attr("x",leftSpacing+(barSpacing)*5+barSpacing/2).attr("y",maxheight).style("fill","#000000");
				svg.append("rect").attr("height",20).attr("width",2)
					.attr("x",leftSpacing+(barSpacing)*5+barSpacing/2+9).attr("y",maxheight-9).style("fill","#000000");
				//red bar
				svg.append("rect").datum(govsector).attr("height", barHeightG).attr("width",barWidth)
					.attr("x",leftSpacing+(barSpacing)*6).attr("y",maxheight-((barHeightG+scaledgov)/2)).style("fill","#e6550d")
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);

				//== sign
				svg.append("rect").attr("height",2).attr("width",20)
					.attr("x",leftSpacing+(barSpacing)*5+barSpacing*3/2).attr("y",maxheight+4).style("fill","#000000");
				svg.append("rect").attr("height",2).attr("width",20)
					.attr("x",leftSpacing+(barSpacing)*5+barSpacing*3/2).attr("y",maxheight-6).style("fill","#000000");
				//blue bar
				svg.append("rect").attr("height",2).attr("width",20)
					.attr("x",leftSpacing+(barSpacing)*7).attr("y",maxheight).style("fill","#000000");
				svg.append("rect").datum(privatesector).attr("height", barHeightP).attr("width",barWidth)
					.attr("x",leftSpacing+(barSpacing)*7.5).attr("y",maxheight-((barHeightP+scaledpriv)/2))
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
			}
		}
	});

	width = 800;
	height = 400;

	svg2 = d3.select("#balances").attr("width",width).attr("height",height);
	svg2.selectAll("*").remove();

	var leftSpacing2 = 10;
	//svg.selectAll("*").remove();

	var tip = d3.tip().attr('class', 'd3-tip2').direction('w').offset([0,0]).html(function(d) { return d; });
	svg2.call(tip);

	//3 yrs = 12 data points = i:0->12

	d3.csv("/data/balances.csv", function(data) {

		for (i = startvalue; i < startvalue+numdatapoints; i++){

			//government sector
			var govsector = data[i]["gov"];
			var scaledgov = govsector*scale;
			barHeightG = Math.abs(scaledgov);

			//private sector
			var privatesector = data[i]["private"];
			var date = data[i]["DATE"];
			var scaledpriv = privatesector*scale;
			barHeightP = Math.abs(scaledpriv);

			//current account
			var curaccount = data[i]["currentaccount"];
			var scaledcur = curaccount*-scale;
			barHeightC = Math.abs(scaledcur);

			positiveGov = (barHeightG+scaledgov)/2;
			negativeGov = (scaledgov-barHeightG)/(-2);
			positiveCur = (barHeightC+scaledcur)/2
			negativeCur = (scaledcur-barHeightC)/(-2);
			positivePriv = (barHeightP+scaledpriv)/2;
			negativePriv = (scaledpriv-barHeightP)/(-2);

			//government sector
			svg2.append("rect").datum(govsector).attr("height", barHeightG).attr("width",barWidth2)
				.attr("x",leftSpacing2+/*barWidth2*3+*/(barSpacing2)*(i-startvalue)).attr("y",height/2-positiveGov).style("fill","#e6550d")
				.on("mouseover",tip.show)
				.on("mouseout",tip.hide);


			if (scaledcur < 0) {
				svg2.append("rect").datum(-1*curaccount).attr("height", barHeightC).attr("width",barWidth2)
					.attr("x",leftSpacing2+/*barWidth2*4+*/(barSpacing2)*(i-startvalue)).attr("y",height/2+negativeGov).style("fill","#31a354")
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
				}
			else {
				svg2.append("rect").datum(-1*curaccount).attr("height", barHeightC).attr("width",barWidth2)
					.attr("x",leftSpacing2+/*barWidth2*4+*/(barSpacing2)*(i-startvalue)).attr("y",height/2-positiveCur-positiveGov).style("fill","#31a354")
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
			}
			
			if (scaledpriv < 0) {
				svg2.append("rect").datum(privatesector).attr("height", barHeightP).attr("width",barWidth2)
					.attr("x",leftSpacing2+/*barWidth2*2+*/(barSpacing2)*(i-startvalue)).attr("y",height/2+negativeGov+negativeCur)
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
			}
			else {
				svg2.append("rect").datum(privatesector).attr("height", barHeightP).attr("width",barWidth2)
					.attr("x",leftSpacing2+/*barWidth2*2+*/(barSpacing2)*(i-startvalue)).attr("y",height/2-positivePriv-positiveCur-positiveGov)
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
			}

			svg2.append("rect").attr("height",2).attr("width",width)
			.attr("x",leftSpacing2).attr("y",height/2).style("fill","#000000");
			svg2.append("text").text("0")
			.attr("x",0).attr("y",height/2+5).style("fill","#000000");
		}

	});

	width = 800;
	height = 400;

	svg3 = d3.select("#balances2").attr("width",width).attr("height",height);
	svg3.selectAll("*").remove();

	var tip = d3.tip().attr('class', 'd3-tip2').direction('w').offset([0,0]).html(function(d) { return d; });
	svg3.call(tip);

	//3 yrs = 12 data points = i:0->12

	d3.csv("/data/balances.csv", function(data) {

		for (i = startvalue; i < startvalue+numdatapoints; i++){

			//government sector
			var govsector = data[i]["gov"];
			var scaledgov = govsector*scale;
			barHeightG = Math.abs(scaledgov);

			//private sector
			var privatesector = data[i]["private"];
			var date = data[i]["DATE"];
			var scaledpriv = privatesector*scale;
			barHeightP = Math.abs(scaledpriv);

			//current account
			var curaccount = data[i]["currentaccount"];
			var scaledcur = curaccount*-scale;
			barHeightC = Math.abs(scaledcur);

			//household
			var housesector = data[i]["household"];
			var scaledhouse = housesector*scale;
			barHeightH = Math.abs(scaledhouse);

			//business
			var bussector = data[i]["business"];
			var scaledbus = bussector*scale;
			barHeightB = Math.abs(scaledbus);

			positiveGov = (barHeightG+scaledgov)/2;
			negativeGov = (scaledgov-barHeightG)/(-2);
			positiveCur = (barHeightC+scaledcur)/2
			negativeCur = (scaledcur-barHeightC)/(-2);
			positiveH = (barHeightH+scaledhouse)/2;
			negativeH = (scaledhouse-barHeightH)/(-2);
			positiveB = (barHeightB+scaledbus)/2;
			negativeB = (scaledbus-barHeightB)/(-2);

			//government sector
			svg3.append("rect").datum(govsector).attr("height", barHeightG).attr("width",barWidth2)
				.attr("x",leftSpacing2+/*barWidth2*3+*/(barSpacing2)*(i-startvalue)).attr("y",height/2-positiveGov).style("fill","#e6550d")
				.on("mouseover",tip.show)
				.on("mouseout",tip.hide);


			//current account
			if (scaledcur < 0) {
				svg3.append("rect").datum(-1*curaccount).attr("height", barHeightC).attr("width",barWidth2)
					.attr("x",leftSpacing2+/*barWidth2*4+*/(barSpacing2)*(i-startvalue)).attr("y",height/2+negativeGov).style("fill","#31a354")
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
			} else {
				svg3.append("rect").datum(-1*curaccount).attr("height", barHeightC).attr("width",barWidth2)
					.attr("x",leftSpacing2+/*barWidth2*4+*/(barSpacing2)*(i-startvalue)).attr("y",height/2-positiveGov-positiveCur).style("fill","#31a354")
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
			}

			//business
			if (scaledbus < 0) {
				svg3.append("rect").datum(bussector).attr("height", barHeightB).attr("width",barWidth2)
					.attr("x",leftSpacing2+/*barWidth2+*/(barSpacing2)*(i-startvalue)).attr("y",height/2+negativeGov+negativeCur).style("fill","#756bb1")
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
			} else {
				svg3.append("rect").datum(bussector).attr("height", barHeightB).attr("width",barWidth2)
					.attr("x",leftSpacing2+/*barWidth2+*/(barSpacing2)*(i-startvalue)).attr("y",height/2-positiveGov-positiveCur-positiveB).style("fill","#756bb1")
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
			}

			//household
			if (scaledhouse < 0) {
				svg3.append("rect").datum(housesector).attr("height", barHeightH).attr("width",barWidth2)
					.attr("x",leftSpacing2+(barSpacing2)*(i-startvalue))
					.attr("y",height/2+negativeGov+negativeCur+negativeB).style("fill","#636363")
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
			} else {
				svg3.append("rect").datum(housesector).attr("height", barHeightH).attr("width",barWidth2)
					.attr("x",leftSpacing2+(barSpacing2)*(i-startvalue))
					.attr("y",height/2-positiveGov-positiveCur-positiveB-positiveH).style("fill","#636363")
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
			}


			svg3.append("rect").attr("height",2).attr("width",width)
			.attr("x",leftSpacing2).attr("y",height/2).style("fill","#000000");
			svg3.append("text").text("0")
			.attr("x",0).attr("y",height/2+5).style("fill","#000000");
		}

	});


};

var svg4 = d3.select("#jobsforall").attr("width",width).attr("height",300);
svg4.append("text").text("Living Wage").attr("y",80).attr("x",15).attr("font-size","60px").style("fill","red");
svg4.append("text").text("Jobs").attr("y",80+70).attr("x",10+100).attr("font-size","60px");
svg4.append("text").text("For All").attr("y",80+140).attr("x",10+80).attr("font-size","60px").style("fill","red");;

var svg4 = d3.select("#abolish").attr("width",width).attr("height",height);
svg4.append("text").text("Abolish").attr("y",80).attr("x",85).attr("font-size","60px");
svg4.append("text").text("Wage").attr("y",80+70).attr("x",10+100).attr("font-size","60px").style("fill","red");
svg4.append("text").text("Slavery").attr("y",80+140).attr("x",10+78).attr("font-size","60px");

var svg4 = d3.select("#jg").attr("width",width).attr("height",height);
svg4.append("text").text("By Fiat, By Decree").attr("y",80).attr("x",0).attr("font-size","60px");
svg4.append("text").text("We Demand").attr("y",80+70).attr("x",80).attr("font-size","60px");
svg4.append("text").text("A Job Guarantee!").attr("y",80+140).attr("x",20).attr("font-size","60px");


updateGraph(start,numQuarters);

d3.select("#Start").on("change", function(e){
	start = d3.select("#Start").property("value");
	updateGraph(start, numQuarters);
});

d3.select("#NumQuarters").on("change", function(e){
	numQuarters = d3.select("#NumQuarters").property("value");
	updateGraph(start, numQuarters);
});





