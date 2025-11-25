"use client"
import React from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {Card} from "@/components/ui/card";
import {Calendar} from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {Button} from "@/components/ui/button";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";
const TodoList = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [open, setOpen] = React.useState(false)
    return (
        <div className="">
            <h1 className="text-lg font-medium">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date)
                            setOpen(false)
                        }}
                        className="rounded-lg border"
                    />
                </PopoverContent>
            </Popover>
            {/* LIST */}
            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                <div className="w-full flex flex-col items-center gap-2">
                    <Card className="w-full p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="terms" checked/>
                            <Label htmlFor="terms" className="text-sm text-muted-foreground">Accept terms and
                                conditions</Label>
                        </div>
                    </Card>
                    <Card className="w-full p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="terms" checked/>
                            <Label htmlFor="terms" className="text-sm text-muted-foreground">Accept terms and
                                conditions</Label>
                        </div>
                    </Card>
                    <Card className="w-full p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="terms" checked/>
                            <Label htmlFor="terms" className="text-sm text-muted-foreground">Accept terms and
                                conditions</Label>
                        </div>
                    </Card>
                    <Card className="w-full p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="terms" checked/>
                            <Label htmlFor="terms" className="text-sm text-muted-foreground">Accept terms and
                                conditions</Label>
                        </div>
                    </Card>
                    <Card className="w-full p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="terms" checked/>
                            <Label htmlFor="terms" className="text-sm text-muted-foreground">Accept terms and
                                conditions</Label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    );
}

export default TodoList;
