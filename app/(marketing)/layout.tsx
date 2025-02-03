import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full w-full no-scrollbar dark:bg-[#141414]">
      <Navbar />
      <main className="h-full pt-40 no-scrollbar">
        {children}
      </main>
    </div>
   );
}
 
export default MarketingLayout;