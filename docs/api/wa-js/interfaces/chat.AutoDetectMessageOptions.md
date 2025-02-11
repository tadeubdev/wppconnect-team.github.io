---
id: "chat.AutoDetectMessageOptions"
title: "Interface: AutoDetectMessageOptions"
sidebar_label: "AutoDetectMessageOptions"
custom_edit_url: null
---

[chat](../namespaces/chat.md).AutoDetectMessageOptions

## Hierarchy

- [`FileMessageOptions`](chat.FileMessageOptions.md)

  ↳ **`AutoDetectMessageOptions`**

## Properties

### caption

• `Optional` **caption**: `string`

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[caption](chat.FileMessageOptions.md#caption)

#### Defined in

[packages/wa-js/src/chat/functions/sendFileMessage.ts:43](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendFileMessage.ts#L43)

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

[FileMessageOptions](chat.FileMessageOptions.md).[createChat](chat.FileMessageOptions.md#createchat)

#### Defined in

[packages/wa-js/src/chat/types.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L33)

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

[FileMessageOptions](chat.FileMessageOptions.md).[detectMentioned](chat.FileMessageOptions.md#detectmentioned)

#### Defined in

[packages/wa-js/src/chat/types.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L47)

___

### filename

• `Optional` **filename**: `string`

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[filename](chat.FileMessageOptions.md#filename)

#### Defined in

[packages/wa-js/src/chat/functions/sendFileMessage.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendFileMessage.ts#L45)

___

### footer

• `Optional` **footer**: `string`

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[footer](chat.FileMessageOptions.md#footer)

#### Defined in

[packages/wa-js/src/chat/functions/sendFileMessage.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendFileMessage.ts#L44)

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

[FileMessageOptions](chat.FileMessageOptions.md).[markIsRead](chat.FileMessageOptions.md#markisread)

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

[FileMessageOptions](chat.FileMessageOptions.md).[mentionedList](chat.FileMessageOptions.md#mentionedlist)

#### Defined in

[packages/wa-js/src/chat/types.ts:79](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L79)

___

### messageId

• `Optional` **messageId**: `string` \| [`MsgKey`](../classes/whatsapp.MsgKey.md)

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[messageId](chat.FileMessageOptions.md#messageid)

#### Defined in

[packages/wa-js/src/chat/types.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L66)

___

### mimetype

• `Optional` **mimetype**: `string`

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[mimetype](chat.FileMessageOptions.md#mimetype)

#### Defined in

[packages/wa-js/src/chat/functions/sendFileMessage.ts:46](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendFileMessage.ts#L46)

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

[FileMessageOptions](chat.FileMessageOptions.md).[quotedMsg](chat.FileMessageOptions.md#quotedmsg)

#### Defined in

[packages/wa-js/src/chat/types.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L91)

___

### type

• **type**: ``"auto-detect"``

#### Overrides

[FileMessageOptions](chat.FileMessageOptions.md).[type](chat.FileMessageOptions.md#type)

#### Defined in

[packages/wa-js/src/chat/functions/sendFileMessage.ts:50](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendFileMessage.ts#L50)

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

[FileMessageOptions](chat.FileMessageOptions.md).[waitForAck](chat.FileMessageOptions.md#waitforack)

#### Defined in

[packages/wa-js/src/chat/types.ts:105](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L105)
