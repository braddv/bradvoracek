
var width = 800,
    height = 400;

var svg = d3.select("#balancesintro").attr("width",width).attr("height",height);

var barHeightP = 20;
var barHeightG = 20;
var barHeightC = 20;
var barHeightB = 20;
var barHeightH = 20;
var barWidth = 20;
var barSpacing = 70;
var scale = 5;
var leftSpacing = 80;
var topSpacing = 160;
//svg.selectAll("*").remove();

var tip = d3.tip().attr('class', 'd3-tip2').direction('w').offset([0,0]).html(function(d) { return d; });
svg.call(tip);

//3 yrs = 12 data points = i:0->12

d3.csv("/data/balances.csv", function(data) {

	for (i = 0; i < 6; i++){
		var privatesector = data[i]["private"];
		var date = data[i]["DATE"];
		var scaledpriv = privatesector*scale;
		barHeightP = Math.abs(scaledpriv);

		var govsector = data[i]["gov"];
		var scaledgov = govsector*scale;
		barHeightG = Math.abs(scaledgov);

		var curaccount = data[i]["currentaccount"];
		var scaledcur = curaccount*scale;
		barHeightC = Math.abs(scaledcur);

		var bussector = data[i]["business"];
		var scaledbus = bussector*scale;
		barHeightB = Math.abs(scaledbus);

		var housesector = data[i]["household"];
		var scaledhouse = housesector*scale;
		barHeightH = Math.abs(scaledhouse);

		if (i == 3) {
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

var svg2 = d3.select("#balances").attr("width",width).attr("height",height);

var barHeightP = 20;
var barHeightG = 20;
var barHeightC = 20;
var barHeightB = 20;
var barHeightH = 20;
var barWidth = 20;
var barSpacing2 = 130;
var scale = 5;
var leftSpacing2 = 10;
var topSpacing = 160;
//svg.selectAll("*").remove();

var tip = d3.tip().attr('class', 'd3-tip2').direction('w').offset([0,0]).html(function(d) { return d; });
svg2.call(tip);

//3 yrs = 12 data points = i:0->12

d3.csv("/data/balances.csv", function(data) {

	for (i = 0; i < 6; i++){
		//zero line
		svg2.append("rect").attr("height",2).attr("width",width)
			.attr("x",leftSpacing2).attr("y",height/2).style("fill","#000000");
		svg2.append("text").text("0")
			.attr("x",0).attr("y",height/2+5).style("fill","#000000");

		//household
		var housesector = data[i]["household"];
		var scaledhouse = housesector*scale;
		barHeightH = Math.abs(scaledhouse);

		svg2.append("rect").datum(housesector).attr("height", barHeightH).attr("width",barWidth)
			.attr("x",leftSpacing2+(barSpacing2)*i)
			.attr("y",height/2-((barHeightH+scaledhouse)/2)).style("fill","#636363")
			.on("mouseover",tip.show)
			.on("mouseout",tip.hide);

		//private sector
		var privatesector = data[i]["private"];
		var date = data[i]["DATE"];
		var scaledpriv = privatesector*scale;
		barHeightP = Math.abs(scaledpriv);

		svg2.append("rect").datum(privatesector).attr("height", barHeightP).attr("width",barWidth)
			.attr("x",leftSpacing2+barWidth*2+(barSpacing2)*i).attr("y",height/2-((barHeightP+scaledpriv)/2))
			.on("mouseover",tip.show)
			.on("mouseout",tip.hide);

		var govsector = data[i]["gov"];
		var scaledgov = govsector*scale;
		barHeightG = Math.abs(scaledgov);

		svg2.append("rect").datum(govsector).attr("height", barHeightG).attr("width",barWidth)
			.attr("x",leftSpacing2+barWidth*3+(barSpacing2)*i).attr("y",height/2-((barHeightG+scaledgov)/2)).style("fill","#e6550d")
			.on("mouseover",tip.show)
			.on("mouseout",tip.hide);

		var curaccount = data[i]["currentaccount"];
		var scaledcur = curaccount*scale;
		barHeightC = Math.abs(scaledcur);

		svg2.append("rect").datum(curaccount).attr("height", barHeightC).attr("width",barWidth)
			.attr("x",leftSpacing2+barWidth*4+(barSpacing2)*i).attr("y",height/2-((barHeightC+scaledcur)/2)).style("fill","#31a354")
			.on("mouseover",tip.show)
			.on("mouseout",tip.hide);


		var bussector = data[i]["business"];
		var scaledbus = bussector*scale;
		barHeightB = Math.abs(scaledbus);

		svg2.append("rect").datum(bussector).attr("height", barHeightB).attr("width",barWidth)
			.attr("x",leftSpacing2+barWidth+(barSpacing2)*i).attr("y",height/2-((barHeightB+scaledbus)/2)).style("fill","#756bb1")
			.on("mouseover",tip.show)
			.on("mouseout",tip.hide);
	}
});

