import random
import time
import sys

print("Dobro došli! Molimo unesite svoju kombinaciju od 6 brojeva između 1 i 48.\n")

#tiket
def getTicket():
    ticket = []
    i = 0
    while(i < 6):
        num = int(input(str(i+1) + ". Broj "))
        if (num < 1): 
            print("Broj mora biti veći od 1")
            continue
        elif(num > 48):
            print("Broj mora biti manji od 48")
            continue
        elif(num in ticket):
            print("Već ste izabrali željeni broj")
            continue
        else: ticket.append(num)

        i += 1

    return ticket

#brojevi
def getTable():
    table = random.sample(range(1, 49), 35)
    return table

# def drawTable(table):
#     for i in range(7):
#         row = table[5*i:5*(i+1)]
#         print(" ".join(str(x) for x in row))
            
def drawTable(table):
    for i in range(7):
        for j in range(5):
            index = i*5 + j
            print(table[index], end=" ")
            time.sleep(3)
            #neophodno da bih ga naterao da ispiše broj po broj svake 3 sekunde
            sys.stdout.flush()
        print()

ticket = getTicket()
table = getTable()

guessed = []
for number in ticket:
    if (number in table):
        guessed.append(number)

print("Izvučeni brojevi su:")
drawTable(table)

if guessed:
    guessed = " ".join(str(x) for x in guessed)
    print("Pogođeni brojevi su: " + guessed)
else:
    print("Nemate nijedan pogođen broj")

