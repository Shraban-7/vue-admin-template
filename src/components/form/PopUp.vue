<script setup>
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Form from "./Form.vue";
</script>

<template>
  <Dialog>
    <DialogTrigger> <Button>Open</Button> </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle class="text-lg font-semibold mb-4"
          >Edit profile</DialogTitle
        >
        <DialogDescription>
          <form>
            <div class="grid items-center w-full gap-4">
              <div class="flex flex-col space-y-1.5">
                <Label for="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div class="flex flex-col space-y-1.5">
                <Label for="email">Email</Label>
                <Input id="email" placeholder="test@example.com" />
              </div>
              <div class="flex flex-col space-y-1.5">
                <Label for="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="nuxt"> Nuxt </SelectItem>
                    <SelectItem value="next"> Next.js </SelectItem>
                    <SelectItem value="sveltekit"> SvelteKit </SelectItem>
                    <SelectItem value="astro"> Astro </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </DialogDescription>
      </DialogHeader>

      <DialogFooter class="flex justify-between items-center pb-6">
        <!-- Left-aligned Cancel button -->
        <DialogTrigger>
          <Button variant="outline"> Cancel </Button>
        </DialogTrigger>
        <!-- Right-aligned Deploy button -->
        <Button class="ml-auto">Deploy</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
