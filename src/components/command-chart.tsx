
'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const chartData = [
  { name: 'Mon', commands: 4000 },
  { name: 'Tue', commands: 3000 },
  { name: 'Wed', commands: 2000 },
  { name: 'Thu', commands: 2780 },
  { name: 'Fri', commands: 1890 },
  { name: 'Sat', commands: 2390 },
  { name: 'Sun', commands: 3490 },
];

export function CommandChart() {
    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Command Usage</CardTitle>
                <CardDescription>Last 7 days</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" stroke="hsl(var(--foreground))" opacity={0.5} fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--foreground))" opacity={0.5} fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                    <Tooltip
                        cursor={{fill: 'hsl(var(--muted))'}}
                        contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            borderColor: "hsl(var(--border))",
                            borderRadius: "var(--radius)",
                        }}
                        labelStyle={{ color: "hsl(var(--foreground))" }}
                    />
                    <Bar dataKey="commands" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
