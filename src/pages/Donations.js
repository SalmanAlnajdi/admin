import { useQuery } from "@tanstack/react-query";
import { getAllDonations } from "../api/dontaions";
import DonationItem from "../Components/DontationItem";

const Donations = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: ["Donations", id._id],
    queryFn: () => getAllDonations(id),
  });
  const donationList = data?.map((donation) => (
    <DonationItem donationItemI={donation} id={donation._id} />
  ));

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div className="bg-green-400 w-full h-100% flex flex-wrap gap-3 justify-center items-center p-3">
      <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
        {donationList}
      </div>
    </div>
  );
};

export default Donations;
