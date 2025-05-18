
# def move_fd():
#     tim.forward(50)
#
# def move_bk():
#     tim.backward(50)
#
# def move_left():
#     tim.left(10)
#
# def move_right():
#     tim.right(10)
#
# def clear_all():
#     tim.clear()
#     tim.penup()
#     tim.home()
#     tim.pendown()
#
# screen.listen()
# screen.onkey(key="w", fun=move_fd)
# screen.onkey(key="s", fun=move_bk)
# screen.onkey(key="a", fun=move_left)
# screen.onkey(key="d", fun=move_right)
# screen.onkey(key="c", fun=clear_all)

from turtle import Turtle, Screen
import random

screen = Screen()

is_race_on = False

colors = ['red', 'green', 'yellow', 'blue', 'purple', 'orange']
y_positions = [-70, -40, -10, 20, 50, 80]
all_tims = []

screen.setup(width=500, height=400)
user_guess = screen.textinput(title="Make a bet", prompt="Which turtle will win the race?Enter the color: ")
print(user_guess)

for t_index in range(0, 6):
    tim = Turtle(shape="turtle")
    tim.penup()
    tim.color(colors[t_index])
    tim.goto(x=-230, y=y_positions[t_index])
    all_tims.append(tim)

if user_guess:
    is_race_on = True

while is_race_on:
    for turtle in all_tims:
        if turtle.xcor() > 230:
            is_race_on = False
            winning_color = turtle.pencolor()
            if winning_color == user_guess:
                print(f"You won.The {winning_color} turtle has won the race.")
            else:
                print(f"You loose.The {winning_color} turtle has won the race. ")

        rand_distance = random.randint(0,10)
        turtle.forward(rand_distance)


screen.exitonclick()