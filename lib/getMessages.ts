// lib/getMessages.ts
import en from '../messages/en.json'


const messagesMap: Record<string, any> = { en}

export async function getMessages(locale: string) {
  return messagesMap[locale] || messagesMap['en']
}
