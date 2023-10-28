import{_ as s,o as a,c as n,V as o}from"./chunks/framework.cf01d80e.js";const C=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{"next":"Examples"},"headers":[],"relativePath":"guide/get-started.md","filePath":"guide/get-started.md","lastUpdated":null}'),e={name:"guide/get-started.md"},l=o(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><p>In this guide, you will find instructions on how to start programming software for microcontrollers in AssemblyScript and Rust by using WARDuino.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>To start writing programs for WARDuino in your favorite language you need to install the WARDuino <strong>language library</strong>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The WARDuino library packages for AssemblyScript and Rust have not been released officially yet. You can download them from <a href="https://github.com/TOPLLab/WARDuino-libs" target="_blank" rel="noreferrer">GitHub</a>.</p></div><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-1IAU4" id="tab-Je2Ypxt" checked="checked"><label for="tab-Je2Ypxt">AS</label><input type="radio" name="group-1IAU4" id="tab-Y_AilK5"><label for="tab-Y_AilK5">Rust</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as-warduino</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">warduino</span></span></code></pre></div></div></div><p>The language library provides access to the <a href="/WARDuino/reference/primitives.html">primitives</a> of WARDuino directly from AssemblyScript or Rust. Once you have written your program and compiled it to WebAssembly, you need to install WARDuino and the toolchains of the platform you are targeting.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME</span><span style="color:#C3E88D;">/Arduino/libraries/</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:TOPLLab/WARDuino.git</span></span></code></pre></div><p>WARDuino currently supports both the Arduino and ESP-IDF toolchains. To use Arduino, you need to install the <a href="https://github.com/arduino/arduino-cli" target="_blank" rel="noreferrer">arduino-cli</a>. For ESP-IDF you need to install the full toolchain, instructions can be found on the <a href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html#get-started-step-by-step" target="_blank" rel="noreferrer">official website</a>.</p><h2 id="arduino-toolchain-setup" tabindex="-1">Arduino Toolchain Setup <a class="header-anchor" href="#arduino-toolchain-setup" aria-label="Permalink to &quot;Arduino Toolchain Setup&quot;">​</a></h2><p>In order to setup the Arduino toolchain for WARDuino, you need to first install the <a href="https://arduino.github.io/arduino-cli/0.21/installation/" target="_blank" rel="noreferrer">arduino-cli</a>. You will also need <code>python3</code> with the <code>pyserial</code> package.</p><p>Second, create the config file:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">arduino-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><p>If you need additional boards, such as the esp32 boards, you can add them in the generated config file.</p><p>To find the location of your config file you can run:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">arduino-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--verbose</span></span></code></pre></div><p>Add the ESP32 board manager URL to the config file:</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">board_manager</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">additional_urls</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json</span></span></code></pre></div><p>Then, update the index and install the ESP32 platform.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">arduino-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">core</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update-index</span></span>
<span class="line"><span style="color:#FFCB6B;">arduino-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">core</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">esp32:esp32</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>To use ESP32 boards with WARDuino you need at least version 2.0.2 of the board manager.</p></div><p>Thirdly, make sure you install the <code>PubSubClient</code> and <code>Adafruit NeoPixel</code> library, which are used by some primitives.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">arduino-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PubSubClient</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># for MQTT</span></span>
<span class="line"><span style="color:#FFCB6B;">arduino-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Adafruit NeoPixel</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>If you haven&#39;t done so already, clone (or symlink) the WARDuino repository to <code>~/Arduino/libraries/WARDuino</code> to make it available to Arduino.</p><h2 id="flashing-using-arduino" tabindex="-1">Flashing using Arduino <a class="header-anchor" href="#flashing-using-arduino" aria-label="Permalink to &quot;Flashing using Arduino&quot;">​</a></h2><p>After setting up the Arduino toolchain, you can upload your programs with the Makefile in the <code>platforms/Arduino</code> folder of the WARDuino virtual machine. You can supply all the arguments through the command-line, or write all of them in a <code>.config</code> file in the same directory as the Makefile.</p><div class="language-make"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">PORT   </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /dev/ttyUSB0</span></span>
<span class="line"><span style="color:#A6ACCD;">FQBN   </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> esp32:esp32:esp32wrover</span></span>
<span class="line"><span style="color:#A6ACCD;">PAUSED </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> true</span></span>
<span class="line"><span style="color:#A6ACCD;">BINARY </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /path/to/test.wasm</span></span></code></pre></div><p>Starting from the root of the WARDuino repository, run the following commands:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">platforms/Arduino</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">compile</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flash</span></span></code></pre></div><p>Command-line arguments always overwrite commands in the <code>.config</code> file.</p><h2 id="flashing-using-esp-idf" tabindex="-1">Flashing using ESP-IDF <a class="header-anchor" href="#flashing-using-esp-idf" aria-label="Permalink to &quot;Flashing using ESP-IDF&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Primitive support for IDF is under construction.</p></div><p>Before you can compile and flash with ESP-IDF, you must install and enable the toolchain. You also need to disable the watchdog timer:</p><ol><li>Go to the root folder of the WARDuino repo</li><li>Run <code>idf.py menuconfig</code></li><li>Under <strong>Component config → ESP System Settings</strong> disable the following options: <ul><li>Interrupt watchdog</li><li>Initialize Task Watchdog Timer on startup</li></ul></li><li>Save and quit the menu</li></ol><p>To flash with the ESP-IDF toolchain perform the following steps starting from the project root folder. Make sure the ESP-IDF tools are enabled, or they will not work.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"><span style="color:#FFCB6B;">cmake</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">..</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BUILD_ESP=ON</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flash</span></span></code></pre></div><p>Or simply run <code>idf.py flash</code>.</p>`,37),t=[l];function p(i,r,c,d,u,h){return a(),n("div",null,t)}const g=s(e,[["render",p]]);export{C as __pageData,g as default};
