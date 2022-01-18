type Handler<T> = (host: string, path: string, params: Record<string, string | true>) => T

export const handleUrl = <T>(
  url: string | undefined | null,
  handlers: Record<string, Handler<T>>
): T | undefined => {
  if (!url) {
    return undefined
  }
  const parsedUrl = new URL(url)

  const scheme = parsedUrl.protocol.substring(0, parsedUrl.protocol.length - 1)
  const host = parsedUrl.host
  const path = parsedUrl.pathname.substring(1)

  const handler = handlers[scheme]
  if (!handler) {
    return undefined
  }

  const params = {} as Record<string, string | true>

  parsedUrl.searchParams.forEach((value, key) => {
    params[key] = value || true
  })

  return handler(host, path, params)
}
