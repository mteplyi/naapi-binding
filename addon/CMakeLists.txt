cmake_minimum_required(VERSION 3.13)

set(CMAKE_CXX_STANDARD 17)

execute_process(
        COMMAND node -p "require('node-addon-api').include.replace(/\"/g,'')"
        OUTPUT_STRIP_TRAILING_WHITESPACE
        OUTPUT_VARIABLE include_dirs
)
include_directories(${include_dirs})

add_executable(binding src/main.cpp)
