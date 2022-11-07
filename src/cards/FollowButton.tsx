import { Button } from "@mui/material";
import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export class FollowButton extends React.Component<{}, { followed: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      followed: false,
    };
  }

  render() {
    return (
      <Button
        variant="contained"
        style={{ borderRadius: 20 }}
        size="small"
        onClick={() => this.setState({ followed: !this.state.followed })}
        endIcon={
          <PersonAddIcon color={this.state.followed ? "warning" : "error"} />
        }
      >
        {this.state.followed ? "Unfollow" : "Follow"}
      </Button>
    );
  }
}
