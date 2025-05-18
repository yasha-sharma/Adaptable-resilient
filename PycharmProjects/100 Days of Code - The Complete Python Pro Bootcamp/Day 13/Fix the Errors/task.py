try:
    age = int(input("How old are you?"))
except ValueError:
    print("You typed invalid number. Try with numbers")
    age = int(input("How old are you?"))

if age > 18:
    print(f"You can drive at age {age}.")
