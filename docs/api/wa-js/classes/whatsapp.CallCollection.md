---
id: "whatsapp.CallCollection"
title: "Class: CallCollection"
sidebar_label: "CallCollection"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).CallCollection

**`Whatsapp`**

60868

**`Whatsapp`**

31218 >= 2.2204.13

**`Whatsapp`**

160868 >= 2.2222.8

## Hierarchy

- [`Collection`](whatsapp.Collection.md)<[`CallModel`](whatsapp.CallModel.md)\>

  ↳ **`CallCollection`**

## Constructors

### constructor

• **new CallCollection**(`e?`, `t?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `Object` |
| `t.parent` | `any` |

#### Inherited from

[Collection](whatsapp.Collection.md).[constructor](whatsapp.Collection.md#constructor)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:55](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L55)

## Properties

### findFirst

• **findFirst**: <S\>(`predicate`: (`this`: `void`, `value`: [`CallModel`](whatsapp.CallModel.md), `index`: `number`, `obj`: [`CallModel`](whatsapp.CallModel.md)[]) => value is S, `thisArg?`: `any`) => `undefined` \| `S`(`predicate`: (`value`: [`CallModel`](whatsapp.CallModel.md), `index`: `number`, `obj`: [`CallModel`](whatsapp.CallModel.md)[]) => `unknown`, `thisArg?`: `any`) => `undefined` \| [`CallModel`](whatsapp.CallModel.md)

#### Type declaration

▸ <`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`CallModel`](whatsapp.CallModel.md)<`S`\> |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`this`: `void`, `value`: [`CallModel`](whatsapp.CallModel.md), `index`: `number`, `obj`: [`CallModel`](whatsapp.CallModel.md)[]) => value is S | find calls predicate once for each element of the array, in ascending  order, until it finds one where predicate returns true. If such an element is found, find  immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of  predicate. If it is not provided, undefined is used instead. |

##### Returns

`undefined` \| `S`

▸ (`predicate`, `thisArg?`): `undefined` \| [`CallModel`](whatsapp.CallModel.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: [`CallModel`](whatsapp.CallModel.md), `index`: `number`, `obj`: [`CallModel`](whatsapp.CallModel.md)[]) => `unknown` |
| `thisArg?` | `any` |

##### Returns

