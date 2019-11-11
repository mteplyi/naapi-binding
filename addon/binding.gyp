{
  "targets": [
    {
      "target_name": "main",
      "sources": [
        "src/main.cpp"
      ],
      "cflags_cc": [
        "-std=c++17"
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').gyp\")"
      ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      "defines": [
        "NAPI_DISABLE_CPP_EXCEPTIONS"
      ]
    }
  ]
}
