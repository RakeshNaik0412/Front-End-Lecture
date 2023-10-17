
        // for, while

        // for loop
        // initialize, conditioon, increment/decrement, execution
        // for (let i = 1; i<=10;i++) {
        //     console.log(i);
        // }
        
        // modular coding
        // a = 15
        // for (let i = 1; i<=10 ; i++) {
        //         console.log(i*a);
                
        // }
        // for (let i = 1; i<=10 ; i++) {
        //         console.log(a + "X" + i + "=", i*a);
                
        // }
        
        // while loop
        // i = 1  //initialize
        // while (i<=10) {
        //     console.log(i);
        //     i++
        // }

        // Factotials
        // i = 5
        // output = 1
        // while (i > 0) {
        //         console.log(output*=i);
        //         i--
        // }

        // if we wants only answer..
        // while (i > 0) {
        //         output*=i
        //         i--
        // }
        // console.log(output);

        // Prime Number
        // function isPrime(n) {
        //         if (n < 2) {
        //                return `${n} is not a prime` 
        //         }
        //         for (let i = 2; i < n; i++) {
        //                 if (n % i === 0) {
        //                         return `${n} is not a prime number`
        //                 }
                        
        //         }
        //         return `${n} is a prime number`
        // }
        // console.log(isPrime(22));

        // n = 7
        // if (n < 2) {
        //         console.log(" is not a prime number");
        // }
        // for (let i = 2; i < n; i++) {
        //         if (n % i ===0) {
        //                 console.log(" is not a prime number");
        //         }
        //         else {
        //                 console.log(" is a prime number");
        //         }
                
        // }

        // n = 4
        // if (n < 2) {
        //         for (let i = 2; i < n; i++) {
        //                 if (n % i === 0) {
        //                         console.log("is not prime");
        //                 }

                        
        //         }
        //         console.log("is prime");
        // }

        // n = 0
        // for (let i = 2; i < n; i++) {
        //         if (n % i === 0) {
        //                 console.log("is not prime");
        //         }

                
        // }
        // console.log("is prime");

        // function isPrime(n) {
        //         if (n < 2) {
        //                console.log(" id not a prime"); 
        //         }
        //         for (let i = 2; i < n; i++) {
        //                 if (n % i === 0) {
        //                         console.log(" is not a prime number");
        //                 }
                        
        //         }
        //         console.log(" is a prime number");
        // }
        // console.log(isPrime(22));

        // Prime Number Using Loops
        // let num = 97
        // let primenum = true;
        // for (let i = 2; i < num; i++) {
        //         if (num % i == 0) {
        //                 primenum = false;
        //         }
                
        // } 
        // if (primenum) {
        //         console.log(num, 'is prime number');
        // }
        // else {
        //         console.log(num, 'is not prime number');
        // }

        // let num = 45
        // i = 2
        // let primenum = true;
        // while (i < num) {
        //         if (num % i == 0) {
        //              primenum = false;   
        //         }
        //         i++
        // }
        // if (primenum) {
        //         console.log(num, 'is prime number');
        // } else {
        //         console.log(num, 'is not prime number');
        // }

        // let a = 41
        // // output = 1
        // for (let i = 2; i < a; i++) {
        //         if (a % i == 0) {
        //                 output = 0;
        //         } 
        // }
        // if (output =0) {
        //         console.log(a, " is Not Prime Number");
        // } else {
        //         console.log(a, " is Prime Number");
        // }

        // 11-08-2023 lecture
        // a = 4
        // if (a % 2 !=0) {
        //         console.log("is Odd Number");
        // } else {
        //         console.log("is Even Number");
        // }

        // for (let i = 0; i <= 10; i++) {
        //         if (i % 2 !=0) {
        //                 console.log(i,"is Odd Number");
        //         } else {
        //                 console.log(i,"is Even Number");
        //         }     
        // }

        // rakesh = [1234,5678,9090,8765,4321]
        // output = 0
        // i = 0
        // while (i < rakesh.length) {
        //         console.log(rakesh[i]);
        //         i++
        // }

        // for (let i = 0; i < rakesh.length; i++) {
        //         output += rakesh[i]
                
        // }
        // console.log(output);

        // do while loop

        // initialize
        // do {
        //       execution;
        //       increment/decrement  
        // } while (condition);

        // i = 0
        // do {
        //      console.log(rakesh[i]);
        //      i++   
        // } while (i < rakesh.length);

        // a = {
        //         fname: 'rakesh',
        //         age: '24',
        //         city: "Kolhapur"
        // }
        // for (let i = 0; i < a.length; i++) {
        //         console.log(a);
                
        // }

        //  for of & for in loop

        //  for in used for object
        // for (i in a) {
        //         console.log(a[i]);
        // }

        // //  for of used for array
        // for (i of rakesh) {
        //         console.log(i);
        // }