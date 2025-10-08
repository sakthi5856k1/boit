'use server';

/**
 * @fileOverview Summarizes a website given a URL.
 *
 * - summarizeWebsite - A function that summarizes the content of a given website.
 * - SummarizeWebsiteInput - The input type for the summarizeWebsite function.
 * - SummarizeWebsiteOutput - The return type for the summarizeWebsite function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {extractWebsiteContent} from '@/services/extract-website-content';

const SummarizeWebsiteInputSchema = z.object({
  url: z.string().url().describe('The URL of the website to summarize.'),
});
export type SummarizeWebsiteInput = z.infer<typeof SummarizeWebsiteInputSchema>;

const SummarizeWebsiteOutputSchema = z.object({
  summary: z.string().describe('A short summary of the website content.'),
});
export type SummarizeWebsiteOutput = z.infer<typeof SummarizeWebsiteOutputSchema>;

export async function summarizeWebsite(input: SummarizeWebsiteInput): Promise<SummarizeWebsiteOutput> {
  return summarizeWebsiteFlow(input);
}

const summarizeWebsitePrompt = ai.definePrompt({
  name: 'summarizeWebsitePrompt',
  input: {schema: SummarizeWebsiteInputSchema},
  output: {schema: SummarizeWebsiteOutputSchema},
  prompt: `You are an expert summarizer.  Summarize the content of the following website in a concise manner:\n\nWebsite Content: {{{websiteContent}}}`,
});

const summarizeWebsiteFlow = ai.defineFlow(
  {
    name: 'summarizeWebsiteFlow',
    inputSchema: SummarizeWebsiteInputSchema,
    outputSchema: SummarizeWebsiteOutputSchema,
  },
  async input => {
    const websiteContent = await extractWebsiteContent(input.url);
    const {output} = await summarizeWebsitePrompt({
      ...input,
      websiteContent,
    });
    return output!;
  }
);
