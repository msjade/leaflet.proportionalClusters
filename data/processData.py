import csv

f = open("data.csv", 'rU')

fh = csv.reader(f)

newRows = []
isHeader = True
for row in fh:
    if isHeader:
        newRows.append(row)
        isHeader = False
    if row[2] != '' and row[3] != '':
        year = row[0][-2:]
        month = row[0][0:2]
        if year == '16' and (month == '12' or month == '11' or month == '10' or month == '9' or month == '8'):
            newRows.append(row)

fOut = open("data-2016.csv", 'w')
fWriter = csv.writer(fOut)

fWriter.writerows(newRows)
