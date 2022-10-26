import { Container, Stack } from "@mui/material";
import Logo from "../loginPage/logo_transparent.png";
import { CustomTextField } from "./CustomTextField";

export const SignUp = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <img src={Logo} alt="logo" />
          <Stack direction="row" spacing={1} justifyContent="space-evenly">
            <CustomTextField
              label="First Name"
              variant={"filled"}
              onChange={(e) =>
                console.log("logging current value", e.target.value)
              }
            />
            <CustomTextField
              label="Last Name"
              variant={"filled"}
              onChange={(e) =>
                console.log("logging current value", e.target.value)
              }
            />
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-evenly"
            style={{ marginBottom: 10 }}
          >
            <CustomTextField
              label="City"
              style={{ marginTop: 5, marginBottom: 5 }}
              variant={"filled"}
              onChange={(e) =>
                console.log("logging current value", e.target.value)
              }
            />
            <CustomTextField
              label="Country"
              style={{ marginTop: 5, marginBottom: 5 }}
              variant={"filled"}
              onChange={(e) =>
                console.log("logging current value", e.target.value)
              }
            />
          </Stack>
          <CustomTextField
            label="Email"
            style={{ marginTop: 5, marginBottom: 5 }}
            variant={"filled"}
            onChange={(e) =>
              console.log("logging current value", e.target.value)
            }
          />
          <CustomTextField
            label="Username"
            style={{ marginTop: 5, marginBottom: 5 }}
            variant={"filled"}
            onChange={(e) =>
              console.log("logging current value", e.target.value)
            }
          />
          <CustomTextField
            label="Password"
            style={{ marginTop: 5, marginBottom: 5 }}
            variant={"filled"}
            onChange={(e) =>
              console.log("logging current value", e.target.value)
            }
          />
        </Stack>
      </Container>
    </div>
  );
};
