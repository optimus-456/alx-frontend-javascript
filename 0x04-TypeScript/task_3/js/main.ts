/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";

// Create an object of type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and store the new RowID
const newRowID: RowID = CRUD.insertRow(row);
// Output: Insert row { firstName: 'Guillaume', lastName: 'Salva' }

// Create an updatedRow object with the age field added
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

// Update the row using the newRowID
CRUD.updateRow(newRowID, updatedRow);
// Output: Update row <newRowID> { firstName: 'Guillaume', lastName: 'Salva', age: 23 }

// Delete the row using the newRowID
CRUD.deleteRow(newRowID);
// Output: Delete row id <newRowID>
