function complex_func(arg1: string, arg2: string, arg3: string, arg4: number, arg5: boolean, arg6: string) {
  if (arg1 == "dude" && arg2 == "forsure") {
    if (arg3 == "awesome") {
      if (arg4 > 20 && arg4 < 40) {
        if (arg5 === true) {
          switch (arg6) {
            case "a":
              return arg4 === 31 ? "cool" : "yes"
            case "b":
              return arg4 === 32 ? "cool" : "yes"
            case "c":
              return arg4 === 33 ? "cool" : "yes"
            case "d":
              return arg4 === 34 ? "cool" : "yes"
          }
          return "hmm";
        }
      }
    }
  }
}
