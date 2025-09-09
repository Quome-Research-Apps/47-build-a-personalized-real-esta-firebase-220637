'use server';

/**
 * @fileOverview Matches properties to user criteria and provides a match score.
 *
 * - matchPropertiesToCriteria - A function that handles the property matching process.
 * - MatchPropertiesToCriteriaInput - The input type for the matchPropertiesToCriteria function.
 * - MatchPropertiesToCriteriaOutput - The return type for the matchPropertiesToCriteria function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MatchPropertiesToCriteriaInputSchema = z.object({
  propertyDetails: z.string().describe('Detailed information about the property listing.'),
  userCriteria: z.string().describe('The user-defined criteria for their ideal home.'),
});
export type MatchPropertiesToCriteriaInput = z.infer<
  typeof MatchPropertiesToCriteriaInputSchema
>;

const MatchPropertiesToCriteriaOutputSchema = z.object({
  matchScore: z
    .number()
    .describe(
      'A numerical score (0-100) representing how well the property matches the user criteria.'
    ),
  reasoning: z
    .string()
    .describe(
      'A brief explanation of why the property received the given match score.'
    ),
});
export type MatchPropertiesToCriteriaOutput = z.infer<
  typeof MatchPropertiesToCriteriaOutputSchema
>;

export async function matchPropertiesToCriteria(
  input: MatchPropertiesToCriteriaInput
): Promise<MatchPropertiesToCriteriaOutput> {
  return matchPropertiesToCriteriaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'matchPropertiesToCriteriaPrompt',
  input: {schema: MatchPropertiesToCriteriaInputSchema},
  output: {schema: MatchPropertiesToCriteriaOutputSchema},
  prompt: `You are an AI real estate expert tasked with matching properties to user criteria.

  Given the following property details:
  {{propertyDetails}}

  And the following user criteria:
  {{userCriteria}}

  Determine a match score (0-100) indicating how well the property fits the user's ideal home.
  Provide a brief explanation of your reasoning for the assigned score.

  Return the match score and reasoning in the following JSON format:
  { "matchScore": number, "reasoning": string }`,
});

const matchPropertiesToCriteriaFlow = ai.defineFlow(
  {
    name: 'matchPropertiesToCriteriaFlow',
    inputSchema: MatchPropertiesToCriteriaInputSchema,
    outputSchema: MatchPropertiesToCriteriaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
