/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Checks if the current directory is a GitHub repository.
 * @returns True if the current directory is a GitHub repository, false otherwise.
 */
export declare const isGitHubRepository: () => boolean;
/**
 * Gets a changelist of the repository between two commits.
 * Can compare between two commits, or get the diff of the working directory.
 * If no commits are provided, it gets the changelist of the working directory.
 * @param base The base commit branch or hash.
 * @param head The head commit branch or hash.
 * @returns The changelist as a string.
 */
export declare function getAuditScope(base?: string, head?: string): string;
/**
 * Gets a list of relevant file paths for auditing, filtering out irrelevant files and folders.
 * Irrelevant files include documentation, tests, build artifacts, etc.
 * @returns A list of relevant file paths for auditing.
 */
export declare function getFilesToAudit(): string[];
/**
 * Gets the total line count of a list of files.
 * @param files A list of file paths.
 * @returns The total line count of all files.
 */
export declare const getLineCount: (files: string[]) => number;
/**
 * Detects the primary programming language of the project in the current working directory.
 * @returns 'Node.js', 'Python', 'Go', or 'Unknown'.
 */
export declare function detectProjectLanguage(): Promise<'Node.js' | 'Python' | 'Go' | 'Unknown'>;
