---
id: "chat.ListMessageOptions"
title: "Interface: ListMessageOptions"
sidebar_label: "ListMessageOptions"
custom_edit_url: null
---

[chat](../namespaces/chat.md).ListMessageOptions

## Hierarchy

- [`SendMessageOptions`](chat.SendMessageOptions.md)

  ↳ **`ListMessageOptions`**

## Properties

### buttonText

• **buttonText**: `string`

#### Defined in

[packages/wa-js/src/chat/functions/sendListMessage.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendListMessage.ts#L33)

___

### createChat

• `Optional` **createChat**: `boolean`

Create a new chat to a new contact

**`Default`**

false

**`Example`**

```javascript
WPP.chat.sendTextMessage('[number]@c.us', 'Hello new contact', {
  createChat: true
});
```

#### Inherited from

[SendMessageOptions](chat.SendMessageOptions.md).[createChat](chat.SendMessageOptions.md#createchat)

#### Defined in

[packages/wa-js/src/chat/types.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L33)

___

### description

• **description**: `string`

#### Defined in

[packages/wa-js/src/chat/functions/sendListMessage.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendListMessage.ts#L34)

___

### detectMentioned

• `Optional` **detectMentioned**: `boolean`

Automatic detect and add the mentioned contacts with @[number]

**`Default`**

true

**`Example`**

```javascript
WPP.chat.sendTextMessage('[number]@c.us', 'Hello @123 and @456', {
  detectMentioned: true
});
```

#### Inherited from

[SendMessageOptions](chat.SendMessageOptions.md).[detectMentioned](chat.SendMessageOptions.md#detectmentioned)

#### Defined in

[packages/wa-js/src/chat/types.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L47)

___

### footer

• `Optional` **footer**: `string`

#### Defined in

[packages/wa-js/src/chat/functions/sendListMessage.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendListMessage.ts#L36)

___

### markIsRead

• `Optional` **markIsRead**: `boolean`

Automatically mark chat is read after send a message

**`Default`**

true

**`Example`**

```javascript
WPP.chat.sendTextMessage('[number]@c.us', 'Replying your message', {
  markIsRead: true
});
```

#### Inherited from

[SendMessageOptions](chat.SendMessageOptions.md).[markIsRead](chat.SendMessageOptions.md#markisread)

#### Defined in

[packages/wa-js/src/chat/types.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L61)

___

### mentionedList

• `Optional` **mentionedList**: (`string` \| [`Wid`](../classes/whatsapp.Wid.md))[]

Define a mentioned list for a message
This option work better with a message with mension

**`Example`**

```javascript
WPP.chat.sendTextMessage('[number]@c.us', 'Hello @123 and @456', {
  mentionedList: ['123@c.us', '456@c.us']
})
```

#### Inherited from

[SendMessageOptions](chat.SendMessageOptions.md).[mentionedList](chat.SendMessageOptions.md#mentionedlist)

#### Defined in

[packages/wa-js/src/chat/types.ts:79](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L79)

___

### messageId

• `Optional` **messageId**: `string` \| [`MsgKey`](../classes/whatsapp.MsgKey.md)

#### Inherited from

[SendMessageOptions](chat.SendMessageOptions.md).[messageId](chat.SendMessageOptions.md#messageid)

#### Defined in

[packages/wa-js/src/chat/types.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L66)

___

### quotedMsg

• `Optional` **quotedMsg**: `string` \| [`MsgModel`](../classes/whatsapp.MsgModel.md) \| [`MsgKey`](../classes/whatsapp.MsgKey.md)

Quote a message, like a reply message

**`Example`**

```javascript
WPP.chat.sendTextMessage('[number]@c.us', 'This is a reply', {
  quotedMsg: 'true_[number]@c.us_3EB0F435D95D32C4C638'
})
```

#### Inherited from

[SendMessageOptions](chat.SendMessageOptions.md).[quotedMsg](chat.SendMessageOptions.md#quotedmsg)

#### Defined in

[packages/wa-js/src/chat/types.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L91)

___

### sections

• **sections**: { `rows`: { `description`: `string` ; `rowId`: `string` ; `title`: `string`  }[] ; `title`: `string`  }[]

#### Defined in

[packages/wa-js/src/chat/functions/sendListMessage.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendListMessage.ts#L37)

___

### title

• `Optional` **title**: `string`

#### Defined in

[packages/wa-js/src/chat/functions/sendListMessage.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendListMessage.ts#L35)

___

### waitForAck

• `Optional` **waitForAck**: `boolean`

Wait for send while the ACK of message is SENT(1)

**`Default`**

true

**`Example`**

```javascript
WPP.chat.sendTextMessage('[number]@c.us', 'Wait for sent', {
  waitForAck: true
})
```

#### Inherited from

[SendMessageOptions](chat.SendMessageOptions.md).[waitForAck](chat.SendMessageOptions.md#waitforack)

#### Defined in

[packages/wa-js/src/chat/types.ts:105](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L105)
