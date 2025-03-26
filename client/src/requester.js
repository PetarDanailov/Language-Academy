export const request = async(method,url,data,options = {}) => {
  if(method!=="GET") {
    options = {
      ...options,
      method
    }
  };
  if(data){
    options = {
      ...options,
      headers: {...options.headers,"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }

  }
  try{
    const response = await fetch(url,options);
    console.log(response)
    const responseContentType = response.headers.get("Content-Type");
    if(!responseContentType || !responseContentType.includes("application/json")){
      return;
    }
    if(!response.ok){
      return undefined
    }
    const result =  await response.json();
    return result;
  }
  catch(err){
    console.log(err)
  }
}