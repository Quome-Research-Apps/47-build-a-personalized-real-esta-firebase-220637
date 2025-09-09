// Summarize property listings in a concise format, highlighting key features that match user criteria.

'use server';

/**
 * @fileOverview Summarizes property listings based on user criteria.
 *
 * - summarizePropertyListings - A function that summarizes property listings.
 * - SummarizePropertyListingsInput - The input type for the summarizePropertyListings function.
 * - SummarizePropertyListingsOutput - The return type for the summarizePropertyListings function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePropertyListingsInputSchema = z.object({
  propertyListings: z.string().describe('A list of property listings with details about each property.'),
  userCriteria: z.string().describe('The user\u2019s ideal home criteria.'),
});
export type SummarizePropertyListingsInput = z.infer<typeof SummarizePropertyListingsInputSchema>;

const SummarizePropertyListingsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the property listings, highlighting key features that match the user criteria.'),
});
export type SummarizePropertyListingsOutput = z.infer<typeof SummarizePropertyListingsOutputSchema>;

export async function summarizePropertyListings(input: SummarizePropertyListingsInput): Promise<SummarizePropertyListingsOutput> {
  return summarizePropertyListingsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizePropertyListingsPrompt',
  input: {schema: SummarizePropertyListingsInputSchema},
  output: {schema: SummarizePropertyListingsOutputSchema},
  prompt: `You are an AI real estate assistant. You will receive a list of property listings and the user's ideal home criteria. Your task is to summarize the property listings, highlighting the key features that match the user criteria, so that the user can quickly assess if the property is worth further investigation.\n\nProperty Listings:\n{{{propertyListings}}}\n\nUser Criteria:\n{{{userCriteria}}}\n\nSummary:`,
});

const summarizePropertyListingsFlow = ai.defineFlow(
  {
    name: 'summarizePropertyListingsFlow',
    inputSchema: SummarizePropertyListingsInputSchema,
    outputSchema: SummarizePropertyListingsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
