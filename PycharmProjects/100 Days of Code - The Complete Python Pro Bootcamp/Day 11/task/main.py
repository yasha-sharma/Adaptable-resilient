import random
from art import logo

def deal_card():
    """returns a random cards from the list"""
    cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

    card = random.choice(cards)
    return card


def calculate_score(cards):
    """returns the sum of all the cards and gives us the total score"""
    if sum(cards) == 21 and len(cards) == 2:
        return 0

    if 11 in cards and sum(cards) > 21:
        cards.remove(11)
        cards.append(1)

    return sum(cards)

def compare(u_score, c_score):
    if u_score == c_score:
        return 'Draws'
    elif c_score == 0:
        return 'You loose.Opponent has a blackjack'
    elif u_score == 0:
        return 'You win.You have a blackjack'
    elif u_score > 21:
        return 'You loose'
    elif c_score > 21:
        return 'You win'
    elif u_score > c_score:
        return 'You win'
    else:
        return 'You loose'

def play_game():
    print(logo)
    user_card_list = []
    computer_card_list = []
    user_score = -1
    computer_score = -1
    is_game_over = False

    for _ in range(2):
        user_card_list.append(deal_card())
        computer_card_list.append(deal_card())

    while not is_game_over:
        user_score = calculate_score(user_card_list)
        computer_score = calculate_score(computer_card_list)

        print(f"Your cards: {user_card_list}, current score: {user_score}")

        print(f"Computer's first card: {computer_card_list[0]}")

        if user_score == 0 or computer_score == 0 or user_score > 21:
            is_game_over = True
        else:
            user_another_deal = input("Do you want to draw another card? Type 'y' or 'n'. ")
            if user_another_deal == 'y':
                user_card_list.append(deal_card())
            else:
                is_game_over = True

    while computer_score != 0 and computer_score < 17:
        computer_card_list.append(deal_card())
        computer_score = calculate_score(computer_card_list)

    print(f"Your final hand: {user_card_list}, total score: {user_score}")
    print(f"Computer final hand: {computer_card_list}, total score: {computer_score}")
    print(compare(user_score, computer_score))

while input("Do you want to play a game of blackjack? ") == 'y':
    play_game()























