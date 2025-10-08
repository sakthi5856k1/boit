
import { PlaceHolderImages } from './placeholder-images';
import type { CustomResponse, Role, ModerationLog, CommandLog } from './types';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const customResponses: CustomResponse[] = [
  { id: '1', trigger: '!hello', response: 'Hello there!', enabled: true },
  { id: '2', trigger: 'good bot', response: 'Thank you!', enabled: true },
  { id: '3', trigger: '!help', response: 'Available commands: !hello, !help', enabled: false },
  { id: '4', trigger: '!socials', response: 'Check out our Twitter: @discordace', enabled: true },
];

export const roles: Role[] = [
    { id: '1', name: 'Gamer', description: 'For the avid gamers.', emoji: '🎮' },
    { id: '2', name: 'Developer', description: 'For the tech enthusiasts.', emoji: '💻' },
    { id: '3', name: 'Designer', description: 'For the creative minds.', emoji: '🎨' },
    { id: '4', name: 'Community Helper', description: 'For helpful members.', emoji: '🤝' },
];

export const moderationLogs: ModerationLog[] = [
    { id: '1', user: 'Troublemaker#1234', avatar: getImage('mod-avatar-1'), action: 'ban', reason: 'Spamming', timestamp: '2023-10-27T10:00:00Z', moderator: 'Admin#0001' },
    { id: '2', user: 'Nuisance#5678', avatar: getImage('mod-avatar-2'), action: 'kick', reason: 'Inappropriate language', timestamp: '2023-10-27T11:30:00Z', moderator: 'Mod#0002' },
    { id: '3', user: 'LoudPerson#9012', avatar: getImage('mod-avatar-3'), action: 'mute', reason: 'Voice channel abuse', timestamp: '2023-10-27T12:15:00Z', moderator: 'Mod#0002' },
];

export const commandLogs: CommandLog[] = [
    { id: '1', user: 'User1#1111', avatar: getImage('cmd-avatar-1'), command: '!weather London', timestamp: '2023-10-27T14:00:00Z', status: 'success' },
    { id: '2', user: 'User2#2222', avatar: getImage('cmd-avatar-2'), command: '!wiki Next.js', timestamp: '2023-10-27T14:01:00Z', status: 'success' },
    { id: '3', user: 'User3#3333', avatar: getImage('cmd-avatar-3'), command: '!invalid', timestamp: '2023-10-27T14:02:00Z', status: 'error' },
];
