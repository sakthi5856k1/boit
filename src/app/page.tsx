
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Bot, Shield, MessageSquare } from 'lucide-react';
import PageHeader from '@/components/page-header';
import { CommandChart } from '@/components/command-chart';

export default function DashboardPage() {
  const stats = [
    { title: 'Total Users', value: '1,234', icon: Users, change: '+20.1%' },
    { title: 'Commands Used', value: '56,789', icon: Bot, change: '+18.2%' },
    { title: 'Moderation Actions', value: '890', icon: Shield, change: '+5.4%' },
    { title: 'Custom Responses', value: '42', icon: MessageSquare, change: '+12.5%' },
  ];

  const topCommands = [
      { name: '!rank', count: 1250 },
      { name: '!weather', count: 980 },
      { name: '!play', count: 850 },
      { name: '!profile', count: 720 },
      { name: '!help', count: 600 },
  ];

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <PageHeader
        title="Dashboard"
        description="Overview of your Discord server's activity."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <CommandChart />
        <Card className="col-span-4 lg:col-span-3">
          <CardHeader>
            <CardTitle>Top Commands</CardTitle>
            <CardDescription>Most frequently used commands.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
                {topCommands.map((command) => (
                    <li key={command.name} className="flex items-center">
                        <span className="font-mono bg-muted/50 text-sm px-2 py-1 rounded-md mr-4">{command.name}</span>
                        <div className="flex-1 h-2 bg-muted rounded-full">
                            <div className="h-2 bg-primary rounded-full" style={{ width: `${(command.count / topCommands[0].count) * 100}%` }}></div>
                        </div>
                        <span className="ml-4 text-sm font-medium text-muted-foreground w-12 text-right">{command.count.toLocaleString()}</span>
                    </li>
                ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
