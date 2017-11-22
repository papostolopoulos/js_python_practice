# Prime?
# Define a boolean method, #prime?(int), that accepts an integer as an
# argument. Your method should return true / false, based on whether or not
# n is prime. Remember, a number is prime if it has no divisors other than
# 1 and itself.

# ex: 15's divisors are: 1, 3, 5, 15 ==> 15 is not prime!
# ex: 20's divisors are: 1, 2, 4, 5, 10, 20 ==> 20 is not prime!
# ex: 17's divisors are: 1, 17 ==> 17 is prime!

def prime(int):
    num = 2
    while num < int:
        if(int % num == 0):
            return False

        num += 1
    return True




print "-------Prime?-------"
print prime(2) # true
print prime(16) # false
print prime(17) # true
print prime(101) # true
