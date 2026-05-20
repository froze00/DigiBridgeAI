/**
 * CSV Parser Utility for DigiBridge AI+
 * Loads and parses CSV data files from trusted Philippine government sources
 */

export interface CsvRow {
  [key: string]: string | number | boolean;
}

/**
 * Parses CSV text content into an array of objects
 * @param csvText - Raw CSV text content
 * @returns Array of objects where keys are column headers
 */
export function parseCSV(csvText: string): CsvRow[] {
  const lines = csvText.trim().split('\n');
  if (lines.length === 0) return [];

  // Parse headers
  const headers = parseCSVLine(lines[0]);

  // Parse data rows
  const data: CsvRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length === headers.length) {
      const row: CsvRow = {};
      headers.forEach((header, index) => {
        row[header] = convertValue(values[index]);
      });
      data.push(row);
    }
  }

  return data;
}

/**
 * Parses a single CSV line, handling quoted values
 * @param line - CSV line to parse
 * @returns Array of values
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

/**
 * Converts string values to appropriate types
 * @param value - String value to convert
 * @returns Converted value (number, boolean, or string)
 */
function convertValue(value: string): string | number | boolean {
  // Remove quotes if present
  const cleanValue = value.replace(/^"|"$/g, '');

  // Check for boolean
  if (cleanValue.toLowerCase() === 'true') return true;
  if (cleanValue.toLowerCase() === 'false') return false;
  if (cleanValue === '1' || cleanValue === '0') {
    // Could be boolean (0/1) - keep as number for flexibility
  }

  // Check for number
  const num = parseFloat(cleanValue);
  if (!isNaN(num) && cleanValue !== '') {
    return num;
  }

  // Return as string
  return cleanValue;
}

/**
 * Loads a CSV file from the data directory
 * @param filename - Name of the CSV file (without path)
 * @returns Promise that resolves to parsed CSV data
 */
export async function loadCSV(filename: string): Promise<CsvRow[]> {
  try {
    const response = await fetch(`/src/data/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load CSV: ${filename}`);
    }
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error(`Error loading CSV file ${filename}:`, error);
    return [];
  }
}

/**
 * Filters CSV data by a specific column value
 * @param data - CSV data array
 * @param column - Column name to filter by
 * @param value - Value to match
 * @returns Filtered array
 */
export function filterCSV(
  data: CsvRow[],
  column: string,
  value: string | number | boolean
): CsvRow[] {
  return data.filter((row) => row[column] === value);
}

/**
 * Sorts CSV data by a specific column
 * @param data - CSV data array
 * @param column - Column name to sort by
 * @param ascending - Sort direction (default: true)
 * @returns Sorted array
 */
export function sortCSV(
  data: CsvRow[],
  column: string,
  ascending: boolean = true
): CsvRow[] {
  return [...data].sort((a, b) => {
    const aVal = a[column];
    const bVal = b[column];

    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return ascending ? aVal - bVal : bVal - aVal;
    }

    const aStr = String(aVal);
    const bStr = String(bVal);
    return ascending ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
  });
}

/**
 * Gets unique values from a specific column
 * @param data - CSV data array
 * @param column - Column name
 * @returns Array of unique values
 */
export function getUniqueValues(data: CsvRow[], column: string): (string | number | boolean)[] {
  const values = new Set(data.map((row) => row[column]));
  return Array.from(values);
}

/**
 * Aggregates data by grouping and summing values
 * @param data - CSV data array
 * @param groupBy - Column to group by
 * @param sumColumn - Column to sum
 * @returns Aggregated data
 */
export function aggregateCSV(
  data: CsvRow[],
  groupBy: string,
  sumColumn: string
): { [key: string]: number } {
  const result: { [key: string]: number } = {};

  data.forEach((row) => {
    const key = String(row[groupBy]);
    const value = Number(row[sumColumn]) || 0;

    if (result[key]) {
      result[key] += value;
    } else {
      result[key] = value;
    }
  });

  return result;
}

/**
 * Gets rows where a column matches the Caraga region focus
 * @param data - CSV data array
 * @returns Rows marked as focus region
 */
export function getCaragaFocusData(data: CsvRow[]): CsvRow[] {
  return data.filter((row) => row.is_focus_region === 1 || row.is_focus_region === true);
}

/**
 * Formats CSV data for chart consumption
 * @param data - CSV data array
 * @param labelColumn - Column to use for labels
 * @param valueColumn - Column to use for values
 * @returns Array of {name, value} objects for charts
 */
export function formatForChart(
  data: CsvRow[],
  labelColumn: string,
  valueColumn: string
): { name: string; value: number }[] {
  return data.map((row) => ({
    name: String(row[labelColumn]),
    value: Number(row[valueColumn]) || 0,
  }));
}
