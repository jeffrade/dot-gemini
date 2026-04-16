/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { z } from 'zod';
import { VulnerabilityType } from '../knowledge.js';
export declare const POC_CONTEXT_TOOL_NAME = "poc_context";
export declare const POC_CONTEXT_TOOL_DESCRIPTION = "Sets up the necessary workspace and directories to test a vulnerability, returning the context variables needed to generate the PoC. Call this tool as part of the `poc` skill.";
export declare const PocContextArgsSchema: z.ZodObject<{
    problemStatement: z.ZodString;
    vulnerabilityType: z.ZodEnum<[VulnerabilityType.PathTraversal, VulnerabilityType.Other]>;
    sourceCodeLocation: z.ZodString;
}, "strip", z.ZodTypeAny, {
    problemStatement: string;
    vulnerabilityType: VulnerabilityType.PathTraversal | VulnerabilityType.Other;
    sourceCodeLocation: string;
}, {
    problemStatement: string;
    vulnerabilityType: VulnerabilityType.PathTraversal | VulnerabilityType.Other;
    sourceCodeLocation: string;
}>;
export type PocContextArgs = z.infer<typeof PocContextArgsSchema>;
export declare function getPocContext(args: PocContextArgs): Promise<{
    content: {
        type: "text";
        text: string;
    }[];
}>;
