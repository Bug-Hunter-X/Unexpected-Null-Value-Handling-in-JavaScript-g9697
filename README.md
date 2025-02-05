# Handling Null Values in JavaScript

This repository demonstrates a common error in JavaScript related to unexpected null values.  The provided code shows a function that attempts to handle null input gracefully, highlighting the importance of explicit null checks.  Incorrect handling of null values can lead to errors, particularly in loosely-typed languages like JavaScript.

## Bug Description

Failure to explicitly handle null values or undefined variables in JavaScript can result in unexpected runtime errors, such as `TypeError: Cannot read properties of null (reading 'property')`. This occurs when trying to access properties of a variable that currently holds a null value.

## Solution

The solution involves explicitly checking for null or undefined values before attempting to access their properties. This can be done using an `if` statement or a conditional operator.

## How to Reproduce the Bug

1.  Clone this repository.
2.  Open the `bug.js` file.
3.  Run the `foo` function with null as one of the inputs. You will likely see an error if the null check is not implemented properly.
4. Observe the bug and its solution in `bugSolution.js`
