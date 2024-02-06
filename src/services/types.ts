type MapToDto<T> = {
  -readonly [Property in keyof T]:
  T[Property] extends Date ? string :
  T[Property] extends (Date | undefined) ? (string | undefined) :
  T[Property]
};

export type DeliveryMeta = {
  cost?: number,
  estimatedDeliveryMs?: BigInt
};

export type DeliveryMetaDto = MapToDto<DeliveryMeta>;


export type OrderTracking = {
  id?: string,
  orderId: string,
  pointNumber: number,
  fromFacilityId: string,
  destinationId: string,
  destinationType: string,
  carrierId: string,
  status: string,
  deliveryCost: number,
  currency: string,
  currencyDecimalMultiplier: number,
  massControlValue?: number,
  massMeasure?: string,
  estimatedDeliveryAt?: Date,
  deliveredAt?: Date,
  createdAt?: Date,
  updatedAt?: Date
};

export type OrderTrackingDto = MapToDto<OrderTracking>;