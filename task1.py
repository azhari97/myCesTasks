def findPythagoreanTriplet():
    for a in range(1, 1000):
        for b in range(a + 1, 1000):
            c = 1000 - a - b
            if a * a + b * b == c * c:
                return a, b, c

a, b, c = findPythagoreanTriplet()
product = a * b * c
print("Pythagorean triplet:", a, b, c)
print("Product of abc:", product)
