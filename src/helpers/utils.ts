export const DEFAULT_RESPONSE = (event: any) => {
  const JSONResponse = {
    message: "Hello World!",
    // event,
  };
  return JSONResponse;
}

export const JSONtoString = (jsonObj: any): string => {
  let strResponse = '{}';
  try {
    strResponse = JSON.stringify(jsonObj);
  } catch (err) {
    strResponse = JSON.stringify({ error: err?.message });
  }
  return strResponse;
}