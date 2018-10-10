# -*- coding: utf-8 -*-
import urllib2
from bs4 import BeautifulSoup
import csv

url = "https://my.americorps.gov/mp/listing/viewListing.do?id=75498"
page = urllib2.urlopen(url)
soup = BeautifulSoup(page, 'html.parser')
soup.prettify()
elements = soup.find_all("td")

output = {'education':"", 'duties':"",'program':"",'schedule':""}
outpu2 = []

if __name__ == "__main__":
	for index, element in enumerate(elements):
		if element.contents:
			string = element.contents[0].encode('utf-8')
		if 'PROGRAM' in string:
			output['program'] = elements[index].contents[0].encode('utf-8')
		if 'Member Duties' in string:
			output['duties'] = elements[index].contents[1].encode('utf-8')
		if 'Education level' in string: 
			output['education'] = elements[index+1].contents[0].encode('utf-8')
		if 'Work Schedule' in string: 
			output['schedule'] = elements[index+1].contents[0].encode('utf-8')
	print(output)

