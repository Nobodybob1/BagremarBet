import random
import time
import sys


#tiket
def getTicket():
    print("Molimo unesite svoju kombinaciju od 6 brojeva između 1 i 48.\n")
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

odds = {
    0:25000, 1:15000, 2:7500, 3:3000, 4:1250, 5:700,
    6:350, 7:250, 8:175, 9:125, 10:100, 11:90,
    12:80, 13:70, 14:60, 15:50, 16:35, 17:25,
    18:20, 19:15, 20:12, 21:10, 22:8, 23:7, 
    24:6, 25:5, 26:4, 27:3, 28:2, 29:1
    }

n = int(input("Dobro došli! Unesite broj željenih kombinacija: "))
tickets = []

#promeni u for petlju
while (n > 0):
    tickets.append(getTicket())
    n -= 1

for i in range(len(tickets)):
    payments = []
    payments.append(int(input("Uplatite novac za " + str(i+1) + ". tiket: ")))

table = getTable()

guessed_ticket = []
for i in range(len(tickets)):
    guessed_ticket.append([])

for ticket in tickets:
    for number in ticket:
        if (number in table):
            guessed_ticket[tickets.index(ticket)].append(number)

print("Izvučeni brojevi su:")
drawTable(table)
#test
for guessed in guessed_ticket:
    if guessed:
        tmp = " ".join(str(x) for x in guessed)
        print("Pogođeni brojevi tiketa " + str(guessed_ticket.index(guessed) + 1) + " su: " + str(tmp))

        if (len(guessed) == 6):
            positions = []
            for i in guessed:
                positions.append(table.index(i))
            
            #prize = payment * odds[max(positions)-5]
            print("Osvojili ste " + str(payments[guessed_ticket.index(guessed)] * odds[max(positions)-5]) + " dinara na tiketu " + str(guessed_ticket.index(guessed) + 1))
    else:
        print("Nemate nijedan pogođen broj na tiketu " + str(guessed_ticket.index(guessed) + 1))
