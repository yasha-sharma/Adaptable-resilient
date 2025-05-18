# from turtle import Turtle, Screen
#
# trish = Turtle()
# print(trish)
#
# my_screen = Screen()
# print(my_screen)
# trish.shape("turtle")
# trish.color("green")
# trish.forward(100)
# my_screen.exitonclick()

from prettytable import PrettyTable

table = PrettyTable()
table.add_column("Pokemon Name", ["Pikachu","Squirtle","Charmander"])
table.add_column("Type", ["Electric", "Water", "Fire"])
table.align = "l"

print(table)






