function runBadFuncTwo(arg1, arg2, arg3, arg4) {
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
  runBadFuncTwo,
};
