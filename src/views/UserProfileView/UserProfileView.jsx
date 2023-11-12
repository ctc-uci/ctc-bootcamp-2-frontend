import { useEffect, useState } from "react";
import UserProfile from "../../components/UserProfile/UserProfile"
import { useParams } from "react-router";
import { DetectiveBackend, sanitizeString } from "../../utils/utils";

const UserProfileView = () => {

  const [ user, setUser ] = useState(null);
  const { userId } = useParams();

  useEffect(()=>{
    const fetchUsers = async ()=>{
      if(user) setUser(null);
      try {
        const userResults = await DetectiveBackend.get(`/user/${sanitizeString(userId)}`);
        if(userResults.data && userResults.data[0]){
          const userData = userResults.data[0];
          setUser({profileImageURL: userData.url, ...userData});
        }
      } catch(e){
        console.log(e);
      }
    };
    fetchUsers();
  }, [userId]);

  return user? <UserProfile userId={userId} {...user} /> : <p>Loading...</p>
}

export default UserProfileView;
