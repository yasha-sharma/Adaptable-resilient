from turtle import Screen
# # from random import Random
# timmy_the_turtle.shape("turtle")
# timmy_the_turtle.color("red")

# for _ in range(4):
#     timm.forward(100)
#     timm.right(90)

# timmy_the_turtle.forward(100)
# timmy_the_turtle.right(90)
# timmy_the_turtle.forward(100)
# timmy_the_turtle.right(90)
# timmy_the_turtle.forward(100)
# timmy_the_turtle.right(90)

# for _ in range(15):
#     timm.forward(10)
#     timm.penup()
#     timm.forward(10)
#     timm.pendown()

# colors = ['aquamarine', 'peru', 'cyan', 'yellow', 'red', 'green', 'pink', 'misty rose', 'black']
#
# def shapes(num_sides):
#     angel = 360 / num_sides
#     for _ in range(num_sides):
#         timm.forward(100)
#         timm.right(angel)
#
# for sides in range(3, 11):
#     timm.color(random.choice(colors))
#     shapes(sides)
import turtle as t
import random

tim = t.Turtle()
t.colormode(255)
#
def random_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    color = (r, g, b)
    return color
#
# directions = [0, 90, 180, 270]
# tim.pensize(15)
tim.speed("fastest")
#
# for _ in range(100):
#     tim.color(random_color())
#     tim.forward(30)
#     tim.setheading(random.choice(directions))

def draw_spiral(size_of_gap):
    for _ in range(int(360/size_of_gap)):
        tim.color(random_color())
        tim.circle(100)
        tim.setheading(tim.heading() + size_of_gap)

draw_spiral(5)

screen = Screen()
screen.exitonclick()

