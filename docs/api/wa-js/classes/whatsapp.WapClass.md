---
id: "whatsapp.WapClass"
title: "Class: WapClass"
sidebar_label: "WapClass"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).WapClass

**`Whatsapp`**

86875

**`Whatsapp`**

56891 >= 2.2212.8

**`Whatsapp`**

656891 >= 2.2222.8

## Constructors

### constructor

• **new WapClass**()

## Methods

### queryDisappearingMode

▸ **queryDisappearingMode**(`contactId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `duration`: `number` ; `settingTimestamp`: `number` ; `status`: ``200``  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | [`Wid`](whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `duration`: `number` ; `settingTimestamp`: `number` ; `status`: ``200``  }\>

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wap.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wap.ts#L30)

___

### queryExist

▸ **queryExist**(`contactId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `biz?`: ``true`` ; `jid`: [`Wid`](whatsapp.Wid.md) ; `status`: ``200``  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `biz?`: ``true`` ; `jid`: [`Wid`](whatsapp.Wid.md) ; `status`: ``200``  }\>

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wap.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wap.ts#L25)
