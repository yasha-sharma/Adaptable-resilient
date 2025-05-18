import random
from art import logo
print(logo)

EASY = 10
HARD = 5

def check_answer(user_guess_no, guess_no, turns):
    if user_guess_no < guess_no:
        print("Too low")

        return turns - 1
    elif user_guess_no > guess_no:
        print("Too High")

        return turns - 1
    elif user_guess_no == guess_no:
        print(f"You got it. The answer was {guess_no}")


def set_level():
    level = input("Choose a difficulty level.easy or hard. ").lower()
    if level == 'easy':
        return EASY
    elif level == 'hard':
        return HARD

def game():
    print("Welcome to the number guessing game.")
    print("I am thinking of a number between 1 and 100.")
    guess_no = random.randint(1, 100)
    print(guess_no)

    turns = set_level()


    user_guess_no = 0
    while user_guess_no != guess_no:
        user_guess_no = int(input("Make a guess: "))
        print(user_guess_no)
        print(f"You have {turns} attempts remaining.")
        turns = check_answer(user_guess_no, guess_no, turns)
        if turns == 0:
            print("You've run out of guess. You loose.")
            return
        elif user_guess_no != guess_no:
            print("Guess again!")


game()

