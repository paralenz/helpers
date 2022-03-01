export const isOtpValid = (otp: string | number) => `${otp}`.length === 6 && `${otp}`.match(/^[0-9]+$/) !== null
