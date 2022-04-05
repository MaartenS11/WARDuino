set -e
echo -e "Building example: BLINK"

src="main/blink.wat"

dir=$(dirname $src)
cd ${dir}
src=$(basename -- "$src")

# Compile WAT
echo -e "> compiling ${src} ..."

if [[ $src == *.wat ]] || [[ $extension == *.wast ]]; then
    wat2wasm --debug-names $src
    src="${src%.*}"
    echo -e "> created ${src}.wasm"
fi

# Optimize (optional)
wasm-opt -O3 "${src}.wasm" -o "src.wasm"
wasm-strip "src.wasm"
echo -e "> optimized src.wasm"

# Convert to C header
xxd -i "src.wasm" > src.wasm.h
echo -e "> created src.wasm.h"

echo -e "\n> output files written to ${dir}/"

# Compile and Flash WARDuino
cd ..
mkdir -p build
cd build
cmake ..
make flash
