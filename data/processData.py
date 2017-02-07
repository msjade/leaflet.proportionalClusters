import csv

f = open("data.csv", 'rU')

fh = csv.reader(f)

newRows = []
for row in fh:
    if row[2] != '' and row[3] != '':
        newRows.append(row)

fOut = open("data-latlng.csv", 'w')
fWriter = csv.writer(fOut)

fWriter.writerows(newRows)
