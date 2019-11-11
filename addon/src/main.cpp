#include <napi.h>

Napi::Int32Array GenerateArray(const Napi::CallbackInfo &info) {
    Napi::Env env = info.Env();

    const int32_t size = info[0].As<Napi::Number>().Int32Value();

    Napi::Int32Array array = Napi::Int32Array::New(env, size);

    for (int32_t i = 0; i < size; i++) {
        array[i] = i;
    }

    return array;
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {

    exports.Set("langVersion", __cplusplus);

    exports.Set("generateArray", Napi::Function::New(env, GenerateArray));

    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
