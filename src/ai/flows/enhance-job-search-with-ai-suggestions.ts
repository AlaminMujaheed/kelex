'use server';
/**
 * @fileOverview AI-powered job suggestions for job seekers.
 *
 * - enhanceJobSearchWithAISuggestions - A function that provides job suggestions based on profile and resume.
 * - JobSearchInput - The input type for the enhanceJobSearchWithAISuggestions function.
 * - JobSearchOutput - The return type for the enhanceJobSearchWithAISuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JobSearchInputSchema = z.object({
  profileDetails: z
    .string()
    .describe('Details of the job seeker profile, including skills and experience.'),
  resumeText: z.string().describe('The text content of the job seeker resume.'),
  jobListings: z
    .string()
    .describe('Current job listings available on the platform, provide context for suggestions.'),
});
export type JobSearchInput = z.infer<typeof JobSearchInputSchema>;

const JobSearchOutputSchema = z.object({
  suggestedJobs: z
    .array(z.string())
    .describe('A list of suggested job titles that match the job seeker profile and resume.'),
  reasoning: z
    .string()
    .describe('Explanation of why these jobs were suggested, based on the profile and resume content.'),
});
export type JobSearchOutput = z.infer<typeof JobSearchOutputSchema>;

export async function enhanceJobSearchWithAISuggestions(
  input: JobSearchInput
): Promise<JobSearchOutput> {
  return enhanceJobSearchWithAISuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'jobSearchSuggestionsPrompt',
  input: {schema: JobSearchInputSchema},
  output: {schema: JobSearchOutputSchema},
  prompt: `You are an AI-powered job suggestion assistant. Based on the job seeker's profile details, resume text, and current job listings, suggest relevant job opportunities.

Job Seeker Profile Details: {{{profileDetails}}}

Resume Text: {{{resumeText}}}

Current Job Listings: {{{jobListings}}}

Provide a list of suggested job titles and explain why these jobs are a good match for the job seeker.

Output in JSON format:
{
  "suggestedJobs": ["Job Title 1", "Job Title 2", ...],
  "reasoning": "Explanation of why these jobs were suggested..."
}`,
});

const enhanceJobSearchWithAISuggestionsFlow = ai.defineFlow(
  {
    name: 'enhanceJobSearchWithAISuggestionsFlow',
    inputSchema: JobSearchInputSchema,
    outputSchema: JobSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
