import random

from art import logo, vs
from game_data import data

# 1.  PRINT LOGO OF GAME
# 2. DISPLAY COMPARE A & B:
#     A. PICK A RANDOM DICTIONARY FROM LIST
#     B. FRAME A SENTENCE WITH THEIR NAME,OCCUPATION AND COUNTRY. SO ACCESS THESE INFO ON BASIS OF KEY FROM DICTIONARY
    #     C. PRINT VS LOGO
    #     D. REPEAT STEP B. FOR COMPARISON B.
#3. CHECK WHO HAS MORE FOLLOWERS BETWEEN A & B.
    #     A. PICK FOLLOWER KEY FROM DICTIONARY & COMPARE AGAINST SECOND

    #           THERE CAN BE 2 CONDITIONS:-
    # #           a. if ONE IS RIGHT:
    #                 then cal score and display.
    #                     store previous correct result into new variable.
    #                    generate one more random from list and show them against previous wrong answer.
    #                     KEEP PLAYING UNTIL THEY ARE RIGHT AND KEEP CALCULATING SCORE
    # #           b. if one is wrong:
    #                 just display final score with message you are wrong. end game.
    #
    # #


score = 0
hold_data = ''
first_time = 'y'
game_not_over = True

print(logo)

def choose_data():
    return random.choice(data)



def assign_data():
    global compare_msg
    global compare_data_a
    global compare_data_b
    global follower_b
    global follower_a

    compare_data = choose_data()
    if num == 0:
        compare_data_a = compare_data
        compare_msg = 'Compare A'
        follower_a = int(compare_data['follower_count'])
    elif num == 1:
        compare_data_b = compare_data
        compare_msg = 'Against B'
        follower_b = (compare_data['follower_count'])

    print(f"{compare_msg}: {compare_data['name']}, {compare_data['description']}, from {compare_data['country']}.")
    if num == 0:
        print(vs)


while game_not_over:
    if first_time == 'y':
        for num in range(2):
            assign_data()
    else:
        print(f"COMPARE A: {hold_data['name']}, {hold_data['description']}, from {hold_data['country']}.")
        print(vs)
        assign_data()
        num = 1

    answer = input("Who has more followers.Type 'A' or 'B'. ").upper()

    if answer == 'A':
        if follower_a > follower_b:
            score += 1
            print(f"You're right.Current score {score}.")
            hold_data = compare_data_b
            first_time = 'n'
        else:
            game_not_over = False
            print(f"Sorry, that's wrong. Final score: {score}.")
    elif answer == 'B':
        if follower_b > follower_a:
            score += 1
            print(f"You're right.Current score {score}.")
            hold_data = compare_data_a
            first_time = 'n'
        else:
            game_not_over = False
            print(f"Sorry.That's wrong. Final score: {score}.")














