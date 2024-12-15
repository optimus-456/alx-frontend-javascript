// Import RowID and RowElement
import { RowID, RowElement } from "./interface";

// Declare the types for each CRUD function
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
