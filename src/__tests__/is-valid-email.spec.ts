import { isEmailValid } from '../is-email-valid'

describe('is-email-valid', () => {
  it('should fail', () => {
    expect(isEmailValid('john@doe')).toBe(false)
    expect(isEmailValid('john@d.c')).toBe(false)
    expect(isEmailValid('@doe.com')).toBe(false)
  });
  it('should pass', () => {
    expect(isEmailValid('john@doe.com')).toBe(true)
    expect(isEmailValid('john@d.co')).toBe(true)
  });
})