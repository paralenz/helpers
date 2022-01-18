import { handleUrl } from '../handle-url'

describe('handleUrl', () => {
  it('should return match on first scheme', () => {
    const result = handleUrl('s3://bucket/file.zip', {
      s3: () => 'Woo hoo'
    })

    expect(result).toBe('Woo hoo')
  })

  it('should return match on second scheme', () => {
    const result = handleUrl('s3://bucket/file.zip', {
      http: () => 'Booo',
      s3: () => 'Woo hoo'
    })

    expect(result).toBe('Woo hoo')
  })


  it('should use pass args to match', () => {
    const result = handleUrl('s3://bucket/file.zip', {
      s3: (bucket, key) => [bucket, key]
    })

    expect(result).toEqual(['bucket', 'file.zip'])
  })

  it('should handle empty url', () => {
    const result = handleUrl(undefined, {
      s3: (bucket, key) => [bucket, key]
    })

    expect(result).toEqual(undefined)
  })

  it('should pass search params to handler', () => {
    const result = handleUrl('s3://some-bucket/key?foo=bar&baz', {
      s3: (_bucket, __key, params) => params
    })

    expect(result).toEqual({
      foo: 'bar',
      baz: true
    })
  })
})