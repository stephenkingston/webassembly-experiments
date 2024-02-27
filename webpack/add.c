#include "./addition.pb-c.h"

AddResponse add(const AddRequest *request) {
    AddResponse response = ADD_RESPONSE__INIT;
    response.result = request->operand1 + request->operand2;

    return response;
}
