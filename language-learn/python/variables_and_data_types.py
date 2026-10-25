"""
# Question:
You need to create a student information system. Write a program that performs the following tasks:
Take a student's name, age, and 3 different grades from the user.
Using this information:
Calculate the student's average grade (as a float).
Determine whether the student passed or failed (if the average is 60 or above, they passed - store this as a Boolean value).
Store all this information in a dictionary.
Finally, print the student information in a well-formatted manner.
Hint: You will need to use different data types:
String (for the name)
Integer (for age and grades)
Float (for the average)
Boolean (for pass/fail status)
List (to store the grades)
Dictionary (to keep all the information together)
"""

# Get student information
name = input("Enter the student's name: ")
age = int(input("Enter the student's age: "))

grades = []
total = 0.0

# Get grades from the user
for i in range(3):  # Changed to 3 grades as per the question
    grade = float(input(f"Enter {i + 1}. grade: "))
    grades.append(grade)
    total += grade

# Calculate average
average = total / len(grades)

# Determine pass/fail status
is_passed = average >= 60

# Store information in a dictionary
student_info = {
    'name': name,
    'age': age,
    'average_grade': average,
    'is_passed': is_passed,
    'grades': grades
}

# Print student information
print("Student Information:")
print(f"Name: {student_info['name']}")
print(f"Age: {student_info['age']}")
print(f"Average Grade: {student_info['average_grade']}")
print(f"Passed: {'Yes' if student_info['is_passed'] else 'No'}")
print(f"Grades: {student_info['grades']}")

