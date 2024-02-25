function add(a, b) {
  // Load the add function from the WebAssembly instance
  WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
    console.log("Going to add " + a + " and " + b + " using WebAssembly");
    // Call the add function with the two arguments
    console.log(obj.instance.exports.add(a, b));
  });
}
