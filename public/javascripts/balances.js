
var width = 800,
    height = 400;

var start = "2000-01-01";
var end = "2016-07-01";
var startvalue = 0;
var scale = 0;
var scale2 = .08;
var numdatapoints = 160;
var svg = d3.select("#balancesintro").attr("width",width).attr("height",height);
var svg2 = d3.select("#balances").attr("width",width).attr("height",height);

function updateGraph(start,end) {

	if (start == "2000-01-01" && end == "2016-07-01") {
		startvalue = 162;
		scale = .1;
		numdatapoints = 80;
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
			var scaledcur = curaccount*scale2;
			barHeightC = Math.abs(scaledcur);

			var bussector = data[i]["business"];
			var scaledbus = bussector*scale2;
			barHeightB = Math.abs(scaledbus);

			var housesector = data[i]["household"];
			var scaledhouse = housesector*scale2;
			barHeightH = Math.abs(scaledhouse);

			if (i == startvalue+numdatapoints/2) {
				var maxheight = Math.max(barHeightH,barHeightB,barHeightP)+topSpacing;

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

				svg.append("text").text("Balance on Current Account, NIPA's")
					.attr("x",width/4).attr("y",75);
				svg.append("rect").attr("height", 20).attr("width", 20)
					.attr("x",width/4-25).attr("y",60).style("fill","#31a354");

				svg.append("text").text("Net lending or net borrowing (-), NIPAs: Government")
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
				svg.append("rect").datum(curaccount).attr("height", barHeightC).attr("width",barWidth)
					.attr("x",leftSpacing+(barSpacing)*5).attr("y",maxheight-((barHeightC+scaledcur)/2)).style("fill","#31a354")
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
				//- sign
				svg.append("rect").attr("height",2).attr("width",20)
					.attr("x",leftSpacing+(barSpacing)*5+barSpacing/2).attr("y",maxheight).style("fill","#000000");
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
				svg.append("rect").datum(privatesector).attr("height", barHeightP).attr("width",barWidth)
					.attr("x",leftSpacing+(barSpacing)*7).attr("y",maxheight-((barHeightP+scaledpriv)/2))
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide);
			}
		}
	});

	var width = 800,
	    height = 400;

	svg2 = d3.select("#balances").attr("width",width).attr("height",height);
	svg2.selectAll("*").remove();

	var barSpacing2 = 10;
	var leftSpacing2 = 10;
	var barWidth2 = 10;
	//svg.selectAll("*").remove();

	var tip = d3.tip().attr('class', 'd3-tip2').direction('w').offset([0,0]).html(function(d) { return d; });
	svg2.call(tip);

	//3 yrs = 12 data points = i:0->12

	d3.csv("/data/balances.csv", function(data) {

		for (i = startvalue; i < startvalue+numdatapoints; i++){
			//zero line
			svg2.append("rect").attr("height",2).attr("width",width)
				.attr("x",leftSpacing2).attr("y",height/2).style("fill","#000000");
			svg2.append("text").text("0")
				.attr("x",0).attr("y",height/2+5).style("fill","#000000");

			//private sector
			var privatesector = data[i]["private"];
			var date = data[i]["DATE"];
			var scaledpriv = privatesector*scale;
			barHeightP = Math.abs(scaledpriv);

			svg2.append("rect").datum(privatesector).attr("height", barHeightP).attr("width",barWidth2)
				.attr("x",leftSpacing2+/*barWidth2*2+*/(barSpacing2)*(i-startvalue)).attr("y",height/2-((barHeightP+scaledpriv)/2))
				.on("mouseover",tip.show)
				.on("mouseout",tip.hide);

			//government sector
			var govsector = data[i]["gov"];
			var scaledgov = govsector*scale;
			barHeightG = Math.abs(scaledgov);

			svg2.append("rect").datum(govsector).attr("height", barHeightG).attr("width",barWidth2)
				.attr("x",leftSpacing2+/*barWidth2*3+*/(barSpacing2)*(i-startvalue)).attr("y",height/2-((barHeightG+scaledgov)/2)).style("fill","#e6550d")
				.on("mouseover",tip.show)
				.on("mouseout",tip.hide);

			//current account
			var curaccount = data[i]["currentaccount"];
			var scaledcur = curaccount*scale;
			barHeightC = Math.abs(scaledcur);

			svg2.append("rect").datum(curaccount).attr("height", barHeightC).attr("width",barWidth2)
				.attr("x",leftSpacing2+/*barWidth2*4+*/(barSpacing2)*(i-startvalue)).attr("y",height/2-((barHeightC+scaledcur)/2)).style("fill","#31a354")
				.on("mouseover",tip.show)
				.on("mouseout",tip.hide);

			//business
			var bussector = data[i]["business"];
			var scaledbus = bussector*scale;
			barHeightB = Math.abs(scaledbus);

			svg2.append("rect").datum(bussector).attr("height", barHeightB).attr("width",barWidth2)
				.attr("x",leftSpacing2+/*barWidth2+*/(barSpacing2)*(i-startvalue)).attr("y",height/2-((barHeightB+scaledbus)/2)).style("fill","#756bb1")
				.on("mouseover",tip.show)
				.on("mouseout",tip.hide);

			//household
			var housesector = data[i]["household"];
			var scaledhouse = housesector*scale;
			barHeightH = Math.abs(scaledhouse);

			svg2.append("rect").datum(housesector).attr("height", barHeightH).attr("width",barWidth2)
				.attr("x",leftSpacing2+(barSpacing2)*(i-startvalue))
				.attr("y",height/2-((barHeightH+scaledhouse)/2)).style("fill","#636363")
				.on("mouseover",tip.show)
				.on("mouseout",tip.hide);
		}
	});
};

updateGraph(start,end);

d3.select("#Start").on("change", function(e){
	start = d3.select("#Start").property("value");
	updateGraph(start, end);
});

d3.select("#End").on("change", function(e){
	end = d3.select("#End").property("value");
	updateGraph(start, end);
});
