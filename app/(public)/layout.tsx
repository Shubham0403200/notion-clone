const PublicLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full w-full dark:bg-[#141414]">
      {children}
    </div>
   );
}
 
export default PublicLayout;