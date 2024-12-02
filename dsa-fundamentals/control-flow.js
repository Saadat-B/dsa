/*
Problem 1

Write a program to find maximum between three numbers. 

Input num1 : 10
Input num2 : 20
Input num3 : 15


Maximum among all three numbers is 20


*/

function findMax(num1, num2, num3) {
  let max = 0;

  if (max < num1) {
    
    max = num1;
    console.log('first condition', max)
  }

  if (max < num2) {
    max = num2;
    console.log('second condition', max)

  }
  if (max < num3) {
    max = num3;
    console.log('third condition', max)

  }

  console.log({ max });

  return max;
}

findMax(10, 20, 15);



// BEST APPROACH WITHOUTS USING BUILT IN MAX FUNC

function findMax(num1, num2, num3) {
    let max = num1; // Start with the first number
  
    if (max < num2) {
      max = num2;
    }
    if (max < num3) {
      max = num3;
    }
  
    console.log({ max });
    return max;
  }
  
  findMax(10, 20, 15);

  
  // USING BUILT IN MAX FUNC

  function findMax(num1, num2, num3) {
    const max = Math.max(num1, num2, num3);
  
    console.log({ max });
    return max;
  }
  
  findMax(10, 20, 15);
  
// LOOPS PRACTICE 

function main(num) {
    // your code goes here

	const arr = num.toString().split('')
	let sum= 1;
	for(let i = 0; i < arr.length; i++){

		sum *= parseInt(arr[i])

	}

	console.log(sum)
}

main(1234);


