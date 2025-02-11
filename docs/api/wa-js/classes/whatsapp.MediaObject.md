---
id: "whatsapp.MediaObject"
title: "Class: MediaObject"
sidebar_label: "MediaObject"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).MediaObject

**`Whatsapp`**

21009

**`Whatsapp`**

721009 >= 2.2222.8

## Constructors

### constructor

• **new MediaObject**()

## Properties

### contentInfo

• **contentInfo**: `any`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L34)

___

### downloadPromise

• **downloadPromise**: ``null`` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null``\>

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L29)

___

### downloadStage

• **downloadStage**: `any`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L25)

___

### entries

• **entries**: `any`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L24)

___

### filehash

• **filehash**: `any`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L33)

___

### mediaBlob

• `Optional` **mediaBlob**: [`OpaqueData`](whatsapp.OpaqueData.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L31)

___

### parsedVcards

• **parsedVcards**: `any`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L36)

___

### progressiveStage

• **progressiveStage**: `any`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L35)

___

### size

• **size**: `any`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L32)

___

### type

• **type**: `string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L37)

___

### uploadPromise

• **uploadPromise**: ``null`` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null``\>

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L30)

___

### uploadStage

• **uploadStage**: `any`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L26)

___

### userDownloadAttemptCount

• **userDownloadAttemptCount**: `number`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L28)

___

### userUploadAttemptCount

• **userUploadAttemptCount**: `number`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L27)

## Methods

### addMsg

▸ **addMsg**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L44)

___

### addSticker

▸ **addSticker**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:55](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L55)

___

### addStickerPack

▸ **addStickerPack**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L54)

___

### associatedMsgs

▸ **associatedMsgs**(): `any`[]

#### Returns

`any`[]

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L47)

___

### associatedStickerPacks

▸ **associatedStickerPacks**(): `any`[]

#### Returns

`any`[]

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L61)

___

### associatedStickers

▸ **associatedStickers**(): `any`[]

#### Returns

`any`[]

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L60)

___

### clearBlob

▸ **clearBlob**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L40)

___

### consolidate

▸ **consolidate**(`e`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L39)

___

### contentFields

▸ **contentFields**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L41)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:50](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L50)

___

### getPendingProcess

▸ **getPendingProcess**(`e`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:52](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L52)

___

### hasAssociatedMsgsOrStickers

▸ **hasAssociatedMsgsOrStickers**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:46](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L46)

___

### hasAssociatedStickerPacks

▸ **hasAssociatedStickerPacks**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L59)

___

### hasAssociatedStickers

▸ **hasAssociatedStickers**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:58](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L58)

___

### msgProps

▸ **msgProps**(`e`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L49)

___

### notifyMsgsAsync

▸ **notifyMsgsAsync**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:43](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L43)

___

### removeMsg

▸ **removeMsg**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L45)

___

### removeSticker

▸ **removeSticker**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:56](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L56)

___

### removeStickerPack

▸ **removeStickerPack**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:57](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L57)

___

### resolveWhenConsolidated

▸ **resolveWhenConsolidated**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L42)

___

### rmr

▸ **rmr**(`e`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:48](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L48)

___

### runProcessIfNotRunBefore

▸ **runProcessIfNotRunBefore**(`e`, `t`, `r`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |
| `t` | `any` |
| `r` | `any` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L51)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `contentInfo` | `any` |
| `downloadStage` | `string` |
| `filehash` | `string` |
| `mediaBlob` | `any` |
| `size` | `number` |
| `type` | `string` |
| `uploadStage` | `string` |

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L62)

___

### videoStreamingInfo

▸ **videoStreamingInfo**(`e`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaObject.ts:53](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaObject.ts#L53)