`undefined` \| [`CallModel`](whatsapp.CallModel.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[findFirst](whatsapp.Collection.md#findfirst)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:87](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L87)

___

### modelClass

• **modelClass**: [`CallModel`](whatsapp.CallModel.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[modelClass](whatsapp.Collection.md#modelclass)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:53](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L53)

___

### pendingOffers

• `Optional` **pendingOffers**: `any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/CallCollection.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/CallCollection.ts#L27)

___

### pendingVoipCapChecks

• `Optional` **pendingVoipCapChecks**: `any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/CallCollection.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/CallCollection.ts#L28)

___

### comparator

▪ `Static` **comparator**: (`a`: `any`, `b`: `any`) => `number`

#### Type declaration

▸ (`a`, `b`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

##### Returns

`number`

#### Inherited from

[Collection](whatsapp.Collection.md).[comparator](whatsapp.Collection.md#comparator)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L51)

___

### model

▪ `Static` **model**: [`CallModel`](whatsapp.CallModel.md)

#### Overrides

[Collection](whatsapp.Collection.md).[model](whatsapp.Collection.md#model)

#### Defined in

[packages/wa-js/src/whatsapp/collections/CallCollection.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/CallCollection.ts#L26)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Inherited from

Collection.length

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:57](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L57)

## Methods

### add

▸ **add**(`value`, `options?`): [`CallModel`](whatsapp.CallModel.md) \| [`CallModel`](whatsapp.CallModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CallModel`](whatsapp.CallModel.md) \| [`CallModel`](whatsapp.CallModel.md)[] \| [`WritableProperties`](../namespaces/util.md#writableproperties)<[`CallModel`](whatsapp.CallModel.md) \| [`CallModel`](whatsapp.CallModel.md)[]\> |
| `options?` | `Option` |

#### Returns

[`CallModel`](whatsapp.CallModel.md) \| [`CallModel`](whatsapp.CallModel.md)[]

#### Inherited from

[Collection](whatsapp.Collection.md).[add](whatsapp.Collection.md#add)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L59)

___

### assertGet

▸ **assertGet**(`e`): [`CallModel`](whatsapp.CallModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Stringable` |

#### Returns

[`CallModel`](whatsapp.CallModel.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[assertGet](whatsapp.Collection.md#assertget)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:75](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L75)

___

### at

▸ **at**(`position`): `undefined` \| [`CallModel`](whatsapp.CallModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |

#### Returns

`undefined` \| [`CallModel`](whatsapp.CallModel.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[at](whatsapp.Collection.md#at)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L77)

___

### bind

▸ **bind**(`eventName`, `listener`, `context?`): [`CallCollection`](whatsapp.CallCollection.md)

Alias of `on`

**`Alias`**

on

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `listener` | `Listener` |
| `context?` | `any` |

#### Returns

[`CallCollection`](whatsapp.CallCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[bind](whatsapp.Collection.md#bind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:99](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L99)

___

### cleanupPendingOffer

▸ **cleanupPendingOffer**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/CallCollection.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/CallCollection.ts#L31)

___

### emit

▸ **emit**(`eventName`, ...`args`): [`CallCollection`](whatsapp.CallCollection.md)

Alias of `trigger`

**`Alias`**

trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`CallCollection`](whatsapp.CallCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[emit](whatsapp.Collection.md#emit)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:120](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L120)

___

### get

▸ **get**(`e`): `undefined` \| [`CallModel`](whatsapp.CallModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Stringable` |

#### Returns

`undefined` \| [`CallModel`](whatsapp.CallModel.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[get](whatsapp.Collection.md#get)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L73)

___

### getModelsArray

▸ **getModelsArray**(): [`CallModel`](whatsapp.CallModel.md)[]

#### Returns

[`CallModel`](whatsapp.CallModel.md)[]

#### Inherited from

[Collection](whatsapp.Collection.md).[getModelsArray](whatsapp.Collection.md#getmodelsarray)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:97](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L97)

___

### handleQuery

▸ **handleQuery**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/CallCollection.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/CallCollection.ts#L29)

___

### head

▸ **head**(): `undefined` \| [`CallModel`](whatsapp.CallModel.md)

#### Returns

`undefined` \| [`CallModel`](whatsapp.CallModel.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[head](whatsapp.Collection.md#head)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L91)

___

### includes

▸ **includes**(`model`, `position?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`CallModel`](whatsapp.CallModel.md) |
| `position?` | `number` |

#### Returns

`boolean`

#### Inherited from

[Collection](whatsapp.Collection.md).[includes](whatsapp.Collection.md#includes)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:85](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L85)

___

### isListening

▸ **isListening**(`eventName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |

#### Returns

`boolean`

#### Inherited from

[Collection](whatsapp.Collection.md).[isListening](whatsapp.Collection.md#islistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:93](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L93)

___

### isModel

▸ **isModel**(`model`): model is CallModel

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `any` |

#### Returns

model is CallModel

#### Inherited from

[Collection](whatsapp.Collection.md).[isModel](whatsapp.Collection.md#ismodel)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:83](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L83)

___

### last

▸ **last**(): `undefined` \| [`CallModel`](whatsapp.CallModel.md)

#### Returns

`undefined` \| [`CallModel`](whatsapp.CallModel.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[last](whatsapp.Collection.md#last)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:93](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L93)

___

### listenTo

▸ **listenTo**(`context`, `eventName`, `listener?`): [`CallCollection`](whatsapp.CallCollection.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`CallCollection`](whatsapp.CallCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[listenTo](whatsapp.Collection.md#listento)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L77)

___

### listenToAndRun

▸ **listenToAndRun**(`context`, `eventName`, `listener?`): [`CallCollection`](whatsapp.CallCollection.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`CallCollection`](whatsapp.CallCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[listenToAndRun](whatsapp.Collection.md#listentoandrun)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L91)

___

### listenToOnce

▸ **listenToOnce**(`context`, `eventName`, `listener?`): [`CallCollection`](whatsapp.CallCollection.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`CallCollection`](whatsapp.CallCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[listenToOnce](whatsapp.Collection.md#listentoonce)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:84](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L84)

___

### off

▸ **off**(`eventName?`, `listener?`, `context?`): [`CallCollection`](whatsapp.CallCollection.md)

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`CallCollection`](whatsapp.CallCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Collection](whatsapp.Collection.md).[off](whatsapp.Collection.md#off)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L62)

___

### on

▸ **on**(`eventName`, `listener`, `context?`): [`CallCollection`](whatsapp.CallCollection.md)

Adds the listener function to the end of the listeners array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`CallCollection`](whatsapp.CallCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Collection](whatsapp.Collection.md).[on](whatsapp.Collection.md#on)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L42)

___

### once

▸ **once**(`eventName`, `listener`, `context?`): [`CallCollection`](whatsapp.CallCollection.md)

Adds a one-time listener function for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`CallCollection`](whatsapp.CallCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Collection](whatsapp.Collection.md).[once](whatsapp.Collection.md#once)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:52](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L52)

___

### processIncomingCall

▸ **processIncomingCall**(`e?`, `t?`, `r?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `any` |
| `r?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/CallCollection.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/CallCollection.ts#L30)

___

### remove

▸ **remove**(`value`, `options?`): [`CallModel`](whatsapp.CallModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CallModel`](whatsapp.CallModel.md) \| [`CallModel`](whatsapp.CallModel.md)[] |
| `options?` | `Object` |
| `options.index?` | `boolean` |
| `options.silent?` | `boolean` |

#### Returns

[`CallModel`](whatsapp.CallModel.md)[]

#### Inherited from

[Collection](whatsapp.Collection.md).[remove](whatsapp.Collection.md#remove)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L63)

___

### removeAllListeners

▸ **removeAllListeners**(): [`CallCollection`](whatsapp.CallCollection.md)

Removes all listeners.

#### Returns

[`CallCollection`](whatsapp.CallCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Collection](whatsapp.Collection.md).[removeAllListeners](whatsapp.Collection.md#removealllisteners)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:115](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L115)

___

### removeListener

▸ **removeListener**(`eventName?`, `listener?`, `context?`): [`CallCollection`](whatsapp.CallCollection.md)

Alias of `off`

**`Alias`**

off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`CallCollection`](whatsapp.CallCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[removeListener](whatsapp.Collection.md#removelistener)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:110](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L110)

___

### reorder

▸ **reorder**(`e`, `t`): [`CallModel`](whatsapp.CallModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `number` |
| `t` | `number` |

#### Returns

[`CallModel`](whatsapp.CallModel.md)[]

#### Inherited from

[Collection](whatsapp.Collection.md).[reorder](whatsapp.Collection.md#reorder)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:99](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L99)

___

### reorderMutate

▸ **reorderMutate**(`e`, `t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |
| `t` | `any` |

#### Returns

`void`

#### Inherited from

[Collection](whatsapp.Collection.md).[reorderMutate](whatsapp.Collection.md#reordermutate)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:71](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L71)

___

### replaceId

▸ **replaceId**(`e`, `t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |
| `t` | `any` |

#### Returns

`void`

#### Inherited from

[Collection](whatsapp.Collection.md).[replaceId](whatsapp.Collection.md#replaceid)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L69)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[Collection](whatsapp.Collection.md).[reset](whatsapp.Collection.md#reset)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L65)

___

### serialize

▸ **serialize**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[Collection](whatsapp.Collection.md).[serialize](whatsapp.Collection.md#serialize)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:79](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L79)

___

### set

▸ **set**(`value`, `options?`): [`CallModel`](whatsapp.CallModel.md) \| [`CallModel`](whatsapp.CallModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CallModel`](whatsapp.CallModel.md) \| [`CallModel`](whatsapp.CallModel.md)[] |
| `options?` | `Option` |

#### Returns

[`CallModel`](whatsapp.CallModel.md) \| [`CallModel`](whatsapp.CallModel.md)[]

#### Inherited from

[Collection](whatsapp.Collection.md).[set](whatsapp.Collection.md#set)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L61)

___

### setActiveCall

▸ **setActiveCall**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/CallCollection.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/CallCollection.ts#L32)

___

### sort

▸ **sort**(`options?`): [`CallCollection`](whatsapp.CallCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.silent?` | `boolean` |

#### Returns

[`CallCollection`](whatsapp.CallCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[sort](whatsapp.Collection.md#sort)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L67)

___

### stopListening

▸ **stopListening**(`context?`, `eventName?`, `listener?`): [`CallCollection`](whatsapp.CallCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `any` |
| `eventName?` | `Event` |
| `listener?` | `Listener` |

#### Returns

[`CallCollection`](whatsapp.CallCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[stopListening](whatsapp.Collection.md#stoplistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:70](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L70)

___

### toArray

▸ **toArray**(): [`CallModel`](whatsapp.CallModel.md)[]

#### Returns

[`CallModel`](whatsapp.CallModel.md)[]

#### Inherited from

[Collection](whatsapp.Collection.md).[toArray](whatsapp.Collection.md#toarray)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:95](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L95)

___

### toJSON

▸ **toJSON**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[Collection](whatsapp.Collection.md).[toJSON](whatsapp.Collection.md#tojson)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:81](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L81)

___

### trigger

▸ **trigger**(`eventName`, ...`args`): [`CallCollection`](whatsapp.CallCollection.md)

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`CallCollection`](whatsapp.CallCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Collection](whatsapp.Collection.md).[trigger](whatsapp.Collection.md#trigger)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L68)

___

### unbind

▸ **unbind**(`eventName?`, `listener?`, `context?`): [`CallCollection`](whatsapp.CallCollection.md)

Alias of `off`

**`Alias`**

off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`CallCollection`](whatsapp.CallCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[unbind](whatsapp.Collection.md#unbind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:105](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L105)

___

### where

▸ **where**(`ids`): [`CallModel`](whatsapp.CallModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `Stringable`[] |

#### Returns

[`CallModel`](whatsapp.CallModel.md)[]

#### Inherited from

[Collection](whatsapp.Collection.md).[where](whatsapp.Collection.md#where)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:89](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L89)
