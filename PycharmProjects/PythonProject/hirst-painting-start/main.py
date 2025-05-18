###This code will not work in repl.it as there is no access to the colorgram package here.###
##We talk about this in the video tutorials##
import random
import colorgram
from turtle import Turtle, Screen
import turtle as t
tim = t.Turtle()
t.colormode(255)

# rgb_colors = []
# colors = colorgram.extract('image.jpg', 30)
# print(colors)
# for color in colors:
#     r = color.rgb.r
#     g = color.rgb.g
#     b = color.rgb.b
#     new_color = (r, g, b)
#     rgb_colors.append(new_color)
#
# print(rgb_colors)
tim.penup()
tim.speed("fastest")
tim.hideturtle()

color_list = [(236, 239, 243), (149, 75, 50), (222, 201, 136), (53, 93, 123), (170, 154, 41), (138, 31, 20), (134, 163, 184), (197, 92, 73), (47, 121, 86), (73, 43, 35), (145, 178, 149), (14, 98, 70), (232, 176, 165), (160, 142, 158), (54, 45, 50), (101, 75, 77), (183, 205, 171), (36, 60, 74), (19, 86, 89), (82, 148, 129), (147, 17, 19), (27, 68, 102), (12, 70, 64), (107, 127, 153), (176, 192, 208), (168, 99, 102)]

num = 100
tim.setheading(225)
tim.forward(300)
tim.setheading(0)

for counts in range(1, num + 1):
        final_color = random.choice(color_list)
        tim.dot(20, final_color)
        tim.forward(50)
        if counts % 10 == 0:
            tim.setheading(90)
            tim.forward(50)
            tim.setheading(180)
            tim.forward(500)
            tim.setheading(0)


screen = Screen()
screen.exitonclick()