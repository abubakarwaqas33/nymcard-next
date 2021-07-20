import { camelCase, snakeCase } from 'lodash'
import { Method, Resource } from 'rest-hooks'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deeplyApplyKeyTransform(request: any, transform: (key: string) => string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: { [key: string]: unknown } | any = Array.isArray(request) ? [] : {}
  Object.keys(request).forEach(key => {
    if (request[key] != null && typeof request[key] === 'object') {
      response[transform(key)] = deeplyApplyKeyTransform(request[key], transform)
    } else {
      response[transform(key)] = request[key]
    }
  })
  return response
}

abstract class Entity extends Resource {
  readonly id: number = 0

  static async fetch<T extends typeof Resource>(
    this: T,
    method: Method = 'get',
    url: string,
    body?: Readonly<unknown>,
  ): Promise<unknown> {
    if (body) body = deeplyApplyKeyTransform(body, snakeCase)
    const jsonResponse = await super.fetch(method, `https://nymcard.com${url}`, body)
    return deeplyApplyKeyTransform(jsonResponse, camelCase)
  }

  pk(): string | undefined {
    return `${this.id}`
  }
}

export { Entity }
