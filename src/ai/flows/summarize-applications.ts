'use server';

/**
 * @fileOverview An AI agent that summarizes applicant profiles for employers.
 *
 * - summarizeApplications - A function that handles the applicant profile summarization process.
 * - SummarizeApplicationsInput - The input type for the summarizeApplications function.
 * - SummarizeApplicationsOutput - The return type for the summarizeApplications function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeApplicationsInputSchema = z.object({
  applicantProfile: z
    .string()
    .describe('The complete profile information of the job applicant.'),
  jobDescription: z.string().describe('The description of the job posting.'),
});
export type SummarizeApplicationsInput = z.infer<typeof SummarizeApplicationsInputSchema>;

const SummarizeApplicationsOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the applicant profile, highlighting relevant skills and experience for the job.'
    ),
});
export type SummarizeApplicationsOutput = z.infer<typeof SummarizeApplicationsOutputSchema>;

export async function summarizeApplications(input: SummarizeApplicationsInput): Promise<SummarizeApplicationsOutput> {
  return summarizeApplicationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeApplicationsPrompt',
  input: {schema: SummarizeApplicationsInputSchema},
  output: {schema: SummarizeApplicationsOutputSchema},
  prompt: `You are an expert HR assistant specializing in summarizing job applicant profiles.

You will receive the applicant profile and the job description. You will create a concise summary of the applicant profile, highlighting the skills and experience that are most relevant to the job description.

Applicant Profile: {{{applicantProfile}}}
Job Description: {{{jobDescription}}}

Summary:`,
});

const summarizeApplicationsFlow = ai.defineFlow(
  {
    name: 'summarizeApplicationsFlow',
    inputSchema: SummarizeApplicationsInputSchema,
    outputSchema: SummarizeApplicationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
