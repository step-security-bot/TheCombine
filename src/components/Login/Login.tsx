import { Help } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import { BannerType } from "api/models";
import { getBannerText } from "backend";
import router from "browserRouter";
import { LoadingButton } from "components/Buttons";
import Captcha from "components/Login/Captcha";
import { asyncLogIn } from "components/Login/Redux/LoginActions";
import { LoginStatus } from "components/Login/Redux/LoginReduxTypes";
import { reset } from "rootActions";
import { StoreState } from "types";
import { useAppDispatch, useAppSelector } from "types/hooks";
import { Path } from "types/path";
import { RuntimeConfig } from "types/runtimeConfig";
import theme from "types/theme";
import { openUserGuide } from "utilities/pathUtilities";

export enum LoginId {
  ButtonLogIn = "login-log-in-button",
  ButtonSignUp = "login-sign-up-button",
  ButtonUserGuide = "login-user-guide-button",
  FieldPassword = "login-password-field",
  FieldUsername = "login-username-field",
  Form = "login-form",
}

/** The Login page (also doubles as a Logout page) */
export default function Login(): ReactElement {
  const dispatch = useAppDispatch();

  const status = useAppSelector(
    (state: StoreState) => state.loginState.loginStatus
  );

  const [banner, setBanner] = useState("");
  const [isVerified, setIsVerified] = useState(
    !RuntimeConfig.getInstance().captchaRequired()
  );
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(reset());
    getBannerText(BannerType.Login).then(setBanner);
  }, [dispatch]);

  const handleUpdatePassword = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => setPassword(e.target.value);

  const handleUpdateUsername = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => setUsername(e.target.value);

  const logIn = (e: FormEvent): void => {
    e.preventDefault();
    const p = password.trim();
    const u = username.trim();
    setPasswordError(!p);
    setUsernameError(!u);
    if (p && u) {
      dispatch(asyncLogIn(u, p));
    }
  };

  const defaultTextFieldProps: TextFieldProps = {
    inputProps: { maxLength: 100 },
    margin: "normal",
    required: true,
    style: { width: "100%" },
    variant: "outlined",
  };

  return (
    <Grid container justifyContent="center">
      <Card style={{ width: 450 }}>
        <form id={LoginId.Form} onSubmit={logIn}>
          <CardContent>
            {/* Title */}
            <Typography variant="h5" align="center" gutterBottom>
              {t("login.title")}
            </Typography>

            {/* Username field */}
            <TextField
              {...defaultTextFieldProps}
              autoComplete="username"
              autoFocus
              error={usernameError}
              helperText={usernameError ? t("login.required") : undefined}
              id={LoginId.FieldUsername}
              label={t("login.username")}
              onChange={handleUpdateUsername}
              value={username}
            />

            {/* Password field */}
            <TextField
              {...defaultTextFieldProps}
              autoComplete="current-password"
              error={passwordError}
              helperText={passwordError ? t("login.required") : undefined}
              id={LoginId.FieldPassword}
              label={t("login.password")}
              onChange={handleUpdatePassword}
              type="password"
              value={password}
            />

            {/* "Forgot password?" link to reset password */}
            {RuntimeConfig.getInstance().emailServicesEnabled() && (
              <Typography>
                <Link
                  href={"#"}
                  onClick={() => router.navigate(Path.PwRequest)}
                  underline="hover"
                  variant="subtitle2"
                >
                  {t("login.forgotPassword")}
                </Link>
              </Typography>
            )}

            {/* "Failed to log in" */}
            {status === LoginStatus.Failure && (
              <Typography
                style={{ color: "red", marginBottom: 24, marginTop: 24 }}
                variant="body2"
              >
                {t("login.failed")}
              </Typography>
            )}

            <Captcha
              onExpire={() => setIsVerified(false)}
              onSuccess={() => setIsVerified(true)}
            />

            {/* User Guide, Sign Up, and Log In buttons */}
            <Grid container justifyContent="flex-end" spacing={2}>
              <Grid item xs={4} sm={6}>
                <Button id={LoginId.ButtonUserGuide} onClick={openUserGuide}>
                  <Help />
                </Button>
              </Grid>

              <Grid item xs={4} sm={3}>
                <Button
                  id={LoginId.ButtonSignUp}
                  onClick={() => router.navigate(Path.Signup)}
                  variant="outlined"
                >
                  {t("login.signUp")}
                </Button>
              </Grid>

              <Grid item xs={4} sm={3}>
                <LoadingButton
                  buttonProps={{
                    color: "primary",
                    id: LoginId.ButtonLogIn,
                    type: "submit",
                  }}
                  disabled={!isVerified}
                  loading={status === LoginStatus.InProgress}
                >
                  {t("login.login")}
                </LoadingButton>
              </Grid>
            </Grid>

            {/* Login announcement banner */}
            {!!banner && (
              <Typography
                style={{
                  marginTop: theme.spacing(2),
                  padding: theme.spacing(1),
                }}
              >
                {banner}
              </Typography>
            )}
          </CardContent>
        </form>
      </Card>
    </Grid>
  );
}