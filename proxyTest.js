const proxyMap = {};

const handlerl = {
  set(obj, key, value, receiver) {
    console.log("set");
    return Reflect.set(...arguments);
  },
  get(obj, key, receiver) {
    console.log("get");
    console.log(...arguments)
    const res = Reflect.get(...arguments);
    if (!proxyMap[key] && typeof res === "object") {
      proxyMap[key] = new Proxy(res, handlerl);
    }
    return res;
  },
};

let proxy = new Proxy({ one: 1 }, handlerl);
proxyMap.proxy = proxy;
proxy.one.two = []; 
console.log(proxy);
// ==》 “get”
// ==》 “{ one: { two: 1 } }，one”

// proxy <Proxy>  >  one <Proxy>  >  two <Number>