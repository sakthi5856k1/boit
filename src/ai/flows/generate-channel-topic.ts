'use server';

/**
 * @fileOverview A flow for generating creative and engaging channel topics based on a prompt.
 *
 * - generateChannelTopic - A function that generates channel topics.
 * - GenerateChannelTopicInput - The input type for the generateChannelTopic function.
 * - GenerateChannelTopicOutput - The return type for the generateChannelTopic function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateChannelTopicInputSchema = z.object({
  prompt: z
    .string()
    .describe('A prompt to generate channel topics from.'),
});
export type GenerateChannelTopicInput = z.infer<typeof GenerateChannelTopicInputSchema>;

const GenerateChannelTopicOutputSchema = z.object({
  topic: z.string().describe('The generated channel topic.'),
});
export type GenerateChannelTopicOutput = z.infer<typeof GenerateChannelTopicOutputSchema>;

export async function generateChannelTopic(input: GenerateChannelTopicInput): Promise<GenerateChannelTopicOutput> {
  return generateChannelTopicFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateChannelTopicPrompt',
  input: {schema: GenerateChannelTopicInputSchema},
  output: {schema: GenerateChannelTopicOutputSchema},
  prompt: `You are a creative channel topic generator for Discord.
Generate a creative and engaging channel topic based on the following prompt: {{{prompt}}}`,
});

const generateChannelTopicFlow = ai.defineFlow(
  {
    name: 'generateChannelTopicFlow',
    inputSchema: GenerateChannelTopicInputSchema,
    outputSchema: GenerateChannelTopicOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
