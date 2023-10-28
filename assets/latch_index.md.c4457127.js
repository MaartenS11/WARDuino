import{_ as e,o as t,c as a,V as s}from"./chunks/framework.cf01d80e.js";const f=JSON.parse('{"title":"Latch","description":"","frontmatter":{"title":"Latch","sidebarDepth":0},"headers":[],"relativePath":"latch/index.md","filePath":"latch/index.md","lastUpdated":null}'),i={name:"latch/index.md"},n=s('<h1 id="latch" tabindex="-1"><span style="font-variant:small-caps;">Latch</span> <a class="header-anchor" href="#latch" aria-label="Permalink to &quot;&lt;span style=&quot;font-variant: small-caps;&quot;&gt;Latch&lt;/span&gt;&quot;">​</a></h1><p><strong><span style="font-variant:small-caps;">Latch</span> (Large-scale Automated Testing on Constrained Hardware)</strong> is a novel testing framework for running large scale unit and integration tests in constrained environments. The framework introduces a unique scripting approach that utilizes debugger-like operations to write testing scenarios.</p><h2 id="why-is-it-challenging" tabindex="-1">Why is it Challenging? <a class="header-anchor" href="#why-is-it-challenging" aria-label="Permalink to &quot;Why is it Challenging?&quot;">​</a></h2><p>Testing is an essential part of the software development cycle. Unfortunately, testing software on constrained devices poses the following three challenges:</p><ol><li>The limited memory of constrained devices severely restricts the size of the test suites.</li><li>The limited processing power can greatly slow down test suites, preventing a fast feedback loop.</li><li>When the constrained device becomes unresponsive, it is impossible to distinguish between the test failing, or taking very long, forcing the developer to work with timeouts. In addition, these timeouts can cause tests to become flaky, where they have unpredictable outcomes for the same code.</li></ol><h2 id="how-to-solve-it" tabindex="-1">How to Solve it? <a class="header-anchor" href="#how-to-solve-it" aria-label="Permalink to &quot;How to Solve it?&quot;">​</a></h2><p>The core idea of <span style="font-variant:small-caps;">latch</span> is to enable programmers to script tests on a desktop machine which are <em>remotely</em> executed on the constrained device. The main advantage is that the constrained device does not maintain the whole test suite in memory but is step-wise instructed to execute each test.</p><p><span style="font-variant:small-caps;">Latch</span> further allows developers to mark tests as depending on other tests. This way, <span style="font-variant:small-caps;">latch</span> can skip tests that depend on previously failing tests resulting in a fast feedback loop.</p><p>Finally, <span style="font-variant:small-caps;">latch</span> addresses the issue of timeouts and flaky tests, by including an analysis mode that provides feedback on timeouts and the flakiness of tests.</p><h2 id="testing-warduino" tabindex="-1">Testing WARDuino <a class="header-anchor" href="#testing-warduino" aria-label="Permalink to &quot;Testing WARDuino&quot;">​</a></h2><p>We started designing the <span style="font-variant:small-caps;">latch</span> framework because there were no testing frameworks that met the requirements we needed to fully test WARDuino. Specifically, there was no testing framework that could help us execute large test suites such as the <a href="https://github.com/WebAssembly/testsuite" target="_blank" rel="noreferrer">official WebAssembly specification tests</a> on microcontrollers. Neither was there a framework that could easily test the debugger functionality.</p><p>During developement, we found that the framework implements a few novel testing concepts, and solves some interesting problems that have not been previously explored. They are:</p><ol><li>Remote testing that allows for arbitrarily large test suites to be run in constrained environments.</li><li>Debugging-like scripting of test scenarios.</li></ol><p>We use the framework to test three core aspects of WARDuino:</p><ol><li>The virtual machine folllows the WebAssembly specication.</li><li>The debugger implements the <a href="/WARDuino/reference/debugger.html">API</a> correctly.</li><li>The <a href="/WARDuino/reference/primitives.html">built-in modules</a> work correctly.</li></ol><p>The test suites written in <span style="font-variant:small-caps;">latch</span> can be found in the <a href="https://github.com/TOPLLab/WARDuino/tree/main/tests/latch" target="_blank" rel="noreferrer">GitHub repository</a>.</p>',16),o=[n];function r(l,h,c,p,d,u){return t(),a("div",null,o)}const g=e(i,[["render",r]]);export{f as __pageData,g as default};
