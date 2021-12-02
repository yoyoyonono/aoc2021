inputs = [int(x) for x in open('day1/input.txt').read().split('\n')]
increased = 0

for x in range(1, len(inputs)):
    if inputs[x] > inputs[x - 1]:
        increased += 1

print(increased)