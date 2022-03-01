import { isOtpValid } from '../is-opt-valid'

describe('is-otp-valid', () => {
  it('should fail', () => {
    expect(isOtpValid('john@doe')).toBe(false)
    expect(isOtpValid('12345')).toBe(false)
    expect(isOtpValid('1234567')).toBe(false)
    expect(isOtpValid('')).toBe(false)
  })

  it('should pass', () => {
    expect(isOtpValid('123456')).toBe(true)
    expect(isOtpValid('000000')).toBe(true)
  })
})
