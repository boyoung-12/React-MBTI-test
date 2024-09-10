import { useUserContext } from "../context/UserContext";

const Profile = () => {
  const { user, setUser } = useUserContext();
  return <div>Profile</div>;
};

export default Profile;
