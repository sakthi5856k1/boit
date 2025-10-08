
import PageHeader from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { commandLogs } from '@/lib/data';
import { formatDistanceToNow } from 'date-fns';

export default function CommandLogsPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <PageHeader
                title="Command Logs"
                description="Recent commands used by users in your server."
            />
            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Command</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Time</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {commandLogs.map((log) => (
                                <TableRow key={log.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src={log.avatar} alt={log.user} data-ai-hint="person face" />
                                                <AvatarFallback>{log.user.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">{log.user}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                      <code className="font-mono bg-muted/50 text-sm px-2 py-1 rounded-md">{log.command}</code>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={log.status === 'success' ? 'secondary' : 'destructive'}>
                                            {log.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right text-muted-foreground text-sm">
                                        {formatDistanceToNow(new Date(log.timestamp), { addSuffix: true })}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
