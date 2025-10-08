"use client";

import { Button } from "@/components/ui/button";
import { CONTACT } from "@/content/contact";
import { Calendar, MessageSquare } from "lucide-react";

export default function AboutCTA() {
  const handleLinkedInDM = async () => {
    try {
      if (CONTACT.dmTemplate) await navigator.clipboard.writeText(CONTACT.dmTemplate);
    } catch {
      /* clipboard might be blocked—ignore */
    }
    // Open your LinkedIn profile; user taps “Message” and pastes the text
    window.open(CONTACT.linkedinProfile, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container text-center space-y-8">
      <h2 className="text-3xl md:text-4xl font-heading font-bold">Let’s Connect</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Prefer LinkedIn DMs or a quick call? Pick what works for you.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" onClick={handleLinkedInDM}>
          <MessageSquare className="mr-2 h-5 w-5" />
          DM on LinkedIn
        </Button>

        <Button asChild variant="outline" size="lg">
          <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
            <Calendar className="mr-2 h-5 w-5" />
            Book a call
          </a>
        </Button>
      </div>
    </div>
  );
}
