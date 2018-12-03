/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-yaml version: 1.0.1(7eb77e4bd6dbf35de62206ec52ba6500d57d3e5f)
 * Released under the MIT license
 * https://github.com/pengx17/monaco-yaml/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vs/language/yaml/monaco.contribution",["require","exports"],e)}(function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=monaco.Emitter,o=function(){function e(e,n){this._onDidChange=new t,this._languageId=e,this.setDiagnosticsOptions(n)}return Object.defineProperty(e.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"diagnosticsOptions",{get:function(){return this._diagnosticsOptions},enumerable:!0,configurable:!0}),e.prototype.setDiagnosticsOptions=function(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(this)},e}();n.LanguageServiceDefaultsImpl=o;var i=new o("yaml",{validate:!0,schemas:[]});monaco.languages.yaml={yamlDefaults:i},monaco.languages.register({id:"yaml",extensions:[".yaml",".yml"],aliases:["YAML","yaml","YML","yml"],mimetypes:["application/x-yaml"]}),monaco.languages.onLanguage("yaml",function(){e(["vs/language/yaml/yamlMode"],function(e){return e.setupMode(i)})})});