
'use client'
import { useState } from 'react';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { customResponses as initialCustomResponses } from '@/lib/data';
import type { CustomResponse } from '@/lib/types';
import { Switch } from '@/components/ui/switch';

export default function CustomResponsesPage() {
    const [responses, setResponses] = useState<CustomResponse[]>(initialCustomResponses);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [trigger, setTrigger] = useState('');
    const [response, setResponse] = useState('');

    const handleAddResponse = () => {
        const newResponse: CustomResponse = {
            id: String(Date.now()),
            trigger,
            response,
            enabled: true,
        };
        setResponses([newResponse, ...responses]);
        setIsDialogOpen(false);
        setTrigger('');
        setResponse('');
    }

    const toggleEnabled = (id: string) => {
        setResponses(responses.map(res => res.id === id ? { ...res, enabled: !res.enabled } : res));
    }

    return (
        <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <PageHeader
                title="Custom Responses"
                description="Manage custom commands and responses for your bot."
            >
                <Button onClick={() => setIsDialogOpen(true)}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Response
                </Button>
            </PageHeader>
            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden sm:table-cell">Status</TableHead>
                                <TableHead>Trigger</TableHead>
                                <TableHead>Response</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {responses.map((res) => (
                                <TableRow key={res.id}>
                                    <TableCell className="hidden sm:table-cell">
                                        <Switch
                                            checked={res.enabled}
                                            onCheckedChange={() => toggleEnabled(res.id)}
                                            aria-label="Toggle response"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">{res.trigger}</TableCell>
                                    <TableCell className="max-w-xs truncate hidden md:table-cell">{res.response}</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Custom Response</DialogTitle>
                        <DialogDescription>
                            Create a new trigger and a response for your bot. When a user types the trigger, the bot will reply with the response.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="trigger" className="text-right">Trigger</Label>
                            <Input id="trigger" value={trigger} onChange={(e) => setTrigger(e.target.value)} placeholder="e.g., !hello" className="col-span-3"/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="response" className="text-right">Response</Label>
                            <Textarea id="response" value={response} onChange={(e) => setResponse(e.target.value)} placeholder="e.g., Hello there! How can I help?" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button onClick={handleAddResponse}>Add Response</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
