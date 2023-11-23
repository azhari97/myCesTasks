def findPythagoreanTriplet():
    for a in range(1, 1000):
        b = (500000 - 1000 * a) / (1000 - a)
        c = 1000 - a - b
        if b.is_integer() and c > 0:
            return int(a), int(b), int(c)

a, b, c = findPythagoreanTriplet()
product = a * b * c
print("Pythagorean triplet:", a, b, c)
print("Product of abc:", product)


