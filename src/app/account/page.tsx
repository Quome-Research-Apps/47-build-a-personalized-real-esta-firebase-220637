import Header from "@/components/common/header";
import SearchFilters from "@/components/search/search-filters";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AccountPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-6">Account Settings</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Your Saved Search</CardTitle>
              <CardDescription>
                This is the criteria HomeWatch AI uses to find your perfect home. 
                We'll notify you when a new property matches these settings.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-md">
                <SearchFilters />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
