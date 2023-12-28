'use client'

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import React from "react";

export default function GoogleCaptchaWrapper({ children }) {
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

  return <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>{children}</GoogleReCaptchaProvider>;
}