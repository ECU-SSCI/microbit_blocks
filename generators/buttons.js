'use strict';
import * as Blockly from 'blockly/core';

// Any imports need to be reserved words
Blockly.Python.addReservedWords('microbit');


Blockly.Python['microbit_button_is_pressed'] = function(block) {
  var dropdown_button = block.getFieldValue('button');
  Blockly.Python.definitions_['import_microbit'] = Blockly.Python.refinedImport('import_microbit', `button_${dropdown_button}`);
  var code = 'button_' + dropdown_button + '.is_pressed()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_button_was_pressed'] = function(block) {
  var dropdown_button = block.getFieldValue('button');
  Blockly.Python.definitions_['import_microbit'] = Blockly.Python.refinedImport('import_microbit', `button_${dropdown_button}`);
  var code = 'button_' + dropdown_button + '.was_pressed()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_button_get_presses'] = function(block) {
  var dropdown_button = block.getFieldValue('button');
  Blockly.Python.definitions_['import_microbit'] = Blockly.Python.refinedImport('import_microbit', `button_${dropdown_button}`);
  var code = 'button_' + dropdown_button + '.get_presses()';
  return [code, Blockly.Python.ORDER_MEMBER];
};
