// AccordionParts.jsx
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Plus } from "lucide-react";

export const FilterItem = ({ value, title, testid, children }) => (
    <Accordion.Item value={value} data-testid={testid} className="border-b border-white/10">
        <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-3 py-3 text-left text-sm font-semibold">
                {title}
                <span className="flex h-6 w-6 items-center justify-center transition-transform group-data-[state=open]:-rotate-90">
                    <ChevronDown size={14} />
                </span>
            </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className="accordion-content overflow-hidden">
            <div className="pt-1 pb-3 flex flex-col gap-2">{children}</div>
        </Accordion.Content>
    </Accordion.Item>
);