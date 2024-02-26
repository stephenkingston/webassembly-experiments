function add(a, b) {
  protobuf.load("addition.proto", function (err, root) {
    if (err) throw err;

    // Load add function from add.wasm
    fetch("add.wasm")
      .then((response) => response.arrayBuffer())
      .then((bytes) => WebAssembly.instantiate(bytes, {}))
      .then((results) => {
        const instance = results.instance;
        const add = instance.exports.add;

        // The result of the addition is a AddResponse object while the inputs are AddRequest objects
        const AddRequest = root.lookupType("AddRequest");
        const AddResponse = root.lookupType("AddResponse");

        // Create a new AddRequest object
        const message = AddRequest.create({ a: a, b: b });
        var response = new AddResponse();

        add(message, response);

        console.log("Addition result:", response.result);
      });
  }); // Add closing parenthesis here
}
