
    /* Solution 1  display ( 0 1 1 2 3 5) */
    var fibonacci=[];
      fibonacci[0]=0;
      fibonacci[1]=1;
      for(var i=2;i<=6;i++){
           fibonacci[i] = fibonacci[i-1]+fibonacci[i-2];
      }
      for(var i=0;i<fibonacci.length;i++){
        console.log(fibonacci[i]);
      }

      /* solution 2  : display only addition up to the input value: 6
       *  fibo (6) : 0 + 1 + 1 + 2 + 3 + 5
       */

    function fibonacci(n) {
        if (n === 0 || n === 1)
            return n;
        else
            return fibonacci(n - 1) + fibonacci(n - 2);
    }

    console.log(fibonacci(6));