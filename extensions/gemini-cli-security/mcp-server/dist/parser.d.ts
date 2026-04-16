/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
export interface Location {
    file: string | null;
    startLine: number | null;
    endLine: number | null;
}
export interface Finding {
    vulnerability: string | null;
    vulnerabilityType: string | null;
    severity: string | null;
    dataType: string | null;
    sourceLocation: Location;
    sinkLocation: Location;
    lineContent: string | null;
    description: string | null;
    recommendation: string | null;
    codeSuggestion?: string | null;
}
/**
 * Parses a markdown string containing security findings into a structured format.
 * The markdown should follow a specific format where each finding starts with "Vulnerability:" and includes fields like "Severity:", "Source Location:", etc.
 * The function uses regular expressions to extract the relevant information and returns an array of findings.
 *
 * @param content - The markdown string to parse.
 * @returns An array of structured findings extracted from the markdown.
 */
export declare function parseMarkdownToDict(content: string): Finding[];
