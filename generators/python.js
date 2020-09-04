/*
Overrides for generic Python code generation.
*/
'use strict';


import * as Blockly from 'blockly/core';


Blockly.Python.init = function(workspace) {
  /**
    * Empty loops or conditionals are not allowed in Python.
    */
  Blockly.Python.PASS = this.INDENT + 'pass\n';
  // Create a dictionary of definitions to be printed before the code.
  Blockly.Python.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.Python.functionNames_ = Object.create(null);

  if (!Blockly.Python.variableDB_) {
    Blockly.Python.variableDB_ =
        new Blockly.Names(Blockly.Python.RESERVED_WORDS_);
  } else {
    Blockly.Python.variableDB_.reset();
  }

  Blockly.Python.variableDB_.setVariableMap(workspace.getVariableMap());
}

Blockly.Python.refinedImport = function(import_statement, obj) {
  let mod = `from ${import_statement.split('_')[1]} import`;
  if (Blockly.Python.definitions_[import_statement] == undefined) {
    return `${mod} ${obj}`;
  } else {
    let libs = Blockly.Python.definitions_[import_statement].split(' ').slice(3).map(l=>l.replace(',',''))
    if (libs.find(e=>e==obj) == undefined) return `${Blockly.Python.definitions_[import_statement]}, ${obj}`;
    else return Blockly.Python.definitions_[import_statement];
  }
};