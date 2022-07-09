const leftPad = (str: string, len: number, val = "0") => {
  for (let i = str.length; i < len; i++) {
    str = val + str;
  }

  return str;
};

export { leftPad };
