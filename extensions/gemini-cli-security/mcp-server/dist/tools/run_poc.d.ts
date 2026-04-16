/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { z } from 'zod';
export declare const RUN_POC_TOOL_NAME = "run_poc";
export declare const RUN_POC_TOOL_DESCRIPTION = "Runs the generated PoC code.";
export declare const RunPocArgsSchema: z.ZodObject<{
    filePath: z.ZodString;
}, "strip", z.ZodTypeAny, {
    filePath: string;
}, {
    filePath: string;
}>;
export type RunPocArgs = z.infer<typeof RunPocArgsSchema>;
export declare function getRunPocMessages(input: RunPocArgs): Promise<{
    content: {
        type: string;
        text: string;
    }[];
    isError: boolean;
} | {
    content: {
        type: string;
        text: string;
    }[];
    isError?: undefined;
}>;
