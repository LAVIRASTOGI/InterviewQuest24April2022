

var obj = {
    "name": 'lavichhavi',
    "age": 29,
    "addrss": {
      "home": {
        "city": "lucknow",
        "state": "UP"
      }
    }
  }
  
  const {name,age,addrss:{home:{city}}}=obj;
  //op -- name age address_home_cityLucknow
  
  
  let x1=` name:${name} age:${age} address_home_city:${city}`
  console.log(city)
  