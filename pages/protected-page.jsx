import withAuth from '@/app/componentsmui/withAuth';
import { WhatsApp } from '@mui/icons-material';

const ProtectedPage = () => {
  return (
    <div>
      <WhatsApp />
    </div>
  );
};

export default withAuth(ProtectedPage);
//  example for protected page
// if withAuth contain then u can chnage route and see this component
//  otherwise not this withAuth compoenent auto send to signin page
