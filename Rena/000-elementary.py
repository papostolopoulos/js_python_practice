# https://py.checkio.org/station/library/

# 20170731
# FIZZ BUZZ https://py.checkio.org/mission/fizz-buzz/
# "Fizz buzz" is a word game we will use to teach the robots about division. Let's learn computers.
#
# You should write a function that will receive a positive integer and return:
# "Fizz Buzz" if the number is divisible by 3 and by 5;
# "Fizz" if the number is divisible by 3;
# "Buzz" if the number is divisible by 5;
# The number as a string for other cases.
# Input: A number as an integer.
#
# Output: The answer as a string.
#
# Example:
#
# fizzBuzz(15) == "Fizz Buzz"
# fizzBuzz(6) == "Fizz"
# fizzBuzz(5) == "Buzz"
# fizzBuzz(7) == "7"




# 20170731
# EVEN THE LAST https://py.checkio.org/mission/even-last/
# You are given an array of integers. You should find the sum of the elements with even indexes
# (0th, 2nd, 4th...) then multiply this summed number and the final element of the array together.
# Don't forget that the first element has an index of 0.
#
# For an empty array, the result will always be 0 (zero).
#
# Input: A list of integers.
#
# Output: The number as an integer.
#
# Example:
#
# evenLast([0, 1, 2, 3, 4, 5]) == 30
# evenLast([1, 3, 5]) == 30
# evenLast([6]) == 36
# evenLast([]) == 0



# 20170731
# SECRET MESSAGE https://py.checkio.org/mission/secret-message/
# "Where does a wise man hide a leaf? In the forest.
# But what does he do if there is no forest? ... He grows a forest to hide it in."
# -- Gilbert Keith Chesterton
#
# Ever tried to send a secret message to someone without using the postal service?
# You could use newspapers to tell your secret. Even if someone finds your message,
# it's easy to brush them off and that its paranoia and a bogus conspiracy theory.
# One of the simplest ways to hide a secret message is to use capital letters.
# Let's find some of these secret messages.
#
# You are given a chunk of text. Gather all capital letters in one word in the order
# that they appear in the text.
#
# For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.",
# if we collect all of the capital letters, we get the message "HELLO".
#
# Input: A text as a string (unicode).
#
# Output: The secret message as a string or an empty string.
#
# Example:
#
# findMessage("How are you? Eh, ok. Low or Lower? Ohhh.") == "HELLO"
# findMessage("hello world!") == ""




