
export type CustomResponse = {
  id: string;
  trigger: string;
  response: string;
  enabled: boolean;
};

export type Role = {
  id: string;
  name: string;
  description: string;
  emoji: string;
};

export type ModerationLog = {
    id: string;
    user: string;
    avatar: string;
    action: 'ban' | 'kick' | 'mute' | 'warn';
    reason: string;
    timestamp: string;
    moderator: string;
}

export type CommandLog = {
    id: string;
    user: string;
    avatar: string;
    command: string;
    timestamp: string;
    status: 'success' | 'error';
}
