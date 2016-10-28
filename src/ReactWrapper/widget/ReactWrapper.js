/*global logger*/
/*
    ReactWrapper
    ========================

    @file      : ReactWrapper.js
    @version   : 1.0.0
    @author    : Conner Charlebois
    @date      : 9/1/2016
    @copyright : Mendix 2016
    @license   : Apache 2

    Documentation
    ========================
    Describe your widget here.
*/
// require({
//   packages: [
//     {
//       name: 'react',
//       location: '/widgets/ReactWrapper/lib',
//       main: 'react'
//     }, {
//       name: 'jsx',
//       location: '/widgets/ReactWrapper/lib/jsx'
//     }
//   ]
// }, function(){
// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",

    "mxui/dom",
    "dojo/text",

    "ReactWrapper/lib/jquery-1.11.2",
    "ReactWrapper/lib/react",
    "ReactWrapper/lib/react-dom",
    "ReactWrapper/lib/babel",
    // components
    "dojo/text!ReactWrapper/lib/components/Test.jsx",
    "dojo/text!ReactWrapper/lib/components/CommentBox.jsx",
    "dojo/text!ReactWrapper/lib/components/Wrapper.jsx",

    "dojo/text!ReactWrapper/widget/template/ReactWrapper.html"
], function( declare, _WidgetBase, _TemplatedMixin, dom, dojoText, _jQuery, React, ReactDOM,
Babel,
Test,
CommentBox,
Wrapper,
widgetTemplate) {
    "use strict";

    var $ = _jQuery.noConflict(true);
    require([
      // pacakages
    ], function(){

    })
    // Declare widget's prototype.
    return declare("ReactWrapper.widget.ReactWrapper", [
        _WidgetBase, _TemplatedMixin
    ], {
        // _TemplatedMixin will create our dom node using this HTML template.
        templateString: widgetTemplate,

        postCreate: function() {
            // console.log(Wrapper)
            // ReactDOM.render(React.createElement(Wrapper), document.getElementById('anchor'))
            // there has to be a better way to do this.
            // eval(Babel.transform(Test, {presets:['react']}).code + ';' +
            //      Babel.transform(CommentBox, {presets:['react']}).code + ';' +
            //     //  Babel.transform(Test, {presets:['react']}).code + ';' +
            //      Babel.transform(Wrapper, {presets:['react']}).code)
            eval(Babel.transform(Wrapper, {presets:['react']}).code)
        }
    });
});

require(["ReactWrapper/widget/ReactWrapper"]);

// })
