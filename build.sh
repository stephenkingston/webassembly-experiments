# Build hello_world.c to wasm with emscripten
emcc hello_world.c -o hello_world.html

# Build add.c to wasm with emscripten
emcc add.c -o add.wasm --no-entry -s EXPORTED_FUNCTIONS="['_add']" -s EXTRA_EXPORTED_RUNTIME_METHODS="['cwrap']"
