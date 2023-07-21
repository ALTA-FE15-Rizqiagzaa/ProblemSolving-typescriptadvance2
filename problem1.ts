const fibonacci = (n: number): number => {
    let a: number = 0;
    let b: number = 1;
    let c: number = n;
  
    for(let i: number = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
  
    return c;
  };

  console.log(fibonacci(7))