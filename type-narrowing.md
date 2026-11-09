Type Narrowing in TypeScript
Introduction
TypeScript allows us to use different types for one variable. Sometimes, we need to check the actual type before using a value. This process is called Type Narrowing. It helps us write safe code and avoid errors.
What is Type Narrowing?
Type Narrowing means making a variable's type more specific. We can use conditions to check the type of a value. TypeScript understands the type inside each condition.
Using typeof
The typeof operator is a common way to narrow types. It checks whether a value is a string, number, or boolean.

Example :

const printValue = (value: string | number): void => {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value * 2);
  }
};


Here, TypeScript knows that value is a string inside the first condition and a number inside the else block.
Using instanceof
The instanceof operator checks whether an object belongs to a particular class.

Eample :
 
class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

const makeSound = (animal: Dog | Date): void => {
  if (animal instanceof Dog) {
    animal.bark();
  }
};


Using Equality Check
We can also use equality checks to narrow union types.
const showStatus = (status: "active" | "inactive"): void => {
  if (status === "active") {
    console.log("User is active");
  }
};


Conclusion
Type Narrowing is an important feature of TypeScript. It helps us work with different types safely. We can use typeof, instanceof, and equality checks to narrow types. It makes our code easier to understand and reduces errors.