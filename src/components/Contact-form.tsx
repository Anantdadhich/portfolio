"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle, SendHorizontal } from "lucide-react";
import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";


export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<{
    name: string;
    email: string;
    msg: string;
  }>({
    name: "",
    email: "",
    msg: "",
  });

  const { toast } = useToast();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });
      console.log(res.status);
      if (res.status === 200) {
        toast({
          description: "Message sent successfully!",
        });
        setForm({ email: "", msg: "", name: "" });
      }
    } catch (error) {
      console.log(error);
      toast({ variant: "destructive", description: "Something went wrong!" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="space-y-6 mt-6 max-w-xl mx-auto p-6 border border-green-500/10 dark:border-green-500/20 bg-white/5 dark:bg-[#000500]/45 backdrop-blur-md rounded-lg shadow-xl" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5 relative group">
          <Input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Full Name"
            required={true}
            className="h-11 px-4 border border-green-900/30 dark:border-green-500/20 bg-green-950/5 dark:bg-[#000b00]/60 text-foreground rounded-none transition-all duration-300 placeholder:text-green-800/40 dark:placeholder:text-green-500/35 font-mono text-sm focus:border-green-500 focus:shadow-[0_0_12px_rgba(34,197,94,0.3)] focus-visible:ring-0 focus-visible:outline-none"
            value={form.name}
          />
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-focus-within:w-full" />
        </div>
        <div className="space-y-1.5 relative group">
          <Input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email Address"
            required={true}
            className="h-11 px-4 border border-green-900/30 dark:border-green-500/20 bg-green-950/5 dark:bg-[#000b00]/60 text-foreground rounded-none transition-all duration-300 placeholder:text-green-800/40 dark:placeholder:text-green-500/35 font-mono text-sm focus:border-green-500 focus:shadow-[0_0_12px_rgba(34,197,94,0.3)] focus-visible:ring-0 focus-visible:outline-none"
            value={form.email}
          />
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-focus-within:w-full" />
        </div>
      </div>
      <div className="space-y-1.5 relative group">
        <Textarea
          id="message"
          name="msg"
          rows={5}
          placeholder="Type your message here..."
          onChange={handleChange}
          required={true}
          className="p-4 border border-green-900/30 dark:border-green-500/20 bg-green-950/5 dark:bg-[#000b00]/60 text-foreground rounded-none transition-all duration-300 placeholder:text-green-800/40 dark:placeholder:text-green-500/35 font-mono text-sm focus:border-green-500 focus:shadow-[0_0_12px_rgba(34,197,94,0.3)] focus-visible:ring-0 focus-visible:outline-none resize-none"
          value={form.msg}
        />
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-focus-within:w-full" />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="w-full h-11 flex justify-center items-center gap-2 font-mono text-sm uppercase tracking-wider rounded-none bg-green-700 hover:bg-green-600 dark:bg-green-900 dark:hover:bg-green-800 text-white border border-green-500/30 hover:border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.15)] dark:shadow-[0_0_10px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300 group"
      >
        {loading ? (
          <>
            Sending message <LoaderCircle className="animate-spin" size={16} />
          </>
        ) : (
          <>
            Send message <SendHorizontal className="group-hover:translate-x-1 transition-transform" size={16} />
          </>
        )}
      </Button>
    </form>
  );
}