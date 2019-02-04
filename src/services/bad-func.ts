function runBadFunc(arg1: any, arg2: any, arg3: any, arg4: any) {
  if (arg1 == true) {
    if (arg2 != false) {
      if (arg3 == true) {
        if (arg4 == arg2 + arg3) {
          return "true";
        }
      }
    }
  }
}

export {
  runBadFunc,
};
