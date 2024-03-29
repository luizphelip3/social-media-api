export function removeUndefinedParams(params: object): any {
  const result: any = {};

  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined) {
      result[key] = params[key];
    }
  });

  return result;
}
