"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon, DownloadIcon, Loader2Icon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { essayTypes, assessmentCriteria } from "@/lib/content";
import { useState } from "react";

export function AppSidebar() {
  const pathname = usePathname();
  const [isGenerating, setIsGenerating] = useState(false);
 
  const handleDownloadMarkdown = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/export-markdown');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'IELTS-Band9-Guide.md';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Markdown download failed:', error);
      alert('Failed to download markdown. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };
 
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center space-x-2 px-4 py-4">
          <span className="inline-block font-bold text-lg">9.0 IELTS Guide</span>
        </Link>
        <div className="px-4 pb-4">
          <Button 
            onClick={handleDownloadMarkdown}
            disabled={isGenerating}
            variant="default"
            size="sm"
            className="w-full"
          >
            {isGenerating ? (
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <DownloadIcon className="mr-2 h-4 w-4" />
            )}
            Download Full Guide (Markdown)
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/">Overview</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarSeparator />
        
        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Essay Types
                <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {essayTypes.map((type) => (
                    <SidebarMenuItem key={type.id}>
                      <SidebarMenuButton asChild isActive={pathname === `/guide/essay-types/${type.slug}`}>
                        <Link href={`/guide/essay-types/${type.slug}`}>{type.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
        
        <SidebarSeparator />
        
        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Assessment Criteria
                <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {assessmentCriteria.map((criterion) => (
                    <SidebarMenuItem key={criterion.id}>
                      <SidebarMenuButton asChild isActive={pathname === `/guide/assessment-criteria#${criterion.id}`}>
                        <Link href={`/guide/assessment-criteria#${criterion.id}`}>
                          {criterion.name}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
        
        <SidebarSeparator />
        
        <SidebarGroup>
          <SidebarGroupLabel>Writing Skills</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/guide/grammar"}>
                  <Link href="/guide/grammar">Grammar</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/guide/advanced-techniques"}>
                  <Link href="/guide/advanced-techniques">Advanced Techniques</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/guide/ai-optimized-writing"}>
                  <Link href="/guide/ai-optimized-writing">Writing for AI Graders</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/guide/vocabulary-topic-based"}>
                  <Link href="/guide/vocabulary-topic-based">Topic-Based Vocabulary</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarSeparator />
        
        <SidebarGroup>
          <SidebarGroupLabel>Structure</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/guide/strategies"}>
                  <Link href="/guide/strategies">Strategies</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/guide/example-essay"}>
                  <Link href="/guide/example-essay">P-E-E-L Structure</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarSeparator />
        
        <SidebarGroup>
          <SidebarGroupLabel>Reference</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/guide/band-comparison"}>
                  <Link href="/guide/band-comparison">Band Comparison</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/guide/example-essay"}>
                  <Link href="/guide/example-essay">Example Essay</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/guide/checklist"}>
                  <Link href="/guide/checklist">Checklist</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-border/40">
        <div className="px-4 py-2 text-xs text-muted-foreground">
          Band 9.0 IELTS Guide
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
