import { Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

// export const FollowButton = (props: any) => {
//   const [followed, setFollowed] = useState(props.following);

//   return (
//     <Button
//       variant="contained"
//       style={{ borderRadius: 20 }}
//       size="small"
//       onClick={() => setFollowed(!followed)}
//       // endIcon={<PersonAddIcon color={followed ? "warning" : "error"} />}
//       endIcon={
//         followed ? (
//           <PersonRemoveIcon color={"error"} />
//         ) : (
//           <PersonAddIcon color={"error"} />
//         )
//       }
//     >
//       {followed ? <div>Unfollow</div> : <div>Follow</div>}
//     </Button>
//   );
// };

// export const FollowButtonMobile = (props: any) => {
//   const [followed, setFollowed] = useState(props.following);

//   return (
//     <IconButton onClick={() => setFollowed(!followed)}>
//       {followed ? (
//         <PersonRemoveIcon color={"primary"} />
//       ) : (
//         <PersonAddIcon color={"primary"} />
//       )}
//     </IconButton>
//   );
// };
export const FollowButton = (props: { onClick: () => void }) => {
  return (
    <Button
      variant="contained"
      style={{ borderRadius: 20 }}
      size="small"
      endIcon={<PersonAddIcon color={0 ? "warning" : "error"} />}
    >
      {0 ? "follow" : "Following"}
    </Button>
  );
};
