export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-muted-foreground mb-8">
        This is an example about page for your Next.js template. Add your company or project
        information here.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-card rounded-lg border">
          <h3 className="text-xl font-medium mb-2">Our Mission</h3>
          <p className="text-muted-foreground">
            Describe your mission here. What problems are you solving?
          </p>
        </div>

        <div className="p-6 bg-card rounded-lg border">
          <h3 className="text-xl font-medium mb-2">Our Team</h3>
          <p className="text-muted-foreground">
            Information about your team members and their expertise.
          </p>
        </div>

        <div className="p-6 bg-card rounded-lg border">
          <h3 className="text-xl font-medium mb-2">Contact Us</h3>
          <p className="text-muted-foreground">
            How users can get in touch with your organization.
          </p>
        </div>
      </div>
    </div>
  );
}
