## Project Analysis tool

This project helps analyze and visualize the architecture of projects that use a Java backend with a Angular frontend.

The primary script, angular-analyzer.js, performs the following actions:
1) Identifies all typescript files in an Angular project, and for each file
2) Identifies pertinent typesecript tokens such as classes, functions etc. and classifies them as an Angular Module, Angular component, Angular service, etc.
3) Identifies links between these components, and their "types". For example, the link type between an Angular Services and Angular component that uses it via constructor DI is called "Dependency Injected Service"
4) Generates an output graph JSON object containing pertinent information, where classes, functions etc. are "node" objects that contain infomation such as name, file path and other properties. Link objects connect various nodes, and include information about the link type.

The ng-analysis project:
1) Displays the output graph generated, allowing users to filter the graph by various node and link attributes present in the output graph object
2) Serves as an example Angular project that is analyse by the primary analysis script above
   
