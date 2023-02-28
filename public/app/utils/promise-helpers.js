export  const handleStatus = res => 
  res.ok ? res.json() : Promise.reject(res.statusText)

export const log = (params)=> {
  console.log(params)
  return params
}