#include "./addition.pb-c.h"

void add(const AddRequest *request, AddResponse *response) {
    response->result = request->operand1 + request->operand2;
}
