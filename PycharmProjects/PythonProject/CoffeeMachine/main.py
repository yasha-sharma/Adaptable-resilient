from pickle import GLOBAL

MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}
profit = 0
resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
}


def is_resources_available(order_ingredients):
    """checks if the resources are sufficient to make a drink"""
    for item in order_ingredients:
        if order_ingredients[item] >= resources[item]:
            print(f"Sorry there is not enough {item}.")
            return False
    return True

def calculate_money():
    """Returns the total amount received by user"""

    print("Please insert coins.")
    total = int(input("How many quarters?")) * 0.25
    total += int(input("How many nickel?")) * 0.1
    total += int(input("How many dime?")) * 0.05
    total += int(input("How many pennies?")) * 0.01

    return total

def is_transaction_successful(money_received, drink_cost):
    """Checks whether the money received is enough to make a coffee, it returns the change amount if it is greater than cost of drink,
    it refunds the entire amount if it is less than the drink cost"""
    if money_received >= drink_cost:
        change = round(money_received - drink_cost, 2)
        print(f"Here is your ${change} in change.")
        global profit
        profit += money_received
        return True
    else:
        print("Sorry that's not enough money. Money refunded.")
        return False

def make_coffee(drink_name, order_ingredients):
    """if the transaction is successful, it makes a coffee and reduces the ingredients from resources"""
    for item in order_ingredients:
        resources[item] -= order_ingredients[item]
    print(f"Here is your {drink_name}☕️.Enjoy!")


should_continue = True

while should_continue:
    option = input("What would you like? (espresso/latte/cappuccino): ").lower()

    if option == 'off':
        should_continue = False
    elif option == 'report':
        print(f"Water: {resources['water']}ml")
        print(f"Milk: {resources['milk']}ml")
        print(f"Coffee: {resources['coffee']}g")
        print(f"Money: ${round(profit, 2)}")
    else:
        drink = MENU[option]
        if is_resources_available(drink["ingredients"]):
            payment = calculate_money()
            if is_transaction_successful(payment, drink["cost"]):
                make_coffee(option, drink["ingredients"])








