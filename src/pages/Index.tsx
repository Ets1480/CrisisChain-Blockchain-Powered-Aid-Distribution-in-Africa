
import { Layout } from "@/components/layout/Layout";
import { StatCard } from "@/components/dashboard/StatCard";
import { AidDistributionMap } from "@/components/dashboard/AidDistributionMap";
import { DistributionChart } from "@/components/dashboard/DistributionChart";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { Button } from "@/components/ui/button";
import { 
  Users, ShieldCheck, CreditCard, BarChart4, Fingerprint, 
  DownloadCloud, ListChecks, ArrowRight 
} from "lucide-react";

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-chai-darkblue">Dashboard</h1>
          <p className="text-chai-gray mt-1">Overview of aid distribution and impact</p>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <Button variant="outline" className="flex items-center">
            <DownloadCloud className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button className="flex items-center bg-chai-blue hover:bg-chai-darkblue">
            <ListChecks className="h-4 w-4 mr-2" />
            Manage Distributions
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Total Recipients" 
          value="32,450" 
          description="Verified individuals" 
          icon={Users}
          trend={{ value: 12, positive: true }}
        />
        <StatCard 
          title="Identity Verifications" 
          value="28,389" 
          description="87.5% success rate" 
          icon={ShieldCheck}
          trend={{ value: 5, positive: true }}
        />
        <StatCard 
          title="Aid Tokens Distributed" 
          value="238,450" 
          description="Across 18 regions" 
          icon={CreditCard}
          trend={{ value: 8, positive: true }}
        />
        <StatCard 
          title="Success Rate" 
          value="96.3%" 
          description="Token utilization" 
          icon={BarChart4}
          trend={{ value: 2, positive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <AidDistributionMap />
        <DistributionChart />
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-chai-darkblue">Recent Activity</h2>
        <RecentTransactions />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-chai-blue to-chai-darkblue rounded-lg p-6 text-white">
          <Fingerprint className="h-10 w-10 mb-4" />
          <h3 className="text-xl font-bold mb-2">Crisis ID Verification</h3>
          <p className="mb-4 opacity-90">Secure, biometric-based identity verification for displaced individuals.</p>
          <Button variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20 text-white">
            <span>Verify Identity</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
        
        <div className="bg-gradient-to-br from-chai-green to-chai-green/80 rounded-lg p-6 text-white">
          <CreditCard className="h-10 w-10 mb-4" />
          <h3 className="text-xl font-bold mb-2">Aid Token Distribution</h3>
          <p className="mb-4 opacity-90">Stablecoin-like tokens for essential needs distribution with smart contracts.</p>
          <Button variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20 text-white">
            <span>Distribute Aid</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
        
        <div className="bg-gradient-to-br from-chai-orange to-chai-orange/80 rounded-lg p-6 text-white">
          <Users className="h-10 w-10 mb-4" />
          <h3 className="text-xl font-bold mb-2">Community Verification</h3>
          <p className="mb-4 opacity-90">Leveraging community leaders and witnesses for DAO-based identity verification.</p>
          <Button variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20 text-white">
            <span>Join Verification</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
      
      <div className="bg-chai-lightgray rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-chai-darkblue">Polygon Network Integration</h2>
            <p className="text-chai-gray max-w-2xl mt-1">
              CrisisChai uses Polygon's low-cost, eco-friendly blockchain to securely distribute aid in humanitarian crises.
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">Read Docs</Button>
            <Button className="bg-chai-blue hover:bg-chai-darkblue">Connect Wallet</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
