
import Sidebar from "./Sidebar";

import DonationList from "./DonationList";
import Wishlist from "./Wishlist";
import Preferences from "./Preferences";
import PaymentHistory from "./PaymentHistory";

const DonorProfile = () => {
  return (
    <div className="flex p-6 m-10 bg-gray-200">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-3/4 space-y-6">
       
      

        {/* Recent Donations */}
        <DonationList />

        {/* Wishlist */}
        <Wishlist />

        {/* Preferences */}
        <Preferences />

        {/* Payment History */}
        <PaymentHistory />
      </div>
    </div>
  );
};

export default DonorProfile;
