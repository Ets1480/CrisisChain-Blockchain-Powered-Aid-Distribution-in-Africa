
import { 
  CreditCard, Users, Search, Filter, Plus, 
  Download, ArrowUpDown, Layers, Clock, Settings 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AidTokenCard } from "@/components/distribution/AidTokenCard";
import { ProofOfAidCard } from "@/components/proof/ProofOfAidCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for aid tokens
const aidTokens = [
  {
    id: "tk-1a2b3c",
    recipientId: "0x7a2...9f3b",
    amount: 100,
    issuer: "Global Relief NGO",
    issuedDate: "Apr 2, 2025",
    expiryDate: "Jul 2, 2025",
    restrictions: ["Food", "Water", "Medicine"],
    status: "active" as const,
  },
  {
    id: "tk-4d5e6f",
    recipientId: "0x3c8...2d4e",
    amount: 75,
    issuer: "Humanitarian Aid Council",
    issuedDate: "Mar 28, 2025",
    expiryDate: "Jun 28, 2025",
    restrictions: ["Medical Supplies", "Shelter"],
    status: "active" as const,
  },
  {
    id: "tk-7g8h9i",
    recipientId: "0x5f1...8c9d",
    amount: 50,
    issuer: "Crisis Response Team",
    issuedDate: "Mar 25, 2025",
    expiryDate: "Jun 25, 2025",
    restrictions: ["Food", "Water"],
    status: "locked" as const,
  },
  {
    id: "tk-0j1k2l",
    recipientId: "0x2e6...7b2c",
    amount: 125,
    issuer: "Africa Development Fund",
    issuedDate: "Mar 15, 2025",
    expiryDate: "Jun 15, 2025",
    restrictions: ["Food", "Water", "Medicine", "Education"],
    status: "active" as const,
  },
];

// Mock data for proof of aid
const proofOfAid = [
  {
    id: "poa-1a2b3c",
    recipientId: "0x7a2...9f3b",
    recipientName: "Ekon Nkosi",
    aidType: "Food Aid",
    amount: 25,
    location: "Nairobi, Kenya",
    date: "Apr 5, 2025",
    time: "14:30 EAT",
    distributorName: "Kenyan Red Cross",
    status: "verified" as const,
    ipfsHash: "QmT8JnRdXZNc3zQ6uCJPEE1bja5KgbMxVFaTKDcxHzXxvK",
  },
  {
    id: "poa-4d5e6f",
    recipientId: "0x3c8...2d4e",
    recipientName: "Amara Okafor",
    aidType: "Medical Supplies",
    amount: 15,
    location: "Lagos, Nigeria",
    date: "Apr 3, 2025",
    time: "10:15 WAT",
    distributorName: "Nigeria Health Initiative",
    status: "verified" as const,
    ipfsHash: "QmXTnj8s1rZzbxDDPA2rG7aYnQ2PDR5qkJj5SBk6qyZ2wf",
  },
];

export default function Distribution() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-chai-darkblue">Aid Distribution</h1>
          <p className="text-chai-gray mt-1">Manage and track aid token distribution to recipients</p>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <Button variant="outline" className="flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="flex items-center bg-chai-blue hover:bg-chai-darkblue">
            <Plus className="h-4 w-4 mr-2" />
            New Distribution
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-chai-blue" />
              Active Tokens
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">28,320</div>
            <p className="text-sm text-chai-gray">Tokens in circulation</p>
            <div className="flex items-center mt-2 text-chai-green text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M7 17l5-5 5 5M7 7l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +12.5% from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-chai-green" />
              Recipients Served
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">18,450</div>
            <p className="text-sm text-chai-gray">Active aid recipients</p>
            <div className="flex items-center mt-2 text-chai-green text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M7 17l5-5 5 5M7 7l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +8.2% from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <Layers className="h-5 w-5 mr-2 text-chai-orange" />
              Total Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">238,450</div>
            <p className="text-sm text-chai-gray">AID tokens distributed</p>
            <div className="mt-2 text-chai-gray text-sm">
              Across 18 African regions
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mb-8">
        <Tabs defaultValue="aid-tokens">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="aid-tokens" className="flex items-center">
              <CreditCard className="h-4 w-4 mr-2" />
              <span>Aid Tokens</span>
            </TabsTrigger>
            <TabsTrigger value="proof-of-aid" className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Proof of Aid</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="aid-tokens">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-chai-darkblue mb-2 sm:mb-0">Active Aid Tokens</h2>
              <div className="flex space-x-2 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search tokens..." 
                    className="w-full pl-8"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {aidTokens.map((token) => (
                <AidTokenCard key={token.id} token={token} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="proof-of-aid">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-chai-darkblue mb-2 sm:mb-0">Recent Proof of Aid</h2>
              <div className="flex space-x-2 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search records..." 
                    className="w-full pl-8"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {proofOfAid.map((proof) => (
                <ProofOfAidCard key={proof.id} proofData={proof} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Card className="bg-gradient-to-r from-chai-lightblue/20 to-chai-blue/10 border-chai-lightblue/30">
        <CardHeader>
          <CardTitle>Smart Contract Rules</CardTitle>
          <CardDescription>Token usage and distribution rules governed by smart contracts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/80 rounded-lg p-4 shadow-sm">
              <h3 className="font-bold mb-2">Time Locking</h3>
              <p className="text-sm text-chai-gray mb-3">Tokens are time-locked for 90 days with weekly distribution schedule.</p>
              <div className="flex justify-between text-xs text-chai-gray">
                <span>Status:</span>
                <span className="text-chai-green font-medium">Active</span>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 shadow-sm">
              <h3 className="font-bold mb-2">Usage Restrictions</h3>
              <p className="text-sm text-chai-gray mb-3">Tokens can only be spent on approved essential items and services.</p>
              <div className="flex justify-between text-xs text-chai-gray">
                <span>Status:</span>
                <span className="text-chai-green font-medium">Active</span>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 shadow-sm">
              <h3 className="font-bold mb-2">Vendor Verification</h3>
              <p className="text-sm text-chai-gray mb-3">Only verified vendors can receive and redeem aid tokens from recipients.</p>
              <div className="flex justify-between text-xs text-chai-gray">
                <span>Status:</span>
                <span className="text-chai-green font-medium">Active</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="outline" className="text-chai-blue border-chai-blue/30">
              <Settings className="h-4 w-4 mr-2" />
              Manage Contract Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
