"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobTypes, locationTypes } from "@/constants";
import Form from "next/form";

export default function JobFilters() {
  const [search, setSearch] = useState("");
  const [locationType, setLocationType] = useState("");
  const [jobType, setJobType] = useState("");

  return (
    <Form action="/jobs" className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="md:col-span-2">
          <Label htmlFor="search">Search Jobs</Label>
          <Input
            id="search"
            placeholder="e.g. React Developer"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="search"
          />
        </div>
        <div>
          <Label htmlFor="location-type">Location Type</Label>
          <Select
            value={locationType}
            onValueChange={setLocationType}
            name="locationType"
          >
            <SelectTrigger id="location-type">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {locationTypes.map((type) => (
                <SelectItem key={type} value={type.toLowerCase()}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="job-type">Job Type</Label>
          <Select value={jobType} onValueChange={setJobType} name="jobType">
            <SelectTrigger id="job-type">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {jobTypes.map((type) => (
                <SelectItem key={type} value={type.toLowerCase()}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button
        type="submit"
        className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700 text-white"
      >
        Search Jobs
      </Button>
    </Form>
  );
}
