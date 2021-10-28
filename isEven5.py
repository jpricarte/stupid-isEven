def is_even(number: int):
    while number > 1:
        number -= 1
        number -= 1

    if number == 1:
        return False
    return True


if __name__ == '__main__':
    number = int(input("Enter the number: "))
    if is_even(number):
        print('Even number')
    else:
        print('Odd number')