# /*20170801
# THREE WORDS https://py.checkio.org/mission/three-words/
#
# Let's teach the Robots to distinguish words and numbers.
#
# You are given a string with words and numbers separated by whitespaces (one space).
# The words contains only letters. You should check if the string contains
# three words in succession.
# For example, the string "start 5 one two three 7 end" contains three words in succession.
#
# Input: A string with words.
#
# Output: The answer as a boolean.
#
# Example:
#
# threeWords("Hello World hello") == True
# threeWords("He is 123 man") == False
# threeWords("1 2 3 4") == False
# threeWords("bla bla bla bla") == True
# threeWords("Hi") == False
# */
#
#
#
#
# /* 20170801
# INDEX POWER https://py.checkio.org/mission/index-power/
# You are given an array with positive numbers and a number N.
# You should find the N-th power of the element in the array with the index N.
# If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
#
# Let's look at a few examples:
# - array = [1, 2, 3, 4] and N = 2, then the result is 32 == 9;
# - array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
#
# Input: Two arguments. An array as a list of integers and a number as a integer.
#
# Output: The result as an integer.
#
# Example:
#
# indexPower([1, 2, 3, 4], 2) == 9
# indexPower([1, 3, 10, 100], 3) == 1000000
# indexPower([0, 1], 0) == 1
# indexPower([1, 2], 3) == -1
#
# */
#
#
#
#
# /*20170802
# THE MOST NUMBERS https://py.checkio.org/mission/most-numbers/
# Let's work with numbers.
#
# You are given an array of numbers (floats).
# You should find the difference between the maximum and minimum element.
# Your function should be able to handle an undefined amount of arguments.
# For an empty argument list, the function should return 0.
#
# Floating-point numbers are represented in computer hardware as base 2 (binary) fractions.
# So we should check the result with ±0.001 precision.
# Think about how to work with an arbitrary number of arguments.
#
# Input: An arbitrary number of arguments as numbers (int, float).
#
# Output: The difference between maximum and minimum as a number (int, float).
#
# Example:
#
# mostNumbers(1, 2, 3) == 2
# mostNumbers(5, -5) == 10
# mostNumbers(10.2, -2.2, 0, 1.1, 0.5) == 12.4
# mostNumbers() == 0
# */
#
#
#
#
# /*20170803
# DIGITS MULTIPLICATION https://py.checkio.org/mission/digits-multiplication/
# You are given a positive integer. Your function should calculate the product of the digits excluding any zeroes.
# For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).
#
# Input: A positive integer.
#
# Output: The product of the digits as an integer.
#
# digitsMultip(123405) == 120
# digitsMultip(999) == 729
# digitsMultip(1000) == 1
# digitsMultip(1111) == 1
#
#
#
#
# /*20170803
# COUNT INVERSION https://py.checkio.org/mission/count-inversions/
# In computer science and discrete mathematics, an inversion is a pair of places in a sequence where the elements in these places are out of their natural order. So, if we use ascending order for a group of numbers, then an inversion is when larger numbers appear before lower number in a sequence.
#
# Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) and we can see here three inversions
# - 5 and 3; - 5 and 4; - 7 and 6.
#
# You are given a sequence of unique numbers and you should count the number of inversions in this sequence.
#
# Input: A sequence as a tuple of integers.
#
# Output: The inversion number as an integer.
#
# Example:
#
# countInversion([1, 2, 5, 3, 4, 7, 6]) == 3
# countInversion([0, 1, 2, 3]) == 0
# */
#
#
#
#
# /*20170803
# COMMON WORDS https://py.checkio.org/mission/common-words/
# Let's continue examining words. You are given two string with words separated by commas.
# Try to find what is common between these strings.
# The words are not repeated in the same string.
#
# Your function should find all of the words that appear in both strings.
# The result must be represented as a string of words separated by commas in alphabetic order.
#
# Input: Two arguments as strings.
#
# Output: The common words as a string.
#
# Example:
#
# commonWords("hello,world", "hello,earth") == "hello"
# commonWords("one,two,three", "four,five,six") == ""
# commonWords("one,two,three", "four,five,one,two,six,three") == "one,three,two"
# */
#
#
#
#
# /*20170807
# ABSOLUTE SORTING https://py.checkio.org/mission/absolute-sorting/
# Let's try some sorting. Here is an array with the specific rules.
#
# The array has various numbers.
# You should sort it, but sort it by absolute value in ascending order.
# For example, the sequence (-20, -5, 10, 15) will be sorted like so: (-5, 10, 15, -20).
# Your function should return the sorted list .
#
# Precondition: The numbers in the array are unique by their absolute values.
#
# Input: An array of numbers .
#
# Output: The list or tuple (but not a generator) sorted by absolute values in ascending order.
#
# Addition: The result of your function will be shown as a list in the tests explanation panel.
#
# Example:
#
#
# Note from Paris: These examples are typed like the arrays are for Java and not Javascript.
# Instead of absoluteSorting((-20, -5, 10, 15)) it should be absoluteSorting([-20, -5, 10, 15])
# absoluteSorting((-20, -5, 10, 15)) == [-5, 10, 15, -20] # or (-5, 10, 15, -20)
# absoluteSorting((1, 2, 3, 0)) == [0, 1, 2, 3]
# absoluteSorting((-1, -2, -3, 0)) == [0, -1, -2, -3]
# */
#
#
#
#
#
# /*20170807
# NUMBER BASE https://py.checkio.org/mission/number-radix/
# Do you remember the radix and Numeral systems from math class? Let's practice with it.
#
# You are given a positive number as a string along with the radix for it.
# Your function should convert it into decimal form.
# The radix is less than 37 and greater than 1.
# The task uses digits and the letters A-Z for the strings.
#
# Watch out for cases when the number cannot be converted.
# For example: "1A" cannot be converted with radix 9.
# For these cases your function should return -1.
#
# Input: Two arguments. A number as string and a radix as an integer.
#
# Output: The converted number as an integer.
#
# Example:
#
# numberRadix("AF", 16) == 175
# numberRadix("101", 2) == 5
# numberRadix("101", 5) == 26
# numberRadix("Z", 36) == 35
# numberRadix("AB", 10) == -1
#
# Precondition:
# re.match("\A[A-Z0-9]\Z", str_number)
# 0 < len(str_number) ≤ 10
# 2 ≤ radix ≤ 36
# */
