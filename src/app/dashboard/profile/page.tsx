import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">My Profile</h1>
        <p className="text-muted-foreground">Keep your profile updated to attract the best opportunities.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>Src
            <Input id="fullName" defaultValue="Jane Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="jane.doe@example.com" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="+234 801 234 5678" />
          </div>
           <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" defaultValue="Lagos, Nigeria" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="bio">Professional Summary</Label>
            <Textarea id="bio" placeholder="A brief summary of your professional background..." rows={4} defaultValue="Experienced full-stack developer with a passion for creating intuitive and dynamic user experiences."/>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Resume</CardTitle>
          <CardDescription>Your resume is the most important part of your profile.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-md">
                <div>
                    <p className="font-medium">Jane_Doe_Resume.pdf</p>
                    <p className="text-sm text-muted-foreground">Updated 2 months ago</p>
                </div>
                <Button variant="outline">Download</Button>
            </div>
            <div className="relative">
                <Button variant="secondary" className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload New Resume
                </Button>
            </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
          <CardDescription>List your technical and soft skills.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="Add skills (e.g., React, Project Management, Figma)" />
          {/* Display skills as badges */}
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button size="lg">Save Changes</Button>
      </div>
    </div>
  );
}
