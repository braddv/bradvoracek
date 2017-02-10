use "/Users/braddv/Desktop/AZ FLL/azonly2015.dta", clear

gen management = 0
replace management = 1 if occ2010 >= 0010 & occ2010 <= 0500

gen operations = 0
replace operations = 1 if occ2010 >= 0510 & occ2010 <= 0730

gen finance = 0
replace finance = 1 if occ2010 >= 0800 & occ2010 <= 0950

gen computers = 0
replace computers = 1 if occ2010 >= 1000 & occ2010 <= 1240

gen engineering = 0
replace engineering = 1 if occ2010 >= 1300 & occ2010 <= 1540

gen technicians = 0
replace technicians = 1 if occ2010 >= 1550 & occ2010 <= 1560

gen science = 0
replace science = 1 if occ2010 >= 1600 & occ2010 <= 1980

gen social = 0 
replace social = 1 if occ2010 >= 2000 & occ2010 <= 2060

gen legal = 0
replace legal = 1 if occ2010 >= 2100 & occ2010 <= 2150

gen education = 0 
replace education = 1 if occ2010 >= 2200 & occ2010 <= 2550

gen entertainment = 0 
replace entertainment = 1 if occ2010 >= 2600 & occ2010 <= 2920

gen healthcare = 0 
replace healthcare = 1 if occ2010 >= 3000 & occ2010 <= 3650

gen protection = 0 
replace protection = 1 if occ2010 >= 3700 & occ2010 <= 3950

gen food = 0 
replace food = 1 if occ2010 >= 4000 & occ2010 <= 4150

gen maintenance = 0 
replace maintenance = 1 if occ2010 >= 4200 & occ2010 <= 4250

gen care = 0 
replace care = 1 if occ2010 >= 4300 & occ2010 <= 4650

gen sales = 0 
replace sales = 1 if occ2010 >= 4700 & occ2010 <= 4965

gen office = 0
replace office = 1 if occ2010 >= 5000 & occ2010 <= 5940

gen farming = 0 
replace farming = 1 if occ2010 >= 6000 & occ2010 <= 6130

gen construction = 0
replace construction = 1 if occ2010 >= 6200 & occ2010 <= 6765

gen extraction = 0 
replace extraction = 1 if occ2010 >= 6800 & occ2010 <= 6940

gen repair = 0 
replace repair = 1 if occ2010 >= 7000 & occ2010 <= 7630

gen production = 0 
replace production = 1 if occ2010 >= 7700 & occ2010 <= 8965

gen transportation = 0 
replace transportation = 1 if occ2010 >= 9000 & occ2010 <= 9750

gen military = 0 
replace military = 1 if occ2010 >= 9000 & occ2010 <= 9830

gen engineeringfield = 0
replace engineeringfield = 1 if degfield == 24

bysort sex: tab management if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab operations if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab finance if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab computers if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab engineering if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab technicians if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab science if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab social if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab legal if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab education if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab entertainment if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab healthcare if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab protection if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab food if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab maintenance if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab care if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab sales if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab office if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab farming if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab construction if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab extraction if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab repair if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab production if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab transportation if age >= 18 & age <= 65 [fweight=perwt]
bysort sex: tab military if age >= 18 & age <= 65 [fweight=perwt]



